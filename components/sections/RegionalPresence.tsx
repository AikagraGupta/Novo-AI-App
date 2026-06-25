"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";

import countries110m from "world-atlas/countries-110m.json";
import { cn } from "@/lib/cn";
import { fadeUp, revealContainer } from "@/lib/motion";

type CountryProperties = {
  name?: string;
};

type RegionalMarket = {
  id: string;
  label: string;
  countryName?: string;
  coordinates: [number, number];
  region: string;
  body: string;
};

const MAP_WIDTH = 960;
const MAP_HEIGHT = 500;
const MIN_ZOOM = 1;
const MAX_ZOOM = 2.3;
const INITIAL_MAP_VIEW = {
  scale: 1.28,
  x: -320,
  y: 18
};

const highlightedCountries = new Set([
  "Australia",
  "China",
  "France",
  "Germany",
  "India",
  "Indonesia",
  "Italy",
  "Japan",
  "Malaysia",
  "Philippines",
  "Spain",
  "Thailand",
  "United Kingdom",
  "Vietnam"
]);

const regionalMarkets: RegionalMarket[] = [
  {
    id: "hong-kong",
    label: "Hong Kong",
    countryName: "China",
    coordinates: [114.1694, 22.3193],
    region: "Science Park and regional ecosystem",
    body:
      "Regional operating context for multilingual claims, insurer workflows, and cross-border review."
  },
  {
    id: "singapore",
    label: "Singapore",
    coordinates: [103.8198, 1.3521],
    region: "Commercial and partner network",
    body:
      "A practical hub for regional insurance conversations, partners, and market expansion."
  },
  {
    id: "thailand",
    label: "Thailand",
    countryName: "Thailand",
    coordinates: [100.5018, 13.7563],
    region: "Claims operations proof point",
    body:
      "Tokio Marine Safety Insurance reference market for efficiency and customer support outcomes."
  },
  {
    id: "japan",
    label: "Japan",
    countryName: "Japan",
    coordinates: [139.6917, 35.6895],
    region: "Regional insurer and partner context",
    body:
      "Asia insurance ecosystem context across claims AI, cost control, and operational review."
  },
  {
    id: "europe",
    label: "Europe",
    countryName: "France",
    coordinates: [2.3522, 48.8566],
    region: "Cross-border claims context",
    body:
      "European insurer context through APRIL International and multi-market health claims review."
  }
];

const regionStats = [
  ["15", "countries live"],
  ["APAC", "core operating region"],
  ["EU", "cross-border context"]
] as const;

type MapView = typeof INITIAL_MAP_VIEW;

type DragState = {
  pointerId: number;
  x: number;
  y: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function constrainMapView(view: MapView) {
  const scale = clamp(view.scale, MIN_ZOOM, MAX_ZOOM);
  const xOverflow = MAP_WIDTH * scale - MAP_WIDTH;
  const yOverflow = MAP_HEIGHT * scale - MAP_HEIGHT;
  const inset = 72;

  return {
    scale,
    x: clamp(view.x, -xOverflow - inset, inset),
    y: clamp(view.y, -yOverflow - inset, inset)
  };
}

function getCountryCollection() {
  const topology = countries110m as unknown as {
    objects: {
      countries: unknown;
    };
  };

  const countries = feature(
    countries110m as unknown as Parameters<typeof feature>[0],
    topology.objects.countries as Parameters<typeof feature>[1]
  ) as FeatureCollection<Geometry, CountryProperties>;

  return countries;
}

export function RegionalPresence() {
  const mapShellRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const [activeMarketId, setActiveMarketId] = useState(regionalMarkets[0].id);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [mapView, setMapView] = useState<MapView>(INITIAL_MAP_VIEW);

  const activeMarket =
    regionalMarkets.find((market) => market.id === activeMarketId) ??
    regionalMarkets[0];

  const marketByCountryName = useMemo(() => {
    return new Map(
      regionalMarkets
        .filter((market) => market.countryName)
        .map((market) => [market.countryName as string, market])
    );
  }, []);

  const { countryPaths, markerPoints } = useMemo(() => {
    const countryCollection = getCountryCollection();
    const countries = countryCollection.features;
    const projection = geoNaturalEarth1().fitExtent(
      [
        [18, 18],
        [MAP_WIDTH - 18, MAP_HEIGHT - 18]
      ],
      countryCollection as unknown as Parameters<
        ReturnType<typeof geoNaturalEarth1>["fitExtent"]
      >[1]
    );
    const path = geoPath(projection);

    return {
      countryPaths: countries.map((country) => {
        const name = country.properties?.name ?? "";
        return {
          id: `${country.id ?? name}`,
          name,
          d: path(country) ?? "",
          highlighted: highlightedCountries.has(name)
        };
      }),
      markerPoints: regionalMarkets
        .map((market) => {
          const point = projection(market.coordinates);

          if (!point) {
            return null;
          }

          return { market, x: point[0], y: point[1] };
        })
        .filter(Boolean) as Array<{
        market: RegionalMarket;
        x: number;
        y: number;
      }>
    };
  }, []);

  const activeRegionName = hoveredCountry ?? activeMarket.label;

  const getSvgPointFromClient = useCallback((clientX: number, clientY: number) => {
    const rect = svgRef.current?.getBoundingClientRect();

    if (!rect) {
      return { x: MAP_WIDTH / 2, y: MAP_HEIGHT / 2 };
    }

    return {
      x: ((clientX - rect.left) / rect.width) * MAP_WIDTH,
      y: ((clientY - rect.top) / rect.height) * MAP_HEIGHT
    };
  }, []);

  function getSvgPoint(event: React.PointerEvent<SVGSVGElement>) {
    return getSvgPointFromClient(event.clientX, event.clientY);
  }

  const zoomMap = useCallback((delta: number, point = { x: MAP_WIDTH / 2, y: MAP_HEIGHT / 2 }) => {
    setMapView((current) => {
      const nextScale = clamp(current.scale + delta, MIN_ZOOM, MAX_ZOOM);
      const mapX = (point.x - current.x) / current.scale;
      const mapY = (point.y - current.y) / current.scale;

      return constrainMapView({
        scale: nextScale,
        x: point.x - mapX * nextScale,
        y: point.y - mapY * nextScale
      });
    });
  }, []);

  useEffect(() => {
    const mapShell = mapShellRef.current;

    if (!mapShell) {
      return;
    }

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      zoomMap(
        event.deltaY > 0 ? -0.1 : 0.1,
        getSvgPointFromClient(event.clientX, event.clientY)
      );
    };

    mapShell.addEventListener("wheel", handleWheel, {
      capture: true,
      passive: false
    });

    return () => {
      mapShell.removeEventListener("wheel", handleWheel, {
        capture: true
      });
    };
  }, [getSvgPointFromClient, zoomMap]);

  return (
    <motion.section
      id="regional-presence"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={revealContainer}
      className="section-shell"
    >
      <motion.div variants={fadeUp} className="mx-auto max-w-4xl text-center">
        <p className="section-label">Regional presence</p>
        <h2 className="text-balance font-display text-[2.35rem] leading-[0.96] text-foreground sm:text-[3.4rem] lg:text-[4.5rem]">
          Global reach. Regional claims context.
        </h2>
        <p className="mx-auto mt-5 max-w-[44rem] text-[0.98rem] leading-7 text-muted sm:text-[1.04rem]">
          Novo supports claims work across Asia-Pacific and Europe, with market
          context built into document handling, review paths, and cost-control
          signals.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-7 grid gap-4 sm:mt-9 sm:gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(20rem,0.62fr)]"
      >
        <div
          ref={mapShellRef}
          className="relative flex min-h-[19rem] overflow-hidden rounded-[24px] border border-gold/18 bg-navy p-2 pb-[4.55rem] shadow-[0_28px_70px_rgba(20,39,68,0.16)] sm:min-h-[30rem] sm:rounded-[28px] sm:p-5 lg:min-h-[38rem]"
          data-map-scroll-lock
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(181,138,69,0.18),transparent_28%),radial-gradient(circle_at_24%_62%,rgba(179,72,82,0.12),transparent_24%)]" />

          <div className="absolute right-3 top-3 z-20 flex overflow-hidden rounded-full border border-white/12 bg-white/[0.1] p-1 shadow-[0_14px_32px_rgba(0,0,0,0.18)] backdrop-blur-md sm:right-5 sm:top-5">
            <button
              type="button"
              aria-label="Zoom out map"
              className="grid h-9 w-9 place-items-center rounded-full text-lg font-semibold leading-none text-white/[0.9] transition hover:bg-white/[0.12] hover:text-white"
              onClick={() => zoomMap(-0.18)}
            >
              -
            </button>
            <button
              type="button"
              aria-label="Reset map view"
              className="grid h-9 min-w-14 place-items-center rounded-full px-3 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-white/[0.78] transition hover:bg-white/[0.12] hover:text-white"
              onClick={() => setMapView(INITIAL_MAP_VIEW)}
            >
              APAC
            </button>
            <button
              type="button"
              aria-label="Zoom in map"
              className="grid h-9 w-9 place-items-center rounded-full text-lg font-semibold leading-none text-white/[0.9] transition hover:bg-white/[0.12] hover:text-white"
              onClick={() => zoomMap(0.18)}
            >
              +
            </button>
          </div>

          <svg
            ref={svgRef}
            role="img"
            aria-label="Interactive map showing Novo regional presence across Asia-Pacific and Europe"
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            preserveAspectRatio="xMidYMid slice"
            className="relative z-10 h-full min-h-full w-full flex-1 cursor-grab overflow-hidden rounded-[20px] active:cursor-grabbing sm:rounded-[22px]"
            style={{ touchAction: "pan-y" }}
            onPointerDown={(event) => {
              if (event.pointerType === "touch") {
                return;
              }

              const point = getSvgPoint(event);
              dragRef.current = {
                pointerId: event.pointerId,
                x: point.x,
                y: point.y
              };
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              const currentDrag = dragRef.current;

              if (
                event.pointerType === "touch" ||
                !currentDrag ||
                currentDrag.pointerId !== event.pointerId
              ) {
                return;
              }

              const point = getSvgPoint(event);
              const dx = point.x - currentDrag.x;
              const dy = point.y - currentDrag.y;
              dragRef.current = { ...currentDrag, x: point.x, y: point.y };

              setMapView((current) =>
                constrainMapView({
                  ...current,
                  x: current.x + dx,
                  y: current.y + dy
                })
              );
            }}
            onPointerUp={(event) => {
              if (dragRef.current?.pointerId === event.pointerId) {
                dragRef.current = null;
              }
            }}
            onPointerCancel={(event) => {
              if (dragRef.current?.pointerId === event.pointerId) {
                dragRef.current = null;
              }
            }}
          >
            <defs>
              <filter id="regional-marker-glow" x="-120%" y="-120%" width="340%" height="340%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feColorMatrix
                  in="blur"
                  type="matrix"
                  values="0 0 0 0 0.710 0 0 0 0 0.541 0 0 0 0 0.271 0 0 0 0.75 0"
                />
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <rect width={MAP_WIDTH} height={MAP_HEIGHT} rx="28" fill="transparent" />

            <g transform={`translate(${mapView.x} ${mapView.y}) scale(${mapView.scale})`}>
              {countryPaths.map((country) => {
                const linkedMarket = marketByCountryName.get(country.name);
                const isFocused =
                  country.highlighted &&
                  (hoveredCountry === country.name ||
                    activeMarket.countryName === country.name);

                return (
                  <path
                    key={country.id}
                    d={country.d}
                    tabIndex={country.highlighted ? 0 : -1}
                    aria-label={country.highlighted ? country.name : undefined}
                    className={cn(
                      "outline-none transition-[fill,opacity,stroke,filter] duration-300",
                      country.highlighted
                        ? "cursor-pointer"
                        : "pointer-events-none"
                    )}
                    fill={
                      isFocused
                        ? "rgba(181,138,69,0.92)"
                        : country.highlighted
                          ? "rgba(181,138,69,0.56)"
                          : "rgba(255,253,248,0.18)"
                    }
                    stroke={
                      country.highlighted
                        ? "rgba(255,253,248,0.42)"
                        : "rgba(255,253,248,0.08)"
                    }
                    strokeWidth={isFocused ? 1 : 0.65}
                    opacity={country.highlighted ? 1 : 0.76}
                    style={{
                      filter: isFocused
                        ? "drop-shadow(0 0 12px rgba(181,138,69,0.34))"
                        : undefined
                    }}
                    onMouseEnter={() => {
                      if (country.highlighted) {
                        setHoveredCountry(country.name);
                      }
                    }}
                    onMouseLeave={() => setHoveredCountry(null)}
                    onFocus={() => {
                      if (country.highlighted) {
                        setHoveredCountry(country.name);
                      }
                    }}
                    onBlur={() => setHoveredCountry(null)}
                    onPointerDown={(event) => {
                      if (!country.highlighted) {
                        return;
                      }

                      event.stopPropagation();
                      setHoveredCountry(country.name);

                      if (linkedMarket) {
                        setActiveMarketId(linkedMarket.id);
                      }
                    }}
                    onClick={() => {
                      if (linkedMarket) {
                        setActiveMarketId(linkedMarket.id);
                      }
                    }}
                  />
                );
              })}

              {markerPoints.map(({ market, x, y }) => {
                const isActive = market.id === activeMarket.id;

                return (
                  <g
                    key={market.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`${market.label} regional presence`}
                    transform={`translate(${x} ${y})`}
                    className="cursor-pointer outline-none"
                    onPointerDown={(event) => {
                      event.stopPropagation();
                      setHoveredCountry(null);
                      setActiveMarketId(market.id);
                    }}
                    onMouseEnter={() => {
                      setHoveredCountry(null);
                      setActiveMarketId(market.id);
                    }}
                    onFocus={() => {
                      setHoveredCountry(null);
                      setActiveMarketId(market.id);
                    }}
                    onClick={() => {
                      setHoveredCountry(null);
                      setActiveMarketId(market.id);
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setHoveredCountry(null);
                        setActiveMarketId(market.id);
                      }
                    }}
                  >
                    <motion.circle
                      animate={{ r: isActive ? 18 : 13 }}
                      transition={{ type: "spring", stiffness: 260, damping: 24 }}
                      fill="rgba(181,138,69,0.16)"
                      stroke="rgba(181,138,69,0.24)"
                      strokeWidth="1"
                    />
                    <motion.circle
                      animate={{ r: isActive ? 7 : 5.5 }}
                      transition={{ type: "spring", stiffness: 260, damping: 24 }}
                      fill="#fffdf8"
                      stroke="#b58a45"
                      strokeWidth="3"
                      filter="url(#regional-marker-glow)"
                    />
                    {isActive ? (
                      <text
                        x="13"
                        y="-12"
                        fill="#fffdf8"
                        stroke="rgba(20,39,68,0.42)"
                        strokeWidth="3"
                        paintOrder="stroke fill"
                        fontSize="18"
                        fontWeight="700"
                        letterSpacing="0"
                      >
                        {market.label}
                      </text>
                    ) : null}
                  </g>
                );
              })}
            </g>
          </svg>

          <div className="absolute inset-x-3 bottom-3 z-30 grid grid-cols-2 gap-2 sm:hidden">
            {regionalMarkets.map((market) => {
              const isActive = market.id === activeMarket.id;

              return (
                <button
                  key={market.id}
                  type="button"
                  className={cn(
                    "rounded-full border px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.1em] shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur-md transition-colors",
                    isActive
                      ? "border-white/40 bg-white text-navy"
                      : "border-white/12 bg-white/[0.12] text-white/78"
                  )}
                  onClick={() => {
                    setHoveredCountry(null);
                    setActiveMarketId(market.id);
                  }}
                >
                  {market.label}
                </button>
              );
            })}
          </div>

          <div className="pointer-events-none absolute bottom-5 left-5 z-20 hidden max-w-[calc(100%-2.5rem)] flex-wrap gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-white/[0.68] sm:bottom-7 sm:left-7 sm:flex">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-3 py-2 backdrop-blur-md">
              <span className="h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_0_5px_rgba(181,138,69,0.28)]" />
              Market anchors
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.08] px-3 py-2 backdrop-blur-md">
              <span className="h-2.5 w-4 rounded-full bg-gold/70" />
              Broader footprint
            </span>
          </div>
        </div>

        <div className="grid gap-4">
          <article className="glass-panel p-6 lg:p-7">
            <p className="copy-kicker">{activeRegionName}</p>
            <h3 className="mt-4 max-w-[12ch] font-display text-[2.45rem] leading-[0.95] text-foreground">
              {activeMarket.label}
            </h3>
            <p className="mt-4 text-[0.86rem] font-semibold uppercase tracking-[0.14em] text-gold">
              {activeMarket.region}
            </p>
            <p className="mt-4 text-[0.95rem] leading-7 text-foreground/66">
              {activeMarket.body}
            </p>
          </article>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {regionStats.map(([value, label]) => (
              <article
                key={label}
                className="rounded-[18px] border border-gold/16 bg-panel/82 px-5 py-4 shadow-[0_14px_34px_rgba(20,39,68,0.06)]"
              >
                <p className="font-display text-3xl leading-none text-foreground">
                  {value}
                </p>
                <p className="mt-2 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-foreground/48">
                  {label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const RegionalPresence = dynamic(
  () =>
    import("@/components/sections/RegionalPresence").then(
      (module) => module.RegionalPresence
    ),
  { ssr: false }
);

function RegionalPresencePlaceholder() {
  return (
    <section id="regional-presence" className="section-shell">
      <div className="mx-auto max-w-4xl text-center">
        <p className="section-label">Regional presence</p>
        <h2 className="text-balance font-display text-[2.35rem] leading-[0.96] text-foreground sm:text-[3.4rem] lg:text-[4.5rem]">
          Global reach. Regional claims context.
        </h2>
        <p className="mx-auto mt-5 max-w-[44rem] text-[0.98rem] leading-7 text-muted sm:text-[1.04rem]">
          Novo supports claims work across Asia-Pacific and Europe, with market
          context built into document handling, review paths, and cost-control
          signals.
        </p>
      </div>

      <div className="mt-9 grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(20rem,0.62fr)]">
        <div className="relative min-h-[19rem] overflow-hidden rounded-[28px] border border-gold/18 bg-navy p-3 shadow-[0_28px_70px_rgba(20,39,68,0.16)] sm:min-h-[30rem] sm:p-5 lg:min-h-[38rem]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(181,138,69,0.18),transparent_28%),radial-gradient(circle_at_24%_62%,rgba(179,72,82,0.12),transparent_24%)]" />
          <div className="absolute inset-5 rounded-[22px] bg-white/[0.05]" />
          <div className="absolute left-[52%] top-[30%] h-5 w-5 rounded-full bg-white shadow-[0_0_0_10px_rgba(181,138,69,0.24)]" />
          <div className="absolute left-[66%] top-[42%] h-4 w-4 rounded-full bg-white shadow-[0_0_0_8px_rgba(181,138,69,0.2)]" />
          <div className="absolute left-[72%] top-[34%] h-4 w-4 rounded-full bg-white shadow-[0_0_0_8px_rgba(181,138,69,0.2)]" />
        </div>

        <div className="grid gap-4">
          <article className="glass-panel p-6 lg:p-7">
            <p className="copy-kicker">Market anchors</p>
            <h3 className="mt-4 max-w-[12ch] font-display text-[2.45rem] leading-[0.95] text-foreground">
              APAC and Europe
            </h3>
            <p className="mt-4 text-[0.95rem] leading-7 text-foreground/66">
              Interactive regional map loads as this section comes into view.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function RegionalPresenceDeferred() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || shouldLoad) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: isMobile ? "520px 0px" : "1200px 0px" }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoad]);

  return (
    <div ref={sectionRef}>
      {shouldLoad ? <RegionalPresence /> : <RegionalPresencePlaceholder />}
    </div>
  );
}

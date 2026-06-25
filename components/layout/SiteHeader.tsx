"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { BrandLogo } from "@/components/layout/BrandLogo";
import { cn } from "@/lib/cn";
import { PLATFORM_DETAIL_PAGES } from "@/lib/homepageContent";

const navigationGroups = [
  {
    label: "Platform",
    href: "/platform",
    description: "Product overview and workflow pages",
    items: [
      { href: "/platform", label: "Overview" },
      ...PLATFORM_DETAIL_PAGES.map((page) => ({
        href: `/platform/${page.slug}`,
        label: page.title
      })),
      { href: "/platform#workflow", label: "Workflow demo" },
      { href: "/platform#workflow-coverage", label: "Workflow coverage" }
    ]
  },
  {
    label: "Proof",
    href: "/#proof",
    description: "Results, testimonials, and regional context",
    items: [
      { href: "/#proof", label: "Results" },
      { href: "/#testimonials", label: "Testimonials" },
      { href: "/#regional-presence", label: "Regional presence" }
    ]
  },
  {
    label: "Resources",
    href: "/resources",
    description: "News, events, media, and public references",
    items: [
      { href: "/resources", label: "Resources overview" },
      { href: "/resources#news-events", label: "News and events" },
      { href: "/#news-updates", label: "Homepage updates" }
    ]
  },
  {
    label: "Company",
    href: "/about",
    description: "Mission, founders, partners, and company details",
    items: [
      { href: "/about#mission", label: "Mission" },
      { href: "/about#founders", label: "Founders" },
      { href: "/about#partners", label: "Partners" },
      { href: "/about#contact-detail", label: "Company details" }
    ]
  }
] as const;

function getPath(href: string) {
  return href.split("#")[0] || "/";
}

export function SiteHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [pastHeroThreshold, setPastHeroThreshold] = useState(false);
  const [openDesktopGroup, setOpenDesktopGroup] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState("Platform");

  const activeGroup =
    navigationGroups.find((group) => {
      const groupPath = getPath(group.href);

      if (groupPath === "/") {
        return pathname === "/";
      }

      return pathname === groupPath || pathname.startsWith(`${groupPath}/`);
    }) ?? null;
  const openDesktopGroupData =
    navigationGroups.find((group) => group.label === openDesktopGroup) ?? null;

  useEffect(() => {
    setOpenDesktopGroup(null);
    setMobileOpen(false);
    setOpenMobileGroup(activeGroup?.label ?? "Platform");
  }, [activeGroup?.label, pathname]);

  useEffect(() => {
    if (!mobileOpen && !openDesktopGroup) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDesktopGroup(null);
        setMobileOpen(false);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;

      if (target && !headerRef.current?.contains(target)) {
        setOpenDesktopGroup(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [mobileOpen, openDesktopGroup]);

  useEffect(() => {
    let rafId = 0;

    const updateHeader = () => {
      rafId = 0;
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 24);
      setPastHeroThreshold(scrollY > window.innerHeight * 0.72);
    };

    const handleScroll = () => {
      if (rafId !== 0) {
        return;
      }

      rafId = window.requestAnimationFrame(updateHeader);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div
        className={cn(
          "pointer-events-auto mx-auto flex w-full max-w-[1120px] items-center justify-between rounded-full border px-3 py-2 transition-all duration-300 sm:px-5",
          isScrolled || mobileOpen || openDesktopGroup
            ? "bg-panel shadow-[0_18px_48px_rgba(20,39,68,0.1)]"
            : "bg-panel/86 backdrop-blur-md",
          pastHeroThreshold || mobileOpen || openDesktopGroup
            ? "border-gold/25"
            : "border-foreground/8"
        )}
      >
        <BrandLogo className="shrink-0" />

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navigationGroups.map((group) => {
            const isActive = activeGroup?.label === group.label;
            const isOpen = openDesktopGroup === group.label;

            return (
              <button
                key={group.label}
                type="button"
                aria-expanded={isOpen}
                aria-controls="site-desktop-menu"
                className={cn(
                  "interactive-pill inline-flex min-h-10 items-center gap-1.5 rounded-full px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-200",
                  isActive || isOpen
                    ? "bg-gold/12 text-foreground"
                    : "text-foreground/58 hover:bg-gold/8 hover:text-foreground"
                )}
                onClick={() => {
                  setMobileOpen(false);
                  setOpenDesktopGroup((current) =>
                    current === group.label ? null : group.label
                  );
                }}
              >
                <span>{group.label}</span>
                <span className="text-[0.7rem] leading-none text-gold">
                  {isOpen ? "-" : "+"}
                </span>
              </button>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/#contact"
            className="button-primary interactive-pill hidden min-h-10 px-4 py-2 text-[0.62rem] sm:inline-flex"
            onClick={() => {
              setOpenDesktopGroup(null);
              setMobileOpen(false);
            }}
          >
            Book a Demo
          </Link>

          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="site-mobile-menu"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className={cn(
              "interactive-pill inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] lg:hidden",
              mobileOpen
                ? "border-gold/32 bg-gold/12 text-foreground"
                : "border-gold/18 bg-panel text-foreground/68"
            )}
            onClick={() => {
              setOpenDesktopGroup(null);
              setMobileOpen((current) => !current);
            }}
          >
            <span className="relative h-4 w-4">
              <span
                className={cn(
                  "absolute left-0 top-1/2 block h-0.5 w-4 rounded-full bg-current transition-transform duration-200",
                  mobileOpen
                    ? "translate-y-[-50%] rotate-45"
                    : "translate-y-[-0.38rem]"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 block h-0.5 w-4 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200",
                  mobileOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 block h-0.5 w-4 rounded-full bg-current transition-transform duration-200",
                  mobileOpen
                    ? "translate-y-[-50%] -rotate-45"
                    : "translate-y-[0.28rem]"
                )}
              />
            </span>
            <span>{mobileOpen ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      {openDesktopGroupData ? (
        <div
          id="site-desktop-menu"
          className="pointer-events-auto mx-auto mt-2 hidden w-full max-w-[1120px] justify-center lg:flex"
        >
          <div className="w-[min(92vw,36rem)] rounded-[22px] border border-gold/18 bg-panel p-3 shadow-[0_22px_54px_rgba(20,39,68,0.14)]">
            <div className="border-b border-gold/12 px-3 pb-3">
              <Link
                href={openDesktopGroupData.href}
                className="text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-gold"
                onClick={() => setOpenDesktopGroup(null)}
              >
                {openDesktopGroupData.label}
              </Link>
              <p className="mt-2 text-sm leading-6 text-foreground/58">
                {openDesktopGroupData.description}
              </p>
            </div>

            <div className="mt-2 grid gap-1 sm:grid-cols-2">
              {openDesktopGroupData.items.map((item) => {
                const itemPath = getPath(item.href);
                const isItemActive =
                  itemPath !== "/" &&
                  pathname === itemPath &&
                  !item.href.includes("#");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block min-h-11 rounded-[14px] px-3 py-3 text-[0.84rem] font-medium leading-5 transition-colors duration-200 hover:bg-gold/10 hover:text-foreground",
                      isItemActive
                        ? "bg-gold/10 text-foreground"
                        : "text-foreground/64"
                    )}
                    onClick={() => setOpenDesktopGroup(null)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <div
          id="site-mobile-menu"
          className="pointer-events-auto mx-auto mt-2 max-h-[calc(100svh-5.75rem)] w-full max-w-[1120px] overflow-y-auto rounded-[24px] border border-gold/18 bg-panel p-3 shadow-[0_24px_58px_rgba(20,39,68,0.16)] lg:hidden"
        >
          <nav aria-label="Mobile navigation" className="grid gap-2">
            {navigationGroups.map((group) => {
              const isOpen = openMobileGroup === group.label;
              const isActive = activeGroup?.label === group.label;
              const mobileItems = [
                { href: group.href, label: `${group.label} overview` },
                ...group.items.filter((item) => item.href !== group.href)
              ];

              return (
                <section
                  key={group.label}
                  className={cn(
                    "rounded-[18px] border transition-colors duration-200",
                    isActive
                      ? "border-gold/24 bg-gold/10"
                      : "border-gold/10 bg-muted-surface/42"
                  )}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`mobile-nav-${group.label.toLowerCase()}`}
                    className="flex min-h-14 w-full items-center gap-2 px-3 py-2 text-left"
                    onClick={() =>
                      setOpenMobileGroup((current) =>
                        current === group.label ? "" : group.label
                      )
                    }
                  >
                    <span className="flex-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-gold">
                      {group.label}
                    </span>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/18 bg-panel text-lg leading-none text-foreground/72">
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>

                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                    aria-hidden={!isOpen}
                  >
                    <div
                      id={`mobile-nav-${group.label.toLowerCase()}`}
                      className={cn(
                        "grid gap-1 overflow-hidden border-t border-gold/12 px-3 pt-2",
                        isOpen ? "pb-3" : "pb-0"
                      )}
                    >
                      <p className="px-2 py-1 text-sm leading-6 text-foreground/54">
                        {group.description}
                      </p>
                      {mobileItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex min-h-11 items-center rounded-[14px] px-3 py-2 text-sm font-medium leading-5 text-foreground/68 transition-colors duration-200 hover:bg-panel hover:text-foreground"
                          tabIndex={isOpen ? undefined : -1}
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })}

            <Link
              href="/#contact"
              className="button-primary interactive-pill mt-1 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

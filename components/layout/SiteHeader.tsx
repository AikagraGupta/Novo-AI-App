"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

const navigationItems = [
  { href: "#partners", label: "Partners" },
  { href: "#platform", label: "Fraud Detection" },
  { href: "#workflow", label: "Provider Intelligence" },
  { href: "#contact", label: "Let's Talk" }
];

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [pastHeroThreshold, setPastHeroThreshold] = useState(false);

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
    <header className="pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "pointer-events-auto mx-auto flex max-w-page items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-6",
          isScrolled
            ? "bg-black/45 shadow-[0_16px_48px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
            : "bg-transparent",
          pastHeroThreshold ? "border-white/12" : "border-transparent"
        )}
      >
        <Link
          href="/"
          data-cursor="cta"
          data-cursor-label="Novo"
          data-cursor-tone="white"
          className="interactive-pill rounded-full px-2 py-1 font-display text-sm uppercase tracking-[0.34em] text-white/88 transition-colors hover:text-white"
        >
          Novo AI
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-cursor="cta"
              data-cursor-label={item.label}
              data-cursor-tone="white"
              className="interactive-pill rounded-full px-2 py-1 text-[11px] uppercase tracking-[0.32em] text-white/58 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          data-cursor="cta"
          data-cursor-label="Talk"
          data-cursor-tone="crimson"
          className="interactive-pill inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.26em] text-white transition-all duration-300 hover:border-white/20 hover:bg-white/14"
        >
          Book a Demo
        </Link>
      </div>
    </header>
  );
}

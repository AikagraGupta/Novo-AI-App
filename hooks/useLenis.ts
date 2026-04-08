"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1,
      syncTouch: false,
      lerp: 0.085,
      easing: (value) => 1 - Math.pow(1 - value, 3)
    });

    lenisRef.current = lenis;

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    };

    rafId = window.requestAnimationFrame(raf);

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');

      if (!anchor) {
        return;
      }

      const href = anchor.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const element = document.querySelector<HTMLElement>(href);

      if (!element) {
        return;
      }

      event.preventDefault();
      lenis.scrollTo(element, {
        offset: -96,
        duration: 1.15
      });
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);

      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }

      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}

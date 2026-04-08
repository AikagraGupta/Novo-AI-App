"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

type CursorVariant = "default" | "cta" | "card" | "input";
type CursorTone = "white" | "crimson" | "muted";

const CURSOR_VARIANTS: Record<
  CursorVariant,
  { ringSize: number; coreSize: number; ringClassName: string; coreClassName: string }
> = {
  default: {
    ringSize: 34,
    coreSize: 8,
    ringClassName:
      "border-white/88 bg-white/[0.03] shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset,0_0_32px_rgba(255,255,255,0.12)]",
    coreClassName: "bg-white"
  },
  cta: {
    ringSize: 52,
    coreSize: 10,
    ringClassName:
      "border-[#ffd7dd]/90 bg-[#ff5a6b]/10 shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset,0_0_48px_rgba(255,90,107,0.22)]",
    coreClassName: "bg-[#fff3f5]"
  },
  card: {
    ringSize: 44,
    coreSize: 9,
    ringClassName:
      "border-white/72 bg-white/[0.045] shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_0_36px_rgba(255,255,255,0.1)]",
    coreClassName: "bg-white/96"
  },
  input: {
    ringSize: 40,
    coreSize: 9,
    ringClassName:
      "border-[#ffb7bf]/88 bg-[#ff5a6b]/12 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_0_42px_rgba(255,90,107,0.18)]",
    coreClassName: "bg-[#fff2f4]"
  }
};

const TONE_CLASS_NAMES: Record<CursorTone, string> = {
  white: "",
  crimson: "saturate-150",
  muted: "opacity-[0.96]"
};

export function AdaptiveCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetPointRef = useRef({ x: 0, y: 0 });
  const renderedPointRef = useRef({ x: 0, y: 0 });
  const rafIdRef = useRef(0);
  const variantRef = useRef<CursorVariant>("default");
  const toneRef = useRef<CursorTone>("white");
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [tone, setTone] = useState<CursorTone>("white");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateEnabled = () => {
      const nextEnabled = mediaQuery.matches;
      setEnabled(nextEnabled);
      document.body.classList.toggle("cursor-enhanced", nextEnabled);
    };

    updateEnabled();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateEnabled);
      return () => mediaQuery.removeEventListener("change", updateEnabled);
    }

    mediaQuery.addListener(updateEnabled);
    return () => mediaQuery.removeListener(updateEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const step = () => {
      renderedPointRef.current.x +=
        (targetPointRef.current.x - renderedPointRef.current.x) * 0.3;
      renderedPointRef.current.y +=
        (targetPointRef.current.y - renderedPointRef.current.y) * 0.3;

      const cursor = cursorRef.current;

      if (cursor) {
        cursor.style.transform = `translate3d(${renderedPointRef.current.x}px, ${renderedPointRef.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafIdRef.current = window.requestAnimationFrame(step);
    };

    rafIdRef.current = window.requestAnimationFrame(step);

    return () => {
      if (rafIdRef.current !== 0) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = 0;
      }
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const updateCursorState = (event: MouseEvent) => {
      const hoveredElement = document
        .elementFromPoint(event.clientX, event.clientY)
        ?.closest<HTMLElement>("[data-cursor], a, button, input, label, .interactive-card, .partner-tile");

      const nextVariant =
        (hoveredElement?.dataset.cursor as CursorVariant | undefined) ??
        (hoveredElement?.matches("input, label")
          ? "input"
          : hoveredElement?.matches("a, button")
            ? "cta"
            : hoveredElement?.classList.contains("interactive-card") ||
                hoveredElement?.classList.contains("partner-tile")
              ? "card"
              : "default");

      const scopedElement = hoveredElement?.closest<HTMLElement>("[data-cursor-tone]");
      const nextTone =
        (hoveredElement?.dataset.cursorTone as CursorTone | undefined) ??
        (scopedElement?.dataset.cursorTone as CursorTone | undefined) ??
        "white";

      if (variantRef.current !== nextVariant) {
        variantRef.current = nextVariant;
        setVariant(nextVariant);
      }

      if (toneRef.current !== nextTone) {
        toneRef.current = nextTone;
        setTone(nextTone);
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      targetPointRef.current = { x: event.clientX, y: event.clientY };

      if (!visible) {
        renderedPointRef.current = { x: event.clientX, y: event.clientY };
        setVisible(true);
      }

      updateCursorState(event);
    };

    const handleMouseLeave = () => {
      setVisible(false);

      if (variantRef.current !== "default") {
        variantRef.current = "default";
        setVariant("default");
      }

      if (toneRef.current !== "white") {
        toneRef.current = "white";
        setTone("white");
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [enabled, visible]);

  if (!enabled) {
    return null;
  }

  const { ringSize, coreSize, ringClassName, coreClassName } =
    CURSOR_VARIANTS[variant];

  return (
    <div
      ref={cursorRef}
      className={cn(
        "cursor-orb hidden -translate-x-1/2 -translate-y-1/2 md:block",
        visible ? "opacity-100" : "opacity-0"
      )}
    >
      <div
        className={cn(
          "relative rounded-full border transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out",
          ringClassName,
          TONE_CLASS_NAMES[tone]
        )}
        style={{ width: ringSize, height: ringSize }}
      >
        <div
          className={cn(
            "absolute left-1/2 top-1/2 rounded-full transition-[width,height,background-color] duration-200 ease-out",
            coreClassName
          )}
          style={{
            width: coreSize,
            height: coreSize,
            transform: "translate(-50%, -50%)"
          }}
        />
      </div>
    </div>
  );
}

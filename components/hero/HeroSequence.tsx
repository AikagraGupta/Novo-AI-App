"use client";

import {
  useMotionValueEvent,
  useScroll,
  useSpring,
  type MotionValue
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useImageSequence } from "@/hooks/useImageSequence";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { DEFAULT_SEQUENCE_CONFIG } from "@/lib/loadImageSequence";

import { HeroCanvas } from "./HeroCanvas";
import { HeroCopy } from "./HeroCopy";

const HERO_SEQUENCE_CONFIG = {
  basePath: DEFAULT_SEQUENCE_CONFIG.basePath,
  fallback: DEFAULT_SEQUENCE_CONFIG,
} as const;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function useFrameProgress(
  progress: MotionValue<number>,
  frameCount: number,
  enabled: boolean
) {
  const currentFrameIndexRef = useRef(0);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);

  useMotionValueEvent(progress, "change", (latestValue) => {
    if (!enabled) {
      return;
    }

    const nextFrameIndex = Math.round(clamp(latestValue, 0, 1) * (frameCount - 1));

    if (nextFrameIndex === currentFrameIndexRef.current) {
      return;
    }

    currentFrameIndexRef.current = nextFrameIndex;
    setCurrentFrameIndex(nextFrameIndex);
  });

  useEffect(() => {
    currentFrameIndexRef.current = 0;
    setCurrentFrameIndex(0);
  }, [frameCount]);

  return currentFrameIndex;
}

function useSmoothedFrameIndex(
  targetFrameIndex: number,
  frameCount: number,
  enabled: boolean
) {
  const targetFrameIndexRef = useRef(targetFrameIndex);
  const animationFrameRef = useRef(0);
  const smoothedValueRef = useRef(targetFrameIndex);
  const [smoothedFrameIndex, setSmoothedFrameIndex] = useState(targetFrameIndex);

  useEffect(() => {
    targetFrameIndexRef.current = targetFrameIndex;
  }, [targetFrameIndex]);

  useEffect(() => {
    if (!enabled) {
      smoothedValueRef.current = targetFrameIndex;
      setSmoothedFrameIndex(targetFrameIndex);
      return;
    }

    const animate = () => {
      const target = targetFrameIndexRef.current;
      const delta = target - smoothedValueRef.current;

      if (Math.abs(delta) < 0.015) {
        smoothedValueRef.current = target;
      } else {
        smoothedValueRef.current += delta * 0.18;
      }

      const nextFrameIndex = Math.round(
        clamp(smoothedValueRef.current, 0, frameCount - 1)
      );

      setSmoothedFrameIndex((currentFrameIndex) =>
        currentFrameIndex === nextFrameIndex ? currentFrameIndex : nextFrameIndex
      );

      if (Math.abs(target - smoothedValueRef.current) >= 0.015) {
        animationFrameRef.current = window.requestAnimationFrame(animate);
      } else {
        animationFrameRef.current = 0;
      }
    };

    if (animationFrameRef.current === 0) {
      animationFrameRef.current = window.requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameRef.current !== 0) {
        window.cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = 0;
      }
    };
  }, [enabled, frameCount, targetFrameIndex]);

  useEffect(() => {
    smoothedValueRef.current = targetFrameIndex;
    setSmoothedFrameIndex(targetFrameIndex);
  }, [frameCount]);

  return smoothedFrameIndex;
}

export function HeroSequence() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const {
    config,
    getNearestLoadedFrame,
    posterFrameSrc,
    preloadFrame,
    readyFrameCount,
    status,
    version
  } =
    useImageSequence(HERO_SEQUENCE_CONFIG);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2
  });

  const shouldUseStaticFallback = prefersReducedMotion;
  const targetFrameIndex = useFrameProgress(
    scrollYProgress,
    config.frameCount,
    !shouldUseStaticFallback
  );
  const currentFrameIndex = useSmoothedFrameIndex(
    targetFrameIndex,
    config.frameCount,
    !shouldUseStaticFallback
  );
  const currentFrame = getNearestLoadedFrame(currentFrameIndex, 10);

  useEffect(() => {
    if (status === "error") {
      return;
    }

    if (shouldUseStaticFallback) {
      return;
    }

    const preloadRadiusBehind = 10;
    const preloadRadiusAhead = 18;
    const startFrame = Math.max(targetFrameIndex - preloadRadiusBehind, 0);
    const endFrame = Math.min(
      targetFrameIndex + preloadRadiusAhead,
      config.frameCount - 1
    );

    for (let frameIndex = startFrame; frameIndex <= endFrame; frameIndex += 1) {
      preloadFrame(frameIndex);
    }
  }, [config.frameCount, preloadFrame, shouldUseStaticFallback, status, targetFrameIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[420svh] md:h-[520svh] lg:h-[620svh]"
      aria-labelledby="hero-heading"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(248,252,255,0.16),transparent_12%),radial-gradient(circle_at_50%_45%,rgba(230,62,83,0.32),transparent_28%),linear-gradient(180deg,#050505_0%,#050505_100%)]" />
        <div className="hero-grid absolute inset-0 opacity-45" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.44)_100%)]" />

        <div className="absolute inset-0">
          {shouldUseStaticFallback ? (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-90"
              style={{ backgroundImage: `url(${posterFrameSrc})` }}
            />
          ) : (
            <HeroCanvas
              frame={currentFrame}
              fallbackSrc={posterFrameSrc}
              className="opacity-95"
            />
          )}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(248,252,255,0.18),transparent_10%),radial-gradient(circle_at_50%_47%,rgba(255,90,107,0.22),transparent_24%)] mix-blend-screen" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.92)_0%,rgba(5,5,5,0.62)_28%,rgba(5,5,5,0.18)_56%,rgba(5,5,5,0.62)_100%)]" />

        <HeroCopy progress={progress} sequenceReady={readyFrameCount > 0 || version > 0} />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
      </div>
    </section>
  );
}

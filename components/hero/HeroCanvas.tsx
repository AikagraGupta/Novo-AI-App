"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";
import { loadSequenceFrame } from "@/lib/loadImageSequence";

type HeroCanvasProps = {
  className?: string;
  frame?: HTMLImageElement;
  fallbackSrc: string;
};

function getImageDimensions(image: HTMLImageElement) {
  return {
    width: image.naturalWidth || image.width,
    height: image.naturalHeight || image.height
  };
}

export function HeroCanvas({ className, frame, fallbackSrc }: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fallbackFrameRef = useRef<HTMLImageElement | null>(null);
  const lastRenderedFrameRef = useRef<HTMLImageElement | null>(null);
  const [fallbackVersion, setFallbackVersion] = useState(0);

  const drawFrame = useCallback((source: HTMLImageElement | null) => {
    const canvas = canvasRef.current;

    if (!canvas || !source) {
      return;
    }

    const rect = canvas.getBoundingClientRect();

    if (rect.width === 0 || rect.height === 0) {
      return;
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const nextWidth = Math.round(rect.width * dpr);
    const nextHeight = Math.round(rect.height * dpr);

    if (canvas.width !== nextWidth || canvas.height !== nextHeight) {
      canvas.width = nextWidth;
      canvas.height = nextHeight;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const { width: sourceWidth, height: sourceHeight } = getImageDimensions(source);
    const scale = Math.max(rect.width / sourceWidth, rect.height / sourceHeight);
    const drawWidth = sourceWidth * scale;
    const drawHeight = sourceHeight * scale;
    const offsetX = (rect.width - drawWidth) / 2;
    const offsetY = (rect.height - drawHeight) / 2;

    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    context.clearRect(0, 0, rect.width, rect.height);
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(source, offsetX, offsetY, drawWidth, drawHeight);
  }, []);

  useEffect(() => {
    let isActive = true;

    void loadSequenceFrame(fallbackSrc)
      .then((image) => {
        if (!isActive) {
          return;
        }

        fallbackFrameRef.current = image;
        setFallbackVersion((currentVersion) => currentVersion + 1);
      })
      .catch(() => {
        fallbackFrameRef.current = null;
      });

    return () => {
      isActive = false;
    };
  }, [fallbackSrc]);

  useEffect(() => {
    if (frame) {
      lastRenderedFrameRef.current = frame;
    }

    const nextFrame = frame ?? lastRenderedFrameRef.current ?? fallbackFrameRef.current;
    drawFrame(nextFrame ?? null);
  }, [drawFrame, fallbackVersion, frame]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas || typeof ResizeObserver === "undefined") {
      return;
    }

    const observer = new ResizeObserver(() => {
      const nextFrame =
        frame ?? lastRenderedFrameRef.current ?? fallbackFrameRef.current;

      window.requestAnimationFrame(() => {
        drawFrame(nextFrame ?? null);
      });
    });

    observer.observe(canvas);

    return () => observer.disconnect();
  }, [drawFrame, frame]);

  return (
    <div className={cn("relative h-full w-full", className)}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

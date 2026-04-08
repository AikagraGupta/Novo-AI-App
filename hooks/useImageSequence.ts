"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  DEFAULT_SEQUENCE_CONFIG,
  getSequenceFrameSrc,
  loadSequenceFrame,
  type SequenceConfig
} from "@/lib/loadImageSequence";

type UseImageSequenceOptions = {
  basePath?: string;
  fallback?: Partial<SequenceConfig>;
};

type SequenceStatus = "loading" | "ready" | "error";

const INITIAL_PRELOAD_COUNT = 12;

export function useImageSequence({
  basePath = DEFAULT_SEQUENCE_CONFIG.basePath,
  fallback = DEFAULT_SEQUENCE_CONFIG
}: UseImageSequenceOptions = {}) {
  const framesRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const inFlightRef = useRef<Map<number, AbortController>>(new Map());
  const [readyFrameCount, setReadyFrameCount] = useState(0);
  const [version, setVersion] = useState(0);
  const [status, setStatus] = useState<SequenceStatus>("loading");

  const config: SequenceConfig = useMemo(
    () => ({
      ...DEFAULT_SEQUENCE_CONFIG,
      ...fallback,
      basePath
    }),
    [basePath, fallback]
  );

  const getFrameSrc = useCallback(
    (frameIndex: number) => getSequenceFrameSrc(config, frameIndex),
    [config]
  );

  const getFrame = useCallback(
    (frameIndex: number) => {
      const safeFrameIndex = Math.max(0, Math.min(frameIndex, config.frameCount - 1));
      return framesRef.current.get(safeFrameIndex);
    },
    [config.frameCount]
  );

  const getNearestLoadedFrame = useCallback(
    (frameIndex: number, searchRadius = 6) => {
      const safeFrameIndex = Math.max(0, Math.min(frameIndex, config.frameCount - 1));
      const exactFrame = framesRef.current.get(safeFrameIndex);

      if (exactFrame) {
        return exactFrame;
      }

      for (let offset = 1; offset <= searchRadius; offset += 1) {
        const previousFrame = safeFrameIndex - offset;
        const nextFrame = safeFrameIndex + offset;

        if (previousFrame >= 0) {
          const loadedPreviousFrame = framesRef.current.get(previousFrame);

          if (loadedPreviousFrame) {
            return loadedPreviousFrame;
          }
        }

        if (nextFrame < config.frameCount) {
          const loadedNextFrame = framesRef.current.get(nextFrame);

          if (loadedNextFrame) {
            return loadedNextFrame;
          }
        }
      }

      return framesRef.current.get(0);
    },
    [config.frameCount]
  );

  const ensureFrame = useCallback(
    (frameIndex: number) => {
      const safeFrameIndex = Math.max(0, Math.min(frameIndex, config.frameCount - 1));
      const src = getSequenceFrameSrc(config, safeFrameIndex);

      if (
        framesRef.current.has(safeFrameIndex) ||
        inFlightRef.current.has(safeFrameIndex)
      ) {
        return;
      }

      const controller = new AbortController();
      inFlightRef.current.set(safeFrameIndex, controller);

      void loadSequenceFrame(src, controller.signal)
        .then((image) => {
          framesRef.current.set(safeFrameIndex, image);
          inFlightRef.current.delete(safeFrameIndex);
          setReadyFrameCount(framesRef.current.size);
          setVersion((currentVersion) => currentVersion + 1);

          if (safeFrameIndex === 0) {
            setStatus("ready");
          }
        })
        .catch(() => {
          inFlightRef.current.delete(safeFrameIndex);

          if (safeFrameIndex === 0 && !framesRef.current.has(0)) {
            setStatus("error");
          }
        });
    },
    [config]
  );

  useEffect(() => {
    framesRef.current.clear();

    inFlightRef.current.forEach((controller) => controller.abort());
    inFlightRef.current.clear();

    setReadyFrameCount(0);
    setStatus("loading");
    setVersion((currentVersion) => currentVersion + 1);

    const warmFrameCount = Math.min(INITIAL_PRELOAD_COUNT, config.frameCount);

    for (let frameIndex = 0; frameIndex < warmFrameCount; frameIndex += 1) {
      ensureFrame(frameIndex);
    }

    return () => {
      inFlightRef.current.forEach((controller) => controller.abort());
      inFlightRef.current.clear();
    };
  }, [config, ensureFrame]);

  return {
    config,
    getFrame,
    getNearestLoadedFrame,
    getFrameSrc,
    posterFrameSrc: getSequenceFrameSrc(config, 0),
    preloadFrame: ensureFrame,
    readyFrameCount,
    status,
    version
  };
}

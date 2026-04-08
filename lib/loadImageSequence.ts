export type SequenceConfig = {
  basePath: string;
  frameCount: number;
  filePrefix: string;
  extension: "jpg" | "jpeg" | "png" | "webp";
  padding: number;
  width: number;
  height: number;
};

type SequenceManifest = Partial<SequenceConfig>;

export const DEFAULT_SEQUENCE_CONFIG: SequenceConfig = {
  basePath: "/sequence-hand",
  frameCount: 192,
  filePrefix: "ezgif-frame-",
  extension: "jpg",
  padding: 3,
  width: 1280,
  height: 720
};

function normalizeSequenceConfig(config: Partial<SequenceConfig>): SequenceConfig {
  return {
    basePath: config.basePath ?? DEFAULT_SEQUENCE_CONFIG.basePath,
    frameCount: config.frameCount ?? DEFAULT_SEQUENCE_CONFIG.frameCount,
    filePrefix: config.filePrefix ?? DEFAULT_SEQUENCE_CONFIG.filePrefix,
    extension: config.extension ?? DEFAULT_SEQUENCE_CONFIG.extension,
    padding: config.padding ?? DEFAULT_SEQUENCE_CONFIG.padding,
    width: config.width ?? DEFAULT_SEQUENCE_CONFIG.width,
    height: config.height ?? DEFAULT_SEQUENCE_CONFIG.height
  };
}

export async function loadSequenceConfig(
  basePath = DEFAULT_SEQUENCE_CONFIG.basePath,
  fallback: Partial<SequenceConfig> = {}
) {
  try {
    const response = await fetch(`${basePath}/sequence.config.json`, {
      cache: "no-store"
    });

    if (response.ok) {
      const manifest = (await response.json()) as SequenceManifest;

      return normalizeSequenceConfig({
        ...DEFAULT_SEQUENCE_CONFIG,
        ...fallback,
        ...manifest,
        basePath
      });
    }
  } catch {
    // Fall back to inline config when no manifest is present.
  }

  return normalizeSequenceConfig({
    ...DEFAULT_SEQUENCE_CONFIG,
    ...fallback,
    basePath
  });
}

export function getSequenceFrameSrc(
  config: Pick<SequenceConfig, "basePath" | "filePrefix" | "extension" | "padding">,
  frameIndex: number
) {
  const frameNumber = String(frameIndex + 1).padStart(config.padding, "0");

  return `${config.basePath}/${config.filePrefix}${frameNumber}.${config.extension}`;
}

export function loadSequenceFrame(src: string, signal?: AbortSignal) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    const cleanup = () => {
      image.onload = null;
      image.onerror = null;
      signal?.removeEventListener("abort", handleAbort);
    };

    const handleAbort = () => {
      cleanup();
      image.src = "";
      reject(new DOMException("Frame loading aborted", "AbortError"));
    };

    if (signal?.aborted) {
      handleAbort();
      return;
    }

    image.decoding = "async";
    image.loading = "eager";
    image.onload = () => {
      cleanup();
      resolve(image);
    };
    image.onerror = () => {
      cleanup();
      reject(new Error(`Failed to load frame: ${src}`));
    };

    signal?.addEventListener("abort", handleAbort, { once: true });
    image.src = src;
  });
}

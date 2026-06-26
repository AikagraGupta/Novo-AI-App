const DEFAULT_SITE_URL = "https://heynovo.ai";

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
  return value.replace(/\/+$/, "");
}


import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        panel: "#0B0B0D",
        foreground: "#F5F7FA",
        muted: "rgba(245,247,250,0.72)",
        spark: "#F8FCFF",
        crimson: "#FF5A6B",
        rose: "#FF8B98"
      },
      fontFamily: {
        body: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter Tight", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      maxWidth: {
        page: "1440px"
      },
      boxShadow: {
        glow: "0 0 80px rgba(230, 62, 83, 0.22)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;

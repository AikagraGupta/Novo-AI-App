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
        background: "#f6f2e9",
        panel: "#fffdf8",
        foreground: "#142744",
        muted: "#5b6880",
        surface: "#fffdf8",
        "muted-surface": "#f0e5cf",
        accent: "#b58a45",
        navy: "#142744",
        gold: "#b58a45",
        red: "#b34852"
      },
      fontFamily: {
        body: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Inter Tight", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      maxWidth: {
        page: "1180px"
      },
      boxShadow: {
        glow: "0 18px 50px rgba(17, 17, 17, 0.08)",
        panel: "0 18px 48px rgba(17, 17, 17, 0.06), 0 1px 0 rgba(255, 255, 255, 0.88) inset"
      }
    }
  },
  plugins: []
};

export default config;

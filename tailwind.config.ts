import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Geist", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#050505",
        neon: {
          green: "#35ff9f",
          blue: "#47b5ff",
          purple: "#a855f7",
        },
      },
      boxShadow: {
        glow: "0 0 60px rgba(53, 255, 159, 0.22)",
        premium: "0 24px 80px rgba(15, 23, 42, 0.18)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(148,163,184,.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,.14) 1px, transparent 1px)",
        "premium-gradient":
          "linear-gradient(135deg, #35ff9f 0%, #47b5ff 45%, #a855f7 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [typography],
};

export default config;

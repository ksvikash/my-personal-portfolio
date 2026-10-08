/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark canvas system
        canvas: "#0D0D11",
        surface: "#141418",
        surfaceLight: "#1C1C22",
        ink: "#EDEDED",
        inkSoft: "#B0B0B8",
        muted: "#6B6B76",
        mutedSoft: "#4A4A54",
        line: "#222228",
        lineLight: "#2E2E36",
        accent: "#4B86F7",
        accentDim: "#2A5BB8",
        accentGlow: "rgba(75,134,247,0.15)",
        success: "#22C55E",
        successDark: "#15803D",
        warning: "#F59E0B",
        error: "#EF4444",
        // Retained for compatibility
        lavender: "#3A2A5C",
        ice: "#1A2438",
        cream: "#2A2620",
        term: "#0B0B0E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.23, 1, 0.32, 1)",
      },
      keyframes: {
        blobFloat: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(3%, -4%) scale(1.05)" },
          "66%": { transform: "translate(-4%, 2%) scale(0.98)" },
        },
        scrollHint: {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(10px)", opacity: "0.7" },
        },
        pulseDot: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.3)", opacity: "0.8" },
        },
        caretBlink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        blobFloat: "blobFloat 20s ease-in-out infinite",
        scrollHint: "scrollHint 2s ease-in-out infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
        caretBlink: "caretBlink 1s step-end infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

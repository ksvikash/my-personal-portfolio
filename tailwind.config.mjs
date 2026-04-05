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
        canvas: "#F7F7F7",
        ink: "#1A1A1A",
        muted: "#707070",
        accent: "#4B86F7",
        lavender: "#E8D5F7",
        ice: "#D5E8F7",
        cream: "#F7E8D5",
        success: "#22C55E",
        successDark: "#15803D",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
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
          "0%, 100%": { transform: "translateY(0)", opacity: "0.5" },
          "50%": { transform: "translateY(10px)", opacity: "0.8" },
        },
        pulseDot: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.85" },
        },
      },
      animation: {
        blobFloat: "blobFloat 20s ease-in-out infinite",
        scrollHint: "scrollHint 2s ease-in-out infinite",
        pulseDot: "pulseDot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

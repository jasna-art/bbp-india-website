import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}"],
  theme: {
    // Override defaults — BBP allows only the tokens declared below.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ink: "#1A1A1A",
      canvas: "#FFFFFF",
      muted: "#6B6B6B",
      rule: "#D4D4D4",
      surface: "#FAFAFA",
    },
    fontFamily: {
      serif: ["var(--font-serif)", "Georgia", "serif"],
      sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      mono: ["var(--font-mono)", "ui-monospace", "monospace"],
    },
    borderRadius: {
      none: "0",
    },
    boxShadow: {
      none: "none",
    },
    extend: {
      maxWidth: {
        container: "1280px",
        reading: "680px",
      },
      letterSpacing: {
        eyebrow: "0.12em",
        wordmark: "0.04em",
        tight: "-0.02em",
      },
      fontSize: {
        // [size, { lineHeight, letterSpacing, fontWeight }]
        // Mobile values use clamp() to scale up to desktop.
        display: [
          "clamp(3.5rem, 8.4vw + 1rem, 6rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        hero: [
          "clamp(2.75rem, 5.6vw + 1rem, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        h1: [
          "clamp(2.5rem, 3.8vw + 1rem, 3.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        h2: [
          "clamp(1.875rem, 2.4vw + 1rem, 2.5rem)",
          { lineHeight: "1.15", fontWeight: "700" },
        ],
        h3: [
          "clamp(1.5rem, 1vw + 1rem, 1.75rem)",
          { lineHeight: "1.25", fontWeight: "700" },
        ],
        h4: ["1.25rem", { lineHeight: "1.3", fontWeight: "600" }],
        lede: [
          "clamp(1.125rem, 0.6vw + 1rem, 1.5rem)",
          { lineHeight: "1.45", fontWeight: "400" },
        ],
        body: ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["0.9375rem", { lineHeight: "1.5", fontWeight: "400" }],
        eyebrow: [
          "0.8125rem",
          {
            lineHeight: "1",
            letterSpacing: "0.12em",
            fontWeight: "600",
          },
        ],
      },
      spacing: {
        section: "100px",
        "section-mobile": "60px",
        gutter: "24px",
      },
      borderWidth: {
        hairline: "1px",
        heavy: "2px",
      },
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
const channel = (name) => `rgb(var(${name}) / <alpha-value>)`;

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: channel("--bg"),
        ink: channel("--ink"),
        paper: channel("--bg"),
        muted: channel("--gray-500"),
        faint: channel("--gray-400"),
        line: channel("--gray-200"),
        edge: channel("--gray-300"),
        surface: channel("--gray-50"),
      },
      fontFamily: {
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
        pixel: ['"Geist Pixel"', '"Geist Mono"', "monospace"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
      },
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        modal: "var(--shadow-modal)",
      },
      maxWidth: {
        site: "56rem",
      },
      transitionTimingFunction: {
        settle: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFFFF",
        ink: "#111111",
        muted: "#6B7280",
        line: "#E5E7EB",
        surface: "#F4F4F5",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "1120px",
      },
    },
  },
  plugins: [],
};

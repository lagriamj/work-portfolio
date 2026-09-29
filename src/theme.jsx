import { createContext, useContext, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

const STORAGE_KEY = "theme";

const palettes = {
  light: {
    ink: "#0a0a0a",
    muted: "#737373",
    faint: "#a3a3a3",
    line: "#e9e9e9",
    edge: "#d4d4d4",
    bg: "#ffffff",
    surface: "#fafafa",
  },
  dark: {
    ink: "#f4f4f5",
    muted: "#a0a0a8",
    faint: "#8a8a92",
    line: "#2a2a30",
    edge: "#3a3a42",
    bg: "#0c0c0f",
    surface: "#18181b",
  },
};

function readTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") return stored;
  } catch {
    /* private mode */
  }
  return "system";
}

export function applyTheme(theme) {
  const dark =
    theme === "dark" ||
    (theme !== "light" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  return dark;
}

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readTheme);
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const fadeTimer = useRef(0);

  useEffect(() => {
    setDark(applyTheme(theme));
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* private mode */
    }
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if ((localStorage.getItem(STORAGE_KEY) || "system") === "system") {
        setDark(applyTheme("system"));
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const setTheme = (next, event) => {
    if (next === theme) return;

    const apply = () => {
      const resolved = applyTheme(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* private mode */
      }
      flushSync(() => {
        setThemeState(next);
        setDark(resolved);
      });
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof document.startViewTransition !== "function") {
      window.clearTimeout(fadeTimer.current);
      document.documentElement.classList.add("theme-fade");
      apply();
      fadeTimer.current = window.setTimeout(() => {
        document.documentElement.classList.remove("theme-fade");
      }, 520);
      return;
    }

    const x = event?.clientX ?? window.innerWidth / 2;
    const y = event?.clientY ?? window.innerHeight / 2;
    const end = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      apply();
    });
    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${end}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 540,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {});
  };

  return (
    <ThemeContext.Provider value={{ theme, dark, palette: dark ? palettes.dark : palettes.light, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}

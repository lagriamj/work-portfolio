import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../theme";

const links = [
  { href: "#experience", label: "experience", id: "experience" },
  { href: "#work", label: "work", id: "work" },
  { href: "#about", label: "about", id: "about" },
  { href: "#stack", label: "stack", id: "stack" },
  { href: "#contact", label: "contact", id: "contact" },
];

const themeOptions = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "system", label: "System" },
];

const ThemeControl = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div role="radiogroup" aria-label="Color theme" className="flex flex-wrap gap-1">
      {themeOptions.map((option) => {
        const selected = theme === option.id;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={(event) => setTheme(option.id, event)}
            className={`rounded-full px-2 py-0.5 font-mono text-[9px] uppercase tracking-[1px] transition-colors duration-200 ${
              selected ? "bg-ink text-bg" : "text-faint hover:text-ink"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};

const NavLinks = ({ active, onNavigate, className = "" }) => (
  <ul className={className}>
    {links.map((link) => {
      const isActive = active === link.id;
      return (
        <li key={link.href} className="border-b border-line">
          <a
            href={link.href}
            className={`nav-link ${isActive ? "is-active" : ""}`}
            aria-current={isActive ? "true" : undefined}
            onClick={onNavigate}
          >
            <span className="nav-arrow" aria-hidden="true">
              {isActive ? "→" : ""}
            </span>
            {link.label}
          </a>
        </li>
      );
    })}
  </ul>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ids = ["home", "experience", "work", "about", "stack", "contact"];
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);

      let current = "home";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) {
          current = id;
        }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md lg:hidden">
        <div
          className="absolute inset-x-0 top-0 h-px origin-left bg-ink"
          style={{ transform: `scaleX(${progress})` }}
        />
        <nav className="flex h-14 items-center justify-between px-4" aria-label="Primary">
          <a href="#home" className="text-[15px] font-medium" onClick={closeMenu}>
            lagriamj
          </a>
          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute h-px w-5 bg-ink transition-transform duration-200 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-px w-5 bg-ink transition-transform duration-200 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </nav>
      </header>

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-56 flex-col border-r border-line bg-bg lg:flex">
        <div
          className="absolute inset-x-0 top-0 h-px origin-left bg-ink"
          style={{ transform: `scaleX(${progress})` }}
        />
        <div className="flex h-full flex-col overflow-y-auto px-3 py-6">
          <a href="#home" className="px-2 text-[15px] font-medium">
            lagriamj
          </a>
          <p className="micro mb-2 mt-8 px-2">Menu</p>
          <nav aria-label="Primary">
            <NavLinks active={active} className="border-t border-line" />
          </nav>
          <a href="#contact" className="btn mx-2 mt-5">
            Let&apos;s talk
          </a>
          <div className="mt-auto border-t border-line px-2 pt-4">
            <p className="micro mb-2">Theme</p>
            <ThemeControl />
          </div>
        </div>
      </aside>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col bg-bg px-6 pb-10 pt-20 lg:hidden"
          >
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center">
              <ul className="flex flex-col gap-5">
                {links.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: Math.min(0.05 + index * 0.07, 0.33),
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <a
                      href={link.href}
                      className="page-title text-[2rem]"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-line pt-5">
              <p className="micro mb-2">Theme</p>
              <ThemeControl />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

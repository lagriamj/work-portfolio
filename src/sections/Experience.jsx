import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const roles = [
  {
    company: "Infosoft Studio",
    title: "Backend Developer",
    dates: "Feb 2025 — Present",
    duration: "1 yr 6 mos",
    current: true,
    summary:
      "Building and maintaining backend systems for production web applications.",
  },
  {
    company: "Etousoft",
    title: "Full-Stack Developer",
    dates: "Jul 2024 — Feb 2025",
    duration: "8 mos",
    current: false,
    summary:
      "Shipped web features across the frontend and backend.",
  },
  {
    company: "Infosoft Studio",
    title: "Backend Developer Intern",
    dates: "Feb 2024 — May 2024",
    duration: "4 mos",
    current: false,
    summary: "Supported backend work on APIs and databases.",
  },
];

const Experience = () => {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.55"],
  });

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-line px-5 py-20 md:px-8"
    >
      <div className="mx-auto max-w-site">
        <p className="section-label">Experience</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          Where I&apos;ve worked
        </h2>

        <ol ref={listRef} className="relative mt-14">
          <span
            className="absolute bottom-3 left-[7px] top-3 w-px bg-line md:left-[11.5rem]"
            aria-hidden="true"
          />
          <motion.span
            className="absolute bottom-3 left-[7px] top-3 w-px origin-top bg-ink md:left-[11.5rem]"
            style={{ scaleY: scrollYProgress }}
            aria-hidden="true"
          />

          {roles.map((role, index) => (
            <motion.li
              key={`${role.company}-${role.title}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.12 }}
              className="relative grid gap-3 pb-12 last:pb-0 md:grid-cols-[11.5rem_1fr] md:gap-0"
            >
              <div className="pl-8 md:pr-10 md:pl-0 md:text-right">
                <p className="text-sm text-muted">{role.dates}</p>
                <p className="mt-1 text-[11px] uppercase tracking-widest text-muted">
                  {role.duration}
                </p>
              </div>

              <div className="pl-8 md:pl-12">
                <span
                  className={`absolute left-0 top-1.5 z-[1] h-4 w-4 rounded-full border-2 border-ink bg-paper md:left-[11.5rem] md:-ml-2 ${
                    role.current ? "bg-ink" : ""
                  }`}
                  aria-hidden="true"
                >
                  {role.current && (
                    <span className="absolute inset-[-5px] animate-ping rounded-full border border-ink/40" />
                  )}
                </span>

                <h3 className="text-base font-medium">{role.title}</h3>
                <p className="mt-1 text-sm text-muted">{role.company}</p>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                  {role.summary}
                </p>
                {role.current && (
                  <span className="mt-3 inline-block border border-ink px-2 py-0.5 text-[10px] uppercase tracking-widest">
                    Current
                  </span>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { rise } from "../motion";

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
    summary: "Shipped web features across the frontend and backend.",
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
    <section id="experience" className="scroll-mt-16 border-t border-line px-4 py-14 lg:px-6">
      <div className="mx-auto max-w-site">
        <SectionHeading index="01" label="experience" title="Where I've worked" />

        <ol ref={listRef} className="relative mt-12">
          <span
            className="absolute bottom-3 left-[5px] top-3 w-px bg-line md:left-[13.5rem]"
            aria-hidden="true"
          />
          <motion.span
            className="absolute bottom-3 left-[5px] top-3 w-px origin-top bg-ink md:left-[13.5rem]"
            style={{ scaleY: scrollYProgress }}
            aria-hidden="true"
          />

          {roles.map((role, index) => (
            <motion.li
              key={`${role.company}-${role.title}`}
              {...rise(index)}
              className="relative grid gap-2 pb-12 last:pb-0 md:grid-cols-[13.5rem_1fr] md:gap-0"
            >
              <div className="pl-7 md:pr-8 md:pl-0 md:text-right">
                <p className="whitespace-nowrap font-mono text-[13px] text-muted">{role.dates}</p>
                <p className="micro mt-1">{role.duration}</p>
              </div>

              <div className="pl-7 md:pl-12">
                <span
                  className={`absolute left-[5px] top-1.5 z-[1] h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-edge bg-bg md:left-[13.5rem] ${
                    role.current ? "status-dot border-ink bg-ink" : ""
                  }`}
                  aria-hidden="true"
                />

                <h3 className="heading text-[1.1rem]">{role.title}</h3>
                <p className="mt-1 text-[13px] text-muted">{role.company}</p>
                <p className="mt-3 max-w-md text-[13px] leading-relaxed text-muted">{role.summary}</p>
                {role.current && <span className="pill pill-solid mt-3">Current</span>}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;

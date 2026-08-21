import { useRef } from "react";
import { motion } from "framer-motion";
import me from "../assets/me1.webp";
import resume from "../assets/lagria-resume.pdf";
import HeroScene from "../components/HeroScene";

const Home = () => {
  const photoRef = useRef(null);

  const onMove = (event) => {
    const el = photoRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.02)`;
  };

  const onLeave = () => {
    const el = photoRef.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <section id="home" className="relative overflow-hidden px-5 pb-28 pt-32 md:px-8 md:pb-36 md:pt-40">
      <div className="pointer-events-none absolute inset-0 z-0 hidden opacity-35 lg:block">
        <HeroScene />
      </div>
      <div className="relative z-10 mx-auto grid max-w-site items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Backend Developer · Davao City</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            Mark John
            <br />
            Lagria
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted md:text-lg">
            I build full-stack web applications, with a focus on backend systems
            that are reliable, structured, and ready to scale.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="bg-ink px-5 py-2.5 text-sm text-paper transition-transform hover:-translate-y-0.5"
            >
              View work
            </a>
            <a
              href={resume}
              download="Mark-John-Lagria-Resume.pdf"
              className="text-sm text-muted underline underline-offset-4 decoration-line transition-colors hover:text-ink hover:decoration-ink"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md lg:justify-self-end"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <div
            className="pointer-events-none absolute left-4 top-4 hidden h-full w-full border border-ink sm:block"
            aria-hidden="true"
          />
          <div
            ref={photoRef}
            className="relative overflow-hidden bg-surface transition-transform duration-200 ease-out will-change-transform"
          >
            <img
              src={me}
              alt="Mark John Lagria"
              className="aspect-[4/5] w-full object-cover object-top"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

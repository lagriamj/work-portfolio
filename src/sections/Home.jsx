import { useRef } from "react";
import { motion } from "framer-motion";
import resume from "../assets/lagria-resume.pdf";
import HeroScene from "../components/HeroScene";
import { rise } from "../motion";

const Home = () => {
  const photoRef = useRef(null);

  const onMove = (event) => {
    const el = photoRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
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
    <section id="home" className="relative overflow-hidden px-4 pb-14 pt-16 lg:px-6 lg:pb-20 lg:pt-24">
      <div className="halftone pointer-events-none absolute -left-16 -top-20 z-[1] h-56 w-56 lg:h-72 lg:w-72" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-0 hidden opacity-30 [mask-image:linear-gradient(90deg,transparent_0%,transparent_36%,#000_64%)] lg:block">
        <HeroScene />
      </div>
      <div className="relative z-10 mx-auto grid min-w-0 max-w-site items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        <div className="min-w-0">
          <motion.p className="micro" {...rise(0, { animate: true })}>
            Backend developer · Davao City
          </motion.p>
          <motion.h1 className="page-title mt-5" {...rise(1, { animate: true })}>
            mark
            <br />
            john
            <br />
            lagria
          </motion.h1>
          <motion.p className="mt-6 max-w-md leading-relaxed text-muted" {...rise(2, { animate: true })}>
            I build full-stack web applications, with a focus on backend systems
            that are reliable, structured, and ready to scale.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap items-center gap-5" {...rise(3, { animate: true })}>
            <a href="#work" className="btn">
              View work
            </a>
            <a
              href={resume}
              download="Mark-John-Lagria-Resume.pdf"
              className="group text-link font-mono text-[12px] text-muted"
            >
              Download CV
              <span className="nudge" aria-hidden="true">
                {" "}
                ↗
              </span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="group relative mx-auto w-full max-w-sm lg:max-w-none lg:justify-self-end"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          {...rise(4, { animate: true })}
        >
          <div
            ref={photoRef}
            className="inset-frame aspect-[4/5] w-full transition-transform duration-200 ease-out will-change-transform"
          >
            <div className="relative flex h-full flex-col justify-between p-6" aria-hidden="true">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgb(var(--ink) / var(--dot)) 1px, transparent 1px)",
                  backgroundSize: "9px 9px",
                }}
              />
              <p className="micro relative">davao city</p>
              <p className="page-title relative !text-[clamp(4.5rem,12vw,7.5rem)]">mj</p>
              <p className="micro relative">backend · systems</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

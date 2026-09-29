import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import work1 from "../assets/works/work1.png";
import work2 from "../assets/works/work2.png";
import work4 from "../assets/works/work4.png";
import work6 from "../assets/works/work6.png";
import work7 from "../assets/works/work7.png";
import work8 from "../assets/works/work8.png";
import work9 from "../assets/works/work9.png";
import work10 from "../assets/works/work10.png";
import work11 from "../assets/works/work11.png";
import work12 from "../assets/works/work12.png";
import work13 from "../assets/works/work13.png";
import SectionHeading from "../components/SectionHeading";
import { rise } from "../motion";

const worksData = [
  {
    image: work13,
    title: "Visit Camiguin Mobile App",
    desc: "A mobile app for visitors in Camiguin to earn rewards and win prizes while exploring the island.",
    technologies: ["Laravel", "PostgreSQL", "Docker"],
    phone: true,
  },
  {
    image: work1,
    title: "E-Request System CITC",
    desc: "A computer management system for the City Information Technology Center of the Local Government of Davao.",
    url: "https://github.com/lagriamj/eRequest-Capstone",
    technologies: ["React", "Laravel", "Tailwind CSS", "MySQL"],
    video:
      "https://drive.google.com/file/d/1zSmtOOBEy4CzDEjI8-8W73Mk62neq-n2/view?usp=sharing",
  },
  {
    image: work10,
    title: "LTS — Legislative Tracking System",
    desc: "A legislative tracking system for the local governments of Tagum, Panabo, and Davao de Oro to manage ordinances, resolutions, and session records.",
    technologies: ["Laravel", "Flask", "PostgreSQL", "Docker"],
  },
  {
    image: work11,
    title: "HRIS — Human Resource Information System",
    desc: "A human resource information system built for BARMM to manage employee records, HR processes, and workforce data.",
    technologies: ["Laravel", "PostgreSQL", "Docker"],
  },
  {
    image: work7,
    title: "iVisit Camiguin",
    desc: "Backend for a Camiguin Island ticketing platform covering e-ticketing, merchandise, accommodations, and transport.",
    url: "https://github.com/lagriamj/camiguin-backend",
    site: "https://pos.poolreno.com/",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
  },
  {
    image: work12,
    title: "Camiguin Rewards Admin",
    desc: "Admin panel for the Camiguin Rewards app, used to manage campaigns, prizes, and user activity.",
    technologies: ["Laravel", "PostgreSQL", "Docker"],
  },
  {
    image: work9,
    title: "Conversate",
    desc: "A community forum inspired by Reddit. Still in development.",
    url: "https://github.com/lagriamj/Conversate",
    technologies: ["React", "Redux", "Laravel", "Tailwind", "MySQL"],
  },
  {
    image: work4,
    title: "DictioNorlax",
    desc: "A dictionary application powered by the Oxford Dictionary API.",
    url: "https://github.com/lagriamj/DictioNorlax",
    technologies: ["Laravel"],
  },
  {
    image: work6,
    title: "Sales and Inventory System",
    desc: "A sales and inventory system built for a local business in Davao City.",
    url: "",
    technologies: ["PHP", "JavaScript", "MySQL"],
  },
  {
    image: work2,
    title: "AniMark",
    desc: "A simple anime search app using the Jikan API.",
    url: "https://github.com/lagriamj/aniMark",
    technologies: ["React", "Tailwind CSS", "Jikan API"],
  },
  {
    image: work8,
    title: "askMark",
    desc: "A chatbot application powered by the Gemini API.",
    url: "https://github.com/lagriamj/chat-bot",
    technologies: ["React", "Tailwind CSS", "Gemini API"],
  },
];

const Outbound = ({ href, children, className = "" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`text-link ${className}`}
  >
    {children}
    <span aria-hidden="true"> ↗</span>
  </a>
);

const Works = () => {
  const [hovered, setHovered] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const featured = worksData[0];
  const rest = worksData.slice(1);

  return (
    <section id="work" className="scroll-mt-16 border-t border-line px-4 py-14 lg:px-6">
      <div className="mx-auto max-w-site">
        <div className="flex items-end justify-between gap-4">
          <SectionHeading index="02" label="work" title="Projects" />
          <span className="section-label">{String(worksData.length).padStart(2, "0")}</span>
        </div>

        <motion.div {...rise(0)}>
          <article className="card group mt-10 grid overflow-hidden lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)]">
            <div
              className={`overflow-hidden bg-bg ${
                featured.phone ? "flex items-center justify-center py-8" : ""
              }`}
            >
              <img
                src={featured.image}
                alt={featured.title}
                className={`zoom-img ${
                  featured.phone
                    ? "h-[420px] w-auto max-w-[220px] object-contain sm:h-[480px]"
                    : "aspect-[16/10] w-full object-cover object-top"
                }`}
              />
            </div>
            <div className="flex flex-col justify-center p-5">
              <span className="pill pill-solid w-fit">Featured</span>
              <h3 className="heading mt-4 text-[1.3rem]">{featured.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{featured.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {featured.technologies.map((tech) => (
                  <li key={tech} className="pill">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-4 text-[13px]">
                {featured.url && <Outbound href={featured.url}>Source</Outbound>}
                {featured.video && <Outbound href={featured.video}>Video</Outbound>}
                {featured.site && <Outbound href={featured.site}>Live</Outbound>}
              </div>
            </div>
          </article>
        </motion.div>

        <div className="mt-10 border-t border-line">
          {rest.map((work, index) => (
            <motion.article
              key={work.title}
              {...rise(Math.min(index, 4))}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={(event) => setCursor({ x: event.clientX, y: event.clientY })}
              className="group grid grid-cols-[auto_1fr] items-center gap-4 border-b border-line py-4 sm:grid-cols-[2.25rem_auto_1fr]"
            >
              <span className="section-label hidden sm:block">
                {String(index + 2).padStart(2, "0")}
              </span>

              <div
                className={`shrink-0 overflow-hidden rounded-[10px] ${
                  work.phone ? "h-[72px] w-10 sm:h-20 sm:w-12" : "h-16 w-24 sm:h-[72px] sm:w-28"
                }`}
              >
                <img
                  src={work.image}
                  alt=""
                  loading="lazy"
                  className="zoom-img h-full w-full object-cover object-top"
                />
              </div>

              <div className="min-w-0">
                <h3 className="text-[15px] font-medium transition-transform duration-200 ease-settle group-hover:translate-x-1">
                  {work.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-[13px] text-muted">{work.desc}</p>
                <p className="micro mt-2 tracking-[0.08em]">{work.technologies.join(" · ")}</p>
                <div className="mt-2 flex flex-wrap gap-4 text-[13px]">
                  {work.url && <Outbound href={work.url}>Source</Outbound>}
                  {work.video && <Outbound href={work.video}>Video</Outbound>}
                  {work.site && <Outbound href={work.site}>Live</Outbound>}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none fixed z-40 hidden overflow-hidden rounded-xl border border-line bg-bg shadow-modal md:block"
            style={{
              width: rest[hovered].phone ? 180 : 280,
              top: rest[hovered].phone ? cursor.y - 160 : cursor.y - 90,
              left: cursor.x + 24,
            }}
          >
            <img
              src={rest[hovered].image}
              alt=""
              className={
                rest[hovered].phone
                  ? "aspect-[9/19] w-full object-cover object-top"
                  : "aspect-video w-full object-cover object-top"
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;

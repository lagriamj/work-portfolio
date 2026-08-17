import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import work1 from "../assets/works/work1.png";
import work2 from "../assets/works/work2.png";
import work4 from "../assets/works/work4.png";
import work6 from "../assets/works/work6.png";
import work7 from "../assets/works/work7.png";
import work8 from "../assets/works/work8.png";
import work9 from "../assets/works/work9.png";

const worksData = [
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
    image: work7,
    title: "iVisit Camiguin",
    desc: "Backend for a Camiguin Island ticketing platform covering e-ticketing, merchandise, accommodations, and transport.",
    url: "https://github.com/lagriamj/camiguin-backend",
    site: "https://pos.poolreno.com/",
    technologies: ["Vue.js", "Laravel", "PostgreSQL"],
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

const Works = () => {
  const [hovered, setHovered] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  return (
    <section id="work" className="scroll-mt-24 border-t border-line px-5 py-20 md:px-8">
      <div className="mx-auto max-w-site">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Projects</h2>
          </div>
          <span className="text-sm text-muted">
            {String(worksData.length).padStart(2, "0")}
          </span>
        </div>

        <div className="divide-y divide-line border-y border-line">
          {worksData.map((work, index) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={(event) => setCursor({ x: event.clientX, y: event.clientY })}
              className="group flex cursor-pointer gap-4 py-5 transition-colors sm:items-center hover:bg-surface"
            >
              <span className="hidden w-8 shrink-0 pl-1 text-xs text-muted sm:block">
                {String(index + 1).padStart(2, "0")}
              </span>

              <img
                src={work.image}
                alt={work.title}
                loading={index === 0 ? "eager" : "lazy"}
                className="h-16 w-24 shrink-0 object-cover object-top transition-transform duration-300 group-hover:scale-105 sm:h-[72px] sm:w-28"
              />

              <div className="min-w-0 flex-1 pr-2">
                <h3 className="text-sm font-medium transition-transform duration-300 group-hover:translate-x-1">
                  {work.title}
                </h3>
                <p className="mt-1 line-clamp-1 text-xs text-muted">{work.desc}</p>
                <p className="mt-2 text-[11px] text-muted">
                  {work.technologies.join(" · ")}
                </p>
                <div className="mt-2 flex flex-wrap gap-4 text-xs">
                  {work.url && (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-ink"
                    >
                      Source
                    </a>
                  )}
                  {work.video && (
                    <a
                      href={work.video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-ink"
                    >
                      Video
                    </a>
                  )}
                  {work.site && (
                    <a
                      href={work.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-ink"
                    >
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hovered !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none fixed z-40 hidden overflow-hidden border border-line bg-paper shadow-xl md:block"
            style={{
              width: 280,
              top: cursor.y - 90,
              left: cursor.x + 24,
            }}
          >
            <img
              src={worksData[hovered].image}
              alt=""
              className="aspect-video w-full object-cover object-top"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;

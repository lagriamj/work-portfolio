import { motion } from "framer-motion";
import StackScene from "../components/StackScene";

const frontend = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Redux Toolkit",
  "Framer Motion",
  "Tailwind CSS",
  "Git",
];

const backend = [
  "PHP",
  "Python",
  "Laravel",
  "Django",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Docker",
];

const Tools = () => {
  return (
    <section
      id="stack"
      className="scroll-mt-24 border-t border-line px-5 py-20 md:px-8"
    >
      <div className="mx-auto max-w-site">
        <p className="section-label">Stack</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">
          Tools I use
        </h2>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm text-muted">Frontend</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {frontend.map((tool) => (
                  <li
                    key={tool}
                    className="cursor-pointer border border-line px-3 py-1.5 text-sm transition-colors hover:bg-ink hover:text-paper"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm text-muted">Backend</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {backend.map((tool) => (
                  <li
                    key={tool}
                    className="cursor-pointer border border-line px-3 py-1.5 text-sm transition-colors hover:bg-ink hover:text-paper"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="h-[280px] w-full lg:h-[320px]">
            <StackScene />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;

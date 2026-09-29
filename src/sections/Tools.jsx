import { motion } from "framer-motion";
import StackScene from "../components/StackScene";
import SectionHeading from "../components/SectionHeading";
import { rise } from "../motion";

const frontend = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Nuxt.js",
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
  "Flask",
  "MySQL",
  "PostgreSQL",
  "Firebase",
  "Docker",
];

const Tools = () => {
  return (
    <section id="stack" className="scroll-mt-16 border-t border-line px-4 py-14 lg:px-6">
      <div className="mx-auto max-w-site">
        <SectionHeading index="04" label="stack" title="Tools I use" />

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-8 sm:grid-cols-2">
            <motion.div {...rise(0)}>
              <h3 className="micro">Frontend</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {frontend.map((tool) => (
                  <li key={tool} className="pill pill-hover">
                    {tool}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...rise(1)}>
              <h3 className="micro">Backend</h3>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {backend.map((tool) => (
                  <li key={tool} className="pill pill-hover">
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

import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { rise } from "../motion";

const services = [
  {
    number: "01",
    title: "Backend development",
    copy: "I design and build REST APIs that are structured, efficient, and ready to integrate with the rest of your stack. The focus is on reliable data flow, clean architecture, and code that holds up as the product grows.",
  },
  {
    number: "02",
    title: "Frontend development",
    copy: "I build responsive interfaces with modern frameworks, keeping the experience fast and easy to use. Frontends are treated as a clear layer over the backend—not a separate product.",
  },
];

const Service = () => {
  return (
    <section id="service" className="scroll-mt-16 border-t border-line px-4 py-14 lg:px-6">
      <div className="mx-auto max-w-site">
        <SectionHeading index="06" label="services" title="What I do" />

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div key={service.number} {...rise(index)}>
              <article className="card p-5">
                <span className="section-label">{service.number}</span>
                <h3 className="heading mt-3 text-[1.1rem]">{service.title}</h3>
                <p className="mt-3 max-w-md text-[13px] leading-relaxed text-muted">{service.copy}</p>
              </article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

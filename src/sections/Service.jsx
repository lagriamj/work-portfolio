import { motion } from "framer-motion";

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
    <section
      id="service"
      className="scroll-mt-24 border-t border-line px-5 py-20 md:px-8"
    >
      <div className="mx-auto max-w-site">
        <p className="section-label">Services</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight">What I do</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="border border-line bg-paper p-6 transition-colors hover:border-ink"
            >
              <span className="text-xs text-muted">{service.number}</span>
              <h3 className="mt-3 text-lg font-medium">{service.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                {service.copy}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;

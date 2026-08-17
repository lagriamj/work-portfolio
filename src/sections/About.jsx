import { motion } from "framer-motion";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { href: "https://github.com/lagriamj", label: "GitHub", icon: FaGithub },
  { href: "https://www.linkedin.com/in/lagriamj", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://www.facebook.com/lagriamj18/", label: "Facebook", icon: FaFacebook },
  { href: "https://www.instagram.com/lagriamj/", label: "Instagram", icon: FaInstagram },
  { href: "https://x.com/lagriamj", label: "X", icon: FaXTwitter },
];

const About = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-line px-5 py-20 md:px-8"
    >
      <div className="mx-auto grid max-w-site gap-10 lg:grid-cols-[1fr_1.4fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="section-label">About</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight">
            Software developer based in Davao City.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <div className="space-y-4 text-sm leading-relaxed text-muted md:text-base">
            <p>
              I&apos;m Mark John Lagria. I work across the stack, with a
              preference for backend development—APIs, databases, and the
              systems that keep products running.
            </p>
            <p>
              I care about writing code that is clear, reliable, and easy to
              build on. When I&apos;m not coding, I&apos;m usually playing
              games, watching anime, or catching up on a series.
            </p>
          </div>

          <ul className="mt-8 flex gap-3">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-ink hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

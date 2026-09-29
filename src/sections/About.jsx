import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SectionHeading from "../components/SectionHeading";
import { rise } from "../motion";

const socials = [
  { href: "https://github.com/lagriamj", label: "GitHub", icon: FaGithub },
  { href: "https://www.linkedin.com/in/lagriamj", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://www.facebook.com/lagriamj18/", label: "Facebook", icon: FaFacebook },
  { href: "https://www.instagram.com/lagriamj/", label: "Instagram", icon: FaInstagram },
  { href: "https://x.com/lagriamj", label: "X", icon: FaXTwitter },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-16 border-t border-line px-4 py-14 lg:px-6">
      <div className="mx-auto grid min-w-0 max-w-site gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.2fr)]">
        <motion.div {...rise(0)}>
          <SectionHeading index="03" label="about" title="Software developer based in Davao City." />
        </motion.div>

        <motion.div {...rise(1)}>
          <div className="space-y-4 leading-relaxed text-muted">
            <p>
              I&apos;m Mark John Lagria. I work across the stack, with a preference for backend
              development—APIs, databases, and the systems that keep products running.
            </p>
            <p>
              I care about writing code that is clear, reliable, and easy to build on. When
              I&apos;m not coding, I&apos;m usually playing games, watching anime, or catching up
              on a series.
            </p>
          </div>

          <ul className="mt-8 flex gap-2">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} ↗`}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-muted transition-colors duration-200 hover:border-ink hover:text-ink"
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

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { href: "https://www.linkedin.com/in/lagriamj", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://github.com/lagriamj", label: "GitHub", icon: FaGithub },
  { href: "https://www.facebook.com/lagriamj18/", label: "Facebook", icon: FaFacebook },
  { href: "https://www.instagram.com/lagriamj/", label: "Instagram", icon: FaInstagram },
  { href: "https://x.com/lagriamj", label: "X", icon: FaXTwitter },
];

const Footer = () => {
  return (
    <footer className="border-t border-line px-4 py-8 lg:px-6">
      <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <p className="micro">© {new Date().getFullYear()} Mark John Lagria</p>
        <a href="mailto:markjohn.lagria8@gmail.com" className="text-link font-mono text-[12px] text-muted">
          markjohn.lagria8@gmail.com
        </a>
        <nav className="flex items-center justify-center gap-4" aria-label="Social">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} ↗`}
              className="text-faint transition-colors duration-200 hover:text-ink"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-line px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-site flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Mark John Lagria
        </p>
        <a
          href="mailto:markjohn.lagria8@gmail.com"
          className="text-sm text-muted transition-colors hover:text-ink"
        >
          markjohn.lagria8@gmail.com
        </a>
        <nav className="flex items-center gap-4" aria-label="Social">
          <a
            href="https://www.linkedin.com/in/lagriamj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-ink"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/lagriamj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-ink"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href="https://www.facebook.com/lagriamj18/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-muted transition-colors hover:text-ink"
          >
            <FaFacebook className="h-4 w-4" />
          </a>
          <a
            href="https://www.instagram.com/lagriamj/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted transition-colors hover:text-ink"
          >
            <FaInstagram className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/lagriamj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-muted transition-colors hover:text-ink"
          >
            <FaXTwitter className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

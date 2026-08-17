import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm("service_m29l4sr", "template_p7p1ydb", form.current, {
        publicKey: "uYpSv9gX6GneV5JJ9",
      });
      setStatus("success");
      form.current.reset();
    } catch (error) {
      setStatus("error");
      console.error("FAILED...", error.text);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line px-5 py-20 md:px-8"
    >
      <div className="mx-auto grid max-w-site gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label">Contact</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s work together.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Have a project in mind, or just want to say hello? Send a message
            and I&apos;ll get back to you.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            <a
              href="mailto:markjohn.lagria8@gmail.com"
              className="block hover:underline"
            >
              markjohn.lagria8@gmail.com
            </a>
            <a
              href="tel:+639959050267"
              className="block text-muted hover:text-ink"
            >
              +63 995 905 0267
            </a>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <label className="block">
            <span className="text-[11px] uppercase tracking-widest text-muted">
              Name
            </span>
            <input
              type="text"
              name="user_name"
              required
              className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none transition-colors placeholder:text-muted/50 focus:border-ink"
              placeholder="Your name"
            />
          </label>
          <label className="block">
            <span className="text-[11px] uppercase tracking-widest text-muted">
              Email
            </span>
            <input
              type="email"
              name="user_email"
              required
              className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none transition-colors placeholder:text-muted/50 focus:border-ink"
              placeholder="you@email.com"
            />
          </label>
          <label className="block">
            <span className="text-[11px] uppercase tracking-widest text-muted">
              Message
            </span>
            <textarea
              name="message"
              required
              rows="4"
              className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 outline-none transition-colors placeholder:text-muted/50 focus:border-ink"
              placeholder="Tell me about the project"
            />
          </label>
          <button
            type="submit"
            disabled={isLoading}
            className="self-start bg-ink px-6 py-2.5 text-sm text-paper transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? "Sending..." : "Send message"}
          </button>
          {status === "success" && (
            <p className="text-sm text-muted">Message sent. Thank you.</p>
          )}
          {status === "error" && (
            <p className="text-sm text-muted">
              Something went wrong. Please try again, or email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

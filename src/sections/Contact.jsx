import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AnimatePresence, motion } from "framer-motion";
import ContactScene from "../components/ContactScene";

const JetIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const curve = (p0, p1, p2, p3, t) => {
  const t2 = t * t;
  const t3 = t2 * t;
  return (
    0.5 *
    (2 * p1 +
      (-p0 + p2) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3)
  );
};

const pointOnSpline = (points, t) => {
  const segments = points.length - 1;
  const scaled = t * segments;
  const index = Math.min(Math.floor(scaled), segments - 1);
  const local = scaled - index;
  const p0 = points[Math.max(0, index - 1)];
  const p1 = points[index];
  const p2 = points[Math.min(points.length - 1, index + 1)];
  const p3 = points[Math.min(points.length - 1, index + 2)];
  return {
    x: curve(p0.x, p1.x, p2.x, p3.x, local),
    y: curve(p0.y, p1.y, p2.y, p3.y, local),
  };
};

const buildFlight = ({ x, y, vw, vh }) => {
  const cx = vw / 2;
  const cy = vh / 2;
  const points = [
    { x, y },
    { x: x + (cx - x) * 0.28, y: y - 70 },
    { x: cx - (cx - x) * 0.12, y: cy + 48 },
    { x: cx, y: cy },
    { x: cx + 8, y: cy - 8 },
    { x: cx + 90, y: cy - 70 },
    { x: vw + 60, y: cy - 160 },
  ];

  const steps = 40;
  const xs = [];
  const ys = [];
  const rotates = [];
  const scales = [];
  const opacities = [];

  let previousAngle = 0;
  for (let i = 0; i < steps; i += 1) {
    const t = i / (steps - 1);
    const pos = pointOnSpline(points, t);
    const look = pointOnSpline(points, Math.min(1, t + 0.02));
    xs.push(pos.x - x);
    ys.push(pos.y - y);

    let angle = (Math.atan2(look.y - pos.y, look.x - pos.x) * 180) / Math.PI;
    if (i > 0) {
      while (angle - previousAngle > 180) angle -= 360;
      while (angle - previousAngle < -180) angle += 360;
    }
    previousAngle = angle;
    rotates.push(angle);

    let lift = 0.22 + Math.pow(t, 0.9) * 5.4;
    scales.push(lift);
    opacities.push(t > 0.88 ? 1 - (t - 0.88) / 0.12 : 1);
  }

  return { x: xs, y: ys, rotate: rotates, scale: scales, opacity: opacities };
};

const FlyingJet = ({ origin, onComplete }) => {
  const flight = buildFlight(origin);

  return (
    <motion.div
      className="pointer-events-none fixed z-[90] text-ink drop-shadow-md"
      style={{ left: origin.x, top: origin.y }}
      initial={{
        x: 0,
        y: 0,
        rotate: flight.rotate[0],
        scale: 0.22,
        opacity: 1,
      }}
      animate={flight}
      transition={{ duration: 2.7, ease: "linear" }}
      onAnimationComplete={onComplete}
    >
      <JetIcon size={32} />
    </motion.div>
  );
};

const Contact = () => {
  const form = useRef();
  const buttonRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [flight, setFlight] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setFlight({
        id: Date.now(),
        x: rect.left + 10,
        y: rect.top + rect.height / 2 - 16,
        vw: window.innerWidth,
        vh: window.innerHeight,
      });
    }
    setIsLoading(true);
    setStatus(null);
    const started = Date.now();

    try {
      await emailjs.sendForm("service_7mfeh1q", "template_p7p1ydb", form.current, {
        publicKey: "uYpSv9gX6GneV5JJ9",
      });
      const wait = Math.max(0, 2700 - (Date.now() - started));
      await new Promise((resolve) => setTimeout(resolve, wait));
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
          <div className="mt-10 h-[260px] w-full max-w-sm lg:h-[320px]">
            <ContactScene sending={isLoading} status={status} />
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          animate={status === "error" ? { x: [0, -8, 8, -6, 6, -2, 2, 0] } : { x: 0 }}
          transition={{ duration: 0.4 }}
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
              disabled={isLoading}
              className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none transition-colors placeholder:text-muted/50 focus:border-ink disabled:opacity-50"
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
              disabled={isLoading}
              className="mt-2 w-full border-b border-line bg-transparent py-3 outline-none transition-colors placeholder:text-muted/50 focus:border-ink disabled:opacity-50"
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
              disabled={isLoading}
              className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 outline-none transition-colors placeholder:text-muted/50 focus:border-ink disabled:opacity-50"
              placeholder="Tell me about the project"
            />
          </label>
          <button
            ref={buttonRef}
            type="submit"
            disabled={isLoading}
            className="relative self-start overflow-hidden bg-ink px-6 py-2.5 text-sm text-paper transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:hover:translate-y-0"
          >
            <span className="relative inline-flex min-w-[9.5rem] items-center gap-2">
              <span className={`inline-flex ${isLoading || flight ? "opacity-0" : "opacity-100"}`}>
                <JetIcon />
              </span>
              <AnimatePresence mode="wait" initial={false}>
                {isLoading ? (
                  <motion.span
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="whitespace-nowrap"
                  >
                    Sending
                  </motion.span>
                ) : status === "success" ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Sent
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="whitespace-nowrap"
                  >
                    Send message
                  </motion.span>
                )}
              </AnimatePresence>
            </span>
          </button>
          <AnimatePresence mode="wait">
            {status === "success" && (
              <motion.p
                key="ok"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-muted"
              >
                Message sent. Thank you.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p
                key="err"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-sm text-muted"
              >
                Something went wrong. Please try again, or email me directly.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>

      <AnimatePresence>
        {flight && (
          <FlyingJet
            key={flight.id}
            origin={flight}
            onComplete={() => setFlight(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;

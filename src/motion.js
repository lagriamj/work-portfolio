export const settle = [0.16, 1, 0.3, 1];

export function rise(index = 0, { animate = false } = {}) {
  const delay = Math.min(0.05 + index * 0.07, 0.33);
  return {
    initial: { opacity: 0, y: 12 },
    ...(animate
      ? { animate: { opacity: 1, y: 0 } }
      : {
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
        }),
    transition: { duration: 0.7, delay, ease: settle },
  };
}

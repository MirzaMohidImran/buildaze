"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  /** Renders as this element. Defaults to h2. */
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  /** Seconds between each word group. */
  stagger?: number;
  id?: string;
}

/**
 * Masked word-by-word text reveal. Visibility is observed on the heading
 * element itself (words are clipped by their masks, so observing them
 * individually would never fire).
 */
export function RevealText({
  text,
  className,
  as: Tag = "h2",
  delay = 0,
  stagger = 0.045,
  id,
}: RevealTextProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  // Low threshold + generous margin so large display headings still trigger on first paint
  const inView = useInView(ref, { once: true, amount: 0.05, margin: "120px 0px 0px 0px" });
  const words = useMemo(() => text.split(" "), [text]);
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setFallback(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  const show = inView || fallback;

  if (reduced) {
    return (
      <Tag id={id} className={className}>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay }}
          style={{ display: "inline-block" }}
        >
          {text}
        </motion.span>
      </Tag>
    );
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag id={id} ref={ref as any} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            paddingBottom: "0.08em",
            marginBottom: "-0.08em",
          }}
        >
          <motion.span
            style={{ display: "inline-block", willChange: "transform" }}
            initial={{ y: "110%" }}
            animate={show ? { y: 0 } : { y: "110%" }}
            transition={{
              duration: 0.8,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

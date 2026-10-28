"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealElement = "div" | "li";

interface RevealProps {
  children: ReactNode;
  /** Vertical travel in px. */
  y?: number;
  delay?: number;
  duration?: number;
  className?: string;
  /** Fraction of the element that must be visible before revealing. */
  amount?: number;
  /**
   * Render as a list item when used inside <ul>/<ol> so motion
   * wrappers do not break list semantics (axe list / listitem).
   */
  as?: RevealElement;
}

/** Viewport-triggered entrance. Runs once; collapses to a plain fade for reduced motion. */
export function Reveal({
  children,
  y = 28,
  delay = 0,
  duration = 0.9,
  className,
  amount = 0.25,
  as = "div",
}: RevealProps) {
  const reduced = useReducedMotion();
  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduced ? 0.3 : duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

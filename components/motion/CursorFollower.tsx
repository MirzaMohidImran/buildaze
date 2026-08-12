"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type CursorState = "default" | "link" | "view";

/**
 * Restrained custom cursor: a small dot with a trailing ring.
 * Shows "View" over portfolio canvases, expands over links/buttons.
 * Only active on fine pointers without reduced motion.
 */
export function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 400, damping: 40 });
  const ringY = useSpring(y, { stiffness: 400, damping: 40 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.body.dataset.customCursor = "true";

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("[data-cursor='view']")) setState("view");
      else if (target.closest("a, button, [role='button']")) setState("link");
      else setState("default");
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      delete document.body.dataset.customCursor;
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringSize = state === "view" ? 72 : state === "link" ? 44 : 28;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[100]">
      {/* trailing ring */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor:
            state === "default" ? "rgba(255,255,255,0.35)" : "rgba(37,99,235,0.9)",
          backgroundColor: state === "view" ? "rgba(37,99,235,0.92)" : "transparent",
          opacity: visible ? 1 : 0,
        }}
        animate={{ width: ringSize, height: ringSize }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
      >
        {state === "view" && (
          <span className="t-label text-[10px] font-medium text-white">View</span>
        )}
      </motion.div>
      {/* center dot */}
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-white"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible && state !== "view" ? 1 : 0,
        }}
      />
    </div>
  );
}

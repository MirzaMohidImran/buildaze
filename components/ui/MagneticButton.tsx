"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import Link from "next/link";
import { useCallback, useRef, type ReactNode } from "react";

interface MagneticButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  analytics?: string;
  arrow?: boolean;
}

/**
 * The Buildaze CTA: magnetic pull on fine pointers, animated arrow,
 * subtle inner highlight, tactile press.
 */
export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  analytics,
  arrow = true,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18 });
  const y = useSpring(my, { stiffness: 220, damping: 18 });

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (reduced || !ref.current) return;
      if (!window.matchMedia("(pointer: fine)").matches) return;
      const rect = ref.current.getBoundingClientRect();
      mx.set((e.clientX - rect.left - rect.width / 2) * 0.22);
      my.set((e.clientY - rect.top - rect.height / 2) * 0.22);
    },
    [mx, my, reduced],
  );

  const onMouseLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  const base =
    "group relative inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-medium transition-colors duration-300 select-none";
  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-bright shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_0_1px_rgba(37,99,235,0.4),0_8px_32px_-8px_rgba(37,99,235,0.5)]",
    ghost:
      "border border-line-strong text-white hover:border-white/40 hover:bg-white/[0.04]",
  };

  return (
    <motion.div style={{ x, y }} className="inline-block">
      <Link
        ref={ref}
        href={href}
        data-analytics={analytics}
        className={`${base} ${variants[variant]} ${className} active:scale-[0.97]`}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <span>{children}</span>
        {arrow && (
          <svg
            aria-hidden
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-300 ease-out group-hover:translate-x-1"
          >
            <path
              d="M1 7h11M8 2.5 12.5 7 8 11.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </Link>
    </motion.div>
  );
}

"use client";

import { motion } from "framer-motion";

/**
 * Service flow diagram.
 * Desktop: linear chip → chip.
 * Mobile: cascading circuit-trace (stair-step signal path) — not a wrapped row.
 */
export function ServiceFlow({
  flow,
  staggerDelay = 0.15,
}: {
  flow: string[];
  /** Base delay before the first node animates in. */
  staggerDelay?: number;
}) {
  return (
    <>
      {/* Mobile: cascading circuit trace */}
      <ol className="relative md:hidden" aria-label="How it flows">
        {flow.map((node, i) => {
          const isLast = i === flow.length - 1;
          const indent = Math.min(i, 4) * 16;

          return (
            <li key={node} className="relative" style={{ marginLeft: indent }}>
              {i > 0 && (
                <span
                  aria-hidden
                  className="absolute -top-3 -left-4 h-3 w-4 border-b border-l border-accent/50"
                />
              )}

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: staggerDelay + i * 0.1,
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex items-center gap-3 overflow-hidden border px-3.5 py-3 ${
                  isLast
                    ? "border-accent bg-accent-dim"
                    : "border-line-strong bg-ink-2/80"
                }`}
              >
                {/* Live signal tick on the leading edge */}
                <span
                  aria-hidden
                  className={`absolute top-0 bottom-0 left-0 w-[2px] ${
                    isLast ? "bg-accent" : "bg-accent/35"
                  }`}
                />
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 shrink-0 ${
                    isLast ? "bg-accent" : "bg-mist-2"
                  }`}
                />
                <span
                  className={`t-label min-w-0 flex-1 truncate tracking-[0.16em] ${
                    isLast ? "text-accent-soft" : "text-mist"
                  }`}
                >
                  {node}
                </span>
                <span className="font-mono text-[10px] text-mist-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>

              {!isLast && (
                <motion.span
                  aria-hidden
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{
                    delay: staggerDelay + 0.08 + i * 0.1,
                    duration: 0.3,
                  }}
                  className="ml-2 block h-3 w-px origin-top bg-accent/45"
                />
              )}
            </li>
          );
        })}
      </ol>

      {/* Desktop / tablet: linear chip flow */}
      <div className="hidden flex-wrap items-center gap-y-4 md:flex">
        {flow.map((node, i) => (
          <div key={node} className="flex items-center">
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: staggerDelay + i * 0.12,
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`t-label border px-3.5 py-2.5 whitespace-nowrap ${
                i === flow.length - 1
                  ? "border-accent bg-accent-dim text-accent-soft"
                  : "border-line-strong text-mist"
              }`}
            >
              {node}
            </motion.span>
            {i < flow.length - 1 && (
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: staggerDelay + 0.07 + i * 0.12, duration: 0.35 }}
                className="relative mx-1 h-px w-6 origin-left bg-accent/50 md:w-9"
              >
                <span className="absolute top-1/2 right-0 h-[5px] w-[5px] -translate-y-1/2 rotate-45 border-t border-r border-accent/70" />
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

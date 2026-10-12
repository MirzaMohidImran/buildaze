"use client";

import { Reveal } from "@/components/motion/Reveal";

/**
 * Compact brand-blue trust strip for the homepage.
 * Uses verified service categories — no invented client logos or metrics.
 */
const statements = [
  "Design",
  "Development",
  "Artificial Intelligence",
  "Digital Marketing",
  "Shopify",
  "Clear scope",
  "Practical handover",
  "Optional ongoing support",
];

export function TrustStrip() {
  const row = (ariaHidden: boolean) => (
    <ul aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {statements.map((statement) => (
        <li
          key={statement}
          className="t-label flex items-center gap-6 pr-8 whitespace-nowrap text-white/90"
        >
          {statement}
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rotate-45 border border-white/50"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label="Buildaze capabilities"
      className="surface-blue relative py-7 md:py-8"
    >
      <div aria-hidden className="build-grid pointer-events-none absolute inset-0 opacity-40" />
      <Reveal y={10} className="relative">
        <p className="t-label mb-5 text-center text-white/80">
          Design, development and digital growth — scoped around your goals
        </p>
      </Reveal>
      <div
        className="relative flex overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="animate-marquee flex">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </section>
  );
}

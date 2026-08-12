"use client";

import { Reveal } from "@/components/motion/Reveal";

/**
 * No verified client logos exist, so this strip uses verified capability
 * statements from the existing site instead of invented brand assets.
 */
const statements = [
  "Trusted by 50+ founders and operators",
  "MVP to production in 6–10 weeks",
  "Fixed-scope sprints",
  "Weekly live demos",
  "100% code ownership",
  "Senior specialists only",
  "PHI-safe & HIPAA-aligned workflows shipped",
  "Zero platform lock-in",
];

export function TrustStrip() {
  const row = (ariaHidden: boolean) => (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center"
    >
      {statements.map((statement) => (
        <li key={statement} className="t-label flex items-center gap-6 pr-6 whitespace-nowrap text-mist-2">
          {statement}
          <span aria-hidden className="inline-block h-1.5 w-1.5 rotate-45 border border-accent/60" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Trust" className="relative border-y border-line py-10">
      <Reveal y={12}>
        <p className="t-label mb-8 text-center text-mist-2">
          Trusted by founders, operators and scaling teams
        </p>
      </Reveal>
      <div
        className="flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
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

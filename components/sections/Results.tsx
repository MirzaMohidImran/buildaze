"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stats } from "@/lib/data/site";

/**
 * Proof as a calibration readout — one dense instrument, not three stacked monuments.
 * Mobile: tight measurement rows. Desktop: three columns on a shared baseline.
 */
export function Results() {
  const reduced = useReducedMotion();

  return (
    <section
      aria-labelledby="results-heading"
      className="relative overflow-hidden border-y border-line py-16 md:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(37,99,235,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[720px]">
            <SectionLabel index="05" label="Proof" />
            <RevealText
              as="h2"
              id="results-heading"
              text="Built for founders who need to ship."
              className="text-h2 mt-6 max-w-[640px] font-semibold text-white md:mt-8"
            />
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-[300px] text-[14px] leading-relaxed text-mist md:text-right md:text-[15px]">
              Verified from real fixed-scope engagements — not projections.
            </p>
          </Reveal>
        </div>

        {/* Calibration plate */}
        <div className="relative mt-12 md:mt-16">
          {/* Shared scan line */}
          <motion.div
            aria-hidden
            className="absolute top-0 right-0 left-0 h-px origin-left bg-accent"
            initial={reduced ? false : { scaleX: 0 }}
            whileInView={reduced ? undefined : { scaleX: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          />

          <ul className="grid grid-cols-1 md:grid-cols-3">
            {stats.map((stat, i) => {
              const meter = Math.min(stat.value, 100);
              return (
                <li
                  key={stat.label}
                  className="group relative border-b border-line py-7 last:border-b-0 md:border-b-0 md:border-r md:border-line md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
                >
                  <div className="flex items-baseline justify-between gap-4 md:block">
                    <div className="flex items-baseline gap-3 md:block">
                      <span className="t-label text-accent-soft md:mb-5 md:block">
                        0{i + 1}
                      </span>
                      <p className="text-[clamp(3.25rem,12vw,5.75rem)] leading-none font-semibold tracking-[-0.04em] text-white">
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </p>
                    </div>
                    <p className="max-w-[9.5rem] text-right text-[13px] leading-snug text-mist md:mt-5 md:max-w-none md:text-left md:text-[14.5px]">
                      {stat.label}
                    </p>
                  </div>

                  {/* Signal meter — reads like a live instrument, not a chart card */}
                  <div className="mt-5 flex items-center gap-3 md:mt-8">
                    <div className="relative h-px flex-1 overflow-hidden bg-line">
                      <motion.span
                        aria-hidden
                        className="absolute inset-y-0 left-0 bg-accent"
                        initial={reduced ? false : { width: 0 }}
                        whileInView={
                          reduced ? undefined : { width: `${meter}%` }
                        }
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{
                          delay: 0.2 + i * 0.12,
                          duration: 0.85,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        style={reduced ? { width: `${meter}%` } : undefined}
                      />
                    </div>
                    <span className="font-mono text-[10px] tabular-nums text-mist-2">
                      {String(stat.value).padStart(2, "0")}
                      {stat.suffix}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>

          <Reveal delay={0.25} className="mt-8 border-t border-line pt-6 md:mt-10 md:pt-8">
            <p className="t-label max-w-[36rem] text-mist-2">
              Same model on every build — fixed scope, weekly demos, full code ownership.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

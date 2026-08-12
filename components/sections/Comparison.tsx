"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { comparison } from "@/lib/data/process";

/** Two working models, presented side by side without inflammatory claims. */
export function Comparison() {
  return (
    <section aria-labelledby="comparison-heading" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="07" label="Two working models" />
        <RevealText
          as="h2"
          id="comparison-heading"
          text="Same budget. Very different outcomes."
          className="text-h2 mt-10 max-w-[860px] font-semibold text-white"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 lg:grid-cols-2 lg:gap-0">
          {/* Traditional model */}
          <Reveal y={36} className="lg:pr-10">
            <div className="h-full border border-line p-8 md:p-12">
              <p className="t-label text-mist-2">{comparison.traditional.title}</p>
              <ul className="mt-9 space-y-0">
                {comparison.traditional.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-4 border-b border-line py-4.5 text-[15px] leading-relaxed text-mist-2 last:border-b-0"
                  >
                    <span aria-hidden className="relative mt-2.5 block h-px w-3 shrink-0 bg-white/25">
                      <span className="absolute inset-0 rotate-90 bg-transparent" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Buildaze model */}
          <Reveal y={36} delay={0.12} className="lg:-mt-8 lg:mb-8">
            <div className="relative h-full overflow-hidden border border-accent/40 bg-ink-2 p-8 shadow-[0_0_80px_-30px_rgba(37,99,235,0.35)] md:p-12">
              <div aria-hidden className="build-grid-blue absolute inset-0 opacity-40" />
              <div className="relative">
                <p className="t-label flex items-center gap-3 text-accent-soft">
                  <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
                  {comparison.buildaze.title}
                </p>
                <ul className="mt-9 space-y-0">
                  {comparison.buildaze.points.map((point, i) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ delay: 0.2 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-start gap-4 border-b border-white/[0.07] py-4.5 text-[15px] leading-relaxed text-white last:border-b-0"
                    >
                      <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-1 shrink-0 text-accent">
                        <path d="M2 7.5 5.5 11 12 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

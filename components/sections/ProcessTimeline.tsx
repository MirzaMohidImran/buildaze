"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { processPhases } from "@/lib/data/process";

type SectionTone = "dark" | "light";

/**
 * Sticky-scroll process storytelling: the heading and progress line hold
 * position while the How We Work phases pass through the viewport.
 */
export function ProcessTimeline({ tone = "dark" }: { tone?: SectionTone }) {
  const isLight = tone === "light";
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.65", "end 0.75"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className={`relative scroll-mt-20 py-28 md:py-40${
        isLight ? " surface-soft" : ""
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="03" label="How we work" />
              <RevealText
                as="h2"
                id="process-heading"
                text="A clear path from conversation to handover."
                className="text-h2 mt-10 font-semibold text-white"
              />
              <Reveal delay={0.2} className="mt-8">
                <p className="max-w-[400px] text-[15.5px] leading-relaxed text-mist">
                  Four steps that keep scope, progress and ownership explicit.
                  Project timelines depend on what we agree — not a one-size
                  estimate for every engagement.
                </p>
              </Reveal>
            </div>
          </div>

          <div ref={ref} className="relative lg:col-span-7">
            <div aria-hidden className="absolute top-2 bottom-2 left-[5px] w-px bg-line" />
            <motion.div
              aria-hidden
              className="absolute top-2 left-[5px] w-px bg-accent"
              style={reduced ? { height: "100%" } : { height: progress }}
            />

            <ol className="space-y-20 md:space-y-28">
              {processPhases.map((phase) => (
                <li key={phase.index} className="relative pl-12 md:pl-16">
                  <span
                    aria-hidden
                    className={`absolute top-2 left-0 h-[11px] w-[11px] border border-accent ${isLight ? "bg-white" : "bg-ink"}`}
                  />
                  <Reveal y={34} amount={0.3}>
                    <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                      <span className="t-label text-accent-soft">{phase.index}</span>
                      <h3 className="text-h3 font-semibold text-white">{phase.name}</h3>
                    </div>
                    <p className="mt-5 max-w-[520px] text-[15.5px] leading-relaxed text-mist">
                      {phase.description}
                    </p>
                    <ul className="mt-6 space-y-2.5">
                      {phase.deliverables.map((deliverable) => (
                        <li key={deliverable} className="flex items-center gap-3 text-[14px] text-mist-2">
                          <span aria-hidden className="h-1 w-1 bg-accent" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

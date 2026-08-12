"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealText } from "@/components/motion/RevealText";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const PIPELINE = ["Idea", "Scope", "Design", "Build", "Ship", "Scale"];

/**
 * The Buildaze promise: one integrated team, one pipeline.
 * The pipeline diagram draws itself as the user scrolls.
 */
export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.45"],
  });
  const lineScale = useTransform(scrollYProgress, [0.25, 1], [0, 1]);

  return (
    <section aria-labelledby="manifesto-heading" className="relative py-28 md:py-44">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="01" label="The Buildaze model" />

        <div className="mt-10 max-w-[1000px]">
          <RevealText
            as="h2"
            id="manifesto-heading"
            text="Strategy. Design. Engineering. One team."
            className="text-h2 font-semibold text-white"
          />
          <Reveal delay={0.2} className="mt-8 max-w-[620px]">
            <p className="text-lead text-mist">
              Most agencies hand your product between departments and bill you
              for the friction. At Buildaze, the people who scope your build are
              the people who design it, engineer it and ship it — so nothing is
              lost in translation, and nothing waits in a queue.
            </p>
          </Reveal>
        </div>

        {/* Scroll-animated pipeline */}
        <div ref={ref} className="mt-20 md:mt-28">
          <div className="relative">
            <div aria-hidden className="rule absolute top-[5px] right-0 left-0" />
            <motion.div
              aria-hidden
              className="absolute top-[5px] left-0 h-px w-full origin-left bg-accent"
              style={reduced ? undefined : { scaleX: lineScale }}
            />
            <ol className="relative grid grid-cols-3 gap-y-12 md:grid-cols-6">
              {PIPELINE.map((step, i) => (
                <li key={step} className="pr-4">
                  <motion.span
                    aria-hidden
                    className="block h-[11px] w-[11px] border border-line-strong bg-ink"
                    initial={reduced ? undefined : { backgroundColor: "#0a0a0a", borderColor: "rgba(255,255,255,0.16)" }}
                    whileInView={
                      reduced
                        ? undefined
                        : { backgroundColor: "#2563eb", borderColor: "#2563eb" }
                    }
                    viewport={{ once: true, amount: 1 }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
                  />
                  <span className="t-label mt-5 block text-accent-soft">0{i + 1}</span>
                  <span className="mt-1.5 block text-[17px] font-medium tracking-tight text-white md:text-[19px]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <Reveal delay={0.3} className="mt-16">
            <p className="t-label text-mist-2">
              One pipeline. No handoffs. No departments. No friction billed by the hour.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

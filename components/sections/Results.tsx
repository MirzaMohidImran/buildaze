"use client";

import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stats } from "@/lib/data/site";

/** Editorial proof: verified numbers, staggered like a typographic composition. */
export function Results() {
  return (
    <section aria-labelledby="results-heading" className="relative overflow-hidden border-y border-line py-28 md:py-40">
      <div aria-hidden className="build-grid-blue fade-edges absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="05" label="Proof" />
        <RevealText
          as="h2"
          id="results-heading"
          text="Built for founders who need to ship."
          className="text-h2 mt-10 max-w-[820px] font-semibold text-white"
        />

        <div className="mt-16 grid grid-cols-1 gap-14 md:mt-24 md:grid-cols-3 md:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.12} y={40}>
              <div
                className="border-l border-line-strong pl-7"
                style={{ marginTop: `${i * 44}px` }}
              >
                <p className="text-[clamp(3.6rem,7vw,6.5rem)] leading-none font-semibold tracking-[-0.03em] text-white">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="t-label mt-4 text-mist-2">{stat.label}</p>
                <span aria-hidden className="mt-5 block h-px w-12 bg-accent" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-20 md:mt-28">
          <p className="max-w-[560px] text-[15.5px] leading-relaxed text-mist">
            Numbers from real engagements — the same fixed-scope, weekly-demo
            model every Buildaze project runs on.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

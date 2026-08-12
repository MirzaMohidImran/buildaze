"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { industries } from "@/lib/data/stack";

/** Industries backed by actual shipped case studies — no claimed expertise without evidence. */
export function Industries() {
  return (
    <section aria-labelledby="industries-heading" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="12" label="Industries" />
            <RevealText
              as="h2"
              id="industries-heading"
              text="Where we've already shipped."
              className="text-h2 mt-10 font-semibold text-white"
            />
            <Reveal delay={0.2} className="mt-8">
              <p className="max-w-[360px] text-[15.5px] leading-relaxed text-mist">
                Every industry here is backed by a production build with a
                measured result — not a claimed specialty.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            {industries.map((industry, i) => (
              <Reveal key={industry.name} delay={i * 0.06} y={28}>
                <div className="group flex flex-col gap-3 border-t border-line py-8 transition-colors hover:bg-white/[0.015] md:flex-row md:items-baseline md:gap-10 md:py-10">
                  <span className="t-label w-8 shrink-0 text-accent-soft">
                    0{i + 1}
                  </span>
                  <h3 className="w-56 shrink-0 text-[22px] font-medium tracking-tight text-white transition-transform duration-500 group-hover:translate-x-1.5 md:text-[26px]">
                    {industry.name}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-mist">
                    {industry.proof}
                  </p>
                </div>
              </Reveal>
            ))}
            <div className="rule" />
          </div>
        </div>
      </div>
    </section>
  );
}

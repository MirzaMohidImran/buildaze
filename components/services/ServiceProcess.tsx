"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Service } from "@/lib/data/services";

export function ServiceProcess({
  service,
  sectionIndex = "03",
}: {
  service: Service;
  sectionIndex?: string;
}) {
  const { page } = service;

  return (
    <section aria-labelledby="service-process-heading" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Process" />
        <RevealText
          as="h2"
          id="service-process-heading"
          text="From idea to production."
          className="text-h2 mt-10 max-w-[640px] font-semibold text-white"
        />

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
          {page.process.map((phase, i) => (
            <Reveal key={phase.index} delay={i * 0.08} y={28} className="bg-ink p-8 md:p-10">
              <div className="flex items-baseline justify-between gap-4">
                <span className="t-label text-accent-soft">{phase.index}</span>
                <span className="t-label text-mist-2">{phase.duration}</span>
              </div>
              <h3 className="mt-8 text-[22px] font-medium tracking-tight text-white md:text-[24px]">
                {phase.name}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-mist">{phase.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

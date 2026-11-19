"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ServicePageContent } from "@/lib/data/services";

export function ServiceIndustries({
  industries,
  sectionIndex = "07",
}: {
  industries: NonNullable<ServicePageContent["industries"]>;
  sectionIndex?: string;
}) {
  return (
    <section
      aria-labelledby="service-industries-heading"
      className="surface-page relative border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Industries" />
        <p className="t-label mt-8 text-accent-soft">{industries.eyebrow}</p>
        <RevealText
          as="h2"
          id="service-industries-heading"
          text={industries.headline}
          className="text-h2 mt-5 max-w-[720px] font-semibold text-white"
        />
        {industries.intro && (
          <Reveal delay={0.1} className="mt-6 max-w-[560px] space-y-4">
            {industries.intro.map((paragraph) => (
              <p key={paragraph} className="text-[15.5px] leading-relaxed text-mist">
                {paragraph}
              </p>
            ))}
          </Reveal>
        )}

        <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {industries.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.05} y={20} className="bg-ink p-8 md:p-10">
              <h3 className="text-[20px] font-medium tracking-tight text-white">
                {item.name}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-mist">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

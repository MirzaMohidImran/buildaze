"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Service } from "@/lib/data/services";

export function ServiceOverview({
  service,
  sectionIndex = "01",
}: {
  service: Service;
  sectionIndex?: string;
}) {
  const { page } = service;

  return (
    <section aria-labelledby="service-overview-heading" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionLabel index={sectionIndex} label="Overview" />
            <RevealText
              as="h2"
              id="service-overview-heading"
              text={page.overviewTitle}
              className="text-h2 mt-10 max-w-[480px] font-semibold text-white"
            />
            <Reveal delay={0.15} className="mt-8">
              <ul className="flex flex-wrap gap-2">
                {page.stackTags.map((tag) => (
                  <li
                    key={tag}
                    className="t-label border border-line px-3 py-1.5 text-[10px] text-mist-2"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7 space-y-7">
            {page.overview.map((paragraph, i) => (
              <Reveal key={i} delay={0.08 * i} y={24}>
                <p className="text-[16.5px] leading-relaxed text-mist md:text-[17.5px]">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

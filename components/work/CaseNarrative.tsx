"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { CaseStudy } from "@/lib/data/work";

export function CaseNarrative({ study }: { study: CaseStudy }) {
  const sections = [
    {
      index: "01",
      label: "Challenge",
      heading: "The problem we walked into.",
      paragraphs: study.page.challengeDetail,
    },
    {
      index: "02",
      label: "Approach",
      heading: "How we built it.",
      paragraphs: study.page.approach,
    },
    {
      index: "03",
      label: "Results",
      heading: "What changed after launch.",
      paragraphs: study.page.results,
    },
  ] as const;

  return (
    <section aria-label="Case narrative" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] space-y-28 px-5 md:space-y-36 md:px-10">
        {sections.map((section) => (
          <div
            key={section.index}
            className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16"
          >
            <div className="lg:col-span-4">
              <SectionLabel index={section.index} label={section.label} />
              <RevealText
                as="h2"
                text={section.heading}
                className="text-h2 mt-10 max-w-[400px] font-semibold text-white"
              />
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-6">
              {section.paragraphs.map((paragraph, i) => (
                <Reveal key={i} delay={0.06 * i} y={22}>
                  <p className="text-[16.5px] leading-relaxed text-mist md:text-[17.5px]">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

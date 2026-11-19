"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ServiceRichText } from "@/components/services/ServiceRichText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ServiceDetailSection } from "@/lib/data/services";

export function ServiceDetailSections({
  sections,
  sectionIndex = "02",
  headline = "How this work is scoped.",
}: {
  sections: ServiceDetailSection[];
  sectionIndex?: string;
  headline?: string;
}) {
  if (!sections.length) return null;

  return (
    <section
      aria-labelledby="service-detail-sections-heading"
      className="surface-soft relative border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="In depth" />
        <RevealText
          as="h2"
          id="service-detail-sections-heading"
          text={headline}
          className="text-h2 mt-10 max-w-[720px] font-semibold text-white"
        />

        <div className="mt-16 space-y-16 md:space-y-20">
          {sections.map((section, i) => (
            <Reveal key={section.id} delay={Math.min(i * 0.05, 0.2)} y={24}>
              <article className="grid grid-cols-1 gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <h3 className="text-h3 max-w-[360px] font-semibold text-white">
                    {section.title}
                  </h3>
                </div>
                <div className="space-y-5 lg:col-span-8">
                  {section.paragraphs.map((parts, pi) => (
                    <p
                      key={`${section.id}-p-${pi}`}
                      className="max-w-[680px] text-[16px] leading-relaxed text-mist md:text-[16.5px]"
                    >
                      <ServiceRichText parts={parts} />
                    </p>
                  ))}
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="max-w-[680px] space-y-3 pt-1">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[15px] leading-relaxed text-mist"
                        >
                          <span
                            aria-hidden
                            className="mt-2 h-1 w-1 shrink-0 bg-accent"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.callout && (
                    <div className="mt-4 max-w-[680px] rounded-panel border border-line bg-ink/40 p-6 md:p-7">
                      <p className="t-label text-accent-soft">
                        {section.callout.title}
                      </p>
                      <p className="mt-3 text-[15px] leading-relaxed text-mist">
                        <ServiceRichText parts={section.callout.body} />
                      </p>
                    </div>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseVisual } from "@/components/work/CaseVisual";
import type { Service } from "@/lib/data/services";
import { caseStudies } from "@/lib/data/work";

export function ServiceRelatedWork({
  service,
  sectionIndex = "04",
}: {
  service: Service;
  sectionIndex?: string;
}) {
  const studies = caseStudies.filter((c) =>
    service.page.relatedWorkIds.includes(c.id),
  );

  if (studies.length === 0) return null;

  return (
    <section
      aria-labelledby="service-work-heading"
      className="relative border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Related work" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <RevealText
            as="h2"
            id="service-work-heading"
            text="Shipped in this discipline."
            className="text-h2 max-w-[640px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-[15px] font-medium text-mist transition-colors hover:text-white"
            >
              <span className="border-b border-line-strong pb-0.5 group-hover:border-accent">
                View all work
              </span>
              <svg aria-hidden width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-accent transition-transform group-hover:translate-x-0.5">
                <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {studies.map((study, i) => (
            <Reveal key={study.id} delay={i * 0.06} y={32}>
              <Link
                href={`/work/${study.slug}`}
                data-analytics={`service-work-${study.id}`}
                className="group block border border-line transition-colors hover:border-line-strong"
              >
                <div className="border-b border-line">
                  <CaseVisual study={study} />
                </div>
                <div className="p-7 md:p-8">
                  <p className="t-label flex items-center gap-3 text-mist-2">
                    <span className="text-accent-soft">{study.index}</span>
                    <span aria-hidden className="h-px w-6 bg-line-strong" />
                    {study.industry}
                  </p>
                  <h3 className="mt-4 text-[22px] font-medium tracking-tight text-white transition-colors group-hover:text-accent-soft">
                    {study.name}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-mist">{study.challenge}</p>
                  <div className="mt-6 flex items-baseline gap-3 border-l-2 border-accent pl-4">
                    <span className="text-[28px] font-semibold tracking-tight text-accent-soft">
                      {study.outcome.value}
                    </span>
                    <span className="text-[13.5px] text-mist">{study.outcome.label}</span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

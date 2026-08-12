"use client";

import Link from "next/link";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ShopifyWorkVisual } from "@/components/services/ShopifyWorkVisual";
import type { ServiceSelectedWork } from "@/lib/data/services";

export function ServiceSelectedWorkSection({
  selectedWork,
  sectionIndex = "03",
}: {
  selectedWork: ServiceSelectedWork;
  sectionIndex?: string;
}) {
  return (
    <section
      aria-labelledby="service-selected-work-heading"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Selected work" />
        <p className="t-label mt-8 text-accent-soft">{selectedWork.eyebrow}</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-8">
          <RevealText
            as="h2"
            id="service-selected-work-heading"
            text={selectedWork.headline}
            className="text-h2 max-w-[760px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="max-w-[380px] space-y-4">
              {selectedWork.intro.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-20 space-y-24 md:space-y-32">
          {selectedWork.cases.map((study, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={study.id}
                aria-label={study.title}
                className="border-t border-line pt-14 md:pt-16"
              >
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                  <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                    <Parallax travel={-36}>
                      <Reveal y={36} amount={0.2}>
                        <Link
                          href={study.href}
                          data-analytics={`shopify-work-visual-${study.id}`}
                          aria-label={`${study.cta}: ${study.title}`}
                          className="block overflow-hidden border border-transparent transition-colors hover:border-line-strong"
                        >
                          <ShopifyWorkVisual visual={study.visual} />
                        </Link>
                      </Reveal>
                    </Parallax>
                  </div>

                  <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                    <Reveal delay={0.1} y={28}>
                      <p className="t-label flex items-center gap-3 text-mist-2">
                        <span className="text-accent-soft">{study.index}</span>
                        <span aria-hidden className="h-px w-8 bg-line-strong" />
                        {study.category}
                      </p>
                      <h3 className="text-h3 mt-5 font-semibold text-white">{study.title}</h3>
                      <p className="mt-5 text-[15.5px] leading-relaxed text-mist">
                        {study.description}
                      </p>

                      {study.outcome && (
                        <div className="mt-8 flex items-baseline gap-4 border-l-2 border-accent pl-5">
                          <span className="text-[clamp(1.75rem,2.8vw,2.5rem)] leading-none font-semibold tracking-tight text-accent-soft">
                            {study.outcome.value}
                          </span>
                          <span className="text-[13.5px] text-mist">{study.outcome.label}</span>
                        </div>
                      )}

                      <ul className="mt-8 flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <li
                            key={tag}
                            className="t-label border border-line px-3 py-1.5 text-[10px] text-mist-2"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={study.href}
                        data-analytics={`shopify-work-cta-${study.id}`}
                        className="group mt-9 inline-flex items-center gap-2.5 text-[15px] font-medium text-white"
                      >
                        <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent-soft">
                          {study.cta}
                        </span>
                        <svg
                          aria-hidden
                          width="13"
                          height="13"
                          viewBox="0 0 14 14"
                          fill="none"
                          className="text-accent transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path
                            d="M1 7h11M8 2.5 12.5 7 8 11.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </Reveal>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

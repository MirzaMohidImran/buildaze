"use client";

import Link from "next/link";
import { Parallax } from "@/components/motion/Parallax";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseVisual } from "@/components/work/CaseVisual";
import { caseStudies } from "@/lib/data/work";

export function FeaturedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="relative scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="04" label="Featured work" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <RevealText
            as="h2"
            id="work-heading"
            text="Real products. Measured results."
            className="text-h2 max-w-[760px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="flex flex-col items-start gap-4 sm:items-end">
              <p className="max-w-[380px] text-[15.5px] leading-relaxed text-mist sm:text-right">
                Every engagement below shipped to production and moved a number
                the client cared about.
              </p>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-[14.5px] font-medium text-mist transition-colors hover:text-white"
              >
                <span className="border-b border-line-strong pb-0.5 group-hover:border-accent">
                  View all work
                </span>
                <svg aria-hidden width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-accent transition-transform group-hover:translate-x-0.5">
                  <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 space-y-28 md:space-y-40">
          {caseStudies.map((study, i) => {
            const flip = i % 2 === 1;
            return (
              <article
                key={study.id}
                aria-label={study.name}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14"
              >
                <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <Parallax travel={-46}>
                    <Reveal y={40} amount={0.2}>
                      <Link
                        href={`/work/${study.slug}`}
                        data-analytics={`work-visual-${study.id}`}
                        data-cursor="view"
                        className="block overflow-hidden border border-transparent transition-colors hover:border-line-strong"
                        aria-label={`${study.name} — view case study`}
                      >
                        <CaseVisual study={study} />
                      </Link>
                    </Reveal>
                  </Parallax>
                </div>

                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <Reveal delay={0.1} y={30}>
                    <p className="t-label flex items-center gap-3 text-mist-2">
                      <span className="text-accent-soft">{study.index}</span>
                      <span aria-hidden className="h-px w-8 bg-line-strong" />
                      {study.industry}
                    </p>
                    <h3 className="text-h3 mt-5 font-semibold text-white">
                      <Link
                        href={`/work/${study.slug}`}
                        className="transition-colors hover:text-accent-soft"
                      >
                        {study.name}
                      </Link>
                    </h3>

                    <dl className="mt-8 space-y-6">
                      <div>
                        <dt className="t-label mb-2 text-mist-2">Challenge</dt>
                        <dd className="text-[15px] leading-relaxed text-mist">{study.challenge}</dd>
                      </div>
                      <div>
                        <dt className="t-label mb-2 text-mist-2">What we shipped</dt>
                        <dd className="text-[15px] leading-relaxed text-mist">{study.solution}</dd>
                      </div>
                    </dl>

                    <div className="mt-9 flex items-baseline gap-4 border-l-2 border-accent pl-5">
                      <span className="text-[clamp(2.2rem,3vw,3rem)] leading-none font-semibold tracking-tight text-accent-soft">
                        {study.outcome.value}
                      </span>
                      <span className="text-[14px] text-mist">{study.outcome.label}</span>
                    </div>

                    <ul className="mt-8 flex flex-wrap gap-2">
                      {study.deliverables.map((deliverable) => (
                        <li key={deliverable} className="t-label border border-line px-3 py-1.5 text-[10px] text-mist-2">
                          {deliverable}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/work/${study.slug}`}
                      data-analytics={`work-cta-${study.id}`}
                      className="group mt-9 inline-flex items-center gap-2.5 text-[15px] font-medium text-white"
                    >
                      <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent-soft">
                        View case study
                      </span>
                      <svg aria-hidden width="13" height="13" viewBox="0 0 14 14" fill="none" className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

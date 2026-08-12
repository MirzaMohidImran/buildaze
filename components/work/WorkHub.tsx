"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseVisual } from "@/components/work/CaseVisual";
import { caseStudies } from "@/lib/data/work";

export function WorkHub() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section
          aria-labelledby="work-hub-heading"
          className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
        >
          <div aria-hidden className="build-grid fade-edges absolute inset-0" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 65% 35%, rgba(37,99,235,0.13), transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="t-label flex flex-wrap items-center gap-2 text-mist-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-accent-soft" aria-current="page">
                  Work
                </li>
              </ol>
            </nav>

            <SectionLabel index="00" label="Work" />
            <RevealText
              as="h1"
              id="work-hub-heading"
              text="Real products. Measured results."
              className="text-display mt-10 max-w-[920px] font-semibold text-white"
            />
            <Reveal delay={0.2} className="mt-8">
              <p className="max-w-[540px] text-lead text-mist">
                Every engagement below shipped to production and moved a number
                the client cared about.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10">
              <MagneticButton href="#contact" analytics="work-hub-cta">
                Start a Project
              </MagneticButton>
            </Reveal>
          </div>
        </section>

        <section aria-label="All case studies" className="relative pb-28 md:pb-40">
          <div className="mx-auto max-w-[1600px] space-y-16 px-5 md:space-y-24 md:px-10">
            {caseStudies.map((study, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={study.id} delay={0.04} y={36}>
                  <Link
                    href={`/work/${study.slug}`}
                    data-analytics={`work-hub-${study.id}`}
                    className="group grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14"
                  >
                    <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                      <div className="overflow-hidden border border-line transition-colors group-hover:border-line-strong">
                        <CaseVisual study={study} />
                      </div>
                    </div>
                    <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                      <p className="t-label flex items-center gap-3 text-mist-2">
                        <span className="text-accent-soft">{study.index}</span>
                        <span aria-hidden className="h-px w-8 bg-line-strong" />
                        {study.industry}
                      </p>
                      <h2 className="text-h3 mt-5 font-semibold text-white transition-colors group-hover:text-accent-soft">
                        {study.name}
                      </h2>
                      <p className="mt-5 text-[15.5px] leading-relaxed text-mist">
                        {study.page.summary}
                      </p>
                      <div className="mt-8 flex items-baseline gap-4 border-l-2 border-accent pl-5">
                        <span className="text-[clamp(2.2rem,3vw,3rem)] leading-none font-semibold tracking-tight text-accent-soft">
                          {study.outcome.value}
                        </span>
                        <span className="text-[14px] text-mist">{study.outcome.label}</span>
                      </div>
                      <span className="mt-9 inline-flex items-center gap-2.5 text-[15px] font-medium text-white">
                        <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent-soft">
                          View case study
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
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </section>

        <ContactCTA sectionIndex="01" />
      </main>
      <Footer />
    </>
  );
}

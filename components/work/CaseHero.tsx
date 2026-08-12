"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { CaseVisual } from "@/components/work/CaseVisual";
import type { CaseStudy } from "@/lib/data/work";

export function CaseHero({ study }: { study: CaseStudy }) {
  return (
    <section
      aria-labelledby="case-hero-heading"
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
    >
      <div aria-hidden className="build-grid fade-edges absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 75% 25%, rgba(37,99,235,0.14), transparent 70%)",
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
            <li>
              <Link href="/work" className="transition-colors hover:text-white">
                Work
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-accent-soft" aria-current="page">
              {study.name}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="t-label flex items-center gap-3 text-mist-2">
              <span aria-hidden className="inline-block h-1.5 w-1.5 bg-accent" />
              <span className="text-accent-soft">{study.index}</span>
              <span aria-hidden className="inline-block h-px w-8 bg-line-strong" />
              {study.industry}
            </p>

            <RevealText
              as="h1"
              id="case-hero-heading"
              text={study.page.headline}
              className="text-display mt-8 font-semibold text-white"
            />

            <Reveal delay={0.2} className="mt-8">
              <p className="max-w-[520px] text-lead text-mist">{study.page.summary}</p>
            </Reveal>

            <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton href="#contact" analytics={`case-hero-cta-${study.id}`}>
                Discuss a build like this
              </MagneticButton>
              <MagneticButton
                href="/work"
                variant="ghost"
                analytics={`case-hero-work-${study.id}`}
              >
                All work
              </MagneticButton>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal y={40} delay={0.1}>
              <div className="flex items-baseline gap-4 border-l-2 border-accent pl-6">
                <span className="text-[clamp(3rem,6vw,5rem)] leading-none font-semibold tracking-tight text-accent-soft">
                  {study.outcome.value}
                </span>
                <span className="max-w-[160px] text-[15px] text-mist">{study.outcome.label}</span>
              </div>
              <p className="t-label mt-6 text-mist-2">Timeline · {study.page.timeline}</p>
            </Reveal>
          </div>
        </div>

        <Reveal y={48} delay={0.15} className="mt-16 md:mt-20">
          <CaseVisual study={study} />
        </Reveal>
      </div>
    </section>
  );
}

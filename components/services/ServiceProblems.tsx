"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ServiceProblemsContent } from "@/lib/data/services";

export function ServiceProblems({
  problems,
  sectionIndex = "04",
}: {
  problems: ServiceProblemsContent;
  sectionIndex?: string;
}) {
  return (
    <section
      aria-labelledby="service-problems-heading"
      className="relative border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Why brands come to us" />
        <p className="t-label mt-8 text-accent-soft">{problems.eyebrow}</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-10">
          <RevealText
            as="h2"
            id="service-problems-heading"
            text={problems.headline}
            className="text-h2 max-w-[780px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="max-w-[400px] space-y-4">
              {problems.intro.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {problems.problems.map((problem, i) => (
            <Reveal
              key={problem.index}
              delay={Math.min(i * 0.05, 0.25)}
              y={28}
              className="bg-ink p-7 md:p-9"
            >
              <p className="t-label flex items-center gap-3 text-mist-2">
                <span className="text-accent-soft">{problem.index}</span>
                <span aria-hidden className="h-px w-6 bg-line-strong" />
                {problem.name}
              </p>
              <h3 className="mt-6 text-[20px] font-medium tracking-tight text-white md:text-[22px]">
                {problem.title}
              </h3>
              <p className="mt-4 text-[14.5px] leading-relaxed text-mist">
                {problem.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal y={32} className="relative mt-20 overflow-hidden border border-line p-8 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 10% 20%, rgba(37,99,235,0.1), transparent 65%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="text-h3 max-w-[720px] font-semibold text-white">
                {problems.closingTitle}
              </h3>
              <p className="mt-5 max-w-[560px] text-[16px] leading-relaxed text-mist">
                {problems.closingBody}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <MagneticButton
                href={problems.ctaHref}
                analytics="shopify-problems-cta"
              >
                {problems.ctaLabel}
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

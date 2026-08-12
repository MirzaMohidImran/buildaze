"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CaseVisual } from "@/components/work/CaseVisual";
import type { CaseStudy } from "@/lib/data/work";

export function CaseNext({ next }: { next: CaseStudy }) {
  return (
    <section
      aria-labelledby="case-next-heading"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="05" label="Next project" />
        <RevealText
          as="h2"
          id="case-next-heading"
          text="Continue through the work."
          className="text-h2 mt-10 max-w-[640px] font-semibold text-white"
        />

        <Reveal y={36} className="mt-14">
          <Link
            href={`/work/${next.slug}`}
            data-analytics={`case-next-${next.id}`}
            className="group grid grid-cols-1 overflow-hidden border border-line transition-colors hover:border-line-strong lg:grid-cols-12"
          >
            <div className="border-b border-line lg:col-span-7 lg:border-r lg:border-b-0">
              <CaseVisual study={next} />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-5">
              <p className="t-label flex items-center gap-3 text-mist-2">
                <span className="text-accent-soft">{next.index}</span>
                <span aria-hidden className="h-px w-6 bg-line-strong" />
                {next.industry}
              </p>
              <h3 className="text-h3 mt-5 font-semibold text-white transition-colors group-hover:text-accent-soft">
                {next.name}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-mist">{next.page.summary}</p>
              <div className="mt-8 flex items-baseline gap-3 border-l-2 border-accent pl-4">
                <span className="text-[28px] font-semibold tracking-tight text-accent-soft">
                  {next.outcome.value}
                </span>
                <span className="text-[13.5px] text-mist">{next.outcome.label}</span>
              </div>
              <span className="mt-10 inline-flex items-center gap-2.5 text-[15px] font-medium text-white">
                <span className="border-b border-accent pb-0.5">View case study</span>
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
      </div>
    </section>
  );
}

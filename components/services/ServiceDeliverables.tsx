"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Service } from "@/lib/data/services";

export function ServiceDeliverables({
  service,
  sectionIndex = "02",
}: {
  service: Service;
  sectionIndex?: string;
}) {
  const { page } = service;

  return (
    <section
      aria-labelledby="service-deliverables-heading"
      className="relative border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="What we ship" />
        <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <RevealText
              as="h2"
              id="service-deliverables-heading"
              text={page.solutionsTitle}
              className="text-h2 max-w-[480px] font-semibold text-white"
            />
            <Reveal delay={0.15} className="mt-10">
              <ul className="space-y-3.5">
                {page.solutions.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15.5px] text-mist">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <Reveal y={30} className="build-grid relative border border-line p-8 md:p-10">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 20% 10%, rgba(37,99,235,0.1), transparent 70%)",
                }}
              />
              <div className="relative">
                <p className="t-label text-accent-soft">Key deliverables</p>
                <ul className="mt-8 space-y-5">
                  {page.deliverables.map((item) => (
                    <li key={item} className="border-b border-line pb-5 text-[15px] leading-relaxed text-mist last:border-0 last:pb-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal y={30} delay={0.1} className="border border-line bg-ink-2 p-8 md:p-10">
              <p className="t-label text-mist-2">What&apos;s included</p>
              <ul className="mt-8 space-y-4">
                {page.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-white">
                    <span aria-hidden className="mt-1 text-accent-soft">
                      +
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

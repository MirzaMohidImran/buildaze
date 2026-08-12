"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { engagements } from "@/lib/data/pricing";

/** The existing Buildaze engagement models, presented as fixed-scope engagements. */
export function PricingSection() {
  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="relative scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="15" label="Working together" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <RevealText
            as="h2"
            id="pricing-heading"
            text="Fixed scope. Transparent cost. No surprises."
            className="text-h2 max-w-[860px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <p className="max-w-[380px] text-[15.5px] leading-relaxed text-mist">
              Two ways to start. Both end with something real: a signed scope,
              working software and full ownership.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {engagements.map((engagement, i) => (
            <Reveal key={engagement.id} delay={i * 0.12} y={40}>
              <div
                className={`relative flex h-full flex-col overflow-hidden border p-8 md:p-12 ${
                  engagement.featured
                    ? "border-accent/50 bg-ink-2 shadow-[0_0_90px_-40px_rgba(37,99,235,0.45)]"
                    : "border-line"
                }`}
              >
                {engagement.featured && (
                  <div aria-hidden className="build-grid-blue absolute inset-0 opacity-30" />
                )}
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="t-label text-mist-2">{engagement.bestFor}</p>
                      <h3 className="mt-3 text-[26px] font-semibold tracking-tight text-white md:text-[30px]">
                        {engagement.name}
                      </h3>
                    </div>
                    <span className="t-label border border-line px-3 py-1.5 whitespace-nowrap text-mist-2">
                      {engagement.timeline}
                    </span>
                  </div>

                  <div className="mt-8 flex items-baseline gap-3">
                    <span className="text-[clamp(2.4rem,3.5vw,3.4rem)] leading-none font-semibold tracking-tight text-white">
                      {engagement.price}
                    </span>
                    <span className="t-label text-accent-soft">{engagement.priceNote}</span>
                  </div>

                  <p className="mt-6 max-w-[440px] text-[15px] leading-relaxed text-mist">
                    {engagement.description}
                  </p>

                  <ul className="mt-9 space-y-3.5 border-t border-line pt-8">
                    {engagement.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-center gap-3.5 text-[14.5px] text-mist">
                        <svg aria-hidden width="13" height="13" viewBox="0 0 14 14" fill="none" className="shrink-0 text-accent">
                          <path d="M2 7.5 5.5 11 12 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {deliverable}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <MagneticButton
                      href="#contact"
                      variant={engagement.featured ? "primary" : "ghost"}
                      analytics={`pricing-cta-${engagement.id}`}
                    >
                      Start with {engagement.name}
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-10">
          <p className="t-label flex flex-wrap items-center gap-3 text-mist-2">
            <span aria-hidden className="h-1 w-1 bg-accent" />
            Larger or ongoing engagements are scoped individually — tell us what you&apos;re building.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

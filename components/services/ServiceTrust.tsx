"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ServiceTrustContent } from "@/lib/data/services";

export function ServiceTrust({
  trust,
  sectionIndex = "02",
}: {
  trust: ServiceTrustContent;
  sectionIndex?: string;
}) {
  const logos = trust.logos ?? [];
  const hasLogos = logos.length > 0;

  const statementRow = (ariaHidden: boolean) => (
    <ul aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {trust.trustedBy.map((item) => (
        <li
          key={item}
          className="t-label flex items-center gap-6 pr-6 whitespace-nowrap text-mist-2"
        >
          {item}
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rotate-45 border border-accent/60"
          />
        </li>
      ))}
    </ul>
  );

  const logoRow = (ariaHidden: boolean) => (
    <ul aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {logos.map((logo) => (
        <li key={logo.name} className="flex items-center gap-10 pr-10">
          <Image
            src={logo.src}
            alt={logo.name}
            width={140}
            height={40}
            className="h-8 w-auto max-w-[140px] object-contain opacity-55 grayscale transition-opacity duration-300 hover:opacity-90 md:h-9"
          />
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rotate-45 border border-accent/60"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-labelledby="service-trust-heading"
      className="relative border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Trust & proof" />
        <p className="t-label mt-8 text-accent-soft">{trust.eyebrow}</p>
        <RevealText
          as="h2"
          id="service-trust-heading"
          text={trust.headline}
          className="text-h2 mt-5 max-w-[820px] font-semibold text-white"
        />
        <Reveal delay={0.15} className="mt-8">
          <p className="max-w-[640px] text-[16.5px] leading-relaxed text-mist md:text-[17.5px]">
            {trust.body}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {trust.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 0.05}
              y={24}
              className="bg-ink px-5 py-8 md:px-7 md:py-10"
            >
              <p className="text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold tracking-tight text-accent-soft">
                {stat.value}
              </p>
              <p className="mt-3 text-[13.5px] leading-snug text-mist">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12">
          <p className="max-w-[720px] text-[15px] leading-relaxed text-mist-2">
            {trust.closing}
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-16">
          <p className="t-label mb-8 text-mist-2">Trusted by</p>
          <div
            className="flex overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <div className="animate-marquee flex">
              {hasLogos ? (
                <>
                  {logoRow(false)}
                  {logoRow(true)}
                </>
              ) : (
                <>
                  {statementRow(false)}
                  {statementRow(true)}
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ServicePageContent } from "@/lib/data/services";

export function ServiceLearnMore({
  learnMore,
  sectionIndex = "08",
}: {
  learnMore: NonNullable<ServicePageContent["learnMore"]>;
  sectionIndex?: string;
}) {
  if (!learnMore.links.length) return null;

  return (
    <section
      aria-labelledby="service-learn-more-heading"
      className="surface-soft relative border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Resources" />
        <p className="t-label mt-8 text-accent-soft">{learnMore.eyebrow}</p>
        <RevealText
          as="h2"
          id="service-learn-more-heading"
          text={learnMore.headline}
          className="text-h2 mt-5 max-w-[720px] font-semibold text-white"
        />
        {learnMore.intro && (
          <Reveal delay={0.1} className="mt-6 max-w-[560px] space-y-4">
            {learnMore.intro.map((paragraph) => (
              <p key={paragraph} className="text-[15.5px] leading-relaxed text-mist">
                {paragraph}
              </p>
            ))}
          </Reveal>
        )}

        <ul className="mt-12 max-w-[720px] space-y-0 border-t border-line">
          {learnMore.links.map((link, i) => (
            <Reveal key={link.href} delay={i * 0.04} y={16}>
              <li className="border-b border-line">
                <Link
                  href={link.href}
                  className="group flex flex-col gap-2 py-6 transition-colors md:flex-row md:items-baseline md:justify-between md:gap-8"
                >
                  <span className="text-[17px] font-medium tracking-tight text-white group-hover:text-accent-soft">
                    {link.label}
                  </span>
                  {link.description && (
                    <span className="max-w-[360px] text-[14px] leading-relaxed text-mist-2 md:text-right">
                      {link.description}
                    </span>
                  )}
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

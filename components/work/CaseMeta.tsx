"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";
import type { CaseStudy } from "@/lib/data/work";

export function CaseMeta({ study }: { study: CaseStudy }) {
  const related = services.filter((s) =>
    study.page.relatedServiceIds.includes(s.id),
  );

  return (
    <section
      aria-labelledby="case-meta-heading"
      className="relative border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="04" label="Project details" />
        <RevealText
          as="h2"
          id="case-meta-heading"
          text="What shipped with this build."
          className="text-h2 mt-10 max-w-[640px] font-semibold text-white"
        />

        <div className="mt-16 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
          <Reveal y={28} className="bg-ink p-8 md:p-10">
            <p className="t-label text-accent-soft">Deliverables</p>
            <ul className="mt-8 space-y-3.5">
              {study.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-mist">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal y={28} delay={0.06} className="bg-ink p-8 md:p-10">
            <p className="t-label text-accent-soft">Stack</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {study.page.stack.map((item) => (
                <li
                  key={item}
                  className="t-label border border-line px-3 py-1.5 text-[10px] text-mist-2"
                >
                  {item}
                </li>
              ))}
            </ul>
            <dl className="mt-10 space-y-5">
              <div>
                <dt className="t-label text-mist-2">Industry</dt>
                <dd className="mt-2 text-[15px] text-white">{study.industry}</dd>
              </div>
              <div>
                <dt className="t-label text-mist-2">Timeline</dt>
                <dd className="mt-2 text-[15px] text-white">{study.page.timeline}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal y={28} delay={0.12} className="bg-ink p-8 md:p-10">
            <p className="t-label text-accent-soft">Related services</p>
            <ul className="mt-8 space-y-5">
              {related.map((service) => (
                <li key={service.id}>
                  <Link
                    href={getServicePath(service)}
                    className="group block"
                    data-analytics={`case-service-${service.id}`}
                  >
                    <span className="t-label text-mist-2">{service.index}</span>
                    <span className="mt-2 block text-[17px] font-medium text-white transition-colors group-hover:text-accent-soft">
                      {service.name}
                    </span>
                    <span className="mt-1 block text-[13.5px] text-mist-2 group-hover:text-mist">
                      {service.oneLiner}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

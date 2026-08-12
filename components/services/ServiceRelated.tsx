"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services, type Service } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";

export function ServiceRelated({
  service,
  sectionIndex = "06",
}: {
  service: Service;
  sectionIndex?: string;
}) {
  const others = services.filter((s) => s.id !== service.id);

  return (
    <section
      aria-labelledby="service-related-heading"
      className="relative border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Related services" />
        <RevealText
          as="h2"
          id="service-related-heading"
          text="Often paired with this build."
          className="text-h2 mt-10 max-w-[640px] font-semibold text-white"
        />

        <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {others.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.06} y={24} className="bg-ink">
              <Link
                href={getServicePath(item)}
                data-analytics={`service-related-${item.id}`}
                className="group flex h-full flex-col p-8 transition-colors hover:bg-ink-2 md:p-10"
              >
                <span className="t-label text-accent-soft">{item.index}</span>
                <span className="mt-5 text-[22px] font-medium tracking-tight text-white transition-colors group-hover:text-accent-soft">
                  {item.name}
                </span>
                <span className="mt-3 flex-1 text-[14.5px] leading-relaxed text-mist-2 group-hover:text-mist">
                  {item.oneLiner}
                </span>
                <span className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-mist transition-colors group-hover:text-white">
                  Explore
                  <svg aria-hidden width="12" height="12" viewBox="0 0 14 14" fill="none" className="text-accent transition-transform group-hover:translate-x-0.5">
                    <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  getServiceById,
  serviceCategories,
  type Service,
} from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";

export function ServiceRelated({
  service,
  sectionIndex = "06",
}: {
  service: Service;
  sectionIndex?: string;
}) {
  const others =
    service.relatedServiceIds && service.relatedServiceIds.length > 0
      ? service.relatedServiceIds
          .map((id) => getServiceById(id))
          .filter((item): item is Service => Boolean(item))
      : serviceCategories.filter((s) => s.id !== service.id);

  if (others.length === 0) return null;

  const gridCols =
    others.length >= 4
      ? "lg:grid-cols-4"
      : others.length === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-2";

  return (
    <section
      aria-labelledby="service-related-heading"
      className="surface-page relative border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Related services" />
        <RevealText
          as="h2"
          id="service-related-heading"
          text={
            service.id === "development"
              ? "Specialist development paths."
              : service.id === "digital-marketing"
                ? "Digital marketing service pages."
                : service.id.startsWith("dm-")
                  ? "Related marketing and delivery paths."
                  : service.id === "ai"
                    ? "AI service destinations."
                    : service.id.startsWith("ai-")
                      ? "Related AI and delivery paths."
                      : service.id === "design"
                        ? "Design service destinations."
                        : service.id.startsWith("design-")
                          ? "Related design and delivery paths."
                          : "Often paired with this work."
          }
          className="text-h2 mt-10 max-w-[640px] font-semibold text-white"
        />

        <div
          className={`mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 ${gridCols}`}
        >
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

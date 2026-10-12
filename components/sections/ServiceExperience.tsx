"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { homeServiceOrder } from "@/lib/data/home-services";
import { services } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";

function ServiceDetail({
  service,
  headingClassName = "sr-only",
}: {
  service: {
    id: string;
    index: string;
    name: string;
    shortName: string;
    description: string;
    examples: string[];
    path: string;
    cta: string;
  };
  /** Desktop tabs already show the name; mobile uses a visible heading. */
  headingClassName?: string;
}) {
  return (
    <div className="relative flex h-full flex-col">
      <p className="t-label text-accent-soft">
        {service.index} — {service.shortName}
      </p>
      <h3 className={headingClassName}>{service.name}</h3>
      <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-mist lg:mt-6">
        {service.description}
      </p>

      <div className="mt-10">
        <p className="t-label mb-5 text-mist-2">Capabilities</p>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
          {service.examples.map((example) => (
            <li
              key={example}
              className="flex items-center gap-3 text-[14.5px] text-mist"
            >
              <span aria-hidden className="h-1 w-1 shrink-0 bg-accent" />
              {example}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-10">
        <Link
          href={service.path}
          data-analytics={`service-cta-${service.id}`}
          className="group inline-flex items-center gap-2.5 text-[15px] font-medium text-white"
        >
          <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent-soft">
            {service.cta}
          </span>
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
        </Link>
      </div>
    </div>
  );
}

type HomeSectionTone = "dark" | "light";

export function ServiceExperience({ tone = "dark" }: { tone?: HomeSectionTone }) {
  const isLight = tone === "light";
  const ordered = useMemo(() => {
    return homeServiceOrder
      .map((home, i) => {
        const service = services.find((s) => s.id === home.id);
        if (!service) return null;
        return {
          ...home,
          index: String(i + 1).padStart(2, "0"),
          path: getServicePath(service),
          shortName: service.shortName,
          cta: service.cta,
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);
  }, []);

  const [activeId, setActiveId] = useState(ordered[0]?.id ?? "design");
  const active = ordered.find((s) => s.id === activeId) ?? ordered[0];

  if (!active) return null;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className={`relative scroll-mt-20 py-28 md:py-40${isLight ? " surface-soft" : ""}`}
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="01" label="Services" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <RevealText
            as="h2"
            id="services-heading"
            text="How we can help your business"
            className="text-h2 max-w-[820px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <p className="max-w-[380px] text-[15.5px] leading-relaxed text-mist">
              Choose the area you need help with, or tell us your goal and
              we&apos;ll help identify the right starting point.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div role="tablist" aria-label="Services" className="flex flex-col">
            {ordered.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  id={`service-tab-${service.id}`}
                  aria-selected={isActive}
                  aria-controls={`service-panel-${service.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveId(service.id)}
                  onKeyDown={(e) => {
                    const idx = ordered.findIndex((s) => s.id === activeId);
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
                      e.preventDefault();
                      const next = ordered[(idx + 1) % ordered.length];
                      setActiveId(next.id);
                      document.getElementById(`service-tab-${next.id}`)?.focus();
                    }
                    if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
                      e.preventDefault();
                      const prev = ordered[(idx - 1 + ordered.length) % ordered.length];
                      setActiveId(prev.id);
                      document.getElementById(`service-tab-${prev.id}`)?.focus();
                    }
                  }}
                  data-analytics={`service-select-${service.id}`}
                  className={`group relative flex items-baseline gap-5 border-b border-line py-7 text-left transition-colors ${
                    isActive ? "text-white" : "text-mist-2 hover:text-mist"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="service-indicator"
                      aria-hidden
                      className="absolute top-0 left-0 h-full w-px bg-accent"
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span className={`t-label pl-6 ${isActive ? "text-accent-soft" : ""}`}>
                    {service.index}
                  </span>
                  <span className="text-[clamp(1.5rem,1.8vw,2rem)] font-medium tracking-tight">
                    {service.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            className={
              isLight
                ? "home-card relative overflow-hidden border bg-white p-10 xl:p-14"
                : "build-grid relative overflow-hidden border border-line p-10 xl:p-14"
            }
          >
            {!isLight && (
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 70% 60% at 30% 20%, rgba(37,99,235,0.1), transparent 70%)",
                }}
              />
            )}
            {/* All five categories remain in the SSR HTML; inactive panels stay in the DOM. */}
            {ordered.map((service) => {
              const isActive = service.id === activeId;
              return (
                <div
                  key={service.id}
                  id={`service-panel-${service.id}`}
                  role="tabpanel"
                  aria-labelledby={`service-tab-${service.id}`}
                  hidden={!isActive}
                  className={isActive ? "relative" : "hidden"}
                >
                  <ServiceDetail service={service} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12 space-y-0 lg:hidden">
          {ordered.map((service) => {
            const isActive = service.id === activeId;
            return (
              <div key={service.id} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={isActive}
                  aria-controls={`service-mobile-${service.id}`}
                  onClick={() => setActiveId(isActive ? "" : service.id)}
                  data-analytics={`service-select-${service.id}`}
                  className="flex w-full items-baseline gap-4 py-6 text-left"
                >
                  <span className={`t-label ${isActive ? "text-accent-soft" : "text-mist-2"}`}>
                    {service.index}
                  </span>
                  <span
                    className={`text-[22px] font-medium tracking-tight ${
                      isActive ? "text-white" : "text-mist"
                    }`}
                  >
                    {service.name}
                  </span>
                </button>
                <div
                  id={`service-mobile-${service.id}`}
                  hidden={!isActive}
                  className={isActive ? "pb-7" : "hidden"}
                >
                  <p className="text-[15px] leading-relaxed text-mist">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {service.examples.map((example) => (
                      <li
                        key={example}
                        className="flex items-center gap-3 text-[14px] text-mist"
                      >
                        <span aria-hidden className="h-1 w-1 shrink-0 bg-accent" />
                        {example}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.path}
                    data-analytics={`service-cta-${service.id}`}
                    className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-accent-soft"
                  >
                    {service.cta}
                    <svg aria-hidden width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M1 7h11M8 2.5 12.5 7 8 11.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-12">
          <p className="text-[15px] text-mist">
            Not sure where to start?{" "}
            <Link
              href="/contact?service=not-sure-yet"
              data-analytics="service-unsure-contact"
              className="text-white underline decoration-accent underline-offset-4 transition-colors hover:text-accent-soft"
            >
              Tell us what you want to achieve.
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { services } from "@/lib/data/services";
import { getServicePath } from "@/lib/seo/paths";

/** Animated flow diagram for the active service: node → data line → node. */
function ServiceFlow({ flow }: { flow: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-y-4">
      {flow.map((node, i) => (
        <div key={node} className="flex items-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={`t-label border px-3.5 py-2.5 whitespace-nowrap ${
              i === flow.length - 1
                ? "border-accent bg-accent-dim text-accent-soft"
                : "border-line-strong text-mist"
            }`}
          >
            {node}
          </motion.span>
          {i < flow.length - 1 && (
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.22 + i * 0.12, duration: 0.35 }}
              className="relative mx-1 h-px w-6 origin-left bg-accent/50 md:w-9"
            >
              <span className="absolute top-1/2 right-0 h-[5px] w-[5px] -translate-y-1/2 rotate-45 border-t border-r border-accent/70" />
            </motion.span>
          )}
        </div>
      ))}
    </div>
  );
}

export function ServiceExperience() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((s) => s.id === activeId) ?? services[0];

  return (
    <section id="services" aria-labelledby="services-heading" className="relative scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="02" label="What we build" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <RevealText
            as="h2"
            id="services-heading"
            text="Five disciplines. One production standard."
            className="text-h2 max-w-[820px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <p className="max-w-[380px] text-[15.5px] leading-relaxed text-mist">
              Custom software from scratch — no templates, no lock-in. Pick one
              discipline or combine them under a single fixed scope.
            </p>
          </Reveal>
        </div>

        {/* Desktop: split-screen interactive system */}
        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div role="tablist" aria-label="Services" className="flex flex-col">
            {services.map((service) => {
              const isActive = service.id === activeId;
              return (
                <button
                  key={service.id}
                  role="tab"
                  id={`service-tab-${service.id}`}
                  aria-selected={isActive}
                  aria-controls="service-panel"
                  onClick={() => setActiveId(service.id)}
                  onMouseEnter={() => setActiveId(service.id)}
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
            id="service-panel"
            role="tabpanel"
            aria-labelledby={`service-tab-${active.id}`}
            className="build-grid relative overflow-hidden border border-line p-10 xl:p-14"
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 30% 20%, rgba(37,99,235,0.1), transparent 70%)",
              }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex h-full flex-col"
              >
                <p className="t-label text-accent-soft">
                  {active.index} — {active.shortName}
                </p>
                <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-mist">
                  {active.description}
                </p>

                <div className="mt-10">
                  <p className="t-label mb-5 text-mist-2">How it flows</p>
                  <ServiceFlow flow={active.flow} />
                </div>

                <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3">
                  {active.capabilities.map((capability, i) => (
                    <motion.li
                      key={capability}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.25 + i * 0.07, duration: 0.4 }}
                      className="flex items-center gap-3 text-[14.5px] text-mist"
                    >
                      <span aria-hidden className="h-1 w-1 shrink-0 bg-accent" />
                      {capability}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <Link
                    href={getServicePath(active)}
                    data-analytics={`service-cta-${active.id}`}
                    className="group inline-flex items-center gap-2.5 text-[15px] font-medium text-white"
                  >
                    <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent-soft">
                      {active.cta}
                    </span>
                    <svg aria-hidden width="13" height="13" viewBox="0 0 14 14" fill="none" className="text-accent transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: stacked expandable services */}
        <div className="mt-12 lg:hidden">
          {services.map((service) => {
            const isActive = service.id === activeId;
            return (
              <div key={service.id} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={isActive}
                  onClick={() => setActiveId(isActive ? "" : service.id)}
                  className="flex w-full items-baseline gap-4 py-6 text-left"
                >
                  <span className={`t-label ${isActive ? "text-accent-soft" : "text-mist-2"}`}>
                    {service.index}
                  </span>
                  <span className={`text-[22px] font-medium tracking-tight ${isActive ? "text-white" : "text-mist"}`}>
                    {service.name}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7">
                        <p className="text-[15px] leading-relaxed text-mist">{service.description}</p>
                        <div className="mt-6">
                          <ServiceFlow flow={service.flow} />
                        </div>
                        <ul className="mt-6 space-y-2.5">
                          {service.capabilities.map((capability) => (
                            <li key={capability} className="flex items-center gap-3 text-[14px] text-mist">
                              <span aria-hidden className="h-1 w-1 shrink-0 bg-accent" />
                              {capability}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={getServicePath(service)}
                          className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-accent-soft"
                        >
                          {service.cta}
                          <svg aria-hidden width="12" height="12" viewBox="0 0 14 14" fill="none">
                            <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ServiceCapabilitiesContent } from "@/lib/data/services";

export function ServiceCapabilities({
  capabilities,
  sectionIndex = "05",
}: {
  capabilities: ServiceCapabilitiesContent;
  sectionIndex?: string;
}) {
  const items = capabilities.capabilities;
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((c) => c.id === activeId) ?? items[0];

  if (!active) return null;

  return (
    <section
      aria-labelledby="service-capabilities-heading"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Shopify capabilities" />
        <p className="t-label mt-8 text-accent-soft">{capabilities.eyebrow}</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-10">
          <RevealText
            as="h2"
            id="service-capabilities-heading"
            text={capabilities.headline}
            className="text-h2 max-w-[820px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="max-w-[400px] space-y-4">
              {capabilities.intro.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Desktop: interactive capability directory */}
        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div
            role="tablist"
            aria-label="Shopify capabilities"
            className="flex flex-col"
          >
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`capability-tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls="capability-panel"
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  data-analytics={`shopify-capability-${item.id}`}
                  className={`group relative flex w-full items-center gap-5 border-b border-line py-5 text-left transition-colors ${
                    isActive ? "text-white" : "text-mist-2 hover:text-mist"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="capability-indicator"
                      aria-hidden
                      className="absolute top-0 left-0 h-full w-px bg-accent"
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <span
                    className={`t-label pl-5 ${isActive ? "text-accent-soft" : ""}`}
                  >
                    {item.index}
                  </span>
                  <span className="flex-1 text-[17px] font-medium tracking-tight md:text-[18px]">
                    {item.name}
                  </span>
                  <span
                    aria-hidden
                    className={`pr-1 transition-transform duration-300 ${
                      isActive ? "translate-x-0 text-accent" : "-translate-x-1 text-mist-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="capability-panel"
            role="tabpanel"
            aria-labelledby={`capability-tab-${active.id}`}
            className="build-grid relative min-h-[420px] overflow-hidden border border-line p-10 xl:p-12"
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 20% 15%, rgba(37,99,235,0.1), transparent 70%)",
              }}
            />
            {/* All capabilities remain in the DOM for crawlability; inactive panels are visually hidden. */}
            {items.map((item) => {
              const isActivePanel = item.id === active.id;
              return (
                <div
                  key={item.id}
                  hidden={!isActivePanel}
                  className={`relative flex h-full flex-col ${
                    isActivePanel ? "" : ""
                  }`}
                >
                  {isActivePanel ? (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="relative flex h-full flex-col"
                    >
                      <p className="t-label text-accent-soft">
                        {item.index} — {item.name}
                      </p>
                      <h3 className="mt-6 text-h3 font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-5 max-w-[480px] text-[15.5px] leading-relaxed text-mist">
                        {item.description}
                      </p>
                      <ul className="mt-8 space-y-3">
                        {item.items.map((line) => (
                          <li
                            key={line}
                            className="flex items-center gap-3 text-[14.5px] text-mist"
                          >
                            <span aria-hidden className="h-1 w-1 shrink-0 bg-accent" />
                            {line}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-10">
                        <Link
                          href={item.href}
                          data-analytics={`shopify-capability-cta-${item.id}`}
                          className="group inline-flex items-center gap-2.5 text-[15px] font-medium text-white"
                        >
                          <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent-soft">
                            {item.cta}
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
                    </motion.div>
                  ) : (
                    <div className="sr-only">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <ul>
                        {item.items.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: all capability content stays in HTML; closed rows use CSS collapse. */}
        <div className="mt-12 lg:hidden">
          {items.map((item) => {
            const isOpen = item.id === activeId;
            return (
              <div key={item.id} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setActiveId(isOpen ? "" : item.id)}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span
                    className={`t-label ${isOpen ? "text-accent-soft" : "text-mist-2"}`}
                  >
                    {item.index}
                  </span>
                  <span
                    className={`flex-1 text-[17px] font-medium tracking-tight ${
                      isOpen ? "text-white" : "text-mist"
                    }`}
                  >
                    {item.name}
                  </span>
                  <span aria-hidden className="text-accent">
                    →
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-350 ${
                    isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-7">
                    <h3 className="text-[20px] font-medium text-white">{item.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-mist">
                      {item.description}
                    </p>
                    <ul className="mt-5 space-y-2.5">
                      {item.items.map((line) => (
                        <li
                          key={line}
                          className="flex items-center gap-3 text-[14px] text-mist"
                        >
                          <span aria-hidden className="h-1 w-1 shrink-0 bg-accent" />
                          {line}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={item.href}
                      className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-accent-soft"
                    >
                      {item.cta}
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Reveal y={28} className="relative mt-20 overflow-hidden border border-line p-8 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 80% at 85% 20%, rgba(37,99,235,0.1), transparent 65%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="text-h3 max-w-[640px] font-semibold text-white">
                {capabilities.closingTitle}
              </h3>
              <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-mist">
                {capabilities.closingBody}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <MagneticButton
                href={capabilities.ctaHref}
                analytics="shopify-capabilities-cta"
              >
                {capabilities.ctaLabel}
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

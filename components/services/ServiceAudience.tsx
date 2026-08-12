"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ServiceAudience as AudienceContent } from "@/lib/data/services";

export function ServiceAudience({
  audience,
  sectionIndex = "10",
}: {
  audience: AudienceContent;
  sectionIndex?: string;
}) {
  const stages = audience.stages;
  const [activeId, setActiveId] = useState(stages[0]?.id ?? "");
  const active = stages.find((s) => s.id === activeId) ?? stages[0];
  const activeIndex = stages.findIndex((s) => s.id === activeId);
  const reduced = useReducedMotion();

  if (!active) return null;

  return (
    <section
      aria-labelledby="service-audience-heading"
      className="relative border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Who we work with" />
        <p className="t-label mt-8 text-accent-soft">{audience.eyebrow}</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-10">
          <RevealText
            as="h2"
            id="service-audience-heading"
            text={audience.headline}
            className="text-h2 max-w-[860px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="max-w-[400px] space-y-4">
              {audience.intro.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Desktop: vertical maturity journey + active detail */}
        <div className="mt-16 hidden gap-14 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div
            role="tablist"
            aria-label="Shopify growth stages"
            className="relative"
          >
            {/* Journey spine */}
            <div
              aria-hidden
              className="absolute top-3 bottom-3 left-[11px] w-px bg-line"
            />
            <motion.div
              aria-hidden
              className="absolute top-3 left-[11px] w-px origin-top bg-accent"
              initial={false}
              animate={{
                height:
                  stages.length <= 1
                    ? "0%"
                    : `${(activeIndex / (stages.length - 1)) * 100}%`,
              }}
              transition={
                reduced
                  ? { duration: 0 }
                  : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
              }
              style={{ maxHeight: "calc(100% - 24px)" }}
            />

            <div className="relative flex flex-col gap-2">
              {stages.map((stage, i) => {
                const isActive = stage.id === activeId;
                const isPast = i < activeIndex;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    role="tab"
                    id={`audience-tab-${stage.id}`}
                    aria-selected={isActive}
                    aria-controls="audience-panel"
                    onClick={() => setActiveId(stage.id)}
                    onMouseEnter={() => setActiveId(stage.id)}
                    data-analytics={`shopify-audience-${stage.id}`}
                    className={`group relative w-full pl-12 text-left transition-colors ${
                      isActive ? "text-white" : "text-mist-2 hover:text-mist"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`absolute top-6 left-0 flex h-[23px] w-[23px] items-center justify-center border transition-colors ${
                        isActive
                          ? "border-accent bg-accent"
                          : isPast
                            ? "border-accent bg-ink"
                            : "border-line-strong bg-ink group-hover:border-accent"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 ${
                          isActive
                            ? "bg-white"
                            : isPast
                              ? "bg-accent-soft"
                              : "bg-mist-2 group-hover:bg-accent-soft"
                        }`}
                      />
                    </span>

                    <div
                      className={`border-b py-5 transition-colors ${
                        isActive ? "border-line-strong" : "border-line"
                      }`}
                    >
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`t-label ${isActive ? "text-accent-soft" : ""}`}
                        >
                          {stage.index}
                        </span>
                        <span
                          className={`t-label tracking-[0.16em] ${
                            isActive ? "text-white" : ""
                          }`}
                        >
                          {stage.stage}
                        </span>
                      </div>
                      <p
                        className={`mt-3 text-[17px] font-medium tracking-tight ${
                          isActive ? "text-white" : "text-mist"
                        }`}
                      >
                        {stage.name}
                      </p>
                      <p
                        className={`mt-2 max-w-[360px] text-[14px] leading-snug transition-opacity ${
                          isActive
                            ? "text-mist opacity-100"
                            : "text-mist-2 opacity-70"
                        }`}
                      >
                        {stage.goal}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="audience-panel"
            role="tabpanel"
            aria-labelledby={`audience-tab-${active.id}`}
            className="build-grid relative min-h-[520px] overflow-hidden border border-line p-10 xl:p-12"
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at 85% 10%, rgba(37,99,235,0.1), transparent 70%)",
              }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex h-full flex-col"
              >
                <p className="t-label text-accent-soft">
                  {active.index} / {active.stage}
                </p>
                <h3 className="mt-5 text-[22px] font-medium tracking-tight text-white md:text-[24px]">
                  {active.name}
                </h3>
                <p className="mt-6 max-w-[480px] text-[22px] leading-snug font-semibold tracking-tight text-white xl:text-[26px]">
                  {active.title}
                </p>
                <p className="mt-5 max-w-[480px] text-[15px] leading-relaxed text-mist">
                  {active.description}
                </p>

                <div className="mt-10 grid grid-cols-1 gap-10 xl:grid-cols-2">
                  <div>
                    <p className="t-label text-mist-2">{active.itemsLabel}</p>
                    <ul className="mt-4 space-y-3">
                      {active.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-[14.5px] text-mist"
                        >
                          <span
                            aria-hidden
                            className="h-1 w-1 shrink-0 bg-accent"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-line pt-8 xl:border-t-0 xl:border-l xl:pt-0 xl:pl-10">
                    <p className="t-label text-mist-2">{active.goalLabel}</p>
                    <p className="mt-4 text-[15px] leading-relaxed text-white">
                      {active.goal}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: sequential maturity accordion */}
        <div className="mt-12 lg:hidden">
          {stages.map((stage, i) => {
            const isOpen = stage.id === activeId;
            return (
              <div key={stage.id} className="relative border-b border-line pl-8">
                {i < stages.length - 1 && (
                  <span
                    aria-hidden
                    className={`absolute top-8 bottom-0 left-[11px] w-px ${
                      isOpen || i < activeIndex ? "bg-accent" : "bg-line"
                    }`}
                  />
                )}
                <span
                  aria-hidden
                  className={`absolute top-6 left-0 flex h-[23px] w-[23px] items-center justify-center border ${
                    isOpen
                      ? "border-accent bg-accent"
                      : i < activeIndex
                        ? "border-accent bg-ink"
                        : "border-line-strong bg-ink"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 ${
                      isOpen
                        ? "bg-white"
                        : i < activeIndex
                          ? "bg-accent-soft"
                          : "bg-mist-2"
                    }`}
                  />
                </span>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setActiveId(isOpen ? "" : stage.id)}
                  className="flex w-full flex-col items-start gap-1 py-5 text-left"
                >
                  <span className="flex items-baseline gap-3">
                    <span
                      className={`t-label ${isOpen ? "text-accent-soft" : "text-mist-2"}`}
                    >
                      {stage.index}
                    </span>
                    <span
                      className={`t-label tracking-[0.16em] ${
                        isOpen ? "text-white" : "text-mist-2"
                      }`}
                    >
                      {stage.stage}
                    </span>
                  </span>
                  <span
                    className={`text-[16px] font-medium tracking-tight ${
                      isOpen ? "text-white" : "text-mist"
                    }`}
                  >
                    {stage.name}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-7">
                        <h3 className="text-[20px] font-medium text-white">
                          {stage.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-mist">
                          {stage.description}
                        </p>
                        <p className="t-label mt-6 text-mist-2">
                          {stage.itemsLabel}
                        </p>
                        <ul className="mt-3 space-y-2.5">
                          {stage.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-center gap-3 text-[14px] text-mist"
                            >
                              <span
                                aria-hidden
                                className="h-1 w-1 shrink-0 bg-accent"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 border-t border-line pt-5">
                          <p className="t-label text-mist-2">{stage.goalLabel}</p>
                          <p className="mt-2 text-[14.5px] leading-relaxed text-white">
                            {stage.goal}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                "radial-gradient(ellipse 70% 80% at 90% 20%, rgba(37,99,235,0.1), transparent 65%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="text-h3 max-w-[560px] font-semibold text-white">
                {audience.closingTitle}
              </h3>
              <p className="mt-5 max-w-[540px] text-[16px] leading-relaxed text-mist">
                {audience.closingBody}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <MagneticButton
                href={audience.ctaHref}
                analytics="shopify-audience-cta"
              >
                {audience.ctaLabel}
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ServiceDeliveryProcess as DeliveryProcessContent } from "@/lib/data/services";

export function ServiceDeliveryProcess({
  deliveryProcess,
  sectionIndex = "06",
}: {
  deliveryProcess: DeliveryProcessContent;
  sectionIndex?: string;
}) {
  const steps = deliveryProcess.steps;
  const [activeId, setActiveId] = useState(steps[0]?.id ?? "");
  const active = steps.find((s) => s.id === activeId) ?? steps[0];
  const activeIndex = steps.findIndex((s) => s.id === activeId);

  if (!active) return null;

  return (
    <section
      aria-labelledby="service-delivery-heading"
      className="relative border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="How we work" />
        <p className="t-label mt-8 text-accent-soft">{deliveryProcess.eyebrow}</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-10">
          <RevealText
            as="h2"
            id="service-delivery-heading"
            text={deliveryProcess.headline}
            className="text-h2 max-w-[820px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="max-w-[400px] space-y-4">
              {deliveryProcess.intro.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Desktop: interactive horizontal journey */}
        <div className="mt-16 hidden lg:block">
          <div
            role="tablist"
            aria-label="Shopify delivery process"
            className="relative"
          >
            {/* Progress rail */}
            <div aria-hidden className="absolute top-[13px] right-0 left-0 h-px bg-line" />
            <motion.div
              aria-hidden
              className="absolute top-[13px] left-0 h-px origin-left bg-accent"
              initial={false}
              animate={{
                width:
                  steps.length <= 1
                    ? "0%"
                    : `${(activeIndex / (steps.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="relative grid grid-cols-6 gap-2">
              {steps.map((step, i) => {
                const isActive = step.id === activeId;
                const isPast = i < activeIndex;
                return (
                  <button
                    key={step.id}
                    type="button"
                    role="tab"
                    id={`delivery-tab-${step.id}`}
                    aria-selected={isActive}
                    aria-controls="delivery-panel"
                    onClick={() => setActiveId(step.id)}
                    onMouseEnter={() => setActiveId(step.id)}
                    data-analytics={`shopify-process-${step.id}`}
                    className="group flex flex-col items-start text-left"
                  >
                    <span
                      className={`relative z-10 mb-5 flex h-[27px] w-[27px] items-center justify-center border transition-colors duration-300 ${
                        isActive
                          ? "border-accent bg-accent text-white"
                          : isPast
                            ? "border-accent bg-ink text-accent-soft"
                            : "border-line-strong bg-ink text-mist-2 group-hover:border-accent group-hover:text-accent-soft"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 transition-colors ${
                          isActive || isPast ? "bg-current" : "bg-mist-2 group-hover:bg-accent-soft"
                        }`}
                      />
                    </span>
                    <span
                      className={`t-label ${
                        isActive ? "text-accent-soft" : "text-mist-2"
                      }`}
                    >
                      {step.index}
                    </span>
                    <span
                      className={`mt-2 text-[13px] font-medium tracking-[0.12em] uppercase transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-mist-2 group-hover:text-mist"
                      }`}
                    >
                      {step.shortName}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div
            id="delivery-panel"
            role="tabpanel"
            aria-labelledby={`delivery-tab-${active.id}`}
            className="build-grid relative mt-14 min-h-[420px] overflow-hidden border border-line p-10 xl:p-14"
          >
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 65% 55% at 85% 15%, rgba(37,99,235,0.1), transparent 70%)",
              }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid grid-cols-12 gap-10"
              >
                <div className="col-span-7">
                  <p className="t-label text-accent-soft">
                    {active.index} / {active.name}
                  </p>
                  <h3 className="mt-6 max-w-[520px] text-h3 font-semibold text-white">
                    {active.title}
                  </h3>
                  <p className="mt-5 max-w-[500px] text-[15.5px] leading-relaxed text-mist">
                    {active.description}
                  </p>
                  <div className="mt-10 border-t border-line pt-8">
                    <p className="t-label text-mist-2">Outcome</p>
                    <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed text-white">
                      {active.outcome}
                    </p>
                  </div>
                </div>
                <div className="col-span-5">
                  <p className="t-label text-mist-2">{active.itemsLabel}</p>
                  <ul className="mt-5 space-y-3">
                    {active.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-[14.5px] text-mist"
                      >
                        <span aria-hidden className="h-1 w-1 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: sequential expandable steps */}
        <div className="mt-12 lg:hidden">
          {steps.map((step, i) => {
            const isOpen = step.id === activeId;
            return (
              <div key={step.id} className="relative border-b border-line pl-8">
                {i < steps.length - 1 && (
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
                  onClick={() => setActiveId(isOpen ? "" : step.id)}
                  className="flex w-full items-baseline gap-4 py-5 text-left"
                >
                  <span
                    className={`t-label ${isOpen ? "text-accent-soft" : "text-mist-2"}`}
                  >
                    {step.index}
                  </span>
                  <span
                    className={`flex-1 text-[16px] font-medium tracking-tight ${
                      isOpen ? "text-white" : "text-mist"
                    }`}
                  >
                    {step.name}
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
                          {step.title}
                        </h3>
                        <p className="mt-3 text-[15px] leading-relaxed text-mist">
                          {step.description}
                        </p>
                        <p className="t-label mt-6 text-mist-2">{step.itemsLabel}</p>
                        <ul className="mt-3 space-y-2.5">
                          {step.items.map((item) => (
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
                          <p className="t-label text-mist-2">Outcome</p>
                          <p className="mt-2 text-[14.5px] leading-relaxed text-white">
                            {step.outcome}
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
                "radial-gradient(ellipse 70% 80% at 15% 20%, rgba(37,99,235,0.1), transparent 65%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="text-h3 max-w-[560px] font-semibold text-white">
                {deliveryProcess.closingTitle}
              </h3>
              <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-mist">
                {deliveryProcess.closingBody}
              </p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <MagneticButton
                href={deliveryProcess.ctaHref}
                analytics="shopify-process-cta"
              >
                {deliveryProcess.ctaLabel}
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ServiceWhyContent } from "@/lib/data/services";

const JOURNEY = [
  { id: "browse", label: "Browse" },
  { id: "discover", label: "Discover" },
  { id: "pdp", label: "Product" },
  { id: "cart", label: "Cart" },
  { id: "buy", label: "Buy" },
] as const;

/** Map each differentiator to which journey node feels most relevant. */
const JOURNEY_FOCUS: Record<string, number> = {
  "ecommerce-thinking": 1,
  "custom-simple": 2,
  "cro-dev": 4,
  "clean-builds": 2,
  communication: 0,
  "what-comes-next": 4,
};

function JourneyVisual({
  activeId,
  reduced,
}: {
  activeId: string;
  reduced: boolean | null;
}) {
  const focus = JOURNEY_FOCUS[activeId] ?? 2;

  return (
    <div aria-hidden className="relative pt-2 pb-1">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="t-label text-mist-2">Customer journey</p>
        <p className="t-label text-accent-soft">{JOURNEY[focus]?.label}</p>
      </div>

      <div className="relative">
        <div className="absolute top-[4px] right-[8px] left-[8px] h-px bg-line" />
        <motion.div
          className="absolute top-[4px] left-[8px] h-px origin-left bg-accent/80"
          initial={false}
          animate={{
            width:
              JOURNEY.length <= 1
                ? "0%"
                : `calc(${(focus / (JOURNEY.length - 1)) * 100}% - 16px)`,
          }}
          transition={
            reduced
              ? { duration: 0 }
              : { duration: 0.55, ease: [0.16, 1, 0.3, 1] }
          }
        />

        <div className="relative flex justify-between">
          {JOURNEY.map((node, i) => {
            const lit = i <= focus;
            const current = i === focus;
            return (
              <div key={node.id} className="flex flex-col items-center">
                <motion.span
                  className={`block h-[9px] w-[9px] border ${
                    current
                      ? "border-accent bg-accent"
                      : lit
                        ? "border-accent bg-ink"
                        : "border-line-strong bg-ink"
                  }`}
                  animate={
                    reduced || !current
                      ? undefined
                      : {
                          boxShadow: [
                            "0 0 0 0 rgba(37,99,235,0)",
                            "0 0 0 8px rgba(37,99,235,0.15)",
                            "0 0 0 0 rgba(37,99,235,0)",
                          ],
                        }
                  }
                  transition={
                    reduced
                      ? undefined
                      : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }
                  }
                />
                <span
                  className={`t-label mt-3 text-[9px] tracking-[0.16em] ${
                    current
                      ? "text-accent-soft"
                      : lit
                        ? "text-mist"
                        : "text-mist-2/70"
                  }`}
                >
                  {node.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ServiceWhy({
  why,
  sectionIndex = "07",
}: {
  why: ServiceWhyContent;
  sectionIndex?: string;
}) {
  const items = why.differentiators;
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const active = items.find((d) => d.id === activeId) ?? items[0];
  const reduced = useReducedMotion();

  if (!active) return null;

  return (
    <section
      aria-labelledby="service-why-heading"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Why Buildaze" />
        <p className="t-label mt-8 text-accent-soft">{why.eyebrow}</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-10">
          <RevealText
            as="h2"
            id="service-why-heading"
            text={why.headline}
            className="text-h2 max-w-[860px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <div className="max-w-[400px] space-y-4">
              {why.intro.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-relaxed text-mist">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Desktop: left differentiators + right manifesto panel */}
        <div className="mt-16 hidden gap-12 lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div
            role="tablist"
            aria-label="What makes Buildaze different"
            className="flex flex-col"
          >
            {items.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`why-tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls="why-panel"
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  data-analytics={`shopify-why-${item.id}`}
                  className={`group relative w-full border-b border-line py-6 text-left transition-colors ${
                    isActive ? "text-white" : "text-mist-2 hover:text-mist"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="why-indicator"
                      aria-hidden
                      className="absolute top-0 left-0 h-full w-px bg-accent"
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                  <div className="flex items-baseline gap-4 pl-5">
                    <span
                      className={`t-label ${isActive ? "text-accent-soft" : ""}`}
                    >
                      {item.index}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[16px] font-medium tracking-tight md:text-[17px]">
                        {item.name}
                      </p>
                      <p
                        className={`mt-2 text-[14px] leading-snug transition-opacity ${
                          isActive ? "text-mist opacity-100" : "text-mist-2 opacity-70"
                        }`}
                      >
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div
            id="why-panel"
            role="tabpanel"
            aria-labelledby={`why-tab-${active.id}`}
            className="build-grid relative min-h-[560px] overflow-hidden border border-line"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(37,99,235,0.12), transparent 70%)",
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex h-full min-h-[560px] flex-col p-10 xl:p-12"
              >
                <p className="t-label text-accent-soft">
                  {active.index} — {active.name}
                </p>
                <h3 className="mt-8 max-w-[520px] text-[28px] leading-[1.15] font-semibold tracking-tight text-white xl:text-[34px]">
                  {active.panelStatement}
                </h3>
                {active.panelNote && (
                  <p className="mt-5 max-w-[420px] text-[15px] leading-relaxed text-mist">
                    {active.panelNote}
                  </p>
                )}

                <div className="mt-10 border-t border-line pt-8">
                  <JourneyVisual activeId={active.id} reduced={reduced} />
                </div>

                <div className="mt-auto border-t border-line pt-8">
                  <p className="t-label text-mist-2">In practice</p>
                  <p className="mt-3 max-w-[480px] text-[14.5px] leading-relaxed text-mist">
                    {active.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: expandable differentiators */}
        <div className="mt-12 lg:hidden">
          {items.map((item) => {
            const isOpen = item.id === activeId;
            return (
              <div key={item.id} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setActiveId(isOpen ? "" : item.id)}
                  className="flex w-full items-start gap-4 py-5 text-left"
                >
                  <span
                    className={`t-label mt-1 ${isOpen ? "text-accent-soft" : "text-mist-2"}`}
                  >
                    {item.index}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-[16px] font-medium tracking-tight ${
                        isOpen ? "text-white" : "text-mist"
                      }`}
                    >
                      {item.name}
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-snug text-mist-2">
                      {item.summary}
                    </p>
                  </div>
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
                      <div className="pb-7 pl-10">
                        <p className="text-[20px] leading-snug font-medium text-white">
                          {item.panelStatement}
                        </p>
                        <p className="mt-4 text-[15px] leading-relaxed text-mist">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Closing manifesto */}
        <Reveal y={28} className="relative mt-20 overflow-hidden border border-line p-8 md:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 90% 30%, rgba(37,99,235,0.12), transparent 65%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h3 className="text-h3 max-w-[640px] font-semibold text-white">
                {why.closingTitle}
              </h3>
              <p className="mt-5 max-w-[520px] text-[17px] leading-relaxed text-mist">
                {why.closingBody}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2">
                {why.pillars.map((pillar, i) => (
                  <span key={pillar} className="flex items-center gap-3">
                    {i > 0 && (
                      <span aria-hidden className="h-1 w-1 bg-accent" />
                    )}
                    <span className="t-label text-white">{pillar}</span>
                  </span>
                ))}
              </div>
              <p className="mt-6 text-[15px] text-mist-2">{why.closingNote}</p>
            </div>
            <div className="lg:col-span-4 lg:justify-self-end">
              <MagneticButton href={why.ctaHref} analytics="shopify-why-cta">
                {why.ctaLabel}
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

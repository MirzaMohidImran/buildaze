"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stack } from "@/lib/data/stack";

/** Modular engineering stack: categories on top, active layer expands below. */
export function TechEcosystem() {
  const [activeId, setActiveId] = useState(stack[2].id); // AI first — it's the positioning

  const active = stack.find((c) => c.id === activeId) ?? stack[0];

  return (
    <section aria-labelledby="stack-heading" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="11" label="Technology" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <RevealText
            as="h2"
            id="stack-heading"
            text="We build on the stack that ships."
            className="text-h2 max-w-[760px] font-semibold text-white"
          />
          <Reveal delay={0.15}>
            <p className="max-w-[380px] text-[15.5px] leading-relaxed text-mist">
              The right tool for each problem — not the trendiest one. Every
              technology below is in production on a Buildaze project.
            </p>
          </Reveal>
        </div>

        <Reveal y={36} className="mt-16">
          <div className="border border-line">
            {/* Category rail */}
            <div
              role="tablist"
              aria-label="Stack categories"
              className="grid grid-cols-2 border-b border-line sm:grid-cols-3 lg:grid-cols-6"
            >
              {stack.map((category) => {
                const isActive = category.id === activeId;
                return (
                  <button
                    key={category.id}
                    role="tab"
                    id={`stack-tab-${category.id}`}
                    aria-selected={isActive}
                    aria-controls="stack-panel"
                    onClick={() => setActiveId(category.id)}
                    onMouseEnter={() => setActiveId(category.id)}
                    className={`relative border-r border-b border-line px-5 py-6 text-left transition-colors last:border-r-0 sm:border-b-0 ${
                      isActive ? "bg-ink-2 text-white" : "text-mist-2 hover:text-mist"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="stack-indicator"
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-px bg-accent"
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      />
                    )}
                    <span className={`t-label block text-[10px] ${isActive ? "text-accent-soft" : ""}`}>
                      {String(stack.indexOf(category) + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-2 block text-[15px] font-medium tracking-tight">
                      {category.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active layer */}
            <div
              id="stack-panel"
              role="tabpanel"
              aria-labelledby={`stack-tab-${active.id}`}
              className="build-grid relative min-h-[180px] p-8 md:p-12"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
                >
                  <div className="flex flex-wrap gap-3">
                    {active.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.08 + i * 0.06, duration: 0.35 }}
                        className="border border-line-strong bg-ink px-5 py-3 text-[15px] font-medium text-white transition-colors hover:border-accent"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <p className="t-label max-w-[260px] text-mist-2">{active.note}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

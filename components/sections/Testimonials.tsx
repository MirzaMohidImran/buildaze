"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { testimonials } from "@/lib/data/team";

/** Oversized editorial quote experience with restrained controls. */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const active = testimonials[index];

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section aria-label="Client testimonials" className="relative overflow-hidden border-y border-line py-28 md:py-40">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 50% 60% at 15% 50%, rgba(37,99,235,0.07), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <SectionLabel index="14" label="What clients say" />
          <Reveal>
            <div className="flex items-center gap-5">
              <span className="t-label text-mist-2">
                <span className="text-accent-soft">0{index + 1}</span> / 0{testimonials.length}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center border border-line text-mist transition-colors hover:border-accent hover:text-white"
                >
                  <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13 7H2M6 2.5 1.5 7 6 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center border border-line text-mist transition-colors hover:border-accent hover:text-white"
                >
                  <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 min-h-[320px] md:mt-20 md:min-h-[300px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote>
                <p className="max-w-[1100px] text-[clamp(1.5rem,3.2vw,2.75rem)] leading-[1.25] font-medium tracking-[-0.02em] text-white">
                  <span aria-hidden className="text-accent-soft">&ldquo;</span>
                  {active.quote}
                  <span aria-hidden className="text-accent-soft">&rdquo;</span>
                </p>
              </blockquote>
              <figcaption className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
                <span className="flex items-center gap-4">
                  <span aria-hidden className="flex h-11 w-11 items-center justify-center border border-line font-mono text-[13px] text-accent-soft">
                    {active.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <span>
                    <span className="block text-[15px] font-medium text-white">{active.name}</span>
                    <span className="block text-[13px] text-mist-2">{active.role}</span>
                  </span>
                </span>
                <span className="t-label flex items-center gap-2.5 text-mist-2">
                  <span aria-hidden className="h-1 w-1 bg-accent" />
                  {active.context}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        {/* progress markers */}
        <div className="mt-14 flex gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.name}
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial from ${testimonial.name}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-[3px] transition-all duration-500 ${
                i === index ? "w-14 bg-accent" : "w-7 bg-line-strong hover:bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

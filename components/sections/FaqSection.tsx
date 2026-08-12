"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { faqs } from "@/lib/data/pricing";

/** Clean, accessible FAQ — every question removes a real sales objection. */
export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" aria-labelledby="faq-heading" className="relative scroll-mt-20 py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="16" label="Questions" />
              <RevealText
                as="h2"
                id="faq-heading"
                text="Asked before every project."
                className="text-h2 mt-10 font-semibold text-white"
              />
              <Reveal delay={0.2} className="mt-8">
                <p className="max-w-[340px] text-[15.5px] leading-relaxed text-mist">
                  The honest answers to what buyers are silently asking. If
                  yours isn&apos;t here, ask us directly — we respond fast.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.2)} y={20} amount={0.2}>
                  <div className="border-b border-line first:border-t">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${i}`}
                        id={`faq-question-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="group flex w-full items-center gap-5 py-6 text-left md:py-7"
                      >
                        <span className={`t-label w-7 shrink-0 ${isOpen ? "text-accent-soft" : "text-mist-2"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex-1 text-[16.5px] font-medium tracking-tight transition-colors md:text-[18px] ${
                            isOpen ? "text-white" : "text-mist group-hover:text-white"
                          }`}
                        >
                          {faq.question}
                        </span>
                        <span
                          aria-hidden
                          className={`relative h-4 w-4 shrink-0 transition-transform duration-400 ${isOpen ? "rotate-45" : ""}`}
                        >
                          <span className={`absolute top-1/2 left-0 h-px w-full -translate-y-1/2 ${isOpen ? "bg-accent" : "bg-mist-2"}`} />
                          <span className={`absolute left-1/2 h-full w-px -translate-x-1/2 ${isOpen ? "bg-accent" : "bg-mist-2"}`} />
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${i}`}
                          role="region"
                          aria-labelledby={`faq-question-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[640px] pb-7 pl-12 text-[15px] leading-relaxed text-mist">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Service } from "@/lib/data/services";

export function ServiceFaq({
  service,
  sectionIndex = "05",
}: {
  service: Service;
  sectionIndex?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const { page } = service;
  const faqs = page.faqs;
  const headline =
    page.faqHeadline ?? `${service.shortName} questions, answered.`;
  const label = page.faqEyebrow ? "Common questions" : "Questions";

  return (
    <section
      aria-labelledby="service-faq-heading"
      className="relative border-y border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index={sectionIndex} label={label} />
              {page.faqEyebrow && (
                <p className="t-label mt-8 text-accent-soft">{page.faqEyebrow}</p>
              )}
              <RevealText
                as="h2"
                id="service-faq-heading"
                text={headline}
                className={`text-h2 font-semibold text-white ${
                  page.faqEyebrow ? "mt-5" : "mt-10"
                }`}
              />
              {page.faqIntro && (
                <Reveal delay={0.15} className="mt-8 space-y-4">
                  {page.faqIntro.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-[360px] text-[15px] leading-relaxed text-mist"
                    >
                      {paragraph}
                    </p>
                  ))}
                </Reveal>
              )}
            </div>
          </div>

          <div className="lg:col-span-8">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal
                  key={faq.question}
                  delay={Math.min(i * 0.04, 0.2)}
                  y={20}
                >
                  <div className="border-b border-line first:border-t">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`service-faq-answer-${i}`}
                        id={`service-faq-question-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="group flex w-full items-center gap-5 py-6 text-left md:py-7"
                      >
                        <span
                          className={`t-label w-7 shrink-0 ${
                            isOpen ? "text-accent-soft" : "text-mist-2"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex-1 text-[16.5px] font-medium tracking-tight transition-colors md:text-[18px] ${
                            isOpen
                              ? "text-white"
                              : "text-mist group-hover:text-white"
                          }`}
                        >
                          {faq.question}
                        </span>
                        <span
                          aria-hidden
                          className={`relative h-4 w-4 shrink-0 transition-transform duration-400 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          <span
                            className={`absolute top-1/2 left-0 h-px w-full -translate-y-1/2 ${
                              isOpen ? "bg-accent" : "bg-mist-2"
                            }`}
                          />
                          <span
                            className={`absolute left-1/2 h-full w-px -translate-x-1/2 ${
                              isOpen ? "bg-accent" : "bg-mist-2"
                            }`}
                          />
                        </span>
                      </button>
                    </h3>
                    {/* Answers stay in the HTML for crawlability; CSS collapses closed ones. */}
                    <div
                      id={`service-faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`service-faq-question-${i}`}
                      aria-hidden={!isOpen}
                      className={`overflow-hidden transition-[max-height,opacity] duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen
                          ? "max-h-[480px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="max-w-[640px] pb-7 pl-12 text-[15.5px] leading-relaxed text-mist md:pl-14">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {page.faqClosingTitle && (
          <Reveal
            y={28}
            className="relative mt-20 overflow-hidden border border-line p-8 md:p-12"
          >
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
                  {page.faqClosingTitle}
                </h3>
                {page.faqClosingBody && (
                  <p className="mt-5 max-w-[520px] text-[16px] leading-relaxed text-mist">
                    {page.faqClosingBody}
                  </p>
                )}
              </div>
              {page.faqCtaLabel && page.faqCtaHref && (
                <div className="lg:col-span-4 lg:justify-self-end">
                  <MagneticButton
                    href={page.faqCtaHref}
                    analytics="shopify-faq-cta"
                  >
                    {page.faqCtaLabel}
                  </MagneticButton>
                </div>
              )}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

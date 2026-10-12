"use client";

import { useState } from "react";
import { contactPage } from "@/lib/data/contact-page";

export function ContactFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {contactPage.faqs.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div
            key={faq.question}
            className="border-b border-line first:border-t"
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`contact-faq-answer-${i}`}
                id={`contact-faq-question-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center gap-5 py-6 text-left md:py-7"
              >
                <span
                  className={`t-label w-7 shrink-0 ${isOpen ? "text-accent" : "text-mist-2"}`}
                >
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
                  className={`relative h-4 w-4 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-accent" : ""
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
            <div
              id={`contact-faq-answer-${i}`}
              role="region"
              aria-labelledby={`contact-faq-question-${i}`}
              hidden={!isOpen}
              className={isOpen ? undefined : "hidden"}
            >
              <p className="max-w-[640px] pb-7 pl-12 text-[15px] leading-relaxed text-mist">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

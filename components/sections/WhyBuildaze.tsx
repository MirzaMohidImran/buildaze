"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { differentiators } from "@/lib/data/process";

/**
 * Asymmetric interactive composition: a statement column plus four
 * differentiator panels that respond to hover with the Build Grid language.
 */
export function WhyBuildaze() {
  return (
    <section aria-labelledby="why-heading" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="06" label="Why Buildaze" />
              <RevealText
                as="h2"
                id="why-heading"
                text="Why serious teams build with Buildaze."
                className="text-h2 mt-10 font-semibold text-white"
              />
              <Reveal delay={0.2} className="mt-8">
                <p className="max-w-[420px] text-[15.5px] leading-relaxed text-mist">
                  Every rule below exists because it protects your budget, your
                  timeline or your ownership. That&apos;s the whole philosophy.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
              {differentiators.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-ink p-8 transition-colors duration-500 hover:bg-ink-2 md:p-10"
                >
                  <span
                    aria-hidden
                    className="absolute top-0 left-0 h-px w-0 bg-accent transition-[width] duration-500 ease-out group-hover:w-full"
                  />
                  <span className="t-label text-accent-soft">0{i + 1}</span>
                  <h3 className="mt-5 text-[20px] font-medium tracking-tight text-white md:text-[22px]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-mist">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

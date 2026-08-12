"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";

const dimensions = [
  {
    label: "We build AI products",
    description:
      "Production AI that answers from your data and holds up under real users — not demo-ware.",
    items: ["AI agents", "RAG systems", "LLM integrations", "AI workflows", "Recommendations", "Automation"],
  },
  {
    label: "We build with AI",
    description:
      "Our own delivery runs on AI — which is why fixed scopes hold and weeks don't slip.",
    items: ["Development workflow", "Testing", "Architecture decisions", "Research", "Rapid prototyping"],
  },
];

const PIPELINE_NODES = ["Query", "Retrieval", "Your data", "LLM", "Cited answer"];

/** Animated RAG pipeline — the diagram Buildaze actually ships, not an abstract AI graphic. */
function PipelineDiagram() {
  const reduced = useReducedMotion();
  return (
    <div className="build-grid relative overflow-hidden border border-line bg-ink-2 px-6 py-10 md:px-10">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(37,99,235,0.08), transparent 70%)" }}
      />
      <p className="t-label relative mb-8 text-mist-2">A production RAG pipeline, end to end</p>
      <div className="relative flex flex-wrap items-center gap-y-5">
        {PIPELINE_NODES.map((node, i) => (
          <div key={node} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`border px-4 py-3 ${
                i === 2
                  ? "border-accent bg-accent-dim"
                  : i === PIPELINE_NODES.length - 1
                    ? "border-accent/60"
                    : "border-line-strong"
              }`}
            >
              <span
                className={`t-label whitespace-nowrap ${
                  i === 2 || i === PIPELINE_NODES.length - 1 ? "text-accent-soft" : "text-mist"
                }`}
              >
                {node}
              </span>
            </motion.div>
            {i < PIPELINE_NODES.length - 1 && (
              <div aria-hidden className="relative mx-1.5 h-px w-7 overflow-hidden bg-accent/25 md:mx-2.5 md:w-12">
                {!reduced && (
                  <motion.span
                    className="absolute inset-y-0 w-4 bg-accent"
                    animate={{ x: ["-16px", "56px"] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.35, ease: "linear" }}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="t-label relative mt-8 text-[10px] text-mist-2">
        With citations, freshness controls and evals — so answers can be trusted and audited.
      </p>
    </div>
  );
}

export function AiNative() {
  return (
    <section aria-labelledby="ai-native-heading" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="09" label="AI-native engineering" />
        <RevealText
          as="h2"
          id="ai-native-heading"
          text="AI-native means two things here."
          className="text-h2 mt-10 max-w-[820px] font-semibold text-white"
        />
        <Reveal delay={0.2} className="mt-8">
          <p className="max-w-[600px] text-lead text-mist">
            Not a buzzword. A working model: AI is both what we ship for you
            and how we ship it fast.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {dimensions.map((dimension, d) => (
            <Reveal key={dimension.label} delay={d * 0.12} y={36}>
              <div className="h-full border border-line p-8 md:p-12">
                <p className="t-label flex items-center gap-3 text-accent-soft">
                  <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
                  0{d + 1}
                </p>
                <h3 className="mt-5 text-[24px] font-semibold tracking-tight text-white md:text-[28px]">
                  {dimension.label}
                </h3>
                <p className="mt-4 max-w-[420px] text-[15px] leading-relaxed text-mist">
                  {dimension.description}
                </p>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {dimension.items.map((item) => (
                    <li
                      key={item}
                      className="t-label border border-line px-3.5 py-2 text-[10.5px] text-mist transition-colors hover:border-accent/60 hover:text-accent-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8">
          <PipelineDiagram />
        </Reveal>
      </div>
    </section>
  );
}

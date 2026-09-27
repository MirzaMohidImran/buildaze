"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { voiceAgent } from "@/lib/data/voice-agent";

const VoiceDemo = dynamic(
  () => import("@/components/voice/VoiceDemo").then((m) => m.VoiceDemo),
  {
    ssr: true,
    loading: () => (
      <div
        id="demo"
        className="scroll-mt-28 border border-line bg-ink-2 px-5 py-16 md:px-8"
        aria-busy="true"
      >
        <p className="t-label text-accent-soft">Live demo</p>
        <p className="mt-3 text-[22px] font-semibold tracking-tight text-white">
          {voiceAgent.demo.title}
        </p>
        <p className="mt-4 max-w-[560px] text-[14.5px] leading-relaxed text-mist">
          Loading demo controls…
        </p>
      </div>
    ),
  },
);

export function VoiceAgentPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <DemoSection />
        <Benefits />
        <HowItWorks />
        <UseCases />
        <Faq />
        <Related />
        <ContactCTA defaultProjectType="Voice Agent" sectionIndex="07" />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section
      aria-labelledby="voice-hero-heading"
      className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20"
    >
      <div aria-hidden className="build-grid fade-edges absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 50% 40%, rgba(37,99,235,0.14), transparent 70%)",
        }}
      />

      <div className="relative mx-auto flex max-w-[1600px] flex-col items-center px-5 text-center md:px-10">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="t-label flex flex-wrap items-center justify-center gap-2 text-mist-2">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-accent-soft" aria-current="page">
              Voice Agent
            </li>
          </ol>
        </nav>

        <Reveal className="mb-6">
          <p className="t-label inline-flex items-center gap-2.5 border border-accent/40 bg-accent-dim px-3.5 py-2 text-accent-soft">
            <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
            {voiceAgent.hero.eyebrow}
          </p>
        </Reveal>

        <RevealText
          as="h1"
          id="voice-hero-heading"
          text={voiceAgent.hero.headline}
          className="text-display mt-2 max-w-[920px] font-semibold text-white"
          stagger={0.04}
        />

        <Reveal delay={0.2} className="mt-8 max-w-[580px]">
          <p className="text-lead text-mist">{voiceAgent.hero.subheadline}</p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="#demo" analytics="voice-page-try-demo">
            Try the live demo
          </MagneticButton>
          <MagneticButton
            href="#contact"
            variant="ghost"
            analytics="voice-page-start-project"
          >
            Discuss your use case
          </MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section
      aria-labelledby="voice-intro-heading"
      className="relative border-t border-line py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mx-auto max-w-[720px] text-center">
          <SectionLabel index="01" label="Overview" className="justify-center" />
          <RevealText
            as="h2"
            id="voice-intro-heading"
            text={voiceAgent.intro.title}
            className="text-h3 mt-8 font-semibold text-white"
          />
          {voiceAgent.intro.paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph.slice(0, 24)} delay={0.12 + i * 0.08} className="mt-5">
              <p className="text-[15.5px] leading-relaxed text-mist">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoSection() {
  return (
    <section aria-labelledby="voice-demo-heading" className="relative pb-20 md:pb-28">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <h2 id="voice-demo-heading" className="sr-only">
          Interactive voice agent demo
        </h2>
        <VoiceDemo />
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section
      aria-labelledby="voice-benefits-heading"
      className="relative overflow-hidden border-y border-line py-24 md:py-36"
    >
      <div aria-hidden className="build-grid fade-edges absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 45% at 85% 15%, rgba(37,99,235,0.12), transparent 65%), radial-gradient(ellipse 40% 35% at 10% 80%, rgba(37,99,235,0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="02" label="Capabilities" />
              <RevealText
                as="h2"
                id="voice-benefits-heading"
                text="What a voice agent can take off your plate."
                className="text-h2 mt-10 font-semibold text-white"
              />
              <Reveal delay={0.15} className="mt-6">
                <p className="max-w-[400px] text-[15.5px] leading-relaxed text-mist">
                  Capabilities we design for — scoped to your knowledge and
                  escalation rules. Integrations are built per project, not
                  assumed out of the box.
                </p>
              </Reveal>
              <Reveal delay={0.25} className="mt-10 hidden lg:block">
                <CapabilitySignal />
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            <ul>
              {voiceAgent.benefits.map((item, i) => (
                <Reveal key={item.title} delay={Math.min(i * 0.06, 0.3)} y={32} amount={0.35}>
                  <li className="group relative border-t border-line last:border-b">
                    <div className="pointer-events-none absolute inset-0 bg-accent/[0.0] transition-colors duration-500 group-hover:bg-accent/[0.04]" />
                    <div className="relative grid grid-cols-1 gap-5 py-9 md:grid-cols-12 md:gap-6 md:py-11">
                      <div className="flex items-start gap-4 md:col-span-1">
                        <span className="t-label text-accent-soft">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="md:col-span-1">
                        <CapabilityMark index={i} />
                      </div>

                      <div className="md:col-span-4">
                        <h3 className="text-[22px] font-semibold tracking-tight text-white transition-transform duration-500 ease-out group-hover:translate-x-1.5 md:text-[24px]">
                          {item.title}
                        </h3>
                      </div>

                      <div className="md:col-span-6">
                        <p className="max-w-[460px] text-[15px] leading-relaxed text-mist">
                          {item.description}
                        </p>
                        <span
                          aria-hidden
                          className="mt-5 block h-px w-0 bg-accent transition-all duration-500 ease-out group-hover:w-16"
                        />
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const CAPABILITY_MARKS = [
  // Routine inquiries — signal bars
  <path key="a" d="M5 16V10M9 16V6M13 16V8M17 16V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />,
  // Lead qualification — funnel nodes
  <path key="b" d="M4 5h14L14 11v6l-3 2v-8L4 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />,
  // Appointment — calendar corner
  <>
    <rect key="c1" x="4" y="6" width="16" height="13" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path key="c2" d="M8 4v4M16 4v4M4 11h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </>,
  // Consistent answers — equal marks
  <path key="d" d="M5 8h14M5 12h14M5 16h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />,
  // Human handoff — transfer arrows
  <path key="e" d="M4 12h10M10 8l4 4-4 4M20 12H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />,
];

function CapabilityMark({ index }: { index: number }) {
  return (
    <span
      aria-hidden
      className="inline-flex h-10 w-10 items-center justify-center border border-line-strong text-mist-2 transition-colors duration-500 group-hover:border-accent/60 group-hover:bg-accent-dim group-hover:text-accent-soft"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        {CAPABILITY_MARKS[index] ?? CAPABILITY_MARKS[0]}
      </svg>
    </span>
  );
}

function CapabilitySignal() {
  const reduced = useReducedMotion();
  const nodes = ["Call", "Agent", "Answer", "Handoff"];

  return (
    <div className="border border-line bg-ink-2/80 p-5">
      <p className="t-label mb-5 text-mist-2">Call path · designed end to end</p>
      <div className="flex flex-wrap items-center gap-y-3">
        {nodes.map((node, i) => (
          <div key={node} className="flex items-center">
            <span
              className={`border px-3 py-2 t-label text-[10px] ${
                i === nodes.length - 1
                  ? "border-accent/50 text-accent-soft"
                  : "border-line-strong text-mist"
              }`}
            >
              {node}
            </span>
            {i < nodes.length - 1 && (
              <span aria-hidden className="relative mx-1.5 h-px w-8 overflow-hidden bg-accent/25">
                {!reduced && (
                  <motion.span
                    className="absolute inset-y-0 w-3 bg-accent"
                    animate={{ x: ["-12px", "36px"] }}
                    transition={{ duration: 1.35, repeat: Infinity, delay: i * 0.28, ease: "linear" }}
                  />
                )}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section
      aria-labelledby="voice-how-heading"
      className="relative overflow-hidden border-y border-line py-24 md:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 45% 40% at 20% 20%, rgba(37,99,235,0.08), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="03" label="How it works" />
        <RevealText
          as="h2"
          id="voice-how-heading"
          text="Configure. Test. Deploy."
          className="text-h2 mt-10 max-w-[720px] font-semibold text-white"
        />

        <ol className="mt-16 space-y-0">
          {voiceAgent.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08} y={28}>
              <li className="grid grid-cols-1 gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-12">
                <div className="md:col-span-1">
                  <span className="t-label text-accent-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-h3 font-medium text-white">{step.title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="max-w-[560px] text-[15.5px] leading-relaxed text-mist">
                    {step.description}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
          <div className="rule" />
        </ol>
      </div>
    </section>
  );
}

const USE_CASE_SCENES = [
  {
    tags: ["After hours", "Peak volume", "Escalation"],
    cue: ["Caller", "Agent", "Team"],
  },
  {
    tags: ["Inbound", "Qualify", "Callback"],
    cue: ["Interest", "Context", "Sales"],
  },
  {
    tags: ["Appointments", "Details", "Handoff"],
    cue: ["Request", "Confirm", "Staff"],
  },
  {
    tags: ["Onboarding", "Status", "Accounts"],
    cue: ["Visitor", "Docs", "Escalate"],
  },
] as const;

function UseCases() {
  return (
    <section
      aria-labelledby="voice-use-heading"
      className="relative overflow-hidden py-24 md:py-36"
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 0%, rgba(37,99,235,0.1), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="max-w-[820px]">
          <SectionLabel index="04" label="Use cases" />
          <RevealText
            as="h2"
            id="voice-use-heading"
            text="Where teams put a voice agent to work."
            className="text-h2 mt-10 font-semibold text-white"
          />
          <Reveal delay={0.15} className="mt-6">
            <p className="max-w-[520px] text-[15.5px] leading-relaxed text-mist">
              Real situations we scope for — not a one-size script. Each build
              is tuned to how your callers actually talk.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {voiceAgent.useCases.map((item, i) => {
            const scene = USE_CASE_SCENES[i] ?? USE_CASE_SCENES[0];
            return (
              <Reveal key={item.title} delay={Math.min(i * 0.07, 0.28)} y={36}>
                <article className="group relative flex h-full flex-col overflow-hidden border border-line bg-ink-2 transition-[border-color,background-color] duration-500 hover:border-accent/45 hover:bg-ink-3">
                  <div
                    aria-hidden
                    className="build-grid absolute inset-0 opacity-50 transition-opacity duration-500 group-hover:opacity-80"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 60% at 0% 0%, rgba(37,99,235,0.14), transparent 55%)",
                    }}
                  />

                  <div className="relative flex flex-1 flex-col p-7 md:p-9">
                    <div className="flex items-start justify-between gap-4">
                      <p className="t-label flex items-center gap-2.5 text-accent-soft">
                        <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <span
                        aria-hidden
                        className="select-none font-mono text-[42px] leading-none font-semibold tracking-tight text-white/[0.06] transition-colors duration-500 group-hover:text-accent/20 md:text-[52px]"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-6 max-w-[320px] text-[22px] font-semibold tracking-tight text-white transition-transform duration-500 ease-out group-hover:translate-x-1 md:text-[26px]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[440px] text-[14.5px] leading-relaxed text-mist md:text-[15px]">
                      {item.description}
                    </p>

                    <ul className="mt-7 flex flex-wrap gap-2">
                      {scene.tags.map((tag) => (
                        <li
                          key={tag}
                          className="t-label border border-line px-3 py-1.5 text-[10px] text-mist-2 transition-colors duration-500 group-hover:border-accent/35 group-hover:text-mist"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative flex items-center gap-2 border-t border-line px-7 py-4 md:px-9">
                    <p className="t-label mr-1 hidden text-[10px] text-mist-2 sm:block">
                      Flow
                    </p>
                    {scene.cue.map((node, n) => (
                      <div key={node} className="flex items-center gap-2">
                        <span
                          className={`t-label border px-2.5 py-1.5 text-[10px] ${
                            n === scene.cue.length - 1
                              ? "border-accent/40 text-accent-soft"
                              : "border-line-strong text-mist"
                          }`}
                        >
                          {node}
                        </span>
                        {n < scene.cue.length - 1 && (
                          <span aria-hidden className="h-px w-4 bg-accent/30 sm:w-6" />
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Related() {
  const { related } = voiceAgent;
  return (
    <section
      aria-labelledby="voice-related-heading"
      className="relative border-t border-line py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index="06" label="Related" />
        <RevealText
          as="h2"
          id="voice-related-heading"
          text={related.title}
          className="text-h2 mt-10 max-w-[640px] font-semibold text-white"
        />
        <Reveal delay={0.15} className="mt-10">
          <Link
            href={related.ai.href}
            data-analytics="voice-related-ai-development"
            className="group block max-w-[640px] border border-line bg-ink-2 p-7 transition-colors hover:border-accent/45 md:p-9"
          >
            <p className="t-label text-accent-soft">Service</p>
            <h3 className="mt-3 text-[22px] font-semibold tracking-tight text-white transition-colors group-hover:text-accent-soft">
              {related.ai.label}
            </h3>
            <p className="mt-3 text-[14.5px] leading-relaxed text-mist">
              {related.ai.description}
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-mist transition-colors group-hover:text-white">
              Explore AI Development
              <svg
                aria-hidden
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                className="text-accent transition-transform group-hover:translate-x-0.5"
              >
                <path
                  d="M1 7h11M8 2.5 12.5 7 8 11.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="voice-faq-heading"
      className="relative scroll-mt-20 border-t border-line py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionLabel index="05" label="Questions" />
              <RevealText
                as="h2"
                id="voice-faq-heading"
                text="Practical answers before you book a call."
                className="text-h2 mt-10 font-semibold text-white"
              />
              <Reveal delay={0.2} className="mt-8">
                <p className="max-w-[340px] text-[15.5px] leading-relaxed text-mist">
                  We separate what the public demo can do from what a custom
                  build includes — so expectations stay honest.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-8">
            {voiceAgent.faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={faq.question} delay={Math.min(i * 0.04, 0.2)} y={20} amount={0.2}>
                  <div className="border-b border-line first:border-t">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`voice-faq-answer-${i}`}
                        id={`voice-faq-question-${i}`}
                        onClick={() => setOpen(isOpen ? null : i)}
                        className="group flex w-full items-center gap-5 py-6 text-left md:py-7"
                      >
                        <span
                          className={`t-label w-7 shrink-0 ${isOpen ? "text-accent-soft" : "text-mist-2"}`}
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
                          className={`relative h-4 w-4 shrink-0 transition-transform duration-400 ${isOpen ? "rotate-45" : ""}`}
                        >
                          <span
                            className={`absolute top-1/2 left-0 h-px w-full -translate-y-1/2 ${isOpen ? "bg-accent" : "bg-mist-2"}`}
                          />
                          <span
                            className={`absolute left-1/2 h-full w-px -translate-x-1/2 ${isOpen ? "bg-accent" : "bg-mist-2"}`}
                          />
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`voice-faq-answer-${i}`}
                          role="region"
                          aria-labelledby={`voice-faq-question-${i}`}
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

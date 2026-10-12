"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { voiceAgent } from "@/lib/data/voice-agent";

const CALL_LINES = [
  { role: "Caller", text: "Do you take appointments on Saturday?" },
  { role: "Agent", text: "Yes — Saturday until 2pm. What time works for you?" },
  { role: "Caller", text: "Around 11, for a service check." },
  { role: "Agent", text: "I'll take that request and confirm with the team." },
] as const;

type DemoAvailability = "available" | "unavailable";

type HomeSectionTone = "dark" | "light";

/** Homepage product section — Buildaze visual language, links to /voice-agent or contact. */
export function VoiceAgentSection({ tone = "dark" }: { tone?: HomeSectionTone }) {
  const isLight = tone === "light";
  const reduced = useReducedMotion();
  /** SSR-safe default: walkthrough CTA. Upgrade to live demo only after status resolves. */
  const [availability, setAvailability] = useState<DemoAvailability>("unavailable");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/voice-agent/status", { cache: "no-store" });
        const data = (await res.json()) as { available?: boolean };
        if (!cancelled) {
          setAvailability(data.available ? "available" : "unavailable");
        }
      } catch {
        if (!cancelled) setAvailability("unavailable");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const demoReady = availability === "available";

  return (
    <section
      id="voice-agent"
      aria-labelledby="voice-agent-heading"
      className={`relative scroll-mt-20 overflow-hidden py-28 md:py-40${
        isLight ? " surface-soft" : " surface-ink border-y border-line"
      }`}
    >
      {!isLight && (
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 45% at 80% 30%, rgba(37,99,235,0.1), transparent 70%)",
          }}
        />
      )}

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionLabel index={voiceAgent.homepage.index} label={voiceAgent.homepage.label} />
            <RevealText
              as="h2"
              id="voice-agent-heading"
              text={voiceAgent.homepage.heading}
              className="text-h2 mt-10 font-semibold text-white"
            />
            <Reveal delay={0.2} className="mt-8">
              <p className="max-w-[480px] text-lead text-mist">{voiceAgent.homepage.body}</p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center gap-4">
              {demoReady ? (
                <MagneticButton
                  href={voiceAgent.path}
                  analytics="home-voice-try-agent"
                  tone={tone}
                >
                  Try the Voice Agent
                </MagneticButton>
              ) : (
                <MagneticButton
                  href="/contact?service=ai&capability=AI%20Voice%20Agents"
                  analytics="home-voice-walkthrough"
                  tone={tone}
                >
                  Request a Voice Agent Walkthrough
                </MagneticButton>
              )}
              <MagneticButton
                href="/contact?service=ai&capability=AI%20Voice%20Agents"
                variant="ghost"
                analytics="home-voice-start-project"
                tone={tone}
              >
                Discuss a Voice Agent
              </MagneticButton>
            </Reveal>
          </div>

          <Reveal delay={0.15} y={36} className="lg:col-span-7">
            <div
              className={
                isLight
                  ? "home-card relative overflow-hidden border bg-white"
                  : "build-grid relative overflow-hidden border border-line bg-ink-2"
              }
            >
              {!isLight && (
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 80% at 30% 40%, rgba(37,99,235,0.1), transparent 70%)",
                  }}
                />
              )}
              <div className="relative border-b border-line px-5 py-4 md:px-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="t-label text-mist-2">Illustrative conversation</p>
                  <p className="t-label inline-flex items-center gap-2 text-mist-2">
                    <span aria-hidden className="relative flex h-1.5 w-1.5">
                      {!reduced && (
                        <motion.span
                          className="absolute inset-0 bg-accent"
                          animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
                          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
                        />
                      )}
                      <span className="relative h-1.5 w-1.5 bg-accent" />
                    </span>
                    Example only
                  </p>
                </div>
              </div>
              <ul className="relative space-y-0 px-5 py-2 md:px-7">
                {CALL_LINES.map((line, i) => (
                  <motion.li
                    key={line.text}
                    initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{
                      delay: reduced ? 0 : 0.12 + i * 0.12,
                      duration: 0.45,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="flex gap-4 border-b border-line py-5 last:border-b-0"
                  >
                    <span
                      className={`t-label w-14 shrink-0 ${
                        line.role === "Agent" ? "text-accent-soft" : "text-mist-2"
                      }`}
                    >
                      {line.role}
                    </span>
                    <p className="text-[15px] leading-relaxed text-mist md:text-[15.5px]">
                      {line.text}
                    </p>
                  </motion.li>
                ))}
              </ul>
              <div className="relative flex items-center justify-between gap-4 border-t border-line px-5 py-4 md:px-7">
                <p className="t-label text-[10.5px] text-mist-2">
                  Not a live demonstration — try the agent on the product page when available
                </p>
                <span aria-hidden className="hidden h-px flex-1 bg-line sm:block" />
                <p className="t-label hidden text-[10.5px] text-accent-soft sm:block">
                  /voice-agent
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/lib/data/work";

/** Skeleton text line used inside the abstract interfaces. */
function TextLine({ w, dim = false }: { w: string; dim?: boolean }) {
  return (
    <div
      className={`h-[7px] rounded-sm ${dim ? "bg-white/[0.07]" : "bg-white/[0.13]"}`}
      style={{ width: w }}
    />
  );
}

function ChromeBar({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-line px-5 py-3.5">
      <span className="flex gap-1.5" aria-hidden>
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-white/15" />
        <span className="h-2 w-2 rounded-full bg-accent/70" />
      </span>
      <span className="t-label text-[10px] text-mist-2">{label}</span>
      <span className="ml-auto flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden />
        <span className="t-label text-[9px] text-accent-soft">Live</span>
      </span>
    </div>
  );
}

function SupportVisual() {
  return (
    <div className="grid h-full grid-cols-[1fr_1.8fr]">
      <div className="space-y-4 border-r border-line p-5">
        {[0.9, 0.65, 0.8, 0.55, 0.7].map((w, i) => (
          <div key={i} className={`space-y-2 border-l-2 py-1 pl-3 ${i === 1 ? "border-accent" : "border-transparent"}`}>
            <TextLine w={`${w * 100}%`} />
            <TextLine w={`${w * 60}%`} dim />
          </div>
        ))}
      </div>
      <div className="flex flex-col p-5">
        <div className="mb-4 flex gap-2">
          {["Account", "Plan", "History"].map((chip) => (
            <span key={chip} className="t-label border border-line px-2.5 py-1.5 text-[9px] text-mist-2">
              {chip}
            </span>
          ))}
        </div>
        <div className="space-y-2.5">
          <TextLine w="70%" dim />
          <TextLine w="88%" dim />
          <TextLine w="52%" dim />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-auto border border-accent/50 bg-accent-dim p-4"
        >
          <p className="t-label mb-2.5 text-[9px] text-accent-soft">AI-drafted reply</p>
          <div className="space-y-2">
            <TextLine w="92%" />
            <TextLine w="78%" />
            <TextLine w="45%" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function RiskVisual() {
  const rows = [
    { w: 0.82, risk: 78, hot: true },
    { w: 0.6, risk: 34, hot: false },
    { w: 0.72, risk: 52, hot: false },
    { w: 0.5, risk: 21, hot: false },
    { w: 0.66, risk: 45, hot: false },
  ];
  return (
    <div className="flex h-full flex-col p-5">
      <div className="t-label mb-4 flex justify-between text-[9px] text-mist-2">
        <span>Claims queue</span>
        <span>Risk score</span>
      </div>
      <div className="flex-1 space-y-3">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`flex items-center gap-4 border p-3 ${row.hot ? "border-accent/60 bg-accent-dim" : "border-line"}`}
          >
            <span aria-hidden className={`h-1.5 w-1.5 ${row.hot ? "bg-accent" : "bg-white/25"}`} />
            <TextLine w={`${row.w * 50}%`} />
            <div className="ml-auto h-[5px] w-24 overflow-hidden rounded-sm bg-white/[0.08]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${row.risk}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`h-full ${row.hot ? "bg-accent" : "bg-white/30"}`}
              />
            </div>
            <span className={`t-label w-8 text-right text-[9px] ${row.hot ? "text-accent-soft" : "text-mist-2"}`}>
              {row.risk}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t border-line pt-3">
        <p className="t-label text-[9px] text-accent-soft">Summary generated · 2.1s</p>
      </div>
    </div>
  );
}

function ClinicalVisual() {
  return (
    <div className="grid h-full grid-cols-[1.6fr_1fr]">
      <div className="space-y-2.5 border-r border-line p-5">
        <div className="t-label mb-4 flex items-center justify-between text-[9px] text-mist-2">
          <span>Visit notes</span>
          <span className="border border-accent/50 px-2 py-1 text-accent-soft">PHI-safe</span>
        </div>
        {[0.95, 0.85, 0.9, 0.7, 0.92, 0.6, 0.88, 0.75].map((w, i) => (
          <TextLine key={i} w={`${w * 100}%`} dim={i % 3 !== 0} />
        ))}
      </div>
      <div className="flex flex-col p-5">
        <p className="t-label mb-3 text-[9px] text-accent-soft">Summary</p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-2.5 border border-accent/40 bg-accent-dim p-4"
        >
          <TextLine w="90%" />
          <TextLine w="75%" />
          <TextLine w="82%" />
          <TextLine w="40%" />
        </motion.div>
        <div className="mt-auto space-y-2">
          <p className="t-label text-[9px] text-mist-2">Citations</p>
          {[1, 2].map((n) => (
            <div key={n} className="flex items-center gap-2">
              <span className="t-label text-[9px] text-accent-soft">[{n}]</span>
              <TextLine w="60%" dim />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CatalogVisual() {
  const tiles = [96, 88, 74, 61, 52, 43];
  return (
    <div className="flex h-full flex-col p-5">
      <div className="mb-4 flex items-center gap-3 border border-line px-4 py-2.5">
        <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
        <TextLine w="55%" />
        <span className="t-label ml-auto text-[9px] text-accent-soft">Intent matched</span>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-3">
        {tiles.map((match, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
            className={`flex flex-col border p-3 ${i === 0 ? "border-accent/60" : "border-line"}`}
          >
            <div className={`mb-3 aspect-square ${i === 0 ? "bg-accent-dim" : "bg-white/[0.05]"}`} />
            <TextLine w="80%" />
            <div className="mt-2">
              <TextLine w="45%" dim />
            </div>
            <span className={`t-label mt-2.5 text-[9px] ${i === 0 ? "text-accent-soft" : "text-mist-2"}`}>
              {match}% match
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PerformanceVisual() {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="mb-4 flex items-center justify-between border border-line px-4 py-2.5">
        <span className="t-label text-[10px] text-mist-2">Core Web Vitals</span>
        <span className="t-label text-[10px] text-accent-soft">28 → 91</span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-3">
        {["LCP", "INP", "CLS", "Theme JS"].map((metric, i) => (
          <div
            key={metric}
            className={`flex flex-col justify-between border p-4 ${
              i === 0 ? "border-accent/60" : "border-line"
            }`}
          >
            <span className="t-label text-[10px] text-mist-2">{metric}</span>
            <div className="mt-6 space-y-2">
              <TextLine w={i === 0 ? "85%" : "60%"} />
              <TextLine w="40%" dim />
            </div>
            <span
              className={`t-label mt-4 text-[9px] ${
                i === 0 ? "text-accent-soft" : "text-mist-2"
              }`}
            >
              {i === 0 ? "Optimized" : "Reviewed"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const visuals = {
  support: { component: SupportVisual, chrome: "support-copilot · agent console" },
  risk: { component: RiskVisual, chrome: "risk-copilot · triage queue" },
  clinical: { component: ClinicalVisual, chrome: "note-summarizer · clinic view" },
  catalog: { component: CatalogVisual, chrome: "catalog-engine · storefront" },
  performance: {
    component: PerformanceVisual,
    chrome: "shopify · performance audit",
  },
} as const;

/**
 * Honest abstract product interface for each case study — built from the
 * design system rather than fabricated client screenshots.
 */
export function CaseVisual({ study }: { study: CaseStudy }) {
  const { component: Visual, chrome } = visuals[study.visual];
  return (
    <div className="build-grid relative aspect-[16/11] overflow-hidden border border-line bg-ink-2 md:aspect-[16/10]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(37,99,235,0.07), transparent 65%)",
        }}
      />
      <div className="relative flex h-full flex-col">
        <ChromeBar label={chrome} />
        <div className="min-h-0 flex-1">
          <Visual />
        </div>
      </div>
    </div>
  );
}

"use client";

import type { ServiceSelectedCase } from "@/lib/data/services";

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

function PerformanceVisual() {
  return (
    <div className="flex h-full flex-col p-6 md:p-8">
      <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
        <div>
          <p className="t-label text-mist-2">Lighthouse</p>
          <p className="mt-3 text-[42px] font-semibold tracking-tight text-accent-soft">91</p>
          <p className="mt-1 text-[13px] text-mist">Performance score</p>
        </div>
        <div className="text-right">
          <p className="t-label text-mist-2">Was</p>
          <p className="mt-3 text-[28px] font-semibold text-mist-2 line-through">28</p>
        </div>
      </div>
      <div className="mt-6 grid flex-1 grid-cols-4 gap-3">
        {[91, 98, 87, 100].map((score, i) => (
          <div key={i} className="flex flex-col justify-end border border-line p-3">
            <div
              className="mb-3 w-full bg-accent/30"
              style={{ height: `${Math.max(score * 0.55, 24)}%` }}
            />
            <p className="t-label text-[9px] text-mist-2">{score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function BuildVisual() {
  return (
    <div className="grid h-full grid-cols-[1fr_1.4fr]">
      <div className="space-y-3 border-r border-line p-5">
        {["Home", "Catalog", "PDP", "Cart", "Account"].map((item, i) => (
          <div
            key={item}
            className={`border-l-2 py-2 pl-3 ${i === 2 ? "border-accent" : "border-transparent"}`}
          >
            <TextLine w={i === 2 ? "78%" : "62%"} />
            <div className="mt-2">
              <TextLine w="42%" dim />
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col p-5">
        <div className="aspect-[4/3] border border-line bg-accent-dim/40" />
        <div className="mt-4 space-y-2">
          <TextLine w="70%" />
          <TextLine w="48%" dim />
        </div>
        <div className="mt-auto flex gap-2 pt-5">
          <span className="h-9 flex-1 bg-accent/80" />
          <span className="h-9 w-9 border border-line" />
        </div>
      </div>
    </div>
  );
}

function RedesignVisual() {
  return (
    <div className="grid h-full grid-cols-2">
      <div className="flex flex-col border-r border-line p-5">
        <p className="t-label mb-4 text-mist-2">Before</p>
        <div className="flex-1 space-y-3 opacity-45">
          <div className="h-16 border border-line bg-white/[0.03]" />
          <TextLine w="90%" />
          <TextLine w="70%" dim />
          <TextLine w="55%" dim />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="aspect-square border border-line" />
            <div className="aspect-square border border-line" />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-5">
        <p className="t-label mb-4 text-accent-soft">After</p>
        <div className="flex-1 space-y-3">
          <div className="h-16 border border-accent/40 bg-accent-dim" />
          <TextLine w="84%" />
          <TextLine w="62%" dim />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="aspect-square border border-line bg-white/[0.06]" />
            <div className="aspect-square border border-accent/30 bg-accent-dim/50" />
          </div>
          <div className="mt-auto h-8 w-2/3 bg-accent/70" />
        </div>
      </div>
    </div>
  );
}

const visuals = {
  performance: { component: PerformanceVisual, chrome: "storefront · performance" },
  build: { component: BuildVisual, chrome: "storefront · custom build" },
  redesign: { component: RedesignVisual, chrome: "storefront · redesign" },
} as const;

export function ShopifyWorkVisual({
  visual,
}: {
  visual: ServiceSelectedCase["visual"];
}) {
  const { component: Visual, chrome } = visuals[visual];
  return (
    <div className="build-grid relative aspect-[16/11] overflow-hidden border border-line bg-ink-2 md:aspect-[16/10]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(37,99,235,0.07), transparent 65%)",
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

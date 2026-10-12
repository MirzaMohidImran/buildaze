"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const BuildSystemScene = dynamic(() => import("@/components/webgl/BuildSystemScene"), {
  ssr: false,
});

const LAYER_LABELS = ["Idea", "Architecture", "Code", "Product", "Scale"];

type SectionTone = "dark" | "light";

/** Static Build System fallback for reduced motion / WebGL unavailable. */
function StaticBuildSystem({ tone = "dark" }: { tone?: SectionTone }) {
  const isLight = tone === "light";
  const strokeLayer = isLight ? "rgba(12,16,23,0.22)" : "rgba(255,255,255,0.22)";
  const strokeCross = isLight ? "rgba(12,16,23,0.12)" : "rgba(255,255,255,0.1)";
  const fillNode = isLight ? "rgba(12,16,23,0.45)" : "rgba(255,255,255,0.5)";

  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden className="h-full w-full opacity-80">
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 320 - i * 58;
        const w = 200 - Math.abs(i - 2) * 24;
        return (
          <g key={i} transform={`translate(200 ${y})`}>
            <path
              d={`M ${-w} 0 L 0 ${-w * 0.42} L ${w} 0 L 0 ${w * 0.42} Z`}
              stroke={i === 2 ? "#2563EB" : strokeLayer}
              strokeWidth={i === 2 ? 1.5 : 1}
            />
            <path
              d={`M ${-w * 0.5} ${-w * 0.21} L ${w * 0.5} ${w * 0.21} M ${-w * 0.5} ${w * 0.21} L ${w * 0.5} ${-w * 0.21}`}
              stroke={strokeCross}
              strokeWidth="1"
            />
            {i < 4 && (
              <line x1="0" y1="-8" x2="0" y2="-46" stroke="rgba(37,99,235,0.5)" strokeWidth="1" strokeDasharray="2 4" />
            )}
            <rect x="-3" y="-3" width="6" height="6" fill={i % 2 === 0 ? "#2563EB" : fillNode} />
          </g>
        );
      })}
    </svg>
  );
}

export function Hero({ tone = "dark" }: { tone?: SectionTone }) {
  const isLight = tone === "light";
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  /** Defer reduced-motion until after mount so SSR HTML matches hydration. */
  const [mounted, setMounted] = useState(false);
  const reduced = mounted && prefersReduced === true;
  const [renderWebGL, setRenderWebGL] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Light homepage uses the static scene — WebGL palette is tuned for dark canvas.
    if (!mounted || reduced || isLight) return;
    const canWebGL = (() => {
      try {
        const canvas = document.createElement("canvas");
        return !!(
          canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        );
      } catch {
        return false;
      }
    })();
    if (canWebGL) setRenderWebGL(true);
  }, [mounted, reduced, isLight]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  const scene =
    renderWebGL && !isLight ? (
      <BuildSystemScene />
    ) : (
      <StaticBuildSystem tone={tone} />
    );

  const headlineLines = [
    "Design, build and grow",
    "your business.",
  ];

  return (
    <section
      ref={ref}
      id="top"
      aria-label="Introduction"
      className={`relative flex min-h-svh flex-col overflow-hidden lg:block${
        isLight ? " surface-page" : " surface-ink"
      }`}
    >
      <div aria-hidden className="build-grid fade-edges absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 55% 45% at 72% 42%, rgba(37,99,235,0.06), transparent 70%)"
            : "radial-gradient(ellipse 55% 45% at 72% 42%, rgba(37,99,235,0.13), transparent 70%)",
        }}
      />

      <div aria-hidden className="absolute top-1/2 right-10 z-[1] hidden -translate-y-1/2 flex-col gap-5 xl:flex">
        {LAYER_LABELS.map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-end gap-3"
          >
            <span className={`t-label ${i === 2 ? "text-accent-soft" : "text-mist-2"}`}>{label}</span>
            <span className={`h-px w-6 ${i === 2 ? "bg-accent" : "bg-line-strong"}`} />
          </motion.div>
        ))}
      </div>

      <motion.div
        style={reduced ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-[1] order-1 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-5 pt-28 pb-8 md:px-10 lg:min-h-svh lg:pb-24"
      >
        <div className="max-w-[780px]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="t-label flex items-center gap-3 text-mist"
          >
            <span aria-hidden className="inline-block h-1.5 w-1.5 animate-pulse bg-accent" />
            Design, development and digital growth
          </motion.p>

          <h1 className="text-display mt-7 font-semibold text-white">
            {headlineLines.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.09em] -mb-[0.05em]">
                <motion.span
                  className="block"
                  initial={reduced ? { opacity: 0 } : { y: "108%" }}
                  animate={reduced ? { opacity: 1 } : { y: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === headlineLines.length - 1 ? (
                    <>
                      your <span className="text-accent-soft">business.</span>
                    </>
                  ) : (
                    // Trailing space keeps accessible name readable across block lines.
                    `${line} `
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-lead mt-7 max-w-[560px] text-mist"
          >
            Buildaze is a digital agency bringing branding, design, websites,
            applications, AI automation, digital marketing and Shopify together
            around your business goals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="/contact" analytics="hero-start-project" tone={tone}>
              Discuss Your Project
            </MagneticButton>
            <MagneticButton href="#work" variant="ghost" analytics="hero-view-work" tone={tone}>
              Explore Our Work
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        aria-hidden
        style={reduced ? undefined : { opacity: sceneOpacity }}
        className="pointer-events-none relative z-[1] order-2 mx-auto mb-10 h-[min(72vw,400px)] w-full max-w-[560px] px-2 sm:h-[420px] lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:mb-0 lg:h-auto lg:max-w-none lg:w-[58%] lg:px-0"
      >
        {scene}
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-[1] hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="t-label text-[10px] text-mist-2">Scroll</span>
        <div className="h-10 w-px overflow-hidden bg-line">
          <motion.div
            className="h-1/2 w-full bg-accent"
            animate={reduced ? undefined : { y: ["-100%", "220%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

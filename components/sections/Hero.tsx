"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { heroProof } from "@/lib/data/site";

const BuildSystemScene = dynamic(() => import("@/components/webgl/BuildSystemScene"), {
  ssr: false,
});

const LAYER_LABELS = ["Idea", "Architecture", "Code", "Product", "Scale"];

/** Static Build System fallback for touch devices and reduced motion. */
function StaticBuildSystem() {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden className="h-full w-full opacity-80">
      {[0, 1, 2, 3, 4].map((i) => {
        const y = 320 - i * 58;
        const w = 200 - Math.abs(i - 2) * 24;
        return (
          <g key={i} transform={`translate(200 ${y})`}>
            <path
              d={`M ${-w} 0 L 0 ${-w * 0.42} L ${w} 0 L 0 ${w * 0.42} Z`}
              stroke={i === 2 ? "#2563EB" : "rgba(255,255,255,0.22)"}
              strokeWidth={i === 2 ? 1.5 : 1}
            />
            <path
              d={`M ${-w * 0.5} ${-w * 0.21} L ${w * 0.5} ${w * 0.21} M ${-w * 0.5} ${w * 0.21} L ${w * 0.5} ${-w * 0.21}`}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
            {i < 4 && (
              <line x1="0" y1="-8" x2="0" y2="-46" stroke="rgba(37,99,235,0.5)" strokeWidth="1" strokeDasharray="2 4" />
            )}
            <rect x="-3" y="-3" width="6" height="6" fill={i % 2 === 0 ? "#2563EB" : "rgba(255,255,255,0.5)"} />
          </g>
        );
      })}
    </svg>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [renderWebGL, setRenderWebGL] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    if (fine && wide && !reduced) setRenderWebGL(true);
  }, [reduced]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);

  return (
    <section ref={ref} id="top" aria-label="Introduction" className="relative min-h-svh overflow-hidden">
      {/* Build Grid canvas */}
      <div aria-hidden className="build-grid fade-edges absolute inset-0" />
      {/* Blue atmospheric depth, derived only from the accent */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 72% 42%, rgba(37,99,235,0.13), transparent 70%)",
        }}
      />

      {/* WebGL build system / static fallback */}
      <motion.div
        aria-hidden
        style={reduced ? undefined : { opacity: sceneOpacity }}
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] lg:block"
      >
        {renderWebGL ? <BuildSystemScene /> : <StaticBuildSystem />}
      </motion.div>

      {/* Layer captions — the build system legend */}
      <div aria-hidden className="absolute top-1/2 right-10 hidden -translate-y-1/2 flex-col gap-5 xl:flex">
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
        className="relative mx-auto flex min-h-svh max-w-[1600px] flex-col justify-center px-5 pt-28 pb-24 md:px-10"
      >
        <div className="max-w-[780px]">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="t-label flex items-center gap-3 text-mist"
          >
            <span aria-hidden className="inline-block h-1.5 w-1.5 animate-pulse bg-accent" />
            AI-native product &amp; software studio
          </motion.p>

          <h1 className="text-display mt-7 font-semibold text-white">
            {["We build software", "that ships."].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.09em] -mb-[0.05em]">
                <motion.span
                  className="block"
                  initial={reduced ? { opacity: 0 } : { y: "108%" }}
                  animate={reduced ? { opacity: 1 } : { y: 0 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  {i === 1 ? (
                    <>
                      that <span className="text-accent-soft">ships.</span>
                    </>
                  ) : (
                    line
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
            Custom AI products, SaaS platforms, web applications and ecommerce —
            scoped, designed and engineered by one senior team. Fixed-scope
            sprints, weekly demos, and you own every line of code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact" analytics="hero-start-project">
              Start a Project
            </MagneticButton>
            <MagneticButton href="/work" variant="ghost" analytics="hero-view-work">
              Explore Our Work
            </MagneticButton>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05, duration: 0.9 }}
            className="mt-14 flex flex-wrap gap-x-8 gap-y-3"
          >
            {heroProof.map((item) => (
              <li key={item} className="t-label flex items-center gap-2.5 text-mist-2">
                <span aria-hidden className="inline-block h-1 w-1 bg-accent" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
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

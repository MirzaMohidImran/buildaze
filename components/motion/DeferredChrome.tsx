"use client";

import dynamic from "next/dynamic";

/**
 * Layout chrome that must not compete with first paint / LCP.
 * Client-only dynamic imports (Lenis + custom cursor).
 */
const SmoothScroll = dynamic(
  () => import("@/components/motion/SmoothScroll").then((m) => m.SmoothScroll),
  { ssr: false },
);
const CursorFollower = dynamic(
  () => import("@/components/motion/CursorFollower").then((m) => m.CursorFollower),
  { ssr: false },
);

export function DeferredChrome() {
  return (
    <>
      <SmoothScroll />
      <CursorFollower />
    </>
  );
}

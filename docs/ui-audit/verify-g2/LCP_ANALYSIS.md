# Home LCP analysis (Group 2) — WebGL untouched

Measured on production `http://127.0.0.1:3001/` (Playwright PerformanceObserver).

## LCP element

| Field | Value |
|-------|--------|
| Element | `<p class="text-lead …">` — hero supporting copy |
| Time | ~5.8s (lab) |
| Size | ~47 KB (text paint) |
| Not LCP | WebGL canvas / Three.js scene |

## Contributors (excluding WebGL scene code)

1. **Framer Motion hides hero copy until hydrate + delay**  
   Lead uses `initial={{ opacity: 0 }}` + `delay: 0.65`. H1 lines use `y: "108%"` inside `overflow-hidden`. Opacity-0 / clipped text cannot be LCP until animation runs → LCP waits on JS.
2. **Large critical JS** — top scripts ~98 KB + 55 KB + 47 KB + 43 KB early; homepage client graph pulls Framer, Lenis, cursor, all section components.
3. **Fonts** — Space Grotesk + Geist Mono woff2 (~23 KB each), already `next/font` + `display: swap`; FCP ~2.5s.
4. **Below-fold eager client components** — FeaturedWork, TeamAndProof, Contact form, FAQ, etc. all in the home module graph.
5. **Lenis + CursorFollower** — layout-wide client effects (fine-pointer only); add main-thread work after load.
6. **Analytics** — GA via `@next/third-parties` (afterInteractive); minor vs motion/JS.
7. **WebGL chunk** — separate dynamic chunk loads ~5.3s in this trace; **not** the LCP node. Left unchanged per brand constraint.

## Fix plan (Group 2)

- Paint hero H1 + lead immediately (no opacity/transform gate).
- Dynamic-import below-fold home sections (SSR HTML kept).
- Dynamic-import SmoothScroll + CursorFollower (`ssr: false`).
- Leave `BuildSystemScene` / hero WebGL loading path unchanged.

## After Group 2 (honest numbers)

| Metric | Before | After |
|--------|--------|-------|
| Mobile Perf | 29 | **67** |
| Mobile LCP | 10.1 s | **1.6 s** |
| Mobile A11y | 97 | **100** |
| Desktop Perf | 26 | **32** |
| Desktop LCP | 9.6 s | **3.4 s** |
| Desktop A11y | 97 | **100** |
| Lab LCP element | lead `<p>` @ ~5.8s | H1 line `@ ~1.4s` |
| Mobile TBT | ~28 s (lab inflated) | **~14 s** still high |
| Desktop TBT | ~15 s | **~8.3 s** still high |

### Remaining bottleneck (WebGL not changed)

TBT / desktop Perf are still dragged by heavy main-thread JS after first paint. Likely contributors include the **Three.js/WebGL chunk + R3F**, remaining Framer Motion on the page, and hydration of below-fold client islands. LCP itself is no longer blocked by the canvas.

**Trade-offs if you later authorize WebGL changes (not done):** defer init until idle/in-view; lower DPR; static SVG longer on slow devices; reduce shader/geometry cost. Any of those need your explicit OK.

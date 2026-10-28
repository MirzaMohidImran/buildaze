# Buildaze UI/UX Audit Report (STEP 1)

**Branch:** `ui-audit`  
**Audited build:** production (`npm run build` + `next start -p 3001`)  
**Date:** 2026-10-28  
**Screenshots:** `docs/ui-audit/screenshots/` (full-page + viewport captures)  
**Axe JSON:** `docs/ui-audit/axe-results.json`  
**Lighthouse JSON:** `docs/ui-audit/lighthouse/summary.json`

> **Checkpoint:** Report only. No source UI changes yet. Await approval before STEP 2.

---

## Project context (discovered)

| Item | Value |
|------|--------|
| Live URL | https://www.buildaze.com |
| Local | `npm run dev` → http://localhost:3000 (audit used production on `:3001`) |
| Stack | Next.js 15 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion, Three.js/R3F, Lenis |
| Package manager | npm |
| UI library | None (custom components) |
| Icons | Custom inline SVGs (lucide-react installed for future consistency; not wired yet) |
| Primary / ink | `#0a0a0a` |
| Accent | `#2563eb` / hover `#1d4ed8` / soft `#7fa6f5` |
| Soft / paper | `#F7F8FA` / `#ffffff` |
| Text on light | `#0a0a0a` / secondary `#475569` / muted `#64748b` |
| Fonts | Space Grotesk (UI) + Geist Mono (labels) |
| Logo | `/public/Logo/` via `components/ui/Logo.tsx` |
| Business | Digital agency: design, development, AI, digital marketing, Shopify |
| Tone | Practical, specific English; copy lives in `lib/data/` |
| Styling approach | Tokens in `app/globals.css` `@theme` + `app/themes/buildaze.css` surfaces |

---

## STEP 0 status

Completed on branch `ui-audit`:

- [x] Branch `ui-audit`
- [x] `.cursor/mcp.json` — Playwright MCP + Context7 MCP
- [x] `npx playwright install chromium`
- [x] Dev deps: eslint, eslint-config-next@15, eslint-plugin-jsx-a11y, prettier, prettier-plugin-tailwindcss, @axe-core/playwright, lighthouse, playwright, @eslint/eslintrc
- [x] `lucide-react` (no prior icon library)
- [x] `eslint.config.mjs` with jsx-a11y recommended
- [x] `.prettierrc.json` with Tailwind plugin
- [x] `.cursor/rules/brand.mdc` + `design-quality.mdc` (`alwaysApply: true`)
- [ ] **Context7 / Playwright MCP in Cursor:** config files exist, but servers are **not live in this session** until you enable them

**Action for you:** Cursor Settings → MCP → enable **playwright** and **context7** (or restart Cursor so `.cursor/mcp.json` is picked up). Context7 was not available during this audit; docs were taken from installed package versions + project code instead.

---

## Executive summary

The site already has a coherent brand system (ink / blue / soft surfaces, Space Grotesk, build-grid motif, capsule CTAs). Copy is unusually disciplined (few buzzwords; outcome stats appear sourced). The “AI look” is not purple-blob chaos — it is **template repetition**: the same radial blue glow + build-grid hero on nearly every page, glass contact shells, identical hub-hero composition, and many one-off `text-[Npx]` sizes bypassing the type tokens.

**Biggest risks to fix first:** WCAG contrast on muted labels (`#64748b` on `#f7f8fa`), homepage main-thread cost (WebGL + motion → Lighthouse Performance ~26–29), semantic list breakage from `Reveal` wrapping `<li>`, and sub-44px carousel controls.

### Audit health (Impeccable dimensions)

| # | Dimension | Score | Key finding |
|---|-----------|-------|-------------|
| 1 | Accessibility | 2/4 | Systemic muted-label contrast fail; list semantics on voice-agent; some name mismatches |
| 2 | Performance | 1/4 | Home LCP ~10s / extreme TBT; unused JS; WebGL on critical path |
| 3 | Theming | 3/4 | Strong token base; many hardcoded sizes/shadows/radii still inline |
| 4 | Responsive | 3/4 | Generally solid; some 40px controls; long mobile scroll |
| 5 | Implementation integrity | 2/4 | Brand coherent, but hero/glow/glass patterns repeat as interchangeable “agency template” |
| **Total** | | **11/20** | **Acceptable — significant craft work needed** |

---

## Lighthouse scores (production, local)

| Page | Mobile Perf | Mobile A11y | Desktop Perf | Desktop A11y | BP | SEO |
|------|-------------|-------------|--------------|--------------|----|-----|
| Home | **29** | 97 | **26** | 97 | 100 | 100 |
| Services | n/a* | 100 | 39 | 100 | 100 | 100 |
| Work | 61 | 100 | 35 | 100 | 100 | 100 |
| About | n/a* | 93 | 38 | 93 | 100 | 100 |
| Contact | 70 | 100 | 47 | 100 | 100 | **92** |
| Resources | n/a* | 100 | 57 | 100 | 100 | 100 |
| Voice Agent | n/a* | 90 | 49 | 90 | 100 | 100 |
| Shopify | 55 | 97 | 33 | 97 | 100 | 100 |

\*Mobile performance returned null on some runs (runner timeout under load). Treat home numbers as the reliable worst case.

**Home desktop highlights:** FCP ~3.0s, LCP ~9.6s, TBT ~15s, unused JS ~186 KiB, CLS ~0. Color-contrast audit **fails**.

**Note:** TBT values are extreme and may be inflated by sequential Lighthouse runs on one machine; still, home is clearly the performance outlier vs contact/resources.

---

## Axe summary (Playwright, WCAG 2 A/AA)

| Page | Violations (1280) | Top issues |
|------|-------------------|------------|
| Home | 2 (+3 on 375) | `color-contrast` (~20 nodes), `label-content-name-mismatch`, mobile `scrollable-region-focusable` |
| Services | 0 | — |
| Work | 0 | — |
| About | 2 | `color-contrast`, `link-in-text-block` |
| Contact | 0 | — |
| Resources | 0 | — |
| Voice Agent | 3 | `color-contrast`, `list`, `listitem` |
| Shopify | 2 | `color-contrast`, `label-content-name-mismatch` |

---

## Prioritized findings

### Critical

1. **Muted text contrast fails WCAG AA on light soft surfaces**  
   - **Evidence:** Axe + Lighthouse `color-contrast: 0` on home/about/shopify/voice. `#64748b` on `#f7f8fa` ≈ **4.47:1** (need 4.5:1 for 14px labels).  
   - **Files:** `app/themes/buildaze.css` (`--text-on-light-muted` / `--color-mist-2` on `.surface-soft`); consumers of `text-mist-2` + `.t-label` on light sections (`ServiceExperience`, `AboutPage`, Shopify sections, etc.).  
   - **Screenshots:** `viewport-home-services-1280.png`, `home-1280.png` (services block).  
   - **Fix direction:** Darken muted token one step (e.g. toward `#575f6b` / slate-600) **as a derived tint of the existing palette**, keep meaning.

2. **Homepage performance / main-thread cost**  
   - **Evidence:** LH home Perf 26–29; LCP ~10s; large unused JS; Three.js scene + Framer + Lenis + cursor on first paint path.  
   - **Files:** `components/sections/Hero.tsx`, `components/webgl/BuildSystemScene.tsx`, `components/motion/SmoothScroll.tsx`, `components/motion/CursorFollower.tsx`, `app/layout.tsx`.  
   - **Screenshots:** `viewport-home-1280.png`, `viewport-home-375.png`.  
   - **Fix direction:** Keep visual intent; defer WebGL more aggressively, reduce hydration on above-fold motion, code-split, consider static SVG default until idle.

3. **Broken list semantics on Voice Agent benefits**  
   - **Evidence:** Axe `list` / `listitem` — `<ul>` contains `Reveal` → `motion.div` wrapping `<li>`.  
   - **Files:** `components/voice/VoiceAgentPage.tsx` (~238–272), `components/motion/Reveal.tsx`.  
   - **Screenshot:** `viewport-voice-1280.png` / `voice-agent-1280.png`.  
   - **Fix direction:** Make `Reveal` polymorphic (`as="li"`) or move motion onto `<li>` / inner content only.

### High

4. **Repeated “template hero” across hub pages (AI-slop pattern)**  
   - Same recipe: ink + build-grid + soft blue radial ellipse + centered or left H1 + pill CTA. Services, Work, Resources, Contact, Shopify, Voice share this. Brand-consistent color, but **compositionally interchangeable**.  
   - **Files:** `ServicesHub.tsx`, `WorkHub.tsx`, `ResourcesHub.tsx`, `ContactPage.tsx`, `ServiceHero.tsx`, `VoiceAgentPage.tsx`, etc. (~25 files with the same radial string).  
   - **Screenshots:** `viewport-services-1280.png`, `viewport-work-1280.png`, `viewport-shopify-1280.png`, `viewport-contact-1280.png`.  
   - **Fix direction:** Keep palette; vary structure (asymmetric media, editorial split, problem-first strip) so pages are recognizable without reading the H1.

5. **Glassmorphism contact shells**  
   - Heavy `backdrop-blur-2xl` + gradient white wash + multi-layer shadow — classic “AI SaaS form” look.  
   - **Files:** `ContactInquiryForm.tsx` (`glassShell`), `ContactInvite.tsx`, `ContactPage.tsx`.  
   - **Screenshots:** `contact-1280.png`, `viewport-contact-1280.png`, home contact section in `home-1280.png`.  
   - **Fix direction:** Solid ink elevated panel (`ink-2`/`ink-3`) with single border token; keep radius tokens.

6. **Accessible name ≠ visible text on case visuals**  
   - Links wrap `CaseVisual` with `aria-label="… — view case study"` while visible title lives outside — axe `label-content-name-mismatch`.  
   - **Files:** `FeaturedWork.tsx`, Shopify work cards (similar pattern).  
   - **Screenshots:** home work carousel / `shopify-1280.png`.

7. **Tap targets under 44px**  
   - Carousel prev/next `h-10 w-10` (40px) in Featured Work / Team proof.  
   - **Files:** `FeaturedWork.tsx`, `TeamAndProof.tsx`.  
   - **Fix:** `min-h-11 min-w-11` (44px) or larger hit area with visual size unchanged.

8. **About inline link distinguished only by color**  
   - Axe `link-in-text-block`: accent link vs `#475569` body without underline styling strong enough.  
   - **File:** about page body links (`AboutPage.tsx` / data).

9. **Horizontal scroller not keyboard-focusable (mobile home)**  
   - Axe `scrollable-region-focusable` on `.snap-x` (trust/logo strip).  
   - **Files:** `TrustStrip.tsx` / `ServiceLogoStrip.tsx`.

### Medium

10. **Type scale drift — hundreds of one-off sizes**  
    - Tokens exist (`text-display`…`text-label`) but components heavily use `text-[13.5px]`, `text-[14.5px]`, `text-[15.5px]`, `text-[17px]`, `text-[20px]`, `text-[22px]`, etc.  
    - **Impact:** Inconsistent rhythm; hard to maintain; “designed by utility class” feel.  
    - **Fix:** Consolidate into extended tokens (e.g. `text-body-sm`, `text-ui-sm`) then migrate.

11. **Shadow / glow inconsistency on primary CTAs**  
    - `MagneticButton` uses blue outer glow shadows; nav CTA uses inset-only; ghost borders vary. Feels premium in places, “glow button” template in others.  
    - **Files:** `MagneticButton.tsx`, `Navbar.tsx`.

12. **Logo / partner badges via raw `<img>`**  
    - `Logo.tsx`, Navbar Shopify badge, logo strips — not `next/image` (missed optimization / CLS control). Prefer next/image or at least explicit dimensions (already mostly set).

13. **Section layout repetition on service leaves**  
    - Many service sections share the same media-frame + build-grid + radial + 2-col card recipe (`ServiceCapabilities`, `ServiceAudience`, `ServiceWhy`, `ServiceEcosystem`, …). Strong system; weak variety.

14. **Contact SEO score 92**  
    - Code has `metaDescription` in `lib/data/contact-page.ts`; Lighthouse still flagged `meta-description`. Verify rendered `<meta name="description">` length/presence in HTML (possible empty string edge or crawler timing). Confirm before changing copy.

15. **Custom cursor hides native cursor**  
    - Fine for brand on desktop; ensure focus rings remain obvious and touch devices never activate (code already gates on `pointer: fine` + reduced motion — good). Re-check keyboard-only path.

### Low

16. **Pill buttons everywhere** — intentional brand choice in `buildaze.css` comments; keep, but avoid applying `rounded-full` to non-CTA chrome.  
17. **`active:scale-[0.97]`** on MagneticButton — restrained; OK if reduced-motion respected (motion values already gated).  
18. **Marquee logo strips** — reduced-motion kills animation in CSS; ensure content remains fully readable without relying on motion.  
19. **Emoji-as-icons / purple gradients / fake buzzwords** — largely **absent** (good). No Elevate/Unlock/Seamless/Revolutionize/Empower found in `lib/data`.  
20. **Outcome stats in work data** — appear intentional (`−38%` etc.); treat as approved content unless you flag otherwise. Do not invent more.

---

## AI-slop checklist (this codebase)

| Pattern | Present? | Notes |
|---------|----------|-------|
| Purple/indigo gradients | No | Brand blue only |
| Glowing blobs / soft radials | **Yes** | Repeated blue ellipse heroes |
| Heavy glassmorphism | **Yes** | Contact form shells |
| Emoji icons | No | Custom SVG |
| Identical 3-card grids | Partial | WhyBuildaze 2×2; many similar cards elsewhere |
| Hover-scale everywhere | No | Limited (`active:scale`, occasional translate) |
| Rounded-everything | Partial | Capsule CTAs by design; cards use 14px |
| Excessive shadows | Partial | CTA glow + glass inset stacks |
| Meaningless animation | Partial | Pulse dots, scroll indicator, marquees |
| Buzzword headlines | Mostly no | Copy is concrete |
| Fake testimonials/stats | No invented names spotted | Verify any proof quotes before amplify |

---

## Proposed design-token system (STEP 2 foundation)

Consolidate in `app/themes/buildaze.css` + `app/globals.css` `@theme` (single source; remove duplicate literals in components):

### Color
Keep brand hues; adjust **derived** muted for AA:

| Token | Current | Proposed |
|-------|---------|----------|
| `--brand-ink` | `#0a0a0a` | unchanged |
| `--brand-blue` | `#2563eb` | unchanged |
| `--brand-white` | `#ffffff` | unchanged |
| `--section-soft` | `#f7f8fa` | unchanged |
| `--text-on-light-muted` | `#64748b` | **darken to AA** (target ≥4.5:1 on soft) |
| `--text-on-ink-muted` | `rgba(255,255,255,0.42)` | verify vs ink (shopify axe saw ~`#717171` cases — audit those hardcoded greys) |
| Surface aliases | existing `.surface-*` | keep; document when to use each |

### Type
| Token | Role |
|-------|------|
| `display` / `h2` / `h3` / `lead` / `body` / `ui` / `label` | keep |
| Add `body-sm`, `ui-sm`, `caption` | absorb `13.5–15.5px` one-offs |

### Radius / elevation / space
| Token | Value |
|-------|-------|
| `--radius-control` | 12px |
| `--radius-card` / `--radius-panel` | 14px |
| `--radius-pill` | 9999px (document CTA-only) |
| Shadows | `--shadow-cta`, `--shadow-panel`, `--shadow-nav` — replace inline stacks |
| Space | document section `py-28/40`, container `max-w-[1600px]`, gutter `px-5/10` |

### Motion
| Token | Rule |
|-------|------|
| `--ease-out-expo` | keep |
| Durations | short UI 200–300ms; reveal ≤700ms |
| Always honor `prefers-reduced-motion` | already partial — complete for pulse/scroll chrome |

---

## Implementation plan (priority order — for STEP 2 after approval)

1. **Token consolidation** — muted contrast fix + shadow/type extensions; map surfaces; no layout redesign yet.  
2. **A11y P0/P1** — contrast, Reveal-as-li, name mismatches, tap targets, scrollable regions, about link underline.  
3. **Performance P0** — home WebGL/motion budget; unused JS; image strategy for logos.  
4. **De-template heroes** — redesign hub/service hero compositions (palette locked).  
5. **Contact shell redesign** — remove glass; solid panel language.  
6. **Section variety pass** — service leaves + homepage mid-page rhythm.  
7. **Component consistency** — buttons, forms, nav/footer states.  
8. **COPY_REVIEW.md** — suggested rewrites only where allowed; no silent meaning changes.  
9. **Verify** — re-screenshot 375/768/1280/1920, axe, Lighthouse, lint, build.

Suggested small commits (after approval): one theme/token commit → a11y → perf → visual sections.

---

## Screenshot index (main pages × breakpoints)

Full-page: `docs/ui-audit/screenshots/{home,services,work,about,contact,resources,voice-agent,shopify}-{375,768,1280,1920}.png`  

Viewport (hero/section crops): `viewport-home-1280.png`, `viewport-home-375.png`, `viewport-home-services-1280.png`, `viewport-services-1280.png`, `viewport-work-1280.png`, `viewport-about-1280.png`, `viewport-contact-1280.png`, `viewport-contact-375.png`, `viewport-resources-1280.png`, `viewport-voice-1280.png`, `viewport-shopify-1280.png`

---

## NEEDED FROM YOU (before / during STEP 2)

- [ ] Enable Playwright + Context7 MCP (or confirm restart)  
- [ ] Approve / cut / re-prioritize findings above  
- [ ] Confirm outcome metrics in `lib/data/work.ts` remain publishable  
- [ ] Confirm whether capsule (`rounded-full`) CTAs are non-negotiable brand  
- [ ] Contact meta description: confirm intended string if LH continues to flag  
- [ ] Any do-not-touch sections beyond forms/SEO/security already noted  
- [ ] Optional: real photography / team photos (about currently uses initials treatment by design)  
- [ ] Optional: `/impeccable init` to capture PRODUCT.md (Impeccable flagged missing)  

---

## Checkpoint

**Stopped here.** Reply with:
1. Which Critical/High items to implement first (or remove),  
2. Any copy/layout freedoms,  
3. Go-ahead for STEP 2.

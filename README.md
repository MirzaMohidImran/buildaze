# Buildaze — AI-Native Software Development Studio

A complete redesign of [buildaze.com](https://www.buildaze.com) as a premium, high-conversion digital experience.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** — design tokens defined in `app/globals.css`
- **Framer Motion** — reveals, scroll-linked animation, micro-interactions
- **Three.js / React Three Fiber** — the hero "Build System" WebGL scene
- **Lenis** — smooth scrolling (desktop, non-reduced-motion only)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command             | Description                    |
| ------------------- | ------------------------------ |
| `npm run dev`       | Development server (Turbopack) |
| `npm run build`     | Production build               |
| `npm run start`     | Serve the production build     |
| `npm run typecheck` | TypeScript check               |

## Project structure

```
app/                  Routes, layout, global styles, SEO (sitemap, robots)
components/sections/  One component per homepage section
components/motion/    Motion primitives (Reveal, Parallax, Counter, cursor, smooth scroll)
components/ui/        Reusable UI (buttons, labels, logo)
components/webgl/     Three.js hero scene
components/work/      Case-study visual canvases
lib/data/             All site content, typed — edit copy here, not in components
```

## Content

All copy, case studies, metrics, team, testimonials, pricing and FAQs live in
`lib/data/` and are sourced from the existing Buildaze site. No invented
clients, metrics or testimonials.

## Contact form

The form validates client-side and opens a pre-composed email to
`team@buildaze.com`. Swap the submit handler in
`components/sections/ContactCTA.tsx` for an API route when a backend exists.

## Accessibility & performance

- Full `prefers-reduced-motion` support (WebGL, marquee, smooth scroll, reveals)
- Semantic headings, keyboard-accessible tabs/accordion, focus-visible styles
- WebGL is dynamically imported, desktop-only, with a static SVG fallback

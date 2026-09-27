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

## Voice Agent demo

The `/voice-agent` page embeds a live browser demo powered by
[ElevenLabs Conversational AI](https://elevenlabs.io/docs/agents-platform/libraries/javaScript)
via `@elevenlabs/client`.

1. Copy `.env.example` to `.env.local`.
2. Set `ELEVENLABS_API_KEY` and `ELEVENLABS_AGENT_ID` from your ElevenLabs agent.
3. Restart `npm run dev`.

Without both variables, the UI shows **Demo currently unavailable** and never
simulates a connection. Signed URLs are created only on the server
(`POST /api/voice-agent/session`). AudioWorklets are self-hosted under
`public/vendor/elevenlabs/` for CSP compliance.

`Permissions-Policy` allows `microphone=(self)` so the demo can request mic
access after the user clicks Start Conversation.

## Accessibility & performance

- Full `prefers-reduced-motion` support (WebGL, marquee, smooth scroll, reveals)
- Semantic headings, keyboard-accessible tabs/accordion, focus-visible styles
- WebGL is dynamically imported, desktop-only, with a static SVG fallback

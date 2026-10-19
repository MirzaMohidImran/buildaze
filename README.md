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
components/motion/    Motion primitives (Reveal, RevealText, cursor, smooth scroll)
components/ui/        Reusable UI (buttons, labels, logo)
components/webgl/     Three.js hero scene
components/work/      Case-study visual canvases
lib/data/             All site content, typed — edit copy here, not in components
```

## Content

All copy, case studies, team, testimonials and FAQs live in `lib/data/` and are
sourced from the existing Buildaze site. No invented clients, metrics or
testimonials.

## Contact / project enquiry

One shared form (`ContactInquiryForm`) is used on `/contact` and embedded via
`ContactInvite` on other pages. Submissions go to
[Web3Forms](https://web3forms.com) (`POST https://api.web3forms.com/submit`)
from the browser. Subject format: `Buildaze Inquiry — [Service]`.

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` from your Web3Forms dashboard.
3. Restart `npm run dev`.

When the access key is missing, the form shows an honest unconfigured error.
Mailto drafts are a human fallback only — never counted as received enquiries.
Success appears only after Web3Forms accepts the message.

Safe schema/mock check (no real email): `npm run verify:contact`

See `docs/contact-forms-coverage.md` for the full form inventory.

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

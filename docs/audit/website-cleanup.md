# Website cleanup audit

Last updated: 2026-10-12

## Baseline

| Check | Result |
| --- | --- |
| Framework | Next.js 15 App Router |
| Scripts | `dev`, `build`, `start`, `typecheck`, `verify:contact` |
| Lint | Not configured (no ESLint script/config) |
| Typecheck | Pass |
| Build | Pass (43 routes) |
| `verify:contact` | Pass — destination forced to `team@buildaze.com`, mock transport |

Unrelated uncommitted work (branding, About/Contact, services, themes) was preserved.

## Route checklist (HTTP)

| Route | Status |
| --- | --- |
| `/` | 200 |
| `/services` | 200 |
| `/services/development` (+ saas/web/ecommerce) | 200 |
| `/shopify-growth-agency` | 200 |
| `/services/ai-development` + leaves (e.g. ai-chatbots) | 200 |
| `/services/design` + leaves | 200 (SSG) |
| `/services/digital-marketing` + leaves | 200 (SSG) |
| `/about`, `/contact` | 200 |
| `/privacy-policy`, `/terms-of-use`, `/cookie-policy` | 200 |
| `/work` + case studies | 200 |
| `/voice-agent` | 200 |
| Unknown route | **404** |
| APIs: `/api/contact`, voice-agent session/status | Present |

## Issues fixed

### Unused abandoned homepage sections

- **Evidence:** No imports of `Outcomes`, `SecurityOwnership`, `Comparison`, `TeamShowcase`, `Testimonials`, `AiNative`, `Manifesto`, `TechEcosystem`, `Results`, `Industries`, `Parallax`, `Counter`.
- **Change:** Deleted those components.
- **Verification:** `tsc` + `next build` pass.

### Duplicate unused enquiry forms

- **Evidence:** `ContactCTA` and `ServiceShopifyContact` not mounted; all journeys use `ContactInvite` → `/contact`.
- **Change:** Deleted both (~52KB); updated `docs/contact-forms-coverage.md`.
- **Verification:** Mock form submit succeeded in browser; `verify:contact` pass.

### Unused pricing engagements + misplaced FAQs

- **Evidence:** `engagements` unused; only `faqs` imported.
- **Change:** Moved FAQs to `lib/data/faqs.ts`; deleted `pricing.ts`; removed unused `site.stats` / `heroProof`.
- **Verification:** Typecheck/build pass.

### Duplicate / unused brand assets

- **Evidence:** Space-named PNGs duplicated hyphenated files; unused client logos / Plus-Select badges; orphan `public/favicon.svg`.
- **Change:** Removed unused files. Kept `shopify-partners.png` and `platforms/*`.
- **Verification:** Grep for `/brands/` paths; build pass.

### Contact `?service=development` preselection empty

- **Evidence:** CTAs pass `service=development` but resolver returned `""`.
- **Change:** Added `Development` chip + mapping; regression asserts in `verify:contact`.
- **Verification:** Browser showed Development chip **pressed**; script asserts pass.

### Contact query sync on client navigation

- **Change:** `useSearchParams` + Suspense around the form.
- **Verification:** Build pass.

### Homepage H1 accessible name

- **Evidence:** `textContent` was `…growyour business.` across block lines.
- **Change:** Trailing space on first headline line.
- **Verification:** Code fix; rebuild pass.

### 404 metadata

- **Change:** `title` + `robots: noindex` on `app/not-found.tsx`.
- **Verification:** Build pass; unknown URL returns HTTP 404.

## Browser journeys checked (localhost:3001 production)

- Homepage load + desktop nav present
- `/contact?service=development` preselection + mock submit → success (“Send another inquiry”)
- 404 page with recovery links + shared chrome
- `/voice-agent` unavailable demo state + FAQ accordion + mobile menu open/close
- Batch fetch of hub/service/work/policy routes → all 200; unknown → 404

## Duplication noted (kept)

- Service-specific `ContactInvite` copy variants (intentional)
- Repeated FAQ accordion markup across pages (left as-is)
- Legacy `home-surface-*` CSS aliases beside `surface-*`

## External / unresolved

| Item | Why |
| --- | --- |
| Real Resend inbox delivery | Needs live API keys; mock verifies handler only |
| Voice Agent live session | ElevenLabs not configured locally → unavailable UI (expected) |
| ESLint | Not configured in package |
| Exhaustive visual QA at all breakpoints | Spot-checked 390 / 1440; not a full design QA pass |
| Third-party social/Clutch destinations | External |

## Session status

- [x] Baseline checks
- [x] Unused code/asset cleanup
- [x] Contact preselection + form query sync
- [x] Homepage H1 + 404 metadata
- [x] Docs updates
- [x] Browser journey spot-check
- [x] Final typecheck + build

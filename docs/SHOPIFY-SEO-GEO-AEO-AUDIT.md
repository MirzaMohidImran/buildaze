# Shopify SEO / GEO / AEO Audit — Buildaze

**Primary URL:** `https://www.buildaze.com/shopify-growth-agency`  
**Audit date:** 2026-08-11  
**Framework:** Next.js 15.5 (App Router) + React 19 + TypeScript + Tailwind 4 + Framer Motion + R3F/Three

---

## Current state (before changes)

| Area | Finding |
|------|---------|
| Shopify page URL | Lived at `/services/shopify-growth-development-agency` |
| Preferred canonical | `/shopify-growth-agency` (not previously live) |
| Metadata | Present but claimed “Shopify Registered Partner” without verifiable evidence in-repo |
| Trust stats | Included “100+ Shopify projects” / “6+ Years” not listed in verified `site.ts` stats |
| Reviews | Extra Shopify reviews (Amelia Grant, Jonas Meier, Priya Shah, Chris Ortega) not present in homepage testimonials source |
| Case study links | Performance case linked incorrectly to Catalog Intelligence Engine |
| Catalog case meta | Headline/summary had been overwritten with Shopify agency copy |
| Structured data | Root layout emitted Organization + every Service + homepage FAQPage on **all** pages (duplicate/noise) |
| Service pages | Additional disconnected Service + Breadcrumb JSON-LD |
| FAQ / capabilities | Accordion/tab content unmounted when closed → weaker crawlability |
| robots.txt | Allowed `*`; no explicit OAI-SearchBot rule |
| Sitemap | Used `new Date()` on every generation |
| OG image | No Shopify-specific social image |
| Analytics | `data-analytics` attributes existed; no GA4/GTM bridge |
| Redirects | None for Shopify URL consolidation |

---

## Issues found (priority)

1. **URL cannibalization risk** — old `/services/shopify-growth-development-agency` vs new canonical.
2. **Unverified partnership / metric / review claims** — SEO liability and trust risk.
3. **Duplicate Organization/Service schema** across layout + pages.
4. **Weak first-party Shopify case study architecture**.
5. **Interactive sections hiding answers from HTML**.
6. **Ecommerce ↔ Shopify relationship not explicitly linked**.

---

## Changes implemented

### Canonical & routing
- Canonical public page: `/shopify-growth-agency`
- Permanent redirects from:
  - `/services/shopify-growth-development-agency`
  - `/services/shopify-growth-agency`
  - `/shopify-growth-development-agency`
  - `/services/shopify`
- Service model supports `path` + `redirectsFrom`
- Internal links (nav, footer, hub, homepage services, case meta, related) use `getServicePath()`

### Metadata
- Title: `Shopify Development & Growth Agency | Buildaze`
- Description covers development, redesign, CRO, performance, migrations, Plus, support
- Self-referencing canonical, OG, Twitter, Shopify-specific OG image
- `robots: index, follow`

### Entity / AEO content
- Visible entity label + entity-definition paragraph in hero (server-rendered, not hidden)
- Answer-first capability / FAQ / audience copy refined
- Headings aligned to commercial intents without keyword stuffing

### Structured data
- Sitewide: single Organization + WebSite (`@id` stable)
- Shopify page graph: WebPage + Service + BreadcrumbList linked to Organization
- Removed global FAQPage + per-service duplicates from root layout

### Proof hygiene
- Removed unverified “Registered Partner” claims
- Softened unverified volume/year stats
- Removed unverified supporting reviews; kept David Kim / Northway from existing testimonials data
- Added genuine Shopify performance case study using **only** verified `28 → 91` metric
- Fixed Catalog Intelligence case study metadata

### Technical SEO
- robots: explicit Googlebot / Bingbot / OAI-SearchBot allow + sitemap + host
- GPTBot training access left unchanged (documented business decision)
- Sitemap uses stable `lastModified` dates (not deploy-time stamps)
- FAQ + capability content remains in HTML when collapsed
- Analytics bridge maps `data-analytics` → `gtag` / `dataLayer` when present

### Internal linking
- Ecommerce page → Shopify Growth Agency
- Shopify hero → Ecommerce Development
- Footer / nav / hubs updated to canonical path
- Case study related services include Shopify

---

## Remaining manual actions

See `SEO-GEO-AEO-AUTHORITY-PLAN.md` and `SHOPIFY-TOPICAL-MAP.md`.

Critical evidence still needed from the business:
- Confirm or permanently withhold Shopify Partner status
- Client permission + screenshots for case studies / reviews
- Third-party review URLs (Clutch, Upwork, LinkedIn)
- GA4 / GTM measurement ID
- IndexNow key
- Brand logos for trust marquee
- Additional verified Shopify outcomes beyond `28 → 91`

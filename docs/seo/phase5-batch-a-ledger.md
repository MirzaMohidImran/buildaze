# Phase 5 — Batch A ledger

**Date:** 28 October 2026  
**Gate:** Map and metadata approved; Phase 5 continued per owner instruction.

## Completed pages (publication-ready in repo)

| URL | Status | Notes |
|-----|--------|-------|
| `/shopify-growth-agency/conversion-rate-optimization` | **Created** | Full leaf copy + metadata from Phase 4 |
| `/shopify-growth-agency/checkout-optimization` | **Created** | Plus plan limits + recovery eligibility stated |
| `/shopify-growth-agency/seo` | **Created** | Distinct from `/services/digital-marketing/seo` |
| `/services/digital-marketing/email-sms-marketing` | **Created** | Consent / anonymous cart limits stated |
| `/services/digital-marketing/content-strategy` | **Created** | No invented metrics or ranking promises |
| `/shopify-growth-agency` | **Expanded** | Journey routing + specialist capability cards |
| `/shopify-growth-agency/store-design-development` | **Metadata + H1 refresh** | Differentiated from hub |
| `/shopify-growth-agency/performance` | **Metadata + routing refresh** | Links CRO/Checkout; homepage capability list includes Performance via shopify category |
| `/services/digital-marketing` | **Expanded** | Email/SMS + Content Strategy cards + meta |
| `/services/digital-marketing/seo` | **Boundary refresh** | Routes Shopify catalogue SEO to Shopify SEO |

**Wiring:** Leaves registered in `shopifyLeaves` / `digitalMarketingLeaves` → sitemap via `app/sitemap.ts`; nav via `relatedServiceIds` on category hubs; hub hero specialist links updated for marketing.

## Approved decisions used

- Phase 3–4 map/metadata approved for Batch A P1 NEW pages.
- Europe pilot remains IE/NL English (no country clones in this batch).
- No fabricated case metrics; proof stays owner-gated.

## Pending evidence

- Case-study metric packs (`evidence-needed.md`)
- Live deploy + GSC sitemap submit
- Form delivery QA
- AI discovery test runs
- Capability confirmation for P2 NEW pages (UX audit, AI consulting, AI search, Markets, design systems, evaluation, digital PR)

## Next concrete batch (Phase 5 Batch B)

Suggested order after deploy review:

1. Expand `/work` case meta (softened until metrics approved) + og:images  
2. AI hub + Custom AI Solutions RAG visibility  
3. Design portfolio proof pages (no NEW UX audit until confirmed)  
4. Analytics page Shopify funnel QA section depth  
5. P2 NEW pages only after capability confirmation  

## Files touched (implementation)

- `lib/data/shopify-priority-leaves.ts` (new)
- `lib/data/digital-marketing-priority-leaves.ts` (new)
- `lib/data/shopify-leaves.ts`, `shopify-page.ts`, `services.ts`
- `lib/data/digital-marketing-leaves.ts`, `digital-marketing-page.ts`, `category-overviews.ts`
- `components/services/ServiceHero.tsx`

# SEO / GEO / AEO Authority Plan (Off-site + Post-deploy)

This checklist covers work that **cannot** be completed from the codebase alone.  
It is an execution plan — not a ranking guarantee.

---

## 1. Google Search Console

- [ ] Verify ownership of `https://www.buildaze.com`
- [ ] Confirm preferred hostname (www vs non-www) matches `site.url`
- [ ] Submit `/sitemap.xml`
- [ ] URL Inspection → `/shopify-growth-agency` → Request indexing
- [ ] Inspect rendered HTML (title, canonical, H1, JSON-LD)
- [ ] Monitor: impressions, clicks, CTR, queries, CWV, indexing
- [ ] Watch for soft-404 / duplicate / redirect issues on old Shopify URL

## 2. Bing Webmaster Tools + Copilot

- [ ] Verify site in Bing Webmaster Tools
- [ ] Submit sitemap
- [ ] Confirm Bingbot crawl of `/shopify-growth-agency`
- [ ] Review URL inspection / crawl errors

### IndexNow

- [ ] Create IndexNow API key
- [ ] Host key file at `https://www.buildaze.com/<key>.txt`
- [ ] Store key in env var e.g. `INDEXNOW_KEY` (do **not** invent a key in code)
- [ ] Notify IndexNow on publish/update of Shopify page + case studies

## 3. LinkedIn entity consistency

- [ ] Company page name: **Buildaze** (single organization entity)
- [ ] About text aligns with site description + Shopify specialist positioning
- [ ] Website destination includes `/shopify-growth-agency` where relevant
- [ ] Shopify Showcase Page (if used) links to the same canonical URL
- [ ] Consistent logo, service naming, no competing “Buildaze Shopify Agency” org identity

## 4. Clutch

- [ ] Claim/optimize existing Buildaze profile
- [ ] Add real Shopify projects only
- [ ] Request legitimate client reviews after project completion
- [ ] Link profile in `sameAs` once URL is verified

## 5. Shopify ecosystem profile

- [ ] If Buildaze is a registered Shopify Partner, optimize the **real** Partner profile
- [ ] If not verified, do **not** claim Partner / Plus Partner / Expert status on-site or off-site
- [ ] Align public service categories with live site services

## 6. Founder / team authority

- [ ] Strengthen Mohid Imran (and other ecommerce contributors) LinkedIn headlines/about for:
  - Shopify development
  - Liquid / theme development
  - CRO
  - Performance
  - Migrations
- [ ] Publish expert posts with first-party screenshots / lessons
- [ ] Link team profiles from About when URLs are stable

## 7. Client review workflow

After each completed Shopify project:

1. Ask for permission to name brand + role  
2. Request review on Clutch / Upwork / LinkedIn  
3. Capture screenshot + public URL  
4. Add to site only with source link  
5. Never manufacture ratings or anonymous fake personas  

## 8. Ecommerce industry mentions

Target legitimate placements (evidence-led outreach):

- Shopify-focused publications
- Ecommerce newsletters / podcasts
- Agency directories (editorial, not spam)
- Partner / integration directories
- Case-study collaborations with clients

Provide: portfolio, case studies, reviews, specialization, real outcomes.

## 9. “Top Shopify Agency” roundups

- [ ] Build a shortlist of editorial roundup pages
- [ ] Pitch with evidence — never pay for fabricated placements
- [ ] Do **not** self-label Buildaze as “#1” / “best” on owned properties

## 10. Digital PR / original data

Only publish datasets Buildaze actually has:

- Shopify performance audit benchmarks
- App-stack performance findings
- Mobile PDP friction patterns
- Migration SEO mistake patterns

## 11. AI visibility monitoring

Monthly:

- [ ] Query ChatGPT Search / Copilot / Perplexity for target prompts
- [ ] Record whether Buildaze appears, is cited, or is omitted
- [ ] Note evidence gaps (reviews, case depth, third-party mentions)
- [ ] Fix with proof — not adjectives

## 12. Measurement (on-site)

Once GA4/GTM exists:

- [ ] Wire measurement ID (do not invent)
- [ ] Confirm events from `data-analytics` bridge:
  - `shopify_strategy_call` / contact submit / case study clicks / service clicks
- [ ] Never send form field contents to analytics

## 13. Brand corroboration

Connect:

- Website ↔ LinkedIn ↔ Clutch ↔ Partner profile ↔ team profiles ↔ permitted client attributions

Encourage “Shopify development by Buildaze” only when clients approve.

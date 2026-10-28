# Buildaze SEO — evidence and owner verification

**Date:** 12 October 2026 · **Still active** (evidence gates unchanged as of 28 October 2026 research)  
**Related:** [Buildaze SEO Audit 2026-10-12](../Buildaze-SEO-Audit-2026-10-12.md) · [implementation-tracker.md](./implementation-tracker.md) · [research-ledger-2026-10.md](./research-ledger-2026-10.md)

**Important:** Items in this document are **not completed**. They were moved out of public copy where the audit found editorial/owner-instruction residue, or they depend on accounts and facts only the owner can supply. **Do not mark these done in the tracker until proof is attached.**

---

## 1. Case study metrics and project claims

All numeric outcomes on `/work/*` remain **website claims** until substantiated. **Do not delete metrics** without owner decision; default action is supply evidence or revise copy after approval.

| Case study URL | Public claim (audit baseline) | Evidence required | Status |
|----------------|------------------------------|-------------------|--------|
| `/work/support-copilot` | First-response time cut **38%** | Client/anonymization approval; baseline metric; measurement window; data source; before/after dates; optional interface screenshots | **NOT completed** |
| `/work/underwriting-risk-copilot` | Manual review time cut **42%** | Same as above; human-in-the-loop limits; approved fintech context | **NOT completed** |
| `/work/clinical-note-summarizer` | Front-desk calls down **28%**; PHI-safe positioning | Same as above; **HIPAA/security wording** only with legal/owner approval; align narrative with Clinic Front Desk product (display title updated in repo; metrics not validated) | **NOT completed** |
| `/work/catalog-intelligence-engine` | Add-to-cart up **12%** | Define relative vs absolute lift; baseline; timeframe; attribution limits; catalog implementation detail | **NOT completed** |
| `/work/shopify-performance-optimization` | Lighthouse Performance **28 → 91** | Store URL permission; test **date**, **device**, **Lighthouse version**; repeated comparable runs; change log; distinguish lab score vs field CWV vs revenue | **NOT completed** |

**Proof pack template (per project)**

- [ ] Approved client name **or** anonymization rules  
- [ ] Live URL / staging access / screenshots (usage rights)  
- [ ] Written testimonial + publication consent  
- [ ] Metric definition, baseline, window, and tool/source  
- [ ] Author or reviewer sign-off for case study publish  

---

## 2. Testimonials and third-party reviews

| Item | Requirement | Status |
|------|-------------|--------|
| Homepage testimonials | Original statements, publication consent, optional link to Clutch/Google/LinkedIn review | **NOT completed** |
| Clutch profile | Reconcile “Not yet reviewed” vs site quotes; update service focus when accurate | **NOT completed** |
| Review stars / counts on site | **Do not add** fabricated ratings or self-serving schema | **NOT completed** |
| Genuine review outreach | Request reviews from completed clients (process owner) | **NOT completed** |

---

## 3. Entity, founding, and profile reconciliation

Clutch and other directories may **disagree** with the live site (retainers, positioning, Lahore, founding year, headcount). **Verify with owner** before changing public copy or schema.

| Fact area | Sources to reconcile | Status |
|-----------|---------------------|--------|
| Company description & service lines | Website, Clutch, LinkedIn, The Manifest | **NOT completed** |
| Retainers / ongoing support | Clutch “no retainers” vs site + `/shopify-growth-agency/ongoing-support` | **NOT completed** |
| Founding year, team size, location | Clutch vs `/about` | **NOT completed** |
| Logo / Organization schema | Confirm `/Logo/favicon.svg` is intended brand mark | **NOT completed** |
| Team bios | Names, roles, credentials, profile URLs | **NOT completed** |
| Certifications / badges | Only if real and eligible | **NOT completed** |

---

## 4. Healthcare and compliance language

| Item | Requirement | Status |
|------|-------------|--------|
| Clinic case study | No HIPAA/compliance authority from mockups alone | **NOT completed** |
| PHI-safe claims | Legal/owner-approved wording only | **NOT completed** |
| Product naming | Display title aligned in repo; slug unchanged pending GSC/redirect review | Partial repo only; compliance **NOT completed** |

---

## 5. Search Console (GSC)

Read-only access is sufficient. **Never share passwords** in tickets.

| Export / check | Purpose | Status |
|----------------|---------|--------|
| Performance export (queries, pages, countries, devices, up to 16 months) | Baseline visibility; validate keyword-page map | **NOT completed** |
| Pages / indexing report | Confirm indexed vs excluded URLs (especially new specialists post-deploy) | **NOT completed** |
| Sitemaps status | Submit updated sitemap after deploy | **NOT completed** |
| URL Inspection samples | Homepage, priority services, new Shopify/development leaves | **NOT completed** |
| Manual Actions / Security | Rule out penalties | **NOT completed** |
| Core Web Vitals report | Field CWV vs lab | **NOT completed** |
| Google-selected canonical vs self-canonical | Parameter/UTM variants | **NOT completed** |

---

## 6. GA4, GTM, and conversion measurement

Audit did **not** prove tracking absent or correct—only that an obvious GTM loader was not in initial HTML.

| Item | Requirement | Status |
|------|-------------|--------|
| GA4 property / stream | Confirm production hostname | **NOT completed** |
| Consent mode / banner behavior | Match cookie policy text | **NOT completed** |
| Event spec | form_start, form_submit_success, email_click, service selection, voice_demo_* (adapt to existing model) | **NOT completed** |
| Lead definition | Successful enquiry ≠ mailto click ≠ failed submit | **NOT completed** |
| CRM match | Qualified leads/opportunities/revenue vs organic | **NOT completed** |
| Self-referrals / internal traffic filters | Production QA | **NOT completed** |

---

## 7. Performance (PSI / Lighthouse / CrUX)

| Item | Requirement | Status |
|------|-------------|--------|
| PageSpeed Insights / Lighthouse | Audit blocked (**HTTP 429**); re-run when quota allows | **NOT completed** / **blocked** |
| Template coverage | Homepage, Shopify hub, one design/AI/marketing child, Web/SaaS specialist, one case study, contact — mobile + desktop | **NOT completed** |
| CrUX field data | LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75 where available | **NOT completed** |
| Buildaze site vs client Lighthouse | Do **not** reuse Shopify case study score as site score | N/A |

---

## 8. Rankings, keywords, and backlinks

| Item | Requirement | Status |
|------|-------------|--------|
| Country/device rank tracking | Branded + nonbranded sets per priority market | **NOT completed** |
| Keyword volume/difficulty | Permitted tool export (Semrush needed API units at audit time) | **NOT completed** |
| Referring domains / anchors / toxic review | Full link graph before disavow decisions | **NOT completed** |
| Competitor SERP snapshots | 5–10 live URLs per service keyword/country before major rewrites | **NOT completed** |
| AI citation sampling | ChatGPT/Gemini/Perplexity prompt log (date, prompt, sources)—optional baseline | **NOT completed** |

**Do not invent:** DR/DA, traffic estimates, keyword volumes, or position numbers in internal or public docs.

---

## 9. Google Business Profile (GBP) and local SEO

| Item | Requirement | Status |
|------|-------------|--------|
| Eligibility | Confirm in-person customer contact model; online-only may be **ineligible** | **NOT completed** |
| Listing ownership | Verify if a profile exists; no fake offices or virtual addresses | **NOT completed** |
| NAP consistency | Only approved name/address/phone across listings | **NOT completed** |
| Lahore / Pakistan page | Create **only** with real local delivery context—not keyword city spam | **NOT completed** |
| LocalBusiness schema | Only for a qualifying real location; else Organization | **NOT completed** |
| Genuine Maps reviews | Request from eligible clients | **NOT completed** |

---

## 10. Voice agent demo

| Item | Requirement | Status |
|------|-------------|--------|
| Live demo credentials | Connect/test in private environment | **NOT completed** |
| Public UX | Walkthrough CTA acceptable until demo works | Repo description/OG updated; demo **NOT completed** |
| Accessible recording | Demo video + transcript + tested boundaries | **NOT completed** |

---

## 11. Contact form and lead delivery

| Item | Requirement | Status |
|------|-------------|--------|
| Production delivery | End-to-end submit → inbox/CRM (environment/account dependent) | **NOT completed** |
| Validation UX | Error/success states | Mock path in repo only |
| Budget bands on form | Match real project ranges | **NOT completed** |
| Approved contact details | Phone/address if published | **NOT completed** |

---

## 12. Legal, privacy, and cookies

| Item | Requirement | Status |
|------|-------------|--------|
| Privacy policy processors/retention | Owner/legal review vs actual practices | **NOT completed** |
| Cookie policy | List cookies/analytics actually fired post-consent | **NOT completed** |
| Terms | Match governing agreements | **NOT completed** |
| Legal H1s | Present in repo; live privacy verified unchanged | H1 **verified**; legal accuracy still **NOT completed** |

---

## 13. Marketing and design deliverable evidence

Channel and creative proof for service pages (no fabricated campaigns):

| Area | Pages | Status |
|------|-------|--------|
| SEO audit → results example | `/services/digital-marketing/seo` | **NOT completed** |
| Meta/Google campaign examples | Meta Ads, Google Ads leaves | **NOT completed** |
| Organic social samples | Social media leaf | **NOT completed** |
| GA4/GTM QA write-up | Analytics leaf | **NOT completed** |
| Ecommerce growth metric story | Ecommerce growth leaf | **NOT completed** |
| Design portfolio artifacts | Design hub + leaves | **NOT completed** |
| Shopify specialist proof | Six new Shopify leaves | **NOT completed** |
| Development specialist proof | Three new development leaves | **NOT completed** |

---

## 14. External actions checklist (owner / marketing)

- [ ] Grant read-only **GSC** and **GA4** access for baseline export  
- [ ] Approve **priority countries** and top three revenue services  
- [ ] Complete **proof pack** for five case studies (section 1)  
- [ ] Decide **Clutch** and directory copy updates after fact check  
- [ ] Confirm **retainer/support** commercial model for public wording  
- [ ] Resolve **GBP eligibility** before any local pack investment  
- [ ] Request **client reviews** on permitted platforms  
- [ ] Authorize **PSI/Lighthouse** re-run or provide CrUX access  
- [ ] Run **production form** test and confirm notification routing  
- [ ] Connect or document **voice demo** path for sales  
- [ ] Legal review of **privacy/cookie** text vs live tracking  
- [ ] After deploy: submit **sitemap**, URL Inspection on new specialists, monitor indexing  

---

## 15. What repo session already addressed (not evidence)

These reduce public “instruction leakage” but **do not** replace sections above:

- Editorial residue removed/replaced in design, AI, development, Shopify, digital-marketing data  
- Default OG images wired (unfurl testing still post-deploy)  
- Metadata/H1 updates on SaaS, Web, Ecommerce, services hub title, voice description  
- Clinic case study display naming; URL preserved  
- CollectionPage/ItemList on `/services` and `/work`  
- Nine specialist URLs + internal linking  

**Until this evidence doc is cleared item-by-item, keep affected pages in `needs evidence` status in the implementation tracker.**

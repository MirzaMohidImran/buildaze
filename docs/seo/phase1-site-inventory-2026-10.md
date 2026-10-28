# Phase 1 — Current site and service validation

**Research date checked:** 28 October 2026  
**Brief:** Buildaze Services and International Organic Growth Plan (Word report dated 26 October 2026)  
**Live host:** https://www.buildaze.com  
**Coverage:** All 46 URLs in the live sitemap were requested successfully (HTTP 200). Metadata extracted from rendered HTML via automated crawl. Forms, inbox delivery, private analytics, GSC indexing, and AI-platform answers were **not** tested in this phase.

**Tool limitations**

- Exact Google organic positions, keyword volume/difficulty, DA/DR, and AI recommendation frequency: **unavailable** (not measured; not invented).
- PageSpeed / CrUX field data: not re-run this session.
- Case-study metrics remain **owner-gated** per [`evidence-needed.md`](./evidence-needed.md).
- Capability to deliver NEW report pages is **unconfirmed** until owner answers; packaging status below is website packaging only.

---

## 1. URL inventory summary

| Metric | Value |
|--------|-------|
| Sitemap URLs | 46 |
| HTTP 200 | 46 / 46 |
| `robots` meta | `index, follow` on all crawled pages |
| Self-canonical present | 46 / 46 (matches requested URL) |
| Explicit `og:image` | Present on hubs/services; **missing** on About, Contact, all 5 case studies, Privacy, Terms, Cookie |
| JSON-LD present | Yes on all crawled pages (sitewide Organization/WebSite graph; page-level types vary) |
| Conversion path | Primary CTA → `/contact` or `mailto:team@buildaze.com` across commercial pages |

**Repo vs live drift (28 Oct 2026)**

- Live sitemap matches repo [`app/sitemap.ts`](../../app/sitemap.ts) route set (46 URLs).
- Homepage Shopify capability strip lists **five** items and omits **Performance**, while `/shopify-growth-agency/performance` is live and linked from the Shopify hub / `relatedServiceIds`. Packaging inconsistency: expand homepage/nav examples to include Performance or accept intentional homepage brevity.
- `/voice-agent` is the public path for AI Voice (also registered via `ai-voice` service).

---

## 2. Full URL inventory

HTML entities in titles (`&amp;`) decoded for readability. Title/description character counts are from live HTML title/description strings as returned.

### Agency / navigation

| URL | Status | Index | Title (chars) | Description (chars) | H1 | Page type | Schema / proof | Conversion | Action |
|-----|--------|-------|---------------|---------------------|----|-----------|----------------|------------|--------|
| `/` | 200 | index | Buildaze \| Design, Development & Digital Growth Agency (58) | 155 | Design, build and grow your business. | Agency hub | Org/WebSite; testimonials unlinked to independent reviews; work carousel | Contact / email | **Expand** — problem-led routes; link Performance; verify testimonials |
| `/services` | 200 | index | Digital Agency Services \| Buildaze (34) | 134 | Five categories. Clear scope around your goals. | Services hub | Collection/ItemList pattern in repo | Category links → Contact | **Retain** |
| `/about` | 200 | index | About Buildaze \| The Team Behind the Work (41) | 173 | The team behind Buildaze. | Entity | Team initials; no photos; og:image missing | Contact | **Expand** — bios, identity, og:image |
| `/contact` | 200 | index | Contact Buildaze \| Discuss Your Project (39) | 133 | Let’s discuss your project. | Enquiry | Form present; inbox **not** verified this session; og:image missing | Form / email | **Expand** — delivery QA; og:image |
| `/work` | 200 | index | Work \| SaaS, AI, Web & Ecommerce Case Studies — Buildaze (60) | 129 | Real products. Measured results. | Proof hub | 5 AI/Shopify-heavy cases; no design/marketing cases | Case → Contact | **Expand** — evidence + category coverage |
| `/privacy-policy` | 200 | index | Privacy Policy \| Buildaze (25) | 95 | Privacy Policy | Legal | Trust | — | **Expand** (P2) processors clarity |
| `/terms-of-use` | 200 | index | Website Terms \| Buildaze (24) | 107 | Website Terms | Legal | Trust | — | **Retain** / legal owner review |
| `/cookie-policy` | 200 | index | Cookie Policy \| Buildaze (24) | 89 | Cookie Policy | Legal | Trust | — | **Expand** (P2) vs live analytics behaviour |

### Design

| URL | Status | Title (chars) | Desc (chars) | H1 | Topic | Proof / notes | Action |
|-----|--------|---------------|--------------|----|-------|---------------|--------|
| `/services/design` | 200 | 53 | 147 | Design services for your brand and digital experiences. | Design hub | Thin portfolio vs claim breadth | **Expand** |
| `/services/design/graphic-design` | 200 | 49 | 145 | Graphic design that makes your message clear. | Graphic design | Approved samples still needed | **Expand** |
| `/services/design/illustration` | 200 | 46 | 147 | Custom illustrations with a clear purpose. | Illustration | Gallery gated | **Expand** |
| `/services/design/app-design` | 200 | 43 | 148 | Mobile app design built around your users. | App UI/UX | Distinct from app development | **Retain** / deepen proof |
| `/services/design/ui-ux-design` | 200 | 53 | 151 | UI/UX design that helps people complete their tasks. | UI/UX | Partial UX-audit language only | **Expand**; UX audit = proposed NEW if confirmed |
| `/services/design/branding` | 200 | 56 | 150 | A visual identity your business can use consistently. | Branding | Identity system examples needed | **Expand** |

### Development

| URL | Status | Title (chars) | Desc (chars) | H1 | Topic | Notes | Action |
|-----|--------|---------------|--------------|----|-------|-------|--------|
| `/services/development` | 200 | 55 | 152 | Web, app and software development around your business. | Dev hub | Routes to specialists | **Retain** / expand proof |
| `/services/web-development` | 200 | 42 | 151 | Custom Website & Web Application Development | Web | Overlap risk with web-applications leaf | **Expand** — differentiate |
| `/services/saas-development` | 200 | 36 | 164 | SaaS Development Services for Scalable Products | SaaS | Desc slightly long | **Retain** / proof |
| `/services/ecommerce-development` | 200 | 41 | 146 | Ecommerce Development for Shopify, WooCommerce & Headless Stores | Multi-platform ecom | Must route Shopify-specific intent to Shopify hub | **Expand** — platform proof |
| `/services/development/app-development` | 200 | 42 | 135 | App development built around the tasks users must complete. | Mobile apps | | **Retain** |
| `/services/development/custom-software` | 200 | 47 | 130 | Custom software for the workflows off-the-shelf tools miss. | Custom software | | **Retain** |
| `/services/development/web-applications` | 200 | 54 | 151 | Web applications and dashboards for real operational decisions. | Web apps / dashboards | | **Retain** |

### Artificial intelligence

| URL | Status | Title (chars) | Desc (chars) | H1 | Topic | Notes | Action |
|-----|--------|---------------|--------------|----|-------|-------|--------|
| `/services/ai-development` | 200 | 59 | 156 | AI Development Services Built Around Your Business | AI hub | Strong specialist links | **Expand** — evaluation evidence |
| `/services/ai-development/ai-applications` | 200 | 51 | 155 | AI Application Development for New and Existing Products | AI product features | | **Expand** |
| `/services/ai-development/ai-chatbots` | 200 | 49 | 152 | AI Chatbot Development for Customers and Teams | Chatbots | Grounding/escalation proof needed | **Expand** |
| `/services/ai-development/custom-ai-solutions` | 200 | 43 | 151 | Custom AI Solutions for Your Knowledge and Workflows | RAG / custom AI | RAG Existing but buried (brief) | **Expand** |
| `/services/ai-development/business-automation` | 200 | 51 | 139 | Business Automation That Connects Your Tools and Tasks | Automation | | **Expand** |
| `/voice-agent` | 200 | 44 | 134 | Custom AI Voice Agents for Your Business | Voice AI | Live demo credentials: brief says unavailable | **Expand** — demo or honest walkthrough |

### Digital marketing

| URL | Status | Title (chars) | Desc (chars) | H1 | Topic | Notes | Action |
|-----|--------|---------------|--------------|----|-------|-------|--------|
| `/services/digital-marketing` | 200 | 52 | 146 | Digital Marketing Services for Your Next Stage of Growth | Marketing hub | | **Retain** |
| `/services/digital-marketing/seo` | 200 | 45 | 150 | SEO Services That Connect Search Visibility to Business Goals | SEO (general) | Not Shopify-specific SEO owner | **Expand**; Shopify SEO = proposed NEW |
| `/services/digital-marketing/meta-ads` | 200 | 55 | 151 | Meta Ads Management for Facebook and Instagram | Meta ads | Case proof needed | **Expand** |
| `/services/digital-marketing/google-ads` | 200 | 41 | 150 | Google Ads Management Built Around Your Business Goals | Google Ads | | **Expand** |
| `/services/digital-marketing/social-media-marketing` | 200 | 50 | 151 | Social Media Marketing That Gives Your Brand a Clear Voice | Organic social | Distinct from Meta ads | **Expand** |
| `/services/digital-marketing/web-analytics-data-tracking` | 200 | 55 | 147 | Web Analytics and Data Tracking for Better Decisions | GA4/GTM | Shopify funnel QA = section expand | **Expand** |
| `/services/digital-marketing/ecommerce-growth-marketing` | 200 | 52 | 148 | Ecommerce Growth Marketing Across Acquisition and Conversion | Cross-channel ecom growth | Not store engineering | **Retain** / clarify vs Shopify CRO |

### Shopify

| URL | Status | Title (chars) | Desc (chars) | H1 | Topic | Notes | Action |
|-----|--------|---------------|--------------|----|-------|-------|--------|
| `/shopify-growth-agency` | 200 | 50 | 155 | Shopify design and development for your next stage of growth. | Shopify hub | Situation-led starting points; conversion friction language present but no dedicated CRO URL | **Expand** — journey map + specialist routing |
| `/shopify-growth-agency/store-design-development` | 200 | 49 | 137 | Shopify store design and development for your next stage of growth. | Store design | Headline similar to hub — differentiate | **Expand** |
| `/shopify-growth-agency/migrations` | 200 | 37 | 136 | Shopify migrations planned around data, URLs and launch risk. | Migrations | | **Expand** proof |
| `/shopify-growth-agency/apps-integrations` | 200 | 42 | 137 | Shopify apps and integrations that support how you operate. | Apps | | **Expand** proof |
| `/shopify-growth-agency/headless-b2b` | 200 | 46 | 144 | Shopify headless and B2B when requirements justify it. | Headless / B2B | Plan-aware language present | **Expand** — separate subsections |
| `/shopify-growth-agency/ongoing-support` | 200 | 50 | 148 | Shopify ongoing support with a clear backlog and capacity. | Retainers | | **Expand** |
| `/shopify-growth-agency/performance` | 200 | 43 | 165 | Shopify performance work that targets real bottlenecks. | Speed / CWV | Desc long; homepage under-linked | **Expand** + **link from homepage** |

### Case studies

| URL | Status | Title (chars) | Desc (chars) | Metric claim (public) | Evidence status | Action |
|-----|--------|---------------|--------------|----------------------|-----------------|--------|
| `/work/support-copilot` | 200 | 48 | 110 | −38% first-response | Owner-gated | **Expand** evidence or revise after approval |
| `/work/underwriting-risk-copilot` | 200 | 49 | 106 | −42% manual review | Owner-gated | Same |
| `/work/clinical-note-summarizer` | 200 | 54 | 90 | −28% front-desk calls; PHI-safe language | Owner-gated; slug/title mismatch risk | Same; redirect only after GSC review |
| `/work/catalog-intelligence-engine` | 200 | 51 | 106 | +12% add-to-cart | Owner-gated (relative vs points unclear) | Same |
| `/work/shopify-performance-optimization` | 200 | 56 | 157 | Lighthouse 28→91 | Owner-gated (lab conditions) | Same |

All case-study pages: **og:image missing** on live HTML crawl 28 Oct 2026.

---

## 3. Service classification vs 26 Oct brief

Labels = **website packaging**, not private capability.

### Shopify journey map (live owners)

| Journey stage | Live packaging | Owner URL today | Classification | Recommended treatment |
|---------------|----------------|-----------------|----------------|----------------------|
| Discovery / strategy | Partial on hub | `/shopify-growth-agency` | Partial | Expand hub |
| Collections / search / PDP | Partial in Store Design | `/store-design-development` | Partial | Sections + CRO handoff |
| Cart → checkout progression | Partial / friction language | Hub + Performance adjacent | Partial | **CREATE** Checkout page if capability confirmed |
| Payment-stage failure | Not explicit dedicated | — | Not explicit | Checkout page section |
| Abandoned checkout recovery | Not explicit | — | Not explicit | Checkout + Email/SMS sections |
| Retention / Email-SMS | Not explicit | — | Not explicit | **CREATE** Email/SMS if confirmed |
| Analytics / funnel QA | Partial | `/web-analytics-data-tracking` | Partial | Expand Shopify section |
| Shopify SEO | Partial / general SEO only | `/services/digital-marketing/seo` | Partial | **CREATE** `/shopify-growth-agency/seo` if confirmed |
| Performance | Existing specialist | `/performance` | Existing | Retain; homepage link |
| Accessibility / mobile | Partial | Store Design + CRO | Partial | Sections |
| Builds / theme | Existing | `/store-design-development` | Existing | Retain |
| Migration | Existing | `/migrations` | Existing | Retain |
| Apps / integrations | Existing | `/apps-integrations` | Existing | Retain |
| B2B / headless | Existing | `/headless-b2b` | Existing | Expand subsections |
| Internationalization / Markets | Partial mention only | — | Partial | **CREATE** P2 if confirmed |
| Ongoing support | Existing | `/ongoing-support` | Existing | Retain |
| CRO programme | Partial (friction review) | Hub language only | Partial | **CREATE** CRO if confirmed |
| A/B testing | Partial | — | Partial | Section in CRO only |
| AOV / merchandising | Not explicit | — | Not explicit | CRO + Store Design sections |

**Platform constraint (primary source, checked 28 Oct 2026):** Shopify.dev Checkout UI extensions docs state that checkout UI extensions for the **information, shipping, and payment steps** are available only on **Shopify Plus**. Public checkout copy must remain plan-aware. Source: https://shopify.dev/docs/api/checkout-ui-extensions

### Design

| Offer | Status | Treatment |
|-------|--------|-----------|
| Graphic, Illustration, App Design, UI/UX, Branding specialists | Existing | Retain / expand proof |
| Website/landing conversion design | Partial | Section under UI/UX |
| UX research / usability audit | Partial | **CREATE** `/services/design/ux-audit` if capability confirmed (P1 in brief) |
| Design systems | Not explicit | Proposal backlog P2 |
| Accessibility design review | Partial | UX audit + UI/UX sections |
| Brand positioning/messaging depth | Not explicit | Expand Branding |
| Motion/video/3D | Conditional | Backlog P3 |

### Development

| Offer | Status | Treatment |
|-------|--------|-----------|
| Web, SaaS, Ecommerce, App, Custom software, Web apps | Existing | Retain; differentiate web vs web-apps |
| CMS / WordPress | Partial | Web Development subsections if proven |
| API integrations | Partial | Custom software + Shopify Apps |
| MVP discovery | Partial | SaaS / App sections |
| Maintenance / modernization (non-Shopify) | Partial | Proposal `/maintenance-support` only if broader than Shopify Support |
| QA / a11y / performance engineering | Partial | Concrete deliverables on all dev pages |
| Cloud/DevOps/security as managed certs | Conditional | Scope sections only; no invented certifications |

### AI

| Offer | Status | Treatment |
|-------|--------|-----------|
| Applications, Chatbots, Custom AI, Automation, Voice | Existing | Expand proof |
| RAG / knowledge | Existing but buried | Expand Custom AI Solutions |
| AI feasibility / consulting | Partial | **CREATE** `/ai-consulting` if confirmed |
| Agents / orchestration | Partial | Business Automation sections |
| Evaluation / monitoring | Not explicit | Proposal backlog P2 |
| Governance / data boundaries | Partial | All AI scopes |
| Forecasting / model training | Conditional | Do not create pages |

### Digital marketing

| Offer | Status | Treatment |
|-------|--------|-----------|
| SEO, Meta, Google, Social, Analytics, Ecommerce growth | Existing | Expand proof |
| Content strategy / commercial copy | Partial | **CREATE** `/content-strategy` if confirmed |
| Email/SMS lifecycle | Not explicit | **CREATE** if confirmed |
| AI search / AEO-GEO | Not explicit | Proposal backlog until delivery plan |
| Digital PR | Not explicit | Proposal backlog P2 |
| Local SEO | Not explicit | SEO subsection only; no fake offices |
| Shopping feeds | Partial | SEO / Apps / Google Ads sections |

---

## 4. Proposed NEW URLs (from brief) — packaging status

These are **not** live. Publish only after distinct intent + delivery readiness + evidence.

| Order | Proposed URL | Seed intent | Packaging today | Publish gate |
|-------|--------------|-------------|-----------------|--------------|
| 1 | `/shopify-growth-agency/conversion-rate-optimization` | Shopify CRO | Partial on hub | Owner capability + proof |
| 2 | `/shopify-growth-agency/checkout-optimization` | Checkout / cart-to-checkout | Not explicit | Same + Plus constraints |
| 3 | `/services/digital-marketing/email-sms-marketing` | Lifecycle Email/SMS | Not explicit | Same + consent rules |
| 4 | `/shopify-growth-agency/seo` | Shopify SEO | Partial via general SEO | Same |
| 5 | `/services/digital-marketing/content-strategy` | Content strategy | Partial | Same |
| 6 | `/services/design/ux-audit` | UX audit | Partial | Capability |
| 7 | `/services/ai-development/ai-consulting` | AI consulting | Partial | Capability |
| 8 | `/services/digital-marketing/ai-search-optimization` | AEO/GEO | Not explicit | Delivery plan |
| 9 | `/shopify-growth-agency/internationalization` | Markets | Partial | P2 |
| 10 | `/services/design/design-systems` | Design systems | Not explicit | P2 |
| 11 | `/services/ai-development/evaluation-monitoring` | AI eval | Not explicit | P2 |
| 12 | `/services/digital-marketing/digital-pr` | Digital PR | Not explicit | Owner |

Until capability confirmation: **proposal backlog** — Phase 4 metadata for these rows is labelled proposed / not approved for publish.

---

## 5. Editorial / routing / evidence flags (pre-scaling)

1. **Homepage Shopify strip** omits Performance despite live specialist URL.
2. **Hub vs Store Design** H1 similarity risks internal cannibalisation.
3. **Web Development vs Web Applications** need sharper job-to-be-done openings.
4. **Ecommerce Development** must not compete with Shopify hub for Shopify-specific queries.
5. **General SEO vs proposed Shopify SEO** — one commercial owner each once Shopify SEO exists.
6. **Case-study metrics** and PHI/HIPAA-adjacent wording: not independently verified; do not scale claims.
7. **Testimonials** on homepage lack independent review links (Clutch reconciliation still open).
8. **Voice agent** demo: do not imply production telephony from browser demo alone.
9. **og:image gaps** on About, Contact, Work case studies, legal pages.
10. Brief note on Design hub historically claiming nonexistent App Development URL — revalidate internal links after any map change (live Design hub was 200; specific broken claim not re-asserted in this crawl).

---

## 6. Phase 1 verdict

- **Retain** the 46 live URLs; no destructive redirects recommended without GSC impression data.
- **Expand** hubs and specialists with proof, differentiation, and journey routing — especially Shopify hub, AI hub, Design portfolio, Analytics (Shopify funnel), and Performance homepage linking.
- **Create** (only if owner confirms delivery): five P1 commercial pages listed above; keep 6–12 in staged backlog.
- **Merge:** none required now; avoid synonym pages and country clones.
- Website readiness remains an **analyst packaging assessment**; the brief’s 67/100 score is retained as historical context, not a Google or competence score.

**Next:** Phase 2 competitor and market evidence → [`phase2-competitors-markets-2026-10.md`](./phase2-competitors-markets-2026-10.md)

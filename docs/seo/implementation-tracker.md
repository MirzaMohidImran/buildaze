# Buildaze SEO implementation tracker

> **Research decisions (28 October 2026):** see [`research-ledger-2026-10.md`](./research-ledger-2026-10.md) and Phases 1–4. This tracker remains the Oct 12 **repo change** history.

**Audit baseline:** [Buildaze SEO Audit 2026-10-12](../Buildaze-SEO-Audit-2026-10-12.md)  
**Tracker date:** 12 October 2026 (repo implementation session)  
**Scope:** 37 sitemap URLs from audit + 9 new specialist routes added in session  

**Status legend**

| Status | Meaning |
|--------|---------|
| `implemented` | Applicable repo changes from the audit were completed in this session (no deploy claimed). |
| `verified unchanged` | Audit gap already addressed in repo/live before or without further edit this session. |
| `needs evidence` | Owner-approved facts, metrics, delivery tests, or external account data still required. |
| `blocked` | External/tool limit prevents validation (not a content pass). |

**Session-wide repo changes (cross-page)**

- Default OG raster (`public/og/default-og.png`, `public/og/voice-agent-og.png`) wired via layout, homepage, services/work hubs, and service-leaf metadata helpers.
- Editorial / owner-instruction residue removed or replaced in design, AI, development, Shopify, and digital-marketing data sources.
- `CollectionPage` + `ItemList` JSON-LD added on `/services` and `/work`.
- Internal links: hub `detailHref`, nav `relatedServiceIds`, case-study `relatedServiceIds` updated for new specialists.
- **Not completed (by design):** GSC/GA4 exports, rank/backlink/volume data, case-study metric substantiation, PSI/Lighthouse (API 429), GBP verification, production form delivery, live voice demo credentials.

**Site-wide validation (12 Oct 2026)**

| Check | Result |
|-------|--------|
| PageSpeed / Lighthouse lab run | `blocked` — PageSpeed API HTTP 429 during audit; not re-run this session |
| GSC / GA4 / rankings / backlinks | `needs evidence` — no authenticated exports |
| Deploy to production | Not performed or verified in this session |

---

## Audited URLs (01–37)

### 01. `/` — Homepage

| Field | Value |
|-------|--------|
| **Purpose** | Primary brand and agency positioning; routes to service hubs. |
| **Candidate intent** | Digital design and development agency |
| **Baseline title** | Buildaze \| Design, Development & Digital Growth Agency |
| **Baseline description** | Buildaze brings design, development, AI, digital marketing and Shopify services together to help businesses launch, improve and grow. Discuss your project. |
| **Baseline H1** | Design, build and grow your business. |
| **Canonical** | https://www.buildaze.com |
| **Findings** | Strong positioning; testimonials lack independent review links; 35/37 pages lacked `og:image` at audit; proof depth for five service lines. |
| **Proposed action** | Strengthen proof links to priority services; verify homepage testimonials and consent; default social preview. |
| **Status** | `needs evidence` |
| **Validation result** | Default OG wired in repo for homepage metadata. Testimonial verification and independent review links not done. |

### 02. `/services` — Services hub

| Field | Value |
|-------|--------|
| **Purpose** | Navigational hub for five service categories. |
| **Candidate intent** | Buildaze services / digital agency services |
| **Baseline title** | Services \| Design, Development, AI, Marketing & Shopify — Buildaze |
| **Baseline description** | Buildaze services: design, development, artificial intelligence, digital marketing and Shopify — clear scope and practical next steps. |
| **Baseline H1** | Five categories. Clear scope around your goals. |
| **Canonical** | https://www.buildaze.com/services |
| **Findings** | Long title (>60 chars); hub not a substitute for child intent; audit suggested `CollectionPage`/`ItemList`. |
| **Proposed action** | Shorten title if display testing supports; add CollectionPage/ItemList; retain permanent category links. |
| **Status** | `implemented` |
| **Validation result** | Title shortened to **Digital Agency Services \| Buildaze** in repo; `CollectionPage`/`ItemList` added. Buyer-fit copy depth still open. |

### 03. `/services/design` — Design hub

| Field | Value |
|-------|--------|
| **Purpose** | Design category hub (graphic, illustration, app, UI/UX, branding). |
| **Candidate intent** | Design services for businesses |
| **Baseline title** | Graphic, Brand & UI/UX Design Services \| Buildaze |
| **Baseline description** | Buildaze offers graphic design, illustration, app design, UI/UX and brand identity design. Discuss the visuals and experiences your business needs. |
| **Baseline H1** | Design services for your brand and digital experiences. |
| **Canonical** | https://www.buildaze.com/services/design |
| **Findings** | Public copy contained website-font implementation notes (branding); portfolio proof thin. |
| **Proposed action** | Remove font-instruction residue; add portfolio spanning specialists. |
| **Status** | `needs evidence` |
| **Validation result** | Editorial residue removed/replaced in design data sources this session. Portfolio and approved examples still required. |

### 04. `/services/development` — Development hub

| Field | Value |
|-------|--------|
| **Purpose** | Development category hub (web, app, software, dashboards). |
| **Candidate intent** | Web app and software development services |
| **Baseline title** | Web, App & Software Development Services \| Buildaze |
| **Baseline description** | Buildaze develops websites, mobile apps, ecommerce platforms and custom business software. Discuss your dashboard, web application or management system. |
| **Baseline H1** | Web, app and software development around your business. |
| **Canonical** | https://www.buildaze.com/services/development |
| **Findings** | Owner-verification language; distinct app/software/dashboard intents lacked dedicated URLs at audit. |
| **Proposed action** | Remove verification residue; publish specialist destinations after evidence review; add owned examples. |
| **Status** | `implemented` |
| **Validation result** | Residue removed; three development specialist routes added (see New specialist URLs). Shipped-work examples and stack proof still `needs evidence`. |

### 05. `/services/digital-marketing` — Digital marketing hub

| Field | Value |
|-------|--------|
| **Purpose** | Marketing category hub and channel routing. |
| **Candidate intent** | Digital marketing services |
| **Baseline title** | Digital Marketing Services & Strategy \| Buildaze |
| **Baseline description** | Explore SEO, Meta Ads, Google Ads, social media management, analytics and ecommerce growth marketing. Find the right starting point with Buildaze. |
| **Baseline H1** | Digital Marketing Services for Your Next Stage of Growth |
| **Canonical** | https://www.buildaze.com/services/digital-marketing |
| **Findings** | Repeated internal-policy phrasing; channel proof and measurement examples missing. |
| **Proposed action** | Replace policy language with buyer guidance; add channel-specific proof. |
| **Status** | `needs evidence` |
| **Validation result** | Editorial residue addressed in digital-marketing data this session. Campaign/audit examples and engagement model not added. |

### 06. `/services/ai-development` — AI hub

| Field | Value |
|-------|--------|
| **Purpose** | AI category hub (apps, chatbots, custom solutions, automation, voice). |
| **Candidate intent** | AI development services |
| **Baseline title** | AI Development Services & Business Solutions \| Buildaze |
| **Baseline description** | Explore AI applications, chatbots, voice agents, custom AI solutions and business automation. Find the right starting point for your business with Buildaze. |
| **Baseline H1** | AI Development Services Built Around Your Business |
| **Canonical** | https://www.buildaze.com/services/ai-development |
| **Findings** | Verification-instruction residue; needs evaluated deployment evidence. |
| **Proposed action** | Remove verification copy; preserve child URL ownership; add original eval evidence. |
| **Status** | `expanded` (Batch B2 — 28 Oct 2026) |
| **Validation result** | RAG/knowledge routing + evaluation language strengthened; hub selected-work outcome chips softened (aligned with B1). Deployment case evidence still gated. |

### 07. `/services/saas-development` — SaaS specialist

| Field | Value |
|-------|--------|
| **Purpose** | SaaS product development offer. |
| **Candidate intent** | SaaS development services / SaaS MVP development |
| **Baseline title** | SaaS Development Services \| Multi-Tenant SaaS Products — Buildaze |
| **Baseline description** | Buildaze designs and ships multi-tenant SaaS products with Stripe billing, RBAC, analytics and operational tooling — fixed scope, weekly demos, full code ownership. |
| **Baseline H1** | SaaS architecture that survives your second customer. |
| **Canonical** | https://www.buildaze.com/services/saas-development |
| **Findings** | Long title; H1 creative vs service-explicit; needs product/architecture example. |
| **Proposed action** | Shorten title/H1; add tenancy/billing example and scope alignment with hub. |
| **Status** | `implemented` |
| **Validation result** | Title/H1 updated per audit suggestions in repo. Product example and cost drivers still `needs evidence`. |

### 08. `/services/web-development` — Web specialist

| Field | Value |
|-------|--------|
| **Purpose** | Custom websites and web applications. |
| **Candidate intent** | Custom web development services |
| **Baseline title** | Web Development Services \| Fast, SEO-Ready Websites & Apps — Buildaze |
| **Baseline description** | Buildaze builds custom websites and web applications that are fast, accessible, SEO-ready and fully owned by you — Next.js, React, Node.js and Laravel. |
| **Baseline H1** | Websites and apps built to perform. |
| **Canonical** | https://www.buildaze.com/services/web-development |
| **Findings** | Long title; vague H1; sub-second load claims need scoping. |
| **Proposed action** | Suggested title/H1; differentiate marketing sites vs apps; approved examples. |
| **Status** | `implemented` |
| **Validation result** | Title/H1 updated in repo. Examples and performance acceptance criteria not added. |

### 09. `/services/ecommerce-development` — Ecommerce specialist

| Field | Value |
|-------|--------|
| **Purpose** | Multi-platform ecommerce builds. |
| **Candidate intent** | Ecommerce development services |
| **Baseline title** | Ecommerce Development Services \| Fast, Conversion-Ready Stores — Buildaze |
| **Baseline description** | Buildaze builds, redesigns and migrates Shopify, WooCommerce and headless commerce stores — performance, conversion and SEO preservation included. |
| **Baseline H1** | Stores measured in revenue, not page views. |
| **Canonical** | https://www.buildaze.com/services/ecommerce-development |
| **Findings** | Long title; platform claims need verified examples. |
| **Proposed action** | Shorten title/H1; platform comparison; Shopify depth under Shopify hub. |
| **Status** | `implemented` |
| **Validation result** | Title/H1 updated in repo. WooCommerce/headless examples still owner-dependent. |

### 10. `/shopify-growth-agency` — Shopify hub

| Field | Value |
|-------|--------|
| **Purpose** | Shopify agency hub (design, migration, apps, support, performance). |
| **Candidate intent** | Shopify development agency |
| **Baseline title** | Shopify Design & Development Agency \| Buildaze |
| **Baseline description** | Shopify store design, development, migrations, apps, integrations and ongoing support. Tell Buildaze what your store needs and discuss the right next step. |
| **Baseline H1** | Shopify design and development for your next stage of growth. |
| **Canonical** | https://www.buildaze.com/shopify-growth-agency |
| **Findings** | No dedicated child URLs at audit; verification language; performance case study context unconfirmed. |
| **Proposed action** | Build evidence-led child destinations; remove verification copy; publish performance case when approved. |
| **Status** | `implemented` |
| **Validation result** | Six Shopify specialist pages added; hub `detailHref` wired; residue removed. Case study metrics and CRO claims remain `needs evidence`. |

### 11. `/services/digital-marketing/seo` — SEO

| Field | Value |
|-------|--------|
| **Purpose** | SEO services leaf. |
| **Candidate intent** | SEO services / technical SEO agency |
| **Baseline title** | SEO Services & Search Strategy \| Buildaze |
| **Baseline description** | Build an SEO plan around your customers, website and business goals. Explore technical audits, on-page improvements, content priorities and reporting. |
| **Baseline H1** | SEO Services That Connect Search Visibility to Business Goals |
| **Canonical** | https://www.buildaze.com/services/digital-marketing/seo |
| **Findings** | No audit-to-results example; niche focus undecided. |
| **Proposed action** | Add methodology, deliverables, sample reporting; no promised ranks. |
| **Status** | `needs evidence` |
| **Validation result** | Metadata retained. No new audit example in session. |

### 12. `/services/digital-marketing/meta-ads` — Meta Ads

| Field | Value |
|-------|--------|
| **Purpose** | Paid social (Facebook/Instagram). |
| **Candidate intent** | Meta Ads management / Facebook advertising agency |
| **Baseline title** | Meta Ads Agency for Facebook & Instagram \| Buildaze |
| **Baseline description** | Plan and manage Facebook and Instagram campaigns with Buildaze. Explore audience strategy, creative testing, lead generation and ecommerce advertising. |
| **Baseline H1** | Meta Ads Management for Facebook and Instagram |
| **Canonical** | https://www.buildaze.com/services/digital-marketing/meta-ads |
| **Findings** | Needs campaign structure and fee/spend clarity. |
| **Proposed action** | Approved campaign examples and attribution scope. |
| **Status** | `needs evidence` |
| **Validation result** | Unchanged copy structure; no campaign proof added. |

### 13. `/services/digital-marketing/google-ads` — Google Ads

| Field | Value |
|-------|--------|
| **Purpose** | Paid search management. |
| **Candidate intent** | Google Ads management services |
| **Baseline title** | Google Ads Management Services \| Buildaze |
| **Baseline description** | Explore Google Ads management for lead generation and ecommerce. Buildaze connects campaign research, account optimization and conversion measurement. |
| **Baseline H1** | Google Ads Management Built Around Your Business Goals |
| **Canonical** | https://www.buildaze.com/services/digital-marketing/google-ads |
| **Findings** | Shopping/PMax only if proven; landing-page examples missing. |
| **Proposed action** | Add examples and account-ownership clarity. |
| **Status** | `needs evidence` |
| **Validation result** | No new examples in session. |

### 14. `/services/digital-marketing/social-media-marketing` — Organic social

| Field | Value |
|-------|--------|
| **Purpose** | Organic social management. |
| **Candidate intent** | Social media management services |
| **Baseline title** | Social Media Marketing & Management \| Buildaze |
| **Baseline description** | Build a consistent organic social presence with Buildaze. Explore content planning, publishing, community support and reporting tailored to your brand. |
| **Baseline H1** | Social Media Marketing That Gives Your Brand a Clear Voice |
| **Canonical** | https://www.buildaze.com/services/digital-marketing/social-media-marketing |
| **Findings** | Needs content samples and workflow scope. |
| **Proposed action** | Real samples, approvals, channel scope. |
| **Status** | `needs evidence` |
| **Validation result** | Not expanded this session. |

### 15. `/services/digital-marketing/web-analytics-data-tracking` — Analytics

| Field | Value |
|-------|--------|
| **Purpose** | GA4/GTM and conversion tracking. |
| **Candidate intent** | GA4 setup services / GTM conversion tracking |
| **Baseline title** | Web Analytics, GA4 & Conversion Tracking \| Buildaze |
| **Baseline description** | Understand what your website and campaigns are delivering. Explore GA4, Google Tag Manager, conversion tracking audits and reporting with Buildaze. |
| **Baseline H1** | Web Analytics and Data Tracking for Better Decisions |
| **Canonical** | https://www.buildaze.com/services/digital-marketing/web-analytics-data-tracking |
| **Findings** | High buyer intent; needs anonymized implementation example. |
| **Proposed action** | Event plan + QA example; distinguish lead types. |
| **Status** | `needs evidence` |
| **Validation result** | Optional title variant not applied; scope validation with owner pending. |

### 16. `/services/digital-marketing/ecommerce-growth-marketing` — Ecommerce marketing

| Field | Value |
|-------|--------|
| **Purpose** | Cross-channel ecommerce growth (not theme engineering). |
| **Candidate intent** | Ecommerce marketing services |
| **Baseline title** | Ecommerce Marketing & Growth Strategy \| Buildaze |
| **Baseline description** | Connect ecommerce acquisition, conversion and measurement with Buildaze. Prioritize SEO, paid media and store improvements around your growth goals. |
| **Baseline H1** | Ecommerce Growth Marketing Across Acquisition and Conversion |
| **Canonical** | https://www.buildaze.com/services/digital-marketing/ecommerce-growth-marketing |
| **Findings** | Needs margin/acquisition measurement example. |
| **Proposed action** | Cross-channel example with defined window; link Shopify/SEO/ads/analytics. |
| **Status** | `needs evidence` |
| **Validation result** | Internal links may benefit from Shopify specialists; metric story not added. |

### 17. `/services/ai-development/ai-applications` — AI applications

| Field | Value |
|-------|--------|
| **Purpose** | AI product features and applications. |
| **Candidate intent** | AI application development services |
| **Baseline title** | AI Application & Product Development \| Buildaze |
| **Baseline description** | Build AI-powered applications or add useful AI features to an existing product. Explore product scope, integrations, evaluation and delivery with Buildaze. |
| **Baseline H1** | AI Application Development for New and Existing Products |
| **Canonical** | https://www.buildaze.com/services/ai-development/ai-applications |
| **Findings** | Distinguish from chatbot-only; needs shipped UI evidence. |
| **Proposed action** | Product interface proof and evaluation criteria. |
| **Status** | `needs evidence` |
| **Validation result** | No new project depth in session. |

### 18. `/services/ai-development/ai-chatbots` — AI chatbots

| Field | Value |
|-------|--------|
| **Purpose** | Custom chatbots for customers/teams. |
| **Candidate intent** | Custom AI chatbot development |
| **Baseline title** | Custom AI Chatbot Development Services \| Buildaze |
| **Baseline description** | Explore custom AI chatbots for customer questions, lead intake and team knowledge. Buildaze scopes approved information, integrations and human handoff. |
| **Baseline H1** | AI Chatbot Development for Customers and Teams |
| **Canonical** | https://www.buildaze.com/services/ai-development/ai-chatbots |
| **Findings** | Needs document-grounded example and handoff policy. |
| **Proposed action** | Tested conversation example and channel scope. |
| **Status** | `needs evidence` |
| **Validation result** | Link to Support Copilot case still metric-gated. |

### 19. `/services/ai-development/custom-ai-solutions` — Custom AI / RAG

| Field | Value |
|-------|--------|
| **Purpose** | Knowledge retrieval and workflow AI. |
| **Candidate intent** | Custom AI development / RAG development services |
| **Baseline title** | Custom AI Solutions for Business \| Buildaze |
| **Baseline description** | Turn a specific business problem into a scoped AI solution. Explore knowledge retrieval, document workflows, integrations and evaluation with Buildaze. |
| **Baseline H1** | Custom AI Solutions for Your Knowledge and Workflows |
| **Canonical** | https://www.buildaze.com/services/ai-development/custom-ai-solutions |
| **Findings** | Owns RAG/knowledge work; needs architecture and eval dataset detail. |
| **Proposed action** | Ingestion/retrieval architecture, access controls, failure handling. |
| **Status** | `expanded` (Batch B2 — 28 Oct 2026) |
| **Validation result** | RAG visibility + evaluation language expanded on Custom AI Solutions and AI hub; Phase 4 meta/H1 applied. Live retrieval sample / metric packs still evidence-gated. |

### 20. `/services/ai-development/business-automation` — Automation

| Field | Value |
|-------|--------|
| **Purpose** | Multi-tool workflow automation. |
| **Candidate intent** | AI workflow automation services |
| **Baseline title** | AI Automation & Workflow Integration \| Buildaze |
| **Baseline description** | Reduce repetitive work with scoped business automation. Connect workflows, tools and approved AI steps with clear exceptions and reporting. |
| **Baseline H1** | Business Automation That Connects Your Tools and Tasks |
| **Canonical** | https://www.buildaze.com/services/ai-development/business-automation |
| **Findings** | Needs one real workflow with before/after metrics. |
| **Proposed action** | Published workflow example and supported tools list. |
| **Status** | `needs evidence` |
| **Validation result** | Not added in session. |

### 21. `/voice-agent` — Voice agent

| Field | Value |
|-------|--------|
| **Purpose** | Voice agent service and demo entry. |
| **Candidate intent** | AI voice agent development services |
| **Baseline title** | Custom AI Voice Agent Development \| Buildaze |
| **Baseline description** | Explore custom AI voice agents for routine calls, lead intake and appointment requests. Review the demo and discuss integrations and handoff with Buildaze. |
| **Baseline H1** | Custom AI Voice Agents for Your Business |
| **Canonical** | https://www.buildaze.com/voice-agent |
| **Findings** | Demo reported credentials not connected; only Shopify + voice had `og:image` at audit. |
| **Proposed action** | Connect demo privately or lead with walkthrough CTA; dedicated OG; optional description tweak. |
| **Status** | `needs evidence` |
| **Validation result** | Description updated and `voice-agent-og.png` wired in repo. Live demo credentials / recording still not verified. |

### 22. `/services/design/graphic-design` — Graphic design

| Field | Value |
|-------|--------|
| **Purpose** | Marketing and business visuals. |
| **Candidate intent** | Graphic design services for businesses |
| **Baseline title** | Graphic Design Services for Businesses \| Buildaze |
| **Baseline description** | Create consistent marketing and business visuals with Buildaze. Discuss campaign assets, social graphics, presentations and the formats you need. |
| **Baseline H1** | Graphic design that makes your message clear. |
| **Canonical** | https://www.buildaze.com/services/design/graphic-design |
| **Findings** | Generic workflow visuals; needs deliverable examples. |
| **Proposed action** | Approved asset examples and formats. |
| **Status** | `needs evidence` |
| **Validation result** | Default OG via leaf helpers; portfolio not added. |

### 23. `/services/design/illustration` — Illustration

| Field | Value |
|-------|--------|
| **Purpose** | Custom illustration. |
| **Candidate intent** | Custom illustration services |
| **Baseline title** | Custom Illustration Design Services \| Buildaze |
| **Baseline description** | Buildaze creates custom illustrations for brand communication and digital experiences. Define the style, intended use and required artwork formats. |
| **Baseline H1** | Custom illustrations with a clear purpose. |
| **Canonical** | https://www.buildaze.com/services/design/illustration |
| **Findings** | Needs original examples and license scope. |
| **Proposed action** | Style development examples and ownership terms. |
| **Status** | `needs evidence` |
| **Validation result** | No new artwork pack in session. |

### 24. `/services/design/app-design` — App design

| Field | Value |
|-------|--------|
| **Purpose** | Mobile app UI/UX design. |
| **Candidate intent** | Mobile app UI UX design services |
| **Baseline title** | Mobile App UI/UX Design Services \| Buildaze |
| **Baseline description** | Plan mobile app journeys, screens and prototypes with Buildaze. Define the design scope, interaction states and handoff your development team needs. |
| **Baseline H1** | Mobile app design built around your users. |
| **Canonical** | https://www.buildaze.com/services/design/app-design |
| **Findings** | Low internal inlink count at audit (2 referring pages in source HTML). |
| **Proposed action** | Flow/prototype evidence; more contextual internal links. |
| **Status** | `needs evidence` |
| **Validation result** | Nav/case `relatedServiceIds` improved in session. Prototype evidence still required. |

### 25. `/services/design/ui-ux-design` — UI/UX

| Field | Value |
|-------|--------|
| **Purpose** | UX for websites and digital products. |
| **Candidate intent** | UI UX design services |
| **Baseline title** | UI/UX Design Services for Digital Products \| Buildaze |
| **Baseline description** | Buildaze plans user flows and interfaces for websites and digital products. Discuss a new experience, redesign or focused review of usability problems. |
| **Baseline H1** | UI/UX design that helps people complete their tasks. |
| **Canonical** | https://www.buildaze.com/services/design/ui-ux-design |
| **Findings** | Needs research-to-interface artifact example. |
| **Proposed action** | Real case with methods performed (no unsupported %). |
| **Status** | `needs evidence` |
| **Validation result** | Not expanded in session. |

### 26. `/services/design/branding` — Branding

| Field | Value |
|-------|--------|
| **Purpose** | Brand identity systems. |
| **Candidate intent** | Brand identity design services |
| **Baseline title** | Brand Identity & Branding Design Services \| Buildaze |
| **Baseline description** | Buildaze helps businesses define a consistent visual identity. Discuss logo design, identity assets and brand guidelines within a clear project scope. |
| **Baseline H1** | A visual identity your business can use consistently. |
| **Canonical** | https://www.buildaze.com/services/design/branding |
| **Findings** | “Website fonts stay unchanged” instruction in public copy at audit. |
| **Proposed action** | Remove font notes; show approved identity system. |
| **Status** | `needs evidence` |
| **Validation result** | Font-instruction residue removed in session. Identity system examples still required. |

### 27. `/about` — About

| Field | Value |
|-------|--------|
| **Purpose** | Team and company trust. |
| **Candidate intent** | Buildaze agency / Buildaze team |
| **Baseline title** | About Buildaze \| The Team Behind the Work |
| **Baseline description** | Meet the Buildaze team. We help businesses launch and improve websites, products, Shopify stores, AI systems and digital marketing — with clear scope and practical handover. |
| **Baseline H1** | The team behind Buildaze. |
| **Canonical** | https://www.buildaze.com/about |
| **Findings** | Entity mismatch vs Clutch (retainers, positioning, Lahore); thin bios. |
| **Proposed action** | Owner-approved founding/location facts; professional bios; profile alignment. |
| **Status** | `needs evidence` |
| **Validation result** | No entity reconciliation copy in session. |

### 28. `/contact` — Contact

| Field | Value |
|-------|--------|
| **Purpose** | Lead capture and enquiry routing. |
| **Candidate intent** | Contact Buildaze |
| **Baseline title** | Contact Buildaze \| Discuss Your Project |
| **Baseline description** | Tell Buildaze what you need to build or improve. Share a few project details so we can understand the work and suggest the next step. |
| **Baseline H1** | Let’s discuss your project. |
| **Canonical** | https://www.buildaze.com/contact |
| **Findings** | Form exists; delivery and event measurement not verified in audit. |
| **Proposed action** | Test delivery, success/error UX, GA4 events; verify budget bands. |
| **Status** | `needs evidence` |
| **Validation result** | Mock/form verification path exists in repo; production delivery remains account/environment dependent—not confirmed live. |

### 29. `/work` — Work hub

| Field | Value |
|-------|--------|
| **Purpose** | Case study index. |
| **Candidate intent** | Buildaze portfolio / project case studies |
| **Baseline title** | Work \| SaaS, AI, Web & Ecommerce Case Studies — Buildaze |
| **Baseline description** | Buildaze case studies — real products shipped to production with measured results across SaaS, fintech, healthcare and ecommerce. |
| **Baseline H1** | Real products. Measured results. |
| **Canonical** | https://www.buildaze.com/work |
| **Findings** | Strong claims; audit suggested CollectionPage/ItemList; metrics unvalidated. |
| **Proposed action** | Add ItemList schema; tighten claims to approved evidence. |
| **Status** | `implemented` |
| **Validation result** | `CollectionPage`/`ItemList` added. Case metrics globally still `needs evidence` (hub copy unchanged pending owner pack). |

### 30. `/work/support-copilot` — Support Copilot case study

| Field | Value |
|-------|--------|
| **Purpose** | SaaS support copilot proof. |
| **Candidate intent** | AI customer support copilot case study |
| **Baseline title** | Support Copilot for SaaS — Case Study — Buildaze |
| **Baseline description** | How Buildaze shipped a support copilot with RAG and live account context — cutting first-response time by 38%. |
| **Baseline H1** | Support that answers with context, not guesswork. |
| **Canonical** | https://www.buildaze.com/work/support-copilot |
| **Findings** | 38% claim needs baseline/window/client approval. |
| **Proposed action** | Owner evidence pack or remove numeric outcome. |
| **Status** | `needs evidence` |
| **Validation result** | Metric not removed (per instruction); related service links updated in repo. Substantiation not provided. |

### 31. `/work/underwriting-risk-copilot` — Underwriting case study

| Field | Value |
|-------|--------|
| **Purpose** | Fintech triage assistant proof. |
| **Candidate intent** | AI underwriting assistant case study |
| **Baseline title** | Underwriting Risk Copilot — Case Study — Buildaze |
| **Baseline description** | How Buildaze built a claims triage assistant for fintech underwriters — cutting manual review time by 42%. |
| **Baseline H1** | Claims triage that underwriters actually trust. |
| **Canonical** | https://www.buildaze.com/work/underwriting-risk-copilot |
| **Findings** | 42% claim and deployment limits need verification. |
| **Proposed action** | Methodology and anonymized detail from owner. |
| **Status** | `needs evidence` |
| **Validation result** | Metrics retained; evidence pack pending. |

### 32. `/work/clinical-note-summarizer` — Clinic assistant case study

| Field | Value |
|-------|--------|
| **Purpose** | Healthcare front-desk AI proof (URL slug legacy). |
| **Candidate intent** | Clinic front desk AI assistant case study |
| **Baseline title** | Clinical Note Summarizer — Case Study — Buildaze |
| **Baseline description** | How Buildaze shipped a PHI-safe clinic-lobby assistant — reducing front-desk calls by 28%. |
| **Baseline H1** | Pre-visit answers without pulling staff off the floor. |
| **Canonical** | https://www.buildaze.com/work/clinical-note-summarizer |
| **Findings** | Name/slug vs lobby-assistant narrative mismatch; 28% and PHI claims need approval. |
| **Proposed action** | Align display title with deliverable; keep URL unless GSC justifies redirect; substantiate metrics/HIPAA wording. |
| **Status** | `implemented` |
| **Validation result** | Display name/title updated to **Clinic Front Desk AI Assistant** in repo; URL preserved. Audit baseline above reflects pre-change crawl. 28% / security statements still `needs evidence`. |

### 33. `/work/catalog-intelligence-engine` — Catalog AI case study

| Field | Value |
|-------|--------|
| **Purpose** | Ecommerce search/copilot proof. |
| **Candidate intent** | AI ecommerce product search case study |
| **Baseline title** | Catalog Intelligence Engine — Case Study — Buildaze |
| **Baseline description** | How Buildaze launched a shopping copilot that understands product attributes — raising add-to-cart by 12%. |
| **Baseline H1** | Search that understands products, not just keywords. |
| **Canonical** | https://www.buildaze.com/work/catalog-intelligence-engine |
| **Findings** | 12% lift definition and attribution unclear. |
| **Proposed action** | Baseline, timeframe, relative vs absolute definition. |
| **Status** | `needs evidence` |
| **Validation result** | Metric retained; owner pack pending. |

### 34. `/work/shopify-performance-optimization` — Shopify performance case study

| Field | Value |
|-------|--------|
| **Purpose** | Shopify speed engineering proof. |
| **Candidate intent** | Shopify performance optimization case study |
| **Baseline title** | Shopify Performance Optimization — Case Study — Buildaze |
| **Baseline description** | How Buildaze improved a Shopify storefront Lighthouse Performance score from 28 to 91 through theme cleanup, asset optimization, and front-end delivery work. |
| **Baseline H1** | A Shopify storefront that stopped feeling slow. |
| **Canonical** | https://www.buildaze.com/work/shopify-performance-optimization |
| **Findings** | Owner-confirmation instruction in copy at audit; lab vs field CWV distinction. |
| **Proposed action** | Record tool/device/date/runs; remove confirmation placeholder; link performance specialist. |
| **Status** | `needs evidence` |
| **Validation result** | Residue addressed in Shopify data pass; measurement context still requires owner test report. Links to `/shopify-growth-agency/performance` added via related services. |

### 35. `/privacy-policy` — Privacy

| Field | Value |
|-------|--------|
| **Purpose** | Privacy legal disclosure. |
| **Candidate intent** | Buildaze privacy policy |
| **Baseline title** | Privacy Policy \| Buildaze |
| **Baseline description** | How Buildaze handles personal information collected through buildaze.com and project inquiries. |
| **Baseline H1** | Missing (audit source HTML) |
| **Canonical** | https://www.buildaze.com/privacy-policy |
| **Findings** | No H1 in audit crawl; legal accuracy needs owner review. |
| **Proposed action** | Add visible **Privacy Policy** H1; verify processors and retention. |
| **Status** | `verified unchanged` |
| **Validation result** | H1 present in repo; live privacy page verified unchanged this session (audit baseline predates verification). |

### 36. `/terms-of-use` — Terms

| Field | Value |
|-------|--------|
| **Purpose** | Website terms. |
| **Candidate intent** | Buildaze website terms |
| **Baseline title** | Website Terms \| Buildaze |
| **Baseline description** | Terms that apply to your use of buildaze.com. Project work is governed by the applicable written agreement. |
| **Baseline H1** | Missing (audit source HTML) |
| **Canonical** | https://www.buildaze.com/terms-of-use |
| **Findings** | No H1 in audit crawl. |
| **Proposed action** | Add **Website Terms** H1. |
| **Status** | `verified unchanged` |
| **Validation result** | H1 present in repo; no edit required this session. |

### 37. `/cookie-policy` — Cookies

| Field | Value |
|-------|--------|
| **Purpose** | Cookie and consent disclosure. |
| **Candidate intent** | Buildaze cookie policy |
| **Baseline title** | Cookie Policy \| Buildaze |
| **Baseline description** | How buildaze.com uses cookies and similar technologies, and the choices available to you. |
| **Baseline H1** | Missing (audit source HTML) |
| **Canonical** | https://www.buildaze.com/cookie-policy |
| **Findings** | No H1 in audit crawl; reconcile with actual analytics/consent. |
| **Proposed action** | Add **Cookie Policy** H1; align with verified tracking. |
| **Status** | `verified unchanged` |
| **Validation result** | H1 present in repo; cookie/analytics facts still need owner alignment (`needs evidence` for legal accuracy, not H1). |

---

## New specialist URLs (repo session — not in 12 Oct audit sitemap count)

These routes were **proposed in the audit** as missing destinations and were **implemented in repo** this session. Sitemap submission, indexing, and proof depth are **not** marked complete.

| URL | Purpose | Candidate intent | Status | Validation result |
|-----|---------|------------------|--------|-------------------|
| `/shopify-growth-agency/store-design-development` | Shopify build/redesign scope | Shopify store design and development (candidate) | `implemented` | Leaf page + hub `detailHref`; storefront examples `needs evidence`. |
| `/shopify-growth-agency/migrations` | Platform/data migration | Shopify migration services (candidate) | `implemented` | Route live in repo; approved migration example `needs evidence`. |
| `/shopify-growth-agency/apps-integrations` | Apps, APIs, webhooks | Shopify apps and integrations (candidate) | `implemented` | Route live; implementation evidence `needs evidence`. |
| `/shopify-growth-agency/headless-b2b` | Headless and B2B commerce | Shopify headless / B2B (candidate) | `implemented` | Route live; architecture proof `needs evidence`. |
| `/shopify-growth-agency/ongoing-support` | Retainers and support | Shopify ongoing support (candidate) | `implemented` | Route live; commercial model must match owner-approved facts (Clutch reconciliation). |
| `/shopify-growth-agency/performance` | Speed and CRO-oriented offer | Shopify performance optimization / CRO (candidate) | `implemented` | Route live; tie to performance case study only after owner measurement pack. |
| `/services/development/app-development` | Mobile/app builds | App development services (candidate) | `implemented` | Route live; shipped app evidence `needs evidence`. |
| `/services/development/custom-software` | Bespoke business software | Custom software development (candidate) | `implemented` | Route live; stack/project proof `needs evidence`. |
| `/services/development/web-applications` | Dashboards and web apps | Web application development (candidate) | `implemented` | Route live; distinguish from `/services/web-development` in copy over time. |

**Post-release checks (when deployed):** HTTP 200, self-canonical, sitemap inclusion, internal links from hub/menu/case studies, schema parse, social unfurl with default or page OG.

---

## Backlog not tracked as single URLs

| Item | Status | Notes |
|------|--------|-------|
| Lighthouse / CWV / mobile rendered parity | `blocked` | PSI 429; see audit §2 |
| GSC baseline export | `needs evidence` | |
| GA4/GTM/consent verification | `needs evidence` | |
| Rank/backlink/volume research | `needs evidence` | No invented metrics |
| GBP / local Lahore eligibility | `needs evidence` | No fake offices |
| `/llms.txt` | Not implemented | Optional; 404 not a Google defect per audit |
| Clutch / LinkedIn entity reconciliation | `needs evidence` | See [evidence-needed.md](./evidence-needed.md) |

**Next tracker update:** After deploy, re-crawl changed URLs; refresh baseline metadata from production HTML; attach GSC/GA4 exports when available.

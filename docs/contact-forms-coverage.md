# Contact / project inquiry form coverage

Canonical destination (server-enforced): **team@buildaze.com**  
Handler: `POST /api/contact` → `lib/contact/send.ts` (Resend, or `CONTACT_EMAIL_TRANSPORT=mock`)

| Surface | Component | Submits via | Recipient |
| --- | --- | --- | --- |
| `/contact` — Project inquiry form | `components/contact/ContactInquiryForm.tsx` | `POST /api/contact` (`source: contact-page`) | `team@buildaze.com` |

Legacy embedded forms (`ContactCTA`, `ServiceShopifyContact`) were removed after verification that every journey routes to `/contact` via `ContactInvite` / enquiry links.

## CTA surfaces that route to `/contact` (no separate submit handler)

These use `ContactInvite` or `MagneticButton` / enquiry links to `/contact` (optional `?service=` / `?capability=`). Submission happens only on the Contact page form.

| Surface | Component / data |
| --- | --- |
| Homepage | `ContactInvite` in `app/page.tsx`, Hero CTA → `/contact` |
| About | `ContactInvite` in `components/about/AboutPage.tsx` |
| Services hub | `ContactInvite` in `components/services/ServicesHub.tsx` |
| Service / subservice pages | `ContactInvite` in `components/services/ServicePage.tsx`; hero CTAs via `ServiceHero` |
| Shopify growth page | Enquiry hrefs in `lib/data/shopify-page.ts` → `/contact?service=shopify…` |
| Work hub / case studies | `ContactInvite` in `WorkHub` / `CaseStudyPage` |
| Voice Agent | `ContactInvite` in `VoiceAgentPage`; demo CTAs → `/contact?service=ai…` |
| Footer / nav | `site.nav.cta`, footer company links → `/contact` |

## Mailto (not submission delivery)

Visible `mailto:team@buildaze.com` links and “Open email draft” fallbacks are human alternatives when the API is unconfigured or after a provider failure. They are **not** treated as successful form delivery.

## Configuration required for real delivery

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (server-only) |
| `CONTACT_FROM_EMAIL` | Authenticated / verified Resend sender (e.g. `Buildaze <hello@your-verified-domain>`) |
| `CONTACT_TO_EMAIL` | Must be `team@buildaze.com` (documented). Other values are **ignored**; mail always goes to `team@buildaze.com`. |
| `CONTACT_EMAIL_TRANSPORT=mock` | Optional. Accepts submissions into an in-memory sink for tests — no real email. |

## Email shape

- Subject: `Buildaze Inquiry — [Selected Service]` (capability, else service, else `General`)
- `From`: `CONTACT_FROM_EMAIL` (never the visitor)
- `To`: `team@buildaze.com`
- `Reply-To`: visitor’s validated email
- Body: fields, source page/form, UTC timestamp

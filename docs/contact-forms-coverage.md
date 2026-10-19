# Contact / project inquiry form coverage

Canonical destination: email inbox linked to the Web3Forms access key  
Primary path: shared `ContactInquiryForm` → `POST https://api.web3forms.com/submit` (browser)

| Surface | Component | Submits via | Notes |
| --- | --- | --- | --- |
| `/contact` | `ContactInquiryForm` via `ContactPage` | Web3Forms (`source: contact-page`) | Dedicated contact page |
| Hubs / service / work / about / voice-agent | `ContactInvite` → embeds `ContactInquiryForm` | Web3Forms (`source` per invite) | One form component, reused |

There is a single form implementation (`components/contact/ContactInquiryForm.tsx`). Pages call it either on `/contact` or through `ContactInvite` — no duplicated form markup.

## CTA surfaces that embed the shared form

| Surface | Component / data |
| --- | --- |
| Homepage | `ContactInvite` in `app/page.tsx` |
| About | `ContactInvite` in `components/about/AboutPage.tsx` |
| Services hub | `ContactInvite` in `components/services/ServicesHub.tsx` |
| Service / subservice pages | `ContactInvite` in `components/services/ServicePage.tsx` |
| Work hub / case studies | `ContactInvite` in `WorkHub` / `CaseStudyPage` |
| Voice Agent | `ContactInvite` in `VoiceAgentPage` |
| Contact page | `ContactInquiryForm` in `ContactPage` |

Hero / nav CTAs may still deep-link to `/contact?service=…` (or `#contact` on the same page). Submission always goes through `ContactInquiryForm`.

## Mailto (not submission delivery)

Visible `mailto:team@buildaze.com` links and “Open email draft” fallbacks are human alternatives when Web3Forms is unconfigured or after a provider failure. They are **not** treated as successful form delivery.

## Configuration required for real delivery

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Web3Forms access key from https://web3forms.com (safe in the browser; Web3Forms documents client-side submit) |

Optional legacy Resend path (`POST /api/contact` + `RESEND_API_KEY` / `CONTACT_FROM_EMAIL`) remains in the codebase for mock verification (`npm run verify:contact`) but is **not** used by the live form.

## Email shape (Web3Forms)

- Subject: `Buildaze Inquiry — [Selected Service / Capability]`
- `from_name`: `Buildaze Website`
- Reply-To: visitor’s `email` field
- Body fields: name, email, message (project details), plus company / service / capability / timeline / source when set

## Form fields (no budget / price chips)

- Name, email (required)
- Service chips (required)
- Company / website (optional)
- Preferred timeline (optional)
- Project details (required)

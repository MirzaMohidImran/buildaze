# Policy pages — private development note
Date: 12 October 2026. Not for visitor-facing display.

## Routes implemented locally
- `/privacy-policy`
- `/terms-of-use`
- `/cookie-policy`

Footer legal links and sitemap entries were added. Nothing was published or deployed from this task.

## Verified from repository evidence
| Area | Finding |
|---|---|
| Enquiry forms | Collect name, email, optional company, details/challenge, service/capability chips, optional budget/timeline, source; honeypot field ignored when filled |
| Enquiry delivery | Resend to `team@buildaze.com` when `RESEND_API_KEY` + `CONTACT_FROM_EMAIL` are set; `CONTACT_TO_EMAIL` must document that inbox (mismatched env ignored). Otherwise honest unconfigured error + mailto as human fallback only |
| Rate limiting | Server-side by client IP/header key for contact and voice APIs — not a browser cookie consent system |
| Analytics in app code | `Analytics` maps `data-analytics` clicks to `gtag` / `dataLayer` **only if already present**; no GA/GTM measurement ID or script tag in `app/layout.tsx` |
| Cookie preference UI | None found |
| Voice demo | Optional ElevenLabs Conversational AI when env keys configured; microphone permission required |
| Advertising cookies | Not shipped in application source |
| Retention schedule | No fixed retention constants in code |
| International transfer clauses | Not documented in repo (hosting/email/AI providers may process outside visitor country) |
| Staging robots policy | Root layout defaults to `index, follow`; `robots.ts` allows major crawlers. No separate staging noindex switch found in this repo — preserve whatever hosting/staging config already applies outside the app |

## Unresolved before publication claims
1. Confirm production host cookie names (CDN/platform) with a live browser Network/Application inspection.
2. Confirm whether deployment injects GTM/GA or other tags outside this repository.
3. Confirm Resend / hosting / ElevenLabs data-processing terms and regions with the business owner.
4. Confirm any written retention practice for enquiry emails and CRM copies outside the website.
5. Confirm whether a consent banner is required for the live tag setup once (2) is known.
6. Legal review of policy wording for the markets Buildaze serves (this task does not certify legal compliance).

## Do not claim until confirmed
- That optional analytics/advertising cookies are in use (or not) on production.
- That specific SCCs, adequacy decisions or certifications are in place.
- That a cookie-settings control exists on the site (it does not in this codebase).
- That these pages alone make Buildaze “GDPR compliant” or similar.

/** Server-only Resend contact configuration. Never import from client components. */

export const CONTACT_RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 15 * 60 * 1000,
} as const;

export const IDEMPOTENCY_TTL_MS = 15 * 60 * 1000;

/**
 * Canonical inquiry inbox. All project enquiry forms deliver here.
 * A mismatched CONTACT_TO_EMAIL env value is ignored so mail cannot be
 * silently redirected to an outdated address.
 */
export const CONTACT_TO_EMAIL = "team@buildaze.com";

export type ContactEmailTransport = "resend" | "mock";

export function getContactConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim() ?? "";
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim() ?? "";
  const envToEmail = process.env.CONTACT_TO_EMAIL?.trim() ?? "";
  const transportEnv = process.env.CONTACT_EMAIL_TRANSPORT?.trim().toLowerCase();
  const transport: ContactEmailTransport =
    transportEnv === "mock" ? "mock" : "resend";

  const envToMismatch = Boolean(
    envToEmail &&
      envToEmail.toLowerCase() !== CONTACT_TO_EMAIL.toLowerCase(),
  );

  const isConfigured =
    transport === "mock" || Boolean(apiKey && fromEmail);

  return {
    apiKey,
    fromEmail,
    /** Always the canonical inbox — never an alternate env recipient. */
    toEmail: CONTACT_TO_EMAIL,
    /** Documented env value for operators; ignored when it differs. */
    envToEmail,
    envToMismatch,
    transport,
    isConfigured,
  };
}

/**
 * Web3Forms client helpers.
 * Submissions must run in the browser — server-side submit needs a paid plan
 * and IP allowlisting (see https://docs.web3forms.com/getting-started/api-reference).
 *
 * Access keys are documented as safe for client/browser use.
 */

export const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

/**
 * Public Buildaze Web3Forms access key (safe in the browser).
 * Prefer NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY when set so the key can be rotated
 * without a code change.
 */
const WEB3FORMS_ACCESS_KEY_FALLBACK =
  "2ac61a41-d28a-4059-8eb5-9f25bfd8ba2f";

export function getWeb3FormsAccessKey(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";
  return fromEnv || WEB3FORMS_ACCESS_KEY_FALLBACK;
}

export function isWeb3FormsConfigured(): boolean {
  return getWeb3FormsAccessKey().length > 0;
}

export interface Web3FormsInquiryFields {
  name: string;
  email: string;
  details: string;
  company?: string;
  service?: string;
  capability?: string;
  timeline?: string;
  source?: string;
}

export interface Web3FormsSubmitResult {
  ok: boolean;
  message: string;
}

/** Build the JSON body Web3Forms expects, plus Buildaze custom fields. */
export function buildWeb3FormsPayload(
  data: Web3FormsInquiryFields,
  accessKey: string,
): Record<string, string | boolean> {
  const subjectParts = [
    data.capability?.trim() || data.service?.trim() || "General",
  ];
  return {
    access_key: accessKey,
    subject: `Buildaze Inquiry — ${subjectParts[0]}`,
    from_name: "Buildaze Website",
    name: data.name,
    email: data.email,
    message: data.details,
    ...(data.company ? { company: data.company } : {}),
    ...(data.service ? { service: data.service } : {}),
    ...(data.capability ? { capability: data.capability } : {}),
    ...(data.timeline ? { timeline: data.timeline } : {}),
    ...(data.source ? { source: data.source } : {}),
    botcheck: false,
  };
}

export async function submitWeb3FormsInquiry(
  data: Web3FormsInquiryFields,
): Promise<Web3FormsSubmitResult> {
  const accessKey = getWeb3FormsAccessKey();
  if (!accessKey) {
    return {
      ok: false,
      message:
        "Enquiry delivery is not configured. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, or email team@buildaze.com.",
    };
  }

  const response = await fetch(WEB3FORMS_SUBMIT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(buildWeb3FormsPayload(data, accessKey)),
  });

  const body = (await response.json().catch(() => ({}))) as {
    success?: boolean;
    message?: string;
    body?: { message?: string };
  };

  const message =
    body.message ||
    body.body?.message ||
    (response.ok
      ? "Email sent successfully!"
      : "Could not accept the inquiry. Please try again.");

  if (response.ok && body.success !== false) {
    return { ok: true, message };
  }

  return { ok: false, message };
}

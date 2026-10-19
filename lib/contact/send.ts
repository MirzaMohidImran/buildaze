import { Resend } from "resend";
import type { ContactPayload } from "@/lib/contact/schema";
import {
  CONTACT_TO_EMAIL,
  getContactConfig,
  type ContactEmailTransport,
} from "@/lib/contact/config";

export type ContactMailFields = Required<
  Pick<ContactPayload, "name" | "email" | "details">
> &
  ContactPayload;

export interface BuiltContactEmail {
  to: string;
  from: string;
  replyTo: string;
  subject: string;
  text: string;
  html: string;
  submittedAt: string;
}

export interface SendContactEmailResult {
  ok: true;
  id: string | null;
  transport: ContactEmailTransport;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Subject: Buildaze Inquiry — [Selected Service] */
export function buildInquirySubject(data: ContactMailFields): string {
  const service =
    data.capability?.trim() ||
    data.service?.trim() ||
    "General";
  return `Buildaze Inquiry — ${service}`;
}

export function buildContactEmail(
  data: ContactMailFields,
  options?: { fromEmail?: string; submittedAt?: string },
): BuiltContactEmail {
  const submittedAt = options?.submittedAt ?? new Date().toISOString();
  const fromEmail = options?.fromEmail?.trim() || CONTACT_TO_EMAIL;
  const subject = buildInquirySubject(data);

  const textLines = [
    `Submitted at (UTC): ${submittedAt}`,
    `Destination: ${CONTACT_TO_EMAIL}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.company && `Company / website: ${data.company}`,
    data.service && `Service: ${data.service}`,
    data.capability && `Capability: ${data.capability}`,
    data.timeline && `Timeline: ${data.timeline}`,
    data.source && `Source page / form: ${data.source}`,
    "",
    "Project details:",
    data.details,
  ].filter((line): line is string => Boolean(line));

  const html = `
    <h2>Buildaze project inquiry</h2>
    <p><strong>Submitted at (UTC):</strong> ${escapeHtml(submittedAt)}</p>
    <p><strong>Destination:</strong> ${escapeHtml(CONTACT_TO_EMAIL)}</p>
    <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
    ${data.company ? `<p><strong>Company / website:</strong> ${escapeHtml(data.company)}</p>` : ""}
    ${data.service ? `<p><strong>Service:</strong> ${escapeHtml(data.service)}</p>` : ""}
    ${data.capability ? `<p><strong>Capability:</strong> ${escapeHtml(data.capability)}</p>` : ""}
    ${data.timeline ? `<p><strong>Timeline:</strong> ${escapeHtml(data.timeline)}</p>` : ""}
    ${data.source ? `<p><strong>Source page / form:</strong> ${escapeHtml(data.source)}</p>` : ""}
    <p><strong>Project details:</strong></p>
    <p>${escapeHtml(data.details).replace(/\n/g, "<br/>")}</p>
  `;

  return {
    to: CONTACT_TO_EMAIL,
    from: fromEmail,
    replyTo: data.email,
    subject,
    text: textLines.join("\n"),
    html,
    submittedAt,
  };
}

/** In-memory sink for CONTACT_EMAIL_TRANSPORT=mock — never sends real mail. */
const mockInbox: BuiltContactEmail[] = [];

export function getMockInbox(): readonly BuiltContactEmail[] {
  return mockInbox;
}

export function clearMockInbox(): void {
  mockInbox.length = 0;
}

export async function sendContactEmail(
  data: ContactMailFields,
): Promise<SendContactEmailResult> {
  const config = getContactConfig();

  if (!config.isConfigured) {
    throw new Error("unconfigured");
  }

  const email = buildContactEmail(data, { fromEmail: config.fromEmail });

  if (config.transport === "mock") {
    mockInbox.push(email);
    return {
      ok: true,
      id: `mock-${mockInbox.length}`,
      transport: "mock",
      message:
        "Enquiry accepted by mock transport (no real email sent). Provider acceptance does not prove inbox delivery.",
    };
  }

  const resend = new Resend(config.apiKey);
  const result = await resend.emails.send({
    from: email.from,
    to: [email.to],
    replyTo: email.replyTo,
    subject: email.subject,
    text: email.text,
    html: email.html,
  });

  if (result.error) {
    throw new Error("provider_error");
  }

  return {
    ok: true,
    id: result.data?.id ?? null,
    transport: "resend",
    message:
      "Enquiry accepted for delivery to team@buildaze.com. Provider acceptance does not prove inbox receipt.",
  };
}

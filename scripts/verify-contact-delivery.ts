/**
 * Safe contact-delivery verification — uses mock transport only.
 * Does not send mail to real recipients.
 *
 *   CONTACT_EMAIL_TRANSPORT=mock npx tsx scripts/verify-contact-delivery.ts
 */
import assert from "node:assert/strict";

process.env.CONTACT_EMAIL_TRANSPORT = "mock";
process.env.CONTACT_FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL?.trim() || "Buildaze <onboarding@resend.dev>";
// Intentionally wrong env value — must NOT redirect delivery.
process.env.CONTACT_TO_EMAIL = "outdated@example.com";

async function main() {
  const { CONTACT_TO_EMAIL, getContactConfig } = await import(
    "../lib/contact/config"
  );
  const {
    mapContactPageServiceToPayload,
    resolveContactPageService,
    validateContactPayload,
  } = await import("../lib/contact/schema");
  const {
    buildContactEmail,
    buildInquirySubject,
    clearMockInbox,
    getMockInbox,
    sendContactEmail,
  } = await import("../lib/contact/send");

  clearMockInbox();

  const config = getContactConfig();
  assert.equal(config.toEmail, CONTACT_TO_EMAIL);
  assert.equal(CONTACT_TO_EMAIL, "team@buildaze.com");
  assert.equal(config.envToMismatch, true);
  assert.equal(config.transport, "mock");
  assert.equal(config.isConfigured, true);

  // Validation: missing fields
  const invalid = validateContactPayload({ name: "A", email: "bad", details: "short" });
  assert.equal(invalid.ok, false);

  // Validation: valid payload
  const valid = validateContactPayload({
    name: "Test User",
    email: "visitor@example.com",
    company: "Example Co",
    service: "Shopify",
    capability: "Store Design & Development",
    budget: "Not sure yet",
    timeline: "Flexible",
    details: "We need a Shopify storefront improvement for checkout friction.",
    source: "verify-script",
  });
  assert.equal(valid.ok, true);
  if (!valid.ok) throw new Error("expected valid payload");

  const built = buildContactEmail(valid.data, {
    fromEmail: config.fromEmail,
    submittedAt: "2026-10-12T00:00:00.000Z",
  });
  assert.equal(built.to, "team@buildaze.com");
  assert.equal(built.replyTo, "visitor@example.com");
  assert.notEqual(built.from, built.replyTo);
  assert.equal(
    buildInquirySubject(valid.data),
    "Buildaze Inquiry — Store Design & Development",
  );
  assert.match(built.subject, /^Buildaze Inquiry — /);
  assert.match(built.text, /Submitted at \(UTC\):/);
  assert.match(built.text, /Source page \/ form: verify-script/);
  assert.match(built.text, /Service: Shopify/);

  const sent = await sendContactEmail(valid.data);
  assert.equal(sent.ok, true);
  assert.equal(sent.transport, "mock");
  assert.equal(getMockInbox().length, 1);
  assert.equal(getMockInbox()[0]?.to, "team@buildaze.com");
  assert.equal(getMockInbox()[0]?.replyTo, "visitor@example.com");

  // Honeypot-shaped fields still validate; route ignores send when website set.
  const honeypot = validateContactPayload({
    name: "Bot",
    email: "bot@example.com",
    details: "Enough characters here for validation.",
    website: "https://spam.example",
  });
  assert.equal(honeypot.ok, true);

  // Service preselection from service/subservice CTAs
  assert.equal(resolveContactPageService("development"), "Development");
  assert.equal(resolveContactPageService("shopify"), "Shopify");
  assert.equal(resolveContactPageService("ai"), "AI Development");
  assert.deepEqual(mapContactPageServiceToPayload("Development"), {
    service: "Development",
  });
  assert.deepEqual(mapContactPageServiceToPayload("Web Development"), {
    service: "Development",
    capability: "Web Development",
  });

  console.log("verify-contact-delivery: all checks passed");
  console.log(`destination: ${CONTACT_TO_EMAIL}`);
  console.log("transport: mock (no real email sent)");
  console.log("real inbox delivery: unverified");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

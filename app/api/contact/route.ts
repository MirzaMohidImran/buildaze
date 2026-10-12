import { NextResponse } from "next/server";
import {
  CONTACT_RATE_LIMIT,
  CONTACT_TO_EMAIL,
  getContactConfig,
} from "@/lib/contact/config";
import {
  getIdempotentResponse,
  setIdempotentResponse,
} from "@/lib/contact/idempotency";
import { FIELD_LIMITS, validateContactPayload } from "@/lib/contact/schema";
import { sendContactEmail } from "@/lib/contact/send";
import {
  checkRateLimit,
  clientKeyFromHeaders,
} from "@/lib/voice/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const config = getContactConfig();

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json", message: "Invalid request body." },
      { status: 400 },
    );
  }

  const validated = validateContactPayload(json);
  if (!validated.ok) {
    return NextResponse.json(
      { ok: false, error: "validation", errors: validated.errors },
      { status: 400 },
    );
  }

  const data = validated.data;

  // Honeypot filled — pretend success without sending (spam protection).
  if (data.website) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  if (!config.isConfigured) {
    return NextResponse.json(
      {
        ok: false,
        error: "unconfigured",
        message: `Enquiry delivery is not configured on this deployment. Email ${CONTACT_TO_EMAIL} directly, or set RESEND_API_KEY and CONTACT_FROM_EMAIL (verified Resend sender).`,
        destination: CONTACT_TO_EMAIL,
      },
      { status: 503 },
    );
  }

  const clientKey = clientKeyFromHeaders(request.headers);
  const limit = checkRateLimit(
    `contact:${clientKey}`,
    CONTACT_RATE_LIMIT.maxRequests,
    CONTACT_RATE_LIMIT.windowMs,
  );

  if (!limit.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: "rate_limited",
        message: "Too many enquiries from this network. Try again shortly.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSec) },
      },
    );
  }

  const rawIdempotency =
    request.headers
      .get("idempotency-key")
      ?.trim()
      .slice(0, FIELD_LIMITS.idempotencyKey) || "";
  if (rawIdempotency) {
    const cached = getIdempotentResponse(`contact:${rawIdempotency}`);
    if (cached) {
      return NextResponse.json(cached);
    }
  }

  try {
    const result = await sendContactEmail(data);

    const responseBody = {
      ok: true as const,
      id: result.id,
      transport: result.transport,
      destination: CONTACT_TO_EMAIL,
      message: result.message,
    };

    if (rawIdempotency) {
      setIdempotentResponse(`contact:${rawIdempotency}`, responseBody);
    }

    return NextResponse.json(responseBody);
  } catch (error) {
    const code = error instanceof Error ? error.message : "provider_error";
    if (code === "unconfigured") {
      return NextResponse.json(
        {
          ok: false,
          error: "unconfigured",
          message: `Enquiry delivery is not configured. Email ${CONTACT_TO_EMAIL} or configure Resend.`,
          destination: CONTACT_TO_EMAIL,
        },
        { status: 503 },
      );
    }

    return NextResponse.json(
      {
        ok: false,
        error: "provider_error",
        message:
          "Could not accept the inquiry. Please try again. Your entered details are still available on the form.",
        destination: CONTACT_TO_EMAIL,
      },
      { status: 502 },
    );
  }
}

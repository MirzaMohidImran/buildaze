import { NextResponse } from "next/server";
import {
  getVoiceAgentConfig,
  VOICE_DEMO_RATE_LIMIT,
} from "@/lib/voice/config";
import {
  checkRateLimit,
  clientKeyFromHeaders,
} from "@/lib/voice/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Creates a short-lived signed WebSocket URL for the ElevenLabs Conversational AI agent.
 * The API key never leaves the server.
 */
export async function POST(request: Request) {
  const { apiKey, agentId, isConfigured } = getVoiceAgentConfig();

  if (!isConfigured) {
    return NextResponse.json(
      {
        error: "unavailable",
        message:
          "Voice demo is not configured. Add ELEVENLABS_API_KEY and ELEVENLABS_AGENT_ID.",
      },
      { status: 503 },
    );
  }

  const key = clientKeyFromHeaders(request.headers);
  const limit = checkRateLimit(
    `voice-session:${key}`,
    VOICE_DEMO_RATE_LIMIT.maxRequests,
    VOICE_DEMO_RATE_LIMIT.windowMs,
  );

  if (!limit.ok) {
    return NextResponse.json(
      {
        error: "rate_limited",
        message: "Too many demo sessions from this network. Try again shortly.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSec) },
      },
    );
  }

  try {
    const url = new URL(
      "https://api.elevenlabs.io/v1/convai/conversation/get-signed-url",
    );
    url.searchParams.set("agent_id", agentId);

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        "xi-api-key": apiKey,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      // Do not forward provider error bodies that might leak account details.
      return NextResponse.json(
        {
          error: "provider_error",
          message: "Could not start a demo session. Please try again later.",
        },
        { status: 502 },
      );
    }

    const body = (await response.json()) as { signed_url?: string };
    if (!body.signed_url) {
      return NextResponse.json(
        {
          error: "provider_error",
          message: "Could not start a demo session. Please try again later.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json(
      { signedUrl: body.signed_url },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return NextResponse.json(
      {
        error: "provider_error",
        message: "Could not reach the voice provider. Please try again later.",
      },
      { status: 502 },
    );
  }
}

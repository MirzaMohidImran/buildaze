import { NextResponse } from "next/server";
import { getVoiceAgentConfig } from "@/lib/voice/config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Public status — never returns secrets. */
export async function GET() {
  const { isConfigured } = getVoiceAgentConfig();
  return NextResponse.json(
    {
      available: isConfigured,
      provider: "elevenlabs",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}

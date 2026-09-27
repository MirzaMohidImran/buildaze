/**
 * Server-side voice demo configuration.
 * Secrets stay on the server — never expose ELEVENLABS_API_KEY to the client.
 *
 * Required environment variables (see .env.example):
 * - ELEVENLABS_API_KEY
 * - ELEVENLABS_AGENT_ID
 */

export function getVoiceAgentConfig() {
  const apiKey = process.env.ELEVENLABS_API_KEY?.trim() ?? "";
  const agentId = process.env.ELEVENLABS_AGENT_ID?.trim() ?? "";
  return {
    apiKey,
    agentId,
    isConfigured: Boolean(apiKey && agentId),
  };
}

export const VOICE_DEMO_RATE_LIMIT = {
  /** Max session creations per IP in the window. */
  maxRequests: 8,
  windowMs: 15 * 60 * 1000,
} as const;

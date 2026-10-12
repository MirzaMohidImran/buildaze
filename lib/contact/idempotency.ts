import { IDEMPOTENCY_TTL_MS } from "@/lib/contact/config";

type Entry = { expiresAt: number; response: unknown };

const store = new Map<string, Entry>();

export function getIdempotentResponse(key: string): unknown | null {
  const entry = store.get(key);
  if (!entry) return null;
  if (Date.now() >= entry.expiresAt) {
    store.delete(key);
    return null;
  }
  return entry.response;
}

export function setIdempotentResponse(key: string, response: unknown): void {
  store.set(key, { expiresAt: Date.now() + IDEMPOTENCY_TTL_MS, response });
}

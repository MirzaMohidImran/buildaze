"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { site } from "@/lib/data/site";
import { voiceAgent } from "@/lib/data/voice-agent";

export type DemoPhase =
  | "checking"
  | "unavailable"
  | "ready"
  | "requesting_mic"
  | "connecting"
  | "listening"
  | "speaking"
  | "ending"
  | "ended"
  | "error";

type TranscriptLine = {
  id: string;
  role: "user" | "agent";
  text: string;
};

/** ElevenLabs session handle — typed loosely so the SDK stays a dynamic import. */
type VoiceSession = {
  endSession: () => Promise<void>;
};

const WORKLET_PATHS = {
  rawAudioProcessor: "/vendor/elevenlabs/rawAudioProcessor.js",
  audioConcatProcessor: "/vendor/elevenlabs/audioConcatProcessor.js",
} as const;

function statusLabel(phase: DemoPhase): string {
  switch (phase) {
    case "checking":
      return "Checking demo availability";
    case "unavailable":
      return "Demo currently unavailable";
    case "ready":
      return "Ready";
    case "requesting_mic":
      return "Requesting microphone";
    case "connecting":
      return "Connecting";
    case "listening":
      return "Listening";
    case "speaking":
      return "Agent speaking";
    case "ending":
      return "Ending conversation";
    case "ended":
      return "Conversation ended";
    case "error":
      return "Something went wrong";
  }
}

function isActivePhase(phase: DemoPhase): boolean {
  return (
    phase === "requesting_mic" ||
    phase === "connecting" ||
    phase === "listening" ||
    phase === "speaking" ||
    phase === "ending"
  );
}

/**
 * Live ElevenLabs Conversational AI demo.
 * Never starts a session or requests the microphone on mount.
 */
export function VoiceDemo({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<DemoPhase>("checking");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [transcript, setTranscript] = useState<TranscriptLine[]>([]);
  const conversationRef = useRef<VoiceSession | null>(null);
  const startingRef = useRef(false);
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  const cleanupSession = useCallback(async () => {
    const session = conversationRef.current;
    conversationRef.current = null;
    if (session) {
      try {
        await session.endSession();
      } catch {
        // Session may already be closed.
      }
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/voice-agent/status", { cache: "no-store" });
        const data = (await res.json()) as { available?: boolean };
        if (cancelled) return;
        setPhase(data.available ? "ready" : "unavailable");
      } catch {
        if (!cancelled) setPhase("unavailable");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      void cleanupSession();
    };
  }, [cleanupSession]);

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  }, [transcript, reduced]);

  const endConversation = useCallback(async () => {
    if (phase === "ending" || phase === "ended" || phase === "unavailable") return;
    setPhase("ending");
    startingRef.current = false;
    await cleanupSession();
    setPhase("ended");
  }, [cleanupSession, phase]);

  const startConversation = useCallback(async () => {
    if (startingRef.current || isActivePhase(phase)) return;
    if (phase === "unavailable" || phase === "checking") return;

    startingRef.current = true;
    setErrorMessage(null);
    setTranscript([]);
    setPhase("requesting_mic");

    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error(
          "This browser does not support microphone access. Try Chrome or Edge on HTTPS.",
        );
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        stream.getTracks().forEach((t) => t.stop());
      } catch (err) {
        const name = err instanceof DOMException ? err.name : "";
        if (name === "NotAllowedError" || name === "PermissionDeniedError") {
          setPhase("error");
          setErrorMessage(
            "Microphone access was blocked. Allow the microphone for this site in your browser settings, then try again.",
          );
          startingRef.current = false;
          return;
        }
        throw err;
      }

      setPhase("connecting");

      const sessionRes = await fetch("/api/voice-agent/session", {
        method: "POST",
        headers: { Accept: "application/json" },
      });

      if (sessionRes.status === 503) {
        setPhase("unavailable");
        startingRef.current = false;
        return;
      }

      if (sessionRes.status === 429) {
        setPhase("error");
        setErrorMessage(
          "Too many demo sessions from this network. Wait a few minutes and try again — or email us for a private walkthrough.",
        );
        startingRef.current = false;
        return;
      }

      if (!sessionRes.ok) {
        throw new Error("Could not start a demo session. Please try again later.");
      }

      const { signedUrl } = (await sessionRes.json()) as { signedUrl?: string };
      if (!signedUrl) {
        throw new Error("Could not start a demo session. Please try again later.");
      }

      // Load the voice SDK only when the visitor starts a conversation —
      // keeps essential page content out of the heavy provider bundle.
      const { Conversation } = await import("@elevenlabs/client");

      const conversation = await Conversation.startSession({
        signedUrl,
        connectionType: "websocket",
        workletPaths: WORKLET_PATHS,
        onConnect: () => {
          setPhase("listening");
        },
        onStatusChange: ({ status }) => {
          if (status === "connecting") setPhase("connecting");
          if (status === "connected") setPhase((p) => (p === "speaking" ? p : "listening"));
        },
        onModeChange: ({ mode }) => {
          setPhase(mode === "speaking" ? "speaking" : "listening");
        },
        onMessage: ({ message, role }) => {
          const text = message?.trim();
          if (!text) return;
          setTranscript((prev) => [
            ...prev,
            {
              id: `${Date.now()}-${prev.length}`,
              role: role === "user" ? "user" : "agent",
              text,
            },
          ]);
        },
        onError: (message) => {
          setErrorMessage(message || "The voice session encountered an error.");
          setPhase("error");
          startingRef.current = false;
        },
        onDisconnect: () => {
          conversationRef.current = null;
          startingRef.current = false;
          setPhase((current) =>
            current === "ending" || current === "error" ? current : "ended",
          );
        },
      });

      conversationRef.current = conversation;
    } catch (err) {
      await cleanupSession();
      setPhase("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Could not start the conversation. Check microphone permissions and try again.",
      );
    } finally {
      startingRef.current = false;
    }
  }, [cleanupSession, phase]);

  const canStart =
    phase === "ready" || phase === "ended" || phase === "error";
  const canEnd =
    phase === "requesting_mic" ||
    phase === "connecting" ||
    phase === "listening" ||
    phase === "speaking";

  return (
    <div
      id="demo"
      className={`scroll-mt-28 rounded-panel border border-line bg-ink-2 ${className}`}
    >
      <div className="build-grid relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 70% at 50% 20%, rgba(37,99,235,0.12), transparent 70%)",
          }}
        />

        <div className="relative border-b border-line px-5 py-5 md:px-8 md:py-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="t-label text-accent-soft">Live demo</p>
              <h2 className="mt-2 text-[22px] font-semibold tracking-tight text-white md:text-[26px]">
                {voiceAgent.demo.title}
              </h2>
            </div>
            <p
              className="t-label inline-flex items-center gap-2.5 rounded-full border border-line px-3.5 py-2 text-mist"
              aria-live="polite"
            >
              <span
                aria-hidden
                className={`h-1.5 w-1.5 ${
                  phase === "listening" || phase === "speaking"
                    ? "bg-accent"
                    : phase === "error" || phase === "unavailable"
                      ? "bg-red-400"
                      : "bg-mist-2"
                }`}
              />
              {statusLabel(phase)}
            </p>
          </div>
          <p className="mt-4 max-w-[560px] text-[14.5px] leading-relaxed text-mist">
            {voiceAgent.demo.instructions}
          </p>
          <p className="t-label mt-3 text-[10.5px] text-mist-2">{voiceAgent.demo.tip}</p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-12">
          <div className="flex flex-col items-center justify-center gap-8 px-5 py-12 md:px-10 lg:col-span-5 lg:py-16">
            <CallOrb phase={phase} reduced={!!reduced} />

            <div className="flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
              {phase === "unavailable" ? (
                <Link
                  href="/contact?service=ai&capability=AI%20Voice%20Agents"
                  data-analytics="voice-demo-unavailable-contact"
                  className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-accent px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-accent-bright"
                >
                  Contact us for a live walkthrough
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => void startConversation()}
                    disabled={!canStart}
                    aria-describedby="voice-demo-status"
                    className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-accent px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-accent-bright disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Start Conversation
                  </button>
                  <button
                    type="button"
                    onClick={() => void endConversation()}
                    disabled={!canEnd}
                    className="inline-flex min-h-12 flex-1 items-center justify-center rounded-full border border-line-strong px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white/40 hover:bg-white/[0.04] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    End Conversation
                  </button>
                </>
              )}
            </div>

            <p id="voice-demo-status" className="sr-only" aria-live="polite">
              {statusLabel(phase)}
              {errorMessage ? `. ${errorMessage}` : ""}
            </p>

            <AnimatePresence>
              {(phase === "unavailable" || errorMessage) && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="max-w-sm border border-line bg-ink/80 px-5 py-4 text-center text-[13.5px] leading-relaxed text-mist"
                >
                  {phase === "unavailable" ? (
                    <>
                      Demo currently unavailable. The agent credentials are not
                      connected on this deployment. Email{" "}
                      <a
                        href={`mailto:${site.email}?subject=${encodeURIComponent("Voice agent demo walkthrough")}`}
                        className="text-accent-soft underline-offset-2 hover:underline"
                      >
                        {site.email}
                      </a>{" "}
                      and we will set up a live session.
                    </>
                  ) : (
                    errorMessage
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border-t border-line lg:col-span-7 lg:border-t-0 lg:border-l">
            <div className="flex h-full min-h-[280px] flex-col px-5 py-6 md:px-8 md:py-8">
              <p className="t-label text-mist-2">Live transcript</p>
              <div
                className="mt-5 flex-1 space-y-4 overflow-y-auto pr-1"
                aria-live="polite"
                aria-relevant="additions"
              >
                {transcript.length === 0 ? (
                  <p className="text-[14.5px] leading-relaxed text-mist-2">
                    {phase === "unavailable"
                      ? "Transcript appears here once a live agent session is connected."
                      : "Start a conversation to see what you and the agent say."}
                  </p>
                ) : (
                  transcript.map((line) => (
                    <div key={line.id} className="flex gap-3">
                      <span
                        className={`t-label mt-0.5 w-14 shrink-0 ${
                          line.role === "agent" ? "text-accent-soft" : "text-mist-2"
                        }`}
                      >
                        {line.role === "agent" ? "Agent" : "You"}
                      </span>
                      <p className="text-[14.5px] leading-relaxed text-mist">{line.text}</p>
                    </div>
                  ))
                )}
                <div ref={transcriptEndRef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CallOrb({ phase, reduced }: { phase: DemoPhase; reduced: boolean }) {
  const active = phase === "listening" || phase === "speaking";
  const speaking = phase === "speaking";

  return (
    <div className="relative flex h-40 w-40 items-center justify-center md:h-48 md:w-48" aria-hidden>
      {!reduced && active && (
        <>
          <motion.span
            className="absolute inset-0 rounded-full border border-accent/40"
            animate={{ scale: [1, 1.18], opacity: [0.55, 0] }}
            transition={{ duration: speaking ? 1.1 : 1.8, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.span
            className="absolute inset-3 rounded-full border border-accent/25"
            animate={{ scale: [1, 1.12], opacity: [0.4, 0] }}
            transition={{
              duration: speaking ? 1.1 : 1.8,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.35,
            }}
          />
        </>
      )}
      <div
        className={`relative flex h-28 w-28 items-center justify-center border md:h-32 md:w-32 ${
          active ? "border-accent bg-accent-dim" : "border-line-strong bg-ink"
        }`}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className={active ? "text-accent-soft" : "text-mist-2"}>
          <path
            d="M12 3.5a3.2 3.2 0 0 0-3.2 3.2v4.6a3.2 3.2 0 1 0 6.4 0V6.7A3.2 3.2 0 0 0 12 3.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M6.5 11.5a5.5 5.5 0 0 0 11 0M12 17v3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

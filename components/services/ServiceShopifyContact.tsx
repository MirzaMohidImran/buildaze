"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  useCallback,
  useRef,
  useState,
  type FormEvent,
  type MouseEvent,
} from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/data/site";

const PROJECT_TYPES = [
  "New Shopify Store",
  "Store Redesign",
  "Conversion Rate Optimization",
  "Performance & Speed",
  "Custom Shopify Development",
  "Migration to Shopify",
  "Shopify Plus",
  "Ongoing Development & Support",
  "Not Sure Yet",
] as const;

const NEXT_STEPS = [
  {
    index: "01",
    text: "We review your store and request.",
  },
  {
    index: "02",
    text: "We identify the most relevant areas to discuss.",
  },
  {
    index: "03",
    text: "We have a focused conversation about the problem.",
  },
  {
    index: "04",
    text: "If there is a good fit, we define scope, timeline, and next steps.",
  },
] as const;

interface FieldErrors {
  name?: string;
  email?: string;
  challenge?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  textarea = false,
  autoComplete,
  placeholder,
  required,
  hint,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  textarea?: boolean;
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
  hint?: string;
}) {
  const [focused, setFocused] = useState(false);
  const border = error
    ? "border-red-400/60"
    : focused
      ? "border-accent shadow-[0_0_0_1px_rgba(37,99,235,0.35)]"
      : "border-line hover:border-line-strong";

  return (
    <div>
      <label
        htmlFor={id}
        className={`t-label mb-3 block transition-colors ${
          focused || error
            ? error
              ? "text-red-300"
              : "text-accent-soft"
            : "text-mist-2"
        }`}
      >
        {label}
        {required && (
          <span className="sr-only"> (required)</span>
        )}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={5}
          required={required}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : hint ? `${id}-hint` : undefined
          }
          className={`w-full resize-none border bg-white/[0.02] px-4 py-3.5 text-[15.5px] text-white placeholder:text-mist-2/70 transition-[border-color,box-shadow] duration-300 focus:outline-none ${border}`}
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          value={value}
          autoComplete={autoComplete}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full border bg-white/[0.02] px-4 py-3.5 text-[15.5px] text-white placeholder:text-mist-2/70 transition-[border-color,box-shadow] duration-300 focus:outline-none ${border}`}
        />
      )}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-2.5 text-[13px] text-mist-2">
          {hint}
        </p>
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2.5 text-[12.5px] text-red-300"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServiceShopifyContact({
  sectionIndex = "12",
}: {
  sectionIndex?: string;
}) {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [glow, setGlow] = useState({ x: 58, y: 40 });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [storeUrl, setStoreUrl] = useState("");
  const [projectType, setProjectType] = useState("");
  const [challenge, setChallenge] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      if (reduced || !sectionRef.current) return;
      if (!window.matchMedia("(pointer: fine)").matches) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setGlow({ x, y });
    },
    [reduced],
  );

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please enter a valid work email.";
    }
    if (challenge.trim().length < 12) {
      next.challenge =
        "Tell us a little more about what you are trying to improve.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (honeypot.trim()) return;
    if (!validate()) return;

    setStatus("submitting");

    const subject = `Shopify strategy request — ${name.trim()}`;
    const body = [
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      storeUrl.trim() && `Shopify store: ${storeUrl.trim()}`,
      projectType && `Help needed: ${projectType}`,
      "",
      "What they are trying to improve:",
      challenge.trim(),
    ]
      .filter(Boolean)
      .join("\n");

    try {
      // Mailto keeps this functional without inventing a backend.
      // Swap for an API route when one exists.
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      await new Promise((r) => setTimeout(r, 400));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const strategyMailto = `mailto:${site.email}?subject=${encodeURIComponent(
    "Shopify strategy call request",
  )}&body=${encodeURIComponent(
    "Hi Buildaze,\n\nI'd like to book a 30-minute Shopify strategy call.\n\nStore URL:\nWhat I'm trying to improve:\n",
  )}`;

  return (
    <section
      ref={sectionRef}
      id="contact"
      aria-labelledby="shopify-contact-heading"
      onMouseMove={onMouseMove}
      className="relative scroll-mt-20 overflow-hidden border-t border-line py-24 md:py-32"
    >
      <div aria-hidden className="build-grid fade-edges absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background: `radial-gradient(ellipse 45% 40% at ${glow.x}% ${glow.y}%, rgba(37,99,235,0.11), transparent 70%)`,
          transition: reduced ? undefined : "background 0.45s ease-out",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{
          background:
            "radial-gradient(ellipse 70% 45% at 50% 20%, rgba(37,99,235,0.1), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionLabel index={sectionIndex} label="Let's talk Shopify" />
        <p className="t-label mt-8 text-accent-soft">Start with the problem</p>
        <RevealText
          as="h2"
          id="shopify-contact-heading"
          text="Let's talk about your Shopify store."
          className="text-h2 mt-5 max-w-[860px] font-semibold text-white"
        />
        <Reveal delay={0.15} className="mt-6 max-w-[560px] space-y-4">
          <p className="text-[16px] leading-relaxed text-mist md:text-[17px]">
            Tell us what is happening with your store, what you are trying to
            improve, and where the current experience is falling short.
          </p>
          <p className="text-[16px] leading-relaxed text-mist md:text-[17px]">
            We will review the context, identify the most relevant next step,
            and let you know whether Buildaze is the right partner to help.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Form — ~60% */}
          <div className="lg:col-span-7 xl:col-span-7">
            <Reveal y={28} className="border border-line bg-ink/70 p-6 backdrop-blur-sm md:p-10">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    role="status"
                    aria-live="polite"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="flex min-h-[420px] flex-col justify-center"
                  >
                    <p className="t-label text-accent-soft">Thank you</p>
                    <h3 className="mt-5 text-h3 font-semibold text-white">
                      We received your Shopify project details.
                    </h3>
                    <p className="mt-5 max-w-[440px] text-[15.5px] leading-relaxed text-mist">
                      Our team will review the information and follow up with
                      the appropriate next step. If your mail client opened a
                      draft to{" "}
                      <span className="text-accent-soft">{site.email}</span>,
                      send it to complete the request.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="t-label mt-10 self-start border-b border-line-strong pb-1 text-mist transition-colors hover:text-white"
                    >
                      Send another request
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={onSubmit}
                    noValidate
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-7"
                  >
                    {/* Honeypot */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -left-[9999px] opacity-0"
                    >
                      <label htmlFor="shopify-company-website">Company website</label>
                      <input
                        id="shopify-company-website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                      <Field
                        id="shopify-name"
                        label="Your name"
                        value={name}
                        onChange={setName}
                        error={errors.name}
                        autoComplete="name"
                        required
                      />
                      <Field
                        id="shopify-email"
                        label="Work email"
                        type="email"
                        value={email}
                        onChange={setEmail}
                        error={errors.email}
                        autoComplete="email"
                        required
                      />
                    </div>

                    <Field
                      id="shopify-store"
                      label="Shopify store URL"
                      type="url"
                      value={storeUrl}
                      onChange={setStoreUrl}
                      autoComplete="url"
                      placeholder="yourstore.com"
                    />

                    <fieldset>
                      <legend className="t-label mb-3.5 text-mist-2">
                        What do you need help with?
                      </legend>
                      <div className="flex flex-wrap gap-2">
                        {PROJECT_TYPES.map((option) => {
                          const selected = projectType === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              aria-pressed={selected}
                              onClick={() =>
                                setProjectType(selected ? "" : option)
                              }
                              className={`border px-3.5 py-2.5 text-[13px] transition-colors duration-300 md:text-[13.5px] ${
                                selected
                                  ? "border-accent bg-accent-dim text-white"
                                  : "border-line text-mist hover:border-white/30 hover:text-white"
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    <Field
                      id="shopify-challenge"
                      label="What are you trying to improve?"
                      value={challenge}
                      onChange={setChallenge}
                      error={errors.challenge}
                      textarea
                      required
                      hint="Tell us briefly what is happening with your store, what is not working, or what you would like to build."
                    />

                    <div>
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        data-analytics="shopify-contact-submit"
                        className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_32px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:bg-accent-bright active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                      >
                        {status === "submitting"
                          ? "Sending…"
                          : "Request a Shopify Strategy Call"}
                        {status !== "submitting" && (
                          <svg
                            aria-hidden
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          >
                            <path
                              d="M1 7h11M8 2.5 12.5 7 8 11.5"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </button>

                      <div className="mt-5 max-w-[420px] space-y-1.5 text-[13.5px] leading-relaxed text-mist-2">
                        <p>No-obligation conversation.</p>
                        <p>No generic sales pitch.</p>
                        <p>
                          Just a clear discussion about your Shopify store, the
                          problem, and the most sensible next step.
                        </p>
                      </div>

                      <AnimatePresence>
                        {status === "error" && (
                          <motion.p
                            role="alert"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="mt-5 text-[14px] text-red-300"
                          >
                            We couldn&apos;t send your request. Please try again
                            or email{" "}
                            <a
                              href={`mailto:${site.email}`}
                              className="underline underline-offset-2"
                            >
                              {site.email}
                            </a>
                            .
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </Reveal>
          </div>

          {/* Reassurance — ~40% */}
          <aside className="lg:col-span-5 xl:col-span-5">
            <Reveal delay={0.2} className="lg:sticky lg:top-32">
              <p className="t-label text-accent-soft">What happens next</p>
              <ol className="mt-8 space-y-0">
                {NEXT_STEPS.map((step, i) => (
                  <li
                    key={step.index}
                    className={`relative flex gap-5 border-l border-line py-5 pl-6 first:pt-0 last:pb-0 ${
                      i === NEXT_STEPS.length - 1 ? "" : ""
                    }`}
                  >
                    <span
                      aria-hidden
                      className="absolute top-6 -left-[5px] h-[9px] w-[9px] border border-accent bg-ink first:top-1"
                      style={{ top: i === 0 ? "2px" : undefined }}
                    />
                    <div>
                      <span className="t-label text-mist-2">{step.index}</span>
                      <p className="mt-2 text-[15.5px] leading-snug text-white md:text-[16px]">
                        {step.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-10 border border-line p-6 md:p-7">
                <p className="text-[15px] leading-relaxed text-mist">
                  You do not need to know whether you need a redesign, CRO
                  project, custom development, or a full rebuild.
                </p>
                <p className="mt-3 text-[15px] leading-relaxed text-white">
                  That is part of what the first conversation is for.
                </p>
              </div>

              <div className="mt-8 border-t border-line pt-8">
                <p className="t-label text-mist-2">Prefer to talk first?</p>
                <p className="mt-4 max-w-[360px] text-[15px] leading-relaxed text-mist">
                  Book a 30-minute Shopify strategy call and walk us through
                  your store, current challenges, and what you are trying to
                  achieve.
                </p>
                <a
                  href={strategyMailto}
                  data-analytics="shopify-strategy-call"
                  className="group mt-5 inline-flex items-center gap-2.5 text-[15px] font-medium text-white"
                >
                  <span className="border-b border-accent pb-0.5 transition-colors group-hover:text-accent-soft">
                    Book a Strategy Call
                  </span>
                  <svg
                    aria-hidden
                    width="13"
                    height="13"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="text-accent transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M1 7h11M8 2.5 12.5 7 8 11.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  buildMailtoDraft,
  CONTACT_PAGE_SERVICES,
  CONTACT_TIMELINES,
  mapContactPageServiceToPayload,
  resolveContactPageService,
} from "@/lib/contact/schema";
import {
  isWeb3FormsConfigured,
  submitWeb3FormsInquiry,
} from "@/lib/contact/web3forms";
import { contactPage } from "@/lib/data/contact-page";
import { site } from "@/lib/data/site";

function track(name: string) {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", name, { event_category: "engagement" });
  }
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: "buildaze_interaction", event_name: name });
}

type FormStatus = "idle" | "pending" | "success" | "error" | "unconfigured";

interface FieldErrors {
  name?: string;
  email?: string;
  service?: string;
  details?: string;
  form?: string;
}

const glassShell =
  "relative overflow-hidden rounded-panel border border-white/15 bg-gradient-to-b from-white/[0.12] to-white/[0.04] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_0_1px_rgba(37,99,235,0.12),0_28px_70px_-32px_rgba(0,0,0,0.65)] backdrop-blur-2xl md:p-8";

const fieldLabel =
  "mb-1.5 block text-[13px] font-medium tracking-wide text-white/80";

const fieldControl =
  "w-full rounded-control border border-white/12 bg-white/[0.06] px-3.5 py-2.5 text-[15px] text-white placeholder:text-white/35 transition-colors focus:border-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/35";

const fieldError = "mt-1.5 text-[12px] text-red-300";

function GlassField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  autoComplete,
  required,
  textarea,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  autoComplete?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className={fieldLabel}>
        {label}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          value={value}
          placeholder={placeholder}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${fieldControl} resize-y ${error ? "border-red-400/60" : ""}`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          autoComplete={autoComplete}
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${fieldControl} ${error ? "border-red-400/60" : ""}`}
        />
      )}
      {error ? (
        <p id={`${id}-error`} role="alert" className={fieldError}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

function GlassSelect({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  required,
  error,
  optional,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  placeholder: string;
  required?: boolean;
  error?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className={fieldLabel}>
        {label}
        {optional ? (
          <span className="ml-1.5 font-normal text-white/40">Optional</span>
        ) : null}
        {required ? <span className="sr-only"> (required)</span> : null}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        className={`${fieldControl} appearance-none bg-[length:12px] bg-[right_14px_center] bg-no-repeat pr-10 ${
          error ? "border-red-400/60" : ""
        } ${!value ? "text-white/40" : ""}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none'%3E%3Cpath d='M1 1.5 6 6.5 11 1.5' stroke='%23ffffff99' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        }}
      >
        <option value="" disabled={required} className="bg-[#0a0a0a] text-white">
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#0a0a0a] text-white"
          >
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} role="alert" className={fieldError}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactInquiryForm({
  initialService = "",
  initialCapability = "",
  source = "contact-page",
}: {
  initialService?: string;
  initialCapability?: string;
  /** Label included in the notification email (which page/form submitted). */
  source?: string;
}) {
  const honeypotId = useId();
  const searchParams = useSearchParams();
  const startedRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(() =>
    resolveContactPageService(initialService),
  );
  const [capability, setCapability] = useState(() =>
    initialCapability.trim().slice(0, 80),
  );
  const [problemContext, setProblemContext] = useState("");
  const [timeline, setTimeline] = useState("");
  const [details, setDetails] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const serviceQuery = searchParams.get("service");
  const capabilityQuery = searchParams.get("capability");
  const problemQuery = searchParams.get("problem");

  useEffect(() => {
    if (serviceQuery) {
      setService(resolveContactPageService(serviceQuery));
    } else if (initialService) {
      setService(resolveContactPageService(initialService));
    }
    if (capabilityQuery) {
      setCapability(capabilityQuery.trim().slice(0, 80));
    } else if (initialCapability) {
      setCapability(initialCapability.trim().slice(0, 80));
    }
    if (problemQuery) {
      setProblemContext(problemQuery.trim().slice(0, 200));
    }
  }, [
    initialService,
    initialCapability,
    serviceQuery,
    capabilityQuery,
    problemQuery,
  ]);

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    track("enquiry-start");
  };

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!service) {
      next.service = "Please choose what you need help with.";
    }
    if (details.trim().length < 10) {
      next.details = "A sentence or two helps us respond usefully.";
    }
    setErrors(next);
    if (Object.keys(next).length) {
      track("enquiry-validation-failure");
      const firstKey = Object.keys(next)[0];
      const el = formRef.current?.querySelector<HTMLElement>(`#${firstKey}`);
      el?.focus?.();
      return false;
    }
    return true;
  };

  const mapped = mapContactPageServiceToPayload(service);
  const detailsWithContext = [
    problemContext && `Problem context: ${problemContext}`,
    capability && !mapped.capability && `Capability context: ${capability}`,
    details.trim(),
  ]
    .filter(Boolean)
    .join("\n\n");

  const openEmailDraft = () => {
    track("enquiry-email-fallback");
    window.location.href = buildMailtoDraft({
      name: name.trim(),
      email: email.trim(),
      details: detailsWithContext,
      service: mapped.service,
      capability: mapped.capability || capability || undefined,
      timeline: timeline || undefined,
      to: site.email,
      subjectPrefix: "Project enquiry",
    });
  };

  const resetForm = () => {
    setStatus("idle");
    setStatusMessage("");
    setName("");
    setEmail("");
    setService("");
    setCapability("");
    setTimeline("");
    setDetails("");
    setErrors({});
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "pending") return;
    if (!validate()) return;

    if (honeypot.trim()) {
      track("contact-form-submit");
      setStatus("success");
      setStatusMessage(contactPage.form.successMessage);
      return;
    }

    if (!isWeb3FormsConfigured()) {
      track("enquiry-unconfigured");
      setStatus("unconfigured");
      setStatusMessage(
        "Enquiry delivery is not configured on this deployment. Retry later, or email team@buildaze.com — a draft is not a received inquiry.",
      );
      return;
    }

    setStatus("pending");
    setStatusMessage("");

    try {
      const result = await submitWeb3FormsInquiry({
        name: name.trim(),
        email: email.trim(),
        details: detailsWithContext,
        service: mapped.service,
        capability: mapped.capability || capability || undefined,
        timeline: timeline || undefined,
        source,
      });

      if (result.ok) {
        track("contact-form-submit");
        setStatus("success");
        setStatusMessage(contactPage.form.successMessage);
        return;
      }

      track("enquiry-submission-failure");
      setStatus("error");
      setStatusMessage(
        result.message ||
          "We could not accept the inquiry. Please try again. Your details are still on the form.",
      );
    } catch {
      track("enquiry-submission-failure");
      setStatus("error");
      setStatusMessage(
        "We could not accept the inquiry. Please try again. Your details are still on the form.",
      );
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className={`${glassShell} flex min-h-[220px] flex-col justify-center`}
      >
        <span
          aria-hidden
          className="flex h-11 w-11 items-center justify-center rounded-control border border-accent/40 bg-accent-dim"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 14 14"
            fill="none"
            className="text-accent-soft"
          >
            <path
              d="M2 7.5 5.5 11 12 3.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-5 text-[22px] font-semibold tracking-tight text-white">
          Inquiry received.
        </h3>
        <p className="mt-2 max-w-[440px] text-[14.5px] leading-relaxed text-mist">
          {statusMessage || contactPage.form.successMessage}
        </p>
        <button
          type="button"
          onClick={resetForm}
          className="t-label mt-6 self-start border-b border-white/20 pb-0.5 text-mist-2 transition-colors hover:text-accent-soft"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      onFocus={markStarted}
      className={`${glassShell} space-y-5`}
      aria-busy={status === "pending"}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
      >
        <label htmlFor={honeypotId}>Website</label>
        <input
          id={honeypotId}
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <GlassField
          id="name"
          label="Name"
          value={name}
          onChange={setName}
          error={errors.name}
          autoComplete="name"
          required
        />
        <GlassField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          error={errors.email}
          autoComplete="email"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <GlassSelect
          id="service"
          label="Service"
          value={service}
          onChange={(v) => {
            setService(v);
            if (errors.service) {
              setErrors((prev) => ({ ...prev, service: undefined }));
            }
          }}
          options={CONTACT_PAGE_SERVICES}
          placeholder="What do you need?"
          required
          error={errors.service}
        />
        <GlassSelect
          id="timeline"
          label="Timeline"
          value={timeline}
          onChange={setTimeline}
          options={CONTACT_TIMELINES}
          placeholder="Prefer a timeline?"
          optional
        />
      </div>

      {problemContext ? (
        <p className="text-[12.5px] text-mist-2">
          Context: <span className="text-mist">{problemContext}</span>
        </p>
      ) : null}

      <GlassField
        id="details"
        label="Project details"
        value={details}
        onChange={setDetails}
        error={errors.details}
        textarea
        required
        placeholder={contactPage.form.detailsPlaceholder}
      />

      {(status === "error" || status === "unconfigured") && (
        <div
          role="alert"
          aria-live="assertive"
          className="space-y-3 rounded-control border border-red-400/25 bg-red-500/10 px-4 py-3"
        >
          <p className="text-[13.5px] leading-relaxed text-mist">{statusMessage}</p>
          <div className="flex flex-wrap gap-2">
            {status === "error" && (
              <button
                type="submit"
                className="min-h-10 rounded-full border border-white/15 px-4 py-2 text-[13px] text-white transition-colors hover:border-accent"
              >
                Retry
              </button>
            )}
            <button
              type="button"
              onClick={openEmailDraft}
              className="min-h-10 rounded-full border border-accent/50 bg-accent-dim px-4 py-2 text-[13px] text-white transition-colors hover:bg-accent"
            >
              Email {site.email}
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "pending"}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-7 py-2.5 text-[14.5px] font-medium text-white transition-colors hover:bg-accent-bright focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "pending" ? "Sending…" : contactPage.form.submitLabel}
        </button>
        <p className="text-[12px] leading-relaxed text-white/40 sm:max-w-[280px] sm:text-right">
          {contactPage.form.privacyNote}{" "}
          <Link
            href="/privacy-policy"
            className="text-accent-soft underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

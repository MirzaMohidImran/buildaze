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

function ChipGroup({
  legend,
  options,
  value,
  onChange,
  required,
  error,
  errorId,
}: {
  legend: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
  errorId?: string;
}) {
  return (
    <fieldset aria-required={required} aria-describedby={error ? errorId : undefined}>
      <legend className="mb-3.5 text-[14px] font-medium text-[var(--text-on-light,#0a0a0a)]">
        {legend}
        {required ? (
          <span className="t-label ml-2 font-normal text-[var(--text-on-light-muted,#64748b)]">
            Required
          </span>
        ) : (
          <span className="t-label ml-2 font-normal text-[var(--text-on-light-muted,#64748b)]">
            Optional
          </span>
        )}
      </legend>
      <div className="flex flex-wrap gap-2" role="group">
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(selected && !required ? "" : option)}
              className={`min-h-11 rounded-full border px-4 py-2.5 text-[13.5px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 ${
                selected
                  ? "border-accent bg-accent-dim text-[var(--text-on-light,#0a0a0a)]"
                  : "border-[var(--border-on-light,#E2E8F0)] text-mist hover:border-accent hover:text-[var(--text-on-light,#0a0a0a)]"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {error ? (
        <p id={errorId} role="alert" className="mt-2 text-[12.5px] text-red-300">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}

function TextField({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  autoComplete,
  required,
  optional,
  textarea,
  placeholder,
  hint,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
  textarea?: boolean;
  placeholder?: string;
  hint?: string;
}) {
  const describedBy = [
    error ? `${id}-error` : null,
    hint ? `${id}-hint` : null,
  ]
    .filter(Boolean)
    .join(" ");

  const shared =
    "mt-2 w-full rounded-control border bg-white px-4 py-3 text-[16px] text-[var(--text-on-light,#0a0a0a)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40";
  const border = error
    ? "border-red-400/70"
    : "border-[var(--border-on-light,#E2E8F0)] focus:border-accent";

  return (
    <div>
      <label
        htmlFor={id}
        className="text-[14px] font-medium text-[var(--text-on-light,#0a0a0a)]"
      >
        {label}
        {required ? (
          <span className="t-label ml-2 font-normal text-[var(--text-on-light-muted,#64748b)]">
            Required
          </span>
        ) : null}
        {optional ? (
          <span className="t-label ml-2 font-normal text-[var(--text-on-light-muted,#64748b)]">
            Optional
          </span>
        ) : null}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={5}
          value={value}
          placeholder={placeholder}
          required={required}
          aria-invalid={!!error}
          aria-describedby={describedBy || undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${shared} ${border} resize-y`}
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
          aria-describedby={describedBy || undefined}
          onChange={(e) => onChange(e.target.value)}
          className={`${shared} ${border}`}
        />
      )}
      {hint ? (
        <p id={`${id}-hint`} className="mt-2 text-[12.5px] text-mist-2">
          {hint}
        </p>
      ) : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[12.5px] text-red-300">
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
  const [company, setCompany] = useState("");
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
      const el = formRef.current?.querySelector<HTMLElement>(
        firstKey === "service" ? "#service-group button" : `#${firstKey}`,
      );
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
      company: company.trim() || undefined,
      details: detailsWithContext,
      service: mapped.service,
      capability: mapped.capability || capability || undefined,
      timeline: timeline || undefined,
      to: site.email,
      subjectPrefix: "Project enquiry",
    });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "pending") return;
    if (!validate()) return;

    // Honeypot filled — pretend success without calling the provider.
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
        company: company.trim() || undefined,
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
        className="flex min-h-[360px] flex-col justify-center rounded-panel border border-[var(--border-on-light,#E2E8F0)] bg-white p-7 md:p-10 text-[var(--text-on-light,#0a0a0a)]"
      >
        <span
          aria-hidden
          className="flex h-14 w-14 items-center justify-center rounded-control border border-accent bg-accent-dim"
        >
          <svg
            width="22"
            height="22"
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
        <h3 className="text-h3 mt-8 font-semibold text-[var(--text-on-light,#0a0a0a)]">
          Inquiry received.
        </h3>
        <p className="mt-4 max-w-[480px] text-[15.5px] leading-relaxed text-[var(--text-on-light-secondary,#475569)]">
          {statusMessage || contactPage.form.successMessage}
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setStatusMessage("");
            setName("");
            setEmail("");
            setCompany("");
            setService("");
            setCapability("");
            setTimeline("");
            setDetails("");
            setErrors({});
          }}
          className="t-label mt-10 border-b border-[var(--border-on-light,#E2E8F0)] pb-1 text-[var(--text-on-light-muted,#64748b)] transition-colors hover:text-accent"
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
      className="surface-card relative space-y-8 rounded-panel border border-line bg-white p-7 md:p-10"
      aria-busy={status === "pending"}
    >
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <TextField
          id="name"
          label="Your name"
          value={name}
          onChange={setName}
          error={errors.name}
          autoComplete="name"
          required
        />
        <TextField
          id="email"
          label="Email address"
          type="email"
          value={email}
          onChange={setEmail}
          error={errors.email}
          autoComplete="email"
          required
        />
      </div>

      <div id="service-group">
        <ChipGroup
          legend="What do you need help with?"
          options={CONTACT_PAGE_SERVICES}
          value={service}
          onChange={(v) => {
            setService(v);
            if (errors.service) {
              setErrors((prev) => ({ ...prev, service: undefined }));
            }
          }}
          required
          error={errors.service}
          errorId="service-error"
        />
      </div>

      <TextField
        id="company"
        label="Company or website"
        value={company}
        onChange={setCompany}
        autoComplete="organization"
        optional
      />

      {problemContext ? (
        <p className="text-[13.5px] text-mist-2">
          Problem context: <span className="text-mist">{problemContext}</span>
        </p>
      ) : null}

      <ChipGroup
        legend="Preferred timeline"
        options={CONTACT_TIMELINES}
        value={timeline}
        onChange={setTimeline}
      />

      <TextField
        id="details"
        label="Project details"
        value={details}
        onChange={setDetails}
        error={errors.details}
        textarea
        required
        placeholder={contactPage.form.detailsPlaceholder}
      />

      <p className="text-[13px] leading-relaxed text-[var(--text-on-light-muted,#64748b)]">
        {contactPage.form.privacyNote}{" "}
        <Link
          href="/privacy-policy"
          className="text-accent underline-offset-2 hover:underline"
        >
          Privacy Policy
        </Link>
        .
      </p>

      {(status === "error" || status === "unconfigured") && (
        <div
          role="alert"
          aria-live="assertive"
          className="space-y-4 border border-line bg-ink-2/80 p-5"
        >
          <p className="text-[14.5px] leading-relaxed text-mist">
            {statusMessage}
          </p>
          <div className="flex flex-wrap gap-3">
            {status === "error" && (
              <button
                type="submit"
                className="min-h-11 rounded-full border border-line-strong px-4 py-2.5 text-[13.5px] text-white transition-colors hover:border-accent"
              >
                Retry
              </button>
            )}
            <button
              type="button"
              onClick={openEmailDraft}
              className="min-h-11 rounded-full border border-accent bg-accent-dim px-4 py-2.5 text-[13.5px] text-white transition-colors hover:bg-accent"
            >
              Open email draft to {site.email}
            </button>
          </div>
          <p className="text-[12.5px] text-mist-2">
            Opening an email draft is not a received inquiry — you still need to
            send it from your mail client.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "pending"}
        className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-accent-bright focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "pending" ? "Sending…" : contactPage.form.submitLabel}
      </button>
    </form>
  );
}

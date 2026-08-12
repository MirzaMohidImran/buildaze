"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RevealText } from "@/components/motion/RevealText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/lib/data/site";

const PROJECT_TYPES = ["AI Development", "SaaS Development", "Web Development", "Ecommerce"] as const;

function resolveProjectType(value: string): string {
  if (!value) return "";
  if ((PROJECT_TYPES as readonly string[]).includes(value)) return value;
  const match = PROJECT_TYPES.find(
    (t) => value === t || value.startsWith(t) || t.startsWith(value.split(" ")[0]),
  );
  if (match) return match;
  if (/ecommerce|shopify/i.test(value)) return "Ecommerce";
  return "";
}

const BUDGETS = ["Under $10k", "$10k – $25k", "$25k – $50k", "$50k+"] as const;
const TIMELINES = ["As soon as possible", "Within 1–3 months", "Still exploring"] as const;

interface FieldErrors {
  name?: string;
  email?: string;
  details?: string;
}

function ChipGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend className="t-label mb-3.5 text-mist-2">{label}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(selected ? "" : option)}
              className={`border px-4 py-2.5 text-[13.5px] transition-all duration-300 ${
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
  );
}

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  textarea = false,
  autoComplete,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  textarea?: boolean;
  autoComplete?: string;
}) {
  const [focused, setFocused] = useState(false);
  const raised = focused || value.length > 0;
  const shared =
    "peer w-full border-b bg-transparent pt-6 pb-3 text-[16px] text-white transition-colors duration-300 focus:outline-none";
  const borderColor = error
    ? "border-red-400/70"
    : focused
      ? "border-accent"
      : "border-line-strong";

  return (
    <div className="relative">
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-0 transition-all duration-300 ${
          raised ? "t-label top-0 text-accent-soft" : "top-6 text-[16px] text-mist-2"
        } ${error && raised ? "text-red-300" : ""}`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${shared} ${borderColor} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`${shared} ${borderColor}`}
        />
      )}
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-[12.5px] text-red-300"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * The final conversion moment. Submission opens a pre-composed email to
 * team@buildaze.com — honest and functional without a backend; swap the
 * submit handler for an API route when one exists.
 */
export function ContactCTA({
  defaultProjectType = "",
  sectionIndex = "17",
}: {
  defaultProjectType?: string;
  sectionIndex?: string;
} = {}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState(resolveProjectType(defaultProjectType));
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (name.trim().length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid work email.";
    if (details.trim().length < 10) next.details = "A sentence or two helps us respond usefully.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `New project inquiry — ${name}${company ? ` (${company})` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company && `Company: ${company}`,
      projectType && `Project type: ${projectType}`,
      budget && `Budget: ${budget}`,
      timeline && `Timeline: ${timeline}`,
      "",
      details,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative scroll-mt-20 overflow-hidden border-t border-line py-28 md:py-44">
      {/* cinematic closing environment */}
      <div aria-hidden className="build-grid fade-edges absolute inset-0" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 30%, rgba(37,99,235,0.12), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionLabel index={sectionIndex} label="Start a project" />
            <RevealText
              as="h2"
              id="contact-heading"
              text="Have something ambitious to build?"
              className="text-h2 mt-10 font-semibold text-white"
            />
            <Reveal delay={0.2} className="mt-8">
              <p className="max-w-[440px] text-lead text-mist">
                Tell us what you&apos;re building, where you are today, and
                what needs to happen next. We&apos;ll come back with a
                technical point of view — not a sales pitch.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="mt-12">
              <div className="space-y-5">
                <a
                  href={`mailto:${site.email}`}
                  data-analytics="contact-email-click"
                  className="group inline-flex items-center gap-3 font-mono text-[17px] text-white transition-colors hover:text-accent-soft"
                >
                  <span aria-hidden className="h-1.5 w-1.5 bg-accent" />
                  {site.email}
                </a>
                <ul className="t-label space-y-2.5 text-mist-2">
                  <li>Response within one business day</li>
                  <li>Scoping workshop available within the week</li>
                  <li>Worldwide, remote-first</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal y={40} delay={0.15}>
              <div className="relative border border-line bg-ink/80 p-7 backdrop-blur-sm md:p-12">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="flex min-h-[420px] flex-col items-start justify-center"
                    >
                      <span aria-hidden className="flex h-14 w-14 items-center justify-center border border-accent bg-accent-dim">
                        <svg width="22" height="22" viewBox="0 0 14 14" fill="none" className="text-accent-soft">
                          <path d="M2 7.5 5.5 11 12 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <h3 className="text-h3 mt-8 font-semibold text-white">Your message is on its way.</h3>
                      <p className="mt-4 max-w-[440px] text-[15.5px] leading-relaxed text-mist">
                        We&apos;ve opened a pre-filled email to{" "}
                        <span className="text-accent-soft">{site.email}</span> in your mail
                        client — hit send and we&apos;ll reply within one business day.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="t-label mt-10 border-b border-line-strong pb-1 text-mist transition-colors hover:text-white"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={onSubmit}
                      noValidate
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, y: -12 }}
                      className="space-y-9"
                    >
                      <div className="grid grid-cols-1 gap-x-8 gap-y-9 md:grid-cols-2">
                        <Field id="name" label="Your name" value={name} onChange={setName} error={errors.name} autoComplete="name" />
                        <Field id="email" label="Work email" type="email" value={email} onChange={setEmail} error={errors.email} autoComplete="email" />
                      </div>
                      <Field id="company" label="Company (optional)" value={company} onChange={setCompany} autoComplete="organization" />
                      <ChipGroup label="What are you building?" options={PROJECT_TYPES} value={projectType} onChange={setProjectType} />
                      <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
                        <ChipGroup label="Estimated budget" options={BUDGETS} value={budget} onChange={setBudget} />
                        <ChipGroup label="Target timeline" options={TIMELINES} value={timeline} onChange={setTimeline} />
                      </div>
                      <Field id="details" label="Project details" value={details} onChange={setDetails} error={errors.details} textarea />
                      <button
                        type="submit"
                        data-analytics="contact-form-submit"
                        className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_32px_-8px_rgba(37,99,235,0.5)] transition-all duration-300 hover:bg-accent-bright active:scale-[0.97]"
                      >
                        Start a Project
                        <svg aria-hidden width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M1 7h11M8 2.5 12.5 7 8 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

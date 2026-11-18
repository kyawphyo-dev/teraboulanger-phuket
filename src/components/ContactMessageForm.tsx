"use client";

import { useState, type FormEvent } from "react";

const ENQUIRY_OPTIONS = [
  "General Enquiry",
  "Wholesale & Business Partnerships",
  "Catering & Event Orders",
  "Custom Croissant & Special Requests",
  "Collaboration",
  "Other",
];

export default function ContactMessageForm() {
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setNotice(
      "This form is not connected to a message service yet. Your message has not been sent.",
    );
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border/70 bg-surface p-5 shadow-sm sm:p-8 lg:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full border border-brand/20"
      />
      <div className="relative">
        <h2 className="font-serif text-[clamp(2rem,4vw,2.75rem)] leading-tight tracking-tight">
          Send a Message
        </h2>
        <p className="mt-2 text-sm text-muted">
          We&apos;ll get back to you as soon as possible.
        </p>

        <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name" name="name" autoComplete="name" />
            <Field
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
            />
          </div>

          <div>
            <label
              htmlFor="enquiry-type"
              className="mb-2 block text-xs font-medium text-text"
            >
              Enquiry Type
            </label>
            <select
              id="enquiry-type"
              name="enquiryType"
              required
              defaultValue=""
              className={fieldClassName}
            >
              <option value="" disabled>
                Select an enquiry type
              </option>
              {ENQUIRY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <Field label="Subject" name="subject" />

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-xs font-medium text-text"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              maxLength={3000}
              className={`${fieldClassName} min-h-32 resize-y`}
            />
          </div>

          <p className="text-xs leading-relaxed text-subtle">
            This preview does not send or store your message. A submission
            service will be connected later.
          </p>

          <div className="flex flex-col items-start gap-4 pt-1 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-7 text-sm font-semibold text-brand-contrast transition-colors duration-200 hover:bg-brand-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-surface disabled:cursor-not-allowed disabled:opacity-50"
            >
              Send Message
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              >
                <path
                  d="M5 12h14m-6-6 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p role="status" aria-live="polite" className="text-xs text-muted">
              {notice}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

const fieldClassName =
  "w-full rounded-md border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-subtle hover:border-border-strong focus:border-brand focus:ring-2 focus:ring-brand/30 disabled:cursor-not-allowed disabled:opacity-50";

function Field({
  label,
  name,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  type?: "text" | "email";
  autoComplete?: string;
}) {
  const id = `contact-${name}`;

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-medium text-text"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        maxLength={name === "name" ? 120 : 160}
        className={fieldClassName}
      />
    </div>
  );
}

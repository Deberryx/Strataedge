"use client";

import { AlertCircle, CheckCircle, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  company: string;
  service: string;
  stage: string;
  message: string;
  website: string;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [status, setStatus] = useState<{ type: "idle" | "success" | "error"; message?: string }>({ type: "idle" });

  async function onSubmit(data: FormData) {
    setStatus({ type: "idle" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json().catch(() => null)) as { message?: string; error?: string } | null;
      if (!response.ok) throw new Error(result?.error ?? "We could not send your request.");

      reset();
      setStatus({
        type: "success",
        message: result?.message ?? "Your request has been sent. We will respond within one to two business days.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "We could not send your request. Please email us directly.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">Name</label>
          <input
            id="name"
            autoComplete="name"
            className="field-control"
            placeholder="Your full name"
            aria-invalid={Boolean(errors.name)}
            {...register("name", {
              required: "Please enter your name.",
              minLength: { value: 2, message: "Please enter at least two characters." },
              maxLength: { value: 100, message: "Please keep your name under 100 characters." },
            })}
          />
          {errors.name && <p className="mt-2 text-sm text-[#9a352b]" role="alert">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="field-label">Work email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="field-control"
            placeholder="you@organization.com"
            aria-invalid={Boolean(errors.email)}
            {...register("email", {
              required: "Please enter your email address.",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email address." },
              maxLength: { value: 254, message: "Please enter a shorter email address." },
            })}
          />
          {errors.email && <p className="mt-2 text-sm text-[#9a352b]" role="alert">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="field-label">Organization <span className="normal-case tracking-normal text-muted">(optional)</span></label>
          <input
            id="company"
            autoComplete="organization"
            className="field-control"
            placeholder="Organization name"
            {...register("company", { maxLength: { value: 120, message: "Please keep this under 120 characters." } })}
          />
          {errors.company && <p className="mt-2 text-sm text-[#9a352b]" role="alert">{errors.company.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className="field-label">Area of interest</label>
          <select id="service" className="field-control" defaultValue="" {...register("service")}>
            <option value="">Select an area</option>
            <option value="Infrastructure & cloud">Infrastructure & cloud</option>
            <option value="Automation & operations">Automation & operations</option>
            <option value="Security & resilience">Security & resilience</option>
            <option value="Technical advisory">Technical advisory</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="stage" className="field-label">Project stage</label>
        <select id="stage" className="field-control" defaultValue="" {...register("stage")}>
          <option value="">Select the closest fit</option>
          <option value="Exploring options">Exploring options</option>
          <option value="Need an assessment">Need an assessment</option>
          <option value="Ready to scope">Ready to scope</option>
          <option value="Active issue">Active issue</option>
          <option value="Ongoing advisory">Ongoing advisory</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="field-label">What would you like to improve?</label>
        <textarea
          id="message"
          rows={7}
          className="field-control resize-y"
          placeholder="Describe the environment, the problem, and any timing we should know about."
          aria-invalid={Boolean(errors.message)}
          {...register("message", {
            required: "Please tell us a little about the challenge.",
            minLength: { value: 20, message: "Please add a little more detail (at least 20 characters)." },
            maxLength: { value: 5000, message: "Please keep your message under 5,000 characters." },
          })}
        />
        {errors.message && <p className="mt-2 text-sm text-[#9a352b]" role="alert">{errors.message.message}</p>}
      </div>

      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-muted">
          By submitting, you agree that StrataEdge may use these details to respond to your request. See our Privacy Policy.
        </p>
        <button type="submit" disabled={isSubmitting} className="button-primary shrink-0 disabled:cursor-not-allowed disabled:opacity-60">
          {isSubmitting ? <><LoaderCircle className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" /> Sending request</> : "Send consultation request"}
        </button>
      </div>

      {status.type !== "idle" && (
        <div
          role="status"
          aria-live="polite"
          className={`flex gap-3 border p-4 text-sm leading-6 ${status.type === "success" ? "border-azure bg-[#eaf2f9] text-navy" : "border-[#b95a4e] bg-[#fbefec] text-[#842f27]"}`}
        >
          {status.type === "success" ? <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" /> : <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />}
          <p>{status.message}</p>
        </div>
      )}
    </form>
  );
}

"use client";

import { AlertCircle, ArrowRight, Check, CheckCircle, LoaderCircle, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { BUSINESS_WEBSITE_PRICE_USD, formatUsd } from "@/lib/pricing";

type ModalId = "free" | "business" | "nonprofit" | null;

const mainTiers = [
  {
    id: "free" as const,
    title: "Free starter website",
    price: "$0",
    badge: "Limited to the first 30 signups",
    features: ["One-page website", "Template-based layout", "Free hosting for 6 months", "Requires signup"],
    btnText: "Claim free website",
    highlight: false,
  },
  {
    id: "business" as const,
    title: "Business website",
    price: formatUsd(BUSINESS_WEBSITE_PRICE_USD),
    badge: "Most popular",
    features: ["3–5 pages", "Mobile responsive", "Contact form + WhatsApp", "Basic SEO"],
    btnText: "Get business website",
    highlight: true,
  },
  {
    id: "enterprise" as const,
    title: "Enterprise solutions",
    price: null,
    badge: "For larger teams",
    features: ["Custom UI/UX + branding", "10+ pages", "Integrations & automation", "Dedicated project team"],
    btnText: "Book a consultation",
    highlight: false,
  },
];

const secondaryCards = [
  {
    title: "SME revamp",
    description: "Redesign and optimization of existing websites.",
    linkText: "Contact us",
    href: "/contact",
  },
  {
    title: "Nonprofit discount — 40% off",
    description: "Special pricing for registered NGOs and charities.",
    linkText: "Apply now",
    modal: "nonprofit" as const,
  },
  {
    title: "Mini business apps",
    description: "Custom internal tools, dashboards, and data apps.",
    linkText: "Discuss a project",
    href: "/contact",
  },
];

export function PricingSection({ checkoutCancelled }: { checkoutCancelled?: boolean }) {
  const [openModal, setOpenModal] = useState<ModalId>(null);

  return (
    <>
      {checkoutCancelled && (
        <div className="site-shell">
          <div role="status" className="mb-10 flex gap-3 border border-line bg-paper-light p-4 text-sm leading-6 text-muted">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-azure" aria-hidden="true" />
            <p>Checkout was cancelled. No payment was taken — you can restart whenever you are ready.</p>
          </div>
        </div>
      )}

      <div className="site-shell">
        <div className="grid gap-5 lg:grid-cols-3">
          {mainTiers.map((tier) => (
            <article
              key={tier.id}
              className={`relative flex flex-col border bg-paper-light p-8 ${
                tier.highlight ? "border-azure shadow-[0_18px_50px_-24px_rgba(45,108,169,0.45)]" : "border-line"
              }`}
            >
              <p
                className={`absolute -top-3 left-8 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] ${
                  tier.highlight ? "bg-azure text-paper-light" : "bg-navy text-paper-light"
                }`}
              >
                {tier.badge}
              </p>

              <h3 className="mt-2 font-heading text-2xl leading-tight">{tier.title}</h3>
              <p className="mt-5 font-heading text-5xl font-medium tracking-[-0.02em]">
                {tier.price ?? <span className="text-3xl leading-[1.35] text-muted">Custom scope</span>}
              </p>
              {tier.id === "business" && <p className="mt-1 text-xs text-muted">One-time payment, secured by Stripe</p>}

              <ul className="mt-8 flex-1 space-y-3 border-t border-line pt-7">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-muted">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-azure" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.id === "enterprise" ? (
                <Link href="/contact" className="button-secondary mt-8 w-full">
                  {tier.btnText}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpenModal(tier.id)}
                  className={`${tier.highlight ? "button-primary" : "button-secondary"} mt-8 w-full`}
                >
                  {tier.btnText}
                </button>
              )}
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-5 border-t border-line pt-10 lg:grid-cols-3">
          {secondaryCards.map((card) => (
            <article key={card.title} className="flex flex-col justify-between border border-line bg-paper-light p-6">
              <div>
                <h3 className="font-heading text-xl leading-tight">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{card.description}</p>
              </div>
              {card.modal ? (
                <button type="button" onClick={() => setOpenModal(card.modal)} className="text-link mt-6 self-start">
                  {card.linkText} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : (
                <Link href={card.href!} className="text-link mt-6 self-start">
                  {card.linkText} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              )}
            </article>
          ))}
        </div>
      </div>

      {openModal === "free" && <FreeSignupModal onClose={() => setOpenModal(null)} />}
      {openModal === "business" && <BusinessCheckoutModal onClose={() => setOpenModal(null)} />}
      {openModal === "nonprofit" && <NonprofitModal onClose={() => setOpenModal(null)} />}
    </>
  );
}

function ModalShell({ title, subtitle, onClose, children }: { title: string; subtitle: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/60 p-4 backdrop-blur-sm"
    >
      <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto border border-line bg-paper-light shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 grid h-10 w-10 place-items-center text-muted transition-colors hover:text-ink"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="px-6 py-10 sm:px-10">
          <h3 className="font-heading text-3xl leading-tight">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
}

function StatusNote({ type, message }: { type: "success" | "error"; message: string }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={`flex gap-3 border p-4 text-sm leading-6 ${
        type === "success" ? "border-azure bg-[#eaf2f9] text-navy" : "border-[#b95a4e] bg-[#fbefec] text-[#842f27]"
      }`}
    >
      {type === "success" ? (
        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      ) : (
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
      )}
      <p>{message}</p>
    </div>
  );
}

function FreeSignupModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", organization: "", phone: "", website: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/pricing-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "free-website" }),
      });
      const data = (await res.json().catch(() => null)) as { message?: string; error?: string } | null;
      if (!res.ok) throw new Error(data?.error ?? "We could not send your request.");
      setStatus("success");
      setMessage(data?.message ?? "Your request has been received.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send your request. Please email us directly.");
    }
  }

  return (
    <ModalShell
      title="Claim your free starter website"
      subtitle="Limited to the first 30 signups. We will confirm availability and next steps by email."
      onClose={onClose}
    >
      {status === "success" ? (
        <div className="space-y-6">
          <StatusNote type="success" message={message} />
          <button type="button" onClick={onClose} className="button-primary w-full">
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="free-name" className="field-label">Full name</label>
            <input id="free-name" required minLength={2} className="field-control" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          </div>
          <div>
            <label htmlFor="free-email" className="field-label">Email</label>
            <input id="free-email" type="email" required className="field-control" placeholder="you@business.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div>
            <label htmlFor="free-org" className="field-label">Business name</label>
            <input id="free-org" required minLength={2} className="field-control" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} />
          </div>
          <div>
            <label htmlFor="free-phone" className="field-label">Phone <span className="normal-case tracking-normal text-muted">(optional)</span></label>
            <input id="free-phone" type="tel" className="field-control" placeholder="+1 555 000 0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          </div>
          <div className="absolute left-[-9999px]" aria-hidden="true">
            <label htmlFor="free-website">Website</label>
            <input id="free-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
          </div>
          {status === "error" && <StatusNote type="error" message={message} />}
          <button type="submit" disabled={status === "loading"} className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
            {status === "loading" ? (
              <>
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" /> Sending
              </>
            ) : (
              "Claim free website"
            )}
          </button>
        </form>
      )}
    </ModalShell>
  );
}

function BusinessCheckoutModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", businessName: "", phone: "", website: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => null)) as { url?: string; error?: string } | null;
      if (!res.ok || !data?.url) throw new Error(data?.error ?? "We could not start checkout.");
      window.location.assign(data.url);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not start checkout. Please try again.");
    }
  }

  return (
    <ModalShell
      title="Get your business website"
      subtitle={`${formatUsd(BUSINESS_WEBSITE_PRICE_USD)} one-time. You will be redirected to Stripe's secure checkout to complete payment.`}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="biz-name" className="field-label">Full name</label>
          <input id="biz-name" required minLength={2} className="field-control" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <label htmlFor="biz-email" className="field-label">Email</label>
          <input id="biz-email" type="email" required className="field-control" placeholder="you@business.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label htmlFor="biz-org" className="field-label">Business name</label>
          <input id="biz-org" required minLength={2} className="field-control" value={form.businessName} onChange={(e) => setForm({ ...form, businessName: e.target.value })} />
        </div>
        <div>
          <label htmlFor="biz-phone" className="field-label">Phone <span className="normal-case tracking-normal text-muted">(optional)</span></label>
          <input id="biz-phone" type="tel" className="field-control" placeholder="+1 555 000 0000" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label htmlFor="biz-website">Website</label>
          <input id="biz-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
        </div>
        {status === "error" && <StatusNote type="error" message={message} />}
        <button type="submit" disabled={status === "loading"} className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
          {status === "loading" ? (
            <>
              <LoaderCircle className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" /> Preparing secure checkout
            </>
          ) : (
            "Proceed to payment"
          )}
        </button>
        <p className="text-center text-xs text-muted">Payments are processed by Stripe. We never see your card details.</p>
      </form>
    </ModalShell>
  );
}

function NonprofitModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ organization: "", name: "", email: "", phone: "", orgWebsite: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/pricing-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "nonprofit" }),
      });
      const data = (await res.json().catch(() => null)) as { message?: string; error?: string } | null;
      if (!res.ok) throw new Error(data?.error ?? "We could not send your application.");
      setStatus("success");
      setMessage(data?.message ?? "Your application has been received.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "We could not send your application. Please email us directly.");
    }
  }

  return (
    <ModalShell
      title="Apply for the nonprofit discount"
      subtitle="Registered NGOs and charities receive 40% off standard packages. We will request your registration certificate by email during review."
      onClose={onClose}
    >
      {status === "success" ? (
        <div className="space-y-6">
          <StatusNote type="success" message={message} />
          <button type="button" onClick={onClose} className="button-primary w-full">
            Close
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="np-org" className="field-label">Organization name</label>
            <input id="np-org" required minLength={2} className="field-control" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="np-name" className="field-label">Contact person</label>
              <input id="np-name" required minLength={2} className="field-control" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div>
              <label htmlFor="np-email" className="field-label">Email</label>
              <input id="np-email" type="email" required className="field-control" placeholder="contact@organization.org" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="np-phone" className="field-label">Phone <span className="normal-case tracking-normal text-muted">(optional)</span></label>
              <input id="np-phone" type="tel" className="field-control" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            </div>
            <div>
              <label htmlFor="np-site" className="field-label">Website <span className="normal-case tracking-normal text-muted">(optional)</span></label>
              <input id="np-site" type="url" className="field-control" placeholder="https://yourorganization.org" value={form.orgWebsite} onChange={(e) => setForm({ ...form, orgWebsite: e.target.value })} />
            </div>
          </div>
          <div>
            <label htmlFor="np-message" className="field-label">About your mission</label>
            <textarea id="np-message" rows={4} className="field-control resize-y" placeholder="Tell us briefly about your organization's mission and the work you do." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </div>
          <div className="absolute left-[-9999px]" aria-hidden="true">
            <label htmlFor="np-website">Website</label>
            <input id="np-website" tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} />
          </div>
          {status === "error" && <StatusNote type="error" message={message} />}
          <button type="submit" disabled={status === "loading"} className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
            {status === "loading" ? (
              <>
                <LoaderCircle className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" /> Sending application
              </>
            ) : (
              "Submit application"
            )}
          </button>
        </form>
      )}
    </ModalShell>
  );
}

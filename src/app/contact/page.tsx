import type { Metadata } from "next";
import { Mail } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description: "Tell StrataEdge about your infrastructure, automation, cloud, security, or resilience challenge.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-paper-light">
        <div className="site-shell grid py-16 lg:grid-cols-[.7fr_1.3fr] lg:py-24">
          <div>
            <p className="eyebrow">Request a consultation</p>
            <p className="mt-6 max-w-xs text-sm leading-6 text-muted">The initial conversation is free. It helps determine whether there is a useful fit and what the next step should be.</p>
          </div>
          <div className="mt-8 lg:mt-0">
            <h1 className="page-title">Start with the operating problem.</h1>
            <p className="body-large mt-8 max-w-3xl">Share what is changing, failing, taking too much effort, or creating uncertainty. We will respond with questions and a practical way to proceed.</p>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell grid gap-12 lg:grid-cols-[.65fr_1.35fr]">
          <aside>
            <h2 className="font-heading text-3xl leading-tight tracking-[-0.025em]">Before you send</h2>
            <ul className="mt-7 space-y-5 border-t border-line pt-6 text-sm leading-6 text-muted">
              <li><strong className="block text-ink">Useful context</strong>The affected teams, systems, locations, known constraints, and desired timing.</li>
              <li><strong className="block text-ink">Response time</strong>Expect a reply within one to two US business days.</li>
              <li><strong className="block text-ink">Sensitive information</strong>Do not include passwords, protected health information, confidential records, or production credentials.</li>
            </ul>

            <div className="mt-10 border-t border-line pt-6">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-azure" aria-hidden="true" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em]">Prefer email?</p>
                  <a href="mailto:derekasa@strataedge.tech" className="mt-2 block text-sm text-muted hover:text-ink">derekasa@strataedge.tech</a>
                </div>
              </div>
            </div>
          </aside>

          <div className="border border-line bg-paper-light p-6 sm:p-9 lg:p-12">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="site-shell grid gap-8 py-12 text-sm leading-6 text-muted lg:grid-cols-[.65fr_1.35fr]">
          <p className="eyebrow">A clear first step</p>
          <p>
            Sending this form does not create a client relationship. Work begins only after both parties approve a
            written proposal or agreement. Payment, cancellation, and refund terms are documented before paid work
            starts. Review the <Link href="/refund-policy" className="font-bold text-ink underline underline-offset-4">Refund Policy</Link>.
          </p>
        </div>
      </section>
    </>
  );
}

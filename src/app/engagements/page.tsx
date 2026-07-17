import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Engagements",
  description: "Ways to work with StrataEdge: focused assessments, defined modernization projects, and ongoing technical advisory.",
};

const engagements = [
  {
    number: "01",
    name: "Discovery & assessment",
    bestFor: "A specific concern, decision, or environment that needs an independent technical review.",
    outcome: "A clear findings brief, prioritized risks, and recommended next steps with practical sequencing.",
    cadence: "Focused, time-bounded engagement",
  },
  {
    number: "02",
    name: "Modernization project",
    bestFor: "A defined infrastructure, cloud, automation, security, or resilience initiative that needs delivery support.",
    outcome: "Agreed implementation, validation, documentation, and structured handover against a written scope.",
    cadence: "Milestone-based project",
  },
  {
    number: "03",
    name: "Ongoing advisory",
    bestFor: "Organizations that need recurring senior technical input without adding a full-time role.",
    outcome: "Regular reviews, decision support, roadmap stewardship, and accountability for agreed priorities.",
    cadence: "Monthly advisory retainer",
  },
];

const process = [
  ["Listen", "Understand the operation, the constraints, and what a better result must change."],
  ["Define", "Turn the concern into a bounded scope with assumptions, responsibilities, and acceptance criteria."],
  ["Deliver", "Work visibly, document decisions, and raise risks while there is still time to act."],
  ["Hand over", "Leave the team with tested outcomes, usable documentation, and clear ownership."],
];

export default function EngagementsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="site-shell grid py-16 lg:grid-cols-[.7fr_1.3fr] lg:py-24">
          <p className="eyebrow">Ways to work together</p>
          <div className="mt-8 lg:mt-0">
            <h1 className="page-title">The engagement should fit the decision in front of you.</h1>
            <p className="body-large mt-8 max-w-3xl">Start focused, define success clearly, and expand only when the work justifies it.</p>
          </div>
        </div>
      </section>

      <section className="section-space bg-paper-light">
        <div className="site-shell grid gap-px border border-line bg-line lg:grid-cols-3">
          {engagements.map((item) => (
            <article key={item.number} className="flex flex-col bg-paper-light p-7 sm:p-9">
              <div className="flex items-center justify-between">
                <p className="font-heading text-3xl text-copper">{item.number}</p>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted">{item.cadence}</p>
              </div>
              <h2 className="mt-14 font-heading text-4xl leading-tight tracking-[-0.035em]">{item.name}</h2>
              <div className="mt-9 border-t border-line pt-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.12em]">Best for</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.bestFor}</p>
              </div>
              <div className="mt-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.12em]">Typical outcome</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.outcome}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
          Proposals are tailored to the scope and quoted in US dollars. Any deposit, milestone, cancellation, and
          refund terms are stated before work begins. See the <Link href="/refund-policy" className="font-bold underline underline-offset-4">Refund Policy</Link> for the general approach.
        </p>
      </section>

      <section className="section-space border-t border-line">
        <div className="site-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">How the work moves</p>
            <h2 className="mt-5 font-heading text-4xl leading-tight tracking-[-0.03em]">A visible process from question to handover.</h2>
          </div>
          <ol className="border-t border-line">
            {process.map(([title, description], index) => (
              <li key={title} className="grid gap-4 border-b border-line py-7 sm:grid-cols-[60px_140px_1fr]">
                <span className="font-heading text-2xl text-copper">0{index + 1}</span>
                <span className="font-bold">{title}</span>
                <span className="text-sm leading-6 text-muted">{description}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line bg-ink text-paper-light">
        <div className="site-shell flex flex-col gap-8 py-16 sm:flex-row sm:items-center sm:justify-between lg:py-20">
          <div>
            <p className="eyebrow text-[#e7a17f]">Next step</p>
            <h2 className="mt-5 font-heading text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">Bring the problem. We will help frame the work.</h2>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 border-b border-paper-light pb-1 text-sm font-bold">
            Request a consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}

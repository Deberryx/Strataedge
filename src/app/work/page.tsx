import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selected Founder Experience",
  description:
    "Selected field experience behind StrataEdge across distributed infrastructure, cloud connectivity, automation, and operational resilience.",
};

const experience = [
  {
    number: "01",
    context: "Distributed public-health operations",
    title: "Keeping critical services usable across remote teams",
    challenge:
      "Technology supporting field operations must remain dependable across multiple locations, changing connectivity, and varied levels of local support.",
    approach:
      "Treat connectivity, monitoring, documentation, redundancy, and local response as one operating system—not separate technical projects.",
    disciplines: ["Distributed infrastructure", "Monitoring", "Continuity", "Operational support"],
  },
  {
    number: "02",
    context: "Cloud & hybrid environments",
    title: "Connecting cloud services without creating an operational blind spot",
    challenge:
      "Cloud adoption can add speed, but identity, networking, data protection, and on-premise dependencies still need a coherent ownership model.",
    approach:
      "Map service dependencies first, then design secure connectivity, access controls, monitoring, and recovery around the team that will run the environment.",
    disciplines: ["Azure", "AWS", "Site-to-site VPN", "Hybrid architecture"],
  },
  {
    number: "03",
    context: "Operations automation",
    title: "Reducing manual work while keeping the operator in control",
    challenge:
      "Repetitive administrative and reporting workflows consume time, introduce inconsistency, and make important work difficult to trace.",
    approach:
      "Use scripts and workflow automation with explicit approvals, error paths, audit evidence, documentation, and a safe manual fallback.",
    disciplines: ["PowerShell", "Power Automate", "Reporting", "Runbooks"],
  },
  {
    number: "04",
    context: "Quality & resilience",
    title: "Applying a software-testing mindset to infrastructure change",
    challenge:
      "A change can complete technically while still failing at the user, integration, recovery, or handover level.",
    approach:
      "Define acceptance criteria, test assumptions and edge conditions, rehearse rollback, and verify the service from the user’s point of view.",
    disciplines: ["Software testing", "Change validation", "Recovery testing", "Handover"],
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="border-b border-line bg-paper-light">
        <div className="site-shell py-16 lg:py-24">
          <p className="eyebrow">Selected founder field experience</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_.75fr]">
            <h1 className="page-title max-w-5xl">Experience built in operating environments—not demos.</h1>
            <div className="lg:border-l lg:border-line lg:pl-8">
              <p className="text-base leading-7 text-muted">
                These are anonymized examples of the professional experience that informs StrataEdge’s approach.
                They are not presented as StrataEdge client case studies.
              </p>
              <p className="mt-5 text-sm leading-6 text-muted">
                Current and former employers do not sponsor or endorse StrataEdge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell space-y-16">
          {experience.map((item) => (
            <article key={item.number} className="grid border-t border-line pt-8 lg:grid-cols-[90px_1fr]">
              <p className="font-heading text-3xl text-copper">{item.number}</p>
              <div className="mt-7 lg:mt-0">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-forest">{item.context}</p>
                <h2 className="mt-4 max-w-4xl font-heading text-4xl leading-tight tracking-[-0.035em] sm:text-5xl">{item.title}</h2>
                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em]">Operating challenge</h3>
                    <p className="mt-4 text-base leading-7 text-muted">{item.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.14em]">Working approach</h3>
                    <p className="mt-4 text-base leading-7 text-muted">{item.approach}</p>
                  </div>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2" aria-label="Relevant disciplines">
                  {item.disciplines.map((discipline) => (
                    <li key={discipline} className="border border-line bg-paper-light px-3 py-2 text-xs font-semibold text-muted">{discipline}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-forest text-paper-light">
        <div className="site-shell grid gap-8 py-16 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:py-20">
          <h2 className="section-title">Have a similar operating challenge?</h2>
          <div>
            <p className="text-base leading-7 text-paper-light/75">We can assess the environment, clarify the risk, and define a practical route forward.</p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 border-b border-paper-light pb-1 text-sm font-bold">
              Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

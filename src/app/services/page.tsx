import type { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Infrastructure, cloud, automation, security, continuity, and technical advisory services from StrataEdge.",
};

const services = [
  {
    number: "01",
    title: "Infrastructure architecture & modernization",
    intro: "Create a stable foundation for growth, distributed work, and dependable operations.",
    items: [
      "Current-state infrastructure assessment",
      "Architecture and modernization roadmap",
      "Virtualization, server, and platform planning",
      "Monitoring, documentation, and operating standards",
    ],
  },
  {
    number: "02",
    title: "Cloud & hybrid connectivity",
    intro: "Connect people, systems, and cloud services without losing sight of access, cost, or supportability.",
    items: [
      "Azure and AWS integration planning",
      "Hybrid identity and secure access review",
      "Site-to-site connectivity and remote-team design",
      "Cloud storage, networking, and migration guidance",
    ],
  },
  {
    number: "03",
    title: "Automation & operational workflows",
    intro: "Remove repeatable manual work while keeping actions observable and recoverable.",
    items: [
      "PowerShell and administrative automation",
      "Power Automate and approval workflows",
      "Operational reporting and data handoffs",
      "Runbooks, exception paths, and ownership models",
    ],
  },
  {
    number: "04",
    title: "Security, continuity & recovery",
    intro: "Reduce avoidable exposure and prepare the organization to recover when systems fail.",
    items: [
      "Configuration and access-control review",
      "Azure storage and network security guidance",
      "Backup, disaster recovery, and failover planning",
      "Recovery exercises and actionable remediation plans",
    ],
  },
  {
    number: "05",
    title: "Technical advisory & quality assurance",
    intro: "Bring an independent, testing-informed perspective to important technology decisions.",
    items: [
      "Technical discovery and risk assessment",
      "Vendor and solution evaluation",
      "Implementation acceptance criteria",
      "Change readiness, testing, and handover review",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="site-shell grid py-16 lg:grid-cols-[.7fr_1.3fr] lg:py-24">
          <div>
            <p className="eyebrow">Services</p>
            <p className="mt-6 max-w-xs text-sm leading-6 text-muted">Focused scopes for organizations that need practical progress, not a longer list of tools.</p>
          </div>
          <div className="mt-10 lg:mt-0">
            <h1 className="page-title">Strengthen the systems behind the work.</h1>
            <p className="body-large mt-8 max-w-3xl">
              From a focused assessment to a complete modernization project, StrataEdge helps teams reduce risk,
              clarify ownership, and leave each environment easier to operate.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-paper-light">
        <div className="site-shell">
          {services.map((service) => (
            <article key={service.number} className="grid gap-8 border-t border-line py-12 first:border-t-0 first:pt-0 lg:grid-cols-[90px_1.05fr_.95fr]">
              <p className="font-heading text-3xl text-copper">{service.number}</p>
              <div>
                <h2 className="font-heading text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">{service.title}</h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-muted">{service.intro}</p>
              </div>
              <ul className="space-y-4 lg:border-l lg:border-line lg:pl-8">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-copper" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-ink text-paper-light">
        <div className="site-shell grid gap-10 py-16 lg:grid-cols-2 lg:items-center lg:py-20">
          <h2 className="section-title">Not sure which service fits?</h2>
          <div>
            <p className="max-w-xl text-lg leading-8 text-paper-light/70">
              A discovery conversation can turn a broad concern into a defined problem, decision, or project scope.
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 border-b border-paper-light pb-1 text-sm font-bold">
              Describe the challenge <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

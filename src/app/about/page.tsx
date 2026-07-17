import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About the Founder",
  description:
    "Meet Derek Asamoah-Amoyaw, founder of StrataEdge and an infrastructure practitioner working across cloud, automation, cybersecurity, resilience, and software quality.",
};

const experience = [
  ["2021—present", "Senior infrastructure engineering", "Distributed public-health operations, hybrid infrastructure, cloud integration, connectivity, security, monitoring, automation, and recovery."],
  ["2020—2024", "Software testing", "Functional, usability, regression, and exploratory testing across web and mobile products."],
  ["2018—2019", "IT support", "User support, systems troubleshooting, service continuity, and day-to-day technology operations."],
  ["2015—2017", "Systems administration", "Server and network administration, Linux environments, databases, and organizational IT support."],
];

const speaking = [
  {
    title: "Open Source Summit North America",
    detail: "Linux Foundation speaker, 2026 · Open-source cloud infrastructure for public-health operations, offline-first design, and operating constraints.",
  },
  {
    title: "Tech Forward",
    detail: "Speaker, 2024 · Cloud and artificial intelligence in malaria-control operations.",
  },
  {
    title: "Global Conference on Cyber Capacity Building",
    detail: "Participant and contributor, 2023 · Cyber capacity, organizational resilience, and the wider security ecosystem.",
  },
];

const credentials = [
  "Microsoft Applied Skills: securing Azure storage and network access",
  "Microsoft Applied Skills: Defender for Cloud regulatory compliance controls",
  "Cisco Cyber Threat Management",
  "Cybersecurity and AI Security, Protect.ngo",
  "Linux Foundation speaker credential",
];

const personData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Derek Asamoah-Amoyaw",
  jobTitle: "Founder and Infrastructure Consultant",
  url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://strataedge.netlify.app"}/about`,
  sameAs: ["https://www.linkedin.com/in/derek-asamoah-ctfl-143650b8/"],
  knowsAbout: [
    "IT infrastructure",
    "Cloud computing",
    "Automation",
    "Cybersecurity",
    "Disaster recovery",
    "Software testing",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }} />

      <section className="border-b border-line">
        <div className="site-shell grid lg:grid-cols-[.85fr_1.15fr]">
          <div className="relative min-h-[560px] overflow-hidden bg-ink lg:min-h-[760px]">
            <Image
              src="/derek-photo.jpg"
              alt="Portrait of Derek Asamoah-Amoyaw"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top grayscale-[10%]"
            />
            <div className="absolute bottom-0 left-0 bg-copper px-5 py-4 text-xs font-bold uppercase tracking-[0.13em] text-paper-light">
              Founder · Practitioner · Speaker
            </div>
          </div>
          <div className="flex flex-col justify-center py-16 lg:py-24 lg:pl-14">
            <p className="eyebrow">About the founder</p>
            <h1 className="page-title mt-8">Technology should be workable where the work happens.</h1>
            <p className="body-large mt-8 max-w-2xl">
              Derek Asamoah-Amoyaw founded StrataEdge to bring practical infrastructure thinking to organizations
              that need dependable systems, clearer operations, and a sensible path through change.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted">
              His experience spans infrastructure engineering, cloud integration, virtualization, secure
              connectivity, automation, continuity planning, Linux and Microsoft environments, databases, and
              software testing. Much of that work has supported distributed public-health operations where
              resilience is an operating requirement, not a presentation slide.
            </p>
            <a
              href="https://www.linkedin.com/in/derek-asamoah-ctfl-143650b8/"
              target="_blank"
              rel="noreferrer"
              className="text-link mt-8 self-start"
            >
              View Derek on LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section-space bg-paper-light">
        <div className="site-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Professional path</p>
            <h2 className="mt-5 font-heading text-4xl leading-tight tracking-[-0.03em]">Built from the operating layer upward.</h2>
          </div>
          <div className="border-t border-line">
            {experience.map(([date, role, detail]) => (
              <div key={date} className="grid gap-3 border-b border-line py-7 sm:grid-cols-[150px_190px_1fr]">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-copper">{date}</p>
                <h3 className="font-bold">{role}</h3>
                <p className="text-sm leading-6 text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-line">
        <div className="site-shell">
          <div className="grid gap-8 border-b border-line pb-10 lg:grid-cols-[.7fr_1.3fr]">
            <p className="eyebrow">Speaking & contribution</p>
            <h2 className="section-title">Sharing what the field teaches.</h2>
          </div>
          <div className="grid lg:grid-cols-3">
            {speaking.map((item, index) => (
              <article key={item.title} className="border-b border-line py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <p className="font-heading text-3xl text-copper">0{index + 1}</p>
                <h3 className="mt-8 font-heading text-3xl leading-tight tracking-[-0.025em]">{item.title}</h3>
                <p className="mt-5 text-sm leading-6 text-muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-forest text-paper-light">
        <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-[#e7a17f]">Current credentials</p>
            <h2 className="mt-5 font-heading text-4xl leading-tight tracking-[-0.03em]">Focused on secure, supportable systems.</h2>
          </div>
          <ul className="border-t border-paper-light/25">
            {credentials.map((credential) => (
              <li key={credential} className="border-b border-paper-light/25 py-5 text-sm leading-6 text-paper-light/80">{credential}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-line bg-paper-light">
        <div className="site-shell grid gap-8 py-14 lg:grid-cols-[.7fr_1.3fr]">
          <p className="eyebrow">Independence</p>
          <p className="max-w-3xl text-sm leading-7 text-muted">
            StrataEdge is an independent consultancy. Derek’s professional background is included to explain the
            experience behind the firm; it does not imply sponsorship or endorsement by any current or former
            employer. Client and employer-sensitive details are intentionally excluded.
          </p>
        </div>
      </section>

      <section>
        <div className="site-shell flex flex-col gap-7 py-16 sm:flex-row sm:items-center sm:justify-between lg:py-20">
          <h2 className="font-heading text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">Let’s discuss the system behind your work.</h2>
          <Link href="/contact" className="button-primary shrink-0">Request a consultation</Link>
        </div>
      </section>
    </>
  );
}

import { ArrowDownRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { insights } from "@/lib/insights";

const services = [
  {
    number: "01",
    title: "Infrastructure & cloud",
    description:
      "Architecture, modernization, and hybrid connectivity designed around how your teams actually operate.",
  },
  {
    number: "02",
    title: "Automation & operations",
    description:
      "Practical workflows and scripts that reduce repetition while preserving visibility, control, and recovery.",
  },
  {
    number: "03",
    title: "Security & resilience",
    description:
      "Hardening, continuity planning, and recovery readiness for systems your organization depends on.",
  },
  {
    number: "04",
    title: "Technical advisory",
    description:
      "Clear assessments, roadmaps, and decision support when the right next move is not yet obvious.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "StrataEdge",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://strataedge.netlify.app",
  description:
    "Infrastructure, automation, cloud, and operational resilience consulting for organizations in the United States and remotely.",
  areaServed: "United States",
  founder: {
    "@type": "Person",
    name: "Derek Asamoah-Amoyaw",
    jobTitle: "Founder and Infrastructure Consultant",
    sameAs: "https://www.linkedin.com/in/derek-asamoah-ctfl-143650b8/",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="grid-texture border-b border-line">
        <div className="site-shell grid min-h-[calc(100dvh-76px)] lg:grid-cols-[1.25fr_.75fr]">
          <div className="flex flex-col justify-between border-line py-12 lg:border-r lg:py-16 lg:pr-12">
            <div className="flex items-center justify-between gap-6 border-b border-line pb-5">
              <p className="eyebrow">Infrastructure / Automation / Resilience</p>
              <p className="hidden text-xs font-semibold uppercase tracking-[0.13em] text-muted sm:block">
                US-registered · Remote delivery
              </p>
            </div>

            <div className="py-16 lg:py-20">
              <h1 className="display-title max-w-5xl">
                Infrastructure that holds up in the <span className="text-azure">real world.</span>
              </h1>
              <p className="body-large mt-8 max-w-2xl">
                StrataEdge helps organizations modernize systems, remove operational friction, and build resilience
                without adding unnecessary complexity.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="button-primary">
                  Request a consultation <ArrowRight className="ml-3 h-4 w-4" aria-hidden="true" />
                </Link>
                <Link href="/work" className="button-secondary">
                  See selected experience
                </Link>
              </div>
            </div>

            <p className="max-w-xl border-l-2 border-azure pl-5 text-sm leading-6 text-muted">
              Built on founder experience across distributed infrastructure, public-health technology, cloud,
              cybersecurity, automation, and software quality.
            </p>
          </div>

          <div className="relative min-h-[520px] overflow-hidden bg-navy lg:min-h-full">
            <Image
              src="/derek-public-profile-full.jpg"
              alt="Derek Asamoah-Amoyaw, founder of StrataEdge"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent px-6 pb-7 pt-24 text-paper-light sm:px-8">
              <p className="text-sm font-bold">Derek Asamoah-Amoyaw</p>
              <p className="mt-1 text-xs text-paper-light/75">Founder · Infrastructure practitioner · Speaker</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper-light">
        <div className="site-shell grid divide-y divide-line py-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {["Practical by design", "Clear ownership", "Ready for handover"].map((item, index) => (
            <div key={item} className="flex items-center gap-4 py-6 sm:px-6 first:pl-0">
              <span className="font-heading text-2xl text-azure">0{index + 1}</span>
              <span className="text-sm font-bold uppercase tracking-[0.09em]">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="site-shell">
          <div className="grid gap-8 border-b border-line pb-12 lg:grid-cols-[.7fr_1.3fr]">
            <p className="eyebrow">What we do</p>
            <div>
              <h2 className="section-title max-w-4xl">Good technology should make the operation easier to run.</h2>
              <p className="body-large mt-7 max-w-3xl">
                We focus on the foundations: dependable infrastructure, secure access, well-governed automation,
                recovery readiness, and documentation that stays useful after the project ends.
              </p>
            </div>
          </div>

          <div>
            {services.map((service) => (
              <div
                key={service.number}
                className="group grid gap-5 border-b border-line py-8 transition-colors hover:bg-paper-light sm:grid-cols-[80px_1fr_1fr_40px] sm:items-start sm:px-4"
              >
                <span className="font-heading text-2xl text-azure">{service.number}</span>
                <h3 className="font-heading text-2xl leading-tight sm:text-3xl">{service.title}</h3>
                <p className="max-w-xl text-base leading-7 text-muted">{service.description}</p>
                <ArrowDownRight className="hidden h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1 sm:block" aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <Link href="/services" className="text-link">
              Explore all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="grid-texture-dark border-y border-line bg-navy text-paper-light">
        <div className="site-shell grid lg:grid-cols-[.75fr_1.25fr]">
          <div className="border-paper-light/20 py-16 lg:border-r lg:py-24 lg:pr-12">
            <p className="eyebrow text-mist">The operating principle</p>
            <p className="mt-8 font-heading text-[clamp(2.4rem,5vw,4.8rem)] font-medium leading-[1.04] tracking-[-0.03em] [text-wrap:balance]">
              Build for the environment you have. Prepare for the one you may face.
            </p>
          </div>
          <div className="grid gap-10 border-t border-paper-light/20 py-16 lg:border-t-0 lg:py-24 lg:pl-12 sm:grid-cols-2">
            <div>
              <p className="font-heading text-5xl text-mist">10+</p>
              <p className="mt-4 text-sm leading-6 text-paper-light/75">
                Years of founder experience across infrastructure operations, systems administration, support, and
                software quality.
              </p>
            </div>
            <div>
              <p className="font-heading text-5xl text-mist">Field-led</p>
              <p className="mt-4 text-sm leading-6 text-paper-light/75">
                Experience shaped by distributed teams, constrained connectivity, critical services, and the need
                for clear recovery paths.
              </p>
            </div>
            <div className="sm:col-span-2 sm:border-t sm:border-paper-light/20 sm:pt-10">
              <p className="text-lg leading-8 text-paper-light/85">
                StrataEdge is independent. Founder experience is presented as professional background and does not
                imply endorsement by current or former employers.
              </p>
              <Link href="/about" className="mt-7 inline-flex items-center gap-2 border-b border-paper-light pb-1 text-sm font-bold transition-colors duration-200 hover:border-mist hover:text-mist">
                Meet the founder <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-paper-light">
        <div className="site-shell">
          <div className="flex flex-col gap-6 border-b border-line pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Field notes & insights</p>
              <h2 className="section-title mt-5">Useful thinking, grounded in practice.</h2>
            </div>
            <Link href="/insights" className="text-link self-start sm:self-auto">
              View all insights <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3">
            {insights.slice(0, 3).map((post, index) => (
              <article key={post.slug} className="border-b border-line py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.1em] text-muted">
                  <span>{post.category}</span>
                  <span>0{index + 1}</span>
                </div>
                <h3 className="mt-8 font-heading text-3xl leading-tight tracking-[-0.025em]">
                  <Link href={`/insights/${post.slug}`} className="hover:text-navy">{post.title}</Link>
                </h3>
                <p className="mt-5 text-sm leading-6 text-muted">{post.summary}</p>
                <Link href={`/insights/${post.slug}`} className="text-link mt-8">
                  Read article <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="site-shell grid py-16 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:py-24">
          <div>
            <p className="eyebrow">Start with the problem</p>
            <h2 className="section-title mt-5 max-w-4xl">Tell us what is slowing the operation down.</h2>
          </div>
          <div className="mt-8 lg:mt-0 lg:text-right">
            <p className="mb-7 text-base leading-7 text-muted">We will help clarify the issue, the risk, and a sensible next step.</p>
            <Link href="/contact" className="button-primary">
              Request a consultation <ArrowRight className="ml-3 h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

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
    detail: "Panelist, 2023 · Cyber capacity, organizational resilience, and the wider security ecosystem.",
  },
];

const gallery = [
  {
    src: "/conference/techforward-derek-on-stage.jpg",
    width: 1280,
    height: 853,
    alt: "Derek Asamoah-Amoyaw presenting from the podium at Tech Forward under blue stage lighting",
    label: "Tech Forward · 2024",
    caption: "Presenting cloud and AI in malaria-control operations.",
  },
  {
    src: "/conference/derek-gc3b.jpg",
    width: 1118,
    height: 1986,
    alt: "Derek standing in front of the GC3B conference backdrop in Accra, Ghana",
    label: "GC3B · 2023",
    caption: "Global Conference on Cyber Capacity Building, Accra, Ghana.",
  },
  {
    src: "/conference/techforward-crowd.jpg",
    width: 1280,
    height: 853,
    alt: "Conference audience raising green thumbs-up paddles during a Tech Forward session",
    label: "Tech Forward · 2024",
    caption: "The room weighs in during a live session.",
  },
  {
    src: "/conference/linux-open-source-summit.jpg",
    width: 800,
    height: 1067,
    alt: "Derek on stage at Open Source Summit North America beside a slide reading “The people you build for may never know your name”",
    label: "Open Source Summit NA",
    caption: "Running open-source cloud infrastructure for public health at scale.",
  },
  {
    src: "/conference/derek-kids-training.jpg",
    width: 1125,
    height: 844,
    alt: "Derek with a large group of smiling schoolchildren holding printed technology topic sheets",
    label: "Community training",
    caption: "Introducing schoolchildren to technology career paths.",
  },
  {
    src: "/conference/derek.jpg",
    width: 800,
    height: 1067,
    alt: "Derek wearing a speaker badge in front of the Open Source Summit sponsor wall",
    label: "Open Source Summit NA",
    caption: "Speaker, Open Source Summit / Embedded Linux Conference.",
  },
  {
    src: "/conference/derek-speaking-open-source-summit.jpg",
    width: 1280,
    height: 960,
    alt: "Derek speaking at the Open Source Summit North America lectern",
    label: "Open Source Summit NA",
    caption: "Session discussion at the Linux Foundation summit.",
  },
  {
    src: "/conference/open-source-summit-badge.jpg",
    width: 800,
    height: 1067,
    alt: "Close-up of Derek’s Open Source Summit speaker badge",
    label: "Open Source Summit NA · 2026",
    caption: "Speaker badge, Minneapolis.",
  },
  {
    src: "/conference/techforward-derek-writing.jpg",
    width: 1280,
    height: 853,
    alt: "Derek writing on the community mural board at Tech Forward",
    label: "Tech Forward · 2024",
    caption: "Adding to the community mural.",
  },
  {
    src: "/conference/derek-gc3b-speaker.jpg",
    width: 1125,
    height: 617,
    alt: "Derek speaking with a microphone on a GC3B panel alongside other panelists",
    label: "GC3B · 2023",
    caption: "Panel discussion on cyber capacity building.",
  },
  {
    src: "/conference/linux-crowd.jpg",
    width: 1280,
    height: 960,
    alt: "Keynote hall filled with attendees at Open Source Summit North America",
    label: "Open Source Summit NA",
    caption: "Keynote hall at the Linux Foundation summit.",
  },
  {
    src: "/conference/techforward-others-presenting.jpg",
    width: 1280,
    height: 853,
    alt: "Wide view of a Tech Forward ballroom session with a speaker on stage",
    label: "Tech Forward · 2024",
    caption: "Main-stage session.",
  },
  {
    src: "/conference/linux-open-source-summit-pictures.jpg",
    width: 1280,
    height: 960,
    alt: "Expo floor at Open Source Summit North America with sponsor booths",
    label: "Open Source Summit NA",
    caption: "Expo floor at the summit.",
  },
  {
    src: "/conference/derek-cyber-peace-ngo.jpg",
    width: 1280,
    height: 720,
    alt: "CyberPeace Builders NGO Series webinar graphic featuring Derek",
    label: "CyberPeace Builders",
    caption: "NGO Series webinar on practical cyber protection.",
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
          <div className="relative min-h-[560px] overflow-hidden bg-navy lg:min-h-[760px]">
            <Image
              src="/founder.jpg"
              alt="Portrait of Derek Asamoah-Amoyaw"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy via-navy/70 to-transparent px-5 pb-5 pt-24 text-paper-light">
              <p className="text-xs font-bold uppercase tracking-[0.13em]">Founder · Practitioner · Speaker</p>
              <p className="mt-2 text-xs text-paper-light/65">Derek Asamoah-Amoyaw</p>
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
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-azure">{date}</p>
                <h3 className="font-bold">{role}</h3>
                <p className="text-sm leading-6 text-muted">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="speaking" className="section-space scroll-mt-20 border-y border-line">
        <div className="site-shell">
          <div className="grid gap-8 border-b border-line pb-10 lg:grid-cols-[.7fr_1.3fr]">
            <p className="eyebrow">Speaking & community</p>
            <h2 className="section-title">Sharing what the field teaches.</h2>
          </div>
          <div className="grid lg:grid-cols-3">
            {speaking.map((item, index) => (
              <article key={item.title} className="border-b border-line py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <p className="font-heading text-3xl text-azure">0{index + 1}</p>
                <h3 className="mt-8 font-heading text-3xl leading-tight tracking-[-0.025em]">{item.title}</h3>
                <p className="mt-5 text-sm leading-6 text-muted">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 border-t border-line pt-12">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">From the field</p>
                <h3 className="mt-4 font-heading text-3xl leading-tight tracking-[-0.02em] sm:text-4xl">
                  Conferences, panels, and classrooms.
                </h3>
              </div>
              <p className="max-w-sm text-sm leading-6 text-muted">
                Moments from Open Source Summit North America, Tech Forward, GC3B in Accra, and community
                training sessions.
              </p>
            </div>

            <div className="mt-10 columns-1 gap-3 sm:columns-2 lg:columns-3">
              {gallery.map((photo) => (
                <figure key={photo.src} className="mb-3 break-inside-avoid border border-line bg-paper-light">
                  <Image
                    src={photo.src}
                    width={photo.width}
                    height={photo.height}
                    alt={photo.alt}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-auto w-full"
                  />
                  <figcaption className="border-t border-line px-4 py-3">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-navy">{photo.label}</p>
                    <p className="mt-1 text-xs leading-5 text-muted">{photo.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid-texture-dark section-space bg-navy text-paper-light">
        <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-mist">Current credentials</p>
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

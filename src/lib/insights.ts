export type InsightSection = {
  heading: string;
  paragraphs: string[];
  points?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  published: string;
  readingTime: string;
  sections: InsightSection[];
};

export const insights: Insight[] = [
  {
    slug: "offline-first-infrastructure-strategy",
    title: "Offline-first is not a workaround. It is an infrastructure strategy.",
    summary:
      "When connectivity is uneven, designing for interruption produces systems that are more dependable for everyone.",
    category: "Resilient systems",
    published: "July 10, 2026",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Connectivity is an operating condition, not an assumption",
        paragraphs: [
          "Many digital systems are designed as if stable bandwidth is a permanent utility. In distributed and resource-constrained environments, it is not. Connections slow down, power changes, and a remote team may need to keep working long after the network disappears.",
          "Offline-first design begins by accepting that reality. It asks what people must still be able to do, what data can safely remain local, and how records will reconcile when a connection returns.",
        ],
      },
      {
        heading: "Design the operating model before the synchronization layer",
        paragraphs: [
          "The difficult part is rarely the cache. It is deciding who owns a record, how conflicts are resolved, which actions require immediate confirmation, and how users can see whether data has actually synchronized.",
          "A useful design review follows the work from the field device to the central system and back again. Every handoff needs an accountable state, not a vague spinning icon.",
        ],
        points: [
          "Keep essential workflows usable without a live connection.",
          "Make synchronization status visible and understandable.",
          "Encrypt local data and minimize how much is retained.",
          "Test duplicate, conflict, and partial-upload scenarios deliberately.",
        ],
      },
      {
        heading: "Resilience improves when failure is expected",
        paragraphs: [
          "Offline-first systems are not only for remote locations. They encourage teams to define failure modes clearly and reduce hidden dependencies. That discipline improves reliability in warehouses, clinics, field operations, and ordinary offices alike.",
          "The goal is not to celebrate poor connectivity. It is to ensure that important work does not stop because one part of the system is temporarily unavailable.",
        ],
      },
    ],
  },
  {
    slug: "reliable-connectivity-distributed-teams",
    title: "What reliable connectivity requires across distributed teams",
    summary:
      "A stable network is a combination of design, visibility, local support, and sensible recovery—not a single appliance.",
    category: "Infrastructure",
    published: "June 26, 2026",
    readingTime: "5 min read",
    sections: [
      {
        heading: "Start with the work the network must protect",
        paragraphs: [
          "A connectivity project should not begin with product selection. Begin with the services people cannot work without: identity, communications, line-of-business applications, data collection, and remote support.",
          "That service map reveals where redundancy matters, which sites need local capability, and what the organization can tolerate during a provider outage.",
        ],
      },
      {
        heading: "Visibility changes response quality",
        paragraphs: [
          "A distributed network becomes expensive when the first report of trouble is a frustrated phone call. Central monitoring, consistent naming, current diagrams, and clear escalation paths shorten the distance between a symptom and its cause.",
          "Good monitoring is selective. It should show service impact and trends, not create a wall of alerts that everyone learns to ignore.",
        ],
        points: [
          "Track availability from the user location, not only the data center.",
          "Document primary and backup paths for each critical site.",
          "Give local teams a short, tested first-response checklist.",
          "Review recurring incidents for design problems, not just quick fixes.",
        ],
      },
      {
        heading: "Reliability is a maintained practice",
        paragraphs: [
          "Configuration standards, firmware planning, vendor coordination, and recovery exercises are less visible than new equipment, but they are what keep a distributed environment dependable.",
          "The most useful architecture is one the operating team can understand, support, and restore under pressure.",
        ],
      },
    ],
  },
  {
    slug: "automation-with-operational-control",
    title: "Automating infrastructure without losing operational control",
    summary:
      "The best automation removes repetition while making ownership, exceptions, and recovery easier to understand.",
    category: "Automation",
    published: "June 12, 2026",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Automate a stable decision, not a confused process",
        paragraphs: [
          "Automation magnifies whatever it is given. If a workflow has unclear approvals, inconsistent data, or no exception path, code will reproduce those weaknesses faster.",
          "Before building a PowerShell script, workflow, or integration, write down the trigger, owner, expected result, and the conditions that require human review.",
        ],
      },
      {
        heading: "Build evidence into the workflow",
        paragraphs: [
          "An automated action should leave behind enough information to answer what ran, who initiated it, what changed, and whether it completed. That audit trail is part of the product, not an optional logging task.",
          "Idempotent operations, input validation, limited permissions, and useful error messages all reduce the risk of turning a small mistake into a large incident.",
        ],
        points: [
          "Use a dry-run or preview mode for consequential changes.",
          "Separate credentials from scripts and grant only required access.",
          "Create a clear manual fallback before production rollout.",
          "Measure saved effort as well as failed or retried runs.",
        ],
      },
      {
        heading: "The operator should remain informed",
        paragraphs: [
          "Good automation reduces cognitive load; it does not hide the system. The operating team should know when automation has acted, what assumptions it made, and how to pause it safely.",
          "That is how automation earns trust: through predictable behavior and transparent recovery, not through novelty.",
        ],
      },
    ],
  },
  {
    slug: "disaster-recovery-beyond-backups",
    title: "Disaster recovery is more than having backups",
    summary:
      "Recovery depends on verified data, working access, current documentation, and people who have rehearsed the sequence.",
    category: "Continuity",
    published: "May 29, 2026",
    readingTime: "5 min read",
    sections: [
      {
        heading: "A backup is an input to recovery",
        paragraphs: [
          "A successful backup notification proves that a job ran. It does not prove that the right data is present, that it can be restored within the required time, or that the restored application will actually function.",
          "Recovery planning connects backup data to service priorities, identity dependencies, network access, application order, and business validation.",
        ],
      },
      {
        heading: "Define what must return first",
        paragraphs: [
          "Recovery time and recovery point objectives only become useful when they are tied to specific services and accepted by their owners. Not every workload requires the same investment or sequence.",
          "A practical plan names the decision-maker, the technical owner, the restore location, the required credentials, and the evidence that confirms the service is ready.",
        ],
        points: [
          "Test representative restores on a schedule.",
          "Protect recovery credentials from the same incident as production.",
          "Store an accessible copy of the recovery runbook.",
          "Record lessons and update the plan after every exercise.",
        ],
      },
      {
        heading: "Rehearsal exposes the real dependencies",
        paragraphs: [
          "Tabletop exercises reveal missing contacts and unclear authority. Technical restore tests reveal bandwidth, version, permission, and sequencing problems. Both are necessary.",
          "A recovery plan becomes credible when the team has used it, measured it, and improved it—not when the document has simply been approved.",
        ],
      },
    ],
  },
  {
    slug: "software-testing-mindset-infrastructure-reliability",
    title: "How a software-testing mindset improves infrastructure reliability",
    summary:
      "Infrastructure changes are safer when teams test assumptions, boundaries, failure paths, and user impact with intent.",
    category: "Reliability",
    published: "May 15, 2026",
    readingTime: "6 min read",
    sections: [
      {
        heading: "Testing asks a better question",
        paragraphs: [
          "Infrastructure work often asks, ‘Did the change succeed?’ A testing mindset asks, ‘Under which conditions does it succeed, and how does it fail?’ That shift produces better migration plans, automation, monitoring, and handover.",
          "It also keeps the user journey in view. A server can be healthy while authentication, DNS, or a remote connection makes the service unusable.",
        ],
      },
      {
        heading: "Treat the change plan as a set of hypotheses",
        paragraphs: [
          "Every change contains assumptions about capacity, compatibility, timing, permissions, and behavior. Listing those assumptions makes it possible to verify the risky ones before the maintenance window.",
          "Boundary cases deserve attention: expired credentials, full storage, interrupted connectivity, stale clients, unusual characters, time-zone differences, and partial completion.",
        ],
        points: [
          "Define acceptance criteria before implementation begins.",
          "Test rollback steps, not just the forward path.",
          "Include a user-level verification for critical services.",
          "Preserve evidence so the result can be reviewed later.",
        ],
      },
      {
        heading: "Quality continues after deployment",
        paragraphs: [
          "A production change is not the end of testing. Monitoring should confirm expected behavior, while a short review should compare the actual result with the plan.",
          "This does not require heavy process. It requires curiosity, explicit expectations, and the discipline to learn from near misses as well as outages.",
        ],
      },
    ],
  },
  {
    slug: "open-source-summit-field-lessons",
    title: "Lessons from speaking about open-source cloud infrastructure",
    summary:
      "Field constraints change architecture decisions—and make open collaboration, maintainability, and context even more important.",
    category: "Field notes",
    published: "May 1, 2026",
    readingTime: "5 min read",
    sections: [
      {
        heading: "Architecture is shaped by its environment",
        paragraphs: [
          "At Open Source Summit North America, I spoke about cloud infrastructure for public-health operations and the realities that sit behind an architecture diagram: intermittent connectivity, distributed teams, constrained support, and systems that still need to work every day.",
          "Those realities do not lower the standard. They change where engineering attention belongs—toward graceful failure, local capability, observability, and maintainable choices.",
        ],
      },
      {
        heading: "Open source is also an operating commitment",
        paragraphs: [
          "Open-source technology can improve flexibility and reduce lock-in, but value does not come from a license alone. Teams still need an ownership model, patching discipline, documentation, security review, and a support path.",
          "The right question is not whether a component is open or proprietary. It is whether the organization can operate it responsibly over its useful life.",
        ],
        points: [
          "Choose components the team can understand and maintain.",
          "Design for the connectivity and support that actually exist.",
          "Document decisions so future operators inherit context.",
          "Share lessons without exposing sensitive operational details.",
        ],
      },
      {
        heading: "Context is part of technical leadership",
        paragraphs: [
          "Speaking with the open-source community reinforced a principle I use in consulting: a technically elegant answer is incomplete if it ignores the people who must run it.",
          "Durable systems emerge when architecture, operations, and local context are treated as one problem.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

# StrataEdge

StrataEdge is an independent infrastructure, cloud, automation, and operational-resilience consulting site founded by Derek Asamoah-Amoyaw.

The project is built with Next.js and TypeScript and presents consulting services around infrastructure modernization, automation, security, resilience, and technical advisory work.

## What this project demonstrates

- production-style Next.js application structure;
- TypeScript-based frontend development;
- responsive service and content pages;
- structured metadata for search engines;
- server-side API routes;
- contact and engagement workflows;
- email integration through Resend;
- Stripe integration points;
- accessibility, privacy, pricing, refund-policy, and other business-facing routes;
- founder experience and conference-speaking content presented as structured portfolio material.

## Technology stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend
- Stripe
- ESLint

## Site structure

The application includes routes for:

- About
- Services
- Selected experience / work
- Engagements
- Insights
- Pricing
- Contact
- Accessibility
- Privacy
- Refund policy

The home page positions StrataEdge around four practical service areas:

1. Infrastructure & cloud
2. Automation & operations
3. Security & resilience
4. Technical advisory

## Engineering approach

The site is designed around a simple principle: infrastructure should be reliable, understandable, recoverable, and appropriate for the environment in which it operates.

The project also intentionally separates independent consulting work from current and former employer experience. Professional background is used as evidence of capability without implying employer endorsement.

## Local development

Install dependencies:

```bash
npm install
```

Copy the example environment file and populate only the values needed for your local environment:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Then open `http://localhost:3000`.

## Production considerations

Before production deployment:

- keep credentials and API keys in managed environment variables;
- restrict payment and email integrations to the intended environment;
- validate contact-form abuse protection and rate limiting;
- review application logging and monitoring;
- test accessibility and responsive behavior;
- confirm backup/recovery requirements for any stateful services added later.

## Skills demonstrated

`Next.js` · `React` · `TypeScript` · `Cloud Consulting` · `Infrastructure` · `Automation` · `Security` · `Resilience` · `Technical Communication`

---

**Founder:** Derek Asamoah-Amoyaw  
Senior IT Infrastructure & Cloud Engineer · Microsoft Certified: Azure Administrator Associate (AZ-104)

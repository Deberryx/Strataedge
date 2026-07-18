import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PricingSection } from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Clear, fixed pricing for StrataEdge web packages: free starter websites, business websites with secure Stripe checkout, and custom enterprise solutions.",
};

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout?: string }>;
}) {
  const params = await searchParams;

  return (
    <>
      <section className="grid-texture border-b border-line">
        <div className="site-shell py-16 sm:py-20 lg:py-24">
          <p className="eyebrow">Pricing</p>
          <h1 className="page-title mt-8 max-w-4xl">Clear pricing, in plain dollars.</h1>
          <p className="body-large mt-8 max-w-2xl">
            Fixed packages for websites and small business tools. Payment for the business package is handled
            securely through Stripe; everything else starts with a short conversation.
          </p>
        </div>
      </section>

      <section className="section-space">
        <PricingSection checkoutCancelled={params.checkout === "cancelled"} />
      </section>

      <section className="border-t border-line bg-paper-light">
        <div className="site-shell grid gap-7 py-16 lg:grid-cols-[1.2fr_.8fr] lg:items-end lg:py-20">
          <div>
            <p className="eyebrow">Consulting engagements</p>
            <h2 className="section-title mt-5 max-w-3xl">Infrastructure and advisory work is scoped differently.</h2>
          </div>
          <div className="lg:text-right">
            <p className="mb-7 text-base leading-7 text-muted">
              Assessments, automation, and resilience engagements are priced per scope.
            </p>
            <Link href="/engagements" className="text-link">
              See engagement models <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

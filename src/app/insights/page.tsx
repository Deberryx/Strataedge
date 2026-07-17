import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Field notes from StrataEdge on infrastructure, automation, cloud, cybersecurity, continuity, and reliable operations.",
};

export default function InsightsPage() {
  const [featured, ...rest] = insights;

  return (
    <>
      <section className="border-b border-line bg-paper-light">
        <div className="site-shell grid py-16 lg:grid-cols-[.7fr_1.3fr] lg:py-24">
          <div>
            <p className="eyebrow">Insights & field notes</p>
            <p className="mt-6 max-w-xs text-sm leading-6 text-muted">Practical writing from the intersection of infrastructure, operations, resilience, and software quality.</p>
          </div>
          <h1 className="page-title mt-8 lg:mt-0">Ideas worth carrying into the next implementation.</h1>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="site-shell grid py-14 lg:grid-cols-[.7fr_1.3fr] lg:py-20">
          <div>
            <p className="eyebrow">Featured</p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.1em] text-muted">{featured.published} · {featured.readingTime}</p>
          </div>
          <article className="mt-8 lg:mt-0">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-forest">{featured.category}</p>
            <h2 className="mt-5 max-w-4xl font-heading text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">
              <Link href={`/insights/${featured.slug}`} className="hover:text-forest">{featured.title}</Link>
            </h2>
            <p className="body-large mt-7 max-w-3xl">{featured.summary}</p>
            <Link href={`/insights/${featured.slug}`} className="text-link mt-8">Read the article <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </article>
        </div>
      </section>

      <section className="section-space bg-paper-light">
        <div className="site-shell">
          <div className="grid border-t border-line md:grid-cols-2">
            {rest.map((post, index) => (
              <article
                key={post.slug}
                className={`border-b border-line py-9 md:px-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
              >
                <div className="flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.1em] text-muted">
                  <span>{post.category}</span>
                  <span>{post.published}</span>
                </div>
                <h2 className="mt-7 max-w-xl font-heading text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">
                  <Link href={`/insights/${post.slug}`} className="hover:text-forest">{post.title}</Link>
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-6 text-muted">{post.summary}</p>
                <Link href={`/insights/${post.slug}`} className="text-link mt-7">Read {post.readingTime.replace(" read", "")} <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

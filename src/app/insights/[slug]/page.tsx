import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/lib/insights";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const related = insights.filter((item) => item.slug !== post.slug).slice(0, 2);
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    author: { "@type": "Person", name: "Derek Asamoah-Amoyaw" },
    publisher: { "@type": "Organization", name: "StrataEdge" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }} />

      <article>
        <header className="border-b border-line bg-paper-light">
          <div className="site-shell py-12 lg:py-20">
            <Link href="/insights" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-muted hover:text-ink">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to insights
            </Link>
            <div className="mt-12 grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
              <div>
                <p className="eyebrow">{post.category}</p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.1em] text-muted">{post.published} · {post.readingTime}</p>
              </div>
              <div>
                <h1 className="page-title">{post.title}</h1>
                <p className="body-large mt-8 max-w-3xl">{post.summary}</p>
                <div className="mt-8 border-l-2 border-copper pl-5">
                  <p className="text-sm font-bold">By Derek Asamoah-Amoyaw</p>
                  <p className="mt-1 text-sm text-muted">Founder, StrataEdge</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="site-shell grid py-14 lg:grid-cols-[.7fr_1.3fr] lg:py-20">
          <aside className="hidden lg:block">
            <div className="sticky top-28 max-w-xs border-t border-line pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">In this article</p>
              <ol className="mt-4 space-y-3">
                {post.sections.map((section, index) => (
                  <li key={section.heading} className="text-sm leading-5 text-muted">0{index + 1} · {section.heading}</li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="prose-editorial max-w-3xl">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.points && (
                  <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-line bg-paper-light">
        <div className="site-shell py-14 lg:py-20">
          <p className="eyebrow">Continue reading</p>
          <div className="mt-8 grid border-t border-line md:grid-cols-2">
            {related.map((item, index) => (
              <article key={item.slug} className={`border-b border-line py-8 md:px-8 ${index === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}>
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-muted">{item.category}</p>
                <h2 className="mt-5 font-heading text-3xl leading-tight tracking-[-0.025em]">
                  <Link href={`/insights/${item.slug}`} className="hover:text-forest">{item.title}</Link>
                </h2>
                <Link href={`/insights/${item.slug}`} className="text-link mt-7">Read article <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="site-shell flex min-h-[65vh] flex-col justify-center py-20">
      <p className="eyebrow">404 · Page not found</p>
      <h1 className="page-title mt-8 max-w-4xl">This route does not lead anywhere useful.</h1>
      <p className="body-large mt-7 max-w-xl">The page may have moved, or the address may be incomplete.</p>
      <div className="mt-9">
        <Link href="/" className="button-primary">Return to the homepage</Link>
      </div>
    </section>
  );
}

import Link from "next/link";

const companyLinks = [
  ["Services", "/services"],
  ["Selected work", "/work"],
  ["Engagements", "/engagements"],
  ["Insights", "/insights"],
  ["About the founder", "/about"],
  ["Contact", "/contact"],
];

const legalLinks = [
  ["Privacy Policy", "/privacy"],
  ["Terms of Service", "/terms"],
  ["Refund Policy", "/refund-policy"],
  ["Accessibility", "/accessibility"],
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper-light">
      <div className="site-shell py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="StrataEdge home">
              <span className="grid h-8 w-8 place-items-center border border-paper-light/50" aria-hidden="true">
                <span className="h-2.5 w-2.5 bg-copper" />
              </span>
              <span className="text-sm font-extrabold tracking-[0.14em]">STRATAEDGE</span>
            </Link>
            <p className="mt-7 max-w-lg font-heading text-3xl leading-tight text-paper-light">
              Modern infrastructure. Less manual work. Stronger resilience.
            </p>
            <p className="mt-6 max-w-md text-sm leading-6 text-paper-light/65">
              A US-registered technology consultancy serving organizations remotely with practical infrastructure,
              automation, cloud, and operational resilience expertise.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-copper">Navigate</h2>
            <ul className="mt-5 space-y-3 text-sm text-paper-light/75">
              {companyLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-paper-light">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-copper">Legal</h2>
            <ul className="mt-5 space-y-3 text-sm text-paper-light/75">
              {legalLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="hover:text-paper-light">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper-light/20 pt-6 text-xs text-paper-light/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} StrataEdge. All rights reserved.</p>
          <a href="mailto:derekasa@strataedge.tech" className="hover:text-paper-light">derekasa@strataedge.tech</a>
        </div>
      </div>
    </footer>
  );
}

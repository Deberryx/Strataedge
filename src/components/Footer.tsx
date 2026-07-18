import Image from "next/image";
import Link from "next/link";

const companyLinks = [
  ["Services", "/services"],
  ["Selected work", "/work"],
  ["Engagements", "/engagements"],
  ["Pricing", "/pricing"],
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
    <footer className="grid-texture-dark border-t border-line bg-navy text-paper-light">
      <div className="site-shell py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <Link href="/" className="inline-flex" aria-label="Strataedge home">
              <Image
                src="/logo-full.png"
                alt="Strataedge"
                width={779}
                height={271}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-7 max-w-lg font-heading text-3xl font-medium leading-tight text-paper-light [text-wrap:balance]">
              Modern infrastructure. Less manual work. Stronger resilience.
            </p>
            <p className="mt-6 max-w-md text-sm leading-6 text-paper-light/70">
              A US-registered technology consultancy serving organizations remotely with practical infrastructure,
              automation, cloud, and operational resilience expertise.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-mist">Navigate</h2>
            <ul className="mt-5 space-y-3 text-sm text-paper-light/75">
              {companyLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors duration-200 hover:text-mist">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-mist">Legal</h2>
            <ul className="mt-5 space-y-3 text-sm text-paper-light/75">
              {legalLinks.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors duration-200 hover:text-mist">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper-light/15 pt-6 text-xs text-paper-light/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Strataedge. All rights reserved.</p>
          <a href="mailto:derekasa@strataedge.tech" className="transition-colors duration-200 hover:text-mist">
            derekasa@strataedge.tech
          </a>
        </div>
      </div>
    </footer>
  );
}

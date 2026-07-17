"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Engagements", href: "/engagements" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="site-shell flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="StrataEdge home">
          <span className="relative grid h-8 w-8 place-items-center border border-ink" aria-hidden="true">
            <span className="h-2.5 w-2.5 bg-copper" />
          </span>
          <span className="text-sm font-extrabold tracking-[0.14em]">STRATAEDGE</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`border-b py-1 text-sm font-semibold transition-colors ${
                  active ? "border-copper text-ink" : "border-transparent text-muted hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="button-primary min-h-10 px-5 py-2">
            Request a consultation
          </Link>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-line lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" className="border-t border-line bg-paper-light lg:hidden" aria-label="Mobile navigation">
          <div className="site-shell flex flex-col py-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-base font-semibold"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className="button-primary mt-5">
              Request a consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

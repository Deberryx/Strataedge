import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://strataedge.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "StrataEdge | Infrastructure, Automation & Resilience",
    template: "%s | StrataEdge",
  },
  description:
    "A US-registered technology consultancy helping organizations modernize infrastructure, automate operations, and build resilient systems.",
  openGraph: {
    type: "website",
    siteName: "StrataEdge",
    title: "StrataEdge | Infrastructure, Automation & Resilience",
    description:
      "Practical infrastructure and automation consulting built for real operating environments.",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "StrataEdge | Infrastructure, Automation & Resilience",
    description:
      "Practical infrastructure and automation consulting built for real operating environments.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only z-[100] bg-ink px-4 py-3 text-paper-light focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

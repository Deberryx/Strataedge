"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

type ConsentChoice = "analytics" | "necessary";

const consentCookie = "strataedge_cookie_consent";
const consentLifetime = 60 * 60 * 24 * 180;
const subscribeToHydration = () => () => {};

function readConsent(): ConsentChoice | null {
  const value = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(`${consentCookie}=`))
    ?.split("=")[1];

  return value === "analytics" || value === "necessary" ? value : null;
}

export function CookieConsent() {
  const isHydrated = useSyncExternalStore(subscribeToHydration, () => true, () => false);
  const [choice, setChoice] = useState<ConsentChoice | null>(() =>
    typeof document === "undefined" ? null : readConsent(),
  );
  const [isOpen, setIsOpen] = useState(() =>
    typeof document === "undefined" ? false : readConsent() === null,
  );

  function saveChoice(nextChoice: ConsentChoice) {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";

    document.cookie = `${consentCookie}=${nextChoice}; Max-Age=${consentLifetime}; Path=/; SameSite=Lax${secure}`;
    setChoice(nextChoice);
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("strataedge:consent", { detail: nextChoice }));
  }

  if (!isHydrated) return null;

  return (
    <>
      {isOpen ? (
        <section
          role="dialog"
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-3 bottom-3 z-[90] border border-paper-light/20 bg-navy text-paper-light shadow-2xl sm:inset-x-6 sm:bottom-6 lg:left-auto lg:max-w-xl"
        >
          <div className="border-b border-paper-light/20 px-5 py-4 sm:px-7">
            <p className="text-xs font-bold uppercase tracking-[0.13em] text-mist">Privacy controls</p>
          </div>
          <div className="px-5 py-5 sm:px-7 sm:py-6">
            <h2 id="cookie-consent-title" className="font-heading text-2xl tracking-[-0.025em]">
              Your cookie choice
            </h2>
            <p className="mt-3 text-sm leading-6 text-paper-light/75">
              We use essential technology to operate and secure this site. With your permission, optional analytics
              may be used to understand site usage. Optional analytics stay off unless you allow them.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => saveChoice("analytics")} className="button-primary justify-center">
                Allow analytics
              </button>
              <button
                type="button"
                onClick={() => saveChoice("necessary")}
                className="inline-flex min-h-12 items-center justify-center border border-paper-light/35 px-5 text-sm font-bold text-paper-light transition-colors hover:border-paper-light hover:bg-paper-light hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mist focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
              >
                Necessary only
              </button>
            </div>
            <p className="mt-4 text-xs leading-5 text-paper-light/60">
              Read our{" "}
              <Link href="/privacy" className="underline decoration-mist/70 underline-offset-4 hover:text-mist">
                Privacy Policy
              </Link>{" "}
              for details.
            </p>
          </div>
        </section>
      ) : choice ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-3 left-3 z-[80] border border-line bg-paper-light px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] text-ink shadow-lg transition-colors hover:border-azure hover:text-azure focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azure focus-visible:ring-offset-2 sm:bottom-5 sm:left-5"
        >
          Cookie settings
        </button>
      ) : null}
    </>
  );
}

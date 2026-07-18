import type { Metadata } from "next";
import Link from "next/link";
import Stripe from "stripe";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Payment confirmation",
  robots: { index: false },
};

export const dynamic = "force-dynamic";

type VerificationResult =
  | { state: "paid"; email: string | null; businessName: string | null }
  | { state: "pending" }
  | { state: "invalid" };

async function verifySession(sessionId: string | undefined): Promise<VerificationResult> {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!sessionId || !secretKey) return { state: "invalid" };

  try {
    const stripe = new Stripe(secretKey);
    // Verify with Stripe directly using the secret key — the URL parameter
    // alone is never treated as proof of payment.
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status === "paid") {
      return {
        state: "paid",
        email: session.customer_details?.email ?? null,
        businessName: session.metadata?.businessName ?? null,
      };
    }
    if (session.status === "open") return { state: "pending" };
    return { state: "invalid" };
  } catch (error) {
    console.error("Stripe session verification error", error);
    return { state: "invalid" };
  }
}

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const result = await verifySession(sessionId);

  return (
    <section className="grid-texture border-b border-line">
      <div className="site-shell flex min-h-[60vh] items-center py-16">
        <div className="max-w-2xl">
          {result.state === "paid" ? (
            <>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-azure">
                <CheckCircle className="h-5 w-5" aria-hidden="true" /> Payment confirmed
              </p>
              <h1 className="page-title mt-6">Thank you — we are on it.</h1>
              <p className="body-large mt-7">
                Your payment{result.businessName ? ` for ${result.businessName}` : ""} has been received.
                We will contact you{result.email ? ` at ${result.email}` : ""} within 24 hours to kick off
                your website project.
              </p>
              <p className="mt-5 text-sm leading-6 text-muted">
                A receipt from Stripe has been sent to your email. If anything looks wrong, reach us at{" "}
                <a href="mailto:derekasa@strataedge.tech" className="font-semibold text-azure hover:underline">
                  derekasa@strataedge.tech
                </a>
                .
              </p>
            </>
          ) : result.state === "pending" ? (
            <>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-muted">
                <AlertCircle className="h-5 w-5" aria-hidden="true" /> Payment not completed
              </p>
              <h1 className="page-title mt-6">This checkout is still open.</h1>
              <p className="body-large mt-7">
                The payment was not completed. You can return to the pricing page and restart checkout whenever
                you are ready — no charge has been made.
              </p>
            </>
          ) : (
            <>
              <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-muted">
                <AlertCircle className="h-5 w-5" aria-hidden="true" /> Confirmation unavailable
              </p>
              <h1 className="page-title mt-6">We could not confirm this payment.</h1>
              <p className="body-large mt-7">
                If you completed checkout and were charged, your payment is safe with Stripe — email us at{" "}
                <a href="mailto:derekasa@strataedge.tech" className="font-semibold text-azure hover:underline">
                  derekasa@strataedge.tech
                </a>{" "}
                and we will confirm it right away.
              </p>
            </>
          )}

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/pricing" className="button-secondary">
              Back to pricing
            </Link>
            <Link href="/" className="text-link self-center">
              Return home <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

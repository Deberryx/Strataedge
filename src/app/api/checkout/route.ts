import { NextResponse } from "next/server";
import Stripe from "stripe";
import { BUSINESS_WEBSITE_PRICE_USD } from "@/lib/pricing";

export const runtime = "nodejs";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const requests = new Map<string, { count: number; resetAt: number }>();

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = requests.get(ip);
  if (!entry || entry.resetAt <= now) {
    requests.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) {
    return NextResponse.json({ error: "Please submit the signup form." }, { status: 415 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please wait and try again." }, { status: 429 });
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = text(body.name, 100);
    const email = text(body.email, 254).toLowerCase();
    const businessName = text(body.businessName, 120);
    const phone = text(body.phone, 30);
    const website = text(body.website, 200);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (name.length < 2 || businessName.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please check your name, email, and business name." }, { status: 400 });
    }

    const secretKey = process.env.STRIPE_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Payments are temporarily unavailable. Please email derekasa@strataedge.tech to get started." },
        { status: 503 },
      );
    }

    const stripe = new Stripe(secretKey);
    const origin = process.env.NEXT_PUBLIC_SITE_URL ?? request.headers.get("origin") ?? "https://strataedge.netlify.app";
    const siteUrl = origin.replace(/\/$/, "");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: BUSINESS_WEBSITE_PRICE_USD * 100,
            product_data: {
              name: "Business Website Package",
              description: "3–5 pages, mobile responsive, contact form and WhatsApp integration, basic SEO.",
            },
          },
        },
      ],
      metadata: {
        name,
        businessName,
        phone,
      },
      success_url: `${siteUrl}/pricing/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/pricing?checkout=cancelled`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "We could not start checkout. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout API error", error);
    return NextResponse.json({ error: "We could not start checkout. Please try again or email us directly." }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 5;
const requests = new Map<string, { count: number; resetAt: number }>();

function text(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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
    return NextResponse.json({ error: "Please submit the consultation form." }, { status: 415 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please wait and try again." }, { status: 429 });
  }

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const name = text(body.name, 100);
    const email = text(body.email, 254).toLowerCase();
    const company = text(body.company, 120);
    const service = text(body.service, 100);
    const stage = text(body.stage, 100);
    const message = text(body.message, 5000);
    const website = text(body.website, 200);

    if (website) {
      return NextResponse.json({ ok: true, message: "Your request has been sent." });
    }

    if (name.length < 2 || message.length < 20 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please check your name, email, and project description." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "The contact form is temporarily unavailable. Please email derekasa@strataedge.tech directly." },
        { status: 503 },
      );
    }

    const recipient = process.env.CONTACT_TO_EMAIL ?? "derekasa@strataedge.tech";
    const sender = process.env.CONTACT_FROM_EMAIL ?? "StrataEdge <onboarding@resend.dev>";
    const resend = new Resend(apiKey);
    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      company: escapeHtml(company || "Not provided"),
      service: escapeHtml(service || "Not selected"),
      stage: escapeHtml(stage || "Not selected"),
      message: escapeHtml(message).replaceAll("\n", "<br />"),
    };

    const { error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `Consultation request from ${name.replace(/[\r\n]/g, " ")}`,
      text: [
        "New StrataEdge consultation request",
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${company || "Not provided"}`,
        `Area: ${service || "Not selected"}`,
        `Stage: ${stage || "Not selected"}`,
        "",
        message,
      ].join("\n"),
      html: `<h2>New StrataEdge consultation request</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Organization:</strong> ${safe.company}</p>
        <p><strong>Area:</strong> ${safe.service}</p>
        <p><strong>Stage:</strong> ${safe.stage}</p>
        <hr />
        <p>${safe.message}</p>`,
    });

    if (error) {
      console.error("Contact email provider error", error);
      return NextResponse.json({ error: "We could not send your request. Please email us directly." }, { status: 502 });
    }

    return NextResponse.json({ ok: true, message: "Your request has been sent. We will respond within one to two business days." });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json({ error: "We could not process your request. Please try again or email us directly." }, { status: 500 });
  }
}

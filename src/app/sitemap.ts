import type { MetadataRoute } from "next";
import { insights } from "@/lib/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://strataedge.netlify.app").replace(/\/$/, "");
  const routes = [
    "",
    "/services",
    "/work",
    "/engagements",
    "/pricing",
    "/insights",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/refund-policy",
    "/accessibility",
  ];

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date("2026-07-17"),
      changeFrequency: route === "" ? ("monthly" as const) : ("yearly" as const),
      priority: route === "" ? 1 : route === "/services" || route === "/contact" ? 0.8 : 0.6,
    })),
    ...insights.map((post) => ({
      url: `${baseUrl}/insights/${post.slug}`,
      lastModified: new Date(post.published),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}

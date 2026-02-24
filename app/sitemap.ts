import type { MetadataRoute } from "next";
import { services } from "./lib/services";

const BASE_URL = "https://custombusinesssigns.ca";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE_URL, priority: 1.0 },
    { url: `${BASE_URL}/services`, priority: 0.9 },
    { url: `${BASE_URL}/about`, priority: 0.7 },
    { url: `${BASE_URL}/contact`, priority: 0.7 },
    { url: `${BASE_URL}/custom-signs`, priority: 0.8 },
    { url: `${BASE_URL}/storefront-signs`, priority: 0.8 },
    { url: `${BASE_URL}/pylon-signs`, priority: 0.8 },
    { url: `${BASE_URL}/channel-letters`, priority: 0.8 },
    { url: `${BASE_URL}/construction-signs`, priority: 0.8 },
    { url: `${BASE_URL}/illuminated-signs`, priority: 0.8 },
    { url: `${BASE_URL}/office-signs`, priority: 0.8 },
    { url: `${BASE_URL}/vehicle-wraps`, priority: 0.8 },
    { url: `${BASE_URL}/window-graphics`, priority: 0.8 },
  ];

  const servicePages = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    priority: 0.8,
  }));

  const allPages = [...staticPages, ...servicePages].map((page) => ({
    ...page,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
  }));

  return allPages;
}

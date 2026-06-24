import type { MetadataRoute } from "next";

const routes = ["", "/about", "/treatments", "/before-after", "/pricing", "/testimonials", "/blog", "/contact", "/book-consultation"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://skinduced.com.au${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.75
  })) satisfies MetadataRoute.Sitemap;
}

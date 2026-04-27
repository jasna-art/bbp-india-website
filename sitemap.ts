import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/nav";
import { SOLUTION_SLUGS } from "@/lib/content/solutions";
import { STORIES } from "@/lib/content/stories";
import { ESSAYS } from "@/lib/content/essays";

const STATIC_PATHS = [
  "/",
  "/what-we-do",
  "/brand-os",
  "/diagnostic",
  "/venture-studio",
  "/stories",
  "/thinking",
  "/people",
  "/life",
  "/work-with-us",
  "/learn-with-us",
  "/connect",
  "/vault",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));

  const solutionEntries: MetadataRoute.Sitemap = SOLUTION_SLUGS.map(
    (slug) => ({
      url: `${SITE_URL}/solutions/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const storyEntries: MetadataRoute.Sitemap = STORIES.map((s) => ({
    url: `${SITE_URL}/stories/${s.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const essayEntries: MetadataRoute.Sitemap = ESSAYS.map((e) => ({
    url: `${SITE_URL}/thinking/${e.slug}`,
    lastModified: new Date(e.publishedISO),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticEntries, ...solutionEntries, ...storyEntries, ...essayEntries];
}

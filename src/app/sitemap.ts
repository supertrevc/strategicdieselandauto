import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/constants";
import { IS_INDEXABLE } from "@/lib/search-visibility.mjs";

export default function sitemap(): MetadataRoute.Sitemap {
  // A sitemap is a direct request to index every URL in it, so a prospect demo
  // publishes an empty one. Restored automatically by SITE_SEARCH_VISIBILITY=
  // public — see src/lib/search-visibility.mjs.
  if (!IS_INDEXABLE) return [];

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || BUSINESS.url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}

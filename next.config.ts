import type { NextConfig } from "next";
import { ROBOTS_TAG } from "./src/lib/search-visibility.mjs";


/**
 * Sent on every response while this is a private prospect demo — see
 * src/lib/search-visibility.mjs. The <meta name="robots"> tag in the root
 * layout only covers rendered HTML; this covers the rest of the origin (API
 * routes, sitemap.xml, optimized images, anything in /public).
 * Empty once SITE_SEARCH_VISIBILITY=public.
 */
const robotsHeaders = ROBOTS_TAG
  ? [{ key: "X-Robots-Tag", value: ROBOTS_TAG }]
  : [];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https://maps.googleapis.com https://maps.gstatic.com https://*.google.com https://*.ggpht.com; frame-src https://www.google.com https://maps.google.com; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://analytics.google.com;",
          },
        ,
          ...robotsHeaders,
        ],
      },
    ];
  },
};

export default nextConfig;

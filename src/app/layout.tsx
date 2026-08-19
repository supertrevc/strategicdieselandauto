import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/constants";
import { IS_INDEXABLE } from "@/lib/search-visibility.mjs";
import { generateLocalBusinessSchema } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.shortName} | Diesel & Auto Repair | Vernal, UT`,
    template: `%s | ${BUSINESS.shortName}`,
  },
  description:
    "Full-service diesel and auto repair in Vernal, Utah. Expert engine repair, brakes, transmissions, diagnostics, and fleet services. Call (435) 789-0134.",
  metadataBase: new URL(BUSINESS.url),
  /**
   * Inherited by every route that does not set its own `robots`.
   *
   * Driven by SITE_SEARCH_VISIBILITY (src/lib/search-visibility.mjs) and
   * noindex by default: this is a prospect concept, and it must not turn up in
   * Google until the client buys the site and we launch it deliberately. The
   * matching X-Robots-Tag header is set in the Next config.
   */
  robots: IS_INDEXABLE
    ? {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      }
    : {
        index: false,
        follow: false,
        noarchive: true,
        noimageindex: true,
        googleBot: {
          index: false,
          follow: false,
          noarchive: true,
          noimageindex: true,
        },
      },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: BUSINESS.name,
  },
  // TODO: Add Google Search Console verification
  // verification: {
  //   google: process.env.GOOGLE_SITE_VERIFICATION,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.GA_MEASUREMENT_ID;

  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />

        {/* Google Analytics 4 */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}

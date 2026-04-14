import type { Metadata } from "next";
import { BUSINESS } from "./constants";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || BUSINESS.url;

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      type: "website",
      locale: "en_US",
    },
  };
}

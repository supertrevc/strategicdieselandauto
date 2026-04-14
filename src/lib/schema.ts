import { BUSINESS, SERVICES, REVIEWS } from "./constants";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.zip,
    },
    telephone: "+1-435-789-0134",
    url: BUSINESS.url,
    openingHours: BUSINESS.hoursStructured,
    priceRange: "$$",
    image: `${BUSINESS.url}${BUSINESS.logo}`,
    sameAs: [BUSINESS.facebook],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 40.4555,
        longitude: -109.5287,
      },
      geoRadius: "50000",
    },
    description:
      "Full-service diesel and auto repair shop in Vernal, Utah. Specializing in diesel engine repair, general auto maintenance, brakes, transmissions, and fleet services for the Uintah Basin.",
  };
}

export function generateServiceSchema() {
  return SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    provider: {
      "@type": "AutoRepair",
      name: BUSINESS.name,
    },
    areaServed: {
      "@type": "City",
      name: "Vernal, Utah",
    },
    description: service.shortDescription,
  }));
}

export function generateAggregateRatingSchema() {
  const totalRating =
    REVIEWS.reduce((sum, review) => sum + review.rating, 0) / REVIEWS.length;

  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: BUSINESS.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: totalRating.toFixed(1),
      reviewCount: REVIEWS.length,
      bestRating: "5",
      worstRating: "1",
    },
    review: REVIEWS.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating,
      },
      reviewBody: review.text,
    })),
  };
}

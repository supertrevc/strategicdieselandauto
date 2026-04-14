import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ReviewCard from "@/components/ReviewCard";
import CTABanner from "@/components/CTABanner";
import { REVIEWS } from "@/lib/constants";
import { generateAggregateRatingSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Customer Reviews | Strategic Diesel & Auto Repair",
  description:
    "Read what our customers say about Strategic Diesel and Auto Repair in Vernal, UT. Trusted diesel and auto repair with 5-star reviews.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateAggregateRatingSchema()),
        }}
      />

      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading uppercase">
            Customer Reviews
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Our customers are our best advertisement. Here&apos;s what they have
            to say about their experience at Strategic Diesel and Auto Repair.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                rating={review.rating}
                date={review.date}
                text={review.text}
                vehicle={review.vehicle}
              />
            ))}
          </div>

          {/* Leave a Review CTA */}
          <div className="mt-12 text-center bg-gray-light rounded-lg p-8">
            <h2 className="text-xl font-bold font-heading uppercase mb-3">
              Had a Great Experience?
            </h2>
            <p className="text-gray-mid mb-4">
              We&apos;d love to hear from you! Leave us a review on Google and
              let others know about your experience.
            </p>
            {/*
              TODO: Replace with actual Google review link.
              Typically: https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
              To integrate real reviews, consider:
              1. Google Places API (server-side fetch with API key)
              2. A reviews widget like Elfsight or Grade.us
              3. Manual updates to the REVIEWS array in constants.ts
            */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Strategic+Diesel+and+Auto+Repair+644+S+1500+W+Vernal+UT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent text-white font-bold py-3 px-6 rounded-lg hover:bg-accent-dark transition-colors min-h-[44px]"
            >
              Leave Us a Review on Google
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

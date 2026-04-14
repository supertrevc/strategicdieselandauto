import { BUSINESS } from "@/lib/constants";
import Link from "next/link";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
}

export default function CTABanner({
  headline = "Need Diesel or Auto Repair?",
  subtext = "Call us today or book online. We're here to keep you on the road.",
}: CTABannerProps) {
  return (
    <section className="bg-accent py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white font-heading uppercase mb-3">
          {headline}
        </h2>
        <p className="text-white/90 mb-8 text-lg">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BUSINESS.phoneLink}
            className="inline-flex items-center justify-center gap-2 bg-white text-accent font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors min-h-[44px]"
            aria-label={`Call us at ${BUSINESS.phone}`}
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now: {BUSINESS.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-dark transition-colors min-h-[44px]"
          >
            Request an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

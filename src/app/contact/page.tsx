import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/GoogleMap";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "Contact Us | Strategic Diesel & Auto Repair | Vernal, UT",
  description:
    "Contact Strategic Diesel and Auto Repair in Vernal, UT. Call (435) 789-0134 or request an appointment online. Located at 644 S 1500 W, Vernal, Utah.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading uppercase">
            Contact Us
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Ready to schedule your repair? Give us a call or fill out the form
            below. We&apos;ll get back to you within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info + Map */}
            <div>
              {/* Contact Info Card */}
              <div className="bg-gray-light rounded-lg p-6 md:p-8 mb-8">
                <h2 className="text-xl font-bold font-heading uppercase mb-6">
                  Get in Touch
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">Phone</p>
                      <a
                        href={BUSINESS.phoneLink}
                        className="text-accent hover:underline font-bold"
                        aria-label={`Call us at ${BUSINESS.phone}`}
                      >
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">Address</p>
                      <a
                        href={BUSINESS.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-dark hover:text-accent transition-colors"
                      >
                        {BUSINESS.address}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">Business Hours</p>
                      <p className="text-gray-dark text-sm">
                        {BUSINESS.hours.weekdays}
                      </p>
                      <p className="text-gray-dark text-sm">
                        {BUSINESS.hours.weekend}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-sm">Email</p>
                      <p className="text-gray-dark text-sm">{BUSINESS.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <GoogleMap />
            </div>

            {/* Appointment Form */}
            <div>
              <h2 className="text-xl font-bold font-heading uppercase mb-6">
                Request an Appointment
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

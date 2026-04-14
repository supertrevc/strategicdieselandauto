import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import CTABanner from "@/components/CTABanner";
import { BUSINESS, SERVICES } from "@/lib/constants";
import { generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Diesel & Auto Repair Services | Vernal, UT",
  description:
    "Complete diesel and auto repair services in Vernal, UT. Engine repair, brakes, transmissions, electrical diagnostics, preventive maintenance, and fleet services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateServiceSchema()),
        }}
      />

      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading uppercase">
            Our Services
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Comprehensive diesel and auto repair for Vernal, Utah and the
            surrounding Uintah Basin area. Whatever your vehicle needs, we&apos;ve
            got you covered.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`scroll-mt-24 ${
                  index < SERVICES.length - 1
                    ? "pb-16 border-b border-gray-200"
                    : ""
                }`}
              >
                <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-dark mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.subServices.map((sub) => (
                    <li
                      key={sub}
                      className="flex items-start gap-2 text-sm text-gray-dark"
                    >
                      <svg
                        className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {sub}
                    </li>
                  ))}
                </ul>
                <p className="text-sm">
                  Need{" "}
                  <span className="font-semibold lowercase">
                    {service.title}
                  </span>
                  ?{" "}
                  <a
                    href={BUSINESS.phoneLink}
                    className="text-accent font-semibold hover:underline"
                  >
                    Call {BUSINESS.phone}
                  </a>{" "}
                  or{" "}
                  <a
                    href="/contact"
                    className="text-accent font-semibold hover:underline"
                  >
                    book an appointment
                  </a>
                  .
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

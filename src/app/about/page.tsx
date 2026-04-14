import type { Metadata } from "next";
import { createMetadata } from "@/lib/metadata";
import CTABanner from "@/components/CTABanner";
import { TEAM_MEMBERS } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: "About Strategic Diesel and Auto Repair | Vernal, UT",
  description:
    "Learn about Strategic Diesel and Auto Repair in Vernal, Utah. Locally owned, ASE-certified technicians with 15+ years of diesel and auto repair experience.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading uppercase">
            About Us
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
            Locally owned and operated — proudly serving Vernal and the Uintah
            Basin.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase mb-6">
              Our Story
            </h2>
            {/* TODO: Replace with the actual business story from the owner */}
            <div className="prose prose-lg text-gray-dark space-y-4">
              <p>
                Strategic Diesel and Auto Repair was founded with a
                straightforward mission: provide the Vernal community with
                honest, high-quality vehicle repair at a fair price. What started
                as a small operation has grown into one of the Uintah
                Basin&apos;s most trusted shops for both diesel and gasoline
                vehicles.
              </p>
              <p>
                We know that in a town like Vernal, your truck isn&apos;t just
                transportation — it&apos;s your livelihood. Whether you&apos;re
                hauling equipment to the oil fields, running your ranch, or
                getting your family to school, we understand that a broken-down
                vehicle isn&apos;t just an inconvenience — it&apos;s a real
                problem. That&apos;s why we treat every vehicle like it&apos;s
                our own.
              </p>
              <p>
                Located at 644 S 1500 W in Vernal, our shop is equipped with
                modern diagnostic tools and staffed by experienced technicians
                who care about doing the job right the first time. We don&apos;t
                believe in upselling or unnecessary repairs — just honest
                assessments and quality workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase mb-10 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.role} className="bg-white rounded-lg p-6 text-center">
                {/* TODO: Replace placeholder with actual team photos */}
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <h3 className="font-bold font-heading uppercase text-lg">
                  {member.name}
                </h3>
                <p className="text-accent text-sm font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-mid text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase mb-10 text-center">
            Certifications &amp; Affiliations
          </h2>
          {/* TODO: Replace with actual certification logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {["ASE Certified", "Diesel Specialist", "Factory Trained", "BBB Member"].map(
              (cert) => (
                <div
                  key={cert}
                  className="bg-gray-light rounded-lg p-6 flex items-center justify-center text-center min-h-[120px]"
                >
                  <p className="font-bold text-gray-dark text-sm uppercase">
                    {cert}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Our Shop Photos */}
      <section className="bg-gray-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase mb-10 text-center">
            Our Shop
          </h2>
          {/* TODO: Replace with actual shop photos using Next.js <Image> component */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {["Shop Exterior", "Service Bays", "Diagnostic Equipment"].map(
              (label) => (
                <div
                  key={label}
                  className="bg-gray-300 rounded-lg aspect-video flex items-center justify-center"
                >
                  <p className="text-gray-dark font-medium text-sm">
                    {label} — Photo Placeholder
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

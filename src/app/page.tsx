import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import CTABanner from "@/components/CTABanner";
import { SERVICES, REVIEWS, TRUST_STATS } from "@/lib/constants";

export default function Home() {
  const featuredServices = SERVICES.slice(0, 6);
  const featuredReviews = REVIEWS.slice(0, 4);

  return (
    <>
      <HeroSection />

      {/* Trust Bar */}
      <section className="bg-gray-light py-8 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold font-heading text-accent">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-mid mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase">
              Our Services
            </h2>
            <p className="text-gray-mid mt-3 max-w-2xl mx-auto">
              From diesel engine overhauls to routine oil changes, we provide
              comprehensive auto and diesel repair services for the Vernal and
              Uintah Basin area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-light py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase">
              Why Choose Strategic Diesel?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading uppercase mb-2">
                Experienced Technicians
              </h3>
              <p className="text-gray-mid text-sm">
                Our team brings over 15 years of combined experience in diesel
                and automotive repair. We invest in ongoing training to stay
                current with the latest vehicle technologies and repair
                techniques.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading uppercase mb-2">
                Honest Pricing
              </h3>
              <p className="text-gray-mid text-sm">
                No hidden fees, no surprise charges. We provide upfront
                estimates before any work begins and always get your approval
                first. You&apos;ll know exactly what you&apos;re paying for.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold font-heading uppercase mb-2">
                Fast Turnaround
              </h3>
              <p className="text-gray-mid text-sm">
                We know your vehicle is essential to your daily life and work.
                That&apos;s why we prioritize efficient service without cutting
                corners, getting you back on the road as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-heading uppercase">
              What Our Customers Say
            </h2>
            <p className="text-gray-mid mt-3">
              Don&apos;t just take our word for it — hear from real customers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredReviews.map((review) => (
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
          <div className="text-center mt-8">
            <a
              href="/testimonials"
              className="text-accent font-semibold hover:underline"
            >
              See All Reviews &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}

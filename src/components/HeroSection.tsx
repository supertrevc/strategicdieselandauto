import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative bg-primary min-h-[500px] md:min-h-[600px] flex items-center">
      {/* Background placeholder — replace with real shop/truck photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-primary">
        {/* TODO: Replace with <Image> component using a real hero photo */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <svg className="w-96 h-96" viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading uppercase leading-tight max-w-3xl">
          Vernal&apos;s Trusted Diesel &amp; Auto Repair — Done Right the First
          Time
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          From diesel trucks to daily drivers, our experienced technicians
          deliver honest, reliable repairs that keep the Uintah Basin moving.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href={BUSINESS.phoneLink}
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-bold py-4 px-8 rounded-lg hover:bg-accent-dark transition-colors text-lg min-h-[44px]"
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
            className="inline-flex items-center justify-center bg-white text-primary font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors text-lg min-h-[44px]"
          >
            Request an Appointment
          </Link>
        </div>
      </div>
    </section>
  );
}

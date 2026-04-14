"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-primary transition-all duration-300 ${
          scrolled ? "py-2 shadow-lg" : "py-3"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" aria-label="Home">
              <Image
                src={BUSINESS.logo}
                alt="Strategic Diesel and Auto Repair"
                width={160}
                height={56}
                className={`transition-all duration-300 ${
                  scrolled ? "h-10 w-auto" : "h-12 w-auto md:h-14"
                }`}
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white text-sm font-medium uppercase tracking-wide hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Phone */}
            <a
              href={BUSINESS.phoneLink}
              className="hidden lg:flex items-center gap-2 text-white font-bold hover:text-accent transition-colors"
              aria-label={`Call us at ${BUSINESS.phone}`}
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {BUSINESS.phone}
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Spacer for fixed header */}
      <div className={scrolled ? "h-14" : "h-16 md:h-20"} />
    </>
  );
}

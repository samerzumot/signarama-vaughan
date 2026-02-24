"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PHONE_NUMBER, PHONE_HREF } from "../lib/gtag";
import { services } from "../lib/services";

export function Header({ variant = "full" }: { variant?: "full" | "landing" }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-header py-2" : "bg-white py-3"
      }`}
    >
      <div className="container-content flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-2">
          <Image
            src="/images/logo.webp"
            alt="Signarama Vaughan"
            width={180}
            height={50}
            className="h-10 md:h-12 w-auto"
            priority
          />
          <span className="text-[#af1e2d] text-sm md:text-base font-black italic leading-tight" style={{ fontFamily: 'var(--font-logo), sans-serif' }}>Vaughan</span>
        </Link>

        {variant === "full" && (
          <>
            {/* Desktop Nav — center */}
            <nav className="hidden lg:flex items-center gap-8">
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button className="font-body font-semibold text-text-primary hover:text-brand-red transition-colors flex items-center gap-1 text-[15px]">
                  Products
                  <svg className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {productsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[700px]">
                    <div className="bg-white rounded-card shadow-card-hover border border-surface-light p-6 grid grid-cols-3 gap-3">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="px-3 py-2 rounded hover:bg-surface-cream text-sm font-medium text-text-primary hover:text-brand-red transition-colors"
                        >
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link href="/about" className="font-body font-semibold text-text-primary hover:text-brand-red transition-colors text-[15px]">
                About Us
              </Link>
            </nav>

            {/* Desktop Right — phone + quote */}
            <div className="hidden lg:flex items-center gap-5">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-brand-red font-bold text-lg hover:opacity-80 transition-opacity">
                <PhoneIcon />
                {PHONE_NUMBER}
              </a>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                className="bg-brand-red text-white font-bold px-6 py-2.5 rounded-button text-sm uppercase tracking-wider hover:bg-brand-red-dark transition-colors shadow-cta"
              >
                Get a Quote
              </button>
            </div>
          </>
        )}

        {/* Landing variant: phone on desktop */}
        {variant === "landing" && (
          <div className="hidden lg:flex items-center gap-5">
            <a href={PHONE_HREF} className="flex items-center gap-2 text-brand-red font-bold text-xl hover:opacity-80 transition-opacity">
              <PhoneIcon />
              {PHONE_NUMBER}
            </a>
            <button
              onClick={() => {
                const el = document.getElementById("quote-form");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-brand-red text-white font-bold px-6 py-2.5 rounded-button text-sm uppercase tracking-wider hover:bg-brand-red-dark transition-colors shadow-cta"
            >
              Get a Quote
            </button>
          </div>
        )}

        {/* Mobile right side */}
        <div className="flex lg:hidden items-center gap-2">
          <a href={PHONE_HREF} className="text-brand-red p-2" aria-label="Call us">
            <PhoneIcon />
          </a>
          {variant === "full" && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-text-primary"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && variant === "full" && (
        <div className="lg:hidden fixed inset-0 bg-white z-[60] flex flex-col">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-surface-light">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src="/images/logo.webp"
                alt="Signarama Vaughan"
                width={150}
                height={42}
                className="h-10 w-auto"
              />
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-text-primary"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile menu body */}
          <nav className="flex-1 overflow-y-auto px-5 py-4">
            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="block text-text-primary text-lg font-semibold py-3 border-b border-surface-light"
            >
              All Products
            </Link>
            {services.slice(0, 8).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setMenuOpen(false)}
                className="block text-text-secondary text-base py-2.5 pl-4 border-b border-surface-light/50"
              >
                {s.title}
              </Link>
            ))}
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="block text-text-primary text-lg font-semibold py-3 border-b border-surface-light mt-2"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block text-text-primary text-lg font-semibold py-3 border-b border-surface-light"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu footer */}
          <div className="px-5 py-4 border-t border-surface-light space-y-3">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 text-brand-red font-bold text-xl py-3"
            >
              <PhoneIcon />
              {PHONE_NUMBER}
            </a>
            <button
              onClick={() => {
                setMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-quote-modal"));
              }}
              className="w-full bg-brand-red text-white font-bold py-4 rounded-button text-base uppercase tracking-wider shadow-cta"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

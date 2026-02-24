"use client";

import { PHONE_NUMBER, PHONE_HREF, reportConversion } from "../lib/gtag";

interface CTABannerProps {
  headline: string;
  ctaText: string;
  phone?: boolean;
  bgColor?: "red" | "navy";
}

export function CTABanner({
  headline,
  ctaText,
  phone = true,
  bgColor = "red",
}: CTABannerProps) {
  const bg = bgColor === "red" ? "bg-brand-red" : "bg-surface-charcoal";

  return (
    <section className={`${bg} py-16 relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      </div>
      <div className="container-content text-center relative z-10">
        <h2 className="font-display text-display-md md:text-display-lg text-white mb-6">{headline}</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => typeof window !== "undefined" && window.dispatchEvent(new CustomEvent("open-quote-modal"))}
            className={`inline-flex items-center justify-center px-8 py-4 font-bold rounded-button text-base transition-all duration-200 hover:-translate-y-0.5 ${
              bgColor === "red"
                ? "bg-white text-brand-red hover:bg-surface-cream"
                : "bg-brand-red text-white hover:bg-brand-red-dark shadow-cta"
            }`}
          >
            {ctaText}
          </button>
          {phone && (
            <a
              href={PHONE_HREF}
              onClick={() => reportConversion()}
              className="inline-flex items-center gap-2 text-white font-bold text-lg hover:opacity-80 transition-opacity"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              {PHONE_NUMBER}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

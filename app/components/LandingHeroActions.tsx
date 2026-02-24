"use client";

import { PHONE_NUMBER, PHONE_HREF, reportConversion } from "../lib/gtag";

export function LandingHeroActions() {
  return (
    <div className="flex flex-row items-start gap-3">
      <button
        onClick={() => {
          const el = document.getElementById("quote-form");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="btn-primary flex-1 sm:flex-none"
      >
        Get a Free Quote
      </button>
      <a href={PHONE_HREF} onClick={() => reportConversion()} className="btn-outline flex-1 sm:flex-none">
        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        {PHONE_NUMBER}
      </a>
    </div>
  );
}

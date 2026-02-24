"use client";

import { useState, useEffect } from "react";
import { PHONE_HREF, reportConversion } from "../lib/gtag";

export function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-surface-light p-3 flex gap-3 shadow-header">
      <a
        href={PHONE_HREF}
        onClick={() => reportConversion()}
        className="flex-1 flex items-center justify-center gap-2 border-2 border-text-primary text-text-primary font-bold py-3 rounded-button text-sm"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        Call Now
      </a>
      <button
        onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
        className="flex-1 bg-brand-red text-white font-bold py-3 rounded-button text-sm"
      >
        Get a Quote
      </button>
    </div>
  );
}

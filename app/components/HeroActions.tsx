"use client";

import { PHONE_NUMBER, PHONE_HREF } from "../lib/gtag";
import { PhoneLink } from "./PhoneLink";

export function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:300ms]">
      <button
        onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
        className="btn-primary text-lg px-10 py-5"
      >
        Get a Free Quote
      </button>
      <PhoneLink className="btn-outline text-lg px-10 py-5">
        Call {PHONE_NUMBER}
      </PhoneLink>
    </div>
  );
}

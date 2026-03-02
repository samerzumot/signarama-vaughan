export const GA_TRACKING_ID = "GT-5R8M6V4M";
export const PHONE_NUMBER = "905-597-8635";
export const PHONE_HREF = "tel:9055978635";

// NEW Phone call conversion
export const PHONE_CONVERSION_LABEL = "AW-17985903692/em0eCLCar4EcEMy4rIBD";

// NEW Form lead conversion (Using the same account ID)
// Setting to a placeholder for now until the exact label for "Signarama Vaughan G4 (329011122)" is confirmed
export const FORM_LEAD_CONVERSION_LABEL = "AW-17985903692/REPLACE_WITH_ACTUAL_LABEL";

/** Fires the phone call conversion (used on thank-you page as a legacy backup). */
export function reportConversion(url?: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: PHONE_CONVERSION_LABEL,
      event_callback: () => {
        if (url) window.location.href = url;
      },
    });
  }
}

/**
 * Fires the form-lead conversion event and calls `callback` once gtag
 * acknowledges the hit (or immediately if gtag is not loaded).
 * Use this in QuoteForm right after a successful submission.
 */
export function reportFormLeadConversion(callback?: () => void) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: FORM_LEAD_CONVERSION_LABEL,
      event_callback: callback ?? (() => { }),
    });
  } else {
    // gtag not loaded — don't block the callback
    callback?.();
  }
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

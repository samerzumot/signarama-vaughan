export const GA_TRACKING_ID = "AW-17956192139";
export const PHONE_NUMBER = "905-597-8635";
export const PHONE_HREF = "tel:9055978635";

// Phone call conversion (configured with phone_conversion_number in layout.tsx)
export const PHONE_CONVERSION_LABEL = "AW-17956192139/8e71CI6OuvkbEIv_lvJC";

// ⚠️ IMPORTANT: Replace this with your actual form lead conversion label from Google Ads.
// In Google Ads → Goals → Conversions → New conversion action → Website → "Submit lead form"
// The label is the part after "/" in the send_to value e.g. "AW-17956192139/YOUR_LABEL_HERE"
export const FORM_LEAD_CONVERSION_LABEL = "AW-17956192139/REPLACE_WITH_FORM_LABEL";

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

export const GA_TRACKING_ID = "GT-5R8M6V4M";
export const PHONE_NUMBER = "905-597-8635";
export const PHONE_HREF = "tel:9055978635";

// NEW Phone call conversion
export const PHONE_CONVERSION_LABEL = "AW-17985903692/em0eCLCar4EcEMy4rIBD";

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

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

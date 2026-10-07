export const GA_TRACKING_ID = "GT-5R8M6V4M";
export const PHONE_NUMBER = "905-597-8635";
export const PHONE_HREF = "tel:9055978635";

// NEW Phone call conversion
export const PHONE_CONVERSION_LABEL = "AW-17985903692/em0eCLCar4EcEMy4rIBD";

export const WHATSAPP_NUMBER = "+19055978635";
export const WHATSAPP_DISPLAY = "(905) 597-8635";
export const WHATSAPP_HREF = "https://wa.me/19055978635?text=Hi%2C%20I%27d%20like%20to%20inquire%20about%20custom%20signage.";

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

/** Fires a Google Analytics event when WhatsApp is clicked. */
export function reportWhatsAppClick(url?: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      event_category: "Contact",
      event_label: WHATSAPP_NUMBER,
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

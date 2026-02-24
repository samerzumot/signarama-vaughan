export const GA_TRACKING_ID = "AW-17956192139";
export const PHONE_NUMBER = "905-597-8635";
export const PHONE_HREF = "tel:9055978635";

export function reportConversion(url?: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-17956192139/8e71CI6OuvkbEIv_lvJC",
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

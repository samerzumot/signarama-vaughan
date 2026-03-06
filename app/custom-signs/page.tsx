import { LandingPage } from "../components/LandingPage";
import { createMetadata } from "../lib/metadata";
import { services } from "../lib/services";

export const metadata = createMetadata({
  title: "Custom Signs in Vaughan & the GTA",
  description: "Custom signs & signage in Vaughan. Channel letters, storefront signs, vehicle wraps & more. Full-service design, fabrication & install. Call (905) 597-8635.",
  path: "/custom-signs",
  canonical: "https://www.custombusinesssigns.ca/services",
});

export default function CustomSignsLanding() {
  const mixedGallery = [
    services.find((s) => s.slug === "channel-letters")?.gallery?.[0],
    services.find((s) => s.slug === "storefront-signs")?.gallery?.[0],
    services.find((s) => s.slug === "vehicle-wraps")?.gallery?.[0],
    services.find((s) => s.slug === "pylon-signs")?.gallery?.[0],
    services.find((s) => s.slug === "indoor-signs")?.gallery?.[0],
    services.find((s) => s.slug === "illuminated-signs")?.gallery?.[0],
  ].filter(Boolean) as { src: string; alt: string }[];

  return (
    <LandingPage
      title="Custom Signs in Vaughan & the GTA"
      subtitle="Canada's most trusted signage partner — full-service design, fabrication & installation for businesses of every size."
      heroImage="/images/heroes/channel-letters-night.jpg"
      serviceName="Custom Signs"
      galleryImages={mixedGallery}
      benefits={[
        { title: "Every Sign Type", description: "Channel letters, storefront signs, vehicle wraps, pylon signs, indoor signs, and more." },
        { title: "Enterprise Trusted", description: "Proven by Uber, Telus, York University, and businesses across the GTA." },
        { title: "Full Service", description: "Design, permits, fabrication, and installation — all handled under one roof." },
      ]}
    />
  );
}

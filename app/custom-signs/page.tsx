import { LandingPage } from "../components/LandingPage";
import { createMetadata } from "../lib/metadata";

export const metadata = createMetadata({
  title: "Custom Signs in Vaughan & the GTA",
  description: "Custom signs & signage in Vaughan. Channel letters, storefront signs, vehicle wraps & more. Full-service design, fabrication & install. Call (905) 597-8635.",
  path: "/custom-signs",
});

export default function CustomSignsLanding() {
  return (
    <LandingPage
      title="Custom Signs in Vaughan & the GTA"
      subtitle="Canada's most trusted signage partner — full-service design, fabrication & installation for businesses of every size."
      heroImage="/images/heroes/channel-letters-night.jpg"
      serviceName="Custom Signs"
      benefits={[
        { title: "Every Sign Type", description: "Channel letters, storefront signs, vehicle wraps, pylon signs, indoor signs, and more." },
        { title: "Enterprise Trusted", description: "Proven by Uber, Telus, York University, and businesses across the GTA." },
        { title: "Full Service", description: "Design, permits, fabrication, and installation — all handled under one roof." },
      ]}
    />
  );
}

import { LandingPage } from "../components/LandingPage";
import { createMetadata } from "../lib/metadata";
import { getServiceBySlug } from "../lib/services";

export const metadata = createMetadata({
  title: "Illuminated Signs & Light Boxes",
  description: "Custom illuminated signs & light boxes. LED channel letters, backlit signs & more. Free quote: (905) 597-8635.",
  path: "/illuminated-signs",
});

const service = getServiceBySlug("illuminated-signs");

export default function IlluminatedSignsLanding() {
  return (
    <LandingPage
      title="Illuminated Signs & Light Boxes"
      subtitle="Bright, energy-efficient illuminated signage that ensures your business is visible 24/7."
      heroImage="/images/heroes/channel-letters-night.jpg"
      serviceName="Illuminated Signs"
      galleryImages={service?.gallery}
      benefits={[
        { title: "Energy Efficient", description: "LED technology uses significantly less energy than traditional neon with superior brightness." },
        { title: "Multiple Options", description: "Channel letters, light boxes, edge-lit panels, backlit signs, and LED flex neon." },
        { title: "Weather-Rated", description: "All components sealed and rated for Canadian winter conditions." },
      ]}
    />
  );
}

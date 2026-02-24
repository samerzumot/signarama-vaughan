import { LandingPage } from "../components/LandingPage";
import { createMetadata } from "../lib/metadata";
import { getServiceBySlug } from "../lib/services";

export const metadata = createMetadata({
  title: "Custom Channel Letters & the GTA",
  description: "Professional channel letter signs for your business. LED illuminated, front-lit & halo-lit options. Design, fabrication & install. Free quote: (905) 597-8635.",
  path: "/channel-letters",
});

const service = getServiceBySlug("channel-letters");

export default function ChannelLettersLanding() {
  return (
    <LandingPage
      title="Custom Channel Letters for Your Business"
      subtitle="LED-illuminated individual letters that make your business impossible to miss — day and night."
      heroImage="/images/heroes/channel-letters-night.jpg"
      serviceName="Channel Letters"
      galleryImages={service?.gallery}
      benefits={[
        { title: "24/7 Visibility", description: "Energy-efficient LEDs rated for long-lasting performance ensure your sign shines around the clock." },
        { title: "Custom Design", description: "Every letter custom-fabricated to match your exact brand colors, fonts, and specifications." },
        { title: "Full-Service Install", description: "We handle permits, fabrication, and professional installation — you just approve the design." },
      ]}
    />
  );
}

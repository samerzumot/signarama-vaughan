import { LandingPage } from "../components/LandingPage";
import { createMetadata } from "../lib/metadata";
import { getServiceBySlug } from "../lib/services";

export const metadata = createMetadata({
  title: "Custom Window Graphics & Vinyl",
  description: "Custom window graphics, vinyl lettering & frosted film. Privacy & promotional solutions. Free quote: (905) 597-8635.",
  path: "/window-graphics",
});

const service = getServiceBySlug("window-graphics");

export default function WindowGraphicsLanding() {
  return (
    <LandingPage
      title="Custom Window Graphics & Vinyl"
      subtitle="Transform unused glass surfaces into powerful branding and privacy solutions."
      heroImage="/images/services/window-graphics.jpg"
      serviceName="Window Graphics"
      galleryImages={service?.gallery}
      benefits={[
        { title: "See-Through Options", description: "Perforated vinyl displays your brand outside while maintaining interior visibility." },
        { title: "Privacy Solutions", description: "Frosted and etched films for boardrooms, offices, and storefronts." },
        { title: "Easy Updates", description: "Seasonal promotional graphics that can be cleanly removed and replaced." },
      ]}
    />
  );
}

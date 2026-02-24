import { LandingPage } from "../components/LandingPage";
import { createMetadata } from "../lib/metadata";
import { getServiceBySlug } from "../lib/services";

export const metadata = createMetadata({
  title: "Office & Lobby Signs",
  description: "Custom office & lobby signs. Dimensional letters, reception branding, wayfinding & more. Free quote: (905) 597-8635.",
  path: "/office-signs",
});

const service = getServiceBySlug("indoor-signs");

export default function OfficeSignsLanding() {
  return (
    <LandingPage
      title="Office & Lobby Signs"
      subtitle="Professional interior signage that reinforces your brand from the moment visitors walk in."
      heroImage="/images/heroes/office-lobby.jpg"
      serviceName="Indoor Signs"
      galleryImages={service?.gallery}
      benefits={[
        { title: "Premium Materials", description: "Brushed aluminum, acrylic, stainless steel, and wood — tailored to your interior design." },
        { title: "Design Mockups", description: "See exactly how your sign will look on your actual wall before fabrication." },
        { title: "Clean Installation", description: "Professional mounting on any surface — drywall, concrete, brick, or glass." },
      ]}
    />
  );
}

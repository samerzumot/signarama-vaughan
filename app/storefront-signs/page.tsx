import { LandingPage } from "../components/LandingPage";
import { createMetadata } from "../lib/metadata";
import { getServiceBySlug } from "../lib/services";

export const metadata = createMetadata({
  title: "Storefront Signs & Building Signage in Vaughan",
  description: "Complete storefront signage solutions in Vaughan & the GTA. Channel letters, light boxes, window graphics & more. Free quote: (905) 597-8635.",
  path: "/storefront-signs",
});

const service = getServiceBySlug("storefront-signs");

export default function StorefrontSignsLanding() {
  return (
    <LandingPage
      title="Storefront Signs & Building Signage in Vaughan"
      subtitle="Complete signage packages that turn your storefront into a customer magnet."
      heroImage="/images/heroes/storefront-golden-hour.jpg"
      serviceName="Storefront Signs"
      galleryImages={service?.gallery}
      benefits={[
        { title: "Complete Packages", description: "Channel letters, window vinyl, blade signs, and awnings — all designed to work together." },
        { title: "Permit Handled", description: "We manage all municipal sign permits and landlord approvals on your behalf." },
        { title: "Brand Consistency", description: "Every element matches your brand guidelines for a cohesive, professional look." },
      ]}
    />
  );
}

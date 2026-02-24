import { LandingPage } from "../components/LandingPage";
import { createMetadata } from "../lib/metadata";
import { getServiceBySlug } from "../lib/services";

export const metadata = createMetadata({
  title: "Vehicle Wraps & Fleet Graphics",
  description: "Professional vehicle wraps & fleet graphics. Full & partial wraps, premium 3M vinyl. Free quote: (905) 597-8635.",
  path: "/vehicle-wraps",
});

const service = getServiceBySlug("vehicle-wraps");

export default function VehicleWrapsLanding() {
  return (
    <LandingPage
      title="Vehicle Wraps & Fleet Graphics"
      subtitle="Turn your vehicles into mobile billboards that advertise your business everywhere you drive."
      heroImage="/images/heroes/vehicle-wrap-street.jpg"
      serviceName="Vehicle Wraps"
      galleryImages={service?.gallery}
      benefits={[
        { title: "Premium Materials", description: "3M and Avery vinyl with UV-protective lamination built to last." },
        { title: "Maximum Exposure", description: "The most cost-effective advertising per impression of any medium." },
        { title: "Fleet Programs", description: "Consistent branding across your entire fleet with volume pricing." },
      ]}
    />
  );
}

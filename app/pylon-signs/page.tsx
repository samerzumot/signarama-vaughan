import { LandingPage } from "../components/LandingPage";
import { createMetadata } from "../lib/metadata";
import { getServiceBySlug } from "../lib/services";

export const metadata = createMetadata({
  title: "Pylon & Monument Signs in the GTA",
  description: "Custom pylon & monument signs in the GTA. Freestanding signs for maximum road visibility. Free quote: (905) 597-8635.",
  path: "/pylon-signs",
});

const service = getServiceBySlug("pylon-signs");

export default function PylonSignsLanding() {
  return (
    <LandingPage
      title="Pylon & Monument Signs in the GTA"
      subtitle="High-visibility freestanding signs engineered for maximum impact from the road."
      heroImage="/images/heroes/pylon-road.jpg"
      serviceName="Pylon Signs"
      galleryImages={service?.gallery}
      benefits={[
        { title: "Maximum Visibility", description: "Tall, illuminated structures visible from highways and major roads." },
        { title: "Multi-Tenant Options", description: "Directory-style pylons for commercial plazas with changeable tenant panels." },
        { title: "Engineered for Code", description: "Designed to meet local wind load requirements and building codes." },
      ]}
    />
  );
}

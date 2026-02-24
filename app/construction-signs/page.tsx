import { LandingPage } from "../components/LandingPage";
import { createMetadata } from "../lib/metadata";
import { getServiceBySlug } from "../lib/services";

export const metadata = createMetadata({
  title: "Construction & Development Signs",
  description: "Construction signs, hoarding graphics & site signage. Durable materials, fast turnaround. Free quote: (905) 597-8635.",
  path: "/construction-signs",
});

const service = getServiceBySlug("construction-signs");

export default function ConstructionSignsLanding() {
  return (
    <LandingPage
      title="Construction & Development Signs"
      subtitle="Durable site signage that meets regulations and markets your project to the community."
      heroImage="/images/services/construction-signs.jpg"
      serviceName="Construction Signs"
      galleryImages={service?.gallery}
      benefits={[
        { title: "Marketing + Compliance", description: "Hoarding graphics that turn barriers into billboards while meeting safety requirements." },
        { title: "Durable Materials", description: "Coroplast, aluminum composite, and heavy-duty vinyl built for construction site conditions." },
        { title: "Fast Turnaround", description: "Standard construction signs produced in days. Rush available." },
      ]}
    />
  );
}

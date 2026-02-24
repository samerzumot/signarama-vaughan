import { ServiceCard } from "../components/ServiceCard";
import { CTABanner } from "../components/CTABanner";
import { FAQAccordion } from "../components/FAQAccordion";
import { SectionHeading } from "../components/SectionHeading";
import { services } from "../lib/services";
import { createMetadata } from "../lib/metadata";

export const metadata = createMetadata({
  title: "Custom Sign Services | Channel Letters, Vehicle Wraps & More",
  description: "Browse all custom sign services from Signarama Vaughan. Channel letters, storefront signs, vehicle wraps, illuminated signs, pylon signs, and more in the GTA.",
  path: "/services",
});

const generalFaq = [
  { question: "How long does a sign project take?", answer: "Timelines vary by sign type and complexity. Simple vinyl graphics can be done in a few days, while custom channel letters or pylon signs typically take 3-5 weeks from design approval to installation." },
  { question: "Do you handle sign permits?", answer: "Yes. We research local bylaws, prepare permit applications, and coordinate with the municipality on your behalf. Permit handling is included in our full-service offering." },
  { question: "What areas do you serve?", answer: "We serve the entire Greater Toronto Area including Vaughan, Toronto, Mississauga, Brampton, Markham, Richmond Hill, Newmarket, and surrounding municipalities." },
  { question: "Do you offer design services?", answer: "Absolutely. Our in-house design team creates custom signage layouts and provides digital mockups showing your sign on photos of your actual building before fabrication begins." },
  { question: "What is your warranty?", answer: "We provide a craftsmanship warranty on all our signs. LED components are backed by manufacturer warranties of 50,000+ hours. Specific warranty terms vary by sign type." },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-surface-cream border-b border-surface-light pt-36 pb-16">
        <div className="container-content text-center">
          <h1 className="font-display text-display-lg text-text-primary mb-4">Custom Signage Solutions</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            From channel letters to vehicle wraps — we design, build, and install signage that gets your business noticed.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                imageSrc={service.image}
                imageAlt={service.title}
                href={`/services/${service.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner headline="Not sure which sign is right for you?" ctaText="Book a Free Consultation" />

      <section className="section-padding">
        <div className="container-content max-w-narrow">
          <SectionHeading title="Common Questions About Custom Signs" />
          <FAQAccordion items={generalFaq} />
        </div>
      </section>
    </main>
  );
}

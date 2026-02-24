import { ClientLogos } from "../components/ClientLogos";
import { ProcessSteps } from "../components/ProcessSteps";
import { CTABanner } from "../components/CTABanner";
import { SectionHeading } from "../components/SectionHeading";
import { createMetadata } from "../lib/metadata";
import { PHONE_NUMBER, PHONE_HREF } from "../lib/gtag";

export const metadata = createMetadata({
  title: "About Signarama Vaughan | Custom Sign Company in the GTA",
  description: "Learn about Signarama Vaughan — your full-service custom sign company in the GTA. Design, fabrication & installation. Visit our showroom in Vaughan.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <section className="bg-surface-cream border-b border-surface-light pt-36 pb-16">
        <div className="container-content text-center">
          <h1 className="font-display text-display-lg text-text-primary mb-4">About Signarama Vaughan</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Your full-service signage partner in the Greater Toronto Area
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content max-w-narrow">
          <SectionHeading title="Our Story" align="left" />
          <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
            <p>
              Signarama Vaughan is part of the world&apos;s largest sign franchise, with over 700 locations across
              more than 30 countries. But we are proudly local — owned and operated by a team that understands the
              Greater Toronto Area market inside and out.
            </p>
            <p>
              From our facility in Vaughan, we design, fabricate, and install custom signage for businesses of
              every size — from neighborhood shops to national brands like Uber, Telus, and York University. Our
              in-house capabilities mean we control quality at every stage, from the initial design concept through
              CNC fabrication to final installation.
            </p>
            <p>
              We believe every business deserves signage that commands attention and builds trust. Whether you
              need a single storefront sign or a complete fleet wrap program, we bring the same level of precision
              and care to every project.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-cream">
        <div className="container-content">
          <SectionHeading title="Why Signarama" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Franchise Backing", desc: "Locations worldwide. Proven systems and buying power." },
              { title: "Full In-House", desc: "Design, fabrication, and installation — all under one roof." },
              { title: "Enterprise Experience", desc: "Trusted by Uber, Telus, York University, and more." },
              { title: "Warranty", desc: "Craftsmanship guarantee on every project we deliver." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-card shadow-card text-center">
                <h3 className="font-display text-lg mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientLogos heading={false} />

      <ProcessSteps />

      <section className="section-padding">
        <div className="container-content text-center">
          <SectionHeading title="Visit Our Showroom" />
          <div className="max-w-md mx-auto">
            <address className="not-italic text-text-secondary text-lg mb-4">
              7250 Keele St, Unit 286<br />
              Vaughan, ON L4K 1Z8
            </address>
            <a href={PHONE_HREF} className="text-brand-red font-bold text-xl block mb-6">{PHONE_NUMBER}</a>
            <a
              href="https://www.google.com/maps/dir//7250+Keele+St+unit+286+Concord,+ON+L4K+1Z8+Canada"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <CTABanner headline="Let's Build Your Sign" ctaText="Get a Free Quote" />
    </main>
  );
}

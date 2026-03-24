import { ClientLogos } from "../components/ClientLogos";
import { ProcessSteps } from "../components/ProcessSteps";
import { CTABanner } from "../components/CTABanner";
import { SectionHeading } from "../components/SectionHeading";
import { createMetadata } from "../lib/metadata";
import { PHONE_NUMBER, PHONE_HREF } from "../lib/gtag";
import { PhoneLink } from "../components/PhoneLink";

export const metadata = createMetadata({
  title: "About Us | GTA Sign Company",
  description: "Learn about our full-service custom sign company in the GTA. Design, fabrication & installation. Visit our showroom.",
  path: "/about",
});

export default function AboutPage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Signarama Vaughan",
    foundingDate: "1986",
    url: "https://www.custombusinesssigns.ca",
    logo: "https://www.custombusinesssigns.ca/images/og-image.jpg",
    sameAs: [
      "https://www.facebook.com/signaramavaughan",
      "https://www.instagram.com/signaramavaughan",
      "https://www.linkedin.com/company/signarama-vaughan"
    ],
    knowsAbout: [
      "Sign Fabrication", 
      "Sign Installation", 
      "Vehicle Wraps", 
      "Channel Letters", 
      "Storefront Signs"
    ],
    memberOf: {
      "@type": "Organization",
      "name": "International Sign Association",
      "url": "https://signs.org"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
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
              We are a full-service custom sign company backed by the world&apos;s largest sign franchise network, with over 700 locations across
              more than 30 countries. But we are proudly local — founded in 1986, Signarama Vaughan is owned and operated by a team that understands the
              Greater Toronto Area market inside and out. For decades, we have been the trusted signage partner for businesses looking to scale, rebrand, or launch with impact.
            </p>
            <p>
              Unlike brokers who outsource production, we are a true manufacturing facility. From our state-of-the-art production center in Vaughan, we design, fabricate, and install custom signage for businesses of
              every size — from neighborhood shops to national brands like Uber, Telus, and York University. Our
              in-house capabilities mean we control quality at every single stage. We utilize advanced CNC routing, large-format digital printing, and precision metal fabrication to create signs that don&apos;t just look spectacular on day one, but endure the harsh Canadian weather for years to come.
            </p>
            <p>
              We are obsessed with quality materials. That is why we exclusively partner with industry leaders like 3M, Avery Dennison, and Grimco. When you invest in a storefront sign, illuminated channel letters, or a commercial vehicle wrap, you can rest assured it is built with premium cast vinyls, architectural-grade aluminum, and high-efficiency LED lighting systems designed for a 50,000+ hour lifespan. 
            </p>
            <p>
              Beyond manufacturing, we pride ourselves on making the complex process entirely seamless for our clients. Signage involves strict municipal compliance, landlord approvals, and structural engineering. Our dedicated project managers actively navigate the specific sign permit by-laws across Vaughan, Toronto, Mississauga, Brampton, and Markham, ensuring your project is fully legal and compliant before manufacturing even begins. As proud members of the <a href="https://signs.org" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-medium">International Sign Association (ISA)</a>, we ensure our work adheres to the highest industry standards for manufacturing and safety.
            </p>
            <p>
              We believe every business deserves signage that commands attention, builds unwavering trust, and drives real foot traffic. Whether you
              need a single storefront sign or a complete national fleet wrap program, we bring the same level of precision, care, and franchise-backed reliability to every project.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-cream">
        <div className="container-content">
          <SectionHeading title="Why Choose Us" />
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
            <PhoneLink className="text-brand-red font-bold text-xl block mb-6" />
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

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

      {/* Why Choose Us */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-cream skew-y-[-2deg] transform origin-top border-y border-surface-light"></div>
        <div className="container-content relative z-10 py-8">
          <SectionHeading title="Why Choose Us" />
          <div className="max-w-4xl mx-auto">
            <p className="text-text-secondary text-lg mb-10 text-center max-w-2xl mx-auto">
              Whether you are opening a new storefront or rebranding a corporate office, we deliver end-to-end signage solutions tailored to your brand. Our approach ensures you get high-quality, durable signs without the stress.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-card border border-surface-light shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-display text-xl text-text-primary mb-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent-gold border-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  Local GTA Expertise
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed pl-13">
                  We proudly serve businesses across Vaughan, Toronto, Mississauga, Brampton, and Markham. We handle the complex municipal sign permits and engineering drawings so you don&apos;t have to.
                </p>
              </div>

              <div className="bg-white p-6 rounded-card border border-surface-light shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-display text-xl text-text-primary mb-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  Premium Materials
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed pl-13">
                  We manufacture with industry-leading materials like 3M and Avery Dennison vinyls, architectural aluminum, and high-grade acrylics to guarantee maximum longevity and vibrant brand colors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-card border border-surface-light shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-display text-xl text-text-primary mb-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  Proven Reliability
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed pl-13">
                  Backed by a network of over 700 franchise locations worldwide, and building signs since 1986, you get powerful global resources paired with dedicated, incredibly responsive local service.
                </p>
              </div>

              <div className="bg-white p-6 rounded-card border border-surface-light shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-display text-xl text-text-primary mb-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Full-Service Process
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed pl-13">
                  From initial graphic design and municipal engineering to in-house fabrication and professional installation, our seamless process brings your vision to life faster than the competition.
                </p>
              </div>
            </div>
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

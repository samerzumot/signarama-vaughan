import { SectionHeading } from "../components/SectionHeading";
import { CTABanner } from "../components/CTABanner";
import { createMetadata } from "../lib/metadata";

export const metadata = createMetadata({
  title: "Sustainability & Standards | Signarama Vaughan",
  description: "We align with UN SDGs for sustainable manufacturing, use premium materials from 3M and Grimco, and manage sign permits across the entire GTA.",
  path: "/sustainability",
});

export default function SustainabilityPage() {
  return (
    <main>
      <section className="bg-surface-cream border-b border-surface-light pt-36 pb-16">
        <div className="container-content text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wide mb-2">Our Commitments</p>
          <h1 className="font-display text-display-lg text-text-primary mb-4">Sustainability & Standards</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Committed to responsible manufacturing, premium material sourcing, and complete municipal compliance across the Greater Toronto Area.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Aligned with UN SDGs" align="left" />
              <div className="space-y-4 text-text-secondary text-lg leading-relaxed">
                <p>
                  As a leading signage fabricator, we recognize our environmental impact. Our facility actively implements practices that align with the <a href="https://sdgs.un.org/goals" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-medium">United Nations Sustainable Development Goals (SDGs)</a>, specifically focusing on responsible consumption and production.
                </p>
                <p>
                  We maximize the lifespan of our signs by using energy-efficient LEDs rated for 50,000+ hours, significantly reducing urban energy consumption compared to traditional neon. Furthermore, our internal operations prioritize the recycling of aluminum off-cuts, acrylic scraps, and vinyl backing to minimize landfill waste.
                </p>
              </div>
            </div>
            <div className="bg-surface-cream p-8 rounded-card shadow-card">
              <h3 className="font-display text-2xl mb-4 text-text-primary">Our Operational Commitments</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-accent-green text-xl">✓</span>
                  <span className="text-text-secondary font-medium">Low-voltage, high-efficiency LED illumination</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-green text-xl">✓</span>
                  <span className="text-text-secondary font-medium">Comprehensive metal and acrylic scrap recycling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-green text-xl">✓</span>
                  <span className="text-text-secondary font-medium">Eco-friendly, low-VOC printing inks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface-charcoal text-white">
        <div className="container-content">
          <SectionHeading title="Premium Materials & Trusted Suppliers" />
          <p className="text-center text-white/80 max-w-3xl mx-auto mb-12 text-lg">
            Durability is a core component of sustainability. By using the highest-grade materials in the industry, we ensure your signs withstand harsh Canadian winters without fading or failing prematurely.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <a href="https://www.3mcanada.ca/3M/en_CA/graphics-signage-ca/" target="_blank" rel="noopener noreferrer" className="block bg-white/5 p-8 rounded-card hover:bg-white/10 transition-colors border border-white/10">
              <h4 className="font-display text-2xl mb-2 text-white">3M Canada</h4>
              <p className="text-white/60 text-sm">Industry-leading vinyl graphics, vehicle wraps, and architectural films.</p>
            </a>
            <a href="https://graphics.averydennison.com/en/home.html" target="_blank" rel="noopener noreferrer" className="block bg-white/5 p-8 rounded-card hover:bg-white/10 transition-colors border border-white/10">
              <h4 className="font-display text-2xl mb-2 text-white">Avery Dennison</h4>
              <p className="text-white/60 text-sm">Premium cast vinyls for vehicle fleets and high-durability external displays.</p>
            </a>
            <a href="https://www.grimco.ca" target="_blank" rel="noopener noreferrer" className="block bg-white/5 p-8 rounded-card hover:bg-white/10 transition-colors border border-white/10">
              <h4 className="font-display text-2xl mb-2 text-white">Grimco</h4>
              <p className="text-white/60 text-sm">Premier wholesale sign supply partner providing top-tier fabrication substrates and metals.</p>
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <SectionHeading title="Permitting & GTA Bylaw Compliance" align="left" />
              <p className="text-text-secondary text-lg leading-relaxed mb-4">
                Installing commercial signage is a complex legal process. We pride ourselves on being your fully-managed municipal partner. We handle all engineering drawings, landlord approvals, and sign permits for <strong>every municipality in the Greater Toronto Area</strong>. 
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                As a proudly local Vaughan business, we frequently collaborate with the <a href="https://vaughanchamber.ca/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-medium">Vaughan Chamber of Commerce</a> and intricately understand the <a href="https://www.vaughan.ca/business/building-and-renovating/sign-permits" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-medium">City of Vaughan&apos;s Sign By-laws</a> to ensure your storefront or pylon signs are fully legal and compliant. Our expertise extends across the entire region.
              </p>

              <h3 className="font-display text-2xl text-text-primary mt-12 mb-6 border-b border-surface-light pb-4">GTA Municipal Signage Resources</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-surface-cream p-6 rounded-card border border-surface-light shadow-sm">
                  <h4 className="font-display text-xl text-text-primary mb-3">Vaughan</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="https://www.vaughan.ca/residential/by-laws-and-enforcement/property-by-laws/sign-enforcement-and-permits" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-medium">City of Vaughan Sign Permits</a></li>
                    <li><a href="https://vaughanchamber.ca/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand-red transition-colors">Vaughan Chamber of Commerce</a></li>
                  </ul>
                </div>
                <div className="bg-surface-cream p-6 rounded-card border border-surface-light shadow-sm">
                  <h4 className="font-display text-xl text-text-primary mb-3">Toronto</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="https://www.toronto.ca/services-payments/building-construction/sign-permits-information/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-medium">City of Toronto Sign Permits</a></li>
                    <li><a href="https://bot.com/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand-red transition-colors">Toronto Region Board of Trade</a></li>
                  </ul>
                </div>
                <div className="bg-surface-cream p-6 rounded-card border border-surface-light shadow-sm">
                  <h4 className="font-display text-xl text-text-primary mb-3">Mississauga</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="https://www.mississauga.ca/services-and-programs/building-and-renovating/sign-permits/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-medium">Mississauga Sign Permits</a></li>
                    <li><a href="https://www.mississaugaboardoftrade.com/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand-red transition-colors">Mississauga Board of Trade</a></li>
                  </ul>
                </div>
                <div className="bg-surface-cream p-6 rounded-card border border-surface-light shadow-sm">
                  <h4 className="font-display text-xl text-text-primary mb-3">Brampton</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="https://www.brampton.ca/EN/residents/By-Law-Enforcement/Pages/Signs.aspx" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-medium">Brampton Sign Permits</a></li>
                    <li><a href="https://bramptonbot.com/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand-red transition-colors">Brampton Board of Trade</a></li>
                  </ul>
                </div>
                <div className="bg-surface-cream p-6 rounded-card border border-surface-light shadow-sm">
                  <h4 className="font-display text-xl text-text-primary mb-3">Markham</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="https://www.markham.ca/wps/portal/home/business/building-permits/" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-medium">Markham Sign Permits</a></li>
                    <li><a href="https://markham-chamber.ca/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand-red transition-colors">Markham Board of Trade</a></li>
                  </ul>
                </div>
                <div className="bg-surface-cream p-6 rounded-card border border-surface-light shadow-sm">
                  <h4 className="font-display text-xl text-text-primary mb-3">Richmond Hill</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="https://www.richmondhill.ca/en/business/building-and-zoning.aspx" target="_blank" rel="noopener noreferrer" className="text-brand-red hover:underline font-medium">Richmond Hill Sign Permits</a></li>
                    <li><a href="https://rhbot.ca/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand-red transition-colors">Richmond Hill Board of Trade</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner headline="Ready to Build a Better Sign?" ctaText="Request a Quote" />
    </main>
  );
}

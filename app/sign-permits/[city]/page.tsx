import { notFound } from "next/navigation";
import { permits, getPermitBySlug } from "../../lib/permits";
import { createMetadata } from "../../lib/metadata";
import { CTABanner } from "../../components/CTABanner";
import { SectionHeading } from "../../components/SectionHeading";
import Link from "next/link";
import type { Metadata } from "next";

export function generateStaticParams() {
  return permits.map((p) => ({ city: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const permit = getPermitBySlug(city);
  if (!permit) return {};
  
  return createMetadata({
    title: `${permit.city} Sign Permits & Bylaws (2026 Guide) | Custom Business Signs Toronto`,
    description: `Complete guide to ${permit.city} sign permit fees, requirements, and application processing times for 2026. Avoid bylaw fines and application denials.`,
    path: `/sign-permits/${permit.slug}`,
  });
}

export default async function CityPermitPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const permit = getPermitBySlug(city);
  if (!permit) notFound();

  // Generate structured data for this specific guide
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${permit.city} Sign Permit Guide 2026`,
    description: `Complete guide to ${permit.city} sign permit fees, requirements, and application processing times.`,
    publisher: {
      "@type": "Organization",
      name: "Custom Business Signs Toronto"
    }
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Hero */}
      <section className="bg-surface-cream border-b border-surface-light pt-36 pb-16">
        <div className="container-content text-center">
          <div className="mb-4 text-sm font-bold uppercase tracking-widest text-text-secondary">
            <Link href="/sign-permits" className="hover:text-brand-red transition-colors">GTA Permit Hub</Link>
            <span className="mx-2">/</span>
            <span className="text-brand-red">{permit.city}</span>
          </div>
          <h1 className="font-display text-display-lg text-text-primary mb-6">
            {permit.city} Sign Permit Guide (2026)
          </h1>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto mb-8 cursor-text">
            Installing a commercial sign in {permit.city} requires strict adherence to local bylaws. Whether you are opening a new retail store, installing an illuminated storefront sign, or mounting a corporate pylon, this 2026 guide covers the exact <strong>requirements, timelines, and municipal fees</strong> you need to prepare for.
          </p>
          <Link href="/contact" className="inline-block bg-brand-red text-white py-4 px-8 rounded-button font-bold hover:bg-brand-red-light transition-colors shadow-cta">
            Get a Fast Track Permit Quote
          </Link>
        </div>
      </section>

      {/* Structured Content Grid */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Fees & Requirements */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <SectionHeading title="2026 Permit Fees" align="left" />
                <div className="bg-white rounded-card shadow-sm border border-surface-light overflow-hidden">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-surface-cream border-b border-surface-light">
                        <th className="p-4 font-body font-bold text-text-primary">Sign Type</th>
                        <th className="p-4 font-body font-bold text-text-primary">Base Cost Estimator</th>
                      </tr>
                    </thead>
                    <tbody>
                      {permit.fees.map((fee, i) => (
                        <tr key={i} className="border-b border-surface-light last:border-0 hover:bg-surface-cream/50">
                          <td className="p-4 text-text-primary font-medium">{fee.type}</td>
                          <td className="p-4 text-text-secondary">{fee.cost}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="p-4 bg-surface-cream text-sm text-text-secondary border-t border-surface-light">
                    * Costs are approximate 2026 base fees. Accurate scaling fees depend on total sign square meterage and property zoning.
                  </div>
                </div>
              </div>

              <div>
                <SectionHeading title="Application Requirements" align="left" />
                <ul className="space-y-4">
                  {permit.requirements.map((req, i) => (
                    <li key={i} className="flex gap-4">
                      <div className="bg-surface-cream text-accent-gold p-2 rounded-full h-10 w-10 flex items-center justify-center shrink-0 border border-surface-light font-bold">
                        {i + 1}
                      </div>
                      <p className="text-text-secondary leading-relaxed pt-2">{req}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Timelines, Contacts & Warnings */}
            <div className="space-y-8">
              <div className="bg-surface-cream p-8 rounded-card border border-surface-light">
                <h3 className="font-display text-2xl text-text-primary mb-4">Processing Time</h3>
                <p className="text-text-secondary text-lg font-medium">{permit.processingTime}</p>
                <div className="h-1 bg-surface-light w-full my-6 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-gold w-3/4"></div>
                </div>
                <p className="text-sm text-text-secondary">If your property is in a Heritage Conservation District or requires minor variances, add an additional 10-15 business days to your timeline.</p>
              </div>

              <div className="bg-white p-8 rounded-card shadow-card border-t-4 border-brand-red">
                <h3 className="font-display text-2xl text-text-primary mb-4">Avoid Rejection</h3>
                <p className="text-sm text-text-secondary mb-4">In {permit.city}, the most common reasons examiners deny applications include:</p>
                <ul className="space-y-2 mb-6">
                  {permit.denialReasons.slice(0, 3).map((reason, i) => (
                    <li key={i} className="text-sm text-text-secondary flex gap-2">
                      <span className="text-brand-red shrink-0">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-bold text-text-primary">
                  Our team submits 100% compliant applications. <Link href="/contact" className="text-brand-red hover:underline">Let us handle it.</Link>
                </p>
              </div>

              <div className="bg-surface-charcoal p-8 rounded-card text-white">
                <h3 className="font-display text-2xl mb-4">Municipal Authority</h3>
                <p className="text-white/80 font-medium mb-1">{permit.contact.name}</p>
                <p className="text-brand-red font-bold text-lg mb-4">{permit.contact.phone}</p>
                {permit.contact.portalUrl && (
                  <a href={permit.contact.portalUrl} target="_blank" rel="noopener noreferrer" className="block text-sm text-white/60 hover:text-white hover:underline">
                    Official Permitting Portal →
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTABanner 
        headline={`Ready to build your sign in ${permit.city}?`} 
        ctaText="Request a Consultation" 
      />
    </main>
  );
}

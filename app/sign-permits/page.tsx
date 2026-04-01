import Link from "next/link";
import { CTABanner } from "../components/CTABanner";
import { SectionHeading } from "../components/SectionHeading";
import { PermitGuideForm } from "../components/PermitGuideForm";
import { createMetadata } from "../lib/metadata";
import { permits } from "../lib/permits";

export const metadata = createMetadata({
  title: "Complete Sign Permit Guide for GTA Businesses (2026) | Custom Business Signs Toronto",
  description: "Navigate sign permits across the GTA effortlessly. Compare 2026 requirements, fees, and timelines for Toronto, Vaughan, Mississauga, and beyond.",
  path: "/sign-permits",
});

export default function SignPermitsHubPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-surface-cream border-b border-surface-light pt-36 pb-16">
        <div className="container-content text-center">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wide mb-2">Regional Resources</p>
          <h1 className="font-display text-display-lg text-text-primary mb-4">Complete Sign Permit Guide for GTA Businesses</h1>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Navigating commercial sign permits across the Greater Toronto Area can be complex, with each municipality enforcing unique bylaws, fees, and timelines. This comprehensive 2026 guide provides the exact data you need for a smooth, compliant installation.
          </p>
        </div>
      </section>

      {/* Aggregate Stats */}
      <section className="border-b border-surface-light py-8 bg-white">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display text-2xl md:text-3xl text-accent-gold mb-1">15-30 Days</p>
              <p className="text-xs md:text-sm text-text-secondary font-bold uppercase tracking-wider">Avg. Processing Time</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl text-accent-gold mb-1">$150 - $2,500</p>
              <p className="text-xs md:text-sm text-text-secondary font-bold uppercase tracking-wider">Permit Cost Range</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl text-accent-gold mb-1">97%</p>
              <p className="text-xs md:text-sm text-text-secondary font-bold uppercase tracking-wider">Our Approval Rate</p>
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl text-accent-gold mb-1">100%</p>
              <p className="text-xs md:text-sm text-text-secondary font-bold uppercase tracking-wider">Bylaw Compliant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="section-padding bg-surface-charcoal text-white">
        <div className="container-content">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-display-md mb-6">Get the 2026 GTA Permit Guide (PDF)</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              We&apos;ll email you a PDF with permit fees, timelines, and application requirements for all 10 GTA municipalities — ready to save, print, or share with your team.
            </p>
            <PermitGuideForm />
            <p className="text-sm text-white/50 mt-4">Free resource. No spam, just the guide.</p>
          </div>
        </div>
      </section>

      {/* Spoke Navigation Matrix */}
      <section className="section-padding bg-surface-cream">
        <div className="container-content">
          <SectionHeading title="Select Your Municipality" subtitle="Click into your city below for specialized 2026 fee tables, application portals, and local bylaws." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {permits.map((permit: any) => (
              <Link 
                key={permit.slug} 
                href={`/sign-permits/${permit.slug}`}
                className="group bg-white p-6 rounded-card shadow-card hover:shadow-card-hover transition-all duration-300 border border-surface-light flex flex-col h-full"
              >
                <h3 className="font-display text-xl text-text-primary mb-2 group-hover:text-brand-red transition-colors">
                  {permit.city}
                </h3>
                <p className="text-text-secondary text-xs mb-4 flex-1">
                  {permit.city} bylaws, fees &amp; application portal.
                </p>
                <div className="text-brand-red font-bold text-sm inline-flex items-center gap-1">
                  View Guide 
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center text-text-secondary text-sm mt-8">
            Operating in a different GTA municipality? <Link href="/contact" className="text-brand-red hover:underline">Contact our permitting team.</Link>
          </p>
        </div>
      </section>

      {/* Common Denial Reasons */}
      <section className="section-padding bg-white border-y border-surface-light">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Why Sign Permits Get Denied" align="left" />
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                Based on our internal data analyzing hundreds of applications across the GTA, minor oversights cause massive delays. Here is why municipal examiners commonly reject applications:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-brand-red/10 text-brand-red p-2 rounded-full mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">Incorrect Setback Distances (38%)</h4>
                    <p className="text-sm text-text-secondary mt-1">Ground and pylon signs placed too close to property lines or municipal daylight triangles.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-brand-red/10 text-brand-red p-2 rounded-full mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">Excessive Sizing (24%)</h4>
                    <p className="text-sm text-text-secondary mt-1">Sign area exceeds the legally allowed percentage of the building&apos;s frontage.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-brand-red/10 text-brand-red p-2 rounded-full mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">Insufficient Engineering (18%)</h4>
                    <p className="text-sm text-text-secondary mt-1">Missing mechanical engineer stamps for large projecting or heavy wall signs.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-surface-cream p-8 rounded-card border border-surface-light text-center">
              <h3 className="font-display text-2xl text-text-primary mb-4">Let Us Handle the Red Tape</h3>
              <p className="text-text-secondary mb-8">
                Every custom sign ordered through Custom Business Signs Toronto includes completely managed permitting. We draw the plans, file the paperwork, and secure the approvals.
              </p>
              <Link href="/contact" className="inline-block bg-text-primary text-white font-bold py-4 px-8 rounded-button hover:bg-brand-red transition-colors">
                Request a Sign Consulation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner headline="Ready to Build a Better Sign?" ctaText="Get a Free Quote" />
    </main>
  );
}

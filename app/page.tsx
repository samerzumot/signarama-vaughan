import { ServiceCard } from "./components/ServiceCard";
import { TestimonialCard } from "./components/TestimonialCard";
import { TrustStrip } from "./components/TrustStrip";
import { ClientLogos } from "./components/ClientLogos";
import { ProcessSteps } from "./components/ProcessSteps";
import { CTABanner } from "./components/CTABanner";
import { SectionHeading } from "./components/SectionHeading";
import { services } from "./lib/services";
import { testimonials } from "./lib/testimonials";
import { PHONE_NUMBER, PHONE_HREF } from "./lib/gtag";
import { HeroActions } from "./components/HeroActions";

export default function HomePage() {
  const topServices = services;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-end text-white overflow-hidden">
        <div className="absolute inset-0 bg-surface-dark">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://custombusinesssigns.ca/cdn/shop/t/5/assets/signarama-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Bottom: tagline + CTAs */}
        <div className="relative z-10 container-content text-center pb-16 pt-8">
          <p className="text-white text-lg md:text-xl font-light mb-6 animate-fade-in [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
            Custom design, fabrication &amp; installation for businesses across the GTA
          </p>
          <HeroActions />
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <ClientLogos />
      <TrustStrip />

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-content">
          <SectionHeading title="What We Build" subtitle="Custom signage solutions for every business need" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topServices.map((service) => (
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

      {/* Testimonials */}
      <section className="section-padding bg-surface-cream">
        <div className="container-content">
          <SectionHeading title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://www.google.com/maps/search/Signarama+Vaughan+7250+Keele+St"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-card text-sm hover:shadow-lg transition-shadow"
            >
              <span className="text-accent-gold font-bold">4.9★</span>
              <span className="text-text-secondary">See all reviews on Google →</span>
            </a>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <CTABanner headline="Ready to Make Your Business Stand Out?" ctaText="Get a Free Quote" />

      {/* Location */}
      <section className="section-padding">
        <div className="container-content">
          <SectionHeading title="Visit Our Showroom" />
          <div className="max-w-3xl mx-auto">
            <div className="rounded-card overflow-hidden shadow-card mb-6">
              <iframe
                src="https://maps.google.com/maps?q=7250+Keele+St+Unit+286+Concord+ON+L4K+1Z8&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Signarama Vaughan location"
              />
            </div>
            <div className="text-center">
              <a href={PHONE_HREF} className="text-brand-red font-bold text-xl hover:opacity-80 transition-opacity">
                {PHONE_NUMBER}
              </a>
              <p className="text-text-muted text-sm mt-1">Mon-Fri 9AM-5PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

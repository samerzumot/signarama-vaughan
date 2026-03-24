import Image from "next/image";
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
import { PhoneLink } from "./components/PhoneLink";

export default function HomePage() {
  const topServices = services;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative flex flex-col bg-white text-text-primary overflow-hidden pt-[72px] lg:pt-[88px]">
        {/* Stacked Layout across all devices */}
        <div className="relative w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[3/1]">
          <Image
            src="/images/heroes/hero-quantum.jpg"
            alt="Professional installer in a bucket truck installing an illuminated channel letter sign in Toronto"
            fill
            className="object-cover object-[75%_center] md:object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        {/* Bottom: tagline + CTAs */}
        <div className="relative z-10 container-content text-center py-12 md:py-16 flex flex-col items-center justify-center">
          <h1 className="font-display text-display-lg text-text-primary mb-2 md:mb-4 animate-fade-in text-balance">
            Custom Sign Fabrication &amp; Installation in the GTA
          </h1>
          <p className="text-text-primary text-lg md:text-xl font-semibold mb-6 md:mb-8 animate-fade-in max-w-3xl mx-auto">
            Custom design, fabrication &amp; installation for GTA businesses since 1986
          </p>
          <HeroActions />
        </div>
      </section>

      <ClientLogos />
      
      {/* Stats / Trust Info */}
      <div className="bg-surface-cream border-y border-surface-light py-8">
        <div className="container-content">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-display text-3xl md:text-4xl text-accent-gold mb-1">Since 1986</p>
              <p className="text-xs md:text-sm text-text-secondary font-bold uppercase tracking-wider">Serving the GTA</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl text-accent-gold mb-1">700+</p>
              <p className="text-xs md:text-sm text-text-secondary font-bold uppercase tracking-wider">Locations Worldwide</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl text-accent-gold mb-1">4.9★</p>
              <p className="text-xs md:text-sm text-text-secondary font-bold uppercase tracking-wider">Google Rating</p>
            </div>
            <div>
              <p className="font-display text-3xl md:text-4xl text-accent-gold mb-1">50k+ Hrs</p>
              <p className="text-xs md:text-sm text-text-secondary font-bold uppercase tracking-wider">LED Lifespan</p>
            </div>
          </div>
        </div>
      </div>

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
                title="Sign Company location"
              />
            </div>
            <div className="text-center">
              <PhoneLink className="text-brand-red font-bold text-xl hover:opacity-80 transition-opacity" />
              <p className="text-text-muted text-sm mt-1">Mon-Fri 9AM-5PM</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

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
            Expertly crafted signage solutions for businesses of all sizes since 1986
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
              <p className="font-display text-3xl md:text-4xl text-accent-gold mb-1">10,000+</p>
              <p className="text-xs md:text-sm text-text-secondary font-bold uppercase tracking-wider">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>

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

      <div className="py-12">
        <TrustStrip />
      </div>

      {/* Our Approach (SEO Content) */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-surface-cream skew-y-[-2deg] transform origin-top border-y border-surface-light"></div>
        <div className="container-content relative z-10 py-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-display-sm text-text-primary mb-6 text-center">
              Your Trusted Partner for Custom Business Signs in the GTA
            </h2>
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

            <p className="text-center font-medium text-text-secondary italic">
              Ready to elevate your storefront or vehicle fleet? Let&apos;s build something great together.
            </p>
          </div>
        </div>
      </section>

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

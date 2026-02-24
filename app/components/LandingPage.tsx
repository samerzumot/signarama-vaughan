import Image from "next/image";
import { TestimonialCard } from "./TestimonialCard";
import { QuoteForm } from "./QuoteForm";
import { ClientLogos } from "./ClientLogos";
import { ImageGallery } from "./ImageGallery";
import { LandingHeroActions } from "./LandingHeroActions";
import { testimonials } from "../lib/testimonials";
import { PHONE_NUMBER, PHONE_HREF } from "../lib/gtag";
import type { GalleryImage } from "../lib/services";

interface LandingPageProps {
  title: string;
  subtitle: string;
  heroImage: string;
  serviceName: string;
  benefits: { title: string; description: string }[];
  processSteps?: string[];
  galleryImages?: GalleryImage[];
}

export function LandingPage({
  title,
  subtitle,
  heroImage,
  serviceName,
  benefits,
  galleryImages,
}: LandingPageProps) {
  const hasGallery = galleryImages && galleryImages.length > 0;

  return (
    <main>
      {/* Header */}
      <section className="bg-surface-cream border-b border-surface-light pt-36 pb-12">
        <div className="max-w-content mx-auto px-5">
          <h1 className="font-display text-display-md md:text-display-lg text-text-primary mb-4">{title}</h1>
          <p className="text-text-secondary text-lg max-w-2xl mb-6">{subtitle}</p>
          <LandingHeroActions />
        </div>
      </section>

      {/* Trust */}
      <section className="py-6 border-b border-surface-light">
        <div className="max-w-content mx-auto px-5 flex flex-wrap items-center justify-center gap-6 text-sm text-text-secondary">
          <span className="flex items-center gap-1"><span className="text-accent-gold font-bold">★★★★★</span> on Google</span>
          <span>|</span>
          <span>Craftsmanship Warranty</span>
          <span>|</span>
          <span>Serving the GTA</span>
        </div>
      </section>

      <ClientLogos heading={false} />

      {/* Gallery + Benefits */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Image side */}
            <div>
              {hasGallery ? (
                <ImageGallery images={galleryImages} serviceName={serviceName} />
              ) : (
                <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-card">
                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Benefits side */}
            <div>
              <h2 className="font-display text-display-sm text-text-primary mb-8">Why Choose Us</h2>
              <div className="space-y-6">
                {benefits.map((b, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-brand-red/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-brand-red" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </div>
                    <div>
                      <h3 className="font-display text-lg mb-1">{b.title}</h3>
                      <p className="text-text-secondary text-sm">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-surface-cream">
        <div className="max-w-content mx-auto px-5 text-center">
          <h2 className="font-display text-display-sm mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Consultation", "Design & Fabrication", "Installation"].map((step, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-brand-red text-white flex items-center justify-center font-bold mb-3">{i + 1}</div>
                <h3 className="font-display text-lg">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-5">
          <h2 className="font-display text-display-sm text-center mb-10">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {testimonials.slice(0, 2).map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-16 bg-surface-cream">
        <div className="max-w-md mx-auto px-5">
          <QuoteForm heading={`Get Your Free ${serviceName} Quote`} preselectedService={serviceName} />
        </div>
      </section>

      {/* Location */}
      <section className="py-12">
        <div className="max-w-content mx-auto px-5 text-center">
          <p className="text-text-secondary mb-2">7250 Keele St, Unit 286, Vaughan, ON L4K 1Z8</p>
          <p className="text-text-muted text-sm">Serving Vaughan, Toronto, and the Greater Toronto Area</p>
        </div>
      </section>
    </main>
  );
}

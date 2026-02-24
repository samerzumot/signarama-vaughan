import { notFound } from "next/navigation";
import Image from "next/image";
import { services, getServiceBySlug } from "../../lib/services";
import { testimonials } from "../../lib/testimonials";
import { TestimonialCard } from "../../components/TestimonialCard";
import { ClientLogos } from "../../components/ClientLogos";
import { FAQAccordion } from "../../components/FAQAccordion";
import { QuoteForm } from "../../components/QuoteForm";
import { SectionHeading } from "../../components/SectionHeading";
import { ServiceHeroActions } from "../../components/ServiceHeroActions";
import { ImageGallery } from "../../components/ImageGallery";
import { createMetadata } from "../../lib/metadata";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return createMetadata({
    title: `${service.title} | Custom ${service.title} for Your Business`,
    description: `Custom ${service.title.toLowerCase()} in Vaughan & the GTA. ${service.shortDescription} Professional design, fabrication & installation. Free quote: (905) 597-8635.`,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const hasGallery = service.gallery && service.gallery.length > 0;

  return (
    <main>
      {/* Header */}
      <section className="bg-surface-cream border-b border-surface-light pt-36 pb-12">
        <div className="container-content">
          <p className="text-brand-red font-semibold text-sm uppercase tracking-wide mb-2">Our Services</p>
          <h1 className="font-display text-display-lg text-text-primary mb-4">{service.title}</h1>
          <p className="text-text-secondary text-lg max-w-2xl mb-6">{service.shortDescription}</p>
          <ServiceHeroActions serviceName={service.title} />
        </div>
      </section>

      {/* Featured Image + Description */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Image side */}
            <div>
              {hasGallery ? (
                <ImageGallery images={service.gallery!} serviceName={service.title} />
              ) : (
                <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-card">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              )}
            </div>

            {/* Content side */}
            <div>
              <h2 className="font-display text-display-sm text-text-primary mb-4">What Are {service.title}?</h2>
              <p className="text-text-secondary leading-relaxed mb-8">{service.longDescription}</p>

              <h3 className="font-display text-lg text-text-primary mb-4">Options & Features</h3>
              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-accent-green flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <ClientLogos heading={false} />

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-content">
          <SectionHeading title="What Our Clients Say" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-narrow mx-auto">
            {testimonials.slice(0, 2).map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-surface-cream">
        <div className="container-content max-w-narrow">
          <SectionHeading title={`${service.title} FAQ`} />
          <FAQAccordion items={service.faq} />
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-padding">
        <div className="container-content max-w-md mx-auto">
          <QuoteForm heading={`Get a Free ${service.title} Quote`} preselectedService={service.title} />
        </div>
      </section>
    </main>
  );
}

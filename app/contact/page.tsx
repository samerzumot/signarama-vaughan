import { QuoteForm } from "../components/QuoteForm";
import { createMetadata } from "../lib/metadata";
import { PHONE_NUMBER, PHONE_HREF } from "../lib/gtag";

export const metadata = createMetadata({
  title: "Contact Signarama Vaughan | Get a Free Sign Quote",
  description: "Contact Signarama Vaughan for a free custom sign quote. Call (905) 597-8635 or visit our showroom at 7250 Keele St, Vaughan.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <section className="bg-surface-cream border-b border-surface-light pt-36 pb-16">
        <div className="container-content text-center">
          <h1 className="font-display text-display-lg text-text-primary mb-4">Get in Touch</h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Ready for a free consultation? We&apos;d love to hear about your project.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-content mx-auto">
            <div>
              <QuoteForm heading="Request a Free Quote" />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl mb-4">Contact Details</h3>
                <div className="space-y-4">
                  <a href={PHONE_HREF} className="flex items-center gap-3 text-brand-red font-bold text-xl hover:opacity-80 transition-opacity">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    {PHONE_NUMBER}
                  </a>
                  <p className="flex items-center gap-3 text-text-secondary">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Use the form to send us a message
                  </p>
                  <div className="flex items-start gap-3 text-text-secondary">
                    <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <address className="not-italic">
                      7250 Keele St, Unit 286<br />
                      Vaughan, ON L4K 1Z8<br />
                      Canada
                    </address>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl mb-4">Hours</h3>
                <div className="text-text-secondary space-y-1">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>

              <div className="rounded-card overflow-hidden shadow-card">
                <iframe
                  src="https://maps.google.com/maps?q=7250+Keele+St+Unit+286+Concord+ON+L4K+1Z8&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Signarama Vaughan location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

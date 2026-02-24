export function TrustStrip() {
  return (
    <section className="bg-surface-cream py-12 border-y border-surface-light">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <TrustItem
            icon={<CanadaIcon />}
            title="Locally Sourced Materials"
            description="Built tough for Canadian weather"
          />
          <TrustItem
            icon={<HandshakeIcon />}
            title="Full-Service Partner"
            description="Design &bull; Fabrication &bull; Installation"
          />
          <TrustItem
            icon={<ShieldIcon />}
            title="Craftsmanship Warranty"
            description="Quality guaranteed on every project"
          />
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="w-14 h-14 flex items-center justify-center text-brand-red">
        {icon}
      </div>
      <h5 className="font-body font-bold text-text-primary uppercase tracking-wide text-sm">{title}</h5>
      <p className="text-text-secondary text-sm" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

function CanadaIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M12 2L9 9H2l5.5 4.5L5 21l7-5 7 5-2.5-7.5L22 9h-7L12 2z" fill="currentColor" className="text-brand-red" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 00-7.65 0l-.77.78-.77-.78a5.4 5.4 0 00-7.65 0A5.4 5.4 0 003.58 12L12 20.42 20.42 12a5.4 5.4 0 000-7.42z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
    </svg>
  );
}

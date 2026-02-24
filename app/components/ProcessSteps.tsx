const steps = [
  {
    number: 1,
    title: "Consultation",
    description: "We discuss your vision, assess your location, and recommend the best signage solution.",
  },
  {
    number: 2,
    title: "Design & Approval",
    description: "Our team creates digital mockups on photos of your actual building for your approval.",
  },
  {
    number: 3,
    title: "Fabrication",
    description: "Your sign is precision-built in our facility using premium, locally sourced materials.",
  },
  {
    number: 4,
    title: "Installation",
    description: "Our certified installers handle permits, mounting, and electrical — you just watch it go up.",
  },
];

export function ProcessSteps() {
  return (
    <section className="section-padding bg-surface-cream">
      <div className="container-content">
        <h2 className="font-display text-display-md text-center mb-12">From Concept to Installation</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="flex flex-col items-center text-center relative">
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-brand-red/20" />
              )}
              <div className="w-12 h-12 rounded-full bg-brand-red text-white flex items-center justify-center font-bold text-lg mb-4 relative z-10">
                {step.number}
              </div>
              <h3 className="font-display text-lg mb-2">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

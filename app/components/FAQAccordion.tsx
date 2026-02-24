"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="divide-y divide-surface-light border-y border-surface-light">
        {items.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left group"
            >
              <span className="font-semibold text-text-primary group-hover:text-brand-red transition-colors pr-4">
                {item.question}
              </span>
              <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-text-muted">
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === i ? "max-h-96 pb-5" : "max-h-0"
              }`}
            >
              <p className="text-text-secondary leading-relaxed pr-8">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

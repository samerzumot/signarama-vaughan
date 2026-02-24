interface TestimonialCardProps {
  quote: string;
  author: string;
  date: string;
  rating: number;
  googleLink: string;
}

export function TestimonialCard({ quote, author, date, rating, googleLink }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-card p-6 shadow-card border border-surface-light flex flex-col h-full">
      <div className="text-brand-red/20 text-5xl font-display leading-none mb-2">&ldquo;</div>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-text-secondary italic flex-1 mb-4 leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="font-bold text-text-primary text-sm">{author}</p>
          <p className="text-text-muted text-xs">{date}</p>
        </div>
        <a
          href={googleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-text-muted border border-surface-light px-3 py-1 rounded-full hover:bg-surface-cream transition-colors"
        >
          Read on Google
        </a>
      </div>
    </div>
  );
}

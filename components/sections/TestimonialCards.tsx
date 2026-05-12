interface Testimonial {
  quote: string;
  name: string;
  context: string;
  avatar?: string;
  rating?: number;
}

interface TestimonialCardsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex gap-1 mb-3" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i < rating ? '#F59E0B' : '#E2E8F0'}>
          <path d="M8 1l1.88 4.22L14.3 5.7l-3.3 3.02.9 4.28L8 11.2l-3.9 2.3.9-4.28L1.7 5.7l4.42-.48L8 1z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCards({ title, subtitle, testimonials }: TestimonialCardsProps) {
  return (
    <section className="bg-bg-main py-20 px-4">
      <div className="max-w-site mx-auto">
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">{title}</h2>
        <p className="text-text-muted text-lg text-center mt-2 mb-12">{subtitle}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-card border border-border-light shadow-card p-6 border-l-4 border-l-accent">
              <Stars rating={t.rating} />
              <p className="text-text-primary leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 border-t border-border-light pt-4">
                {t.avatar && (
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                )}
                <div>
                  <div className="font-outfit font-semibold text-text-primary text-sm">{t.name}</div>
                  <div className="text-text-muted text-xs">{t.context}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

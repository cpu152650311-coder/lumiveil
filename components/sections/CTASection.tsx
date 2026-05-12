import Link from 'next/link';

interface CTAProps {
  title: string;
  subtitle: string;
  cta: { label: string; href: string }[];
  trustBadges?: { icon: string; label: string }[];
  variant?: 'accent' | 'light' | 'white';
  compact?: boolean;
}

export default function CTASection({ title, subtitle, cta, trustBadges, variant = 'light', compact }: CTAProps) {
  const bgClass = variant === 'accent' ? 'bg-accent text-white' : variant === 'light' ? 'bg-accent-light' : 'bg-white';

  return (
    <section className={`${bgClass} ${compact ? 'py-12' : 'py-20'} px-4`}>
      <div className="max-w-site mx-auto text-center">
        <h2 className={`font-outfit text-3xl sm:text-4xl font-bold tracking-tight ${variant === 'accent' ? 'text-white' : 'text-text-primary'}`}>
          {title}
        </h2>
        <p className={`text-lg mt-3 max-w-xl mx-auto ${variant === 'accent' ? 'text-white/85' : 'text-text-muted'}`}>
          {subtitle}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {cta.map((btn, i) => (
            <Link
              key={i}
              href={btn.href}
              className={variant === 'accent' ? 'bg-white text-accent font-outfit font-semibold px-7 py-3 rounded-card hover:shadow-lg transition-all' : 'btn-accent'}
            >
              {btn.label}
            </Link>
          ))}
        </div>
        {trustBadges && (
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {trustBadges.map((b, i) => (
              <span key={i} className={`text-sm flex items-center gap-1.5 ${variant === 'accent' ? 'text-white/75' : 'text-text-muted'}`}>
                {b.icon} {b.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

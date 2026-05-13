import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  breadcrumb?: { label: string; href: string }[];
  image?: string;
  imageAlt?: string;
  compact?: boolean;
  badge?: string;
  cta?: { label: string; href: string; primary?: boolean }[];
  trustBadges?: string[];
  children?: React.ReactNode;
}

export default function HeroSection({ title, subtitle, breadcrumb, image, imageAlt, compact, badge, cta, trustBadges, children }: HeroProps) {
  return (
    <section className={`bg-bg-main ${compact ? 'pt-32 pb-12' : 'pt-32 pb-20'} px-4`}>
      <div className="max-w-site mx-auto">
        {breadcrumb && (
          <nav className="mb-4 text-sm text-text-muted flex gap-2">
            {breadcrumb.map((b, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-1">/</span>}
                {i < breadcrumb.length - 1 ? (
                  <Link href={b.href} className="hover:text-primary transition-colors">{b.label}</Link>
                ) : (
                  <span className="text-text-primary">{b.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className={`flex flex-col ${image ? 'lg:flex-row lg:items-center lg:gap-16' : ''}`}>
          <div className={`${image ? 'lg:w-1/2' : 'max-w-3xl'}`}>
            {badge && (
              <span className="inline-block bg-primary-light text-primary font-outfit font-semibold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-4">
                {badge}
              </span>
            )}
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight">
              {title}
            </h1>
            <p className="text-lg sm:text-xl text-text-muted mt-4 leading-relaxed max-w-lg">
              {subtitle}
            </p>
            {cta && (
              <div className="flex flex-wrap gap-3 mt-6">
                {cta.map((btn, i) => (
                  <Link
                    key={i}
                    href={btn.href}
                    className={btn.primary === false
                      ? 'btn-outline'
                      : 'btn-accent'
                    }
                  >
                    {btn.label}
                  </Link>
                ))}
              </div>
            )}
            {trustBadges && (
              <div className="flex flex-wrap gap-4 mt-6">
                {trustBadges.map((badge, i) => (
                  <span key={i} className="text-sm text-text-muted flex items-center gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-primary-light flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#0EA5E9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {badge}
                  </span>
                ))}
              </div>
            )}
            {children}
          </div>
          {image && (
            <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
              <img src={image} alt={imageAlt || ''} className="max-w-full h-auto max-h-[480px] object-contain" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

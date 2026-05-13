import Link from 'next/link';

interface FeatureBlock {
  icon?: string;
  title: string;
  description: string;
  link?: { label: string; href: string };
  image?: string;
}

interface FeatureAlternatingProps {
  title: string;
  subtitle: string;
  features: FeatureBlock[];
}

export default function FeatureAlternating({ title, subtitle, features }: FeatureAlternatingProps) {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-site mx-auto">
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">{title}</h2>
        <p className="text-text-muted text-lg text-center mt-2 mb-14">{subtitle}</p>
        <div className="space-y-20">
          {features.map((feat, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={i} className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}>
                <div className="lg:w-1/2">
                  {feat.image ? (
                    <img src={feat.image} alt={feat.title} className="w-full max-w-lg mx-auto rounded-card" />
                  ) : (
                    <div className="w-full max-w-lg mx-auto h-64 bg-primary-light rounded-card flex items-center justify-center">
                      <span className="text-5xl">{feat.icon || '🔬'}</span>
                    </div>
                  )}
                </div>
                <div className="lg:w-1/2 max-w-lg">
                  {feat.icon && !feat.image && (
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-2xl mb-4">{feat.icon}</div>
                  )}
                  <h3 className="font-outfit text-2xl font-bold text-text-primary">{feat.title}</h3>
                  <p className="text-text-muted mt-3 leading-relaxed">{feat.description}</p>
                  {feat.link && (
                    <Link href={feat.link.href} className="inline-flex items-center gap-1 text-primary font-semibold mt-3 hover:opacity-80 transition-opacity">
                      {feat.link.label} <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

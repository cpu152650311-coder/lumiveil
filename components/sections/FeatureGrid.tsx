interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  accuracy?: string;
}

interface FeatureGridProps {
  title: string;
  subtitle: string;
  features: FeatureCard[];
  variant?: 'grid' | 'cards';
}

export default function FeatureGrid({ title, subtitle, features, variant = 'cards' }: FeatureGridProps) {
  return (
    <section className="bg-bg-main py-20 px-4">
      <div className="max-w-site mx-auto">
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">{title}</h2>
        <p className="text-text-muted text-lg text-center mt-2 mb-12">{subtitle}</p>
        <div className={`grid ${variant === 'cards' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-6`}>
          {features.map((feat, i) => (
            <div key={i} className="bg-white rounded-card border border-border-light shadow-card p-6 hover:shadow-card-hover transition-shadow">
              <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center text-2xl mb-4">{feat.icon}</div>
              <h3 className="font-outfit text-lg font-bold text-text-primary mb-2">{feat.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{feat.description}</p>
              {feat.accuracy && (
                <span className="inline-block mt-3 text-xs font-semibold text-primary bg-primary-light px-2 py-1 rounded-full">{feat.accuracy}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

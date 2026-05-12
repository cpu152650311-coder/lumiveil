interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  title: string;
  subtitle: string;
  milestones: Milestone[];
  variant?: 'vertical' | 'horizontal';
}

export default function TimelineSection({ title, subtitle, milestones, variant = 'vertical' }: TimelineSectionProps) {
  if (variant === 'horizontal') {
    return (
      <section className="bg-white py-20 px-4">
        <div className="max-w-site mx-auto">
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">{title}</h2>
          <p className="text-text-muted text-lg text-center mt-2 mb-12">{subtitle}</p>
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-0 relative">
            <div className="hidden lg:block absolute top-10 left-8 right-8 h-0.5 bg-border-light" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {milestones.map((m, i) => (
                <div key={i} className="relative text-center lg:text-left">
                  <div className="w-10 h-10 bg-accent text-white font-outfit font-bold rounded-full flex items-center justify-center text-sm mx-auto lg:mx-0 mb-4 relative z-10">{i + 1}</div>
                  <h3 className="font-outfit font-bold text-text-primary">{m.title}</h3>
                  <p className="text-sm text-text-muted mt-1">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center">
            <span className="inline-block bg-accent-light text-accent font-outfit font-semibold text-sm px-4 py-2 rounded-full">
              5ATM water resistance tested to 50 meters
            </span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">{title}</h2>
        <p className="text-text-muted text-lg text-center mt-2 mb-14">{subtitle}</p>
        <div className="relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 border-l-2 border-dashed border-accent" />
          <div className="space-y-10">
            {milestones.map((m, i) => (
              <div key={i} className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                <div className="hidden sm:block sm:w-1/2" />
                <div className="absolute left-2.5 sm:left-1/2 sm:-translate-x-1/2 w-3.5 h-3.5 bg-accent rounded-full border-4 border-accent-light z-10" />
                <div className="ml-10 sm:ml-0 sm:w-1/2 sm:px-10">
                  <span className="font-outfit font-bold text-accent text-sm">{m.year}</span>
                  <h3 className="font-outfit font-bold text-text-primary mt-1">{m.title}</h3>
                  <p className="text-sm text-text-muted mt-1 leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

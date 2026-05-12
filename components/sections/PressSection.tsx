interface PressItem {
  outlet: string;
  quote?: string;
  image: string;
}

interface PressSectionProps {
  title: string;
  logos: PressItem[];
  quotes: { text: string; attribution: string }[];
}

export default function PressSection({ title, logos, quotes }: PressSectionProps) {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-site mx-auto">
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">{title}</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 mt-10 mb-14 grayscale opacity-60">
          {logos.map((logo, i) => (
            <div key={i} className="h-8 flex items-center">
              <img src={logo.image} alt={logo.outlet} className="h-full object-contain" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((q, i) => (
            <blockquote key={i} className="bg-bg-main rounded-card border border-border-light p-6 italic text-text-primary">
              <p className="text-lg leading-relaxed">&ldquo;{q.text}&rdquo;</p>
              <cite className="block mt-3 text-sm text-text-muted not-italic font-semibold">— {q.attribution}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

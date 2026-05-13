interface ParallaxBannerProps {
  bgImage: string;
  title: string;
  subtitle: string;
  feature: string;
}

export default function ParallaxBanner({ bgImage, title, subtitle, feature }: ParallaxBannerProps) {
  return (
    <section className="relative h-[60vh] min-h-[420px] max-h-[640px] overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-text-primary/60 backdrop-blur-[2px]" />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <span className="inline-block bg-primary/90 text-white font-outfit font-semibold text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-6">
          {feature}
        </span>
        <h2 className="font-outfit text-3xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
          {title}
        </h2>
        <p className="text-lg sm:text-xl text-white/80 mt-4 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

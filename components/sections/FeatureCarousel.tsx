'use client';

import { useState, useRef, useEffect } from 'react';

interface FeatureSlide {
  icon: string;
  title: string;
  subtitle: string;
  stat: string;
  image: string;
  imageAlt: string;
}

interface FeatureCarouselProps {
  slides: FeatureSlide[];
}

export default function FeatureCarousel({ slides }: FeatureCarouselProps) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [slides.length]);

  const goTo = (i: number) => {
    setCurrent(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-site mx-auto">
        <div className="relative h-[520px] sm:h-[440px]">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 transition-all duration-700 ${
                i === current ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-8 z-0 pointer-events-none'
              }`}
            >
              <div className="lg:w-1/2 flex justify-center">
                <img
                  src={slide.image}
                  alt={slide.imageAlt}
                  className="max-w-full h-auto max-h-[400px] object-contain drop-shadow-xl"
                />
              </div>
              <div className="lg:w-1/2 max-w-lg text-center lg:text-left">
                <span className="text-5xl mb-4 block">{slide.icon}</span>
                <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary">{slide.title}</h2>
                <p className="text-lg text-text-muted mt-3 leading-relaxed">{slide.subtitle}</p>
                <div className="mt-6">
                  <span className="font-outfit text-5xl font-extrabold text-primary">{slide.stat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary w-8' : 'bg-border-light hover:bg-primary-light'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

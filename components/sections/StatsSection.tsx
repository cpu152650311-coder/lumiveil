'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: string;
  label: string;
  icon?: string;
}

interface StatsSectionProps {
  title: string;
  subtitle: string;
  stats: Stat[];
}

export default function StatsSection({ title, subtitle, stats }: StatsSectionProps) {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setVisible(true);
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-bg-main py-20 px-4" ref={ref}>
      <div className="max-w-site mx-auto">
        <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">{title}</h2>
        <p className="text-text-muted text-lg text-center mt-2 mb-12">{subtitle}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-card shadow-card border border-border-light p-6 text-center">
              {stat.icon && <div className="text-2xl mb-2">{stat.icon}</div>}
              <div className="font-outfit text-3xl sm:text-4xl font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-sm text-text-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

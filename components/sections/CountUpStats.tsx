'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: 21,
    suffix: ' Days',
    label: 'Battery Life',
    icon: '⚡',
    description: 'On a single charge',
  },
  {
    value: 8,
    suffix: '',
    label: 'Health Sensors',
    icon: '💓',
    description: 'Medical-grade monitoring',
  },
  {
    value: 5,
    suffix: 'ATM',
    label: 'Water Resistance',
    icon: '💧',
    description: '50 metres depth rated',
  },
  {
    value: 4.9,
    suffix: '★',
    label: 'Average Rating',
    icon: '⭐',
    description: 'From 12,400+ reviews',
    isDecimal: true,
  },
];

function useCountUp(target: number, duration: number, isDecimal: boolean, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration, isDecimal]);
  return count;
}

function StatItem({
  stat,
  started,
  index,
}: {
  stat: (typeof stats)[0];
  started: boolean;
  index: number;
}) {
  const count = useCountUp(stat.value, 1800 + index * 200, !!stat.isDecimal, started);

  return (
    <div
      style={{
        flex: 1,
        minWidth: '180px',
        textAlign: 'center',
        padding: '32px 24px',
        borderRight: index < stats.length - 1 ? '1px solid #E2E8F0' : 'none',
      }}
    >
      <div style={{ fontSize: '32px', marginBottom: '8px' }}>{stat.icon}</div>
      <div
        style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 800,
          color: '#0EA5E9',
          lineHeight: 1,
          marginBottom: '6px',
        }}
      >
        {stat.isDecimal ? count.toFixed(1) : count}
        {stat.suffix}
      </div>
      <div
        style={{
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 700,
          fontSize: '15px',
          color: '#0F172A',
          marginBottom: '4px',
        }}
      >
        {stat.label}
      </div>
      <div style={{ fontSize: '13px', color: '#94A3B8' }}>{stat.description}</div>
    </div>
  );
}

export default function CountUpStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        borderTop: '4px solid #0EA5E9',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
      }}
    >
      {stats.map((stat, i) => (
        <StatItem key={stat.label} stat={stat} started={started} index={i} />
      ))}
    </div>
  );
}
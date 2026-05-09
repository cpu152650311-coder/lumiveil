'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Dr. Priya Mehta',
    title: 'Cardiologist, Apollo Hospitals',
    avatar: '/generated/lumivex-apex.webp',
    rating: 5,
    quote:
      'I recommended Lumivex to three patients after it detected early-stage AFib that our clinic ECG had missed on a routine visit. The single-lead accuracy is genuinely impressive for a consumer device.',
  },
  {
    name: 'James Okafor',
    title: 'Ultra-marathon Runner',
    avatar: '/generated/lumivex-apex-sport.webp',
    rating: 5,
    quote:
      'I have run 14 ultras in the last two years wearing the Apex Sport. The battery outlasted every race and the altitude acclimatisation alerts actually helped me avoid altitude sickness at Kilimanjaro.',
  },
  {
    name: 'Sarah Chen',
    title: 'Tech Founder & Biohacker',
    avatar: '/generated/lumivex-pulse.webp',
    rating: 5,
    quote:
      'I have tried every major smartwatch. Lumivex is the only one that correlates my sleep, HRV, and stress data into something genuinely actionable. HealthCore AI feels like having a personal physician on my wrist.',
  },
];

export default function TestimonialCarousel() {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Desktop grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
        className="testimonial-grid"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} testimonial={t} highlighted={i === active} onClick={() => setActive(i)} />
        ))}
      </div>

      {/* Mobile dots */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '24px',
        }}
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              backgroundColor: i === active ? '#0EA5E9' : '#CBD5E1',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({
  testimonial,
  highlighted,
  onClick,
}: {
  testimonial: (typeof testimonials)[0];
  highlighted: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: '#fff',
        borderRadius: '20px',
        padding: '28px',
        boxShadow: highlighted
          ? '0 8px 32px rgba(14,165,233,0.18)'
          : '0 2px 16px rgba(0,0,0,0.06)',
        border: highlighted ? '2px solid #0EA5E9' : '2px solid transparent',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <div style={{ display: 'flex', gap: '4px' }}>
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} style={{ color: '#F59E0B', fontSize: '16px' }}>
            ★
          </span>
        ))}
      </div>

      <p
        style={{
          fontSize: '15px',
          color: '#334155',
          lineHeight: 1.7,
          margin: 0,
          fontStyle: 'italic',
          flex: 1,
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div
          style={{
            position: 'relative',
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            border: '2px solid #E2E8F0',
          }}
        >
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div>
          <div
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontWeight: 700,
              fontSize: '15px',
              color: '#0F172A',
            }}
          >
            {testimonial.name}
          </div>
          <div style={{ fontSize: '13px', color: '#64748B' }}>{testimonial.title}</div>
        </div>
      </div>
    </div>
  );
}
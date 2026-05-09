'use client';

import { useState } from 'react';
import Image from 'next/image';

const videoCaption = [
  {
    icon: '❤️',
    title: 'Real-time Heart Monitoring',
    desc: 'Watch the ECG sensor detect irregular rhythms live',
  },
  {
    icon: '🧠',
    title: 'HealthCore AI in Action',
    desc: 'See how AI turns raw data into life-saving insights',
  },
  {
    icon: '🏃',
    title: 'Built for Every Lifestyle',
    desc: 'From boardrooms to mountain trails — it never stops',
  },
];

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 8px 48px rgba(0,0,0,0.12)',
          cursor: 'pointer',
          backgroundColor: '#0F172A',
        }}
        onClick={() => setPlaying(true)}
      >
        {!playing ? (
          <>
            <Image
              src="/generated/lumivex-apex.webp"
              alt="Lumivex Apex heart rate video thumbnail"
              fill
              style={{ objectFit: 'cover', opacity: 0.7 }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: '#0EA5E9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 0 16px rgba(14,165,233,0.2)',
                  transition: 'transform 0.2s',
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: '14px solid transparent',
                    borderBottom: '14px solid transparent',
                    borderLeft: '22px solid #fff',
                    marginLeft: '4px',
                  }}
                />
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                color: '#fff',
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              <div style={{ fontSize: '13px', opacity: 0.75, marginBottom: '4px' }}>
                ▶ 2:14 mins
              </div>
              <div style={{ fontSize: '20px', fontWeight: 700 }}>
                Lumivex Apex — Official Film
              </div>
            </div>
          </>
        ) : (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0F172A',
            }}
          >
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>▶</div>
              <p
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '18px',
                  color: '#94A3B8',
                }}
              >
                Video player would render here
              </p>
            </div>
          </div>
        )}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
          marginTop: '40px',
        }}
      >
        {videoCaption.map((item) => (
          <div
            key={item.title}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#F0F9FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#0F172A',
                  marginBottom: '4px',
                }}
              >
                {item.title}
              </div>
              <div style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.5 }}>
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
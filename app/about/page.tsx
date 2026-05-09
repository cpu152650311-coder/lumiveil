'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { useState } from 'react';

const timelineMilestones = [
  {
    year: '2020',
    title: 'The Spark at MIT Media Lab',
    description:
      'Co-founders Dr. Anika Sharma and James Whitfield meet at MIT Media Lab during a wearable health symposium. Their shared frustration with inaccurate consumer health trackers ignites a partnership and a mission.',
    side: 'left',
  },
  {
    year: '2021',
    title: 'First Prototype & Seed Funding',
    description:
      'The first Lumivex prototype featuring continuous ECG monitoring is assembled in a Cambridge garage lab. Seed funding of $4.2M is secured from Andreessen Horowitz and a consortium of health-tech angels.',
    side: 'right',
  },
  {
    year: '2022',
    title: 'Clinical Validation Study Launched',
    description:
      'Lumivex partners with Mass General Hospital to conduct a 1,200-participant clinical validation study for its ECG and SpO2 algorithms. Early results show 98.7% accuracy versus hospital-grade equipment.',
    side: 'left',
  },
  {
    year: '2023',
    title: 'Series A & Global Team Expansion',
    description:
      'A $28M Series A round led by General Catalyst enables Lumivex to scale its engineering and clinical teams to 60 people across Boston, London, and Singapore. FDA Breakthrough Device designation is granted.',
    side: 'right',
  },
  {
    year: '2024',
    title: 'Lumivex Apex Launches Worldwide',
    description:
      'The Lumivex Apex ships to 34 countries and sells out in 72 hours, generating $18M in first-week revenue. The Apex Sport and Pulse models follow, expanding the ecosystem to athletes and value-conscious consumers.',
    side: 'left',
  },
  {
    year: '2025',
    title: 'One Million Wrists & Beyond',
    description:
      'Lumivex surpasses one million active users and launches its AI Health Companion platform, delivering personalised longitudinal health insights powered by anonymised, consent-based population data.',
    side: 'right',
  },
];

const values = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm-2 22l-6-6 1.414-1.414L18 23.172l8.586-8.586L28 16l-10 10z"
          fill="#0EA5E9"
        />
      </svg>
    ),
    name: 'Clinical Honesty',
    description:
      'We only ship features we can validate with peer-reviewed evidence — full stop. No marketing fluff in our sensor specs, no inflated accuracy claims to win a press cycle. If our data says a feature needs more work, it stays in the lab until it is ready.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 2L4 10v10c0 9.39 6.84 18.18 16 20.36C29.16 38.18 36 29.39 36 20V10L20 2zm0 4.18L32 12v8c0 7.42-5.18 14.37-12 16.54C13.18 34.37 8 27.42 8 20v-8l12-5.82zM18 26l-5-5 1.41-1.41L18 23.17l7.59-7.58L27 17l-9 9z"
          fill="#0EA5E9"
        />
      </svg>
    ),
    name: 'Radical Transparency',
    description:
      'Every algorithm update is documented in our public changelog, including the ones that temporarily reduced accuracy before improving it. We share our clinical study methodologies openly and invite independent researchers to audit our claims. Trust is built in the open, not behind closed doors.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4zm1 24h-2v-2h2v2zm0-4h-2V12h2v12z"
          fill="#0EA5E9"
        />
      </svg>
    ),
    name: 'Human-Centred Design',
    description:
      'Every pixel and every haptic pattern is tested with real users across age, skin tone, and fitness level before it ships. We believe that health technology is only as powerful as it is accessible and delightful to wear every single day. Beauty and utility are not trade-offs — they are the same goal.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path
          d="M20 4l-2.5 6.5H10l5.5 4-2.5 6.5L20 17l7 4-2.5-6.5L30 10.5h-7.5L20 4zm0 18c-5.52 0-10 4.48-10 10h20c0-5.52-4.48-10-10-10z"
          fill="#0EA5E9"
        />
      </svg>
    ),
    name: 'Long-Term Thinking',
    description:
      'We measure success in decades, not quarters — because chronic disease prevention is a long game. Every hardware and software decision is evaluated against a 10-year roadmap of where personalised health technology needs to go. Short-term revenue will never outweigh long-term user trust.',
  },
];

const teamMembers = [
  {
    name: 'Dr. Anika Sharma',
    title: 'Co-CEO',
    bio: 'Former MIT biomedical researcher with 12 patents in wearable health technology and a decade of clinical trial leadership.',
    photo: '/generated/team-anika-sharma.webp',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'James Whitfield',
    title: 'Co-CEO & Chief Design Officer',
    bio: 'Previously led product design at Apple Watch and Fitbit, renowned for marrying surgical precision with consumer-grade beauty.',
    photo: '/generated/team-james-whitfield.webp',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Dr. Priya Nair',
    title: 'Chief Medical Officer',
    bio: 'Cardiologist and digital health pioneer who led FDA submissions for three breakthrough wearable devices before joining Lumivex.',
    photo: '/generated/team-priya-nair.webp',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Marcus Chen',
    title: 'Chief Technology Officer',
    bio: 'Former Google Brain engineer specialising in on-device ML inference, making hospital-grade algorithms run on a 45mm wrist computer.',
    photo: '/generated/team-marcus-chen.webp',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sofia Reyes',
    title: 'VP of Clinical Research',
    bio: 'Led 14 peer-reviewed wearable health studies at Stanford Medicine and holds dual expertise in biostatistics and human factors engineering.',
    photo: '/generated/team-sofia-reyes.webp',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Tobias Müller',
    title: 'VP of Hardware Engineering',
    bio: 'Veteran of ZEISS optical systems and Garmin sensor labs, Tobias architects the multi-sensor fusion stack that powers every Lumivex device.',
    photo: '/generated/team-tobias-muller.webp',
    linkedin: 'https://linkedin.com',
  },
];

const pressOutlets = [
  { name: 'TechCrunch', logo: '/generated/press-techcrunch.webp', color: '#FF5C00' },
  { name: 'The Verge', logo: '/generated/press-the-verge.webp', color: '#FA4B2A' },
  { name: 'Wired', logo: '/generated/press-wired.webp', color: '#000000' },
  { name: 'Forbes Health', logo: '/generated/press-forbes-health.webp', color: '#003366' },
  { name: 'CNET', logo: '/generated/press-cnet.webp', color: '#CC0000' },
  { name: 'TIME', logo: '/generated/press-time.webp', color: '#CC0000' },
];

const pressQuotes = [
  {
    quote: 'The most clinically credible consumer smartwatch we\'ve ever tested.',
    outlet: 'The Verge',
  },
  {
    quote: 'Lumivex has done what everyone said was impossible — made medical-grade accuracy wearable.',
    outlet: 'Forbes Health',
  },
];

const socialProof = [
  {
    platform: 'Instagram',
    count: '180K',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    platform: 'Twitter / X',
    count: '42K',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    platform: 'Community Forum',
    count: '31K',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  const [hoveredPress, setHoveredPress] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', width: '100%' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7', minHeight: '420px' }}>
          <Image
            src="/generated/about-hero-founders-lab.webp"
            alt="Dr. Anika Sharma and James Whitfield in the Lumivex lab examining a prototype watch"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            priority
          />
          {/* Overlay strip */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, rgba(15,23,42,0.82) 0%, rgba(15,23,42,0.55) 55%, rgba(15,23,42,0.10) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
              maxWidth: '600px',
              padding: '0 48px',
            }}
          >
            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(12px, 1.2vw, 14px)',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#0EA5E9',
                marginBottom: '16px',
              }}
            >
              Our Story
            </p>
            <h1
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(28px, 4vw, 56px)',
                fontWeight: 800,
                color: '#FFFFFF',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              We Built the Watch We Couldn't Find
            </h1>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 'clamp(14px, 1.4vw, 18px)',
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.65,
                maxWidth: '480px',
              }}
            >
              Two researchers. One obsession. A relentless belief that the wrist is the most powerful health monitoring surface ever invented — if you do it right.
            </p>
          </div>
        </div>

        {/* Pull quote below hero */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            padding: '32px 48px',
            borderLeft: '4px solid #0EA5E9',
            margin: '0 auto',
            maxWidth: '860px',
            marginTop: '-1px',
          }}
        >
          <p
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(16px, 1.8vw, 22px)',
              fontStyle: 'italic',
              color: '#0EA5E9',
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            "We didn't start a company. We started a conviction — that every person deserves a window into their own health that is honest, beautiful, and always on their wrist."
          </p>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              color: '#64748B',
              marginTop: '12px',
              marginBottom: 0,
            }}
          >
            — Dr. Anika Sharma & James Whitfield, Co-Founders
          </p>
        </div>
      </section>

      {/* ─── TIMELINE ─────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#0EA5E9',
                marginBottom: '12px',
              }}
            >
              How We Got Here
            </p>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                color: '#0F172A',
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Our Journey
            </h2>
          </div>

          {/* Timeline container */}
          <div style={{ position: 'relative' }}>
            {/* Centre line */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '2px',
                backgroundColor: '#E2E8F0',
                transform: 'translateX(-50%)',
              }}
            />

            {timelineMilestones.map((milestone, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: milestone.side === 'left' ? 'flex-start' : 'flex-end',
                  marginBottom: '56px',
                  position: 'relative',
                }}
              >
                {/* Dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '20px',
                    transform: 'translate(-50%, -50%)',
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    backgroundColor: '#0EA5E9',
                    border: '3px solid #FFFFFF',
                    boxShadow: '0 0 0 3px #BAE6FD',
                    zIndex: 1,
                  }}
                />

                {/* Card */}
                <div
                  style={{
                    width: 'calc(50% - 40px)',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '28px 32px',
                    boxShadow: '0 4px 24px rgba(15,23,42,0.07)',
                    border: '1px solid #E2E8F0',
                    marginLeft: milestone.side === 'left' ? '0' : 'auto',
                    marginRight: milestone.side === 'right' ? '0' : 'auto',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#0EA5E9',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '8px',
                    }}
                  >
                    {milestone.year}
                  </span>
                  <h3
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '18px',
                      fontWeight: 700,
                      color: '#0F172A',
                      marginBottom: '10px',
                      lineHeight: 1.3,
                    }}
                  >
                    {milestone.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '14px',
                      color: '#475569',
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#0EA5E9',
                marginBottom: '12px',
              }}
            >
              What Drives Us
            </p>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                color: '#0F172A',
                margin: 0,
              }}
            >
              Our Values
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '32px',
            }}
          >
            {values.map((value, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '20px',
                  padding: '40px 32px',
                  border: '1px solid #E2E8F0',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(14,165,233,0.15)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                <div style={{ marginBottom: '20px' }}>{value.icon}</div>
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '14px',
                  }}
                >
                  {value.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    color: '#475569',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TEAM ─────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#0EA5E9',
                marginBottom: '12px',
              }}
            >
              The People Behind the Mission
            </p>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                color: '#0F172A',
                margin: 0,
              }}
            >
              Meet the Team
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px',
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  padding: '40px 32px',
                  border: '1px solid #E2E8F0',
                  textAlign: 'center',
                  boxShadow: '0 2px 16px rgba(15,23,42,0.05)',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 40px rgba(14,165,233,0.12)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 16px rgba(15,23,42,0.05)';
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Circular headshot */}
                <div
                  style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 20px',
                    border: '3px solid #BAE6FD',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={member.photo}
                    alt={`${member.name} headshot`}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '19px',
                    fontWeight: 700,
                    color: '#0F172A',
                    marginBottom: '4px',
                  }}
                >
                  {member.name}
                </h3>
                <p
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#0EA5E9',
                    marginBottom: '12px',
                    letterSpacing: '0.05em',
                  }}
                >
                  {member.title}
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    color: '#64748B',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}
                >
                  {member.bio}
                </p>

                {/* LinkedIn */}
                <Link
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#0EA5E9',
                    textDecoration: 'none',
                    padding: '8px 16px',
                    border: '1.5px solid #BAE6FD',
                    borderRadius: '8px',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#F0F9FF';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#0EA5E9">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRESS ────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#0EA5E9',
                marginBottom: '12px',
              }}
            >
              As Seen In
            </p>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                color: '#0F172A',
                margin: 0,
              }}
            >
              Lumivex in the Press
            </h2>
          </div>

          {/* Press logo strip */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
              marginBottom: '64px',
              padding: '40px 32px',
              backgroundColor: '#F8FAFC',
              borderRadius: '20px',
              border: '1px solid #E2E8F0',
            }}
          >
            {pressOutlets.map((outlet, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  width: '120px',
                  height: '48px',
                  filter: hoveredPress === index ? 'grayscale(0%) opacity(1)' : 'grayscale(100%) opacity(0.45)',
                  transition: 'filter 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setHoveredPress(index)}
                onMouseLeave={() => setHoveredPress(null)}
              >
                <Image
                  src={outlet.logo}
                  alt={`${outlet.name} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>

          {/* Pull quotes */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {pressQuotes.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#F0F9FF',
                  borderRadius: '16px',
                  padding: '36px 32px',
                  borderLeft: '4px solid #0EA5E9',
                }}
              >
                <p
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 'clamp(16px, 1.6vw, 20px)',
                    fontStyle: 'italic',
                    color: '#0F172A',
                    lineHeight: 1.55,
                    marginBottom: '16px',
                  }}
                >
                  "{item.quote}"
                </p>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#0EA5E9',
                    margin: 0,
                  }}
                >
                  — {item.outlet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section style={{ padding: '96px 24px', backgroundColor: '#E0F2FE' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#0284C7',
              marginBottom: '12px',
            }}
          >
            Be Part of Something Bigger
          </p>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 800,
              color: '#0F172A',
              lineHeight: 1.2,
              marginBottom: '20px',
            }}
          >
            Join the Lumivex Community
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#334155',
              lineHeight: 1.65,
              marginBottom: '40px',
            }}
          >
            Whether you're ready to wear the future or just want to follow our journey, there's a place for you in the Lumivex community.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'center',
              marginBottom: '48px',
            }}
          >
            <Link
              href="/shop"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#0EA5E9',
                color: '#FFFFFF',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                padding: '14px 36px',
                borderRadius: '12px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(14,165,233,0.35)',
                transition: 'background 0.2s ease, transform 0.15s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#0284C7';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#0EA5E9';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              Shop Now
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'transparent',
                color: '#0EA5E9',
                fontFamily: 'Outfit, sans-serif',
                fontSize: '16px',
                fontWeight: 700,
                padding: '14px 36px',
                borderRadius: '12px',
                textDecoration: 'none',
                border: '2px solid #0EA5E9',
                transition: 'background 0.2s ease, transform 0.15s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(14,165,233,0.08)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              Follow Our Journey
            </Link>
          </div>

          {/* Social proof row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '40px',
            }}
          >
            {socialProof.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 12px rgba(14,165,233,0.15)',
                    color: '#0EA5E9',
                  }}
                >
                  {item.icon}
                </div>
                <span
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '22px',
                    fontWeight: 800,
                    color: '#0F172A',
                    lineHeight: 1,
                  }}
                >
                  {item.count}
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '12px',
                    color: '#64748B',
                    fontWeight: 500,
                  }}
                >
                  {item.platform}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
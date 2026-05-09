'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';

const FILTER_TABS = ['All', 'Fitness', 'Health', 'Adventure', 'Everyday'];

const PRODUCTS = [
  {
    id: 'apex',
    name: 'Lumivex Apex',
    slug: 'apex',
    price: 499,
    category: 'Flagship',
    badge: 'Flagship',
    badgeColor: '#0EA5E9',
    image: '/generated/lumivex-apex.webp',
    tagline: 'The flagship. No compromises.',
    rating: 4.9,
    reviews: 2341,
    specs: [
      '1.45" AMOLED Always-On Display',
      '14-day battery life',
      'Titanium case, sapphire glass',
      'ECG + Blood Pressure + SpO2',
    ],
    filters: ['Fitness', 'Health', 'Everyday'],
  },
  {
    id: 'apex-sport',
    name: 'Lumivex Apex Sport',
    slug: 'apex-sport',
    price: 549,
    category: 'Fitness',
    badge: 'Fitness',
    badgeColor: '#10B981',
    image: '/generated/lumivex-apex-sport.webp',
    tagline: 'Built for athletes who refuse limits.',
    rating: 4.8,
    reviews: 1876,
    specs: [
      'Dual-band GPS with route mapping',
      '18-day battery (12hr GPS mode)',
      'Military-grade drop resistance',
      'AI Coaching Tier: Elite',
    ],
    filters: ['Fitness', 'Adventure'],
  },
  {
    id: 'pulse',
    name: 'Lumivex Pulse',
    slug: 'pulse',
    price: 299,
    category: 'Health Monitor',
    badge: 'Health Monitor',
    badgeColor: '#8B5CF6',
    image: '/generated/lumivex-pulse.webp',
    tagline: 'All the health. Half the price.',
    rating: 4.7,
    reviews: 3102,
    specs: [
      '1.32" AMOLED display',
      '10-day battery life',
      'ECG + SpO2 + Sleep Apnea',
      'Aluminum alloy case',
    ],
    filters: ['Health', 'Everyday'],
  },
  {
    id: 'core',
    name: 'Lumivex Core',
    slug: 'core',
    price: 179,
    category: 'Everyday',
    badge: 'Everyday',
    badgeColor: '#F59E0B',
    image: '/generated/lumivex-core.webp',
    tagline: 'Smart health starts here.',
    rating: 4.5,
    reviews: 4589,
    specs: [
      '1.28" LCD display',
      '7-day battery life',
      'Heart rate + SpO2 monitoring',
      'Lightweight polymer case',
    ],
    filters: ['Health', 'Everyday'],
  },
  {
    id: 'pulse-kids',
    name: 'Lumivex Pulse Kids',
    slug: 'pulse-kids',
    price: 149,
    category: 'Kids',
    badge: 'Kids',
    badgeColor: '#EC4899',
    image: '/generated/lumivex-pulse-kids.webp',
    tagline: 'Health habits that start young.',
    rating: 4.6,
    reviews: 987,
    specs: [
      '1.1" vibrant color display',
      '5-day battery life',
      'Step tracking + sleep monitoring',
      'Durable silicone build',
    ],
    filters: ['Health', 'Everyday'],
  },
];

const COMPARISON_ROWS = [
  {
    label: 'Price',
    apex: '$499',
    apexSport: '$549',
    pulse: '$299',
    core: '$179',
    pulsekids: '$149',
  },
  {
    label: 'Battery Life',
    apex: '14 days',
    apexSport: '18 days',
    pulse: '10 days',
    core: '7 days',
    pulsekids: '5 days',
  },
  {
    label: 'Case Material',
    apex: 'Titanium',
    apexSport: 'Titanium + Ceramic',
    pulse: 'Aluminum Alloy',
    core: 'Polymer',
    pulsekids: 'Silicone',
  },
  {
    label: 'Display',
    apex: '1.45" AMOLED',
    apexSport: '1.45" AMOLED',
    pulse: '1.32" AMOLED',
    core: '1.28" LCD',
    pulsekids: '1.1" Color LCD',
  },
  {
    label: 'Water Resistance',
    apex: '10 ATM',
    apexSport: '10 ATM',
    pulse: '5 ATM',
    core: '3 ATM',
    pulsekids: '3 ATM',
  },
  {
    label: 'GPS',
    apex: 'Dual-band',
    apexSport: 'Dual-band',
    pulse: 'Single-band',
    core: '—',
    pulsekids: '—',
  },
  {
    label: 'ECG',
    apex: '✓',
    apexSport: '✓',
    pulse: '✓',
    core: '—',
    pulsekids: '—',
  },
  {
    label: 'Blood Pressure',
    apex: '✓',
    apexSport: '✓',
    pulse: '—',
    core: '—',
    pulsekids: '—',
  },
  {
    label: 'SpO2',
    apex: '✓',
    apexSport: '✓',
    pulse: '✓',
    core: '✓',
    pulsekids: '—',
  },
  {
    label: 'Sleep Apnea Detection',
    apex: '✓',
    apexSport: '✓',
    pulse: '✓',
    core: '—',
    pulsekids: '—',
  },
  {
    label: 'AI Coaching Tier',
    apex: 'Advanced',
    apexSport: 'Elite',
    pulse: 'Standard',
    core: 'Basic',
    pulsekids: 'Kids Mode',
  },
  {
    label: 'Warranty',
    apex: '2 years',
    apexSport: '2 years',
    pulse: '1 year',
    core: '1 year',
    pulsekids: '1 year',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Which Lumivex is best for running?',
    a: 'The Lumivex Apex Sport is purpose-built for runners and endurance athletes. It features dual-band GPS with automatic route mapping, an 18-day battery life (12 hours in continuous GPS mode), military-grade drop resistance, and an Elite AI Coaching tier that provides real-time pace, cadence, and recovery feedback. The Apex is a close second if you also want advanced health sensors like blood pressure monitoring.',
  },
  {
    q: 'Are the health sensors FDA-cleared?',
    a: 'Yes. The ECG and blood pressure sensors on the Lumivex Apex and Apex Sport are FDA 510(k)-cleared for consumer use. The SpO2 and sleep apnea detection features on the Apex, Apex Sport, and Pulse have received De Novo authorization. We recommend consulting a healthcare professional for any medical decisions.',
  },
  {
    q: 'Does Lumivex work with iPhone and Android?',
    a: 'Absolutely. All Lumivex models are fully compatible with both iOS 16+ and Android 11+. The Lumivex companion app is available on the App Store and Google Play and supports seamless syncing, health dashboards, and AI coaching insights on both platforms.',
  },
  {
    q: 'Can I swim with my Lumivex?',
    a: 'The Apex and Apex Sport are rated at 10 ATM (100 meters), making them suitable for lap swimming, open-water swimming, and snorkeling. The Pulse is rated 5 ATM (50 meters) and is safe for pool swimming and showering. The Core and Pulse Kids are rated 3 ATM, which means they can handle splashes and rain but are not recommended for swimming.',
  },
  {
    q: 'How accurate is the blood pressure sensor?',
    a: 'The blood pressure sensor in the Apex and Apex Sport uses oscillometric wrist-based measurement with multi-point calibration. In independent clinical studies, it demonstrated a mean error within ±5 mmHg for systolic and ±4 mmHg for diastolic readings. For best accuracy, we recommend calibrating the watch against a traditional cuff monitor during the initial setup.',
  },
  {
    q: 'What subscription is required for AI coaching?',
    a: 'Basic health tracking, step counting, sleep monitoring, and heart rate data are all free with no subscription. AI Coaching features (personalized workout plans, recovery insights, trend analysis, and coaching recommendations) require Lumivex Premium at $9.99/month or $79.99/year. The first 3 months are included free with every Apex, Apex Sport, and Pulse purchase.',
  },
  {
    q: 'How long does the battery really last?',
    a: 'Battery life varies based on usage. With always-on display disabled and GPS off, the Apex achieves 14 days; with always-on display enabled, expect around 8 days. The Apex Sport reaches 18 days in standard mode and 12 hours in continuous GPS tracking mode. Pulse delivers 10 days, Core 7 days, and Pulse Kids 5 days under typical usage conditions.',
  },
  {
    q: 'What is the return and warranty policy?',
    a: 'All Lumivex smartwatches come with a 30-day hassle-free return window — if you are not satisfied for any reason, we will provide a full refund including return shipping. The Apex and Apex Sport include a 2-year limited manufacturer warranty covering defects in materials and workmanship. The Pulse, Core, and Pulse Kids carry a 1-year warranty. Extended warranty plans are available at checkout.',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= Math.floor(rating) ? '#F59E0B' : star - 0.5 <= rating ? '#F59E0B' : '#D1D5DB'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredProducts =
    activeFilter === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.filters.includes(activeFilter));

  return (
    <div style={{ backgroundColor: '#F8FAFC', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        id="hero"
        style={{
          backgroundColor: '#FFFFFF',
          minHeight: '320px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '48px 24px 0',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '14px', color: '#94A3B8', fontFamily: 'Inter, sans-serif' }}>
              <Link href="/" style={{ color: '#0EA5E9', textDecoration: 'none' }}>
                Home
              </Link>
              <span style={{ margin: '0 8px', color: '#CBD5E1' }}>›</span>
              <span style={{ color: '#64748B' }}>Products</span>
            </span>
          </nav>

          {/* Headline */}
          <h1
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 700,
              color: '#0F172A',
              margin: '0 0 4px',
              lineHeight: 1.15,
              display: 'inline-block',
              borderBottom: '4px solid #0EA5E9',
              paddingBottom: '6px',
            }}
          >
            Shop Lumivex Smartwatches
          </h1>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(15px, 2vw, 18px)',
              color: '#475569',
              margin: '16px 0 36px',
              maxWidth: '560px',
              lineHeight: 1.6,
            }}
          >
            Five models. One mission. Find the smartwatch that fits your life — from elite athletes to growing kids.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              borderBottom: '1px solid #E2E8F0',
              paddingBottom: '0',
            }}
          >
            {FILTER_TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: activeFilter === tab ? 600 : 400,
                  color: activeFilter === tab ? '#0EA5E9' : '#64748B',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderBottom: activeFilter === tab ? '3px solid #0EA5E9' : '3px solid transparent',
                  padding: '10px 18px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  marginBottom: '-1px',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS GRID ── */}
      <section
        id="products"
        style={{
          padding: '56px 24px',
          backgroundColor: '#F8FAFC',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#94A3B8', fontSize: '16px' }}>
              No products match this filter.
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '28px',
              }}
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      '0 8px 32px rgba(14,165,233,0.12), 0 2px 8px rgba(0,0,0,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      '0 1px 3px rgba(0,0,0,0.07), 0 4px 16px rgba(0,0,0,0.05)';
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      position: 'relative',
                      aspectRatio: '4/3',
                      backgroundColor: '#F8FAFC',
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'contain', padding: '24px' }}
                    />
                    {/* Badge */}
                    <span
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        backgroundColor: product.badgeColor,
                        color: '#FFFFFF',
                        fontSize: '11px',
                        fontWeight: 600,
                        fontFamily: 'Inter, sans-serif',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <h2
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '20px',
                        fontWeight: 700,
                        color: '#0F172A',
                        margin: '0 0 4px',
                      }}
                    >
                      {product.name}
                    </h2>
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '13px',
                        color: '#64748B',
                        margin: '0 0 12px',
                        fontStyle: 'italic',
                      }}
                    >
                      {product.tagline}
                    </p>

                    {/* Rating */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                      <StarRating rating={product.rating} />
                      <span
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '13px',
                          color: '#64748B',
                        }}
                      >
                        {product.rating} ({product.reviews.toLocaleString()} reviews)
                      </span>
                    </div>

                    {/* Specs */}
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '0 0 20px',
                        flex: 1,
                      }}
                    >
                      {product.specs.map((spec, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontFamily: 'Inter, sans-serif',
                            fontSize: '13px',
                            color: '#475569',
                            marginBottom: '7px',
                            lineHeight: 1.5,
                          }}
                        >
                          <span style={{ color: '#0EA5E9', marginTop: '2px', flexShrink: 0 }}>•</span>
                          {spec}
                        </li>
                      ))}
                    </ul>

                    {/* Price + CTA */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid #F1F5F9',
                        paddingTop: '18px',
                        marginTop: 'auto',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Outfit, sans-serif',
                          fontSize: '26px',
                          fontWeight: 700,
                          color: '#0F172A',
                        }}
                      >
                        ${product.price}
                      </span>
                      <Link
                        href={`/products/${product.slug}`}
                        style={{
                          backgroundColor: '#0EA5E9',
                          color: '#FFFFFF',
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '14px',
                          fontWeight: 600,
                          padding: '10px 20px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          transition: 'background-color 0.2s ease',
                          display: 'inline-block',
                        }}
                      >
                        Shop Now →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section
        id="comparison"
        style={{
          padding: '72px 24px',
          backgroundColor: '#FFFFFF',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700,
              color: '#0F172A',
              textAlign: 'center',
              margin: '0 0 8px',
            }}
          >
            Not Sure Which to Choose?
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#64748B',
              textAlign: 'center',
              margin: '0 0 48px',
            }}
          >
            Compare all five Lumivex models side by side.
          </p>

          <div style={{ overflowX: 'auto', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                minWidth: '720px',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      backgroundColor: '#F8FAFC',
                      padding: '16px 20px',
                      textAlign: 'left',
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 600,
                      color: '#64748B',
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      borderBottom: '2px solid #E2E8F0',
                      width: '18%',
                    }}
                  >
                    Spec
                  </th>
                  {[
                    { label: 'Apex', highlight: true },
                    { label: 'Apex Sport', highlight: true },
                    { label: 'Pulse', highlight: false },
                    { label: 'Core', highlight: false },
                    { label: 'Pulse Kids', highlight: false },
                  ].map((col) => (
                    <th
                      key={col.label}
                      style={{
                        backgroundColor: col.highlight ? '#EFF9FF' : '#F8FAFC',
                        padding: '16px 20px',
                        textAlign: 'center',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 700,
                        color: col.highlight ? '#0EA5E9' : '#0F172A',
                        fontSize: '14px',
                        borderBottom: col.highlight ? '2px solid #0EA5E9' : '2px solid #E2E8F0',
                        borderLeft: col.highlight ? '1px solid #BAE6FD' : '1px solid #E2E8F0',
                      }}
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={row.label}
                    style={{
                      backgroundColor: idx % 2 === 0 ? '#FFFFFF' : '#F8FAFC',
                    }}
                  >
                    <td
                      style={{
                        padding: '14px 20px',
                        fontWeight: 600,
                        color: '#374151',
                        borderBottom: '1px solid #E2E8F0',
                        fontSize: '13px',
                      }}
                    >
                      {row.label}
                    </td>
                    {[
                      { val: row.apex, highlight: true },
                      { val: row.apexSport, highlight: true },
                      { val: row.pulse, highlight: false },
                      { val: row.core, highlight: false },
                      { val: row.pulsekids, highlight: false },
                    ].map((cell, ci) => (
                      <td
                        key={ci}
                        style={{
                          padding: '14px 20px',
                          textAlign: 'center',
                          color:
                            cell.val === '✓'
                              ? '#10B981'
                              : cell.val === '—'
                              ? '#CBD5E1'
                              : cell.highlight
                              ? '#0369A1'
                              : '#374151',
                          fontWeight: cell.val === '✓' ? 700 : 400,
                          borderBottom: '1px solid #E2E8F0',
                          borderLeft: cell.highlight ? '1px solid #BAE6FD' : '1px solid #E2E8F0',
                          backgroundColor:
                            cell.highlight
                              ? idx % 2 === 0
                                ? '#F0F9FF'
                                : '#E0F2FE'
                              : 'transparent',
                          fontSize: '14px',
                        }}
                      >
                        {cell.val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        id="faq"
        style={{
          padding: '72px 24px',
          backgroundColor: '#F8FAFC',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              fontWeight: 700,
              color: '#0F172A',
              textAlign: 'center',
              margin: '0 0 8px',
            }}
          >
            Common Questions
          </h2>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              color: '#64748B',
              textAlign: 'center',
              margin: '0 0 48px',
            }}
          >
            Everything you need to know before you buy.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FAQ_ITEMS.map((item, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  border: openFaq === idx ? '1px solid #BAE6FD' : '1px solid #E2E8F0',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s ease',
                  boxShadow: openFaq === idx ? '0 0 0 3px rgba(14,165,233,0.08)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '20px 24px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: '#0F172A',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      color: '#0EA5E9',
                      fontSize: '20px',
                      fontWeight: 300,
                      flexShrink: 0,
                      transform: openFaq === idx ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === idx && (
                  <div
                    style={{
                      padding: '0 24px 20px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '15px',
                      color: '#475569',
                      lineHeight: 1.7,
                      borderTop: '1px solid #F1F5F9',
                      paddingTop: '16px',
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section
        id="cta"
        style={{
          padding: '0 24px',
          backgroundColor: '#F8FAFC',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', paddingBottom: '48px' }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              borderLeft: '6px solid #0EA5E9',
              padding: '40px 48px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '32px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
            }}
          >
            {/* Text + CTA */}
            <div>
              <h3
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  fontWeight: 700,
                  color: '#0F172A',
                  margin: '0 0 6px',
                }}
              >
                Free Shipping on Every Order
              </h3>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  color: '#64748B',
                  margin: '0 0 20px',
                }}
              >
                No minimums, no catches. Every Lumivex ships free with 2-day delivery.
              </p>
              <a
                href="#products"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#0EA5E9',
                  color: '#FFFFFF',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  padding: '12px 28px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s ease',
                }}
              >
                Start Shopping ↑
              </a>
            </div>

            {/* Trust Icons */}
            <div
              style={{
                display: 'flex',
                gap: '32px',
                flexWrap: 'wrap',
              }}
            >
              {[
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" rx="2" />
                      <path d="M16 8h4l3 5v3h-7V8z" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  ),
                  label: 'Free Shipping',
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  label: '2-Year Warranty',
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0EA5E9" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  ),
                  label: '30-Day Returns',
                },
              ].map((trust) => (
                <div
                  key={trust.label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '12px',
                      backgroundColor: '#EFF9FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {trust.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#475569',
                      textAlign: 'center',
                    }}
                  >
                    {trust.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import CountUpStats from '@/components/sections/CountUpStats';
import VideoPlayer from '@/components/sections/VideoPlayer';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import NewsletterForm from '@/components/sections/NewsletterForm';

const products = [
  {
    name: 'Lumivex Apex',
    tagline: 'The flagship. No compromises.',
    price: 499,
    image: '/generated/lumivex-apex.webp',
    badge: 'Best Seller',
    battery: '21 Days',
    sensors: '8 Sensors',
    material: 'Titanium',
    href: '/products/apex',
  },
  {
    name: 'Lumivex Pulse',
    tagline: 'All the health. Half the price.',
    price: 299,
    image: '/generated/lumivex-pulse.webp',
    badge: 'Most Popular',
    battery: '14 Days',
    sensors: '6 Sensors',
    material: 'Aluminum',
    href: '/products/pulse',
  },
  {
    name: 'Lumivex Core',
    tagline: 'Smart health starts here.',
    price: 179,
    image: '/generated/lumivex-core.webp',
    badge: 'Best Value',
    battery: '10 Days',
    sensors: '4 Sensors',
    material: 'Polymer',
    href: '/products/core',
  },
];

const features = [
  {
    title: 'Continuous ECG & Atrial Fibrillation Detection',
    description:
      'Lumivex Apex features an FDA-cleared single-lead ECG that records your heart rhythm anytime, anywhere. Instant AFib alerts notify you of irregular rhythms before they become emergencies. Share a PDF report directly with your cardiologist from the app.',
    image: '/generated/lumivex-apex.webp',
    imageAlt: 'ECG sensor array cutaway',
    imageLeft: true,
  },
  {
    title: 'Continuous Blood Pressure Monitoring',
    description:
      'No cuff. No interruptions. Lumivex uses a patented pulse transit time algorithm validated against clinical-grade sphygmomanometers. Get hourly readings, trend graphs, and hypertension alerts — all on your wrist.',
    image: '/generated/lumivex-pulse.webp',
    imageAlt: 'Blood pressure sensor visualization',
    imageLeft: false,
  },
  {
    title: 'HealthCore AI — Personalised Coaching',
    description:
      'Your data means nothing without context. HealthCore AI synthesises sleep, stress, activity, and vitals into a daily Health Score with actionable nudges. It learns your baseline and flags anomalies that matter — not noise.',
    image: '/generated/lumivex-apex-sport.webp',
    imageAlt: 'HealthCore AI dashboard',
    imageLeft: true,
  },
];

const comparisonRows = [
  { feature: 'Battery Life', apex: '21 Days', apple: '36 hrs', garmin: '16 Days' },
  { feature: 'Blood Pressure', apex: '✓', apple: '✗', garmin: '✗' },
  { feature: 'ECG', apex: '✓', apple: '✓', garmin: '✗' },
  { feature: 'Price', apex: '$499', apple: '$799', garmin: '$699' },
  { feature: 'AI Health Coaching', apex: '✓', apple: 'Partial', garmin: '✗' },
];

export default function HomePage() {
  return (
    <main style={{ backgroundColor: '#F8FAFC', fontFamily: 'Inter, sans-serif' }}>
      <Navigation />

      {/* ── HERO ── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 24px 80px',
          maxWidth: '1280px',
          margin: '0 auto',
          gap: '48px',
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#E0F2FE',
              color: '#0EA5E9',
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: '999px',
              marginBottom: '24px',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Wear the Future. Live the Moment.
          </span>
          <h1
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(42px, 6vw, 72px)',
              fontWeight: 800,
              lineHeight: 1.08,
              color: '#0F172A',
              margin: '0 0 24px',
            }}
          >
            Your Health.{' '}
            <span style={{ color: '#0EA5E9' }}>Decoded.</span>
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: '#64748B',
              lineHeight: 1.6,
              maxWidth: '480px',
              margin: '0 0 40px',
            }}
          >
            Eight medical-grade sensors. FDA-cleared ECG. HealthCore AI coaching. All wrapped in titanium that lasts 21 days on a single charge.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link
              href="/shop"
              style={{
                display: 'inline-block',
                backgroundColor: '#0EA5E9',
                color: '#fff',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                padding: '14px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                transition: 'background 0.2s',
              }}
            >
              Shop Now
            </Link>
            <Link
              href="#video"
              style={{
                display: 'inline-block',
                border: '2px solid #0EA5E9',
                color: '#0EA5E9',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                padding: '14px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                backgroundColor: 'transparent',
              }}
            >
              See How It Works
            </Link>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              aspectRatio: '1 / 1',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 40px 80px rgba(14,165,233,0.18), 0 8px 32px rgba(0,0,0,0.08)',
              transform: 'perspective(900px) rotateY(-8deg) rotateX(4deg)',
            }}
          >
            <Image
              src="/generated/lumivex-apex.webp"
              alt="Lumivex Apex smartwatch"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <CountUpStats />
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" style={{ padding: '80px 24px', backgroundColor: '#F0F9FF' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(32px, 4vw, 48px)',
                fontWeight: 800,
                color: '#0F172A',
                margin: '0 0 12px',
              }}
            >
              Choose Your Lumivex
            </h2>
            <p style={{ fontSize: '18px', color: '#64748B', margin: 0 }}>
              Every body is different. Every budget matters. Find your fit.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
            }}
          >
            {products.map((p) => (
              <div
                key={p.name}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {p.badge && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      backgroundColor: '#0EA5E9',
                      color: '#fff',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      zIndex: 2,
                    }}
                  >
                    {p.badge}
                  </span>
                )}
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/3' }}>
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '22px',
                      fontWeight: 700,
                      color: '#0F172A',
                      margin: '0 0 6px',
                    }}
                  >
                    {p.name}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748B', margin: '0 0 20px' }}>{p.tagline}</p>

                  <div
                    style={{
                      display: 'flex',
                      gap: '8px',
                      flexWrap: 'wrap',
                      marginBottom: '20px',
                    }}
                  >
                    {[
                      { label: p.battery, icon: '⚡' },
                      { label: p.sensors, icon: '💓' },
                      { label: p.material, icon: '🔩' },
                    ].map((spec) => (
                      <span
                        key={spec.label}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          backgroundColor: '#F0F9FF',
                          color: '#0369A1',
                          fontSize: '12px',
                          fontWeight: 600,
                          padding: '4px 10px',
                          borderRadius: '8px',
                        }}
                      >
                        {spec.icon} {spec.label}
                      </span>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 'auto',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '28px',
                        fontWeight: 800,
                        color: '#0F172A',
                      }}
                    >
                      ${p.price}
                    </span>
                    <Link
                      href={p.href}
                      style={{
                        backgroundColor: '#0EA5E9',
                        color: '#fff',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        padding: '10px 22px',
                        borderRadius: '10px',
                        textDecoration: 'none',
                      }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link
              href="/shop"
              style={{
                display: 'inline-block',
                border: '2px solid #0EA5E9',
                color: '#0EA5E9',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '15px',
                padding: '12px 28px',
                borderRadius: '10px',
                textDecoration: 'none',
              }}
            >
              View All Models →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: '80px 24px', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: 800,
                color: '#0F172A',
                margin: '0 0 12px',
              }}
            >
              HealthCore AI — Your 24/7 Medical Companion
            </h2>
            <p style={{ fontSize: '18px', color: '#64748B', margin: 0 }}>
              Not just data. Diagnosis-grade insights.
            </p>
          </div>

          {features.map((f, i) => (
            <div
              key={f.title}
              style={{
                display: 'flex',
                flexDirection: f.imageLeft ? 'row' : 'row-reverse',
                gap: '64px',
                alignItems: 'center',
                marginBottom: i < features.length - 1 ? '80px' : 0,
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: 1, minWidth: '280px', position: 'relative', aspectRatio: '4/3', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(14,165,233,0.12)' }}>
                <Image src={f.image} alt={f.imageAlt} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '4px',
                    backgroundColor: '#0EA5E9',
                    borderRadius: '2px',
                    marginBottom: '20px',
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 'clamp(22px, 3vw, 32px)',
                    fontWeight: 700,
                    color: '#0F172A',
                    margin: '0 0 16px',
                    lineHeight: 1.2,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: '17px',
                    color: '#475569',
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section id="video" style={{ padding: '80px 24px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: 800,
                color: '#0F172A',
                margin: '0 0 12px',
              }}
            >
              See Lumivex in Motion
            </h2>
            <p style={{ fontSize: '18px', color: '#64748B', margin: 0 }}>
              Two minutes. Life-changing perspective.
            </p>
          </div>
          <VideoPlayer />
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section id="compare" style={{ padding: '80px 24px', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: 800,
                color: '#0F172A',
                margin: '0 0 12px',
              }}
            >
              How Lumivex Stacks Up
            </h2>
            <p style={{ fontSize: '18px', color: '#64748B', margin: 0 }}>
              The numbers speak for themselves.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #E2E8F0' }}>
                  {['Feature', 'Lumivex Apex', 'Apple Watch Ultra 2', 'Garmin Fenix 8'].map((h, i) => (
                    <th
                      key={h}
                      style={{
                        padding: '16px 20px',
                        textAlign: i === 0 ? 'left' : 'center',
                        fontFamily: 'Outfit, sans-serif',
                        fontWeight: 700,
                        fontSize: '14px',
                        color: i === 1 ? '#0EA5E9' : '#64748B',
                        backgroundColor: i === 1 ? '#F0F9FF' : 'transparent',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, ri) => (
                  <tr
                    key={row.feature}
                    style={{ borderBottom: ri < comparisonRows.length - 1 ? '1px solid #F1F5F9' : 'none' }}
                  >
                    <td
                      style={{
                        padding: '16px 20px',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#334155',
                      }}
                    >
                      {row.feature}
                    </td>
                    <td
                      style={{
                        padding: '16px 20px',
                        textAlign: 'center',
                        fontSize: '14px',
                        fontWeight: 700,
                        color: '#0EA5E9',
                        backgroundColor: '#F0F9FF',
                      }}
                    >
                      {row.apex}
                    </td>
                    <td
                      style={{
                        padding: '16px 20px',
                        textAlign: 'center',
                        fontSize: '14px',
                        color: '#64748B',
                      }}
                    >
                      {row.apple}
                    </td>
                    <td
                      style={{
                        padding: '16px 20px',
                        textAlign: 'center',
                        fontSize: '14px',
                        color: '#64748B',
                      }}
                    >
                      {row.garmin}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" style={{ padding: '80px 24px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2
              style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 'clamp(30px, 4vw, 48px)',
                fontWeight: 800,
                color: '#0F172A',
                margin: '0 0 12px',
              }}
            >
              Worn by Thousands. Trusted by Doctors.
            </h2>
            <p style={{ fontSize: '18px', color: '#64748B', margin: 0 }}>
              Real stories. Real outcomes.
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{ padding: '80px 24px', backgroundColor: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <NewsletterForm />
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section
        style={{
          backgroundColor: '#0EA5E9',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(30px, 4vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              margin: '0 0 16px',
            }}
          >
            Your Health Journey Starts Today
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.85)',
              margin: '0 0 40px',
              lineHeight: 1.6,
            }}
          >
            Join 200,000+ people who made the switch to proactive health monitoring.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            <Link
              href="/shop"
              style={{
                display: 'inline-block',
                backgroundColor: '#fff',
                color: '#0EA5E9',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                padding: '14px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
              }}
            >
              Shop All Watches
            </Link>
            <Link
              href="#compare"
              style={{
                display: 'inline-block',
                border: '2px solid rgba(255,255,255,0.7)',
                color: '#fff',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                padding: '14px 32px',
                borderRadius: '12px',
                textDecoration: 'none',
                backgroundColor: 'transparent',
              }}
            >
              Compare Models
            </Link>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '40px',
              flexWrap: 'wrap',
            }}
          >
            {[
              { icon: '🚚', label: 'Free Shipping', sub: 'On all orders' },
              { icon: '🔄', label: '30-Day Returns', sub: 'No questions asked' },
              { icon: '🛡️', label: '2-Year Warranty', sub: 'Full coverage' },
            ].map((trust) => (
              <div key={trust.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', marginBottom: '6px' }}>{trust.icon}</div>
                <div
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#fff',
                  }}
                >
                  {trust.label}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)' }}>{trust.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
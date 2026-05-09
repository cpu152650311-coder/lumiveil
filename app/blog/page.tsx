'use client';

import { useState } from 'react';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import Image from 'next/image';
import Link from 'next/link';

const categories = ['All', 'Heart Health', 'Sleep', 'Fitness', 'Buying Guides', 'Product Updates', 'Research'];

const featuredArticles = [
  {
    id: 1,
    title: 'ECG Smartwatches: What They Can and Can\'t Detect in 2025',
    category: 'Heart Health',
    excerpt: 'FDA-cleared ECG wearables have transformed consumer cardiac monitoring — but knowing their clinical limits could save your life. We break down exactly what your smartwatch ECG can and cannot reliably detect.',
    author: 'Dr. Reza Faraji',
    readTime: '8 min read',
    image: '/generated/lumivex-apex.webp',
    slug: 'ecg-smartwatches-what-they-detect-2025',
  },
  {
    id: 2,
    title: 'Why Your Sleep Score Dropped — And What to Do About It',
    category: 'Sleep',
    excerpt: 'A sudden dip in your nightly sleep score isn\'t always about bedtime habits. From HRV fluctuations to firmware changes, we identify the real culprits and give you an actionable recovery plan.',
    author: 'Dr. Anika Sharma',
    readTime: '6 min read',
    image: '/generated/lumivex-pulse.webp',
    slug: 'why-sleep-score-dropped',
  },
  {
    id: 3,
    title: 'Smartwatch Buying Guide 2025: The Only Comparison That Matters',
    category: 'Buying Guides',
    excerpt: 'With dozens of health wearables launching every quarter, choosing the right one for your lifestyle and health goals has never been harder. We cut through the spec sheets to tell you what actually matters.',
    author: 'James Whitfield',
    readTime: '12 min read',
    image: '/generated/lumivex-apex-sport.webp',
    slug: 'smartwatch-buying-guide-2025',
  },
];

const latestArticles = [
  {
    id: 4,
    title: 'Blood Pressure Accuracy: Cuffless Wearables vs. Traditional Monitors',
    category: 'Heart Health',
    excerpt: 'We tested six cuffless smartwatches against clinical-grade sphygmomanometers across 300 readings.',
    date: 'Jan 14, 2025',
    readTime: '9 min read',
    image: '/generated/lumivex-apex.webp',
    slug: 'blood-pressure-accuracy-cuffless-vs-traditional',
  },
  {
    id: 5,
    title: 'HRV Explained: The Metric That Predicts Your Recovery Better Than Any Other',
    category: 'Research',
    excerpt: 'Heart rate variability is the most misunderstood stat on your wrist. Here\'s the science behind it.',
    date: 'Jan 10, 2025',
    readTime: '7 min read',
    image: '/generated/lumivex-pulse.webp',
    slug: 'hrv-explained-recovery-metric',
  },
  {
    id: 6,
    title: 'Best Smartwatch for Swimming: Waterproofing Ratings Demystified',
    category: 'Fitness',
    excerpt: 'ATM, IP68, MIL-SPEC — what do these ratings actually mean for lap swimmers and open-water athletes?',
    date: 'Jan 7, 2025',
    readTime: '5 min read',
    image: '/generated/lumivex-apex-sport.webp',
    slug: 'best-smartwatch-swimming-waterproofing',
  },
  {
    id: 7,
    title: 'Lumivex Firmware 4.2: Everything New in HealthCore AI v3.0',
    category: 'Product Updates',
    excerpt: 'The latest firmware brings adaptive coaching, improved ECG algorithms, and a redesigned sleep dashboard.',
    date: 'Jan 4, 2025',
    readTime: '4 min read',
    image: '/generated/lumivex-core.webp',
    slug: 'lumivex-firmware-4-2-healthcore-ai-v3',
  },
  {
    id: 8,
    title: 'Sleep Apnea Detection Guide: Can Your Smartwatch Really Help?',
    category: 'Sleep',
    excerpt: 'SpO2 dips, snore detection, and breathing irregularity scoring — we review the evidence for wearable sleep apnea screening.',
    date: 'Dec 30, 2024',
    readTime: '10 min read',
    image: '/generated/lumivex-pulse-kids.webp',
    slug: 'sleep-apnea-detection-smartwatch-guide',
  },
  {
    id: 9,
    title: 'Dual-Band GPS L1+L5: Does It Actually Make a Difference?',
    category: 'Research',
    excerpt: 'We ran 50+ outdoor workouts comparing single-band vs. dual-band GPS accuracy in urban canyons and dense forests.',
    date: 'Dec 26, 2024',
    readTime: '8 min read',
    image: '/generated/lumivex-apex-sport.webp',
    slug: 'dual-band-gps-l1-l5-accuracy-test',
  },
];

const mostRead = [
  { title: 'ECG Smartwatches: What They Can and Can\'t Detect in 2025', views: '42.1K' },
  { title: 'Smartwatch Buying Guide 2025: The Only Comparison That Matters', views: '38.7K' },
  { title: 'HRV Explained: The Metric That Predicts Your Recovery', views: '29.3K' },
  { title: 'Blood Pressure Accuracy: Cuffless vs. Traditional Monitors', views: '24.8K' },
  { title: 'Best Smartwatch for Swimming: Waterproofing Ratings', views: '19.5K' },
];

const tagCategories = ['Heart Health', 'Sleep', 'Fitness', 'Buying Guides', 'Product Updates', 'Research', 'GPS', 'ECG', 'HRV', 'SpO2', 'Blood Pressure', 'Recovery', 'Kids Health', 'Nutrition'];

const upcomingArticles = [
  { title: 'VO2 Max Testing at Home: How Accurate Are Wearables?', category: 'Research', date: 'Coming Jan 20' },
  { title: 'Lumivex Pulse Kids: A Parent\'s 30-Day Review', category: 'Product Updates', date: 'Coming Jan 22' },
  { title: 'The Science of Stress Scores: Cortisol vs. HRV', category: 'Heart Health', date: 'Coming Jan 25' },
];

const categoryColors: Record<string, { bg: string; color: string }> = {
  'Heart Health': { bg: '#FEE2E2', color: '#DC2626' },
  'Sleep': { bg: '#EDE9FE', color: '#7C3AED' },
  'Fitness': { bg: '#DCFCE7', color: '#16A34A' },
  'Buying Guides': { bg: '#FEF9C3', color: '#CA8A04' },
  'Product Updates': { bg: '#DBEAFE', color: '#2563EB' },
  'Research': { bg: '#F0F9FF', color: '#0369A1' },
  'GPS': { bg: '#F0FDF4', color: '#15803D' },
  'ECG': { bg: '#FFF1F2', color: '#BE123C' },
  'HRV': { bg: '#F5F3FF', color: '#6D28D9' },
  'SpO2': { bg: '#ECFEFF', color: '#0E7490' },
  'Blood Pressure': { bg: '#FFF7ED', color: '#C2410C' },
  'Recovery': { bg: '#F0FDF4', color: '#166534' },
  'Kids Health': { bg: '#FDF4FF', color: '#A21CAF' },
  'Nutrition': { bg: '#FEFCE8', color: '#A16207' },
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [sidebarEmail, setSidebarEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [sidebarSubscribed, setSidebarSubscribed] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [hoveredArticle, setHoveredArticle] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  const handleSidebarSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (sidebarEmail) setSidebarSubscribed(true);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#F8FAFC', color: '#0F172A', minHeight: '100vh' }}>
      <Navigation />

      {/* HERO */}
      <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', paddingTop: '80px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 24px 48px' }}>
          <div style={{ maxWidth: '720px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#F0F9FF', border: '1px solid #BAE6FD', borderRadius: '20px', padding: '6px 14px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0EA5E9', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#0369A1', fontFamily: 'Outfit, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>The Lumivex Health Brief</span>
            </div>
            <h1 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>
              Guides, Research{' '}
              <span style={{ display: 'inline-block', position: 'relative' }}>
                & Insights
                <span style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '4px', backgroundColor: '#0EA5E9', borderRadius: '2px' }} />
              </span>
            </h1>
            <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#475569', lineHeight: 1.7, marginBottom: '32px', fontFamily: 'Inter, sans-serif' }}>
              Evidence-based health content, expert analysis, and product deep-dives — written for people who take their health seriously.
            </p>

            {/* Search Bar */}
            <div style={{ position: 'relative', marginBottom: '24px', maxWidth: '560px' }}>
              <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, or health questions"
                style={{ width: '100%', padding: '14px 16px 14px 48px', borderRadius: '12px', border: '2px solid #E2E8F0', fontSize: '15px', fontFamily: 'Inter, sans-serif', color: '#0F172A', backgroundColor: '#F8FAFC', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#0EA5E9')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#E2E8F0')}
              />
            </div>

            {/* Category Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    border: '1.5px solid',
                    borderColor: activeCategory === cat ? '#0EA5E9' : '#E2E8F0',
                    backgroundColor: activeCategory === cat ? '#0EA5E9' : '#FFFFFF',
                    color: activeCategory === cat ? '#FFFFFF' : '#475569',
                    fontSize: '13px',
                    fontWeight: 600,
                    fontFamily: 'Outfit, sans-serif',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    letterSpacing: '0.02em',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section style={{ backgroundColor: '#F8FAFC', padding: 'clamp(48px, 6vw, 80px) 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '36px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(22px, 3vw, 30px)', fontWeight: 800, color: '#0F172A', marginBottom: '6px', letterSpacing: '-0.02em' }}>Featured Articles</h2>
              <p style={{ fontSize: '15px', color: '#64748B' }}>Our editors' top picks this week</p>
            </div>
            <Link href="/blog/featured" style={{ fontSize: '14px', fontWeight: 600, color: '#0EA5E9', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
              View all featured →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {featuredArticles.map((article, i) => {
              const catStyle = categoryColors[article.category] || { bg: '#F1F5F9', color: '#475569' };
              return (
                <article
                  key={article.id}
                  onMouseEnter={() => setHoveredCard(article.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: hoveredCard === article.id ? '0 20px 40px rgba(14,165,233,0.15)' : '0 4px 16px rgba(0,0,0,0.06)',
                    transform: hoveredCard === article.id ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.3s ease',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                    <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '14px', left: '14px' }}>
                      <span style={{ backgroundColor: catStyle.bg, color: catStyle.color, fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px', fontFamily: 'Outfit, sans-serif', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        {article.category}
                      </span>
                    </div>
                    <div style={{ position: 'absolute', top: '14px', right: '14px', backgroundColor: 'rgba(0,0,0,0.55)', borderRadius: '8px', padding: '4px 10px' }}>
                      <span style={{ fontSize: '11px', color: '#FFFFFF', fontWeight: 600 }}>{article.readTime}</span>
                    </div>
                  </div>

                  <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '18px', fontWeight: 700, color: '#0F172A', lineHeight: 1.4, marginBottom: '12px', letterSpacing: '-0.01em' }}>
                      {article.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.65, marginBottom: '20px', flex: 1 }}>
                      {article.excerpt}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#E0F2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ fontSize: '13px', fontWeight: 700, color: '#0369A1' }}>{article.author.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
                        </div>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>{article.author}</span>
                      </div>
                      <Link
                        href={`/blog/${article.slug}`}
                        style={{ fontSize: '13px', fontWeight: 700, color: '#0EA5E9', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', transition: 'gap 0.2s' }}
                      >
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* LATEST ARTICLES + SIDEBAR */}
      <section style={{ backgroundColor: '#FFFFFF', padding: 'clamp(48px, 6vw, 80px) 24px', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '48px', alignItems: 'start' }}>

            {/* LEFT: Article Grid */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
                <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em' }}>Latest Articles</h2>
                <Link href="/blog/all" style={{ fontSize: '14px', fontWeight: 600, color: '#0EA5E9', textDecoration: 'none' }}>Browse all →</Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                {latestArticles.map((article) => {
                  const catStyle = categoryColors[article.category] || { bg: '#F1F5F9', color: '#475569' };
                  return (
                    <article
                      key={article.id}
                      onMouseEnter={() => setHoveredArticle(article.id)}
                      onMouseLeave={() => setHoveredArticle(null)}
                      style={{
                        backgroundColor: '#F8FAFC',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        border: '1px solid #E2E8F0',
                        boxShadow: hoveredArticle === article.id ? '0 8px 24px rgba(14,165,233,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
                        transform: hoveredArticle === article.id ? 'translateY(-3px)' : 'translateY(0)',
                        transition: 'all 0.25s ease',
                        cursor: 'pointer',
                      }}
                    >
                      <div style={{ position: 'relative', aspectRatio: '16/9' }}>
                        <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} />
                      </div>
                      <div style={{ padding: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                          <span style={{ backgroundColor: catStyle.bg, color: catStyle.color, fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '12px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            {article.category}
                          </span>
                          <span style={{ fontSize: '11px', color: '#94A3B8' }}>{article.date}</span>
                          <span style={{ fontSize: '11px', color: '#94A3B8' }}>· {article.readTime}</span>
                        </div>
                        <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '15px', fontWeight: 700, color: '#0F172A', lineHeight: 1.4, marginBottom: '8px', letterSpacing: '-0.01em' }}>
                          {article.title}
                        </h3>
                        <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6, marginBottom: '12px' }}>
                          {article.excerpt}
                        </p>
                        <Link href={`/blog/${article.slug}`} style={{ fontSize: '12px', fontWeight: 700, color: '#0EA5E9', textDecoration: 'none' }}>
                          Read more →
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* RIGHT: Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', position: 'sticky', top: '100px' }}>

              {/* Most Read */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', border: '1px solid #E2E8F0', padding: '24px' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '17px', fontWeight: 800, color: '#0F172A', marginBottom: '18px', letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '16px' }}>🔥</span> Most Read This Week
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {mostRead.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px 0', borderBottom: i < mostRead.length - 1 ? '1px solid #E2E8F0' : 'none' }}>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: 800, color: i === 0 ? '#0EA5E9' : '#CBD5E1', lineHeight: 1, minWidth: '24px', paddingTop: '2px' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '13px', fontWeight: 600, color: '#1E293B', lineHeight: 1.45, marginBottom: '4px', cursor: 'pointer' }}>{item.title}</p>
                        <span style={{ fontSize: '11px', color: '#94A3B8', fontWeight: 600 }}>{item.views} views</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Widget */}
              <div style={{ background: 'linear-gradient(135deg, #0EA5E9, #0284C7)', borderRadius: '14px', padding: '24px', color: '#FFFFFF' }}>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>📬</div>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '17px', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.01em' }}>
                  Get the Weekly Brief
                </h3>
                <p style={{ fontSize: '13px', opacity: 0.9, lineHeight: 1.6, marginBottom: '16px' }}>
                  New research, product updates, and health guides — every Tuesday morning.
                </p>
                {sidebarSubscribed ? (
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: '10px', padding: '12px', textAlign: 'center' }}>
                    <span style={{ fontSize: '14px', fontWeight: 700 }}>✓ You're subscribed!</span>
                  </div>
                ) : (
                  <form onSubmit={handleSidebarSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <input
                      type="email"
                      value={sidebarEmail}
                      onChange={(e) => setSidebarEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      style={{ padding: '11px 14px', borderRadius: '8px', border: 'none', fontSize: '14px', fontFamily: 'Inter, sans-serif', color: '#0F172A', outline: 'none', width: '100%', boxSizing: 'border-box' }}
                    />
                    <button type="submit" style={{ padding: '11px', borderRadius: '8px', backgroundColor: '#FFFFFF', color: '#0284C7', border: 'none', fontSize: '14px', fontWeight: 700, fontFamily: 'Outfit, sans-serif', cursor: 'pointer', letterSpacing: '0.02em' }}>
                      Get Weekly Brief
                    </button>
                  </form>
                )}
              </div>

              {/* Tag Cloud */}
              <div style={{ backgroundColor: '#F8FAFC', borderRadius: '14px', border: '1px solid #E2E8F0', padding: '24px' }}>
                <h3 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '17px', fontWeight: 800, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.01em' }}>
                  Browse by Category
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {tagCategories.map((tag) => {
                    const style = categoryColors[tag] || { bg: '#F1F5F9', color: '#475569' };
                    return (
                      <button
                        key={tag}
                        onClick={() => setActiveCategory(tag)}
                        style={{ padding: '5px 12px', borderRadius: '20px', backgroundColor: style.bg, color: style.color, border: 'none', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Outfit, sans-serif', transition: 'opacity 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA: NEWSLETTER */}
      <section style={{ backgroundColor: '#F8FAFC', padding: 'clamp(56px, 7vw, 96px) 24px', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, color: '#0F172A', marginBottom: '12px' }}>Stay Updated</h2>
          <p style={{ fontSize: '16px', color: '#64748B', marginBottom: '24px' }}>Get the latest in health tech, AI coaching tips, and exclusive offers.</p>
          <div style={{ display: 'flex', gap: '8px', maxWidth: '420px', margin: '0 auto' }}>
            <input type='email' placeholder='Enter your email' style={{ flex: 1, padding: '12px 16px', borderRadius: '8px', border: '1px solid #E2E8F0', fontSize: '15px', fontFamily: 'Inter, sans-serif' }} />
            <button style={{ padding: '12px 24px', background: '#0EA5E9', color: '#FFFFFF', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif', cursor: 'pointer' }}>Subscribe</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
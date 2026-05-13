import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import CTASection from '@/components/sections/CTASection';
import FloatingContact from '@/components/sections/FloatingContact';
import Link from 'next/link';

const products = [
  { id: 'apex', name: 'Lumivex Apex', tagline: 'The flagship. No compromises.', price: 499, image: '/generated/lumivex-apex.webp', badge: 'Best Seller', href: '/products/lumivex-apex' },
  { id: 'sport', name: 'Apex Sport', tagline: 'For athletes who refuse limits.', price: 549, image: '/generated/lumivex-apex-sport.webp', badge: 'Adventure', href: '/products/lumivex-apex-sport' },
  { id: 'pulse', name: 'Lumivex Pulse', tagline: 'All the health. Half the price.', price: 299, image: '/generated/lumivex-pulse.webp', badge: 'Most Popular', href: '/products/lumivex-pulse' },
  { id: 'core', name: 'Lumivex Core', tagline: 'Smart health starts here.', price: 179, image: '/generated/lumivex-core.webp', badge: 'Best Value', href: '/products/lumivex-core' },
  { id: 'kids', name: 'Pulse Kids', tagline: 'Health habits that start young.', price: 149, image: '/generated/lumivex-pulse-kids.webp', badge: 'Family', href: '/products/lumivex-pulse-kids' },
];

const scenarios = [
  { icon: '🏃', title: 'Running', desc: 'VO2 Max estimation, lactate threshold, running power meter. Dual-band GPS with 2.5m accuracy.', stat: '40+ sport profiles' },
  { icon: '🏊', title: 'Swimming', desc: '5ATM waterproof to 50 meters. Stroke detection, lap counting, underwater heart rate tracking.', stat: '50m depth rated' },
  { icon: '🌙', title: 'Sleep', desc: 'REM cycle analysis, SpO2 overnight tracking, sleep apnea risk scoring with clinical validation.', stat: 'Sleep stage accuracy 92%' },
  { icon: '💼', title: 'Business', desc: 'Stress index via HRV + EDA. Focus duration tracking. Discreet titanium design fits any boardroom.', stat: '24/7 wear comfort' },
];

const trustStats = [
  { value: '$750B', label: 'Global smartwatch market by 2026' },
  { value: '200,000+', label: 'Active Lumivex users worldwide' },
  { value: 'FDA', label: 'Cleared ECG & AFib detection' },
  { value: '98.2%', label: 'AFib detection sensitivity' },
];

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* 1 — Hero */}
      <section className="relative pt-32 pb-24 px-6" style={{ background: 'radial-gradient(ellipse 90% 80% at 70% 40%, #CFFAFE 0%, #ECFEFF 45%, #FFFFFF 100%)' }}>
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
            <div className="lg:w-1/2">
              <span className="inline-block bg-primary-light text-primary font-outfit font-semibold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-6">
                HealthCore AI v3.0
              </span>
              <h1 className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text-primary leading-none tracking-tight">
                Know your body<br />
                <span className="text-primary">better than anyone.</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-muted mt-6 leading-relaxed max-w-lg">
                Clinical-grade ECG. Cuffless blood pressure. 21-day battery. An AI that detects illness before you feel symptoms — trusted by 200,000+ people worldwide.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/products" className="btn-accent text-base px-8 py-3.5">Explore Lumivex</Link>
                <Link href="/products/lumivex-apex" className="btn-outline text-base px-8 py-3.5">Buy Apex — $499</Link>
              </div>
            </div>
            <div className="mt-14 lg:mt-0 lg:w-1/2 flex justify-center">
              <img src="/generated/hero-apex-product.webp" alt="Lumivex Apex smartwatch" className="max-w-full h-auto max-h-[520px] object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Trust Bar */}
      <section className="bg-white border-y border-border-light py-10 px-6">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustStats.map((s, i) => (
              <div key={i}>
                <div className="font-outfit text-2xl sm:text-3xl font-extrabold text-primary">{s.value}</div>
                <div className="text-sm text-text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — Products */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-site mx-auto">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted text-center mb-3">The Lineup</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center mb-2">Five watches. Infinite health intelligence.</h2>
          <p className="text-text-muted text-lg text-center mb-12 max-w-xl mx-auto">From clinical-grade titanium to colorful family-friendly designs — every Lumivex runs the same HealthCore AI engine.</p>
        </div>
        <div className="max-w-site mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0, 3).map((p) => (
            <Link key={p.id} href={p.href} className="group bg-bg-main rounded-2xl border border-border-light p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all text-center">
              <img src={p.image} alt={p.name} className="w-full h-48 object-contain mb-4 group-hover:scale-105 transition-transform duration-300" />
              {p.badge && <span className="badge text-xs mb-1">{p.badge}</span>}
              <h3 className="font-outfit text-xl font-bold text-text-primary group-hover:text-primary transition-colors mt-1">{p.name}</h3>
              <p className="text-sm text-text-muted mt-1">{p.tagline}</p>
              <p className="font-outfit font-bold text-2xl text-text-primary mt-3">${p.price}</p>
            </Link>
          ))}
        </div>
        <div className="max-w-site mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {products.slice(3).map((p) => (
            <Link key={p.id} href={p.href} className="group bg-bg-main rounded-2xl border border-border-light p-5 hover:shadow-card-hover hover:-translate-y-1 transition-all flex items-center gap-5">
              <img src={p.image} alt={p.name} className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300 shrink-0" />
              <div>
                {p.badge && <span className="badge text-xs mb-1">{p.badge}</span>}
                <h3 className="font-outfit font-bold text-text-primary group-hover:text-primary transition-colors">{p.name}</h3>
                <p className="text-sm text-text-muted">{p.tagline}</p>
                <p className="font-outfit font-bold text-lg text-text-primary mt-1">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4 — Scenarios */}
      <section className="bg-bg-main py-24 px-6">
        <div className="max-w-site mx-auto">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted text-center mb-3">Designed for life</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center mb-2">One watch. Every moment.</h2>
          <p className="text-text-muted text-lg text-center mb-12 max-w-xl mx-auto">From marathon training to boardroom meetings, Lumivex adapts to your life — not the other way around.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scenarios.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-border-light p-6 hover:shadow-card transition-shadow text-center group">
                <span className="text-4xl mb-3 block">{s.icon}</span>
                <h3 className="font-outfit font-bold text-text-primary">{s.title}</h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">{s.desc}</p>
                <p className="font-outfit font-bold text-primary text-sm mt-3">{s.stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Trust / Testimonial */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-4">Trusted by doctors</p>
          <blockquote className="font-outfit text-2xl sm:text-3xl text-text-primary leading-relaxed font-semibold">
            &ldquo;I recommended Lumivex to three patients after it detected their AFib before I did in clinic. The ECG accuracy is genuinely impressive.&rdquo;
          </blockquote>
          <cite className="block mt-6 not-italic">
            <span className="font-outfit font-bold text-text-primary">Dr. Priya Mehta</span>
            <span className="text-text-muted text-sm ml-2">Cardiologist, Stanford Medicine</span>
          </cite>
          <div className="flex justify-center gap-8 mt-10 text-sm text-text-muted">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-accent rounded-full" /> FDA-Cleared</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-accent rounded-full" /> HIPAA Compliant</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-accent rounded-full" /> ISO 13485</span>
          </div>
        </div>
      </section>

      {/* 6 — CTA */}
      <CTASection
        title="30-day risk-free trial"
        subtitle="Free shipping. No-questions return. If it doesn't change how you understand your health, send it back."
        cta={[
          { label: 'Shop All Watches', href: '/products' },
          { label: 'Compare Models', href: '/products' },
        ]}
        variant="accent"
      />

      <Footer />
      <FloatingContact label="Contact Sales" />
    </>
  );
}

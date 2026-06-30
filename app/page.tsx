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
  { icon: '🏃', title: 'Running', desc: 'VO2 Max estimation, running power meter, 40+ sport profiles with dual-band GPS tracking.', stat: '40+ profiles' },
  { icon: '🏊', title: 'Swimming', desc: '5ATM to 50 meters. Stroke detection, lap counting, underwater heart rate tracking.', stat: '50m rated' },
  { icon: '🌙', title: 'Sleep', desc: 'REM analysis, SpO2 overnight, sleep apnea scoring. 92% stage accuracy.', stat: '92% accuracy' },
  { icon: '💼', title: 'Business', desc: 'Stress index via HRV+EDA. Focus tracking. Titanium design fits any boardroom.', stat: '24/7 comfort' },
];

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* 1 — Hero: 标题在上，视频在下 */}
      <section className="relative pt-32" style={{ background: 'linear-gradient(135deg, #FAFAF9 0%, #FFF7ED 50%, #FAFAF9 100%)' }}>
        {/* Text area */}
        <div className="max-w-site mx-auto px-6 pb-12 text-center">
          <span className="inline-block bg-accent-light text-accent font-outfit font-semibold text-xs tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
            HealthCore AI v3.0
          </span>
          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-none tracking-tight">
            Know your body<br />
            <span className="text-accent">better than anyone.</span>
          </h1>
          <p className="text-lg text-text-muted mt-4 leading-relaxed max-w-xl mx-auto">
            Clinical-grade ECG. Cuffless blood pressure. 21-day battery. An AI that learns your body&apos;s rhythm and alerts you before something&apos;s wrong.
          </p>
          <div className="flex flex-wrap gap-4 mt-7 justify-center">
            <Link href="/products" className="btn-accent text-base px-8 py-3.5">Explore Lumivex</Link>
            <Link href="/products/lumivex-apex" className="btn-outline text-base px-8 py-3.5">Buy Apex — $499</Link>
          </div>
        </div>
        {/* Video area */}
        <div className="w-full max-w-5xl mx-auto aspect-video bg-primary/5 rounded-2xl overflow-hidden shadow-2xl">
          <video
            autoPlay muted loop playsInline
            poster="/generated/hero-apex-product.webp"
            className="w-full h-full object-cover"
          >
            <source src="/video/hero-showcase.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="pb-16" />
      </section>

      {/* 2 — Trust Bar */}
      <section className="bg-white border-y border-border-light py-10 px-6">
        <div className="max-w-site mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{ v: '$750B', l: 'Smartwatch market by 2026' },{ v: '200K+', l: 'Active users worldwide' },{ v: 'Clinically', l: 'Tested ECG & AFib' },{ v: '98.2%', l: 'AFib detection sensitivity' }].map((s,i) => (
            <div key={i}><div className="font-outfit text-2xl sm:text-3xl font-extrabold text-accent">{s.v}</div><div className="text-sm text-text-muted mt-1">{s.l}</div></div>
          ))}
        </div>
      </section>

      {/* 3 — Products */}
      <section className="bg-bg-main py-24 px-6">
        <div className="max-w-site mx-auto text-center mb-12">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-3">The Lineup</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary">Five watches.<br />Infinite health intelligence.</h2>
        </div>
        <div className="max-w-site mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.slice(0,3).map(p => (
            <Link key={p.id} href={p.href} className="group bg-white rounded-2xl border border-border-light p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all text-center">
              <img src={p.image} alt={p.name} className="w-full h-48 object-contain mb-4 group-hover:scale-105 transition-transform duration-300" />
              {p.badge && <span className="badge text-xs mb-1">{p.badge}</span>}
              <h3 className="font-outfit text-xl font-bold text-text-primary group-hover:text-accent transition-colors mt-1">{p.name}</h3>
              <p className="text-sm text-text-muted mt-1">{p.tagline}</p>
              <p className="font-outfit font-bold text-2xl text-text-primary mt-3">${p.price}</p>
            </Link>
          ))}
        </div>
        <div className="max-w-site mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {products.slice(3).map(p => (
            <Link key={p.id} href={p.href} className="group bg-white rounded-2xl border border-border-light p-5 hover:shadow-card-hover hover:-translate-y-1 transition-all flex items-center gap-5">
              <img src={p.image} alt={p.name} className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300 shrink-0" />
              <div>
                {p.badge && <span className="badge text-xs mb-1">{p.badge}</span>}
                <h3 className="font-outfit font-bold text-text-primary group-hover:text-accent transition-colors">{p.name}</h3>
                <p className="text-sm text-text-muted">{p.tagline}</p>
                <p className="font-outfit font-bold text-lg text-text-primary mt-1">${p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 4 — Scenarios */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-site mx-auto text-center mb-12">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-3">Designed for life</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary">One watch. Every moment.</h2>
        </div>
        <div className="max-w-site mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((s,i) => (
            <div key={i} className="bg-bg-main rounded-2xl border border-border-light p-6 hover:shadow-card transition-shadow text-center group">
              <span className="text-4xl mb-3 block">{s.icon}</span>
              <h3 className="font-outfit font-bold text-text-primary">{s.title}</h3>
              <p className="text-sm text-text-muted mt-2 leading-relaxed">{s.desc}</p>
              <p className="font-outfit font-bold text-accent text-sm mt-3">{s.stat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5 — Trust / Testimonial */}
      <section className="bg-bg-main py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-4">Trusted by doctors</p>
          <blockquote className="font-outfit text-2xl sm:text-3xl text-text-primary leading-relaxed font-semibold">
            &ldquo;I recommended Lumivex to three patients after it detected their AFib before I did in clinic.&rdquo;
          </blockquote>
          <cite className="block mt-6 not-italic"><span className="font-outfit font-bold text-text-primary">Dr. Priya Mehta</span><span className="text-text-muted text-sm ml-2">Cardiologist, Stanford Medicine</span></cite>
          <div className="flex justify-center gap-8 mt-10 text-sm text-text-muted">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-accent rounded-full" /> Clinically Tested</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-accent rounded-full" /> Privacy Certified</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 bg-accent rounded-full" /> Quality Certified</span>
          </div>
        </div>
      </section>

      {/* 6 — CTA */}
      <CTASection title="30-day risk-free trial" subtitle="Free shipping. No-questions return. If it doesn't change how you understand your health, send it back." cta={[{ label: 'Shop All Watches', href: '/products' },{ label: 'Compare Models', href: '/products' }]} variant="accent" />

      <Footer />
      <FloatingContact label="Contact Sales" />
    </>
  );
}

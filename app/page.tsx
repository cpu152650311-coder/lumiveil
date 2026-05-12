import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import ProductGrid from '@/components/sections/ProductGrid';
import CTASection from '@/components/sections/CTASection';
import VideoPlayer from '@/components/sections/VideoPlayer';
import FloatingContact from '@/components/sections/FloatingContact';
import Link from 'next/link';

const homeProducts = [
  {
    id: 'lumivex-apex',
    name: 'Lumivex Apex',
    tagline: 'The flagship. No compromises.',
    price: 499,
    features: ['21-day battery', 'FDA-cleared ECG', 'Titanium + sapphire', '8 clinical sensors'],
    image: '/generated/lumivex-apex.webp',
    badge: 'Best Seller',
    href: '/products/lumivex-apex',
  },
  {
    id: 'lumivex-pulse',
    name: 'Lumivex Pulse',
    tagline: 'All the health. Half the price.',
    price: 299,
    features: ['14-day battery', 'ECG & AFib detection', 'Aluminum alloy', '6 health sensors'],
    image: '/generated/lumivex-pulse.webp',
    badge: 'Most Popular',
    href: '/products/lumivex-pulse',
  },
  {
    id: 'lumivex-core',
    name: 'Lumivex Core',
    tagline: 'Smart health starts here.',
    price: 179,
    features: ['10-day battery', 'Heart rate + SpO2', 'Sleep tracking', 'IP68 waterproof'],
    image: '/generated/lumivex-core.webp',
    badge: 'Best Value',
    href: '/products/lumivex-core',
  },
];

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* 1 — Hero */}
      <section className="relative pt-32 pb-24 px-6" style={{ background: 'radial-gradient(ellipse 90% 80% at 75% 40%, #E0F2FE 0%, #F8FAFC 45%, #FFFFFF 100%)' }}>
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20">
            <div className="lg:w-1/2">
              <span className="inline-block bg-accent-light text-accent font-outfit font-semibold text-xs tracking-wider uppercase px-3 py-1.5 rounded-full mb-6">
                HealthCore AI v3.0 — Now with trend forecasting
              </span>
              <h1 className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-extrabold text-text-primary leading-none tracking-tight">
                Know your body<br />
                <span className="text-accent">better than anyone.</span>
              </h1>
              <p className="text-lg sm:text-xl text-text-muted mt-6 leading-relaxed max-w-lg">
                FDA-cleared ECG. Cuffless blood pressure. 21-day battery. An AI that learns your body&apos;s rhythm and alerts you before something&apos;s wrong.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link href="/products" className="btn-accent text-base px-8 py-3.5">
                  Explore Lumivex
                </Link>
                <Link href="/products/lumivex-apex" className="btn-outline text-base px-8 py-3.5">
                  Buy Apex — $499
                </Link>
              </div>
            </div>
            <div className="mt-14 lg:mt-0 lg:w-1/2 flex justify-center">
              <img
                src="/generated/hero-apex-product.webp"
                alt="Lumivex Apex smartwatch on white background"
                className="max-w-full h-auto max-h-[520px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Products */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-site mx-auto">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted text-center mb-3">The Lineup</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">
            Three watches. One mission.
          </h2>
        </div>
      </section>
      <ProductGrid
        title=""
        subtitle=""
        products={homeProducts}
      />

      {/* 3 — Trust: 一个强证言 + 两列关键数据 */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-4">Trusted by doctors</p>
              <blockquote className="font-outfit text-2xl sm:text-3xl text-text-primary leading-relaxed font-semibold">
                &ldquo;I recommended Lumivex to three patients after it detected their AFib before I did in clinic. The ECG accuracy is genuinely impressive.&rdquo;
              </blockquote>
              <cite className="block mt-6 not-italic">
                <span className="font-outfit font-bold text-text-primary">Dr. Priya Mehta</span>
                <span className="text-text-muted text-sm ml-2">Cardiologist, Stanford Medicine</span>
              </cite>
            </div>
            <div className="lg:w-1/2">
              <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-6">Why Lumivex</p>
              <ul className="space-y-6">
                {[
                  { value: '21 days', label: 'Battery life — the longest in any clinical-grade smartwatch. Three weeks on a single charge.' },
                  { value: '98.2%', label: 'AFib detection sensitivity — FDA-cleared single-lead ECG with clinical validation.' },
                  { value: '5ATM', label: 'Water resistance to 50 meters. Swim, dive, shower. No compromises.' },
                  { value: '2 hours', label: 'Average response time from our support team. Real humans, not chatbots.' },
                ].map((item, i) => (
                  <li key={i}>
                    <span className="font-outfit text-3xl font-extrabold text-accent">{item.value}</span>
                    <p className="text-text-muted mt-1 leading-relaxed">{item.label}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Video: 紧凑 */}
      <section className="bg-bg-main py-24 px-6">
        <div className="max-w-site mx-auto">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted text-center mb-3">Watch the film</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center mb-10">
            Lumivex Apex in motion
          </h2>
          <VideoPlayer />
        </div>
      </section>

      {/* 5 — CTA */}
      <CTASection
        title="30-day risk-free trial"
        subtitle="Free shipping. No-questions return. 2-year warranty. If it doesn't change how you understand your health, send it back."
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

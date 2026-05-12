import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import ProductGrid from '@/components/sections/ProductGrid';
import FeatureAlternating from '@/components/sections/FeatureAlternating';
import ComparisonTable from '@/components/sections/ComparisonTable';
import TestimonialCards from '@/components/sections/TestimonialCards';
import CTASection from '@/components/sections/CTASection';
import NewsletterForm from '@/components/sections/NewsletterForm';
import VideoPlayer from '@/components/sections/VideoPlayer';
import FeatureCarousel from '@/components/sections/FeatureCarousel';
import ParallaxBanner from '@/components/sections/ParallaxBanner';
import FloatingContact from '@/components/sections/FloatingContact';
import Link from 'next/link';

const carouselSlides = [
  {
    icon: '⚡',
    title: '21-Day Battery',
    subtitle: 'The longest battery life in a clinical-grade smartwatch. One charge powers three weeks of continuous health monitoring, GPS tracking, and sleep analysis.',
    stat: '21 days',
    image: '/generated/hero-apex-product.webp',
    imageAlt: 'Lumivex Apex smartwatch',
  },
  {
    icon: '💓',
    title: 'FDA-Cleared ECG',
    subtitle: 'Continuous electrocardiogram monitoring with 98.2% AFib detection sensitivity. Your watch analyzes every heartbeat and alerts you before symptoms appear.',
    stat: '98.2%',
    image: '/generated/technology-sensors.webp',
    imageAlt: 'ECG sensor technology',
  },
  {
    icon: '💧',
    title: '5ATM Water Resistance',
    subtitle: 'Tested to 50 meters. Track your swims, dive into the ocean, or shower without a second thought. Built for life in and out of the water.',
    stat: '50m',
    image: '/generated/lifestyle-runner.webp',
    imageAlt: 'Lumivex during outdoor activity',
  },
];

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

const homeFeatures = [
  {
    title: 'Continuous ECG & Atrial Fibrillation Detection',
    description: 'FDA-cleared single-lead ECG continuously monitors your heart rhythm. The AI analyzes every beat for AFib, irregular rhythm notifications, and early-warning anomalies. Clinical studies show 98.2% sensitivity in AFib detection.',
    link: { label: 'See the science', href: '/technology' },
    image: '/generated/technology-sensors.webp',
  },
  {
    title: 'Blood Pressure & SpO2 Monitoring',
    description: 'Cuffless blood pressure via pulse transit time algorithm, clinically validated against arterial line measurements. Continuous SpO2 with ±1% accuracy tracks oxygen levels day and night, with automatic sleep apnea risk scoring.',
    link: { label: 'How it works', href: '/technology' },
    image: '/generated/lifestyle-wellness.webp',
  },
  {
    title: 'HealthCore AI — Your 24/7 Medical Companion',
    description: 'HealthCore AI synthesizes 72 hours of biometric history to generate daily readiness scores, recovery recommendations, and anomaly alerts. It learns your personal baseline — not population averages.',
    link: { label: 'Explore AI engine', href: '/technology' },
    image: '/generated/lifestyle-runner.webp',
  },
];

const comparisonColumns = ['Feature', 'Lumivex Apex', 'Apple Watch Ultra 2', 'Garmin Fenix 8'];
const comparisonRows = [
  { feature: 'Battery Life', lumivex: '21 days', competitors: ['36 hours', '16 days'] },
  { feature: 'Blood Pressure', lumivex: true, competitors: [false, false] },
  { feature: 'ECG', lumivex: true, competitors: [true, false] },
  { feature: 'Price', lumivex: '$499', competitors: ['$799', '$699'] },
  { feature: 'AI Health Coaching', lumivex: true, competitors: ['Partial', false] },
  { feature: 'Sleep Apnea Detection', lumivex: true, competitors: [true, false] },
];

const testimonials = [
  {
    quote: 'I recommended Lumivex to three patients after it detected their AFib before I did in clinic.',
    name: 'Dr. Priya Mehta',
    context: 'Cardiologist, Stanford Medicine',
    rating: 5,
  },
  {
    quote: 'I ran a 100-mile race and my Lumivex Apex still had 40% battery. The GPS track was flawless.',
    name: 'Marcus Okafor',
    context: 'Ultra-marathoner',
    rating: 5,
  },
  {
    quote: 'My sleep score dropped 18 points before a burnout episode. Lumivex caught the pattern two weeks early.',
    name: 'Sarah Lin',
    context: 'Startup Founder',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <Navigation />

      {/* Dark Hero — 对标 Apple Watch Ultra 首屏 */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #1a1f2e 0%, #1e293b 30%, #0f172a 60%, #1a1f2e 100%)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" style={{ top: '85%' }} />
        <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-site mx-auto px-4 w-full relative z-10 pt-20 pb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 text-center lg:text-left">
              <span className="inline-block bg-white/10 text-accent-light font-outfit font-semibold text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-white/10 mb-6 backdrop-blur-sm">
                HealthCore AI v3.0
              </span>
              <h1 className="font-outfit text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-none tracking-tight">
                Know your body<br />
                <span className="text-accent">better than anyone.</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/60 mt-6 leading-relaxed max-w-lg">
                The only smartwatch with FDA-cleared ECG, cuffless blood pressure, and an AI that detects illness before you feel symptoms.
              </p>
              <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                <Link href="/products" className="bg-accent text-white font-outfit font-semibold px-8 py-4 rounded-xl hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/30 transition-all text-base">
                  Explore
                </Link>
                <Link href="/products/lumivex-apex" className="bg-white/10 text-white font-outfit font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all text-base backdrop-blur-sm">
                  Buy — from $499
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] scale-90" />
                <img
                  src="/generated/hero-watch-dark.webp"
                  alt="Lumivex Apex"
                  className="relative z-10 max-w-full h-auto max-h-[600px] object-contain drop-shadow-[0_0_60px_rgba(14,165,233,0.3)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Carousel */}
      <FeatureCarousel slides={carouselSlides} />

      {/* Material Parallax */}
      <ParallaxBanner
        bgImage="/generated/titanium-texture.webp"
        feature="Materials"
        title="Grade 5 Titanium. Lighter than steel. Stronger than aluminum."
        subtitle="Every Lumivex Apex is machined from a single block of aerospace-grade titanium. Sapphire crystal. Ceramic bezel. Built to outlast you."
      />

      {/* Products */}
      <ProductGrid
        title="Choose Your Lumivex"
        subtitle="One mission — know your body better than anyone."
        products={homeProducts}
      />

      {/* Health Features */}
      <FeatureAlternating
        title="HealthCore AI — Your 24/7 Medical Companion"
        subtitle="Not just data. Diagnosis-grade intelligence."
        features={homeFeatures}
      />

      {/* Video */}
      <section className="bg-bg-main py-20 px-4">
        <div className="max-w-site mx-auto">
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">See Lumivex in Motion</h2>
          <p className="text-text-muted text-lg text-center mt-2 mb-10">60 seconds. Everything you need to know.</p>
          <VideoPlayer />
        </div>
      </section>

      {/* Comparison */}
      <ComparisonTable
        title="How Lumivex Stacks Up"
        subtitle="We'll let the specs speak."
        columns={comparisonColumns}
        rows={comparisonRows}
        cta={{ label: 'Shop Lumivex Apex →', href: '/products/lumivex-apex' }}
      />

      {/* Testimonials */}
      <TestimonialCards
        title="Worn by Thousands. Trusted by Doctors."
        subtitle="Real people. Real results."
        testimonials={testimonials}
      />

      {/* Newsletter */}
      <section className="bg-white py-20 px-4">
        <NewsletterForm />
      </section>

      {/* Final CTA */}
      <CTASection
        title="Your Health Journey Starts Today"
        subtitle="Free shipping. 30-day trial. No-questions return."
        cta={[
          { label: 'Shop All Watches', href: '/products' },
          { label: 'Compare Models', href: '/products#comparison' },
        ]}
        trustBadges={[
          { icon: '🛡️', label: '30-Day Guarantee' },
          { icon: '🚚', label: 'Free Shipping' },
          { icon: '⭐', label: '4.9 Rating' },
        ]}
        variant="accent"
      />

      <Footer />
      <FloatingContact label="Contact Sales" />
    </>
  );
}

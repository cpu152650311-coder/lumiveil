import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ProductGrid from '@/components/sections/ProductGrid';
import FeatureAlternating from '@/components/sections/FeatureAlternating';
import ComparisonTable from '@/components/sections/ComparisonTable';
import TestimonialCards from '@/components/sections/TestimonialCards';
import CTASection from '@/components/sections/CTASection';
import NewsletterForm from '@/components/sections/NewsletterForm';
import VideoPlayer from '@/components/sections/VideoPlayer';

const homeProducts = [
  {
    id: 'lumivex-apex',
    name: 'Lumivex Apex',
    tagline: 'The flagship. No compromises.',
    price: 499,
    features: ['21-day battery life', 'FDA-cleared ECG & AFib detection', 'Cuffless blood pressure monitoring', 'Grade 5 titanium + sapphire crystal'],
    image: '/generated/lumivex-apex.webp',
    badge: 'Best Seller',
    href: '/products/lumivex-apex',
  },
  {
    id: 'lumivex-pulse',
    name: 'Lumivex Pulse',
    tagline: 'All the health. Half the price.',
    price: 299,
    features: ['14-day battery life', 'ECG & AFib detection', 'SpO2 & continuous heart rate', 'Aluminum alloy + tempered glass'],
    image: '/generated/lumivex-pulse.webp',
    badge: 'Most Popular',
    href: '/products/lumivex-pulse',
  },
  {
    id: 'lumivex-core',
    name: 'Lumivex Core',
    tagline: 'Smart health starts here.',
    price: 179,
    features: ['10-day battery life', 'Continuous heart rate + SpO2', 'Sleep tracking with smart alarm', 'Reinforced polymer + mineral glass'],
    image: '/generated/lumivex-core.webp',
    badge: 'Best Value',
    href: '/products/lumivex-core',
  },
];

const homeFeatures = [
  {
    title: 'Continuous ECG & Atrial Fibrillation Detection',
    description: 'FDA-cleared single-lead ECG continuously monitors your heart rhythm. The AI analyzes every beat for AFib, irregular rhythm notifications, and early-warning anomalies — often detecting patterns before symptoms appear. Clinical studies show 98.2% sensitivity in AFib detection.',
    link: { label: 'See the science', href: '/technology' },
    image: '/generated/technology-sensors.webp',
  },
  {
    title: 'Blood Pressure & SpO2 Monitoring',
    description: 'Cuffless blood pressure via pulse transit time algorithm, clinically validated against arterial line measurements. Continuous SpO2 with ±1% accuracy tracks oxygen levels day and night, with automatic sleep apnea risk scoring that flags dangerous desaturation events.',
    link: { label: 'How it works', href: '/technology' },
    image: '/generated/lifestyle-wellness.webp',
  },
  {
    title: 'HealthCore AI — Your 24/7 Medical Companion',
    description: 'HealthCore AI synthesizes 72 hours of biometric history to generate daily readiness scores, recovery recommendations, and anomaly alerts. It learns your personal baseline over time — not population averages — so deviations are meaningful to you.',
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
  { feature: 'SpO2', lumivex: true, competitors: [true, true] },
  { feature: 'Sleep Apnea Detection', lumivex: true, competitors: [true, false] },
];

const testimonials = [
  {
    quote: 'I recommended Lumivex to three patients after it detected their AFib before I did in clinic. The ECG accuracy is genuinely impressive.',
    name: 'Dr. Priya Mehta',
    context: 'Cardiologist, Stanford Medicine',
    rating: 5,
  },
  {
    quote: 'I ran a 100-mile race and my Lumivex Apex still had 40% battery. The GPS track was flawless, and the readiness score the next morning was eerily accurate.',
    name: 'Marcus Okafor',
    context: 'Ultra-marathoner',
    rating: 5,
  },
  {
    quote: 'My sleep score dropped 18 points before a burnout episode. Lumivex caught the pattern two weeks early. It changed how I manage my health.',
    name: 'Sarah Lin',
    context: 'Startup Founder',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <Navigation />

      <HeroSection
        badge="New: HealthCore AI v3.0"
        title="Your Health. Decoded."
        subtitle="21-day battery. Clinical sensors. AI that coaches you like a doctor who never sleeps."
        image="/generated/hero-apex-product.webp"
        imageAlt="Lumivex Apex smartwatch with health dashboard"
        cta={[
          { label: 'Shop Now', href: '/products' },
          { label: 'See How It Works', href: '/technology' },
        ]}
        trustBadges={['FDA-Cleared Sensors', '21-Day Battery', '5ATM Water Resistant', 'Free 30-Day Returns']}
      />

      <StatsSection
        title="Numbers That Matter"
        subtitle="Built on science. Proven in the field."
        stats={[
          { value: '21 Days', label: 'Battery Life (mixed use)', icon: '⚡' },
          { value: '8 Sensors', label: 'Health Monitoring Suite', icon: '💓' },
          { value: '5ATM', label: 'Water Resistance (50m)', icon: '💧' },
          { value: '4.9★', label: 'Average Rating (12,400+ reviews)', icon: '⭐' },
        ]}
      />

      <ProductGrid
        title="Choose Your Lumivex"
        subtitle="Three watches. One mission — know your body better than anyone."
        products={homeProducts}
      />

      <FeatureAlternating
        title="HealthCore AI — Your 24/7 Medical Companion"
        subtitle="Not just data. Diagnosis-grade intelligence."
        features={homeFeatures}
      />

      <section className="bg-white py-20 px-4">
        <div className="max-w-site mx-auto">
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">See Lumivex in Motion</h2>
          <p className="text-text-muted text-lg text-center mt-2 mb-10">60 seconds. Everything you need to know.</p>
          <VideoPlayer />
        </div>
      </section>

      <ComparisonTable
        title="How Lumivex Stacks Up"
        subtitle="We'll let the specs speak."
        columns={comparisonColumns}
        rows={comparisonRows}
        cta={{ label: 'Shop Lumivex Apex →', href: '/products' }}
      />

      <TestimonialCards
        title="Worn by Thousands. Trusted by Doctors."
        subtitle="Real people. Real results."
        testimonials={testimonials}
      />

      <section className="bg-bg-main py-20 px-4">
        <NewsletterForm />
      </section>

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
    </>
  );
}

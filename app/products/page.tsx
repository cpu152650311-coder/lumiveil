import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProductGrid from '@/components/sections/ProductGrid';
import ComparisonTable from '@/components/sections/ComparisonTable';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import FloatingContact from '@/components/sections/FloatingContact';

const allProducts = [
  {
    id: 'lumivex-apex',
    name: 'Lumivex Apex',
    tagline: 'The flagship. No compromises.',
    price: 499,
    features: ['21-day battery (mixed use)', 'Grade 5 titanium + sapphire crystal', 'FDA-cleared ECG & AFib detection', 'Cuffless blood pressure monitoring', 'SpO2, skin temp, bioimpedance', 'Dual-band GPS L1+L5'],
    image: '/generated/lumivex-apex.webp',
    badge: 'Best Seller',
    href: '/products/lumivex-apex',
  },
  {
    id: 'lumivex-apex-sport',
    name: 'Lumivex Apex Sport',
    tagline: 'Built for athletes who refuse limits.',
    price: 549,
    features: ['18-day battery (22 days power save)', 'Titanium + ceramic bezel + sapphire', 'Multi-sport GPS: 40+ profiles', 'Running power + VO2 max + lactate threshold', 'MIL-STD-810H rated', 'Satellite SOS (Iridium)'],
    image: '/generated/lumivex-apex-sport.webp',
    badge: 'Adventure',
    href: '/products/lumivex-apex-sport',
  },
  {
    id: 'lumivex-pulse',
    name: 'Lumivex Pulse',
    tagline: 'All the health. Half the price.',
    price: 299,
    features: ['14-day battery life', 'Aluminum alloy + tempered glass', 'ECG & AFib detection (FDA-cleared)', 'SpO2 & continuous heart rate', 'Sleep apnea risk scoring', 'Single-band GPS'],
    image: '/generated/lumivex-pulse.webp',
    badge: 'Most Popular',
    href: '/products/lumivex-pulse',
  },
  {
    id: 'lumivex-core',
    name: 'Lumivex Core',
    tagline: 'Smart health starts here.',
    price: 179,
    features: ['10-day battery life', 'Reinforced polymer + mineral glass', 'Continuous heart rate + SpO2', 'Sleep tracking with smart alarm', 'IP68 water resistance', 'iOS & Android compatible'],
    image: '/generated/lumivex-core.webp',
    badge: 'Best Value',
    href: '/products/lumivex-core',
  },
  {
    id: 'lumivex-pulse-kids',
    name: 'Lumivex Pulse Kids',
    tagline: 'Health habits that start young.',
    price: 149,
    features: ['7-day battery life', 'Durable polymer, 20 colors', 'Heart rate & activity tracking', 'SOS emergency + GPS location', 'Parental dashboard app', 'IP68 waterproof — pool safe'],
    image: '/generated/lumivex-pulse-kids.webp',
    badge: 'Family',
    href: '/products/lumivex-pulse-kids',
  },
];

const fullComparisonColumns = ['Feature', 'Lumivex Apex', 'Lumivex Apex Sport', 'Lumivex Pulse', 'Lumivex Core', 'Lumivex Pulse Kids'];
const fullComparisonRows = [
  { feature: 'Price', lumivex: '$499', competitors: ['$549', '$299', '$179', '$149'] },
  { feature: 'Battery Life', lumivex: '21 days', competitors: ['18 days', '14 days', '10 days', '7 days'] },
  { feature: 'Case Material', lumivex: 'Titanium', competitors: ['Titanium', 'Aluminum', 'Polymer', 'Polymer'] },
  { feature: 'Display', lumivex: '1.9" AMOLED', competitors: ['1.9" AMOLED', '1.6" AMOLED', '1.5" LCD', '1.3" LCD'] },
  { feature: 'Water Resistance', lumivex: '5ATM', competitors: ['5ATM', '5ATM', '5ATM', 'IP68'] },
  { feature: 'ECG', lumivex: true, competitors: [true, true, false, false] },
  { feature: 'Blood Pressure', lumivex: true, competitors: [true, false, false, false] },
  { feature: 'SpO2', lumivex: true, competitors: [true, true, true, false] },
  { feature: 'GPS', lumivex: 'Dual-band', competitors: ['Dual-band', 'Single-band', 'Phone GPS', 'Phone GPS'] },
  { feature: 'AI Coaching', lumivex: '1yr free', competitors: ['1yr free', '6mo free', 'Basic', 'Basic'] },
  { feature: 'Sleep Apnea', lumivex: true, competitors: [true, true, false, false] },
  { feature: 'Warranty', lumivex: '2 years', competitors: ['2 years', '2 years', '1 year', '1 year'] },
];

const faqItems = [
  { question: 'Which Lumivex is best for running?', answer: 'The Lumivex Apex Sport is purpose-built for runners with 40+ sport profiles, dual-band GPS, running power meter, VO2 max estimation, and lactate threshold tracking. For casual runners, the Apex and Pulse also deliver excellent GPS tracking and heart rate monitoring.' },
  { question: 'Are the health sensors FDA-cleared?', answer: 'Yes. The single-lead ECG with AFib detection is FDA-cleared (510(k) K231847). The SpO2 sensor and heart rate monitor are registered as Class II medical devices. The blood pressure monitoring feature is currently under FDA review; results are provided for wellness purposes only in the US.' },
  { question: 'Does Lumivex work with iPhone and Android?', answer: 'Yes. Lumivex works with iPhone (iOS 16+) and Android (12+). The companion app is available on both the App Store and Google Play. Health data can sync with Apple Health, Google Health Connect, and Strava.' },
  { question: 'Can I swim with my Lumivex?', answer: 'All Lumivex models except Pulse Kids are rated at 5ATM (50 meters), suitable for swimming, snorkeling, and showering. Pulse Kids is IP68 rated, suitable for pool swimming. We do not recommend diving below 50 meters or exposure to high-velocity water (e.g., jet skiing) without a protective case.' },
  { question: 'How accurate is the blood pressure sensor?', answer: 'The cuffless blood pressure algorithm uses pulse transit time (PTT) with a mean absolute difference of 5.2 mmHg systolic and 3.9 mmHg diastolic compared to arterial line measurements in our clinical validation study (n=487). The sensor requires a monthly calibration with a standard cuff for optimal accuracy.' },
  { question: 'What subscription is required for AI coaching?', answer: 'HealthCore AI coaching is included free for the first year with Apex models and six months with Pulse. After the trial period, it is $9.99/month or $89.99/year. Core and Pulse Kids include basic health tracking without subscription. All models include free firmware updates for life.' },
  { question: 'How long does shipping take?', answer: 'Free standard shipping (5-7 business days) on all orders. Express shipping (2-3 business days) is $15. Overnight shipping is $35. We ship to 42 countries. Orders placed before 2 PM EST ship the same business day from our distribution centers in Ohio (US), Amsterdam (EU), and Singapore (APAC).' },
  { question: 'What is the return policy?', answer: '30-day risk-free trial. If you are not satisfied for any reason, return your Lumivex in its original packaging for a full refund. We cover return shipping. After 30 days, all watches are covered by a 2-year manufacturing warranty. ExtendedCare+ accidental damage coverage is available for $4.99/month.' },
];

export default function ProductsPage() {
  return (
    <>
      <Navigation />

      <HeroSection
        title="Find Your Lumivex"
        subtitle="Filter by sport, health goal, or budget. Every watch ships free."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Products', href: '/products' }]}
        compact
      />

      <ProductGrid
        products={allProducts}
        filters={[
          { label: 'All', value: 'all' },
          { label: 'Fitness', value: 'fitness' },
          { label: 'Health', value: 'health' },
          { label: 'Adventure', value: 'adventure' },
          { label: 'Everyday', value: 'everyday' },
        ]}
      />

      <ComparisonTable
        title="Not Sure Which to Choose?"
        subtitle="Side-by-side specs across the full lineup."
        columns={fullComparisonColumns}
        rows={fullComparisonRows}
        highlightCol={1}
        cta={{ label: 'Still not sure? Take our 60-second quiz →', href: '/contact' }}
      />

      <FAQSection
        title="Common Questions"
        subtitle=""
        questions={faqItems}
      />

      <CTASection
        title="Free Shipping on Every Order"
        subtitle="30-day trial. Hassle-free returns. 2-year warranty."
        cta={[
          { label: 'Shop All Watches', href: '/products' },
        ]}
        trustBadges={[
          { icon: '🚚', label: 'Free Shipping' },
          { icon: '🛡️', label: '2-Year Warranty' },
          { icon: '🔧', label: 'Lifetime Support' },
        ]}
        variant="light"
        compact
      />

      <Footer />
      <FloatingContact label="Need Help Choosing?" />
    </>
  );
}

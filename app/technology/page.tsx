import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import FeatureAlternating from '@/components/sections/FeatureAlternating';
import TimelineSection from '@/components/sections/TimelineSection';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';

const aiFeatures = [
  {
    icon: '🔍',
    title: 'Anomaly Detection',
    description: 'Flags deviations from your personal baseline — not population averages. The AI learns your unique rhythm over 72 hours, so a deviation for you is actually meaningful.',
  },
  {
    icon: '📊',
    title: 'Readiness Score',
    description: 'Synthesizes sleep quality, HRV, resting heart rate, and activity load into a daily 0-100 score. Know exactly how hard to push — or when to recover.',
  },
  {
    icon: '📈',
    title: 'Trend Forecasting',
    description: '7-day projections for recovery windows, peak performance days, and illness risk scores based on subtle biometric trends you would never notice.',
  },
  {
    icon: '📄',
    title: 'Doctor Export',
    description: 'One-tap PDF report formatted for clinical review. Share ECG strips, blood pressure trends, and sleep summaries directly with your physician.',
  },
];

const sensorFeatures = [
  { icon: '💓', title: 'Single-Lead ECG', description: 'AFib detection with 98.2% sensitivity. Continuously monitors for irregular rhythm and sends alerts within 30 seconds of detection.', accuracy: 'FDA-cleared' },
  { icon: '❤️', title: 'PPG Heart Rate', description: 'Continuous optical heart rate with ±2 BPM accuracy. Uses multi-wavelength green, red, and infrared LEDs for motion-tolerant readings 24/7.', accuracy: '±2 BPM' },
  { icon: '🩸', title: 'Cuffless Blood Pressure', description: 'Systolic and diastolic measurement via pulse transit time algorithm. Clinically validated in a 487-participant study against arterial line readings.', accuracy: 'Clinically validated' },
  { icon: '🫁', title: 'Blood Oxygen (SpO2)', description: 'Measures 70-100% range with ±1% accuracy. Continuous nighttime monitoring with automatic sleep apnea risk scoring and desaturation alerts.', accuracy: '±1%' },
  { icon: '🌡️', title: 'Skin Temperature', description: '0.05°C resolution infrared sensor. Tracks baseline shifts for illness early-warning, menstrual cycle prediction, and circadian rhythm optimization.', accuracy: '0.05°C' },
  { icon: '⚡', title: 'Bioimpedance', description: 'Body composition analysis including hydration index, body fat percentage, and lean mass estimation. Tracks trends over weeks and months.', accuracy: 'Trend accuracy' },
  { icon: '🏔️', title: 'Barometric Altimeter', description: 'Automatic floor counting, altitude acclimatization alerts, and storm warning based on rapid pressure drops. Essential for mountaineers and hikers.', accuracy: '0.5m resolution' },
  { icon: '🔄', title: '6-Axis IMU', description: 'Gyroscope + accelerometer stack for activity recognition across 40+ sports, fall detection with automatic emergency contact, and gesture controls.', accuracy: '200Hz sampling' },
];

const materialMilestones = [
  { year: 'Step 1', title: 'Grade 5 Titanium Case', description: '40% lighter than steel, corrosion-resistant, hypoallergenic. Used in aerospace and surgical implants.' },
  { year: 'Step 2', title: 'Sapphire Crystal Display', description: '9H hardness — virtually scratch-proof. Diamond-like carbon anti-reflective coating for outdoor readability.' },
  { year: 'Step 3', title: 'Fluoro-elastomer Band', description: 'Sweat-resistant, dermatologist-tested, 40+ color options. Zero break-in period. Comfortable for 24/7 wear.' },
  { year: 'Step 4', title: 'Ceramic Bezel (Apex)', description: '10x harder than stainless steel, maintains polish indefinitely. Diamond-cut chamfers with micron-level precision.' },
];

const performanceStats = [
  { value: '21 Days', label: 'Battery (Apex, mixed use)' },
  { value: '50m', label: 'Water Depth Tested' },
  { value: '−20°C to 60°C', label: 'Operating Temperature' },
  { value: '98.2%', label: 'ECG AFib Sensitivity' },
  { value: '±1%', label: 'SpO2 Accuracy' },
  { value: '2.5m', label: 'GPS Accuracy (dual-band)' },
];

const techFeatures = [
  {
    title: 'HealthCore AI Engine',
    description: 'Trained on 2.4 million anonymized health profiles, our AI synthesizes your ECG, SpO2, heart rate variability, skin temperature, and activity data into a single daily Health Score (0-100). It detects subtle deviations from your personal baseline days before you feel symptoms — providing early warning for illness, overtraining, or sleep debt. The engine runs entirely on-device; your raw health data never leaves the watch without your explicit export.',
    link: { label: 'Download technical whitepaper', href: '#' },
    image: '/generated/technology-sensors.webp',
  },
  {
    title: 'Sensor Suite: Every Measurement, Clinical Accuracy',
    description: 'Eight sensors work in concert, sampling 200 times per second. The PPG array uses four wavelengths of light to penetrate different tissue depths for motion-tolerant readings. The bioimpedance sensor passes a micro-current through your skin to measure body composition. All sensors are calibrated against gold-standard clinical instruments in FDA-registered trials.',
    link: { label: 'View sensor specifications', href: '#sensors' },
    image: '/generated/lifestyle-runner.webp',
  },
];

export default function TechnologyPage() {
  return (
    <>
      <Navigation />

      <HeroSection
        title="Engineering You Can Wear"
        subtitle="Eight clinical sensors. One AI engine. Infinite health intelligence."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Technology', href: '/technology' }]}
        image="/generated/technology-sensors.webp"
        imageAlt="Lumivex sensor array diagram"
        cta={[{ label: 'See the Specs', href: '/products#comparison' }]}
      />

      <FeatureGrid
        title="HealthCore AI Engine"
        subtitle="Trained on 2.4 million anonymized health profiles."
        features={aiFeatures}
        variant="cards"
      />

      <FeatureAlternating
        title="Inside the Watch"
        subtitle=""
        features={techFeatures}
      />

      <section id="sensors" className="bg-bg-main py-20 px-4">
        <FeatureGrid
          title="Sensor Suite"
          subtitle="Every measurement. Clinical accuracy."
          features={sensorFeatures}
          variant="grid"
        />
      </section>

      <TimelineSection
        title="Built to Last"
        subtitle="Materials engineered for extreme conditions."
        milestones={materialMilestones}
        variant="horizontal"
      />

      <StatsSection
        title="Performance Benchmarks"
        subtitle="Independent lab-tested. Real-world proven."
        stats={performanceStats}
      />

      <CTASection
        title="Experience the Technology Firsthand"
        subtitle="30-day trial. If it doesn't change how you understand your health, return it."
        cta={[
          { label: 'Shop Lumivex Apex →', href: '/products' },
        ]}
        trustBadges={[
          { icon: '✅', label: 'FDA-Cleared' },
          { icon: '✅', label: 'CE Marked' },
          { icon: '✅', label: 'ISO 13485 Certified' },
        ]}
        variant="accent"
      />

      <Footer />
    </>
  );
}

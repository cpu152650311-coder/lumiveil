import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTASection from '@/components/sections/CTASection';
import FloatingContact from '@/components/sections/FloatingContact';

const aiFeatures = [
  { icon: '🔍', title: 'Anomaly Detection', description: 'Flags deviations from your personal baseline — not population averages. The AI learns your unique rhythm over 72 hours.' },
  { icon: '📊', title: 'Readiness Score', description: 'Synthesizes sleep quality, HRV, resting heart rate, and activity load into a daily 0-100 score.' },
  { icon: '📈', title: 'Trend Forecasting', description: '7-day projections for recovery windows, peak performance days, and illness risk scores.' },
  { icon: '📄', title: 'Doctor Export', description: 'One-tap PDF report formatted for clinical review. Share directly with your physician.' },
];

const sensorFeatures = [
  { icon: '💓', title: 'Single-Lead ECG', description: 'AFib detection with 98.2% sensitivity. FDA-cleared. Continuously monitors for irregular rhythm and sends alerts within 30 seconds of detection.', accuracy: 'FDA-cleared' },
  { icon: '❤️', title: 'PPG Heart Rate', description: 'Continuous optical heart rate with ±2 BPM accuracy. Multi-wavelength green, red, and infrared LEDs for motion-tolerant readings 24/7.', accuracy: '±2 BPM' },
  { icon: '🩸', title: 'Cuffless Blood Pressure', description: 'Systolic and diastolic measurement via pulse transit time algorithm. Clinically validated in a 487-participant study.', accuracy: 'Validated' },
  { icon: '🫁', title: 'Blood Oxygen (SpO2)', description: '70-100% range with ±1% accuracy. Continuous nighttime monitoring with automatic sleep apnea risk scoring.', accuracy: '±1%' },
  { icon: '🌡️', title: 'Skin Temperature', description: '0.05°C resolution. Illness early-warning, menstrual cycle prediction, circadian rhythm optimization.', accuracy: '0.05°C' },
  { icon: '⚡', title: 'Bioimpedance', description: 'Body composition analysis — hydration index, body fat percentage, lean mass estimation. Tracks trends over time.', accuracy: 'Trend' },
  { icon: '🏔️', title: 'Barometric Altimeter', description: 'Automatic floor counting, altitude acclimatization alerts, and storm warnings based on rapid pressure drops.', accuracy: '0.5m' },
  { icon: '🔄', title: '6-Axis IMU', description: 'Gyroscope + accelerometer for activity recognition across 40+ sports, fall detection with emergency contact.', accuracy: '200Hz' },
];

const performanceStats = [
  { value: '21 Days', label: 'Battery (Apex, mixed use)' },
  { value: '50m', label: 'Water depth tested' },
  { value: '−20°C to 60°C', label: 'Operating temperature' },
  { value: '98.2%', label: 'ECG AFib sensitivity' },
  { value: '±1%', label: 'SpO2 accuracy' },
  { value: '2.5m', label: 'GPS accuracy (dual-band)' },
];

export default function TechnologyPage() {
  return (
    <>
      <Navigation />

      <HeroSection
        title="Engineering you can wear"
        subtitle="Eight clinical sensors. One AI engine. Infinite health intelligence."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Technology', href: '/technology' }]}
        image="/generated/sensor-exploded.webp"
        imageAlt="Lumivex sensor array exploded view"
        cta={[{ label: 'See full specs', href: '/products' }]}
      />

      {/* AI Engine */}
      <FeatureGrid
        title="HealthCore AI Engine"
        subtitle="Trained on 2.4 million anonymized health profiles. Runs entirely on-device — your data never leaves your watch."
        features={aiFeatures}
        variant="cards"
      />

      {/* Sensor Suite — 双列交替，留白为主 */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-site mx-auto">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted text-center mb-3">Sensor Suite</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center mb-2">Every measurement. Clinical accuracy.</h2>
          <p className="text-text-muted text-lg text-center mb-16 max-w-xl mx-auto">Eight sensors sample 200 times per second, calibrated against gold-standard clinical instruments.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {sensorFeatures.map((feat, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-2xl shrink-0 mt-0.5">{feat.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-outfit font-bold text-text-primary text-sm">{feat.title}</h3>
                    <span className="text-[10px] font-semibold text-accent bg-accent-light px-1.5 py-0.5 rounded-full">{feat.accuracy}</span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance — 6 项指标，全宽 */}
      <section className="bg-accent py-20 px-6">
        <div className="max-w-site mx-auto">
          <p className="font-outfit text-sm uppercase tracking-widest text-white/60 text-center mb-3">Performance Benchmarks</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-white text-center mb-12">Independent lab-tested. Real-world proven.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {performanceStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">{stat.value}</div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the technology firsthand"
        subtitle="30-day trial. If it doesn't change how you understand your health, return it."
        cta={[{ label: 'Shop Lumivex Apex →', href: '/products/lumivex-apex' }]}
        variant="light"
      />

      <Footer />
      <FloatingContact label="Ask an Engineer" />
    </>
  );
}

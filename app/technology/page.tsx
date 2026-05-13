import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CTASection from '@/components/sections/CTASection';
import FloatingContact from '@/components/sections/FloatingContact';

const aiFeatures = [
  { icon: '🔍', title: 'Anomaly Detection', description: 'Flags deviations from your personal baseline — not population averages. The AI learns your unique rhythm over 72 hours of continuous monitoring, detecting subtle shifts before you feel symptoms.' },
  { icon: '📊', title: 'Readiness Score', description: 'Synthesizes sleep quality, HRV, resting heart rate, and activity load into a daily 0-100 score. Know exactly how hard to push — or when to recover.' },
  { icon: '📈', title: 'Trend Forecasting', description: '7-day projections for recovery windows, peak performance days, and illness risk scores. Based on 2.4 million anonymized health profiles.' },
  { icon: '📄', title: 'Doctor Export', description: 'One-tap PDF report formatted for clinical review. Share ECG strips, blood pressure trends, and sleep summaries directly with your physician.' },
];

const sensors = [
  { name: 'Single-Lead ECG', spec: 'FDA-cleared, 98.2% AFib sensitivity', desc: 'Dry electrode sensing captures cardiac electrical signals. Spatio-temporal dynamic filtering algorithm uses accelerometer data to cancel motion artifacts in real time. Continuously monitors for irregular rhythm — alerts within 30 seconds of detection.' },
  { name: 'PPG Heart Rate', spec: 'Multi-wavelength, ±2 BPM', desc: 'Green, red, and infrared LED matrix enables motion-tolerant readings across all skin tones. Adaptive sampling rate adjusts from 1Hz at rest to 100Hz during intense activity. 24/7 continuous optical monitoring.' },
  { name: 'Cuffless Blood Pressure', spec: 'PTT algorithm, clinically validated', desc: 'Pulse Transit Time measurement via ECG-PPG synchronization. Clinically validated in a 487-participant study against arterial line measurements. Monthly calibration with standard cuff for optimal accuracy.' },
  { name: 'Blood Oxygen (SpO2)', spec: '70-100%, ±1% accuracy', desc: 'Reflective photoelectric sensor with ambient light suppression algorithm. Continuous nighttime monitoring with automatic sleep apnea risk scoring. Performs reliably in low-perfusion and high-altitude conditions.' },
  { name: 'Skin Temperature', spec: '0.05°C resolution', desc: 'Infrared sensor tracks baseline shifts for illness early-warning, menstrual cycle prediction, and circadian rhythm optimization. Detects deviations as small as 0.1°C from your personal baseline.' },
  { name: 'Bioimpedance (BIA)', spec: 'Body composition + hydration', desc: 'Passes a safe micro-current through skin to measure impedance. Estimates body fat percentage, lean mass, and hydration index. Tracks long-term trends rather than single-point readings.' },
  { name: 'Barometric Altimeter', spec: '0.5m resolution', desc: 'Automatic floor counting, altitude acclimatization alerts, and storm warning based on rapid pressure drops. Essential for mountaineers, hikers, and high-altitude training.' },
  { name: '6-Axis IMU', spec: '200Hz gyroscope + accelerometer', desc: 'Activity recognition across 40+ sports with machine learning classification. Fall detection with automatic emergency contact. Gesture controls for one-handed operation.' },
];

export default function TechnologyPage() {
  return (
    <>
      <Navigation />

      <HeroSection
        title="Engineering you can wear"
        subtitle="8 clinical sensors. 200 samples per second. One AI engine trained on 2.4 million health profiles. All processing on-device — your data never leaves your wrist."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Technology', href: '/technology' }]}
        image="/generated/sensor-ecg-back.webp"
        imageAlt="Lumivex sensor array"
        cta={[{ label: 'See full specs', href: '/products' }]}
      />

      {/* AI Engine */}
      <FeatureGrid
        title="HealthCore AI Engine"
        subtitle="Trained on 2.4 million anonymized health profiles. Runs entirely on-device — your raw biometric data never leaves your watch without explicit export."
        features={aiFeatures}
        variant="cards"
      />

      {/* Sensor Suite */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-site mx-auto">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted text-center mb-3">Sensor Suite</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center mb-2">Every measurement. Clinical accuracy.</h2>
          <p className="text-text-muted text-lg text-center mb-16 max-w-2xl mx-auto">Eight sensors work in concert. Multi-modal fusion combines ECG, PPG, temperature, and motion data into a unified health picture. All sensors calibrated against gold-standard clinical instruments in FDA-registered trials.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sensors.map((s, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl hover:bg-bg-main transition-colors group">
                <span className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center text-lg shrink-0 mt-0.5">{['💓','❤️','🩸','🫁','🌡️','⚡','🏔️','🔄'][i]}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-outfit font-bold text-text-primary">{s.name}</h3>
                    <span className="text-[10px] font-semibold text-accent bg-accent-light px-1.5 py-0.5 rounded-full">{s.spec}</span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance */}
      <section className="bg-primary py-20 px-6">
        <div className="max-w-site mx-auto">
          <p className="font-outfit text-sm uppercase tracking-widest text-white/60 text-center mb-3">Performance Benchmarks</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-white text-center mb-12">Independent lab-tested. Real-world proven.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { v: '21 Days', l: 'Battery (mixed use)' },
              { v: '50m', l: 'Water depth tested' },
              { v: '−20°C to 60°C', l: 'Operating range' },
              { v: '98.2%', l: 'ECG AFib sensitivity' },
              { v: '±1%', l: 'SpO2 accuracy' },
              { v: '2.5m', l: 'GPS accuracy' },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">{s.v}</div>
                <div className="text-sm text-white/60 mt-1">{s.l}</div>
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

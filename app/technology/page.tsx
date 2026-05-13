import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import CTASection from '@/components/sections/CTASection';
import FloatingContact from '@/components/sections/FloatingContact';
import Link from 'next/link';

const aiFeatures = [
  { icon: '🔍', title: 'Anomaly Detection', desc: 'Flags deviations from your personal baseline — not population averages. Learns your unique rhythm over 72 hours.' },
  { icon: '📊', title: 'Readiness Score', desc: 'Synthesizes sleep quality, HRV, resting heart rate, activity load into a daily 0-100 score.' },
  { icon: '📈', title: 'Trend Forecasting', desc: '7-day projections for recovery windows, peak performance, and illness risk scores.' },
  { icon: '📄', title: 'Doctor Export', desc: 'One-tap PDF report formatted for clinical review. Share directly with your physician.' },
];

const sensors = [
  { name: 'Single-Lead ECG', icon: '💓', spec: 'FDA-cleared, 98.2% sensitivity', desc: 'Dry electrode sensing with spatio-temporal dynamic filtering. Motion artifact cancellation via accelerometer sync. Alerts within 30 seconds of arrhythmia detection.' },
  { name: 'PPG Heart Rate', icon: '❤️', spec: 'Multi-wavelength, ±2 BPM', desc: 'Green, red, infrared LED matrix. Adaptive sampling: 1Hz at rest to 100Hz during activity. Motion-tolerant across all skin tones.' },
  { name: 'Cuffless Blood Pressure', icon: '🩸', spec: 'PTT algorithm, validated n=487', desc: 'Pulse Transit Time via ECG-PPG sync. Clinically validated against arterial line. Monthly cuff calibration for optimal accuracy.' },
  { name: 'Blood Oxygen (SpO2)', icon: '🫁', spec: '70-100%, ±1% accuracy', desc: 'Reflective photoelectric sensor with ambient light suppression. Continuous nighttime monitoring with sleep apnea risk scoring.' },
  { name: 'Skin Temperature', icon: '🌡️', spec: '0.05°C resolution', desc: 'Infrared sensor tracks baseline shifts. Illness early-warning, cycle prediction, circadian optimization.' },
  { name: 'Bioimpedance (BIA)', icon: '⚡', spec: 'Body composition + hydration', desc: 'Safe micro-current measures impedance. Estimates fat%, lean mass, hydration index. Long-term trend tracking.' },
  { name: 'Barometric Altimeter', icon: '🏔️', spec: '0.5m resolution', desc: 'Floor counting, altitude acclimatization alerts, storm warning via rapid pressure drops.' },
  { name: '6-Axis IMU', icon: '🔄', spec: '200Hz gyro + accelerometer', desc: '40+ sport ML classification. Fall detection with emergency contact. One-handed gesture controls.' },
];

export default function TechnologyPage() {
  return (
    <>
      <Navigation />

      {/* Hero with brand background */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FAFAF9 0%, #FFF7ED 50%, #FAFAF9 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(/generated/brand-hero-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="max-w-site mx-auto relative z-10 text-center">
          <nav className="mb-4 text-sm text-text-muted flex gap-2 justify-center"><Link href="/" className="hover:text-accent">Home</Link><span>/</span><span className="text-text-primary">Technology</span></nav>
          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary leading-none tracking-tight">Engineering you can wear</h1>
          <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">8 clinical sensors. 200 samples per second. One AI engine trained on 2.4 million health profiles. All processing on-device — your data never leaves your wrist.</p>
        </div>
      </section>

      {/* AI Engine with dashboard image */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src="/generated/tech-sensor-wafer.webp" alt="Sensor wafer" className="rounded-2xl shadow-card w-full" />
            </div>
            <div className="lg:w-1/2">
              <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-3">HealthCore AI Engine</p>
              <h2 className="font-outfit text-3xl font-bold text-text-primary mb-6">Trained on 2.4 million health profiles. Runs on-device.</h2>
              <div className="space-y-4">
                {aiFeatures.map((f, i) => (
                  <div key={i} className="flex items-start gap-3"><span className="text-2xl shrink-0">{f.icon}</span><div><h3 className="font-outfit font-bold text-text-primary text-sm">{f.title}</h3><p className="text-text-muted text-sm">{f.desc}</p></div></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sensor Suite */}
      <section className="bg-bg-main py-24 px-6">
        <div className="max-w-site mx-auto text-center mb-14">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-3">Sensor Suite</p>
          <h2 className="font-outfit text-3xl font-bold text-text-primary mb-2">Every measurement. Clinical accuracy.</h2>
          <p className="text-text-muted max-w-2xl mx-auto">Multi-modal fusion combines ECG, PPG, temperature, and motion into a unified health picture. All sensors calibrated against gold-standard instruments in FDA-registered trials.</p>
        </div>
        <div className="max-w-site mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {sensors.map((s, i) => (
            <div key={i} className="flex items-start gap-4 bg-white rounded-2xl border border-border-light p-5 hover:shadow-card transition-shadow">
              <span className="w-12 h-12 bg-accent-light rounded-xl flex items-center justify-center text-xl shrink-0">{s.icon}</span>
              <div>
                <div className="flex items-center gap-2 mb-1"><h3 className="font-outfit font-bold text-text-primary text-sm">{s.name}</h3><span className="text-[10px] font-semibold text-accent bg-accent-light px-1.5 py-0.5 rounded-full">{s.spec}</span></div>
                <p className="text-text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Design + Production */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 lg:order-2">
              <img src="/generated/tech-design-concept.webp" alt="Design concept" className="rounded-2xl shadow-card w-full" />
            </div>
            <div className="lg:w-1/2">
              <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-3">Design Philosophy</p>
              <h2 className="font-outfit text-3xl font-bold text-text-primary mb-4">Designed for the human body. Engineered for extremes.</h2>
              <p className="text-text-muted leading-relaxed mb-4">Every Lumivex begins as a single block of Grade 5 titanium, machined to micron-level precision. The sapphire crystal display is lab-grown over 30 days, then diamond-cut to 9H hardness — virtually scratch-proof.</p>
              <p className="text-text-muted leading-relaxed">The sensor array is assembled in a Class 100 clean room. Each PPG LED is individually calibrated. Every ECG electrode is tested across 10,000 simulated heartbeats before leaving the factory.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Production line */}
      <section className="bg-bg-main py-24 px-6">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src="/generated/tech-production-line.webp" alt="Production line" className="rounded-2xl shadow-card w-full" />
            </div>
            <div className="lg:w-1/2">
              <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-3">Precision Manufacturing</p>
              <h2 className="font-outfit text-3xl font-bold text-text-primary mb-4">Built where technology meets craftsmanship.</h2>
              <p className="text-text-muted leading-relaxed mb-4">Robotic micro-placement systems position surface-mount components with 5-micron accuracy. Each watch passes through 47 quality control gates before packaging.</p>
              <ul className="space-y-2 text-text-muted text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" /> Class 100 clean room assembly</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" /> 47 quality control gates per unit</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" /> 10,000-cycle ECG electrode validation</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" /> Individual PPG LED calibration</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" /> 5ATM pressure chamber tested per unit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmarks */}
      <section className="bg-accent py-20 px-6">
        <div className="max-w-site mx-auto text-center">
          <p className="font-outfit text-sm uppercase tracking-widest text-white/60 mb-3">Performance Benchmarks</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-white mb-12">Independent lab-tested. Real-world proven.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[{ v: '21 Days', l: 'Battery' },{ v: '50m', l: 'Water Depth' },{ v: '-20°C to 60°C', l: 'Operating Range' },{ v: '98.2%', l: 'AFib Sensitivity' },{ v: '±1%', l: 'SpO2 Accuracy' },{ v: '2.5m', l: 'GPS Accuracy' }].map((s,i) => (
              <div key={i}><div className="font-outfit text-3xl sm:text-4xl font-extrabold text-white">{s.v}</div><div className="text-sm text-white/60 mt-1">{s.l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Experience the technology firsthand" subtitle="30-day trial. If it does not change how you understand your health, return it." cta={[{ label: 'Shop Lumivex Apex →', href: '/products/lumivex-apex' }]} variant="light" />
      <Footer />
      <FloatingContact label="Ask an Engineer" />
    </>
  );
}

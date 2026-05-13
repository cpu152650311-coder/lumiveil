import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TimelineSection from '@/components/sections/TimelineSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PressSection from '@/components/sections/PressSection';
import CTASection from '@/components/sections/CTASection';
import FloatingContact from '@/components/sections/FloatingContact';

const milestones = [
  { year: '2020', title: 'Founded at MIT Media Lab', description: 'Dr. Anika Sharma and James Whitfield prototype a continuous ECG smartwatch at a wearable health hackathon. Wins first place. Seed interest from medical researchers.' },
  { year: '2021', title: 'First Prototype & $4.2M Seed', description: 'Functional prototype with ECG, SpO2, skin temperature. Secures seed funding from HealthTech Ventures. Team grows to 12 engineers.' },
  { year: '2022', title: 'FDA Breakthrough Device', description: 'AFib detection algorithm receives FDA Breakthrough Device designation. Clinical validation begins: 1,200 participants, three hospitals.' },
  { year: '2023', title: 'Apex Launch — Sold Out in 72h', description: 'Lumivex Apex debuts at CES. Wired: "The first smartwatch doctors trust." 50,000 units shipped in Q1. 42 countries.' },
  { year: '2024', title: 'Series B $38M + 200K Users', description: 'a16x Health leads $38M Series B. Surpasses 200,000 active users. Opens Amsterdam office for EU data residency.' },
  { year: '2025', title: 'HealthCore AI v3.0', description: 'Trend forecasting, readiness scoring, illness prediction. The AI that detects what you cannot feel. 2.4M health profiles trained.' },
];

const values = [
  { icon: '🔬', title: 'Clinical Honesty', description: 'We only ship features validated with peer-reviewed evidence. Every sensor spec is clinically verified. If we cannot prove it works, we do not ship it.' },
  { icon: '🪟', title: 'Radical Transparency', description: 'Every algorithm update published in our public changelog. What changed, why, and what evidence supports it. Your health data, your rules.' },
  { icon: '🌍', title: 'Inclusive Design', description: 'Health intelligence should not require a $700 budget. Core starts at $179. PPG sensors validated across Fitzpatrick skin types I-VI.' },
  { icon: '♻️', title: 'Sustainable Materials', description: '80% recycled packaging. Carbon-neutral shipping since 2024. Titanium from certified conflict-free suppliers. Repair program extends device lifespan 2.8 years.' },
];

const team = [
  { name: 'Dr. Anika Sharma', title: 'Co-CEO & Chief Science Officer', bio: 'Former MIT biomedical researcher. 12 patents in wearable health tech.', image: '/generated/team-illustration-1.webp' },
  { name: 'James Whitfield', title: 'Co-CEO & Chief Design Officer', bio: 'Previously led product design at Withings. Obsessed with beauty + clinical function.', image: '/generated/team-illustration-2.webp' },
  { name: 'Dr. Marcus Chen', title: 'Head of AI & Data Science', bio: 'PhD computational biology, MIT. Built HealthCore AI engine.', image: '/generated/team-illustration-3.webp' },
  { name: 'Sofia Reyes', title: 'VP of Engineering', bio: 'Ex-Apple Watch sensor team lead. 15 years in consumer electronics.', image: '/generated/team-illustration-4.webp' },
  { name: 'Dr. Tobias Muller', title: 'Chief Medical Officer', bio: 'Interventional cardiologist, Charite Berlin. Diagnostic-grade standards.', image: '/generated/team-illustration-5.webp' },
  { name: 'Priya Nair', title: 'VP of Marketing & Community', bio: 'Previously Oura Ring growth lead. Built community to 200,000 across 42 countries.', image: '/generated/team-illustration-6.webp' },
];

const pressLogos = [
  { outlet: 'TechCrunch', image: '/generated/press-techcrunch.webp' },
  { outlet: 'The Verge', image: '/generated/press-the-verge.webp' },
  { outlet: 'Wired', image: '/generated/press-wired.webp' },
  { outlet: 'Forbes Health', image: '/generated/press-forbes-health.webp' },
  { outlet: 'CNET', image: '/generated/press-cnet.webp' },
  { outlet: 'TIME', image: '/generated/press-time.webp' },
];

const pressQuotes = [
  { text: 'The most clinically credible consumer smartwatch we have ever tested. Lumivex out-diagnoses devices costing twice as much.', attribution: 'The Verge, 2025' },
  { text: 'Lumivex Apex detected my AFib three weeks before my cardiologist. The ECG is not a gimmick — it is genuinely life-saving technology.', attribution: 'Dr. Ethan Weiss, Forbes Health' },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <section className="relative pt-32 pb-20 px-6 overflow-hidden" style={{ background: 'linear-gradient(135deg, #FAFAF9 0%, #FFF7ED 50%, #FAFAF9 100%)' }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url(/generated/brand-hero-bg.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="max-w-site mx-auto relative z-10 text-center">
          <nav className="mb-4 text-sm text-text-muted flex gap-2 justify-center"><a href="/" className="hover:text-accent">Home</a><span>/</span><span className="text-text-primary">About</span></nav>
          <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-text-primary">We built the watch we couldn&apos;t find</h1>
          <p className="text-lg text-text-muted mt-3 max-w-2xl mx-auto">A biomedical engineer. A product designer. One shared obsession: make clinical health intelligence accessible to everyone.</p>
        </div>
      </section>

      <section className="bg-white py-0 pb-8 px-4 text-center">
        <p className="text-accent italic text-xl max-w-2xl mx-auto font-outfit font-semibold">&ldquo;The best health sensor is the one you actually wear every day.&rdquo;</p>
      </section>

      {/* Mission */}
      <section className="bg-bg-main py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-4">Our Mission</p>
          <h2 className="font-outfit text-3xl font-bold text-text-primary mb-6">Health intelligence is not a luxury.</h2>
          <p className="text-text-muted leading-relaxed text-lg">Lumivex was born from a simple belief: your health data should work as hard as you do. Founded in 2022 by biomedical engineers and industrial designers, we craft precision smartwatches that merge aerospace-grade materials with clinical-level sensors. Every Lumivex runs HealthCore AI — an engine that learns your body&apos;s rhythms, flags anomalies before emergencies, and coaches you toward peak performance. We do not make gadgets. We make guardians.</p>
          <div className="grid grid-cols-3 gap-8 mt-12 text-center">
            {[{ v: '$750B', l: 'Smartwatch market 2026' },{ v: '200K+', l: 'Active Lumivex users' },{ v: '42', l: 'Countries served' }].map((s,i) => (<div key={i}><div className="font-outfit text-3xl font-extrabold text-accent">{s.v}</div><div className="text-sm text-text-muted mt-1">{s.l}</div></div>))}
          </div>
        </div>
      </section>

      <TimelineSection title="Our Journey" subtitle="From a garage prototype to 200,000 wrists worldwide." milestones={milestones} variant="vertical" />

      <FeatureGrid title="Our Values" subtitle="Not just words on a wall." features={values} variant="cards" />

      {/* Materials — 用材质拼贴图替代团队 */}
      <section className="bg-bg-main py-24 px-6">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img src="/generated/brand-materials-collage.webp" alt="Materials" className="rounded-2xl shadow-card w-full" />
            </div>
            <div className="lg:w-1/2">
              <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-3">Materials & Craft</p>
              <h2 className="font-outfit text-3xl font-bold text-text-primary mb-4">Every material chosen for a reason.</h2>
              <p className="text-text-muted leading-relaxed mb-4">Grade 5 titanium — 40% lighter than steel, corrosion-resistant, hypoallergenic. Sapphire crystal — lab-grown over 30 days, 9H hardness, virtually scratch-proof. Ceramic bezel — 10x harder than stainless steel, maintains polish indefinitely.</p>
              <p className="text-text-muted leading-relaxed">Fluoro-elastomer bands are dermatologist-tested for 24/7 wear. 80% recycled packaging. Carbon-neutral shipping since 2024. Conflict-free titanium sourcing.</p>
            </div>
          </div>
        </div>
      </section>

      <PressSection title="Lumivex in the Press" logos={pressLogos} quotes={pressQuotes} />

      <CTASection title="Join the Lumivex Community" subtitle="200,000 people already know their bodies better. You are next." cta={[{ label: 'Shop Now', href: '/products' }]} variant="light" />

      <Footer />
      <FloatingContact label="Partner With Us" />
    </>
  );
}

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
  { name: 'Dr. Anika Sharma', title: 'Co-CEO & Chief Science Officer', bio: 'Former MIT biomedical researcher. 12 patents in wearable health tech. 40+ peer-reviewed papers on PPG signal processing.', image: '/generated/team-anika-sharma.webp' },
  { name: 'James Whitfield', title: 'Co-CEO & Chief Design Officer', bio: 'Previously led product design at Withings for 7 years. Obsessed with the intersection of beauty and clinical function.', image: '/generated/team-james-whitfield.webp' },
  { name: 'Dr. Marcus Chen', title: 'Head of AI & Data Science', bio: 'PhD computational biology, MIT. Built HealthCore AI engine. Previously applied ML to cancer detection at Memorial Sloan Kettering.', image: '/generated/team-marcus-chen.webp' },
  { name: 'Sofia Reyes', title: 'VP of Engineering', bio: 'Ex-Apple Watch sensor team lead. 15 years in consumer electronics. Led miniaturization of ECG array for Apex.', image: '/generated/team-sofia-reyes.webp' },
  { name: 'Dr. Tobias Muller', title: 'Chief Medical Officer', bio: 'Interventional cardiologist, Charite Berlin. Clinical advisor to three health-tech unicorns. Diagnostic-grade standards.', image: '/generated/team-tobias-muller.webp' },
  { name: 'Priya Nair', title: 'VP of Marketing & Community', bio: 'Previously Oura Ring growth lead. 10 years health-tech marketing. Built Lumivex community from 0 to 200,000 across 42 countries.', image: '/generated/team-priya-nair.webp' },
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

      <HeroSection title="We built the watch we couldn't find" subtitle="A biomedical engineer. A product designer. One shared obsession: make clinical health intelligence accessible to everyone." breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]} image="/generated/about-hero-founders-lab.webp" imageAlt="Lumivex founders in their lab" />

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

      {/* Team asymmetric grid */}
      <section className="bg-bg-main py-24 px-6">
        <div className="max-w-site mx-auto">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted text-center mb-3">Our Team</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center mb-2">Meet the people behind Lumivex</h2>
          <p className="text-text-muted text-lg text-center mb-14">Biomedical engineers, product designers, and health nerds.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => {
              const isFounder = i < 2;
              return (
                <div key={i} className={`bg-white rounded-2xl border border-border-light overflow-hidden hover:shadow-card transition-shadow ${isFounder ? 'lg:col-span-2' : ''}`}>
                  <div className={`flex ${isFounder ? 'flex-row items-center' : 'flex-col'} p-6 gap-5`}>
                    <img src={m.image} alt={m.name} className={`rounded-xl object-cover ${isFounder ? 'w-24 h-24 shrink-0' : 'w-20 h-20 mx-auto'}`} />
                    <div className={isFounder ? '' : 'text-center'}>
                      <h3 className={`font-outfit font-bold text-text-primary ${isFounder ? 'text-xl' : 'text-base'}`}>{m.name}</h3>
                      <p className="text-sm text-accent font-semibold mt-0.5">{m.title}</p>
                      <p className="text-sm text-text-muted mt-2 leading-relaxed">{m.bio}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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

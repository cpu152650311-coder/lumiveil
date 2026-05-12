import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import TimelineSection from '@/components/sections/TimelineSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import PressSection from '@/components/sections/PressSection';
import CTASection from '@/components/sections/CTASection';
import FloatingContact from '@/components/sections/FloatingContact';

const timelineMilestones = [
  { year: '2020', title: 'Founding at MIT Media Lab', description: 'Co-founders Dr. Anika Sharma and James Whitfield meet during a wearable health hackathon. They prototype a continuous ECG smartwatch that wins first place and seed interest from medical researchers.' },
  { year: '2021', title: 'First Prototype & Seed Funding', description: 'First functional prototype with continuous ECG, SpO2, and skin temperature. Secured $4.2M seed funding from HealthTech Ventures and MIT-affiliated angels. Team grows to 12 engineers.' },
  { year: '2022', title: 'FDA Breakthrough Device Designation', description: 'AFib detection algorithm receives FDA Breakthrough Device designation, fast-tracking regulatory review. Clinical validation study begins with 1,200 participants across three hospitals.' },
  { year: '2023', title: 'Lumivex Apex Launch', description: 'Lumivex Apex launches at CES 2023 to critical acclaim. Sells out in 72 hours. Wired calls it "the first smartwatch that doctors trust." 50,000 units shipped in the first quarter.' },
  { year: '2024', title: 'Series B & Global Expansion', description: '$38M Series B led by a16x Health. Expands to 42 countries with localized health insights. Launches Pulse and Core models, bringing clinical health intelligence to broader price points.' },
  { year: '2025', title: 'HealthCore AI v3.0 & 200K Users', description: 'HealthCore AI v3.0 launches with trend forecasting and readiness scoring. Surpasses 200,000 active users. Opens Amsterdam office for EU operations and data residency compliance.' },
];

const values = [
  {
    icon: '🔬',
    title: 'Clinical Honesty',
    description: 'We only ship features validated with peer-reviewed evidence. Every sensor spec is clinically verified. No marketing fluff — if we cannot prove it works, we don\'t ship it.',
  },
  {
    icon: '🪟',
    title: 'Radical Transparency',
    description: 'Every algorithm update is published in our public changelog. We explain what changed, why, and what clinical evidence supports the change. Your health data, your rules.',
  },
  {
    icon: '🌍',
    title: 'Inclusive Design',
    description: 'Health intelligence should not require a $700 budget. Our Core model starts at $179. We design for all ages, abilities, and skin tones — our PPG sensors are validated across Fitzpatrick skin types I-VI.',
  },
  {
    icon: '♻️',
    title: 'Sustainable Materials',
    description: '80% recycled packaging, carbon-neutral shipping since 2024. Titanium sourced from certified conflict-free suppliers. Repair program extends device lifespan by an average of 2.8 years.',
  },
];

const teamMembers = [
  { name: 'Dr. Anika Sharma', title: 'Co-CEO & Chief Science Officer', bio: 'Former MIT biomedical researcher. 12 patents in wearable health tech. Published 40+ peer-reviewed papers on PPG signal processing.', image: '/generated/team-anika-sharma.webp' },
  { name: 'James Whitfield', title: 'Co-CEO & Chief Design Officer', bio: 'Previously led product design at Withings for 7 years. Industrial designer by training. Obsessed with the intersection of beauty and clinical function.', image: '/generated/team-james-whitfield.webp' },
  { name: 'Dr. Marcus Chen', title: 'Head of AI & Data Science', bio: 'PhD in computational biology from MIT. Built the HealthCore AI engine. Previously applied ML to cancer detection at Memorial Sloan Kettering.', image: '/generated/team-marcus-chen.webp' },
  { name: 'Sofia Reyes', title: 'VP of Engineering', bio: 'Ex-Apple Watch sensor team lead. 15 years in consumer electronics. Led the engineering team that miniaturized the ECG array for the Apex.', image: '/generated/team-sofia-reyes.webp' },
  { name: 'Dr. Tobias Müller', title: 'Chief Medical Officer', bio: 'Interventional cardiologist, Charité Berlin. Clinical advisor to three health-tech unicorns. Ensures every sensor meets diagnostic-grade standards.', image: '/generated/team-tobias-muller.webp' },
  { name: 'Priya Nair', title: 'VP of Marketing & Community', bio: 'Previously Oura Ring growth lead. 10 years in health-tech marketing. Built the Lumivex community from 0 to 200,000 members across 42 countries.', image: '/generated/team-priya-nair.webp' },
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
  { text: 'The most clinically credible consumer smartwatch we\'ve ever tested. Lumivex out-diagnoses devices costing twice as much.', attribution: 'The Verge, June 2025' },
  { text: 'Lumivex Apex detected my AFib three weeks before my cardiologist. The ECG is not a gimmick — it is genuinely life-saving technology.', attribution: 'Dr. Ethan Weiss, Forbes Health' },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <HeroSection
        title="We Built the Watch We Couldn't Find"
        subtitle="A biomedical engineer. A product designer. One shared obsession with human health."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }]}
        image="/generated/about-hero-founders-lab.webp"
        imageAlt="Lumivex founders in their lab"
      />

      <section className="bg-white py-0 pb-8 px-4 text-center">
        <p className="text-accent italic text-xl max-w-2xl mx-auto font-outfit font-semibold">
          &ldquo;The best health sensor is the one you actually wear every day.&rdquo;
        </p>
      </section>

      <TimelineSection
        title="Our Journey"
        subtitle="From a garage prototype to 200,000 wrists worldwide."
        milestones={timelineMilestones}
        variant="vertical"
      />

      <FeatureGrid
        title="Our Values"
        subtitle="Not just words on a wall."
        features={values}
        variant="cards"
      />

      {/* Team — 不对称网格：创始人大卡 + 其他人小卡 */}
      <section className="bg-bg-main py-24 px-6">
        <div className="max-w-site mx-auto">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted text-center mb-3">Our Team</p>
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center mb-2">Meet the people behind Lumivex</h2>
          <p className="text-text-muted text-lg text-center mb-14">Biomedical engineers, product designers, and health nerds.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => {
              const isFounder = i < 2;
              return (
                <div
                  key={i}
                  className={`bg-white rounded-2xl border border-border-light overflow-hidden hover:shadow-card transition-shadow ${
                    isFounder ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className={`flex ${isFounder ? 'flex-row items-center' : 'flex-col'} p-6 gap-5`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`rounded-xl object-cover ${isFounder ? 'w-24 h-24 shrink-0' : 'w-20 h-20 mx-auto'}`}
                    />
                    <div className={isFounder ? '' : 'text-center'}>
                      <h3 className={`font-outfit font-bold text-text-primary ${isFounder ? 'text-xl' : 'text-base'}`}>{member.name}</h3>
                      <p className="text-sm text-accent font-semibold mt-0.5">{member.title}</p>
                      <p className="text-sm text-text-muted mt-2 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PressSection
        title="Lumivex in the Press"
        logos={pressLogos}
        quotes={pressQuotes}
      />

      <CTASection
        title="Join the Lumivex Community"
        subtitle="200,000 people already know their bodies better. You're next."
        cta={[
          { label: 'Shop Now', href: '/products' },
        ]}
        variant="light"
      />

      <Footer />
      <FloatingContact label="Partner With Us" />
    </>
  );
}

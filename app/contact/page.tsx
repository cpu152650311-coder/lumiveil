'use client';

import { useState, FormEvent } from 'react';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FAQSection from '@/components/sections/FAQSection';
import FloatingContact from '@/components/sections/FloatingContact';

const faqItems = [
  { question: 'How do I set up my Lumivex for the first time?', answer: 'Download the Lumivex app from the App Store or Google Play. Turn on your watch by holding the side button for 3 seconds. Open the app, create an account, and follow the pairing instructions. The process takes about 3 minutes. Make sure Bluetooth is enabled on your phone.' },
  { question: 'My watch isn\'t syncing — what should I do?', answer: 'First, ensure Bluetooth is enabled and your watch is within range (10 meters). Open the Lumivex app and pull down to force sync. If that doesn\'t work, restart both your watch (hold side button 10 seconds) and phone. If syncing still fails after restart, check that your app is updated to the latest version in the app store.' },
  { question: 'How do I return or exchange my order?', answer: 'Returns are free within 30 days of delivery. Visit lumivex.com/returns, enter your order number and email, and you\'ll receive a prepaid return label instantly. Exchanges for a different model or color are also free — we ship your replacement as soon as the return is scanned by the carrier.' },
  { question: 'Is my health data stored securely?', answer: 'Yes. All health data is encrypted at rest (AES-256) and in transit (TLS 1.3). HealthCore AI processing runs entirely on-device — raw biometric data never leaves your watch. When you choose to export data to your doctor, you control exactly what is shared and can revoke access at any time. Lumivex is GDPR and HIPAA compliant.' },
  { question: 'How do I update the firmware?', answer: 'Firmware updates are delivered through the Lumivex app. When a new update is available, you\'ll receive a notification. Ensure your watch has at least 30% battery and is connected to Wi-Fi or Bluetooth. Updates typically take 5-10 minutes. Your health data is preserved across updates.' },
  { question: 'Can I use Lumivex without a smartphone?', answer: 'Initial setup requires a smartphone (iOS 16+ or Android 12+). After setup, the watch can operate independently for up to 7 days — tracking health metrics, displaying time, and storing data. However, firmware updates, data export, and detailed health reports require the companion app.' },
  { question: 'What does the AI coaching subscription include?', answer: 'HealthCore AI coaching ($9.99/month or $89.99/year) includes: daily readiness scores, 7-day trend forecasting, personalized recovery recommendations, sleep optimization insights, anomaly alerts with context, and doctor-exportable PDF reports. One year free with Apex models, six months with Pulse.' },
  { question: 'How do I export my health data to my doctor?', answer: 'Open the Lumivex app, go to Health Data → Export → Clinical Report. Select the date range and metrics to include. The app generates a professional PDF with ECG strips, blood pressure trends, SpO2 patterns, and sleep summaries formatted for clinical review. Share via email, AirDrop, or print directly.' },
  { question: 'Is Lumivex compatible with Apple Health and Google Fit?', answer: 'Yes. Lumivex syncs bi-directionally with Apple Health and Google Health Connect. You can also connect to Strava, MyFitnessPal, and TrainingPeaks. All integrations are opt-in — you choose exactly which data to share with each service.' },
  { question: 'My band is causing skin irritation — what should I do?', answer: 'Our fluoro-elastomer bands are dermatologist-tested and hypoallergenic, but individual sensitivities vary. We recommend: (1) Clean the band with mild soap and water weekly, (2) Wear the watch slightly looser during sleep, (3) Switch wrists occasionally. If irritation persists, contact support for a free replacement band in an alternative material (woven nylon or leather).' },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', orderNumber: '', topic: 'General', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navigation />

      <HeroSection
        title="We're Here to Help"
        subtitle="Real humans. Average response time: under 2 hours."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }]}
        compact
      >
        <div className="flex flex-wrap gap-3 mt-6">
          <span className="inline-flex items-center gap-2 bg-accent text-white font-outfit font-semibold text-sm px-4 py-2.5 rounded-card">
            <span className="w-2 h-2 bg-green-300 rounded-full" /> Live Chat — Online Now
          </span>
          <span className="inline-flex items-center gap-2 border-2 border-border-light text-text-primary font-outfit font-semibold text-sm px-4 py-2.5 rounded-card">
            📧 Email — hello@lumivex.com
          </span>
          <span className="inline-flex items-center gap-2 border-2 border-border-light text-text-primary font-outfit font-semibold text-sm px-4 py-2.5 rounded-card">
            📞 Phone — Mon-Fri 9am-6pm EST
          </span>
        </div>
      </HeroSection>

      <section className="bg-white py-16 px-4">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-3/5">
              <h2 className="font-outfit text-2xl font-bold text-text-primary mb-2">Send Us a Message</h2>
              <p className="text-text-muted mb-6">We respond within 2 hours during business hours.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-card p-8 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="font-outfit text-xl font-bold text-green-800">Message Sent!</h3>
                  <p className="text-green-700 mt-2">We typically respond within 2 hours. Check your email for a confirmation.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">Name *</label>
                      <input id="name" type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} className="w-full px-4 py-3 rounded-card border border-border-light focus:border-accent focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">Email *</label>
                      <input id="email" type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} className="w-full px-4 py-3 rounded-card border border-border-light focus:border-accent focus:outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="order" className="block text-sm font-medium text-text-primary mb-1">Order Number (optional)</label>
                      <input id="order" type="text" value={formState.orderNumber} onChange={(e) => setFormState({ ...formState, orderNumber: e.target.value })} className="w-full px-4 py-3 rounded-card border border-border-light focus:border-accent focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="topic" className="block text-sm font-medium text-text-primary mb-1">Topic</label>
                      <select id="topic" value={formState.topic} onChange={(e) => setFormState({ ...formState, topic: e.target.value })} className="w-full px-4 py-3 rounded-card border border-border-light focus:border-accent focus:outline-none transition-colors bg-white">
                        {['Order Status', 'Technical Support', 'Returns', 'Partnership', 'Press', 'General'].map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">Message *</label>
                    <textarea id="message" rows={5} required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} className="w-full px-4 py-3 rounded-card border border-border-light focus:border-accent focus:outline-none transition-colors resize-y" />
                  </div>
                  <button type="submit" className="btn-accent">Send Message</button>
                </form>
              )}
            </div>

            <aside className="lg:w-2/5 space-y-4">
              {[
                { icon: '💬', title: 'Live Chat', status: 'Online', desc: 'Fastest option for quick questions.', btn: 'Start Chat', accent: true },
                { icon: '📧', title: 'Email Support', status: '< 2 hrs', desc: 'hello@lumivex.com', btn: 'Copy Email', accent: false },
                { icon: '📞', title: 'Phone Support', status: '9am-6pm EST', desc: '+1 (855) LUMIVEX', btn: 'Call Now', accent: false },
                { icon: '👥', title: 'Community Forum', status: '31K members', desc: 'Get help from fellow Lumivex users.', btn: 'Visit Forum →', accent: false },
              ].map((card, i) => (
                <div key={i} className="bg-bg-main rounded-card border border-border-light shadow-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{card.icon}</span>
                    <div>
                      <h3 className="font-outfit font-bold text-text-primary">{card.title}</h3>
                      <span className="text-xs text-accent font-semibold">{card.status}</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-muted mb-3">{card.desc}</p>
                  <button className={card.accent ? 'btn-accent text-sm px-4 py-2' : 'btn-outline text-sm px-4 py-2'}>{card.btn}</button>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <FAQSection
        title="Quick Answers"
        subtitle="Most questions are answered here."
        questions={faqItems}
      />

      <section className="bg-white py-16 px-4">
        <div className="max-w-site mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-bg-main rounded-card border border-border-light shadow-card p-6 text-center">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="font-outfit font-bold text-text-primary mb-2">Business & Partnerships</h3>
              <p className="text-sm text-text-muted mb-3">Wholesale, B2B health programs, and corporate wellness partnerships.</p>
              <a href="mailto:partnerships@lumivex.com" className="text-accent font-semibold text-sm hover:opacity-80">Contact Partnerships →</a>
            </div>
            <div className="bg-bg-main rounded-card border border-border-light shadow-card p-6 text-center">
              <div className="text-3xl mb-3">📰</div>
              <h3 className="font-outfit font-bold text-text-primary mb-2">Press & Media</h3>
              <p className="text-sm text-text-muted mb-3">Press kits, interview requests, product loans for review.</p>
              <a href="mailto:press@lumivex.com" className="text-accent font-semibold text-sm hover:opacity-80">Contact Press →</a>
            </div>
            <div className="bg-bg-main rounded-card border border-border-light shadow-card p-6 text-center">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="font-outfit font-bold text-text-primary mb-2">Careers</h3>
              <p className="text-sm text-text-muted mb-3">Join a team building the future of health wearables. 12 open roles.</p>
              <span className="text-text-muted text-sm">12 open roles — careers page coming soon</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact label="Chat With Us" />
    </>
  );
}

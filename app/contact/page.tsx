'use client';

import { useState, FormEvent } from 'react';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import FAQSection from '@/components/sections/FAQSection';
import FloatingContact from '@/components/sections/FloatingContact';

const faqItems = [
  { question: 'How do I set up my Lumivex for the first time?', answer: 'Download the Lumivex app from the App Store or Google Play. Turn on your watch by holding the side button for 3 seconds. Open the app, create an account, and follow the pairing instructions. The process takes about 3 minutes. Make sure Bluetooth is enabled on your phone.' },
  { question: 'My watch isn\'t syncing — what should I do?', answer: 'First, ensure Bluetooth is enabled and your watch is within range (10 meters). Open the Lumivex app and pull down to force sync. If that doesn\'t work, restart both your watch (hold side button 10 seconds) and phone. If syncing still fails after restart, check that your app is updated.' },
  { question: 'How do I return or exchange my order?', answer: 'Returns are free within 30 days of delivery. Visit lumivex.com/returns, enter your order number and email, and you\'ll receive a prepaid return label instantly. Exchanges for a different model or color are also free — we ship your replacement as soon as the return is scanned by the carrier.' },
  { question: 'Is my health data stored securely?', answer: 'Yes. All health data is encrypted at rest (AES-256) and in transit (TLS 1.3). HealthCore AI processing runs entirely on-device — raw biometric data never leaves your watch. Lumivex is GDPR and HIPAA compliant.' },
  { question: 'How do I update the firmware?', answer: 'Firmware updates are delivered through the Lumivex app. When a new update is available, you\'ll receive a notification. Ensure your watch has at least 30% battery. Updates typically take 5-10 minutes. Your health data is preserved across updates.' },
  { question: 'Can I use Lumivex without a smartphone?', answer: 'Initial setup requires a smartphone (iOS 16+ or Android 12+). After setup, the watch can operate independently for up to 7 days — tracking health metrics, displaying time, and storing data.' },
  { question: 'What does the AI coaching subscription include?', answer: 'HealthCore AI coaching ($9.99/month or $89.99/year) includes: daily readiness scores, 7-day trend forecasting, personalized recovery recommendations, sleep optimization insights, anomaly alerts with context, and doctor-exportable PDF reports. One year free with Apex models, six months with Pulse.' },
  { question: 'How do I export my health data to my doctor?', answer: 'Open the Lumivex app, go to Health Data → Export → Clinical Report. Select the date range and metrics to include. The app generates a professional PDF formatted for clinical review. Share via email, AirDrop, or print directly.' },
  { question: 'Is Lumivex compatible with Apple Health and Google Fit?', answer: 'Yes. Lumivex syncs bi-directionally with Apple Health and Google Health Connect. You can also connect to Strava, MyFitnessPal, and TrainingPeaks. All integrations are opt-in.' },
  { question: 'My band is causing skin irritation — what should I do?', answer: 'Clean the band with mild soap and water weekly. Wear the watch slightly looser during sleep. Switch wrists occasionally. If irritation persists, contact support for a free replacement band in an alternative material.' },
];

const channelCards = [
  { icon: '💬', title: 'Live Chat', subtitle: 'Online now', desc: 'Fastest option for quick questions.', btn: 'Start Chat', color: 'bg-green-50 border-green-200', dot: 'bg-green-500' },
  { icon: '📧', title: 'Email Us', subtitle: '< 2 hour response', desc: 'hello@lumivex.com', btn: 'Copy Email', color: 'bg-primary-light border-primary/20', dot: 'bg-primary' },
  { icon: '📞', title: 'Call Us', subtitle: 'Mon–Fri, 9am–6pm EST', desc: '+1 (855) LUMIVEX', btn: 'Call Now', color: 'bg-bg-main border-border-light', dot: 'bg-text-muted' },
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

      {/* Hero */}
      <section className="pt-32 pb-12 px-4 bg-bg-main">
        <div className="max-w-site mx-auto text-center">
          <nav className="mb-4 text-sm text-text-muted flex gap-2 justify-center">
            <a href="/" className="hover:text-primary transition-colors">Home</a><span>/</span><span className="text-text-primary">Contact</span>
          </nav>
          <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-text-primary tracking-tight">
            We&apos;re here to help
          </h1>
          <p className="text-lg text-text-muted mt-3 max-w-xl mx-auto">
            Real humans. Average response time under 2 hours.
          </p>

          {/* Channel Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-3xl mx-auto">
            {channelCards.map((card, i) => (
              <div key={i} className={`rounded-2xl border p-5 ${card.color} text-center hover:shadow-card transition-shadow`}>
                <span className="text-3xl block mb-2">{card.icon}</span>
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className={`w-2 h-2 ${card.dot} rounded-full`} />
                  <span className="text-xs font-semibold text-text-muted">{card.subtitle}</span>
                </div>
                <h3 className="font-outfit font-bold text-text-primary">{card.title}</h3>
                <p className="text-xs text-text-muted mt-1 mb-3">{card.desc}</p>
                <button className="btn-accent text-xs px-4 py-2 w-full">{card.btn}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form + Support Info */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Form — Left 60% */}
            <div className="lg:w-3/5">
              <h2 className="font-outfit text-2xl font-bold text-text-primary mb-1">Send us a message</h2>
              <p className="text-text-muted text-sm mb-6">We respond within 2 hours during business hours.</p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-outfit text-2xl font-bold text-green-800 mb-2">Message Sent</h3>
                  <p className="text-green-700">We typically respond within 2 hours. Check your email for a confirmation.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline mt-6 text-sm">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1">Name *</label>
                      <input id="name" name="name" type="text" required value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">Email *</label>
                      <input id="email" name="email" type="email" required value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="order" className="block text-sm font-medium text-text-primary mb-1">Order Number (optional)</label>
                      <input id="order" name="orderNumber" type="text" value={formState.orderNumber} onChange={(e) => setFormState({ ...formState, orderNumber: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all" placeholder="LUM-XXXXX" />
                    </div>
                    <div>
                      <label htmlFor="topic" className="block text-sm font-medium text-text-primary mb-1">Topic</label>
                      <select id="topic" name="topic" value={formState.topic} onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all bg-white">
                        {['General Inquiry', 'Order Status', 'Technical Support', 'Returns & Exchanges', 'Partnership', 'Press & Media'].map((t) => (<option key={t}>{t}</option>))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1">Message *</label>
                    <textarea id="message" name="message" rows={5} required value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all resize-y" placeholder="Tell us how we can help..." />
                  </div>
                  <button type="submit" className="btn-accent text-base px-8 py-3.5">Send Message</button>
                </form>
              )}
            </div>

            {/* Support Sidebar — Right 40% */}
            <div className="lg:w-2/5 space-y-5">
              {[
                { icon: '💬', title: 'Live Chat', status: 'Online now', desc: 'Fastest way to get help', action: 'Start Chat', accent: true },
                { icon: '📧', title: 'Email Support', status: 'Average < 2 hours', desc: 'hello@lumivex.com', action: 'Copy', accent: false },
                { icon: '📞', title: 'Phone Support', status: 'Mon–Fri 9am–6pm EST', desc: '+1 (855) 586-4839', action: 'Call', accent: false },
                { icon: '🌐', title: 'Community Forum', status: '31,000+ members', desc: 'Ask the Lumivex community', action: 'Visit Forum →', accent: false },
              ].map((item, i) => (
                <div key={i} className="bg-bg-main rounded-xl border border-border-light p-5 flex items-center gap-4 hover:shadow-card transition-shadow">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <h4 className="font-outfit font-bold text-text-primary text-sm">{item.title}</h4>
                      <span className="text-[10px] text-primary font-semibold">{item.status}</span>
                    </div>
                    <p className="text-xs text-text-muted truncate">{item.desc}</p>
                  </div>
                  <button className={item.accent ? 'btn-accent text-xs px-3 py-1.5 shrink-0' : 'btn-outline text-xs px-3 py-1.5 shrink-0'}>{item.action}</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="Quick Answers"
        subtitle="Most questions are answered here."
        questions={faqItems}
      />

      <Footer />
      <FloatingContact label="Chat With Us" />
    </>
  );
}

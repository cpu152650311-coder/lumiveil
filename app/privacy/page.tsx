import type { Metadata } from 'next';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Lumivex',
  description: 'How Lumivex collects, uses, and protects your personal data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />

      <section className="relative pt-32 pb-20 px-6" style={{ background: 'linear-gradient(135deg, #FAFAF9 0%, #FFF7ED 50%, #FAFAF9 100%)' }}>
        <div className="max-w-site mx-auto text-center">
          <nav className="mb-4 text-sm text-text-muted flex gap-2 justify-center">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span><span className="text-text-primary">Privacy Policy</span>
          </nav>
          <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-text-primary">Privacy Policy</h1>
          <p className="text-text-muted mt-3">Last updated: July 1, 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-sm text-text-muted leading-relaxed space-y-8">

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">1. Information We Collect</h2>
            <p>When you use Lumivex, we collect information you provide directly — such as your name, email address, and shipping details when you place an order or contact us. We also collect device information including your IP address, browser type, and pages visited to improve our service.</p>
            <p className="mt-2">Health data collected by your Lumivex watch (heart rate, ECG, SpO2, sleep metrics, activity) is processed <strong>entirely on-device</strong> by the HealthCore AI engine. Raw biometric data never leaves your watch unless you explicitly export it for sharing with a healthcare provider.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Process orders, payments, and returns</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send order confirmations, shipping updates, and warranty information</li>
              <li>Improve our website and product experience</li>
              <li>Send promotional emails (only with your consent; you can unsubscribe anytime)</li>
            </ul>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your data. All data in transit is encrypted using TLS 1.3. Data at rest is encrypted using AES-256. We conduct regular security audits and penetration testing. Access to personal data is restricted to authorized personnel only.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">4. Data Sharing</h2>
            <p>We do <strong>not</strong> sell your personal data. We may share your information with:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Payment processors (Stripe, PayPal) to complete your transactions</li>
              <li>Shipping carriers (FedEx, DHL, UPS) to deliver your orders</li>
              <li>Cloud infrastructure providers (for website hosting and email)</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">5. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. You can request a copy of your data or ask us to delete it by emailing <a href="mailto:privacy@lumivex.com" className="text-primary hover:underline">privacy@lumivex.com</a>. We will respond within 30 days. You may also opt out of marketing communications at any time.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">6. Cookies</h2>
            <p>We use essential cookies for site functionality and optional analytics cookies to understand how visitors use our website. See our <Link href="/cookies" className="text-primary hover:underline">Cookies Policy</Link> for details.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">7. Children&apos;s Privacy</h2>
            <p>The Lumivex Pulse Kids watch is designed for children aged 6–14 with parental controls. We collect minimal data from children&apos;s devices and require parental consent. Parents can access and manage their child&apos;s data through the parental dashboard. We do not knowingly collect data from children under 6.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">8. Contact Us</h2>
            <p>For privacy-related inquiries, contact us at <a href="mailto:privacy@lumivex.com" className="text-primary hover:underline">privacy@lumivex.com</a> or write to:</p>
            <p className="mt-1">Lumivex Inc.<br />Attn: Privacy Officer<br />1209 Orange Street, Wilmington, DE 19801</p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

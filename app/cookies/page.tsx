import type { Metadata } from 'next';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cookies Policy | Lumivex',
  description: 'How Lumivex uses cookies and similar technologies.',
};

export default function CookiesPage() {
  return (
    <>
      <Navigation />

      <section className="relative pt-32 pb-20 px-6" style={{ background: 'linear-gradient(135deg, #FAFAF9 0%, #FFF7ED 50%, #FAFAF9 100%)' }}>
        <div className="max-w-site mx-auto text-center">
          <nav className="mb-4 text-sm text-text-muted flex gap-2 justify-center">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span><span className="text-text-primary">Cookies Policy</span>
          </nav>
          <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-text-primary">Cookies Policy</h1>
          <p className="text-text-muted mt-3">Last updated: July 1, 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-sm text-text-muted leading-relaxed space-y-8">

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">1. What Are Cookies</h2>
            <p>Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, understand how you interact with the site, and provide a better browsing experience. Cookies may be &ldquo;session&rdquo; (deleted when you close your browser) or &ldquo;persistent&rdquo; (remain until they expire or you delete them).</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">2. How We Use Cookies</h2>
            <p>Lumivex uses the following types of cookies:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong className="text-text-primary">Essential Cookies</strong> — Required for the website to function. These enable core features like page navigation, secure checkout, and form submission. The site cannot operate properly without these cookies.</li>
              <li><strong className="text-text-primary">Functional Cookies</strong> — Remember your preferences, such as language, region, and items in your shopping cart. These enhance your experience but are not strictly necessary.</li>
              <li><strong className="text-text-primary">Analytics Cookies</strong> — Help us understand how visitors use our site (pages visited, time on site, referral sources). We use this data to improve the website experience. Analytics data is anonymized and aggregated.</li>
              <li><strong className="text-text-primary">Marketing Cookies</strong> — Used to deliver relevant advertisements and measure campaign effectiveness. These may be set by third-party advertising partners. We only set these with your explicit consent.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">3. Third-Party Cookies</h2>
            <p>Some cookies on our site are placed by trusted third-party services:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong className="text-text-primary">Stripe</strong> — Secure payment processing</li>
              <li><strong className="text-text-primary">Google Analytics</strong> — Anonymous website usage statistics</li>
              <li><strong className="text-text-primary">Cloudflare</strong> — Website security and performance</li>
            </ul>
            <p className="mt-2">These third parties have their own privacy and cookie policies. We encourage you to review them.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">4. Your Choices</h2>
            <p>You can control and manage cookies in several ways:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong className="text-text-primary">Browser Settings</strong> — Most browsers allow you to block or delete cookies. Check your browser&apos;s help documentation for instructions. Note that blocking essential cookies may prevent the website from functioning properly.</li>
              <li><strong className="text-text-primary">Cookie Preferences</strong> — When you first visit our site, you can accept or decline non-essential cookies via the cookie banner. You can change your preferences at any time by clearing your browser cookies and revisiting the site.</li>
              <li><strong className="text-text-primary">Do Not Track</strong> — We honor Do Not Track (DNT) signals sent by your browser. When DNT is enabled, we disable analytics and marketing cookies.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">5. Cookie Duration</h2>
            <p>Session cookies expire when you close your browser. Persistent cookies have varying durations:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Preference cookies: up to 12 months</li>
              <li>Analytics cookies: up to 24 months</li>
              <li>Marketing cookies: up to 90 days</li>
            </ul>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">6. Updates to This Policy</h2>
            <p>We may update this Cookies Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">7. Contact</h2>
            <p>For questions about our use of cookies, contact us at <a href="mailto:privacy@lumivex.com" className="text-primary hover:underline">privacy@lumivex.com</a>.</p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

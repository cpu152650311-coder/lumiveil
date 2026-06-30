import type { Metadata } from 'next';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Lumivex',
  description: 'Terms and conditions governing the use of Lumivex products and services.',
};

export default function TermsPage() {
  return (
    <>
      <Navigation />

      <section className="relative pt-32 pb-20 px-6" style={{ background: 'linear-gradient(135deg, #FAFAF9 0%, #FFF7ED 50%, #FAFAF9 100%)' }}>
        <div className="max-w-site mx-auto text-center">
          <nav className="mb-4 text-sm text-text-muted flex gap-2 justify-center">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link><span>/</span><span className="text-text-primary">Terms of Service</span>
          </nav>
          <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-text-primary">Terms of Service</h1>
          <p className="text-text-muted mt-3">Last updated: July 1, 2026</p>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto prose prose-sm text-text-muted leading-relaxed space-y-8">

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using the Lumivex website, purchasing a Lumivex product, or using any Lumivex service, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">2. Products & Orders</h2>
            <p>All product descriptions, images, and prices are subject to change without notice. We reserve the right to refuse or cancel any order. In the event of a pricing error, we will notify you and give you the option to proceed at the correct price or cancel. Orders are subject to availability and payment verification.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">3. Pricing & Payment</h2>
            <p>All prices are listed in US Dollars (USD) and do not include applicable taxes or shipping charges, which will be calculated at checkout. We accept major credit cards, PayPal, and Apple Pay. By providing a payment method, you represent that you are authorized to use it.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">4. Shipping & Delivery</h2>
            <p>Free standard shipping (5–7 business days) applies to all orders. Express and overnight options are available at additional cost. Delivery times are estimates and not guaranteed. Risk of loss passes to you upon delivery to the carrier. We ship to 42 countries; international orders may be subject to customs duties and import taxes.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">5. Returns & Refunds</h2>
            <p>We offer a 30-day risk-free trial on all Lumivex products. If you are not satisfied, return the product in its original packaging for a full refund. We cover return shipping. Refunds are processed within 5–10 business days of receiving the returned item. Products must be in like-new condition; excessive wear or damage may result in a partial refund.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">6. Warranty</h2>
            <p>Lumivex products include a limited warranty against manufacturing defects: 2 years for Apex and Pulse models, 1 year for Core and Pulse Kids. The warranty does not cover accidental damage, unauthorized modifications, or normal wear and tear. ExtendedCare+ accidental damage coverage is available for $4.99/month.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">7. Intellectual Property</h2>
            <p>All content on this website — including text, images, logos, product designs, and software — is the property of Lumivex Inc. and protected by copyright, trademark, and patent laws. The Lumivex name, logo, and HealthCore AI are trademarks of Lumivex Inc. You may not reproduce, distribute, or create derivative works without our written permission.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">8. Limitation of Liability</h2>
            <p>Lumivex products are wellness devices, not medical devices. They are not intended to diagnose, treat, cure, or prevent any disease. Always consult a qualified healthcare professional for medical advice. To the fullest extent permitted by law, Lumivex Inc. shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">9. Governing Law</h2>
            <p>These Terms shall be governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration in Wilmington, Delaware.</p>
          </div>

          <div>
            <h2 className="font-outfit text-xl font-bold text-text-primary mb-3">10. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:legal@lumivex.com" className="text-primary hover:underline">legal@lumivex.com</a>.</p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

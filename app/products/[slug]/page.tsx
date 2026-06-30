import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import CTASection from '@/components/sections/CTASection';
import FloatingContact from '@/components/sections/FloatingContact';
import { ContactButton } from '@/components/sections/FloatingContact';
import { getProduct, getProductSlugs, products } from '@/lib/products';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — $${product.price} | Lumivex`,
    description: `${product.name}: ${product.tagline} ${product.description.slice(0, 120)}...`,
  };
}

const featureIcons = ['🔋', '💓', '🛡️', '📍', '🧠', '💧', '📡', '⚙️'];

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const otherProducts = products.filter((p) => p.id !== slug);
  const half = Math.ceil(product.features.length / 2);
  const leftFeatures = product.features.slice(0, half);
  const rightFeatures = product.features.slice(half);

  return (
    <>
      <Navigation />

      {/* Hero — 渐变背景 + 产品大图 */}
      <section className="relative pt-32 pb-0 px-4 overflow-hidden" style={{ background: 'radial-gradient(ellipse 80% 70% at 70% 50%, #E0F2FE 0%, #F8FAFC 50%, #FFFFFF 100%)' }}>
        <div className="max-w-site mx-auto">
          <nav className="mb-6 text-sm text-text-muted flex gap-2">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <span className="text-text-primary">{product.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 pb-16">
            {/* Left: Product Image */}
            <div className="lg:w-1/2 flex justify-center">
              <img src={product.image} alt={product.name} className="w-full max-w-lg h-auto object-contain drop-shadow-2xl" />
            </div>

            {/* Right: Info */}
            <div className="lg:w-1/2 max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                {product.badge && <span className="badge">{product.badge}</span>}
                <span className="text-xs text-text-muted uppercase tracking-wider">{product.category}</span>
              </div>
              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-none">
                {product.name}
              </h1>
              <p className="text-xl text-text-muted mt-3 font-outfit">{product.tagline}</p>
              <div className="flex items-baseline gap-2 mt-5">
                <span className="font-outfit text-4xl font-bold text-text-primary">${product.price}</span>
                <span className="text-text-muted text-sm">USD</span>
              </div>
              <p className="text-sm text-text-muted mt-1">or as low as ${Math.round(product.price / 12)}/mo with 12-month financing. Free shipping.</p>

              <div className="flex flex-wrap gap-3 mt-6">
                <button className="btn-accent text-lg px-8 py-3.5">Add to Cart</button>
                <ContactButton label="Inquire Now" variant="outline" />
              </div>

              {/* Quick highlights */}
              <div className="grid grid-cols-2 gap-3 mt-8 pt-8 border-t border-border-light">
                {product.specs.slice(0, 4).map((spec, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-bold">{spec.value}</span>
                    <span className="text-text-muted">{spec.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features — 双列大图设计 */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-site mx-auto">
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center mb-2">Key Features</h2>
          <p className="text-text-muted text-lg text-center mb-12">Everything that makes the {product.name} exceptional.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-5">
            <ul className="space-y-4">
              {leftFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-light/30 transition-colors group">
                  <span className="text-2xl shrink-0">{featureIcons[i] || '✦'}</span>
                  <div>
                    <span className="text-text-primary font-medium group-hover:text-primary transition-colors">{feat}</span>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {rightFeatures.map((feat, i) => (
                <li key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary-light/30 transition-colors group">
                  <span className="text-2xl shrink-0">{featureIcons[half + i] || '✦'}</span>
                  <div>
                    <span className="text-text-primary font-medium group-hover:text-primary transition-colors">{feat}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Full Specs */}
      <section className="bg-bg-main py-20 px-4">
        <div className="max-w-site mx-auto">
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center mb-2">Full Specifications</h2>
          <p className="text-text-muted text-lg text-center mb-10">Every detail, verified.</p>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-border-light shadow-card overflow-hidden">
            {product.specs.map((spec, i) => (
              <div key={i} className={`flex justify-between items-center px-6 py-4 ${i < product.specs.length - 1 ? 'border-b border-border-light' : ''}`}>
                <span className="text-sm text-text-muted">{spec.label}</span>
                <span className="text-sm font-semibold text-text-primary text-right max-w-[60%]">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Description + In the Box */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-14">
            <div className="lg:w-3/5">
              <h2 className="font-outfit text-2xl font-bold text-text-primary mb-4">About the {product.name}</h2>
              <p className="text-text-muted leading-relaxed text-lg">{product.description}</p>
              <div className="mt-6 flex gap-4">
                <ContactButton label="Ask a Question" variant="outline" />
              </div>
            </div>
            <div className="lg:w-2/5">
              <h2 className="font-outfit text-2xl font-bold text-text-primary mb-4">In the Box</h2>
              <ul className="space-y-3">
                {product.inTheBox.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-text-primary">
                    <svg className="w-5 h-5 text-primary shrink-0" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compare */}
      <section className="bg-bg-main py-20 px-4">
        <div className="max-w-site mx-auto">
          <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center mb-2">Compare Models</h2>
          <p className="text-text-muted text-lg text-center mb-10">Find the perfect Lumivex for your lifestyle.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherProducts.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="group bg-white rounded-card border border-border-light shadow-card p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all text-center">
                <img src={p.image} alt={p.name} className="w-full h-36 object-contain mb-4 group-hover:scale-105 transition-transform duration-300" />
                {p.badge && <span className="badge text-xs mb-1">{p.badge}</span>}
                <h3 className="font-outfit font-bold text-text-primary group-hover:text-primary transition-colors mt-1">{p.name}</h3>
                <p className="text-xs text-text-muted mt-1">{p.tagline}</p>
                <p className="font-outfit font-bold text-lg text-text-primary mt-3">${p.price}</p>
                <span className="inline-block mt-2 text-primary text-sm font-semibold">View Details →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scene Adapter */}
      <section className="bg-bg-main py-16 px-6">
        <div className="max-w-site mx-auto text-center">
          <p className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-3">Perfect for</p>
          <h2 className="font-outfit text-2xl font-bold text-text-primary mb-8">Who is the {product.name} for?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[['🏃','Endurance athletes','Dual-band GPS, VO2 max, recovery scoring'],['💓','Health optimizers','Clinically tested ECG, blood pressure, sleep apnea'],['💼','Professionals','Titanium design, stress index, focus tracking']].map((s,i) => (
              <div key={i} className="bg-white rounded-xl border border-border-light p-5 text-center"><span className="text-3xl block mb-2">{s[0]}</span><p className="font-outfit font-bold text-text-primary text-sm">{s[1]}</p><p className="text-text-muted text-xs mt-1">{s[2]}</p></div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="30-Day Risk-Free Trial"
        subtitle="If it doesn't change how you understand your health, return it. No questions asked."
        cta={[{ label: 'Order Now', href: '#' }]}
        trustBadges={[
          { icon: '🚚', label: 'Free Shipping' },
          { icon: '🛡️', label: '2-Year Warranty' },
          { icon: '↩️', label: '30-Day Returns' },
        ]}
        variant="accent"
      />

      <Footer />
      <FloatingContact label="Inquire About This Product" />
    </>
  );
}

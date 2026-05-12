import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import CTASection from '@/components/sections/CTASection';
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

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const otherProducts = products.filter((p) => p.id !== slug);

  return (
    <>
      <Navigation />

      <section className="bg-bg-main pt-32 pb-12 px-4">
        <div className="max-w-site mx-auto">
          <nav className="mb-6 text-sm text-text-muted flex gap-2">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-accent transition-colors">Products</Link>
            <span>/</span>
            <span className="text-text-primary">{product.name}</span>
          </nav>
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            <div className="lg:w-1/2 bg-white rounded-card border border-border-light shadow-card p-8 flex items-center justify-center">
              <img src={product.image} alt={product.name} className="max-w-full h-auto max-h-[420px] object-contain" />
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center gap-2 mb-2">
                {product.badge && <span className="badge">{product.badge}</span>}
                <span className="text-sm text-text-muted capitalize">{product.category}</span>
              </div>
              <h1 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary">{product.name}</h1>
              <p className="text-lg text-text-muted mt-1">{product.tagline}</p>
              <p className="text-3xl font-outfit font-bold text-text-primary mt-4">${product.price}</p>
              <p className="text-sm text-text-muted mt-1">Free shipping. 30-day returns.</p>
              <div className="flex flex-wrap gap-3 mt-6">
                <button className="btn-accent text-lg px-8 py-3">Add to Cart</button>
                <button className="btn-outline text-lg px-8 py-3">Compare</button>
              </div>
              <p className="text-text-muted leading-relaxed mt-6">{product.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2">
              <h2 className="font-outfit text-2xl font-bold text-text-primary mb-6">Key Features</h2>
              <ul className="space-y-3">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" viewBox="0 0 20 20" fill="none">
                      <path d="M4 10l4 4 8-8" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-text-primary">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <h2 className="font-outfit text-2xl font-bold text-text-primary mb-6">Specifications</h2>
              <div className="bg-bg-main rounded-card border border-border-light overflow-hidden">
                {product.specs.map((spec, i) => (
                  <div key={i} className={`flex justify-between px-5 py-3 ${i % 2 === 0 ? 'bg-white' : 'bg-bg-main'} ${i < product.specs.length - 1 ? 'border-b border-border-light' : ''}`}>
                    <span className="text-sm text-text-muted">{spec.label}</span>
                    <span className="text-sm font-semibold text-text-primary text-right">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg-main py-16 px-4">
        <div className="max-w-site mx-auto">
          <h2 className="font-outfit text-2xl font-bold text-text-primary mb-6">In the Box</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {product.inTheBox.map((item, i) => (
              <div key={i} className="bg-white rounded-card border border-border-light shadow-card p-4 text-center">
                <span className="text-2xl mb-2 block">📦</span>
                <span className="text-sm text-text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-site mx-auto">
          <h2 className="font-outfit text-2xl font-bold text-text-primary text-center mb-10">Compare with Other Models</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {otherProducts.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="group bg-bg-main rounded-card border border-border-light shadow-card p-5 hover:shadow-card-hover transition-all">
                <img src={p.image} alt={p.name} className="w-full h-32 object-contain mb-3" />
                <h3 className="font-outfit font-bold text-text-primary group-hover:text-accent transition-colors">{p.name}</h3>
                <p className="text-sm text-text-muted">{p.tagline}</p>
                <p className="font-outfit font-bold text-text-primary mt-2">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Free Shipping on Every Order"
        subtitle="30-day trial. Hassle-free returns. 2-year warranty."
        cta={[{ label: 'Add to Cart', href: '#' }]}
        variant="light"
        compact
      />

      <Footer />
    </>
  );
}

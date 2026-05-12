import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  features: string[];
  image: string;
  badge?: string;
  href?: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card group">
      <div className="card-image bg-gradient-to-b from-bg-main to-white flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="card-body">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-outfit text-lg font-bold text-text-primary">{product.name}</h3>
          {product.badge && <span className="badge">{product.badge}</span>}
        </div>
        <p className="text-sm text-text-muted mb-3">{product.tagline}</p>
        <ul className="space-y-1 mb-4">
          {product.features.slice(0, 4).map((feat, i) => (
            <li key={i} className="text-sm text-text-primary flex items-start gap-2">
              <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="#0EA5E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {feat}
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <span className="font-outfit text-2xl font-bold text-text-primary">${product.price}</span>
          {product.href && (
            <Link href={product.href} className="btn-accent text-sm px-4 py-2">
              View Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  products: Product[];
  filters?: { label: string; value: string }[];
}

export default function ProductGrid({ title, subtitle, products, filters }: ProductGridProps) {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-site mx-auto">
        {title && <h2 className="font-outfit text-3xl sm:text-4xl font-bold text-text-primary text-center">{title}</h2>}
        {subtitle && <p className="text-text-muted text-lg text-center mt-2 mb-10">{subtitle}</p>}
        {filters && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((f, i) => (
              <button key={i} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? 'bg-accent text-white' : 'bg-bg-main text-text-muted hover:bg-accent-light'}`}>
                {f.label}
              </button>
            ))}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

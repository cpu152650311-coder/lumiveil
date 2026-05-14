import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FloatingContact from '@/components/sections/FloatingContact';
import Link from 'next/link';
import { getPostMetas, PostMeta } from '@/lib/posts';

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getPostMetas();
  const featured = posts[0];
  const latest = posts.slice(1);
  const categories = [...new Set(posts.map(p => p.category))];
  const popular = posts.slice(0, 5).map(p => p.title);

  return (
    <>
      <Navigation />

      <HeroSection title="The Lumivex Health Brief" subtitle="Science-backed. Jargon-free. Written by doctors and engineers who actually wear the watch." breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]} compact>
        <div className="mt-6 space-y-4">
          <input type="search" placeholder="Search articles, topics, or health questions" className="w-full max-w-md px-5 py-3 rounded-card border border-border-light bg-white text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors" />
          <div className="flex flex-wrap gap-2">{categories.map(c => <button key={c} className="px-4 py-1.5 text-sm rounded-full border border-border-light text-text-muted hover:border-accent hover:text-accent transition-colors">{c}</button>)}</div>
        </div>
      </HeroSection>

      {featured && (
        <section className="bg-white py-12 px-6">
          <div className="max-w-site mx-auto">
            <h2 className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-6">Featured</h2>
            <Link href={`/blog/${featured.slug}`} className="group block bg-bg-main rounded-2xl border border-border-light overflow-hidden hover:shadow-card transition-all">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-3/5 h-64 lg:h-auto bg-gradient-to-br from-accent-light via-accent-light/70 to-bg-main flex items-center justify-center text-7xl">{featured.category === 'Heart Health' ? '💓' : featured.category === 'Sleep' ? '🌙' : '📊'}</div>
                <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center">
                  <span className="badge text-xs mb-3">{featured.category}</span>
                  <h3 className="font-outfit text-2xl lg:text-3xl font-bold text-text-primary group-hover:text-accent transition-colors leading-tight">{featured.title}</h3>
                  <p className="text-text-muted mt-3 leading-relaxed">{featured.excerpt}</p>
                  <div className="flex items-center gap-3 mt-4 text-sm text-text-muted"><span className="font-medium text-text-primary">{featured.author}</span><span>·</span><span>{featured.date}</span><span>·</span><span>{featured.readTime}</span></div>
                  <span className="inline-flex items-center gap-1 text-accent font-semibold mt-4 group-hover:gap-2 transition-all">Read Article →</span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-bg-main py-16 px-6">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/3">
              <h2 className="font-outfit text-2xl font-bold text-text-primary mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {latest.map(a => (
                  <Link key={a.slug} href={`/blog/${a.slug}`} className="group bg-white rounded-card border border-border-light shadow-card p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
                    <span className="badge text-xs mb-2">{a.category}</span>
                    <h3 className="font-outfit font-bold text-text-primary group-hover:text-accent transition-colors mt-2 leading-snug">{a.title}</h3>
                    <p className="text-sm text-text-muted mt-1.5 line-clamp-2">{a.excerpt}</p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-text-muted"><span className="font-medium text-text-primary">{a.author}</span><span>·</span><span>{a.date}</span><span>·</span><span>{a.readTime}</span></div>
                  </Link>
                ))}
              </div>
            </div>
            <aside className="lg:w-1/3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-card border border-border-light shadow-card p-6">
                  <h3 className="font-outfit font-bold text-text-primary mb-4">Most Read</h3>
                  <ol className="space-y-3">{popular.map((t,i) => (<li key={i} className="flex gap-3 text-sm"><span className="text-accent font-outfit font-bold shrink-0">{i+1}.</span><span className="text-text-muted hover:text-accent transition-colors cursor-pointer leading-snug">{t}</span></li>))}</ol>
                </div>
                <div className="bg-accent-light rounded-card border border-accent/20 p-5">
                  <h3 className="font-outfit font-bold text-text-primary mb-3">Quick Inquiry</h3>
                  <input type="email" placeholder="Your email" className="w-full px-3 py-2.5 text-sm rounded-lg border border-border-light bg-white focus:border-accent focus:outline-none mb-2" />
                  <textarea rows={2} placeholder="Short question..." className="w-full px-3 py-2.5 text-sm rounded-lg border border-border-light bg-white focus:border-accent focus:outline-none resize-none mb-2" />
                  <button className="btn-accent w-full text-sm py-2.5">Send →</button>
                </div>
                <div className="bg-white rounded-card border border-border-light shadow-card p-5 text-center">
                  <p className="text-sm text-text-muted mb-2">48,000+ subscribers</p>
                  <p className="font-outfit font-bold text-text-primary text-lg">Weekly Health Brief</p>
                  <p className="text-xs text-text-muted mt-1 mb-3">Science-backed insights. Zero spam.</p>
                  <input type="email" placeholder="Your email" className="w-full px-3 py-2 text-xs rounded-lg border border-border-light bg-bg-main focus:border-accent focus:outline-none mb-2" />
                  <button className="btn-accent w-full text-xs py-2">Subscribe Free</button>
                </div>
                <div className="bg-white rounded-card border border-border-light shadow-card p-5">
                  <h3 className="font-outfit font-bold text-text-primary text-sm mb-3">Featured Product</h3>
                  <img src="/generated/lumivex-apex.webp" alt="Lumivex Apex" className="w-full h-32 object-contain mb-3" />
                  <p className="font-outfit font-bold text-text-primary text-sm">Lumivex Apex</p>
                  <p className="text-xs text-text-muted">The flagship. $499</p>
                  <a href="/products/lumivex-apex" className="text-accent text-xs font-semibold hover:opacity-80">View Details →</a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact label="Subscribe / Inquire" />
    </>
  );
}

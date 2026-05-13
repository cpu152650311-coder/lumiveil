import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FloatingContact from '@/components/sections/FloatingContact';
import Link from 'next/link';

interface Article {
  slug: string; title: string; excerpt: string; category: string; author: string; readTime: string; date: string;
}

const featured: Article = {
  slug: 'ecg-smartwatches-2025', title: 'ECG Smartwatches: What They Can and Cannot Detect in 2025',
  excerpt: 'From AFib to long QT syndrome — a cardiologist explains what consumer ECG can actually find, the three conditions it still cannot, and how to interpret results without panicking.',
  category: 'Heart Health', author: 'Dr. Tobias Muller, CMO', readTime: '8 min', date: '2025-12-02',
};

const latest: Article[] = [
  { slug: 'bp-accuracy-comparison', title: 'Blood Pressure Accuracy: Smartwatch vs. Cuff vs. Arterial Line', excerpt: 'Three measurement methods compared head-to-head in a 500-person study.', category: 'Research', author: 'Dr. Marcus Chen', readTime: '10 min', date: '2025-12-05' },
  { slug: 'hrv-explained', title: 'Heart Rate Variability: What Your Watch Is Trying to Tell You', excerpt: 'HRV is the most misunderstood health metric. What a high or low score actually means.', category: 'Fitness', author: 'Dr. Tobias Muller', readTime: '7 min', date: '2025-12-01' },
  { slug: 'best-swim-smartwatch', title: 'Best Smartwatch for Swimming: Pool, Open Water, Triathlon', excerpt: 'Six watches tested. GPS accuracy, heart rate tracking, durability compared.', category: 'Fitness', author: 'Sofia Reyes', readTime: '9 min', date: '2025-11-25' },
  { slug: 'sleep-score-dropped', title: 'Why Your Sleep Score Dropped and What to Do About It', excerpt: 'Five most common drivers of poor sleep scores and exactly how to fix each one.', category: 'Sleep', author: 'Dr. Anika Sharma', readTime: '6 min', date: '2025-11-28' },
  { slug: 'firmware-4-2', title: 'Firmware 4.2: Readiness Score 2.0 and Sleep Staging', excerpt: 'The biggest update this year adds REM/deep sleep staging and redesigned readiness.', category: 'Product Updates', author: 'James Whitfield', readTime: '5 min', date: '2025-11-18' },
  { slug: 'smartwatch-buying-guide', title: 'Smartwatch Buying Guide 2025: The Only Comparison That Matters', excerpt: '14 smartwatches tested for health accuracy. Only four passed clinical benchmarks.', category: 'Buying Guides', author: 'James Whitfield', readTime: '12 min', date: '2025-11-20' },
  { slug: 'sleep-apnea-home', title: 'Sleep Apnea Detection at Home: What Your Watch Can and Cannot Do', excerpt: 'Consumer SpO2 is getting good. But it is not a substitute for a sleep study.', category: 'Sleep', author: 'Dr. Anika Sharma', readTime: '8 min', date: '2025-11-12' },
  { slug: 'dual-band-gps-test', title: 'Dual-Band GPS: Lumivex vs. Garmin vs. Apple Watch Ultra', excerpt: '200km of trail running to compare GPS accuracy. Results surprised even us.', category: 'Fitness', author: 'Priya Nair', readTime: '11 min', date: '2025-11-08' },
];

const popular = ['ECG Smartwatches: What They Can Detect in 2025','Smartwatch Buying Guide 2025','Why Your Sleep Score Dropped','Heart Rate Variability Explained','Blood Pressure Accuracy Compared'];

const categories = ['Heart Health','Sleep','Fitness','Buying Guides','Product Updates','Research'];

export default function BlogPage() {
  return (
    <>
      <Navigation />

      <HeroSection title="The Lumivex Health Brief" subtitle="Science-backed. Jargon-free. Written by doctors and engineers who actually wear the watch." breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]} compact>
        <div className="mt-6 space-y-4">
          <input type="search" placeholder="Search articles, topics, or health questions" className="w-full max-w-md px-5 py-3 rounded-card border border-border-light bg-white text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors" />
          <div className="flex flex-wrap gap-2">{categories.map(c => <button key={c} className="px-4 py-1.5 text-sm rounded-full border border-border-light text-text-muted hover:border-accent hover:text-accent transition-colors">{c}</button>)}</div>
        </div>
      </HeroSection>

      {/* Featured large banner */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-site mx-auto">
          <h2 className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-6">Featured</h2>
          <Link href={`/blog/${featured.slug}`} className="group block bg-bg-main rounded-2xl border border-border-light overflow-hidden hover:shadow-card transition-all">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-3/5 h-64 lg:h-auto bg-gradient-to-br from-accent-light via-accent-light/70 to-bg-main flex items-center justify-center text-7xl">💓</div>
              <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center">
                <span className="badge text-xs mb-3">{featured.category}</span>
                <h3 className="font-outfit text-2xl lg:text-3xl font-bold text-text-primary group-hover:text-accent transition-colors leading-tight">{featured.title}</h3>
                <p className="text-text-muted mt-3 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-3 mt-4 text-sm text-text-muted">
                  <span className="font-medium text-text-primary">{featured.author}</span><span>·</span><span>{featured.date}</span><span>·</span><span>{featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-accent font-semibold mt-4 group-hover:gap-2 transition-all">Read Article →</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest + Sidebar */}
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

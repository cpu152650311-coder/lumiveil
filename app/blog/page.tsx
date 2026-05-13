import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import FloatingContact from '@/components/sections/FloatingContact';
import Link from 'next/link';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
}

const featuredArticle: Article = {
  slug: 'ecg-smartwatches-what-they-can-detect',
  title: 'ECG Smartwatches: What They Can and Can\'t Detect in 2025',
  excerpt: 'From AFib to long QT syndrome — a cardiologist explains what consumer ECG can actually find, the three conditions it still cannot, and how to interpret your results without panicking. A must-read for anyone with a health-focused smartwatch.',
  category: 'Heart Health',
  author: 'Dr. Tobias Müller, CMO',
  readTime: '8 min read',
  date: '2025-12-02',
};

const latestArticles: Article[] = [
  { slug: 'bp-accuracy-comparison', title: 'Blood Pressure Accuracy: Smartwatch vs. Cuff vs. Arterial Line', excerpt: 'We compared three measurement methods head-to-head in a 500-person study.', category: 'Research', author: 'Dr. Marcus Chen', readTime: '10 min read', date: '2025-12-05' },
  { slug: 'hrv-explained', title: 'Heart Rate Variability Explained: What Your Watch Is Trying to Tell You', excerpt: 'HRV is the most misunderstood health metric. Here is what a high or low score actually means.', category: 'Fitness', author: 'Dr. Tobias Müller', readTime: '7 min read', date: '2025-12-01' },
  { slug: 'best-smartwatch-swimming', title: 'Best Smartwatch for Swimming: Pool, Open Water, and Triathlon', excerpt: 'We tested six watches in pool and open water. GPS accuracy, heart rate tracking, and durability compared.', category: 'Fitness', author: 'Sofia Reyes', readTime: '9 min read', date: '2025-11-25' },
  { slug: 'why-your-sleep-score-dropped', title: 'Why Your Sleep Score Dropped — And What to Do About It', excerpt: 'Sleep scores fluctuate for reasons most people miss. Here are the five most common drivers and exactly how to fix each one.', category: 'Sleep', author: 'Dr. Anika Sharma', readTime: '6 min read', date: '2025-11-28' },
  { slug: 'firmware-4-2-update', title: 'Lumivex Firmware 4.2: Readiness Score 2.0 and Sleep Staging', excerpt: 'The biggest firmware update this year adds REM/deep sleep staging and a redesigned readiness algorithm.', category: 'Product Updates', author: 'James Whitfield', readTime: '5 min read', date: '2025-11-18' },
  { slug: 'smartwatch-buying-guide-2025', title: 'Smartwatch Buying Guide 2025: The Only Comparison That Matters', excerpt: 'We tested 14 smartwatches for health accuracy. Only four passed our clinical benchmarks.', category: 'Buying Guides', author: 'James Whitfield', readTime: '12 min read', date: '2025-11-20' },
  { slug: 'sleep-apnea-detection', title: 'Sleep Apnea Detection at Home: What Your Watch Can and Cannot Do', excerpt: 'Consumer SpO2 monitoring is getting good. But it is not a substitute for a sleep study. Here is the nuance.', category: 'Sleep', author: 'Dr. Anika Sharma', readTime: '8 min read', date: '2025-11-12' },
  { slug: 'dual-band-gps-test', title: 'Dual-Band GPS Accuracy: Lumivex vs. Garmin vs. Apple Watch Ultra', excerpt: 'We ran 200km of trail running to compare GPS accuracy. The results surprised even us.', category: 'Fitness', author: 'Priya Nair', readTime: '11 min read', date: '2025-11-08' },
];

const popularArticles = [
  'ECG Smartwatches: What They Can and Can\'t Detect in 2025',
  'Smartwatch Buying Guide 2025',
  'Why Your Sleep Score Dropped — And What to Do',
  'Heart Rate Variability Explained',
  'Blood Pressure Accuracy: Smartwatch vs. Cuff',
];

const categories = ['Heart Health', 'Sleep', 'Fitness', 'Buying Guides', 'Product Updates', 'Research'];

export default function BlogPage() {
  return (
    <>
      <Navigation />

      <HeroSection
        title="The Lumivex Health Brief"
        subtitle="Science-backed. Jargon-free. Written by doctors and engineers who actually wear the watch."
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }]}
        compact
      >
        <div className="mt-6 space-y-4">
          <input
            type="search"
            placeholder="Search articles, topics, or health questions"
            className="w-full max-w-md px-5 py-3 rounded-card border border-border-light bg-white text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none transition-colors"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} className="px-4 py-1.5 text-sm rounded-full border border-border-light text-text-muted hover:border-primary hover:text-primary transition-colors">{cat}</button>
            ))}
          </div>
        </div>
      </HeroSection>

      {/* Featured Article — 大横幅 */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-site mx-auto">
          <h2 className="font-outfit text-sm uppercase tracking-widest text-text-muted mb-6">Featured Article</h2>
          <Link href={`/blog/${featuredArticle.slug}`} className="group block bg-bg-main rounded-2xl border border-border-light shadow-card overflow-hidden hover:shadow-card-hover transition-all">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-3/5 h-64 lg:h-auto bg-gradient-to-br from-accent-light via-accent-light/70 to-bg-main flex items-center justify-center text-7xl">
                💓
              </div>
              <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center">
                <span className="badge text-xs mb-3">{featuredArticle.category}</span>
                <h3 className="font-outfit text-2xl lg:text-3xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
                  {featuredArticle.title}
                </h3>
                <p className="text-text-muted mt-3 leading-relaxed">{featuredArticle.excerpt}</p>
                <div className="flex items-center gap-3 mt-4 text-sm text-text-muted">
                  <span className="font-medium text-text-primary">{featuredArticle.author}</span>
                  <span>·</span>
                  <span>{featuredArticle.date}</span>
                  <span>·</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1 text-primary font-semibold mt-4 group-hover:gap-2 transition-all">
                  Read Article <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest Articles + Sidebar */}
      <section className="bg-bg-main py-16 px-4">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Main content */}
            <div className="lg:w-2/3">
              <h2 className="font-outfit text-2xl font-bold text-text-primary mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {latestArticles.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="group bg-white rounded-card border border-border-light shadow-card p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all">
                    <span className="badge text-xs mb-2">{article.category}</span>
                    <h3 className="font-outfit font-bold text-text-primary group-hover:text-primary transition-colors mt-2 leading-snug">{article.title}</h3>
                    <p className="text-sm text-text-muted mt-1.5 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-text-muted">
                      <span className="font-medium text-text-primary">{article.author}</span>
                      <span>·</span>
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar — 简化版 */}
            <aside className="lg:w-1/3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-card border border-border-light shadow-card p-6">
                  <h3 className="font-outfit font-bold text-text-primary mb-4">Most Read This Week</h3>
                  <ol className="space-y-3">
                    {popularArticles.map((title, i) => (
                      <li key={i} className="flex gap-3 text-sm group">
                        <span className="text-primary font-outfit font-bold shrink-0">{i + 1}.</span>
                        <span className="text-text-muted group-hover:text-primary transition-colors cursor-pointer leading-snug">{title}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="bg-primary-light rounded-card border border-primary/20 p-5">
                  <h3 className="font-outfit font-bold text-text-primary mb-3">Quick Inquiry</h3>
                  <div className="space-y-3">
                    <input type="email" placeholder="Your email" className="w-full px-3 py-2.5 text-sm rounded-lg border border-border-light bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all" />
                    <textarea rows={2} placeholder="Short question..." className="w-full px-3 py-2.5 text-sm rounded-lg border border-border-light bg-white focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary-light transition-all resize-none" />
                    <button className="btn-accent w-full text-sm py-2.5">Send →</button>
                  </div>
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

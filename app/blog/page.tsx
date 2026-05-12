import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import HeroSection from '@/components/sections/HeroSection';
import CTASection from '@/components/sections/CTASection';
import Link from 'next/link';

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  date: string;
  image?: string;
  featured?: boolean;
}

const featuredArticles: Article[] = [
  {
    slug: 'ecg-smartwatches-what-they-can-detect',
    title: 'ECG Smartwatches: What They Can and Can\'t Detect in 2025',
    excerpt: 'From AFib to long QT syndrome — a cardiologist explains what consumer ECG can actually find, and the three conditions it still cannot.',
    category: 'Heart Health',
    author: 'Dr. Tobias Müller, CMO',
    readTime: '8 min read',
    date: '2025-12-02',
    featured: true,
  },
  {
    slug: 'why-your-sleep-score-dropped',
    title: 'Why Your Sleep Score Dropped — And What to Do About It',
    excerpt: 'Sleep scores fluctuate for reasons most people miss. We break down the five most common drivers of poor sleep scores and exactly how to fix each one.',
    category: 'Sleep',
    author: 'Dr. Anika Sharma, Co-CEO',
    readTime: '6 min read',
    date: '2025-11-28',
    featured: true,
  },
  {
    slug: 'smartwatch-buying-guide-2025',
    title: 'Smartwatch Buying Guide 2025: The Only Comparison That Matters',
    excerpt: 'We tested 14 smartwatches for health accuracy. Only four passed our clinical benchmarks. Here\'s what matters — and what\'s marketing.',
    category: 'Buying Guides',
    author: 'James Whitfield, Co-CEO',
    readTime: '12 min read',
    date: '2025-11-20',
    featured: true,
  },
];

const latestArticles: Article[] = [
  { slug: 'bp-accuracy-comparison', title: 'Blood Pressure Accuracy: Smartwatch vs. Cuff vs. Arterial Line', excerpt: 'We compared three measurement methods head-to-head in a 500-person study.', category: 'Research', author: 'Dr. Marcus Chen', readTime: '10 min read', date: '2025-12-05' },
  { slug: 'hrv-explained', title: 'Heart Rate Variability Explained: What Your Watch Is Trying to Tell You', excerpt: 'HRV is the most misunderstood health metric. Here is what a high or low score actually means.', category: 'Fitness', author: 'Dr. Tobias Müller', readTime: '7 min read', date: '2025-12-01' },
  { slug: 'best-smartwatch-swimming', title: 'Best Smartwatch for Swimming: Pool, Open Water, and Triathlon', excerpt: 'We tested six watches in pool and open water. GPS accuracy, heart rate tracking, and durability compared.', category: 'Fitness', author: 'Sofia Reyes', readTime: '9 min read', date: '2025-11-25' },
  { slug: 'firmware-4-2-update', title: 'Lumivex Firmware 4.2: Readiness Score 2.0 and Sleep Staging', excerpt: 'The biggest firmware update this year adds REM/deep sleep staging and a redesigned readiness algorithm.', category: 'Product Updates', author: 'James Whitfield', readTime: '5 min read', date: '2025-11-18' },
  { slug: 'sleep-apnea-detection', title: 'Sleep Apnea Detection at Home: What Your Watch Can and Cannot Do', excerpt: 'Consumer SpO2 monitoring is getting good. But it is not a substitute for a sleep study. Here is the nuance.', category: 'Sleep', author: 'Dr. Anika Sharma', readTime: '8 min read', date: '2025-11-12' },
  { slug: 'dual-band-gps-test', title: 'Dual-Band GPS Accuracy: Lumivex Apex vs. Garmin vs. Apple Watch Ultra', excerpt: 'We ran 200km of trail running to compare GPS accuracy. The results surprised even us.', category: 'Fitness', author: 'Priya Nair', readTime: '11 min read', date: '2025-11-08' },
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
            className="w-full max-w-md px-5 py-3 rounded-card border border-border-light bg-white text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button key={cat} className="px-4 py-1.5 text-sm rounded-full border border-border-light text-text-muted hover:border-accent hover:text-accent transition-colors">{cat}</button>
            ))}
          </div>
        </div>
      </HeroSection>

      <section className="bg-white py-16 px-4">
        <div className="max-w-site mx-auto">
          <h2 className="font-outfit text-2xl font-bold text-text-primary mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} className="group bg-bg-main rounded-card border border-border-light shadow-card overflow-hidden hover:shadow-card-hover transition-all">
                <div className="h-48 bg-accent-light flex items-center justify-center text-5xl">
                  {article.category === 'Heart Health' ? '💓' : article.category === 'Sleep' ? '🌙' : '🛒'}
                </div>
                <div className="p-5">
                  <span className="badge text-xs mb-2">{article.category}</span>
                  <h3 className="font-outfit text-lg font-bold text-text-primary group-hover:text-accent transition-colors mt-2">{article.title}</h3>
                  <p className="text-sm text-text-muted mt-2 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-text-muted">
                    <span>{article.author}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-main py-16 px-4">
        <div className="max-w-site mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-2/3">
              <h2 className="font-outfit text-2xl font-bold text-text-primary mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {latestArticles.map((article) => (
                  <Link key={article.slug} href={`/blog/${article.slug}`} className="group bg-white rounded-card border border-border-light shadow-card p-5 hover:shadow-card-hover transition-all">
                    <span className="badge text-xs mb-2">{article.category}</span>
                    <h3 className="font-outfit font-bold text-text-primary group-hover:text-accent transition-colors mt-2">{article.title}</h3>
                    <p className="text-sm text-text-muted mt-1.5 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center gap-3 mt-3 text-xs text-text-muted">
                      <span>{article.date}</span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <aside className="lg:w-1/3 space-y-8">
              <div className="bg-white rounded-card border border-border-light shadow-card p-5">
                <h3 className="font-outfit font-bold text-text-primary mb-4">Most Read This Week</h3>
                <ol className="space-y-3">
                  {popularArticles.map((title, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="text-accent font-outfit font-bold shrink-0">{i + 1}.</span>
                      <span className="text-text-muted hover:text-accent transition-colors cursor-pointer">{title}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-accent-light rounded-card border border-accent/20 p-5">
                <h3 className="font-outfit font-bold text-text-primary mb-2">Get the Weekly Brief</h3>
                <p className="text-sm text-text-muted mb-3">48,000+ subscribers. Free forever. One email, every Thursday.</p>
                <div className="flex gap-2">
                  <input type="email" placeholder="Your email" className="flex-1 px-3 py-2 text-sm rounded-lg border border-border-light focus:border-accent focus:outline-none" />
                  <button className="btn-accent text-sm px-4 py-2">Subscribe</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title="Never Miss a Health Insight"
        subtitle="Weekly articles from our medical team. Free forever."
        cta={[{ label: 'Subscribe Free', href: '#' }]}
        variant="light"
        compact
      />

      <Footer />
    </>
  );
}

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import FloatingContact from '@/components/sections/FloatingContact';
import { getPost, getPostSlugs } from '@/lib/posts';

interface Props { params: Promise<{ slug: string }>; }

export const dynamic = 'force-static';

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | Lumivex Blog`, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Navigation />
      <article className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <nav className="mb-6 text-sm text-text-muted flex gap-2">
            <Link href="/" className="hover:text-accent">Home</Link><span>/</span>
            <Link href="/blog" className="hover:text-accent">Blog</Link><span>/</span>
            <span className="text-text-primary line-clamp-1">{post.title}</span>
          </nav>
          <span className="badge text-xs mb-4">{post.category}</span>
          <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-text-primary leading-tight mt-2">{post.title}</h1>
          <div className="flex items-center gap-3 mt-4 text-sm text-text-muted">
            <span className="font-medium text-text-primary">{post.author}</span><span>·</span><span>{post.date}</span><span>·</span><span>{post.readTime}</span>
          </div>
          {post.coverImage && (
            <img src={post.coverImage} alt={post.title} className="w-full h-64 sm:h-96 object-cover rounded-2xl mt-8 mb-10" />
          )}
          <div className="prose prose-lg max-w-none text-text-primary leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }} />
          {post.faq && post.faq.length > 0 && (
            <div className="mt-12 border-t border-border-light pt-8">
              <h2 className="font-outfit text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {post.faq.map((item, i) => (
                  <details key={i} className="bg-bg-main rounded-xl p-4 cursor-pointer">
                    <summary className="font-outfit font-bold text-text-primary">{item.question}</summary>
                    <p className="text-text-muted mt-2 text-sm leading-relaxed">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          )}
          {post.quality && (
            <p className="mt-8 text-xs text-text-muted border-t border-border-light pt-4">
              AI-generated content · Auto QA passed · Not manually reviewed
            </p>
          )}
        </div>
      </article>
      <Footer />
      <FloatingContact label="Inquire" />
    </>
  );
}

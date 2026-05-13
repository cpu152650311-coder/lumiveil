import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import FloatingContact from '@/components/sections/FloatingContact';
import { getPost, getPostSlugs, posts } from '@/lib/posts';

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() { return getPostSlugs().map(slug => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | Lumivex Blog`, description: post.excerpt };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params; const post = getPost(slug);
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
            <span className="font-medium text-text-primary">{post.author}</span><span>·</span><span>{post.authorTitle}</span><span>·</span><span>{post.date}</span><span>·</span><span>{post.readTime}</span>
          </div>
          <img src={post.coverImage} alt={post.title} className="w-full h-64 sm:h-96 object-cover rounded-2xl mt-8 mb-10" />
          <div className="prose prose-lg max-w-none text-text-primary leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
      <Footer />
      <FloatingContact label="Inquire" />
    </>
  );
}

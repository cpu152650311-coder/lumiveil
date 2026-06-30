"Content layer: blog posts from local JSON — statically imported for build-time inlining.";
import { cache } from "react";

export interface PostMeta { slug: string; title: string; excerpt: string; category: string; author: string; readTime: string; date: string; coverImage: string; tags?: string[]; }
export interface Post extends PostMeta {
  content: string;
  metaTitle?: string; metaDescription?: string;
  primaryKeyword?: string; secondaryKeywords?: string[];
  faq?: { question: string; answer: string }[];
  quality?: { seoScore?: number; passed?: boolean; aiGenerated?: boolean };
}

// Static imports — inlined at build time, no fs dependency
import postsIndex from "@/public/content/posts-index.json";

// Dynamic post imports via mapping
const postModules: Record<string, () => Promise<Post>> = {
  "why-we-built-lumivex": () => import("@/public/content/posts/why-we-built-lumivex.json").then(m => m.default || m),
  "designing-apex-titanium": () => import("@/public/content/posts/designing-apex-titanium.json").then(m => m.default || m),
  "how-healthcore-ai-works": () => import("@/public/content/posts/how-healthcore-ai-works.json").then(m => m.default || m),
  "firmware-4-2-sleep-staging": () => import("@/public/content/posts/firmware-4-2-sleep-staging.json").then(m => m.default || m),
};

// Fallback for missing posts
const FALLBACK_POSTS: PostMeta[] = (postsIndex as PostMeta[]).slice(0, 2);

const _getAllPosts = cache(async (): Promise<PostMeta[]> => {
  return (postsIndex as PostMeta[]) || FALLBACK_POSTS;
});

const _getPost = cache(async (slug: string): Promise<Post | null> => {
  const loader = postModules[slug];
  if (!loader) return null;
  try {
    return await loader();
  } catch {
    return null;
  }
});

export async function getPostMetas(): Promise<PostMeta[]> { return _getAllPosts(); }
export async function getPost(slug: string): Promise<Post | null> { return _getPost(slug); }

export async function getPostSlugs(): Promise<string[]> {
  const posts = await getPostMetas();
  return posts.map((p) => p.slug);
}

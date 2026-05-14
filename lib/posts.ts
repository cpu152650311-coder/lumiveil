"Content layer: fetch blog posts from GitHub raw JSON with ISR + fallback to local data.";
import { cache } from "react";

export interface PostMeta { slug: string; title: string; excerpt: string; category: string; author: string; readTime: string; date: string; coverImage: string; tags?: string[]; }
export interface Post extends PostMeta {
  content: string;
  metaTitle?: string; metaDescription?: string;
  primaryKeyword?: string; secondaryKeywords?: string[];
  faq?: { question: string; answer: string }[];
  quality?: { seoScore?: number; passed?: boolean; aiGenerated?: boolean };
}

const RAW_BASE = "https://raw.githubusercontent.com/cpu152650311-coder/lumiveil/master/public/content";
const INDEX_URL = RAW_BASE + "/posts-index.json";
const POST_URL = (slug: string) => RAW_BASE + "/posts/" + slug + ".json";

export const revalidate = 60; // ISR: refresh every 60 seconds

// Hardcoded fallback — keeps working if GitHub raw is unreachable
const FALLBACK_POSTS: PostMeta[] = [
  { slug: "ecg-smartwatches-2025", title: "ECG Smartwatches: What They Can and Cannot Detect in 2025", excerpt: "From AFib to long QT syndrome — a cardiologist explains what consumer ECG can actually find.", category: "Heart Health", author: "Dr. Tobias Muller", readTime: "8 min", date: "2025-12-02", coverImage: "/generated/blog-cover-ecg.webp" },
  { slug: "sleep-score-dropped", title: "Why Your Sleep Score Dropped and What to Do About It", excerpt: "Five most common drivers of poor sleep scores and exactly how to fix each one.", category: "Sleep", author: "Dr. Anika Sharma", readTime: "6 min", date: "2025-11-28", coverImage: "/generated/blog-cover-sleep.webp" },
];

const _getAllPosts = cache(async (): Promise<PostMeta[]> => {
  try {
    const res = await fetch(INDEX_URL, { next: { revalidate } });
    if (!res.ok) throw new Error("fetch failed");
    return res.json();
  } catch {
    return FALLBACK_POSTS;
  }
});

const _getPost = cache(async (slug: string): Promise<Post | null> => {
  try {
    const res = await fetch(POST_URL(slug), { next: { revalidate } });
    if (!res.ok) throw new Error("fetch failed");
    return res.json();
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

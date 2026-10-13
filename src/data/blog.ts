import { getAllPosts, getPostBySlug as getMdxPostBySlug, getAllBlogSlugs as getMdxBlogSlugs } from "@/lib/blog";

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  isoDate: string; // ISO 8601 for sitemap & schema
  readTime: string;
  author: string;
  authorRole: string;
  tagColor: string;
  coverImage: string;
  tags: string[];
}

export function getAllBlogPosts(): BlogPost[] {
  const mdxPosts = getAllPosts();
  return mdxPosts.map((p) => ({
    slug: p.slug,
    title: p.frontmatter.title,
    category: p.frontmatter.tags[0] || "Engineering",
    excerpt: p.frontmatter.description,
    date: p.frontmatter.date,
    isoDate: `${p.frontmatter.date}T00:00:00.000Z`,
    readTime: p.readTime,
    author: p.authorDetails.name,
    authorRole: p.authorDetails.role,
    tagColor: "bg-[#d4ff3f] text-black",
    coverImage: p.frontmatter.coverImage || "/services/web-dev-showcase.png",
    tags: p.frontmatter.tags,
  }));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const all = getAllBlogPosts();
  return all.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return getMdxBlogSlugs();
}

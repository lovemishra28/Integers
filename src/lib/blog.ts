import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { siteConfig } from "@/config/site";

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  coverImage?: string;
}

export interface TableOfContentItem {
  id: string;
  text: string;
  level: number;
}

export interface AuthorDetails {
  name: string;
  role: string;
  bio: string;
}

export interface BlogPostItem {
  slug: string;
  frontmatter: BlogPostFrontmatter;
  content: string;
  readTime: string;
  headings: TableOfContentItem[];
  authorDetails: AuthorDetails;
}

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "blog");

/**
 * Generates an anchor-safe slug from a heading text.
 */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Extracts h2 and h3 headings from raw markdown/MDX.
 */
export function extractHeadings(rawMarkdown: string): TableOfContentItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TableOfContentItem[] = [];
  let match;

  while ((match = headingRegex.exec(rawMarkdown)) !== null) {
    const level = match[1].length;
    const rawText = match[2].trim();
    // Strip markdown formatting if any
    const cleanText = rawText.replace(/[*_`]/g, "");
    headings.push({
      id: slugifyHeading(cleanText),
      text: cleanText,
      level,
    });
  }

  return headings;
}

/**
 * Computes estimated read time based on word count.
 */
export function calculateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

/**
 * Resolves author role and bio from team config with fallback.
 */
export function getAuthorDetails(authorName: string): AuthorDetails {
  const matched = siteConfig.team.find(
    (member) => member.name.toLowerCase() === authorName.toLowerCase()
  );

  if (matched) {
    return {
      name: matched.name,
      role: matched.role,
      bio: matched.bio,
    };
  }

  return {
    name: authorName,
    role: "Engineering Collective",
    bio: "Core engineer and design strategist at IntegersDev in Gwalior, delivering sub-second digital web experiences.",
  };
}

/**
 * Fetches all blog posts parsed from MDX files, sorted by date descending.
 */
export function getAllPosts(): BlogPostItem[] {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(POSTS_DIRECTORY);
  const posts: BlogPostItem[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".mdx") && !fileName.endsWith(".md")) {
      continue;
    }

    const slug = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(POSTS_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const frontmatter: BlogPostFrontmatter = {
      title: data.title || "Untitled Article",
      description: data.description || "",
      date: data.date || "2026-10-01",
      author: data.author || "IntegersDev Team",
      tags: Array.isArray(data.tags) ? data.tags : [],
      coverImage: data.coverImage || "/services/web-dev-showcase.png",
    };

    posts.push({
      slug,
      frontmatter,
      content,
      readTime: calculateReadTime(content),
      headings: extractHeadings(content),
      authorDetails: getAuthorDetails(frontmatter.author),
    });
  }

  // Sort by date descending
  return posts.sort(
    (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

/**
 * Fetches a single blog post by slug.
 */
export function getPostBySlug(slug: string): BlogPostItem | null {
  const mdxPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
  const mdPath = path.join(POSTS_DIRECTORY, `${slug}.md`);

  let targetPath = "";
  if (fs.existsSync(mdxPath)) {
    targetPath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    targetPath = mdPath;
  } else {
    return null;
  }

  const fileContents = fs.readFileSync(targetPath, "utf8");
  const { data, content } = matter(fileContents);

  const frontmatter: BlogPostFrontmatter = {
    title: data.title || "Untitled Article",
    description: data.description || "",
    date: data.date || "2026-10-01",
    author: data.author || "IntegersDev Team",
    tags: Array.isArray(data.tags) ? data.tags : [],
    coverImage: data.coverImage || "/services/web-dev-showcase.png",
  };

  return {
    slug,
    frontmatter,
    content,
    readTime: calculateReadTime(content),
    headings: extractHeadings(content),
    authorDetails: getAuthorDetails(frontmatter.author),
  };
}

/**
 * Finds related posts sharing tags with the current post.
 */
export function getRelatedPosts(currentSlug: string, tags: string[], limit: number = 3): BlogPostItem[] {
  const all = getAllPosts();
  const currentTagsSet = new Set(tags.map((t) => t.toLowerCase()));

  const filtered = all.filter((p) => p.slug !== currentSlug);

  // Score posts by tag matches
  const scored = filtered.map((post) => {
    let score = 0;
    for (const tag of post.frontmatter.tags) {
      if (currentTagsSet.has(tag.toLowerCase())) {
        score += 1;
      }
    }
    return { post, score };
  });

  // Sort descending by score, fallback to date
  scored.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return new Date(b.post.frontmatter.date).getTime() - new Date(a.post.frontmatter.date).getTime();
  });

  return scored.slice(0, limit).map((s) => s.post);
}

/**
 * Returns all blog slugs for generateStaticParams.
 */
export function getAllBlogSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

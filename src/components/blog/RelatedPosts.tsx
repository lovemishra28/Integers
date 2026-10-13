import React from "react";
import Link from "next/link";
import { FaArrowRight, FaClock, FaTag } from "react-icons/fa";
import { BlogPostItem } from "@/lib/blog";

interface RelatedPostsProps {
  posts: BlogPostItem[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="my-12" aria-labelledby="related-articles-title">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-black bg-[#d4ff3f] border border-black px-3 py-1 rounded-full shadow-[1px_1px_0px_0px_#000] inline-block mb-1">
            Keep Reading
          </span>
          <h3 id="related-articles-title" className="text-2xl sm:text-3xl font-black text-black tracking-tight">
            Related Insights &amp; Articles
          </h3>
        </div>
        <Link
          href="/blog"
          className="text-xs font-black text-black hover:underline hidden sm:inline-flex items-center gap-1"
        >
          View All Insights <FaArrowRight className="w-2.5 h-2.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-white border-2 border-black rounded-3xl p-6 shadow-[5px_5px_0px_0px_#000] hover:-translate-y-1.5 transition-all flex flex-col justify-between"
          >
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-3">
                {post.frontmatter.tags.slice(0, 2).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f8f9f5] border border-black/15 text-gray-700"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h4 className="text-base sm:text-lg font-black text-black leading-snug mb-3 group-hover:text-black transition-colors line-clamp-2">
                {post.frontmatter.title}
              </h4>

              {/* Excerpt */}
              <p className="text-xs text-gray-600 font-medium leading-relaxed mb-4 line-clamp-2">
                {post.frontmatter.description}
              </p>
            </div>

            {/* Meta Footer */}
            <div className="pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-bold text-gray-500">
              <span className="flex items-center gap-1">
                <FaClock className="w-2.5 h-2.5" />
                {post.readTime}
              </span>
              <span className="font-black text-black group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Read Article →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

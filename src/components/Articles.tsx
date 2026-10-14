import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaArrowRight, FaClock } from 'react-icons/fa';
import { getAllPosts } from '@/lib/blog';

function formatDate(dateString: string): string {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const parts = dateString.split('-');
  if (parts.length === 3) {
    const year = parts[0];
    const month = months[parseInt(parts[1], 10) - 1];
    const day = parseInt(parts[2], 10);
    if (month) return `${month} ${day}, ${year}`;
  }
  return dateString;
}

function getTagBadgeStyle(tag: string, index: number): string {
  const lower = tag.toLowerCase();
  if (lower.includes('price') || lower.includes('cost')) {
    return 'bg-[#d4ff3f] text-black border border-black/20';
  }
  if (lower.includes('next') || lower.includes('tech') || lower.includes('wordpress')) {
    return 'bg-blue-100 text-blue-900 border border-blue-300';
  }
  if (lower.includes('seo') || lower.includes('google')) {
    return 'bg-emerald-100 text-emerald-900 border border-emerald-300';
  }
  const defaults = [
    'bg-[#d4ff3f] text-black border border-black/20',
    'bg-blue-100 text-blue-900 border border-blue-300',
    'bg-emerald-100 text-emerald-900 border border-emerald-300'
  ];
  return defaults[index % defaults.length];
}

export default function Articles() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto bg-[#f8f9f5]">
      {/* Header with Green Glow */}
      <div className="flex flex-col items-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#d4ff3f] rounded-full opacity-40 blur-2xl z-0 pointer-events-none"></div>
        <span className="text-sm font-bold text-[#62d124] block mb-2 relative z-10">News &amp; Articles</span>
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-black text-center max-w-xl relative z-10 leading-tight">
          Take A Look At Our Articles &amp; Resources
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => {
          const primaryTag = post.frontmatter.tags[0] || 'Engineering';
          const tagStyle = getTagBadgeStyle(primaryTag, index);
          const formattedDate = formatDate(post.frontmatter.date);
          const authorInitial = post.authorDetails.name.charAt(0);
          const coverImage = post.frontmatter.coverImage || '/og-image.png';

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between border border-black/5"
            >
              {/* Image Thumbnail */}
              <div className="aspect-[16/10] w-full bg-gray-900 relative overflow-hidden">
                <Image
                  src={coverImage}
                  alt={`${post.frontmatter.title} - Article by ${post.authorDetails.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Article Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  {/* Category Tag & Read Time */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`inline-block px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider ${tagStyle}`}>
                      {primaryTag}
                    </span>
                    <span className="text-[11px] font-bold text-gray-500 flex items-center gap-1">
                      <FaClock className="w-2.5 h-2.5 text-gray-400" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold font-sans text-black mb-3 leading-snug transition-colors group-hover:text-[#62d124] line-clamp-2">
                    {post.frontmatter.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-6 font-medium">
                    {post.frontmatter.description}
                  </p>
                </div>

                {/* Footer Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wide">
                  <div className="flex items-center gap-1.5" title={`Published on ${formattedDate}`}>
                    <div className="w-6 h-6 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#ff5e14]" aria-hidden="true">
                      <FaCalendarAlt className="w-3 h-3" />
                    </div>
                    <span>{formattedDate}</span>
                  </div>

                  <div className="flex items-center gap-1.5" title={`Written by ${post.authorDetails.name} (${post.authorDetails.role})`}>
                    <div
                      className="w-6 h-6 rounded-full bg-[#d4ff3f] border border-black/20 flex items-center justify-center text-black font-black text-[11px]"
                      aria-label={`Author: ${post.authorDetails.name}`}
                    >
                      {authorInitial}
                    </div>
                    <span className="text-black font-semibold">{post.authorDetails.name}</span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom Link to Full Blog */}
      <div className="mt-14 text-center">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
        >
          View All Guides &amp; Insights
          <FaArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
}

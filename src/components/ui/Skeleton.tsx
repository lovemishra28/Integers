import React from "react";

/**
 * Base primitive Skeleton component with smooth pulse animation
 * and Neo-Brutalist soft borders.
 */
export function Skeleton({
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`animate-pulse bg-black/10 rounded-xl ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}

/**
 * Reusable Page Header skeleton (badge, title, breadcrumbs, description)
 */
export function PageHeaderSkeleton() {
  return (
    <header className="py-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
      {/* Breadcrumbs placeholder */}
      <div className="flex items-center gap-2 mb-6">
        <Skeleton className="w-16 h-4 rounded-full" />
        <span className="text-black/20 text-xs">/</span>
        <Skeleton className="w-24 h-4 rounded-full" />
      </div>

      {/* Pill badge */}
      <Skeleton className="w-36 h-6 rounded-full mb-4 bg-[#d4ff3f]/30 border border-black/10" />

      {/* Title lines */}
      <Skeleton className="w-3/4 max-w-2xl h-12 md:h-14 rounded-2xl mb-4" />
      <Skeleton className="w-1/2 max-w-xl h-10 md:h-12 rounded-2xl mb-6" />

      {/* Description paragraph lines */}
      <div className="space-y-2 max-w-2xl mb-8">
        <Skeleton className="w-full h-4 rounded-lg" />
        <Skeleton className="w-5/6 h-4 rounded-lg" />
        <Skeleton className="w-2/3 h-4 rounded-lg" />
      </div>

      {/* Action buttons placeholder */}
      <div className="flex flex-wrap items-center gap-4">
        <Skeleton className="w-44 h-12 rounded-full bg-[#d4ff3f]/50 border-2 border-black/20 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.1)]" />
        <Skeleton className="w-40 h-12 rounded-full border-2 border-black/20" />
      </div>
    </header>
  );
}

/**
 * Blog Card Skeleton for blog grids & article lists
 */
export function BlogCardSkeleton() {
  return (
    <div className="bg-white border-2 border-black/10 rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,0.06)] flex flex-col justify-between">
      {/* Cover image placeholder */}
      <Skeleton className="aspect-[16/10] w-full rounded-none" />

      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          {/* Tag & read time */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <Skeleton className="w-20 h-5 rounded-md bg-[#d4ff3f]/40" />
            <Skeleton className="w-16 h-4 rounded-full" />
          </div>

          {/* Title */}
          <Skeleton className="w-full h-6 rounded-lg mb-2" />
          <Skeleton className="w-4/5 h-6 rounded-lg mb-4" />

          {/* Excerpt */}
          <div className="space-y-2 mb-6">
            <Skeleton className="w-full h-3.5 rounded" />
            <Skeleton className="w-3/4 h-3.5 rounded" />
          </div>
        </div>

        {/* Footer: Date & Author */}
        <div className="flex items-center justify-between pt-4 border-t border-black/5">
          <div className="flex items-center gap-2">
            <Skeleton className="w-5 h-5 rounded-full" />
            <Skeleton className="w-20 h-3 rounded" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="w-6 h-6 rounded-full bg-[#d4ff3f]/40" />
            <Skeleton className="w-16 h-3 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Single Blog Post Reading Page Skeleton
 */
export function BlogPostSkeleton() {
  return (
    <article className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
      {/* Breadcrumb & back button */}
      <div className="flex items-center gap-3 mb-8">
        <Skeleton className="w-28 h-8 rounded-full border border-black/10" />
      </div>

      {/* Tags and Title */}
      <Skeleton className="w-24 h-6 rounded-full mb-4 bg-[#d4ff3f]/30" />
      <Skeleton className="w-full max-w-3xl h-12 md:h-16 rounded-2xl mb-4" />
      <Skeleton className="w-3/4 max-w-2xl h-10 md:h-12 rounded-2xl mb-6" />

      {/* Meta author and date row */}
      <div className="flex items-center gap-4 pb-8 mb-10 border-b border-black/10">
        <Skeleton className="w-10 h-10 rounded-full bg-[#d4ff3f]/40" />
        <div className="space-y-1.5">
          <Skeleton className="w-28 h-4 rounded" />
          <Skeleton className="w-36 h-3 rounded" />
        </div>
      </div>

      {/* Main Cover Image */}
      <Skeleton className="aspect-[21/9] w-full rounded-3xl mb-12 border-2 border-black/10 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.06)]" />

      {/* 2-Column layout: Content on Left, TOC on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-4">
          <Skeleton className="w-full h-5 rounded" />
          <Skeleton className="w-11/12 h-5 rounded" />
          <Skeleton className="w-full h-5 rounded" />
          <Skeleton className="w-4/5 h-5 rounded" />
          
          <Skeleton className="w-1/2 h-8 rounded-xl my-6" />

          <Skeleton className="w-full h-5 rounded" />
          <Skeleton className="w-full h-5 rounded" />
          <Skeleton className="w-3/4 h-5 rounded" />

          <Skeleton className="w-full h-40 rounded-2xl border-2 border-black/10 my-8" />
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-28 p-6 bg-white border-2 border-black/10 rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.06)] space-y-3">
            <Skeleton className="w-32 h-6 rounded-lg mb-4" />
            <Skeleton className="w-full h-4 rounded" />
            <Skeleton className="w-5/6 h-4 rounded" />
            <Skeleton className="w-4/5 h-4 rounded" />
            <Skeleton className="w-3/4 h-4 rounded" />
          </div>
        </aside>
      </div>
    </article>
  );
}

/**
 * Review / Testimonial Card Skeleton
 */
export function ReviewCardSkeleton() {
  return (
    <div className="bg-white border-2 border-black/10 rounded-3xl p-6 sm:p-7 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.06)] flex flex-col justify-between">
      <div>
        {/* Star rating placeholder */}
        <div className="flex gap-1.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="w-4 h-4 rounded-sm bg-[#d4ff3f]/50" />
          ))}
        </div>
        {/* Review body */}
        <div className="space-y-2 mb-6">
          <Skeleton className="w-full h-4 rounded" />
          <Skeleton className="w-full h-4 rounded" />
          <Skeleton className="w-4/5 h-4 rounded" />
        </div>
      </div>

      {/* Author footer */}
      <div className="flex items-center gap-3 pt-4 border-t border-black/5">
        <Skeleton className="w-8 h-8 rounded-full bg-[#d4ff3f]/40" />
        <div className="space-y-1">
          <Skeleton className="w-24 h-3.5 rounded" />
          <Skeleton className="w-32 h-3 rounded" />
        </div>
      </div>
    </div>
  );
}

/**
 * Comprehensive Service Page Skeleton matching ServicePageTemplate
 * Renders placeholders for all pillars, process steps, tech stack, pricing, and case study.
 */
export function ServicePageSkeleton() {
  return (
    <div className="w-full animate-in fade-in duration-300">
      {/* 1. Hero Header Skeleton */}
      <PageHeaderSkeleton />

      {/* 2. Intro & Stats Section */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto border-t-2 border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-3">
            <Skeleton className="w-64 h-7 rounded-xl mb-3" />
            <Skeleton className="w-full h-4 rounded" />
            <Skeleton className="w-full h-4 rounded" />
            <Skeleton className="w-4/5 h-4 rounded" />
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-5 bg-white border-2 border-black/10 rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,0.06)] space-y-2">
              <Skeleton className="w-16 h-8 rounded-lg bg-[#d4ff3f]/40" />
              <Skeleton className="w-28 h-3.5 rounded" />
            </div>
            <div className="p-5 bg-white border-2 border-black/10 rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,0.06)] space-y-2">
              <Skeleton className="w-16 h-8 rounded-lg bg-[#d4ff3f]/40" />
              <Skeleton className="w-28 h-3.5 rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. What's Included / Feature Pillars (3 cards) */}
      <section className="py-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <Skeleton className="w-28 h-5 rounded-full mx-auto bg-[#d4ff3f]/30" />
          <Skeleton className="w-80 h-9 rounded-xl mx-auto" />
          <Skeleton className="w-96 h-4 rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white border-2 border-black/10 rounded-3xl p-7 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.06)] space-y-4"
            >
              <Skeleton className="w-12 h-12 rounded-2xl bg-[#d4ff3f]/40" />
              <Skeleton className="w-44 h-6 rounded-lg" />
              <Skeleton className="w-full h-3.5 rounded" />
              <Skeleton className="w-5/6 h-3.5 rounded" />
              <div className="pt-4 border-t border-black/5 space-y-2">
                <Skeleton className="w-3/4 h-3.5 rounded" />
                <Skeleton className="w-4/5 h-3.5 rounded" />
                <Skeleton className="w-2/3 h-3.5 rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Process Steps (4 horizontal cards) */}
      <section className="py-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto bg-black/[0.02] rounded-3xl border-2 border-black/10 mb-16">
        <div className="mb-10 space-y-2">
          <Skeleton className="w-36 h-5 rounded-full bg-[#d4ff3f]/30" />
          <Skeleton className="w-72 h-8 rounded-xl" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-6 bg-white border-2 border-black/10 rounded-2xl space-y-3">
              <Skeleton className="w-9 h-9 rounded-full bg-black/10" />
              <Skeleton className="w-32 h-5 rounded-lg" />
              <Skeleton className="w-full h-3 rounded" />
              <Skeleton className="w-4/5 h-3 rounded" />
            </div>
          ))}
        </div>
      </section>

      {/* 5. Pricing Teaser & Case Study preview */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Pricing card */}
          <div className="lg:col-span-5 bg-white border-2 border-black/10 rounded-3xl p-8 space-y-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.06)]">
            <Skeleton className="w-24 h-5 rounded-full bg-[#d4ff3f]/40" />
            <Skeleton className="w-48 h-8 rounded-xl" />
            <Skeleton className="w-32 h-10 rounded-xl bg-[#d4ff3f]/30" />
            <div className="space-y-2 py-4">
              <Skeleton className="w-full h-4 rounded" />
              <Skeleton className="w-5/6 h-4 rounded" />
              <Skeleton className="w-4/5 h-4 rounded" />
            </div>
            <Skeleton className="w-full h-12 rounded-full bg-black/10" />
          </div>

          {/* Case study card */}
          <div className="lg:col-span-7 bg-white border-2 border-black/10 rounded-3xl p-8 space-y-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.06)]">
            <Skeleton className="w-32 h-5 rounded-full" />
            <Skeleton className="w-64 h-8 rounded-xl" />
            <Skeleton className="aspect-[16/9] w-full rounded-2xl border-2 border-black/10" />
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion skeleton */}
      <section className="py-16 px-6 sm:px-12 md:px-20 max-w-4xl mx-auto space-y-4">
        <div className="text-center mb-8 space-y-2">
          <Skeleton className="w-28 h-5 rounded-full mx-auto" />
          <Skeleton className="w-64 h-8 rounded-xl mx-auto" />
        </div>
        {[...Array(4)].map((_, i) => (
          <div key={i} className="p-5 bg-white border-2 border-black/10 rounded-2xl flex justify-between items-center">
            <Skeleton className="w-3/4 h-5 rounded-lg" />
            <Skeleton className="w-5 h-5 rounded-full" />
          </div>
        ))}
      </section>
    </div>
  );
}

/**
 * Root Application Shell Skeleton for global loading.tsx
 */
export function RootAppSkeleton() {
  return (
    <div className="min-h-screen bg-[#f6f8f1] flex flex-col justify-between">
      {/* Top Navbar Placeholder */}
      <div className="w-full h-20 px-8 flex items-center justify-between border-b-2 border-black/10 bg-white/70 backdrop-blur-md sticky top-0 z-50">
        <Skeleton className="w-36 h-9 rounded-xl" />
        <div className="hidden md:flex items-center gap-6">
          <Skeleton className="w-16 h-4 rounded-full" />
          <Skeleton className="w-16 h-4 rounded-full" />
          <Skeleton className="w-16 h-4 rounded-full" />
          <Skeleton className="w-16 h-4 rounded-full" />
          <Skeleton className="w-16 h-4 rounded-full" />
        </div>
        <Skeleton className="w-28 h-10 rounded-full bg-[#d4ff3f]/50 border border-black/20" />
      </div>

      {/* Hero Section Placeholder */}
      <main className="flex-1 py-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Skeleton className="w-40 h-6 rounded-full bg-[#d4ff3f]/40" />
          <Skeleton className="w-full h-14 md:h-16 rounded-2xl" />
          <Skeleton className="w-4/5 h-12 md:h-14 rounded-2xl" />
          <Skeleton className="w-3/5 h-5 rounded-lg" />
          <div className="flex gap-4 pt-4">
            <Skeleton className="w-40 h-12 rounded-full bg-[#d4ff3f]/60 border-2 border-black/10" />
            <Skeleton className="w-36 h-12 rounded-full border-2 border-black/10" />
          </div>
        </div>

        {/* 3 Featured Cards Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <BlogCardSkeleton />
          <BlogCardSkeleton />
          <BlogCardSkeleton />
        </div>
      </main>

      {/* Footer Placeholder */}
      <div className="w-full h-28 border-t-2 border-black/10 bg-white/50 flex items-center justify-center">
        <Skeleton className="w-64 h-5 rounded-full" />
      </div>
    </div>
  );
}

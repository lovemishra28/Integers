import React from "react";
import SiteLayout from "@/components/SiteLayout";
import { PageHeaderSkeleton, BlogCardSkeleton, Skeleton } from "@/components/ui/Skeleton";

export default function BlogLoading() {
  return (
    <SiteLayout>
      <PageHeaderSkeleton />

      {/* Main Articles Grid Skeleton */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        {/* Topic tags skeleton */}
        <div className="mb-10 flex flex-wrap items-center gap-2 pb-6 border-b-2 border-black/10">
          <Skeleton className="w-20 h-6 rounded-full" />
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="w-24 h-8 rounded-full border border-black/10" />
          ))}
        </div>

        {/* 3-column articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

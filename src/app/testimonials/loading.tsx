import React from "react";
import SiteLayout from "@/components/SiteLayout";
import { PageHeaderSkeleton, ReviewCardSkeleton, Skeleton } from "@/components/ui/Skeleton";

export default function TestimonialsLoading() {
  return (
    <SiteLayout>
      <PageHeaderSkeleton />

      {/* Aggregate Stats Skeleton */}
      <section className="py-8 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="p-6 sm:p-8 bg-white border-2 border-black/10 rounded-3xl mb-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.06)] grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="text-center space-y-2">
              <Skeleton className="w-16 h-8 rounded-lg mx-auto bg-[#d4ff3f]/40" />
              <Skeleton className="w-24 h-4 rounded mx-auto" />
            </div>
          ))}
        </div>

        {/* Reviews Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <ReviewCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

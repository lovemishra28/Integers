import React from "react";
import SiteLayout from "@/components/SiteLayout";
import { PageHeaderSkeleton, Skeleton } from "@/components/ui/Skeleton";

export default function ServicesLoading() {
  return (
    <SiteLayout>
      <PageHeaderSkeleton />

      {/* Services Grid Skeleton */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="bg-white border-2 border-black/10 rounded-3xl p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.06)] space-y-4"
            >
              <div className="flex items-center justify-between">
                <Skeleton className="w-12 h-12 rounded-2xl bg-[#d4ff3f]/40" />
                <Skeleton className="w-24 h-6 rounded-full" />
              </div>
              <Skeleton className="w-48 h-7 rounded-xl" />
              <Skeleton className="w-full h-4 rounded" />
              <Skeleton className="w-5/6 h-4 rounded" />
              <div className="pt-4 border-t border-black/5 space-y-2">
                <Skeleton className="w-3/4 h-3.5 rounded" />
                <Skeleton className="w-4/5 h-3.5 rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}

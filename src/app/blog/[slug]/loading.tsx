import React from "react";
import SiteLayout from "@/components/SiteLayout";
import { BlogPostSkeleton } from "@/components/ui/Skeleton";

export default function BlogPostLoading() {
  return (
    <SiteLayout>
      <BlogPostSkeleton />
    </SiteLayout>
  );
}

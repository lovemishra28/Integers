import { unstable_cache } from "next/cache";
import connectToDatabase from "@/lib/mongodb";
import Review from "@/models/Review";
import { ReviewItem, VERIFIED_PORTFOLIO_REVIEWS } from "@/data/reviews";

export type { ReviewItem };
export { VERIFIED_PORTFOLIO_REVIEWS };

/**
 * Filter out any automated test entries, QA submissions, or placeholder text.
 */
function isAuthenticReview(name?: string, text?: string): boolean {
  if (!name || !text) return false;
  const combined = `${name} ${text}`.toLowerCase();
  const testKeywords = [
    "browser mobile qa",
    "qa",
    "test",
    "dummy",
    "sample",
    "lorem ipsum",
    "turbopack compilation",
    "submission verified",
  ];
  return !testKeywords.some((kw) => combined.includes(kw));
}

async function fetchApprovedReviewsFromDb(): Promise<ReviewItem[]> {
  try {
    if (!process.env.MONGODB_URI) {
      return VERIFIED_PORTFOLIO_REVIEWS;
    }

    await connectToDatabase();
    const dbReviews = await Review.find({ isApproved: true, rating: { $gte: 4 } })
      .sort({ createdAt: -1 })
      .lean();

    if (!dbReviews || dbReviews.length === 0) {
      return VERIFIED_PORTFOLIO_REVIEWS;
    }

    const formattedDbReviews: ReviewItem[] = dbReviews
      .filter((r: any) => isAuthenticReview(r.name, r.text))
      .map((r: any) => {
        const matchingVerified = VERIFIED_PORTFOLIO_REVIEWS.find(
          (v) => v.name.toLowerCase() === (r.name || "").toLowerCase()
        );
        return {
          _id: r._id ? r._id.toString() : undefined,
          name: r.name,
          role: r.role || matchingVerified?.role || "Verified Client",
          text: r.text,
          rating: Number(r.rating) || 5,
          createdAt: r.createdAt ? new Date(r.createdAt).toISOString() : undefined,
          verifiedBadge: r.verifiedBadge || matchingVerified?.verifiedBadge || "Verified Client",
          location: r.location || matchingVerified?.location || "Gwalior, MP",
          liveUrl: r.liveUrl || matchingVerified?.liveUrl,
          projectSlug: r.projectSlug || matchingVerified?.projectSlug,
          projectName: r.projectName || matchingVerified?.projectName,
        };
      });

    // Merge DB reviews with verified portfolio reviews, avoiding duplicates by text snippet
    const combined: ReviewItem[] = [...formattedDbReviews];
    for (const v of VERIFIED_PORTFOLIO_REVIEWS) {
      const alreadyExists = combined.some(
        (c) =>
          c.name.toLowerCase() === v.name.toLowerCase() ||
          c.text.slice(0, 30).toLowerCase() === v.text.slice(0, 30).toLowerCase()
      );
      if (!alreadyExists) {
        combined.push(v);
      }
    }

    return combined;
  } catch (error) {
    console.warn("MongoDB review fetch warning, falling back to verified reviews:", error);
    return VERIFIED_PORTFOLIO_REVIEWS;
  }
}

/**
 * Server-side cached function to fetch approved reviews for initial HTML hydration.
 * Cached with Next.js unstable_cache for 300s (5 mins) and tagged with 'reviews' for on-demand invalidation.
 */
export const getApprovedReviews = unstable_cache(
  fetchApprovedReviewsFromDb,
  ["approved-reviews"],
  {
    revalidate: 300,
    tags: ["reviews"],
  }
);

import connectToDatabase from "@/lib/mongodb";
import Review from "@/models/Review";
import { ReviewItem, VERIFIED_PORTFOLIO_REVIEWS } from "@/data/reviews";

export type { ReviewItem };
export { VERIFIED_PORTFOLIO_REVIEWS };

/**
 * Server-side function to fetch approved reviews for initial HTML hydration.
 * Queries MongoDB for live reviews and merges with verified portfolio reviews.
 * ONLY call this from Server Components, Server Actions, or API Route Handlers.
 */
export async function getApprovedReviews(): Promise<ReviewItem[]> {
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

    const formattedDbReviews: ReviewItem[] = dbReviews.map((r: any) => ({
      _id: r._id ? r._id.toString() : undefined,
      name: r.name,
      role: r.role || "Client",
      text: r.text,
      rating: Number(r.rating) || 5,
      createdAt: r.createdAt ? new Date(r.createdAt).toISOString() : undefined,
    }));

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

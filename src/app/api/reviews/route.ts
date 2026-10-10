import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Review from "@/models/Review";

// POST: Save a new review to the database
export async function POST(request: Request) {
  try {
    await connectToDatabase();
    
    // Parse the data sent from the frontend form
    const data = await request.json();
    
    // Basic validation
    if (!data.name || !data.text || !data.rating) {
      return NextResponse.json({ error: "Missing required fields (Name, Review Text, Rating)" }, { status: 400 });
    }

    const ratingNum = Math.max(1, Math.min(5, Number(data.rating) || 5));

    // Create and save the new review
    const newReview = new Review({
      name: String(data.name).trim(),
      role: data.role ? String(data.role).trim() : "Client",
      text: String(data.text).trim(),
      rating: ratingNum,
      isApproved: true,
    });

    await newReview.save();

    return NextResponse.json({ success: true, review: newReview }, { status: 201 });
  } catch (error: any) {
    console.error("Failed to save review:", error);
    return NextResponse.json({ error: error?.message || "Failed to save review" }, { status: 500 });
  }
}

// GET: Fetch the recent top reviews (4 or 5 stars)
export async function GET() {
  try {
    await connectToDatabase();
    
    // Find reviews that are 4 or 5 stars, sort by newest first, limit to 8
    const reviews = await Review.find({ rating: { $gte: 4 } })
      .sort({ createdAt: -1 })
      .limit(8);

    return NextResponse.json({ success: true, reviews }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

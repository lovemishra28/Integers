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
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create and save the new review
    const newReview = new Review({
      name: data.name,
      role: data.role || "Client", // Default to 'Client' if role isn't provided
      text: data.text,
      rating: Number(data.rating),
    });

    await newReview.save();

    return NextResponse.json({ success: true, review: newReview }, { status: 201 });
  } catch (error) {
    console.error("Failed to save review:", error);
    return NextResponse.json({ error: "Failed to save review" }, { status: 500 });
  }
}

// GET: Fetch the top 4 recent 5-star reviews
export async function GET() {
  try {
    await connectToDatabase();
    
    // Find reviews that are 5 stars, sort by newest first, and limit to 4
    const reviews = await Review.find({ rating: 5 })
      .sort({ createdAt: -1 })
      .limit(4);

    return NextResponse.json({ success: true, reviews }, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}

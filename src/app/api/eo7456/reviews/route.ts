import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Review from "@/models/Review";
import { checkRequestAuth, isAuthenticated } from "@/lib/adminAuth";

export async function GET(request: Request) {
  try {
    const authed = checkRequestAuth(request) || (await isAuthenticated());
    if (!authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const filter = searchParams.get("filter") || "all";
    const minRating = searchParams.get("rating");

    const query: any = {};
    if (filter === "approved") query.isApproved = true;
    if (filter === "hidden") query.isApproved = false;
    if (minRating) query.rating = Number(minRating);

    const reviews = await Review.find(query).sort({ createdAt: -1 });

    const allReviews = await Review.find({});
    const totalReviews = allReviews.length;
    const approvedReviews = allReviews.filter((r) => r.isApproved).length;
    const avgRating =
      totalReviews > 0
        ? (allReviews.reduce((sum, r) => sum + (r.rating || 5), 0) / totalReviews).toFixed(1)
        : "5.0";

    return NextResponse.json({
      success: true,
      reviews,
      stats: {
        total: totalReviews,
        approved: approvedReviews,
        hidden: totalReviews - approvedReviews,
        avgRating,
      },
    });
  } catch (error: any) {
    console.error("Admin fetch reviews error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const authed = checkRequestAuth(request) || (await isAuthenticated());
    if (!authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();
    const body = await request.json();

    const { name, role, text, rating, isApproved } = body;

    if (!name || !text || !rating) {
      return NextResponse.json(
        { error: "Name, Review Text, and Rating are required." },
        { status: 400 }
      );
    }

    const newReview = new Review({
      name: String(name).trim(),
      role: role ? String(role).trim() : "Client",
      text: String(text).trim(),
      rating: Math.max(1, Math.min(5, Number(rating) || 5)),
      isApproved: isApproved !== undefined ? Boolean(isApproved) : true,
    });

    await newReview.save();

    return NextResponse.json({ success: true, review: newReview }, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create review:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to create review" },
      { status: 500 }
    );
  }
}

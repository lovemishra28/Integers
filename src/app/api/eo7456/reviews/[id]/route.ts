import { NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";
import connectToDatabase from "@/lib/mongodb";
import Review from "@/models/Review";
import { checkRequestAuth, isAuthenticated } from "@/lib/adminAuth";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, context: RouteContext) {
  try {
    const authed = checkRequestAuth(request) || (await isAuthenticated());
    if (!authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    if (!id) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    await connectToDatabase();
    const body = await request.json();

    const allowed = ["isApproved", "name", "role", "text", "rating"];
    const updateData: any = {};
    for (const key of allowed) {
      if (body[key] !== undefined) {
        updateData[key] = body[key];
      }
    }

    const updated = await Review.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    try {
      revalidateTag("reviews", "max");
      revalidatePath("/");
      revalidatePath("/testimonials");
    } catch (e) {
      // Non-blocking in background/offline runs
    }

    return NextResponse.json({ success: true, review: updated });
  } catch (error: any) {
    console.error("Failed to update review:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to update review" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, context: RouteContext) {
  try {
    const authed = checkRequestAuth(request) || (await isAuthenticated());
    if (!authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await context.params;
    if (!id) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    await connectToDatabase();
    const deleted = await Review.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 });
    }

    try {
      revalidateTag("reviews", "max");
      revalidatePath("/");
      revalidatePath("/testimonials");
    } catch (e) {
      // Non-blocking in background/offline runs
    }

    return NextResponse.json({ success: true, message: "Deleted successfully" });
  } catch (error: any) {
    console.error("Failed to delete review:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to delete review" },
      { status: 500 }
    );
  }
}

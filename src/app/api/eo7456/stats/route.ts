import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Contact from "@/models/Contact";
import Review from "@/models/Review";
import { checkRequestAuth, isAuthenticated } from "@/lib/adminAuth";

export async function GET(request: Request) {
  try {
    const authed = checkRequestAuth(request) || (await isAuthenticated());
    if (!authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();

    const [contacts, reviews] = await Promise.all([
      Contact.find({}).sort({ createdAt: -1 }),
      Review.find({}).sort({ createdAt: -1 }),
    ]);

    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const days: { [key: string]: number } = {};
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const label = d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
      days[label] = 0;
    }

    contacts.forEach((c) => {
      const created = new Date(c.createdAt);
      const label = created.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
      if (days[label] !== undefined) {
        days[label]++;
      }
    });

    const timeline = Object.entries(days).map(([date, count]) => ({ date, count }));

    const stats = {
      contacts: {
        total: contacts.length,
        new: contacts.filter((c) => !c.status || c.status === "new").length,
        contacted: contacts.filter((c) => c.status === "contacted").length,
        archived: contacts.filter((c) => c.status === "archived").length,
        starred: contacts.filter((c) => Boolean(c.isStarred)).length,
        today: contacts.filter((c) => new Date(c.createdAt) >= startOfToday).length,
      },
      reviews: {
        total: reviews.length,
        approved: reviews.filter((r) => r.isApproved).length,
        hidden: reviews.filter((r) => !r.isApproved).length,
        avgRating:
          reviews.length > 0
            ? (reviews.reduce((s, r) => s + (r.rating || 5), 0) / reviews.length).toFixed(1)
            : "5.0",
      },
      timeline,
      dbStatus: "Connected",
      serverTime: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, stats });
  } catch (error: any) {
    console.error("Admin stats fetch error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to fetch stats" },
      { status: 500 }
    );
  }
}

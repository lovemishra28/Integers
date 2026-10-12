import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { checkRequestAuth, isAuthenticated } from "@/lib/adminAuth";

export async function GET(request: Request) {
  try {
    const authed = checkRequestAuth(request) || (await isAuthenticated());
    if (!authed) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search")?.trim() || "";
    const status = searchParams.get("status") || "all";
    const starredOnly = searchParams.get("starred") === "true";

    const query: any = {};

    if (status && status !== "all") {
      if (status === "new") {
        query.$or = [{ status: "new" }, { status: { $exists: false } }, { status: null }];
      } else {
        query.status = status;
      }
    }

    if (starredOnly) {
      query.isStarred = true;
    }

    if (search) {
      const searchRegex = { $regex: search, $options: "i" };
      const searchMatch = [
        { firstName: searchRegex },
        { lastName: searchRegex },
        { phone: searchRegex },
        { message: searchRegex },
        { notes: searchRegex },
      ];

      if (query.$or) {
        query.$and = [{ $or: query.$or }, { $or: searchMatch }];
        delete query.$or;
      } else {
        query.$or = searchMatch;
      }
    }

    const contacts = await Contact.find(query).sort({ createdAt: -1 });

    const allContacts = await Contact.find({}, { createdAt: 1, status: 1, isStarred: 1 });
    const now = new Date();
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const stats = {
      total: allContacts.length,
      new: allContacts.filter((c) => !c.status || c.status === "new").length,
      contacted: allContacts.filter((c) => c.status === "contacted").length,
      archived: allContacts.filter((c) => c.status === "archived").length,
      starred: allContacts.filter((c) => Boolean(c.isStarred)).length,
      today: allContacts.filter((c) => new Date(c.createdAt) >= startOfToday).length,
    };

    return NextResponse.json({
      success: true,
      contacts,
      stats,
    });
  } catch (error: any) {
    console.error("Failed to fetch admin contacts:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to fetch messages" },
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

    const { firstName, lastName, phone, message, notes, status, isStarred } = body;

    if (!firstName || !lastName || !phone || !message) {
      return NextResponse.json(
        { error: "First Name, Last Name, Phone, and Message are required." },
        { status: 400 }
      );
    }

    const newContact = new Contact({
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      phone: String(phone).trim(),
      message: String(message).trim(),
      notes: notes ? String(notes).trim() : "",
      status: status || "new",
      isStarred: Boolean(isStarred),
    });

    await newContact.save();

    return NextResponse.json({ success: true, contact: newContact }, { status: 201 });
  } catch (error: any) {
    console.error("Failed to create contact:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to create message" },
      { status: 500 }
    );
  }
}

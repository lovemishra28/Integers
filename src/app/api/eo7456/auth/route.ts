import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import {
  verifyAdminPassword,
  generateToken,
  getAdminPassword,
  isAuthenticated,
  getClientIp,
  checkRateLimit,
  registerFailedAttempt,
  clearFailedAttempts,
  COOKIE_NAME,
} from "@/lib/adminAuth";

// GET: Check authentication status
export async function GET() {
  const authed = await isAuthenticated();
  return NextResponse.json({ authenticated: authed });
}

// POST: Log in with admin password + Rate limit protection
export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);

    // 1. Check Rate Limit / Brute-Force lockout
    const rateCheck = checkRateLimit(ip);
    if (rateCheck.limited) {
      return NextResponse.json(
        {
          error: `Too many failed attempts. Access temporarily locked. Please try again in ${rateCheck.retryAfterMinutes} minute(s).`,
          locked: true,
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { password } = body;

    if (!password || typeof password !== "string") {
      return NextResponse.json(
        { error: "Passcode is required" },
        { status: 400 }
      );
    }

    // 2. Validate password with timing-safe comparison
    if (!verifyAdminPassword(password)) {
      const attempt = registerFailedAttempt(ip);

      if (attempt.locked) {
        return NextResponse.json(
          {
            error: "Maximum failed attempts exceeded. Access locked for 15 minutes.",
            locked: true,
          },
          { status: 429 }
        );
      }

      return NextResponse.json(
        {
          error: `Incorrect admin passcode. ${attempt.remainingAttempts} attempt(s) remaining before security lockout.`,
        },
        { status: 401 }
      );
    }

    // 3. Clear failed attempts on successful login
    clearFailedAttempts(ip);

    const token = generateToken(getAdminPassword());
    const cookieStore = await cookies();

    cookieStore.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });

    return NextResponse.json({
      success: true,
      token,
      message: "Authenticated successfully",
    });
  } catch (error: any) {
    console.error("Admin auth error:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}

// DELETE: Logout
export async function DELETE() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
  return NextResponse.json({ success: true, message: "Logged out" });
}

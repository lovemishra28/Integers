import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "integers_admin_session";
const SECRET_SALT = "integers_agency_super_secret_admin_salt_2026_eo7456";

// Rate limiting in-memory store
type RateLimitRecord = {
  count: number;
  firstAttempt: number;
  lockedUntil: number | null;
};

const loginAttempts = new Map<string, RateLimitRecord>();
const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const LOCKOUT_MS = 15 * 60 * 1000; // 15 minutes

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

export function checkRateLimit(ip: string): { limited: boolean; retryAfterMinutes?: number } {
  const record = loginAttempts.get(ip);
  const now = Date.now();

  if (!record) {
    return { limited: false };
  }

  // Check if actively locked out
  if (record.lockedUntil && record.lockedUntil > now) {
    const diffMinutes = Math.ceil((record.lockedUntil - now) / 60000);
    return { limited: true, retryAfterMinutes: diffMinutes };
  }

  // If window expired, reset
  if (now - record.firstAttempt > WINDOW_MS) {
    loginAttempts.delete(ip);
    return { limited: false };
  }

  return { limited: false };
}

export function registerFailedAttempt(ip: string): {
  locked: boolean;
  remainingAttempts: number;
  retryAfterMinutes?: number;
} {
  const now = Date.now();
  let record = loginAttempts.get(ip);

  if (!record || now - record.firstAttempt > WINDOW_MS) {
    record = { count: 1, firstAttempt: now, lockedUntil: null };
    loginAttempts.set(ip, record);
    return { locked: false, remainingAttempts: MAX_ATTEMPTS - 1 };
  }

  record.count += 1;

  if (record.count >= MAX_ATTEMPTS) {
    record.lockedUntil = now + LOCKOUT_MS;
    loginAttempts.set(ip, record);
    return { locked: true, remainingAttempts: 0, retryAfterMinutes: 15 };
  }

  loginAttempts.set(ip, record);
  return { locked: false, remainingAttempts: MAX_ATTEMPTS - record.count };
}

export function clearFailedAttempts(ip: string): void {
  loginAttempts.delete(ip);
}

export function getAdminPassword(): string {
  return process.env.ADMIN_PASSWORD || "dream2026";
}

export function generateToken(password: string): string {
  return crypto
    .createHmac("sha256", SECRET_SALT)
    .update(password)
    .digest("hex");
}

export function verifyAdminPassword(input: string): boolean {
  const expected = getAdminPassword();
  const inputTrimmed = input.trim();
  const expectedTrimmed = expected.trim();

  // Timing-safe comparison to prevent timing attacks
  const inputBuffer = Buffer.from(inputTrimmed);
  const expectedBuffer = Buffer.from(expectedTrimmed);

  if (inputBuffer.length !== expectedBuffer.length) {
    // Constant time dummy check to avoid fast-fail leakage
    crypto.timingSafeEqual(expectedBuffer, expectedBuffer);
    return false;
  }

  return crypto.timingSafeEqual(inputBuffer, expectedBuffer);
}

export function verifyToken(token: string): boolean {
  if (!token) return false;
  const expectedToken = generateToken(getAdminPassword());
  
  const tokenBuf = Buffer.from(token);
  const expectedBuf = Buffer.from(expectedToken);

  if (tokenBuf.length !== expectedBuf.length) {
    return false;
  }

  return crypto.timingSafeEqual(tokenBuf, expectedBuf);
}

export async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (token && verifyToken(token)) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export function checkRequestAuth(request: Request): boolean {
  // Check Authorization header
  const authHeader = request.headers.get("authorization");
  if (authHeader && authHeader.startsWith("Bearer ")) {
    const token = authHeader.substring(7);
    if (verifyToken(token)) return true;
  }

  // Check cookie header directly
  const cookieHeader = request.headers.get("cookie");
  if (cookieHeader) {
    const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
    if (match && match[1]) {
      const decoded = decodeURIComponent(match[1]);
      if (verifyToken(decoded)) return true;
    }
  }

  return false;
}

export { COOKIE_NAME };

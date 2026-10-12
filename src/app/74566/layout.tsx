import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Integers | Control Panel",
  description: "Secure control panel to monitor inquiries, manage customer messages, and moderate reviews.",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white antialiased selection:bg-[#d4ff3f] selection:text-black font-sans">
      {children}
    </div>
  );
}

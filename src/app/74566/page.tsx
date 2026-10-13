"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignOutAlt,
  FaSyncAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaCheck,
  FaTrash,
  FaStar,
  FaRegStar,
  FaSearch,
  FaDownload,
  FaPlus,
  FaVolumeUp,
  FaVolumeMute,
  FaExternalLinkAlt,
  FaCommentDots,
  FaCheckCircle,
  FaExclamationCircle,
  FaTimes,
  FaEdit,
  FaPaperPlane,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/integersdev_lime_icon.png";

// Types
interface ContactItem {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
  status?: "new" | "read" | "contacted" | "archived";
  notes?: string;
  isStarred?: boolean;
  createdAt: string;
  updatedAt: string;
}

interface ReviewItem {
  _id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  isApproved: boolean;
  createdAt: string;
}

interface StatsData {
  contacts: {
    total: number;
    new: number;
    contacted: number;
    archived: number;
    starred: number;
    today: number;
  };
  reviews: {
    total: number;
    approved: number;
    hidden: number;
    avgRating: string;
  };
  timeline?: { date: string; count: number }[];
  dbStatus?: string;
}

const API_BASE = "/api/eo7456";

export default function AdminDashboardPage() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Active Tab
  const [activeTab, setActiveTab] = useState<"messages" | "reviews" | "analytics" | "tools">("messages");

  // Data states
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [stats, setStats] = useState<StatsData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null);

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "new" | "contacted" | "archived" | "starred">("all");
  const [reviewFilter, setReviewFilter] = useState<"all" | "approved" | "hidden">("all");

  // Auto-refresh interval (in seconds, 0 = off)
  const [autoRefreshSecs, setAutoRefreshSecs] = useState<number>(30);
  const [countdown, setCountdown] = useState<number>(30);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Modals state
  const [deleteConfirmId, setDeleteConfirmId] = useState<{ type: "contact" | "review"; id: string; title: string } | null>(null);
  const [isAddReviewOpen, setIsAddReviewOpen] = useState(false);
  const [isAddLeadOpen, setIsAddLeadOpen] = useState(false);
  const [activeNoteEditId, setActiveNoteEditId] = useState<string | null>(null);
  const [noteContent, setNoteContent] = useState("");

  // New review form
  const [newReviewForm, setNewReviewForm] = useState({
    name: "",
    role: "Client",
    text: "",
    rating: 5,
    isApproved: true,
  });

  // Manual lead form
  const [newLeadForm, setNewLeadForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
    notes: "",
  });

  // Previous contact count tracker for sound trigger
  const prevContactCount = useRef<number | null>(null);

  // Synthesized notification sound using Web Audio API
  const playAlertSound = useCallback(() => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5

      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } catch {
      // Audio autoplay policy or unavailable
    }
  }, [soundEnabled]);

  // Check auth on initial mount
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch(`${API_BASE}/auth`);
        const data = await res.json();
        setIsAuthenticated(Boolean(data.authenticated));
      } catch {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  // Fetch all dashboard data
  const fetchData = useCallback(async (isSilent = false) => {
    if (!isSilent) setIsLoading(true);
    try {
      const [contactsRes, reviewsRes, statsRes] = await Promise.all([
        fetch(`${API_BASE}/contacts`),
        fetch(`${API_BASE}/reviews`),
        fetch(`${API_BASE}/stats`),
      ]);

      if (contactsRes.status === 401 || reviewsRes.status === 401) {
        setIsAuthenticated(false);
        return;
      }

      const contactsData = await contactsRes.json();
      const reviewsData = await reviewsRes.json();
      const statsData = await statsRes.json();

      if (contactsData.success) {
        const fetchedContacts: ContactItem[] = contactsData.contacts || [];
        
        // Check if there are new unread contacts to alert
        if (prevContactCount.current !== null && fetchedContacts.length > prevContactCount.current) {
          playAlertSound();
        }
        prevContactCount.current = fetchedContacts.length;
        setContacts(fetchedContacts);
      }

      if (reviewsData.success) {
        setReviews(reviewsData.reviews || []);
      }

      if (statsData.success) {
        setStats(statsData.stats);
      }

      setLastRefreshed(new Date());
      setCountdown(autoRefreshSecs);
    } catch (err) {
      console.error("Dashboard fetch failed:", err);
    } finally {
      if (!isSilent) setIsLoading(false);
    }
  }, [autoRefreshSecs, playAlertSound]);

  // Trigger fetch once authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated, fetchData]);

  // Auto-refresh countdown timer
  useEffect(() => {
    if (!isAuthenticated || autoRefreshSecs === 0) return;

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          fetchData(true);
          return autoRefreshSecs;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isAuthenticated, autoRefreshSecs, fetchData]);

  // Handle Login
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");

    try {
      const res = await fetch(`${API_BASE}/auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: passwordInput }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setPasswordInput("");
      } else {
        setLoginError(data.error || "Incorrect admin passcode.");
      }
    } catch {
      setLoginError("Network error. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  }

  // Handle Logout
  async function handleLogout() {
    try {
      await fetch(`${API_BASE}/auth`, { method: "DELETE" });
    } catch {}
    setIsAuthenticated(false);
  }

  // Update contact status
  async function handleUpdateContactStatus(id: string, newStatus: "new" | "read" | "contacted" | "archived") {
    // Optimistic update
    setContacts((prev) =>
      prev.map((c) => (c._id === id ? { ...c, status: newStatus } : c))
    );

    try {
      await fetch(`${API_BASE}/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      fetchData(true);
    } catch (error) {
      console.error("Update failed:", error);
    }
  }

  // Toggle contact starred
  async function handleToggleStar(id: string, currentStarred?: boolean) {
    const nextVal = !currentStarred;
    setContacts((prev) =>
      prev.map((c) => (c._id === id ? { ...c, isStarred: nextVal } : c))
    );

    try {
      await fetch(`${API_BASE}/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isStarred: nextVal }),
      });
    } catch (error) {
      console.error("Star toggle failed:", error);
    }
  }

  // Save notes for contact
  async function handleSaveNote(id: string) {
    try {
      await fetch(`${API_BASE}/contacts/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notes: noteContent }),
      });
      setContacts((prev) =>
        prev.map((c) => (c._id === id ? { ...c, notes: noteContent } : c))
      );
      setActiveNoteEditId(null);
    } catch (err) {
      console.error("Save note failed:", err);
    }
  }

  // Delete contact or review confirmed
  async function handleConfirmDelete() {
    if (!deleteConfirmId) return;
    const { type, id } = deleteConfirmId;

    try {
      if (type === "contact") {
        setContacts((prev) => prev.filter((c) => c._id !== id));
        await fetch(`${API_BASE}/contacts/${id}`, { method: "DELETE" });
      } else {
        setReviews((prev) => prev.filter((r) => r._id !== id));
        await fetch(`${API_BASE}/reviews/${id}`, { method: "DELETE" });
      }
      fetchData(true);
    } catch (err) {
      console.error("Delete failed:", err);
    } finally {
      setDeleteConfirmId(null);
    }
  }

  // Toggle review approval
  async function handleToggleReviewApproval(id: string, current: boolean) {
    const nextVal = !current;
    setReviews((prev) =>
      prev.map((r) => (r._id === id ? { ...r, isApproved: nextVal } : r))
    );

    try {
      await fetch(`${API_BASE}/reviews/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isApproved: nextVal }),
      });
      fetchData(true);
    } catch (err) {
      console.error("Review toggle failed:", err);
    }
  }

  // Create review
  async function handleCreateReview(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReviewForm),
      });
      const data = await res.json();
      if (data.success) {
        setIsAddReviewOpen(false);
        setNewReviewForm({
          name: "",
          role: "Client",
          text: "",
          rating: 5,
          isApproved: true,
        });
        fetchData(true);
      }
    } catch (err) {
      console.error("Create review failed:", err);
    }
  }

  // Create manual contact lead
  async function handleCreateLead(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newLeadForm,
          status: "new",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAddLeadOpen(false);
        setNewLeadForm({
          firstName: "",
          lastName: "",
          phone: "",
          message: "",
          notes: "",
        });
        fetchData(true);
      }
    } catch (err) {
      console.error("Create lead failed:", err);
    }
  }

  // Mark all as read
  async function handleMarkAllAsRead() {
    const unread = contacts.filter((c) => !c.status || c.status === "new");
    if (unread.length === 0) return;

    setContacts((prev) =>
      prev.map((c) => (!c.status || c.status === "new" ? { ...c, status: "read" } : c))
    );

    for (const c of unread) {
      try {
        await fetch(`${API_BASE}/contacts/${c._id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "read" }),
        });
      } catch {}
    }
    fetchData(true);
  }

  // Export to CSV
  function exportContactsToCSV() {
    if (contacts.length === 0) return;

    const headers = ["ID", "First Name", "Last Name", "Phone", "Message", "Status", "Notes", "Created At"];
    const rows = filteredContacts.map((c) => [
      `"${c._id}"`,
      `"${c.firstName.replace(/"/g, '""')}"`,
      `"${c.lastName.replace(/"/g, '""')}"`,
      `"${c.phone.replace(/"/g, '""')}"`,
      `"${c.message.replace(/"/g, '""')}"`,
      `"${c.status || "new"}"`,
      `"${(c.notes || "").replace(/"/g, '""')}"`,
      `"${new Date(c.createdAt).toLocaleString()}"`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `integers_messages_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Format relative timestamp
  const formatTimeAgo = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffSec = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffSec < 60) return "Just now";
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
    if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
    if (diffSec < 172800) return "Yesterday";
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  // Helper to format clean phone for WhatsApp
  const formatWhatsAppUrl = (phone: string, name: string, msg: string) => {
    let clean = phone.replace(/[^0-9]/g, "");
    if (clean.length === 10) {
      clean = "91" + clean; // Default to India code +91 if standard 10-digit
    }
    const snippet = msg.length > 50 ? msg.slice(0, 47) + "..." : msg;
    const text = encodeURIComponent(`Hi ${name}! This is IntegersDev regarding your website inquiry: "${snippet}". We would love to discuss your project!`);
    return `https://wa.me/${clean}?text=${text}`;
  };

  // Filtered contacts calculation
  const filteredContacts = useMemo(() => {
    return contacts.filter((c) => {
      // Status filter
      if (statusFilter === "new") {
        if (c.status && c.status !== "new") return false;
      } else if (statusFilter === "starred") {
        if (!c.isStarred) return false;
      } else if (statusFilter !== "all") {
        if (c.status !== statusFilter) return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const fullName = `${c.firstName} ${c.lastName}`.toLowerCase();
        const matchName = fullName.includes(q);
        const matchPhone = c.phone.toLowerCase().includes(q);
        const matchMsg = c.message.toLowerCase().includes(q);
        const matchNotes = (c.notes || "").toLowerCase().includes(q);
        if (!matchName && !matchPhone && !matchMsg && !matchNotes) return false;
      }

      return true;
    });
  }, [contacts, statusFilter, searchQuery]);

  // Filtered reviews calculation
  const filteredReviews = useMemo(() => {
    return reviews.filter((r) => {
      if (reviewFilter === "approved" && !r.isApproved) return false;
      if (reviewFilter === "hidden" && r.isApproved) return false;
      return true;
    });
  }, [reviews, reviewFilter]);

  // Counts
  const unreadCount = useMemo(() => {
    return contacts.filter((c) => !c.status || c.status === "new").length;
  }, [contacts]);

  // Loading initial auth state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0e0e0e]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#d4ff3f] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-400 font-bold text-sm tracking-wider uppercase">Loading IntegersDev Admin...</p>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // LOGIN SCREEN
  // --------------------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-[#0e0e0e] text-white">
        {/* Subtle background glow */}
        <div className="absolute w-96 h-96 bg-[#d4ff3f]/10 rounded-full blur-[120px] pointer-events-none -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-[#d4ff3f]/5 rounded-full blur-[140px] pointer-events-none -bottom-20 -right-20"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-[#161616] border-2 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_#d4ff3f] relative z-10"
        >
          {/* Logo & Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-10 h-10 bg-white rounded-xl p-1.5 border border-black flex items-center justify-center">
              <Image src={logo} alt="IntegersDev Control Panel Logo" fill className="object-contain p-1" />
            </div>
            <div>
              <h1 className="text-xl font-black text-white tracking-tight flex items-center gap-2">
                IntegersDev
                <span className="bg-[#d4ff3f] text-black text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border border-black">
                  Admin
                </span>
              </h1>
              <p className="text-xs text-gray-400 font-medium">Messages & Website Dashboard</p>
            </div>
          </div>

          <div className="border-t border-gray-800 my-5"></div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Admin Security Passcode
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                  <FaLock className="w-3.5 h-3.5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter admin passcode"
                  required
                  autoFocus
                  className="w-full bg-[#1e1e1e] border-2 border-gray-700 rounded-xl pl-10 pr-10 py-3 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-600 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-white cursor-pointer"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="bg-red-500/15 border border-red-500/50 text-red-300 text-xs p-3 rounded-xl flex items-center gap-2 font-medium">
                <FaExclamationCircle className="w-4 h-4 flex-shrink-0 text-red-400" />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full bg-[#d4ff3f] hover:bg-[#bce332] active:scale-[0.98] text-black font-extrabold text-sm py-3.5 px-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_#000] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoggingIn ? (
                <>
                  <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Authenticating...</span>
                </>
              ) : (
                <>
                  <span>Unlock Admin Dashboard</span>
                  <span className="text-black font-black">→</span>
                </>
              )}
            </button>
          </form>

          {/* Return to website */}
          <div className="mt-6 pt-4 border-t border-gray-800/80 text-center">
            <Link href="/" className="text-xs text-gray-500 hover:text-white transition-colors underline">
              ← Return to Public Website
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // AUTHENTICATED DASHBOARD
  // --------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#141414]/95 backdrop-blur-md border-b-2 border-black px-4 sm:px-8 py-3.5 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 bg-white rounded-lg p-1 border border-black flex items-center justify-center">
                <Image src={logo} alt="IntegersDev Control Panel Logo" fill className="object-contain p-0.5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-lg tracking-tight text-white">IntegersDev</span>
                  <span className="bg-[#d4ff3f] text-black text-[9px] font-black uppercase px-2 py-0.5 rounded border border-black shadow-[1px_1px_0px_0px_#000]">
                    Admin Panel
                  </span>
                </div>
              </div>
            </div>

            {/* Live Database status pill */}
            <div className="flex items-center gap-2 bg-[#1c1c1c] border border-gray-700 px-2.5 py-1 rounded-full text-xs">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
              <span className="text-[11px] font-bold text-gray-300">Live DB</span>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-end flex-wrap">
            {/* Audio Toggle */}
            <button
              type="button"
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Sound Alert On" : "Sound Alert Off"}
              className={`p-2 rounded-xl border-2 border-black text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#000] ${
                soundEnabled
                  ? "bg-[#d4ff3f] text-black"
                  : "bg-[#222] text-gray-400 hover:text-white"
              }`}
            >
              {soundEnabled ? <FaVolumeUp className="w-3.5 h-3.5" /> : <FaVolumeMute className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{soundEnabled ? "Alerts On" : "Muted"}</span>
            </button>

            {/* Auto Refresh Toggle Dropdown */}
            <div className="flex items-center bg-[#222] border-2 border-black rounded-xl p-1 text-xs font-bold shadow-[2px_2px_0px_0px_#000]">
              <span className="text-gray-400 px-2 text-[11px] hidden lg:inline">Auto-Sync:</span>
              <select
                value={autoRefreshSecs}
                onChange={(e) => setAutoRefreshSecs(Number(e.target.value))}
                className="bg-transparent text-white font-bold text-xs focus:outline-none cursor-pointer pr-1"
              >
                <option value={10} className="bg-[#1c1c1c] text-white">10s</option>
                <option value={30} className="bg-[#1c1c1c] text-white">30s</option>
                <option value={60} className="bg-[#1c1c1c] text-white">60s</option>
                <option value={0} className="bg-[#1c1c1c] text-white">Off</option>
              </select>
              {autoRefreshSecs > 0 && (
                <span className="text-[#d4ff3f] font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/40 ml-1">
                  {countdown}s
                </span>
              )}
            </div>

            {/* Manual Refresh Button */}
            <button
              type="button"
              onClick={() => fetchData()}
              disabled={isLoading}
              title="Refresh messages now"
              className="p-2 sm:px-3 sm:py-2 bg-white text-black font-extrabold text-xs rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-gray-100 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
            >
              <FaSyncAlt className={`w-3 h-3 ${isLoading ? "animate-spin text-[#141414]" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>

            {/* Live Website link */}
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:px-3 sm:py-2 bg-[#1c1c1c] hover:bg-[#252525] text-gray-200 text-xs font-bold rounded-xl border border-gray-700 hover:border-white transition-all flex items-center gap-1.5"
            >
              <span className="hidden md:inline">Public Site</span>
              <FaExternalLinkAlt className="w-2.5 h-2.5" />
            </Link>

            {/* Sign Out */}
            <button
              type="button"
              onClick={handleLogout}
              className="p-2 sm:px-3 sm:py-2 bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white border border-red-500/40 font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <FaSignOutAlt className="w-3 h-3" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 md:p-8 space-y-6">
        
        {/* Metric Cards Row */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
          
          {/* Card 1: New / Unread Inquiries */}
          <div className="bg-[#181818] border-2 border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#d4ff3f] relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-gray-400">
                New Messages
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#d4ff3f] animate-ping"></span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#d4ff3f] font-mono">
              {unreadCount}
            </div>
            <p className="text-[11px] text-gray-400 mt-1 font-medium">
              Awaiting review & response
            </p>
          </div>

          {/* Card 2: Total Inquiries */}
          <div className="bg-[#181818] border-2 border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#333]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-gray-400">
                Total Inquiries
              </span>
              <span className="text-xs font-bold text-gray-500">📁</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono">
              {contacts.length}
            </div>
            <p className="text-[11px] text-gray-400 mt-1 font-medium">
              +{stats?.contacts?.today || 0} received today
            </p>
          </div>

          {/* Card 3: Contacted / Replied Leads */}
          <div className="bg-[#181818] border-2 border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#333]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-gray-400">
                Contacted Leads
              </span>
              <span className="text-xs font-bold text-[#10b981]">✓</span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-[#10b981] font-mono">
              {contacts.filter((c) => c.status === "contacted").length}
            </div>
            <p className="text-[11px] text-gray-400 mt-1 font-medium">
              Follow-ups initiated
            </p>
          </div>

          {/* Card 4: Reviews & Rating */}
          <div className="bg-[#181818] border-2 border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#333]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-gray-400">
                Client Reviews
              </span>
              <span className="text-xs text-[#ff9d00] flex items-center">
                <FaStar className="w-3 h-3 fill-current" />
              </span>
            </div>
            <div className="text-3xl sm:text-4xl font-black text-white font-mono flex items-baseline gap-2">
              <span>{reviews.length}</span>
              <span className="text-sm font-bold text-[#ff9d00]">
                ★ {stats?.reviews?.avgRating || "5.0"}
              </span>
            </div>
            <p className="text-[11px] text-gray-400 mt-1 font-medium">
              {reviews.filter((r) => r.isApproved).length} approved on website
            </p>
          </div>

        </section>

        {/* Tab Switcher Header */}
        <section className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b-2 border-gray-800 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {[
              { id: "messages", label: "Website Messages", badge: unreadCount, icon: <FaCommentDots className="w-3.5 h-3.5" /> },
              { id: "reviews", label: "Client Testimonials", count: reviews.length, icon: <FaStar className="w-3.5 h-3.5" /> },
              { id: "analytics", label: "Analytics & Trends", icon: <FaCheckCircle className="w-3.5 h-3.5" /> },
              { id: "tools", label: "Quick Test & Tools", icon: <FaPaperPlane className="w-3.5 h-3.5" /> },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 border-2 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#d4ff3f] text-black border-black shadow-[3px_3px_0px_0px_#000]"
                      : "bg-[#181818] text-gray-400 border-gray-800 hover:text-white hover:border-gray-700"
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  {tab.badge !== undefined && tab.badge > 0 && (
                    <span className="bg-black text-[#d4ff3f] text-[10px] font-black px-1.5 py-0.2 rounded-full">
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Action Buttons for currently active tab */}
          <div className="flex items-center gap-2">
            {activeTab === "messages" && (
              <>
                <button
                  type="button"
                  onClick={exportContactsToCSV}
                  title="Download CSV"
                  className="px-3 py-2 bg-[#202020] hover:bg-[#282828] text-gray-200 text-xs font-bold rounded-xl border border-gray-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <FaDownload className="w-3 h-3 text-[#d4ff3f]" />
                  <span>Export CSV</span>
                </button>

                <button
                  type="button"
                  onClick={handleMarkAllAsRead}
                  disabled={unreadCount === 0}
                  className="px-3 py-2 bg-[#202020] hover:bg-[#282828] text-gray-200 text-xs font-bold rounded-xl border border-gray-700 transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
                >
                  <FaCheck className="w-3 h-3 text-[#10b981]" />
                  <span>Mark All Read</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsAddLeadOpen(true)}
                  className="px-3.5 py-2 bg-[#d4ff3f] hover:bg-[#bce332] text-black text-xs font-extrabold rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center gap-1.5 cursor-pointer"
                >
                  <FaPlus className="w-3 h-3" />
                  <span>New Lead</span>
                </button>
              </>
            )}

            {activeTab === "reviews" && (
              <button
                type="button"
                onClick={() => setIsAddReviewOpen(true)}
                className="px-3.5 py-2 bg-[#d4ff3f] hover:bg-[#bce332] text-black text-xs font-extrabold rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center gap-1.5 cursor-pointer"
              >
                <FaPlus className="w-3 h-3" />
                <span>Add Testimonial</span>
              </button>
            )}
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* TAB 1: WEBSITE MESSAGES & INQUIRIES */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "messages" && (
          <section className="space-y-4">
            
            {/* Search and Filters Bar */}
            <div className="bg-[#161616] border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0px_0px_#222] flex flex-col md:flex-row items-center justify-between gap-4">
              
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 w-3.5 h-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search sender, phone, message content..."
                  className="w-full bg-[#202020] border border-gray-700 rounded-xl pl-10 pr-8 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#d4ff3f] transition-colors"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    <FaTimes className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Status Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
                {[
                  { id: "all", label: "All Messages", count: contacts.length },
                  { id: "new", label: "Unread", count: unreadCount, highlight: true },
                  { id: "contacted", label: "Contacted", count: contacts.filter((c) => c.status === "contacted").length },
                  { id: "archived", label: "Archived", count: contacts.filter((c) => c.status === "archived").length },
                  { id: "starred", label: "Starred ★", count: contacts.filter((c) => c.isStarred).length },
                ].map((pill) => {
                  const isSelected = statusFilter === pill.id;
                  return (
                    <button
                      key={pill.id}
                      type="button"
                      onClick={() => setStatusFilter(pill.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                        isSelected
                          ? "bg-white text-black border border-black shadow-[2px_2px_0px_0px_#000]"
                          : "bg-[#222] text-gray-400 hover:text-white border border-gray-800"
                      }`}
                    >
                      <span>{pill.label}</span>
                      <span
                        className={`text-[10px] font-mono px-1 rounded ${
                          isSelected ? "bg-black text-white" : "bg-[#181818] text-gray-400"
                        }`}
                      >
                        {pill.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inquiries List */}
            {filteredContacts.length === 0 ? (
              <div className="bg-[#161616] border-2 border-dashed border-gray-800 rounded-3xl p-12 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#202020] flex items-center justify-center text-gray-500 text-xl">
                  ✉️
                </div>
                <h3 className="text-base font-bold text-gray-200">No messages match this filter</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  {searchQuery
                    ? `No inquiries found containing "${searchQuery}". Try clearing search keywords.`
                    : "When clients fill out the contact form on your website, their messages will appear here in real-time."}
                </p>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setStatusFilter("all");
                    }}
                    className="mt-2 px-4 py-2 bg-[#d4ff3f] text-black font-bold text-xs rounded-xl"
                  >
                    Clear Filter
                  </button>
                )}
              </div>
            ) : (
              <div className="space-y-3.5">
                <AnimatePresence>
                  {filteredContacts.map((contact) => {
                    const isNew = !contact.status || contact.status === "new";
                    const isContacted = contact.status === "contacted";
                    const isArchived = contact.status === "archived";
                    const isEditingNote = activeNoteEditId === contact._id;

                    return (
                      <motion.div
                        key={contact._id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        layout
                        className={`bg-[#161616] border-2 rounded-2xl p-5 md:p-6 transition-all shadow-md relative ${
                          isNew
                            ? "border-[#d4ff3f] shadow-[4px_4px_0px_0px_#d4ff3f]"
                            : "border-gray-800 hover:border-gray-700 shadow-[3px_3px_0px_0px_#000]"
                        }`}
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                          
                          {/* Sender Identity & Status Badge */}
                          <div className="flex items-start gap-3.5">
                            {/* Avatar */}
                            <div
                              className={`w-11 h-11 rounded-xl flex items-center justify-center font-black text-sm border-2 border-black flex-shrink-0 shadow-[2px_2px_0px_0px_#000] ${
                                isNew
                                  ? "bg-[#d4ff3f] text-black"
                                  : "bg-[#252525] text-white"
                              }`}
                            >
                              {contact.firstName.charAt(0).toUpperCase()}
                              {contact.lastName.charAt(0).toUpperCase()}
                            </div>

                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-extrabold text-base text-white">
                                  {contact.firstName} {contact.lastName}
                                </h3>

                                {/* Star Toggle */}
                                <button
                                  type="button"
                                  onClick={() => handleToggleStar(contact._id, contact.isStarred)}
                                  className="text-gray-500 hover:text-[#ff9d00] transition-colors cursor-pointer"
                                  title={contact.isStarred ? "Starred VIP lead" : "Star lead"}
                                >
                                  {contact.isStarred ? (
                                    <FaStar className="w-4 h-4 text-[#ff9d00]" />
                                  ) : (
                                    <FaRegStar className="w-4 h-4" />
                                  )}
                                </button>

                                {/* Status Pill Badge */}
                                <span
                                  className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                                    isNew
                                      ? "bg-[#d4ff3f] text-black border-black"
                                      : isContacted
                                      ? "bg-[#10b981]/20 text-[#10b981] border-[#10b981]/40"
                                      : isArchived
                                      ? "bg-gray-800 text-gray-400 border-gray-700"
                                      : "bg-blue-500/20 text-blue-300 border-blue-500/40"
                                  }`}
                                >
                                  {contact.status || "NEW INQUIRY"}
                                </span>
                              </div>

                              {/* Timestamp details */}
                              <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                                <span className="font-semibold text-gray-300">
                                  {formatTimeAgo(contact.createdAt)}
                                </span>
                                <span>•</span>
                                <span>
                                  {new Date(contact.createdAt).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Action Buttons: Call, WhatsApp, Status Cycle, Delete */}
                          <div className="flex items-center gap-2 flex-wrap justify-end">
                            {/* Direct Phone Call */}
                            <a
                              href={`tel:${contact.phone}`}
                              className="px-3 py-1.5 bg-[#222] hover:bg-white hover:text-black text-gray-200 text-xs font-bold rounded-xl border border-gray-700 hover:border-black transition-all flex items-center gap-1.5 shadow-[1px_1px_0px_0px_#000]"
                              title={`Call ${contact.phone}`}
                            >
                              <FaPhoneAlt className="w-3 h-3 text-[#10b981]" />
                              <span>{contact.phone}</span>
                            </a>

                            {/* Direct WhatsApp Action */}
                            <a
                              href={formatWhatsAppUrl(contact.phone, contact.firstName, contact.message)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-1.5 bg-[#25d366] hover:bg-[#20ba59] text-black text-xs font-black rounded-xl border-2 border-black transition-all flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#000]"
                              title="Chat with client on WhatsApp"
                            >
                              <FaWhatsapp className="w-3.5 h-3.5" />
                              <span>WhatsApp</span>
                            </a>

                            {/* Status Selector Dropdown */}
                            <select
                              value={contact.status || "new"}
                              onChange={(e) => handleUpdateContactStatus(contact._id, e.target.value as any)}
                              className="bg-[#202020] text-gray-200 text-xs font-bold px-2.5 py-1.5 rounded-xl border border-gray-700 focus:outline-none focus:border-[#d4ff3f] cursor-pointer"
                            >
                              <option value="new">🟡 Mark New</option>
                              <option value="read">🔵 Mark Read</option>
                              <option value="contacted">🟢 Contacted</option>
                              <option value="archived">⚪ Archived</option>
                            </select>

                            {/* Delete Button */}
                            <button
                              type="button"
                              onClick={() =>
                                setDeleteConfirmId({
                                  type: "contact",
                                  id: contact._id,
                                  title: `inquiry from ${contact.firstName} ${contact.lastName}`,
                                })
                              }
                              className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-colors cursor-pointer"
                              title="Delete message"
                            >
                              <FaTrash className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                        {/* The Client Message Body */}
                        <div className="mt-4 pt-4 border-t border-gray-800">
                          <div className="text-[11px] font-black uppercase tracking-wider text-gray-500 mb-1.5">
                            Message Content:
                          </div>
                          <div className="bg-[#1c1c1c] border border-gray-800 rounded-xl p-4 text-sm text-gray-200 leading-relaxed font-medium whitespace-pre-wrap select-text">
                            "{contact.message}"
                          </div>
                        </div>

                        {/* Admin Internal Notes Section */}
                        <div className="mt-3.5">
                          {isEditingNote ? (
                            <div className="space-y-2 bg-[#1b1b1b] border border-gray-700 rounded-xl p-3">
                              <label className="block text-[10px] font-black uppercase text-gray-400">
                                Internal Admin Note:
                              </label>
                              <textarea
                                value={noteContent}
                                onChange={(e) => setNoteContent(e.target.value)}
                                rows={2}
                                placeholder="Add client notes (budget discussed, requirements, follow-up date)..."
                                className="w-full bg-[#141414] border border-gray-700 rounded-lg p-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-[#d4ff3f]"
                              />
                              <div className="flex justify-end gap-2">
                                <button
                                  type="button"
                                  onClick={() => setActiveNoteEditId(null)}
                                  className="px-3 py-1 text-xs text-gray-400 hover:text-white"
                                >
                                  Cancel
                                </button>
                                <button
                                  type="button"
                                  onClick={() => handleSaveNote(contact._id)}
                                  className="px-3 py-1 bg-[#d4ff3f] text-black font-bold text-xs rounded-lg border border-black shadow-[1px_1px_0px_0px_#000]"
                                >
                                  Save Note
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between text-xs">
                              <div className="flex items-center gap-2 text-gray-400">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                                  Notes:
                                </span>
                                {contact.notes ? (
                                  <span className="text-gray-300 font-medium italic">
                                    "{contact.notes}"
                                  </span>
                                ) : (
                                  <span className="text-gray-600 italic">No notes added</span>
                                )}
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveNoteEditId(contact._id);
                                  setNoteContent(contact.notes || "");
                                }}
                                className="text-[11px] font-bold text-[#d4ff3f] hover:underline flex items-center gap-1 cursor-pointer"
                              >
                                <FaEdit className="w-2.5 h-2.5" />
                                <span>{contact.notes ? "Edit Note" : "+ Add Note"}</span>
                              </button>
                            </div>
                          )}
                        </div>

                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            )}
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 2: REVIEWS MODERATION */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "reviews" && (
          <section className="space-y-4">
            
            {/* Reviews Filter Bar */}
            <div className="bg-[#161616] border-2 border-black rounded-2xl p-4 shadow-[4px_4px_0px_0px_#222] flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Filter Testimonials:
                </span>
                <div className="flex gap-1.5">
                  {[
                    { id: "all", label: "All Reviews" },
                    { id: "approved", label: "Approved on Site" },
                    { id: "hidden", label: "Hidden / Drafts" },
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setReviewFilter(filter.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                        reviewFilter === filter.id
                          ? "bg-white text-black border border-black shadow-[2px_2px_0px_0px_#000]"
                          : "bg-[#222] text-gray-400 hover:text-white"
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-xs text-gray-400 font-medium">
                Showing {filteredReviews.length} of {reviews.length} total reviews
              </div>
            </div>

            {/* Reviews Grid */}
            {filteredReviews.length === 0 ? (
              <div className="bg-[#161616] border-2 border-dashed border-gray-800 rounded-3xl p-12 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#202020] flex items-center justify-center text-gray-500 text-xl">
                  ⭐
                </div>
                <h3 className="text-base font-bold text-gray-200">No testimonials found</h3>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Add reviews submitted by your satisfied clients so they can be proudly displayed on the website.
                </p>
                <button
                  type="button"
                  onClick={() => setIsAddReviewOpen(true)}
                  className="mt-2 px-4 py-2 bg-[#d4ff3f] text-black font-bold text-xs rounded-xl"
                >
                  + Add First Testimonial
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredReviews.map((review) => (
                  <div
                    key={review._id}
                    className={`bg-[#161616] border-2 rounded-2xl p-5 transition-all shadow-md flex flex-col justify-between ${
                      review.isApproved
                        ? "border-gray-800 hover:border-gray-700 shadow-[3px_3px_0px_0px_#000]"
                        : "border-amber-500/40 bg-[#161410]"
                    }`}
                  >
                    <div>
                      {/* Review Card Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h4 className="font-bold text-base text-white">{review.name}</h4>
                          <span className="text-xs text-gray-400 font-medium">{review.role}</span>
                        </div>

                        {/* Star Rating Display */}
                        <div className="flex items-center text-[#ff9d00] gap-0.5 bg-[#222] px-2.5 py-1 rounded-full border border-gray-800">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar
                              key={i}
                              className={`w-3 h-3 ${
                                i < review.rating ? "text-[#ff9d00]" : "text-gray-700"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed bg-[#1c1c1c] p-3 rounded-xl border border-gray-800">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Bottom Controls */}
                    <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleToggleReviewApproval(review._id, review.isApproved)}
                          className={`px-3 py-1 rounded-lg font-bold text-xs border transition-colors flex items-center gap-1.5 cursor-pointer ${
                            review.isApproved
                              ? "bg-[#10b981]/20 text-[#10b981] border-[#10b981]/50 hover:bg-[#10b981]/30"
                              : "bg-gray-800 text-gray-400 border-gray-700 hover:text-white"
                          }`}
                        >
                          <span className={`w-2 h-2 rounded-full ${review.isApproved ? "bg-[#10b981]" : "bg-gray-500"}`}></span>
                          <span>{review.isApproved ? "Approved (Live on Site)" : "Hidden (Draft)"}</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-gray-500">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setDeleteConfirmId({
                              type: "review",
                              id: review._id,
                              title: `testimonial by ${review.name}`,
                            })
                          }
                          className="p-1.5 text-gray-500 hover:text-red-400 rounded-lg cursor-pointer transition-colors"
                          title="Delete review"
                        >
                          <FaTrash className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 3: ANALYTICS & TRENDS */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "analytics" && (
          <section className="space-y-6">
            
            {/* 7-Day Inquiries Chart Card */}
            <div className="bg-[#161616] border-2 border-black rounded-3xl p-6 md:p-8 shadow-[4px_4px_0px_0px_#222]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-lg font-black text-white">7-Day Website Inquiry Activity</h3>
                  <p className="text-xs text-gray-400 font-medium">
                    Incoming leads timeline over the past 7 days
                  </p>
                </div>
                <div className="bg-[#222] border border-gray-700 px-3 py-1 rounded-full text-xs font-bold text-[#d4ff3f]">
                  Total: {contacts.length} Inquiries
                </div>
              </div>

              {/* Chart Bars */}
              <div className="grid grid-cols-7 gap-2 sm:gap-4 items-end h-52 pt-8 border-b border-gray-800 pb-2">
                {stats?.timeline && stats.timeline.length > 0 ? (
                  stats.timeline.map((item, idx) => {
                    const maxVal = Math.max(...stats.timeline!.map((t) => t.count), 1);
                    const heightPercent = Math.max((item.count / maxVal) * 100, 8);

                    return (
                      <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                        <span className="text-[10px] font-mono font-bold text-[#d4ff3f] opacity-80 group-hover:opacity-100">
                          {item.count}
                        </span>
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className="w-full max-w-[48px] bg-gradient-to-t from-[#202020] to-[#d4ff3f] rounded-t-lg border-t-2 border-x-2 border-black transition-all group-hover:brightness-125 shadow-[2px_0px_0px_0px_#000]"
                        ></div>
                        <span className="text-[10px] font-semibold text-gray-400 truncate max-w-full">
                          {item.date.split(",")[0]}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <div className="col-span-7 flex items-center justify-center text-gray-500 text-xs">
                    No activity recorded in the past 7 days.
                  </div>
                )}
              </div>
            </div>

            {/* Inquiries Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#161616] border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_0px_#000]">
                <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider mb-3">
                  Lead Conversion Rate
                </h4>
                <div className="text-3xl font-black text-white font-mono">
                  {contacts.length > 0
                    ? `${Math.round(
                        (contacts.filter((c) => c.status === "contacted").length / contacts.length) * 100
                      )}%`
                    : "0%"}
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Percentage of inquiries marked as contacted
                </p>
              </div>

              <div className="bg-[#161616] border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_0px_#000]">
                <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider mb-3">
                  Average Rating Score
                </h4>
                <div className="text-3xl font-black text-[#ff9d00] font-mono flex items-center gap-2">
                  <span>★</span>
                  <span>{stats?.reviews?.avgRating || "5.0"}</span>
                  <span className="text-xs font-bold text-gray-500">/ 5.0</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  Based on {reviews.length} submitted testimonials
                </p>
              </div>

              <div className="bg-[#161616] border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_0px_#000]">
                <h4 className="text-xs font-black uppercase text-gray-400 tracking-wider mb-3">
                  Database & System Health
                </h4>
                <div className="text-2xl font-black text-[#10b981] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#10b981] animate-ping"></span>
                  <span>100% Operational</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  MongoDB Atlas connected & responding
                </p>
              </div>
            </div>

          </section>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* TAB 4: QUICK TEST & SYSTEM TOOLS */}
        {/* ------------------------------------------------------------------ */}
        {activeTab === "tools" && (
          <section className="space-y-6">
            
            {/* Live Message Simulator / Test Inquiry */}
            <div className="bg-[#161616] border-2 border-black rounded-3xl p-6 md:p-8 shadow-[4px_4px_0px_0px_#d4ff3f]">
              <div className="max-w-2xl">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-[#d4ff3f] text-black border border-black mb-2 inline-block">
                  Live Test Simulator
                </span>
                <h3 className="text-xl font-black text-white mb-2">
                  Send a Test Inquiry to Verify System Flow
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6 font-medium">
                  Submit a demo message into your database to confirm that incoming inquiries immediately appear in this admin dashboard and trigger the notification alert.
                </p>

                <button
                  type="button"
                  onClick={async () => {
                    try {
                      setIsLoading(true);
                      const res = await fetch(`${API_BASE}/contacts`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          firstName: "Rahul",
                          lastName: "Sharma",
                          phone: "+91 9876543210",
                          message: "Hi IntegersDev Team! Testing the live admin message notification system. Everything is looking top-notch!",
                          notes: "Generated via Admin Dashboard Test Tool",
                          status: "new",
                        }),
                      });
                      const data = await res.json();
                      if (data.success) {
                        playAlertSound();
                        fetchData(true);
                        setActiveTab("messages");
                      }
                    } catch (e) {
                      console.error("Test message failed:", e);
                    } finally {
                      setIsLoading(false);
                    }
                  }}
                  className="px-6 py-3 bg-[#d4ff3f] hover:bg-[#bce332] text-black font-black text-xs uppercase tracking-wider rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_#000] cursor-pointer active:scale-95 transition-all flex items-center gap-2"
                >
                  <FaPaperPlane className="w-3.5 h-3.5" />
                  <span>Send Test Message Now</span>
                </button>
              </div>
            </div>

            {/* System Info Box */}
            <div className="bg-[#161616] border-2 border-black rounded-2xl p-6 shadow-[3px_3px_0px_0px_#000] space-y-4">
              <h4 className="font-bold text-sm text-white">System Information & Configuration</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-[#202020] p-3 rounded-xl border border-gray-800">
                  <div className="text-gray-500 font-bold mb-1">ADMIN ROUTE</div>
                  <div className="text-white font-bold">/admin</div>
                </div>
                <div className="bg-[#202020] p-3 rounded-xl border border-gray-800">
                  <div className="text-gray-500 font-bold mb-1">DATABASE MODEL</div>
                  <div className="text-white font-bold">Contact (MongoDB)</div>
                </div>
                <div className="bg-[#202020] p-3 rounded-xl border border-gray-800">
                  <div className="text-gray-500 font-bold mb-1">LAST SYNCED</div>
                  <div className="text-white font-bold">
                    {lastRefreshed ? lastRefreshed.toLocaleTimeString() : "Pending"}
                  </div>
                </div>
                <div className="bg-[#202020] p-3 rounded-xl border border-gray-800">
                  <div className="text-gray-500 font-bold mb-1">NOTIFICATION SOUND</div>
                  <div className="text-white font-bold">{soundEnabled ? "Enabled (Web Audio API)" : "Muted"}</div>
                </div>
              </div>
            </div>

          </section>
        )}

      </main>

      {/* -------------------------------------------------------------------- */}
      {/* MODAL: ADD MANUAL CLIENT LEAD */}
      {/* -------------------------------------------------------------------- */}
      {isAddLeadOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#181818] border-2 border-black rounded-3xl p-6 max-w-lg w-full relative shadow-[8px_8px_0px_0px_#d4ff3f]">
            <button
              type="button"
              onClick={() => setIsAddLeadOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full cursor-pointer"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            <h3 className="text-lg font-black text-white mb-1">Record Offline / Manual Lead</h3>
            <p className="text-xs text-gray-400 mb-5">
              Add a client who reached out via direct phone call or meeting into your dashboard.
            </p>

            <form onSubmit={handleCreateLead} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    value={newLeadForm.firstName}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, firstName: e.target.value })}
                    className="w-full bg-[#202020] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4ff3f]"
                    placeholder="e.g. Vikram"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    value={newLeadForm.lastName}
                    onChange={(e) => setNewLeadForm({ ...newLeadForm, lastName: e.target.value })}
                    className="w-full bg-[#202020] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4ff3f]"
                    placeholder="e.g. Verma"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={newLeadForm.phone}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, phone: e.target.value })}
                  className="w-full bg-[#202020] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4ff3f]"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Project / Message Details</label>
                <textarea
                  required
                  rows={3}
                  value={newLeadForm.message}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, message: e.target.value })}
                  className="w-full bg-[#202020] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4ff3f] resize-none"
                  placeholder="Client wants landing page and custom dashboard..."
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Internal Notes (Optional)</label>
                <input
                  type="text"
                  value={newLeadForm.notes}
                  onChange={(e) => setNewLeadForm({ ...newLeadForm, notes: e.target.value })}
                  className="w-full bg-[#202020] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4ff3f]"
                  placeholder="Met at agency office, quote given"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddLeadOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#d4ff3f] text-black font-black text-xs rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000]"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* MODAL: ADD CLIENT TESTIMONIAL */}
      {/* -------------------------------------------------------------------- */}
      {isAddReviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#181818] border-2 border-black rounded-3xl p-6 max-w-lg w-full relative shadow-[8px_8px_0px_0px_#d4ff3f]">
            <button
              type="button"
              onClick={() => setIsAddReviewOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-2 rounded-full cursor-pointer"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            <h3 className="text-lg font-black text-white mb-1">Add Client Testimonial</h3>
            <p className="text-xs text-gray-400 mb-5">
              Add a client review to display in the website testimonials section.
            </p>

            <form onSubmit={handleCreateReview} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Client Full Name</label>
                <input
                  type="text"
                  required
                  value={newReviewForm.name}
                  onChange={(e) => setNewReviewForm({ ...newReviewForm, name: e.target.value })}
                  className="w-full bg-[#202020] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4ff3f]"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Role / Designation</label>
                  <input
                    type="text"
                    value={newReviewForm.role}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, role: e.target.value })}
                    className="w-full bg-[#202020] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4ff3f]"
                    placeholder="e.g. Founder, TechCorp"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Star Rating</label>
                  <select
                    value={newReviewForm.rating}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, rating: Number(e.target.value) })}
                    className="w-full bg-[#202020] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4ff3f]"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
                    <option value={3}>⭐⭐⭐ (3 Stars)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase mb-1">Review Statement</label>
                <textarea
                  required
                  rows={3}
                  value={newReviewForm.text}
                  onChange={(e) => setNewReviewForm({ ...newReviewForm, text: e.target.value })}
                  className="w-full bg-[#202020] border border-gray-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#d4ff3f] resize-none"
                  placeholder="IntegersDev delivered our platform ahead of schedule with remarkable UI/UX..."
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="approveCheckbox"
                  checked={newReviewForm.isApproved}
                  onChange={(e) => setNewReviewForm({ ...newReviewForm, isApproved: e.target.checked })}
                  className="rounded text-[#d4ff3f] focus:ring-0 w-4 h-4"
                />
                <label htmlFor="approveCheckbox" className="text-xs text-gray-300 font-bold cursor-pointer">
                  Approve immediately (Make live on website)
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setIsAddReviewOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#d4ff3f] text-black font-black text-xs rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000]"
                >
                  Add Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* -------------------------------------------------------------------- */}
      {/* MODAL: DELETE CONFIRMATION */}
      {/* -------------------------------------------------------------------- */}
      {deleteConfirmId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#181818] border-2 border-black rounded-3xl p-6 max-w-sm w-full relative shadow-[6px_6px_0px_0px_#ef4444]">
            <h3 className="text-base font-black text-white mb-2">Delete Confirmation</h3>
            <p className="text-xs text-gray-300 leading-relaxed mb-6 font-medium">
              Are you sure you want to permanently delete this {deleteConfirmId.title}? This action cannot be undone.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setDeleteConfirmId(null)}
                className="px-4 py-2 text-xs font-bold text-gray-400 hover:text-white cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000] cursor-pointer"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800/80 py-4 px-6 text-center text-xs text-gray-500 font-medium">
        IntegersDev Admin Control Panel • Secure Website Messages & Lead Management • {new Date().getFullYear()}
      </footer>

    </div>
  );
}

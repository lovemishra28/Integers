"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight, FaBars, FaTimes } from 'react-icons/fa';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import logo from '@/assets/INTEGERS.png';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Transform values based on scroll
  const width = useTransform(scrollY, [0, 100], ["90%", "100%"]);
  const maxWidth = useTransform(scrollY, [0, 100], ["1280px", "100%"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["24px", "0px"]);
  const top = useTransform(scrollY, [0, 100], ["24px", "0px"]);
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.9)"]);
  const shadow = useTransform(scrollY, [0, 100], ["0 24px 80px -48px rgba(0,0,0,0.35)", "0 4px 20px -10px rgba(0,0,0,0.1)"]);

  // Close mobile menu on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.div 
      className="fixed left-1/2 -translate-x-1/2 z-50 px-3 sm:px-0"
      style={{
        width,
        maxWidth,
        top,
      }}
    >
      <motion.nav 
        className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 md:px-10 w-full backdrop-blur-xl border border-black/10"
        style={{
          borderRadius,
          backgroundColor,
          boxShadow: shadow,
        }}
      >
        <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-bold font-sans flex items-center gap-3 text-black tracking-tighter">
          <Image
            src={logo}
            alt="Integers Logo"
            height={48}
            className="h-9 sm:h-10 md:h-12 w-auto object-contain rounded-xl"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-black">
          <Link href="/" className="nav-link hover:text-[#d4ff3f] transition-colors">Home</Link>
          <Link href="#services" className="nav-link hover:text-[#d4ff3f] transition-colors">Services</Link>
          <Link href="#projects" className="nav-link hover:text-[#d4ff3f] transition-colors">Work</Link>
          <Link href="#pricing" className="nav-link hover:text-[#d4ff3f] transition-colors">Pricing</Link>
          <Link href="#expertise" className="nav-link hover:text-[#d4ff3f] transition-colors">Expertise</Link>
          <Link href="#contact" className="nav-link hover:text-[#d4ff3f] transition-colors">Contact</Link>
          <Link href="#reviews" className="nav-link hover:text-[#d4ff3f] transition-colors">Reviews</Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Link href="#contact" className="inline-flex items-center justify-center px-6 py-2.5 rounded-3xl font-bold text-sm transition-transform hover:scale-105 active:scale-95 bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Let&apos;s Talk
            <span className="ml-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
              <FaArrowRight className="w-2.5 h-2.5" />
            </span>
          </Link>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full font-bold text-xs bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 transition-transform"
          >
            Talk
            <FaArrowRight className="w-2.5 h-2.5 ml-1" />
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 rounded-full border-2 border-black bg-white flex items-center justify-center text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:scale-95 transition-transform cursor-pointer"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="mt-2 bg-white/95 backdrop-blur-2xl border-2 border-black rounded-3xl p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:hidden flex flex-col gap-3"
          >
            <div className="flex flex-col gap-1 divide-y divide-black/5">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '#services' },
                { label: 'Work Projects', href: '#projects' },
                { label: 'Pricing Plans', href: '#pricing' },
                { label: 'Tech Capabilities', href: '#expertise' },
                { label: 'Client Testimonials', href: '#reviews' },
                { label: 'Contact Us', href: '#contact' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2.5 px-3 rounded-xl font-bold text-sm text-black hover:bg-[#d4ff3f] active:bg-[#d4ff3f] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs font-black text-gray-500">→</span>
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t-2 border-black/10 flex flex-col gap-2">
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:scale-95 transition-transform"
              >
                Let&apos;s Talk About Your Project
                <FaArrowRight className="w-3 h-3 ml-2" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPen } from "react-icons/fa";
import TestimonialForm from "./TestimonialForm";

export default function TestimonialSubmitModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-transparent text-white border-2 border-gray-700 hover:border-[#d4ff3f] hover:text-[#d4ff3f] hover:scale-105 active:scale-95 transition-all cursor-pointer"
      >
        <FaPen className="w-3 h-3 text-[#d4ff3f]" />
        Share Your Experience
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black text-white hover:bg-[#d4ff3f] hover:text-black flex items-center justify-center border-2 border-black transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>
              <TestimonialForm
                onSuccess={() => setIsOpen(false)}
                title="Share Your Client Experience"
                subtitle="Your review will be verified and added to our testimonials section."
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

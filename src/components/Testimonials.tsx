"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Define the shape of our Review data
interface ReviewData {
  _id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // Form States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [userRating, setUserRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const formRef = useRef<HTMLFormElement>(null);

  // Fetch reviews when the component loads
  useEffect(() => {
    let isMounted = true;

    void (async () => {
      try {
        const res = await fetch('/api/reviews');
        const data = await res.json();

        if (isMounted && data.success && Array.isArray(data.reviews)) {
          setReviews(data.reviews);
        }
      } catch (error) {
        console.error("Failed to load reviews", error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      if (data.success && Array.isArray(data.reviews)) {
        setReviews(data.reviews);
      }
    } catch (error) {
      console.error("Failed to load reviews", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const form = formRef.current;
    if (!form) {
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const role = formData.get("role")?.toString().trim() || "Client";
    const text = formData.get("text")?.toString().trim();
    const rating = Number(userRating) || 5;

    if (!name || !text) {
      setSubmitError("Please fill in your name and review experience.");
      setIsSubmitting(false);
      return;
    }

    const payload = { name, role, rating, text };

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      
      if (res.ok && result.success) {
        setSubmitSuccess(true);
        form.reset();
        setUserRating(5);
        setHoverRating(0);

        // Instantly prepend newly created review to the UI
        if (result.review) {
          setReviews((prev) => [result.review, ...prev.filter((r) => r._id !== result.review._id)]);
        } else {
          fetchReviews();
        }
        
        // Hide success message after 7 seconds
        setTimeout(() => setSubmitSuccess(false), 7000);
      } else {
        setSubmitError(result.error || "Failed to submit review. Please try again.");
      }
    } catch (error: any) {
      console.error("Failed to submit review", error);
      setSubmitError("Network error: Could not connect to the review server. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-24 px-8 md:px-16 bg-[#111111] text-white relative overflow-hidden flex flex-col items-center scroll-mt-10">
      
      {/* Decorative Squiggle & Cursor */}
      <motion.div 
        className="absolute top-32 left-10 md:left-24 opacity-60 pointer-events-none hidden md:block z-0"
        initial={{ opacity: 0, rotate: -10 }}
        whileInView={{ opacity: 0.6, rotate: 0 }}
        viewport={{ once: true }}
      >
        <svg viewBox="0 0 120 100" className="w-20 h-20" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round">
          <path d="M10,50 Q25,10 40,50 T70,50 T100,50" />
          <circle cx="95" cy="20" r="8" fill="#d4ff3f" stroke="none" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Header Area */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-32 bg-[#d4ff3f] opacity-10 blur-[80px] pointer-events-none"></div>
          
          <div className="inline-block px-4 py-1.5 bg-[#1a1a1a] border border-[#d4ff3f]/30 text-[#d4ff3f] rounded-sm text-[10px] font-bold uppercase tracking-wider mb-4 relative z-10 font-sans">
            Testimonial
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-sans max-w-2xl text-white relative z-10">
            What Our Clients Say About Services
          </h2>
        </motion.div>

        {/* Seamless Dynamic Reviews or Empty State */}
        <div className="relative w-full mb-16">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#d4ff3f] rounded-full opacity-15 blur-[60px] pointer-events-none z-0"></div>
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#d4ff3f] rounded-full opacity-15 blur-[60px] pointer-events-none z-0"></div>

          {isLoading ? (
            <div className="text-center text-gray-400 py-10 font-bold font-sans animate-pulse">Loading reviews...</div>
          ) : reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 relative z-10 font-sans">
              {reviews.map((review, idx) => (
                <motion.div 
                  key={review._id || idx} 
                  className="relative group flex flex-col bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-[#d4ff3f]/50 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="absolute -top-4 right-4 text-4xl text-[#d4ff3f] font-serif leading-none font-black opacity-50">&ldquo;&rdquo;</div>
                  <h3 className="text-base font-bold mb-3 pr-6 text-white leading-snug">
                    {review.rating === 5 ? "Exceptional Work" : "Great Partnership"}
                  </h3>
                  <p className="text-[13px] text-gray-300 leading-relaxed mb-6 flex-grow">
                    {review.text}
                  </p>
                  <div className="flex text-[#ff9d00] mb-5 text-sm tracking-tight">
                    {"★".repeat(Math.max(1, Math.min(5, review.rating)))}
                    <span className="text-gray-700">
                      {"★".repeat(Math.max(0, 5 - review.rating))}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/10">
                    <div className="w-9 h-9 rounded-full bg-[#d4ff3f] text-black font-extrabold text-xs flex items-center justify-center border-2 border-black shrink-0">
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm text-white truncate">{review.name}</h4>
                      <p className="text-[10px] text-gray-400 uppercase tracking-wide truncate">{review.role || "Client"}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-10 px-6 max-w-2xl mx-auto relative z-10 font-sans bg-white/5 rounded-2xl border border-white/10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-6">
                <svg width="48" height="48" viewBox="0 0 100 100" fill="none" stroke="#d4ff3f" strokeWidth="4" strokeLinecap="round">
                   <circle cx="50" cy="50" r="45" opacity="0.3"/>
                   <path d="M50,15 V85 M15,50 H85"/>
                   <circle cx="50" cy="50" r="15" fill="#111111" stroke="#d4ff3f" strokeWidth="5"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white leading-tight">Be the First to Review Us</h3>
              <p className="text-gray-400 text-sm leading-relaxed">We&apos;re just getting started on this journey! If we&apos;ve worked together, your feedback would mean the world to us. Share your experience below.</p>
            </motion.div>
          )}
        </div>
        
        {/* Feedback Submission Form Section */}
        <div className="w-full max-w-7xl mx-auto font-sans flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mt-12 relative z-20">
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
               Share your <br />
               <span className="text-[#d4ff3f]">experience</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We value every piece of feedback. Help us grow by sharing your thoughts on our partnership and how we can improve.
            </p>
            <div className="w-16 h-1 bg-[#d4ff3f]/30 mt-10 rounded-full"></div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitSuccess ? (
              <div className="bg-[#d4ff3f]/15 border-2 border-[#d4ff3f] text-white p-8 rounded-2xl font-bold text-center shadow-[6px_6px_0px_0px_rgba(212,255,63,0.3)]">
                <div className="text-4xl mb-3">✨</div>
                <h4 className="text-xl font-black text-[#d4ff3f] mb-2">Thank you!</h4>
                <p className="text-sm text-gray-200 mb-6">
                  Your feedback has been submitted successfully and added to our testimonials!
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black hover:scale-105 transition-transform"
                >
                  Write Another Review
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="bg-red-500/20 border-2 border-red-500 text-red-200 p-4 rounded-xl text-xs font-bold">
                    ⚠️ {submitError}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Your Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-600 font-sans" 
                      placeholder="e.g. Alex Rivera" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Role / Company</label>
                    <input 
                      type="text" 
                      name="role" 
                      className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-600 font-sans" 
                      placeholder="e.g. Founder at TechNova" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-wider">
                     Your Rating <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-3 items-center flex-wrap">
                    <div className="flex gap-1.5 items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => {
                            setUserRating(star);
                            setHoverRating(0);
                          }}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="text-3xl transition-transform active:scale-125 focus:outline-none hover:scale-110 cursor-pointer p-1"
                          aria-label={`Rate ${star} stars`}
                        >
                          <span className={`
                            ${(hoverRating || userRating) >= star ? 'text-[#ff9d00]' : 'text-gray-700'}
                            transition-colors duration-150
                          `}>
                            ★
                          </span>
                        </button>
                      ))}
                    </div>
                    <span className="text-xs font-bold text-[#d4ff3f] uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full border border-white/10">
                      {userRating === 5 && "★★★★★ Excellent!"}
                      {userRating === 4 && "★★★★ Very Good"}
                      {userRating === 3 && "★★★ Average"}
                      {userRating === 2 && "★★ Needs Improvement"}
                      {userRating === 1 && "★ Poor"}
                    </span>
                  </div>
                  <input type="hidden" name="rating" value={userRating} />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Your Experience <span className="text-red-500">*</span></label>
                  <textarea 
                    name="text" 
                    required 
                    rows={3} 
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-600 resize-none leading-relaxed font-sans" 
                    placeholder="Describe your experience working with Integers..."
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto inline-flex items-center justify-center px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest font-sans transition-all hover:scale-105 active:scale-95 bg-[#d4ff3f] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        Submitting Feedback...
                      </span>
                    ) : (
                      'Submit Feedback'
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
        
        {/* Seamless Bottom Horizontal Line */}
        <motion.div 
          className="w-full mt-24 flex items-center justify-start max-w-7xl"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
          transition={{ duration: 1 }}
        >
           <div className="w-1/4 h-[2px] bg-[#d4ff3f]"></div>
           <div className="w-3/4 h-[1px] bg-gray-800"></div>
        </motion.div>
      </div>
    </section>
  );
}

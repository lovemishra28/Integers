"use client";

import React, { useState, useEffect } from 'react';
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
  const [userRating, setUserRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  // Fetch reviews when the component loads
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch('/api/reviews');
      const data = await res.json();
      if (data.success) {
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
    
    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name"),
      role: formData.get("role"),
      rating: formData.get("rating"),
      text: formData.get("text"),
    };

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      
      if (result.success) {
        setSubmitSuccess(true);
        event.currentTarget.reset();
        // Refetch to instantly show the new review if it was 5 stars!
        fetchReviews();
        
        // Hide success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Failed to submit review", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reviews" className="py-24 px-8 md:px-16 bg-[#111111] text-white relative overflow-hidden flex flex-col items-center">
      
      {/* Decorative Squiggle & Cursor (already present, ensured it stays) */}
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
                  key={review._id} 
                  className="relative group flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="absolute -top-6 right-0 text-5xl text-[#d4ff3f] font-serif leading-none font-black opacity-60">""</div>
                  <h3 className="text-lg font-bold mb-4 pr-8 text-white leading-snug">
                    "Exceptional Work"
                  </h3>
                  <p className="text-[13px] text-gray-300 leading-relaxed mb-6 flex-grow">
                    {review.text}
                  </p>
                  <div className="flex text-[#ff9d00] mb-5 text-sm tracking-tight">
                    {"★".repeat(review.rating)}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-600"></div>
                    <div>
                      <h4 className="font-bold text-sm text-white">{review.name}</h4>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wide">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-10 px-6 max-w-2xl mx-auto relative z-10 font-sans"
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
              <p className="text-gray-400 text-sm leading-relaxed">We're just getting started on this journey! If we've worked together, your feedback would mean the world to us. Share your experience below.</p>
            </motion.div>
          )}
        </div>
        
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
              <div className="bg-[#d4ff3f]/10 border border-[#d4ff3f]/30 text-[#d4ff3f] p-8 rounded-2xl font-bold text-center">
                <div className="text-3xl mb-4">✨</div>
                Thank you! Your feedback has been submitted successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Your Name</label>
                    <input type="text" name="name" required className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-600 font-sans" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Role / Company</label>
                    <input type="text" name="role" required className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-600 font-sans" placeholder="Job Title / Company" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-wider">
                     Your Rating
                  </label>
                  <div className="flex gap-2 items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setUserRating(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="text-3xl transition-all duration-200 focus:outline-none hover:scale-110"
                      >
                        <span className={`
                          ${(hoverRating || userRating) >= star ? 'text-[#ff9d00]' : 'text-gray-700'}
                          transition-colors duration-200
                        `}>
                          ★
                        </span>
                      </button>
                    ))}
                    <span className="ml-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                      {userRating === 5 && "Excellent!"}
                      {userRating === 4 && "Very Good"}
                      {userRating === 3 && "Average"}
                      {userRating === 2 && "Poor"}
                      {userRating === 1 && "Terrible"}
                    </span>
                  </div>
                  <input type="hidden" name="rating" value={userRating} />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Your Experience</label>
                  <textarea name="text" required rows={3} className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-600 resize-none leading-relaxed font-sans" placeholder="Describe your experience with us..."></textarea>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto inline-flex items-center justify-center px-10 py-3.5 rounded-full font-bold text-xs uppercase tracking-widest font-sans transition-all hover:scale-105 active:scale-95 bg-[#d4ff3f] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
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

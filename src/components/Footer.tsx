"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { FaCheck, FaThumbsUp } from 'react-icons/fa';
import { submitContactForm } from '@/actions/contact';
import logo from '@/assets/INTEGERS.png';
import teamMember from '@/assets/team_member_footer.jpg';

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(event.currentTarget);
    const result = await submitContactForm(formData);
    
    if (result.success) {
      setSuccess(true);
      event.currentTarget.reset();
    }
    
    setIsSubmitting(false);
  }

  return (
    <footer id="contact" className="w-full flex flex-col font-sans">
      {/* Top Dark Section */}
      <div className="bg-[#111111] text-white relative overflow-hidden w-full">
        
        {/* Background Image - Covers Right Side and blends left */}
        <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full z-0 overflow-hidden pointer-events-none">
          <div className="relative w-full h-full grayscale opacity-40 lg:opacity-80 transition-all duration-700">
            <Image 
              src={teamMember} 
              alt="Background" 
              fill 
              className="object-cover object-top lg:object-[center_20%]" 
              priority
            />
            {/* Smooth gradient transition from the dark left side to the image on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/60 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative z-10">
          
          {/* Left Side - Contact Info */}
          <div className="w-full lg:w-1/2 px-8 md:px-16 py-24 relative">
            
            {/* Green Glow Behind Text */}
            <div className="absolute top-20 left-10 w-48 h-48 bg-[#d4ff3f] rounded-full opacity-20 blur-[60px] pointer-events-none z-0"></div>
            
            <div className="relative z-10">
              <span className="text-[#d4ff3f] font-bold text-[10px] tracking-wider uppercase mb-4 block">Say Hello</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-tight">
                Let's Work Together<br />With Us
              </h2>

              <div className="space-y-6">
                <div>
                  <span className="text-gray-400 text-xs font-bold mb-1 block uppercase tracking-wider">Stay Up To Date</span>
                  <a href="mailto:hello@youragency.com" className="text-xl md:text-2xl font-bold hover:text-[#d4ff3f] transition-colors">
                    hello@youragency.com
                  </a>
                </div>
                <div>
                  <a href="tel:+910000000000" className="text-xl md:text-2xl font-bold hover:text-[#d4ff3f] transition-colors">
                    +91 (000) 000-0000
                  </a>
                </div>
                <div className="pt-4">
                  <p className="text-lg font-bold text-white">
                    Gwalior, Madhya Pradesh<br />India
                  </p>
                </div>
              </div>

              {/* Fixed Social Icons */}
              <div className="flex gap-4 mt-12">
                {['Tw', 'Fb', 'Dr', 'Be'].map((social, i) => (
                  <a key={i} href="#" className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    i === 0 
                      ? 'bg-[#d4ff3f] text-black hover:scale-110' 
                      : 'bg-transparent border border-gray-600 text-white hover:border-[#d4ff3f] hover:text-[#d4ff3f]'
                  }`}>
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - The Form */}
          <div className="w-full lg:w-1/2 px-8 md:px-16 py-16 lg:py-24 relative z-10">
            {/* Dark Gray Form Card */}
            <div className="bg-[#1c1c1c] p-8 md:p-10 rounded-2xl border border-gray-800 shadow-2xl relative z-10 w-full max-w-md mx-auto lg:ml-0">
              <h3 className="text-2xl font-bold mb-8">Input Form</h3>
              
              {success ? (
                <div className="bg-[#d4ff3f] text-black p-6 rounded-xl font-bold text-center">
                  Thanks! We'll be in touch soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-wider">Personal information</label>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" name="firstName" required className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-600" placeholder="First Name" />
                      <input type="text" name="lastName" required className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-600" placeholder="Last Name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-wider">Phone number</label>
                    <div className="flex gap-2">
                      <div className="w-20 bg-transparent border border-gray-700 rounded-lg flex items-center justify-center text-xs text-white uppercase font-bold">🇮🇳 +91</div>
                      <input type="tel" name="phone" required className="flex-1 bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-600" placeholder="Phone Number" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 mb-3 uppercase tracking-wider">Describe your case <span className="text-red-500">*</span></label>
                    <textarea name="message" required rows={4} className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-600 resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm transition-transform hover:scale-105 active:scale-95 bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 mt-2"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <span className="ml-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                      <FaCheck className="w-2.5 h-2.5" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar - Fixed to White background with Black text */}
      <div className="bg-white border-t border-gray-200 py-6 px-8 md:px-16 w-full relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-bold text-gray-500">
          
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <Image 
              src={logo} 
              alt="Integers Logo" 
              height={32} 
              className="h-8 w-auto object-contain rounded-lg"
            />
            <span className="text-black font-bold text-lg">Integers</span>
          </div>
          
          {/* Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0 text-black">
            © {new Date().getFullYear()} Integers. All Rights Reserved.
          </div>
          
          {/* Links */}
          <div className="flex gap-6 text-black">
            <a href="#" className="hover:text-[#62d124] transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-[#62d124] transition-colors">Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

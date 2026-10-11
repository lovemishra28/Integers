"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaTimes, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { submitContactForm } from '@/actions/contact';
import logo from '@/assets/integers_logo.png';
import teamMember from '@/assets/team_member_footer.jpg';

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<'terms' | 'accessibility' | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const form = formRef.current;
    if (!form) {
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form);
    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setSuccess(true);
        form.reset();
      } else {
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Network connection error. Please try again or reach out on WhatsApp/Email.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const socialLinks = [
    {
      name: 'X (Twitter)',
      url: 'https://x.com/integers_dev?s=11',
      icon: <FaXTwitter className="w-4 h-4" />,
      primary: true,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/integers.dev/',
      icon: <FaInstagram className="w-4 h-4" />,
      primary: false,
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919644397542',
      icon: <FaWhatsapp className="w-4 h-4" />,
      primary: false,
    },
  ];

  return (
    <footer id="contact" className="w-full flex flex-col font-sans scroll-mt-10">
      {/* Anchor for form direct navigation */}
      <div id="contact-form" className="relative -top-10" />

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
          <div className="w-full lg:w-1/2 px-8 md:px-16 py-20 lg:py-24 relative">

            {/* Green Glow Behind Text */}
            <div className="absolute top-20 left-10 w-48 h-48 bg-[#d4ff3f] rounded-full opacity-20 blur-[60px] pointer-events-none z-0"></div>

            <div className="relative z-10">
              <span className="text-[#d4ff3f] font-bold text-[10px] tracking-wider uppercase mb-4 block">Say Hello</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-14 leading-tight">
                Let's Work Together<br />With Us
              </h2>

              <div className="space-y-6">
                <div>
                  <span className="text-gray-400 text-xs font-bold mb-1 block uppercase tracking-wider">Stay Up To Date</span>
                  <a href="mailto:contact@integersdev.in" className="text-xl md:text-2xl font-bold hover:text-[#d4ff3f] transition-colors">
                    contact@integersdev.in
                  </a>
                </div>
                <div>
                  <a href="tel:+919644397542" className="text-xl md:text-2xl font-bold hover:text-[#d4ff3f] transition-colors">
                    +91 9644397542
                  </a>
                </div>
                <div className="pt-2">
                  <p className="text-lg font-bold text-white">
                    Gwalior, Madhya Pradesh<br />India
                  </p>
                </div>
              </div>

              {/* Working Social Media Links */}
              <div className="mt-12">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest block mb-3">
                  Connect With Us
                </span>
                <div className="flex gap-3 flex-wrap">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit Integers on ${social.name}`}
                      className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer ${
                        social.primary
                          ? 'bg-[#d4ff3f] text-black hover:scale-110 active:scale-95 border-2 border-black'
                          : 'bg-[#1c1c1c] border border-gray-700 text-white hover:border-[#d4ff3f] hover:text-[#d4ff3f] hover:scale-110 active:scale-95'
                      }`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - The Form */}
          <div className="w-full lg:w-1/2 px-8 md:px-16 py-12 lg:py-24 relative z-10">
            {/* Dark Gray Form Card */}
            <div className="bg-[#1c1c1c] p-8 md:p-10 rounded-2xl border border-gray-800 shadow-2xl relative z-10 w-full max-w-md mx-auto lg:ml-0">
              <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>

              {success ? (
                <div className="bg-[#d4ff3f] text-black p-6 rounded-xl font-bold text-center space-y-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-2xl">🎉</div>
                  <p className="text-base font-extrabold">Thanks! Message Received.</p>
                  <p className="text-xs font-semibold text-black/80">We'll review your project details and get back to you within 24 hours.</p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="mt-3 px-4 py-1.5 bg-black text-white text-xs rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="bg-red-500/20 border border-red-500 text-red-200 text-xs p-3 rounded-lg font-bold">
                      {errorMessage}
                    </div>
                  )}

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
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm transition-transform hover:scale-105 active:scale-95 bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 mt-2 cursor-pointer"
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
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-bold text-gray-500 gap-4 md:gap-0">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6">
              <Image src={logo} alt="Integers Logo" fill className="object-contain" />
            </div>
            <span className="text-black font-bold text-sm">Integers</span>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left text-black">
            © {new Date().getFullYear()} Integers. All Rights Reserved.
          </div>

          {/* Legal / Policy Modals Trigger */}
          <div className="flex gap-6 text-black">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setActiveModal('terms');
              }}
              className="hover:text-[#62d124] transition-colors font-bold cursor-pointer text-xs"
            >
              Terms of Use
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setActiveModal('accessibility');
              }}
              className="hover:text-[#62d124] transition-colors font-bold cursor-pointer text-xs"
            >
              Accessibility Statement
            </button>
          </div>
        </div>
      </div>

      {/* ----------------- TERMS OF USE MODAL ----------------- */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white text-black border-2 border-black rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-[8px_8px_0px_0px_#d4ff3f]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="terms-modal-title"
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Terms modal"
            >
              <FaTimes className="w-3.5 h-3.5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-[10px] font-black uppercase mb-3">
              Legal Policy
            </div>
            <h3 id="terms-modal-title" className="text-2xl sm:text-3xl font-black mb-4">
              Terms of Use
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              <p>
                <strong>Last Updated:</strong> October 2026
              </p>
              <p>
                Welcome to <strong>Integers</strong>. By engaging our services, browsing this website, or interacting with our digital assets, you agree to comply with and be bound by the following Terms of Use.
              </p>

              <h4 className="text-base font-black text-black pt-2">1. Scope of Services</h4>
              <p>
                Integers provides custom software engineering, website development, mobile application design, UI/UX architecture, and brand design services. Specific deliverables, sprint schedules, milestones, and fees are governed by individual project agreements or statements of work (SOW).
              </p>

              <h4 className="text-base font-black text-black pt-2">2. Intellectual Property & Ownership</h4>
              <p>
                Upon final payment completion for contracted work, all custom source code, designs, and bespoke assets created specifically for the client are 100% transferred to the client. Integers reserves the right to showcase publicly deployed works in our portfolio, case studies, and marketing materials unless a specific NDA dictates otherwise.
              </p>

              <h4 className="text-base font-black text-black pt-2">3. Payment Terms & Milestone Deliveries</h4>
              <p>
                Invoices must be settled in accordance with agreed milestone dates. Third-party expenses including domain registration, dedicated cloud hosting, and external API tokens are client-side responsibilities unless explicitly packaged into a retainer plan.
              </p>

              <h4 className="text-base font-black text-black pt-2">4. Limitation of Liability</h4>
              <p>
                Integers provides services on an "as-is" and "as-available" basis. In no event shall Integers or its team members be liable for consequential, incidental, indirect, or punitive damages arising from the use of delivered software once signed off and deployed.
              </p>

              <h4 className="text-base font-black text-black pt-2">5. Governing Law</h4>
              <p>
                These terms are governed by the laws of India, with jurisdiction in Gwalior, Madhya Pradesh. For any inquiries regarding our terms, please contact us at <a href="mailto:contact@integersdev.in" className="text-black font-bold underline">contact@integersdev.in</a>.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3">
              <Link
                href="/terms"
                onClick={() => setActiveModal(null)}
                className="text-xs font-bold text-gray-600 hover:text-black underline"
              >
                View standalone Terms page →
              </Link>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-6 py-2.5 bg-black text-[#d4ff3f] rounded-full text-xs font-bold border-2 border-black hover:bg-[#d4ff3f] hover:text-black transition-colors"
              >
                I Understand & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ----------------- ACCESSIBILITY STATEMENT MODAL ----------------- */}
      {activeModal === 'accessibility' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="bg-white text-black border-2 border-black rounded-3xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-[8px_8px_0px_0px_#d4ff3f]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="accessibility-modal-title"
          >
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Accessibility modal"
            >
              <FaTimes className="w-3.5 h-3.5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-[10px] font-black uppercase mb-3">
              Commitment to Inclusivity
            </div>
            <h3 id="accessibility-modal-title" className="text-2xl sm:text-3xl font-black mb-4">
              Accessibility Statement
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
              <p>
                <strong>Integers</strong> is dedicated to ensuring digital accessibility for people of all abilities. We strive to continually improve the user experience for everyone and apply relevant accessibility standards across our platform.
              </p>

              <h4 className="text-base font-black text-black pt-2">1. Conformance Status</h4>
              <p>
                The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for individuals with disabilities. We strive to adhere to <strong>WCAG 2.1 Level AA</strong> standards throughout our website.
              </p>

              <h4 className="text-base font-black text-black pt-2">2. Accessibility Features on Integers</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                <li>High-contrast visual hierarchy built with intentional Neo-Brutalist typography and distinct borders.</li>
                <li>Keyboard navigability across interactive controls, forms, and dialogs.</li>
                <li>Descriptive alternative text for meaningful graphics and team imagery.</li>
                <li>Responsive viewport scaling supporting up to 500% zoom without horizontal clipping.</li>
                <li>Clear form input labels, error notifications, and ARIA attributes for screen readers.</li>
              </ul>

              <h4 className="text-base font-black text-black pt-2">3. Feedback & Contact</h4>
              <p>
                We welcome your feedback on the accessibility of Integers. If you encounter accessibility barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-300 font-bold text-xs space-y-1">
                <div>Email: <a href="mailto:contact@integersdev.in" className="text-black underline">contact@integersdev.in</a></div>
                <div>Phone: <a href="tel:+919644397542" className="text-black underline">+91 9644397542</a></div>
                <div>Location: Gwalior, Madhya Pradesh, India</div>
              </div>
              <p className="text-[11px] text-gray-500">
                We make every effort to respond to accessibility feedback within 2 business days.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-3">
              <Link
                href="/accessibility"
                onClick={() => setActiveModal(null)}
                className="text-xs font-bold text-gray-600 hover:text-black underline"
              >
                View standalone Accessibility page →
              </Link>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full sm:w-auto px-6 py-2.5 bg-black text-[#d4ff3f] rounded-full text-xs font-bold border-2 border-black hover:bg-[#d4ff3f] hover:text-black transition-colors"
              >
                Got It & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

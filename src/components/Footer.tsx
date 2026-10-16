"use client";

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaInstagram, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { FaXTwitter, FaGithub } from 'react-icons/fa6';
import { submitContactForm } from '@/actions/contact';
import { siteConfig } from '@/config/site';
import { trackFormSubmission } from '@/lib/analytics';
import logo from '@/assets/integersdev_lime_icon.png';
import teamMember from '@/assets/team_member_footer.jpg';

export default function Footer() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
        trackFormSubmission('footer_quick_contact', {
          service: formData.get('service')?.toString() || 'General Inquiry',
          hasPhone: Boolean(formData.get('phone')),
        });
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
      ariaLabel: 'Follow IntegersDev on X (formerly Twitter)',
      url: siteConfig.socialLinks.twitter,
      icon: <FaXTwitter className="w-4 h-4" />,
      primary: true,
    },
    {
      name: 'Instagram',
      ariaLabel: 'Follow IntegersDev on Instagram for UI/UX and product design showcases',
      url: siteConfig.socialLinks.instagram,
      icon: <FaInstagram className="w-4 h-4" />,
      primary: false,
    },
    {
      name: 'GitHub',
      ariaLabel: 'Explore IntegersDev open-source repositories and starter templates on GitHub',
      url: siteConfig.socialLinks.github,
      icon: <FaGithub className="w-4 h-4" />,
      primary: false,
    },
    {
      name: 'WhatsApp',
      ariaLabel: 'Chat directly with IntegersDev engineering team on WhatsApp',
      url: siteConfig.whatsappUrl,
      icon: <FaWhatsapp className="w-4 h-4" />,
      primary: false,
    },
  ];

  return (
    <footer id="contact" className="w-full flex flex-col font-sans scroll-mt-10" aria-label="Site Footer">
      {/* Anchor for form direct navigation */}
      <div id="contact-form" className="relative -top-10" />

      {/* Top Dark Section */}
      <div className="bg-[#111111] text-white relative overflow-hidden w-full">

        {/* Background Image - Covers Right Side and blends left */}
        <div className="absolute right-0 top-0 w-full lg:w-[55%] h-full z-0 overflow-hidden pointer-events-none">
          <div className="relative w-full h-full grayscale opacity-40 lg:opacity-80 transition-all duration-700">
            <Image
              src={teamMember}
              alt="IntegersDev web developers and engineering collective in Gwalior, India"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              loading="lazy"
              className="object-cover object-top lg:object-[center_20%]"
            />
            {/* Smooth gradient transition from the dark left side to the image on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/60 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative z-10">

          {/* Left Side - Contact Info & Socials */}
          <div className="w-full lg:w-1/2 px-8 md:px-16 py-20 lg:py-24 relative">

            {/* Accent Glow Behind Text */}
            <div className="absolute top-20 left-10 w-48 h-48 bg-[#d4ff3f] rounded-full opacity-20 blur-[60px] pointer-events-none z-0"></div>

            <div className="relative z-10">
              <span className="text-[#d4ff3f] font-black text-xs tracking-wider uppercase mb-4 block">Say Hello</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-12 leading-tight tracking-tight">
                Let&apos;s Work Together<br />With Us
              </h2>

              <div className="space-y-6">
                <div>
                  <span className="text-gray-400 text-xs font-bold mb-1 block uppercase tracking-wider">Stay Up To Date</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-xl md:text-2xl font-black hover:text-[#d4ff3f] transition-colors"
                    aria-label={`Send an email to IntegersDev at ${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <a
                    href={`tel:${siteConfig.phoneClean}`}
                    className="text-xl md:text-2xl font-black hover:text-[#d4ff3f] transition-colors"
                    aria-label={`Call IntegersDev at ${siteConfig.phone}`}
                  >
                    {siteConfig.phone}
                  </a>
                </div>
                <div className="pt-2">
                  <p className="text-sm md:text-base font-bold text-gray-300 leading-relaxed">
                    📍 {siteConfig.address.full}
                  </p>
                  <p className="text-xs text-gray-400 font-medium mt-1">
                    Operating Hours: {siteConfig.workingHours.display}
                  </p>
                </div>
              </div>

              {/* Working Social Media Links with Accessible Labels */}
              <div className="mt-10">
                <span className="text-gray-400 text-[11px] font-black uppercase tracking-widest block mb-3">
                  Connect On Social Media
                </span>
                <div className="flex gap-3 flex-wrap" role="list" aria-label="IntegersDev social media profiles">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
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

          {/* Right Side - Interactive Contact Form */}
          <div className="w-full lg:w-1/2 px-8 md:px-16 py-12 lg:py-24 relative z-10">
            <div className="bg-[#1c1c1c] p-8 md:p-10 rounded-3xl border-2 border-gray-800 shadow-2xl relative z-10 w-full max-w-md mx-auto lg:ml-0">
              <h3 className="text-2xl font-black mb-6 text-white tracking-tight">Send Us a Message</h3>

              {success ? (
                <div className="bg-[#d4ff3f] text-black p-6 rounded-2xl font-bold text-center space-y-3 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                  <div className="text-3xl">🎉</div>
                  <p className="text-base font-black">Thanks! Message Received.</p>
                  <p className="text-xs font-semibold text-black/80">We&apos;ll review your project details and get back to you within 24 hours.</p>
                  <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="mt-3 px-5 py-2 bg-black text-white text-xs rounded-full font-black hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5" aria-label="Footer quick contact inquiry form">
                  {errorMessage && (
                    <div className="bg-red-500/20 border border-red-500 text-red-200 text-xs p-3 rounded-xl font-bold" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label htmlFor="footer-first-name" className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-wider">
                      Personal Information <span className="text-red-400">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        id="footer-first-name"
                        type="text"
                        name="firstName"
                        required
                        aria-required="true"
                        autoComplete="given-name"
                        className="w-full bg-[#111111] border border-gray-700 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-500"
                        placeholder="First Name"
                      />
                      <input
                        id="footer-last-name"
                        type="text"
                        name="lastName"
                        required
                        aria-required="true"
                        autoComplete="family-name"
                        className="w-full bg-[#111111] border border-gray-700 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-500"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="footer-phone" className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-wider">
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <div className="flex gap-2">
                      <div className="w-20 bg-[#111111] border border-gray-700 rounded-xl flex items-center justify-center text-xs text-white uppercase font-bold shrink-0">
                        🇮🇳 +91
                      </div>
                      <input
                        id="footer-phone"
                        type="tel"
                        name="phone"
                        required
                        aria-required="true"
                        autoComplete="tel"
                        className="flex-1 bg-[#111111] border border-gray-700 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-500"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="footer-message" className="block text-[10px] font-black text-gray-400 mb-2 uppercase tracking-wider">
                      Describe Your Project <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="footer-message"
                      name="message"
                      required
                      aria-required="true"
                      rows={3}
                      className="w-full bg-[#111111] border border-gray-700 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none focus:border-[#d4ff3f] transition-colors placeholder-gray-500 resize-none"
                      placeholder="Tell us what you're building..."
                    ></textarea>
                  </div>

                  <p className="text-[11px] text-gray-400 font-medium">
                    By submitting, you agree to our{' '}
                    <Link href="/privacy-policy" className="text-[#d4ff3f] underline hover:text-white">
                      Privacy Policy
                    </Link>
                    . We never sell your personal data.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider transition-transform hover:scale-[1.02] active:scale-[0.98] bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_#fff] disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
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

      {/* Main 4-Column Navigation Sitemap: Services, Company, Cities, Legal */}
      <div className="bg-[#181818] text-white border-t border-gray-800 py-14 px-8 md:px-16 w-full relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Section 1: Services */}
          <div>
            <span className="text-[#d4ff3f] text-xs font-black uppercase tracking-wider block mb-4">
              Services
            </span>
            <ul className="space-y-2.5 text-xs font-bold text-gray-300">
              <li>
                <Link href="/services/web-development" className="hover:text-[#d4ff3f] transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/nextjs-development" className="hover:text-[#d4ff3f] transition-colors">
                  Next.js Development
                </Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="hover:text-[#d4ff3f] transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="hover:text-[#d4ff3f] transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software-development" className="hover:text-[#d4ff3f] transition-colors">
                  Custom Software Development
                </Link>
              </li>
              <li className="pt-1.5">
                <Link href="/services" className="text-[#d4ff3f] hover:underline inline-flex items-center gap-1 font-black">
                  View All Services <FaArrowRight className="w-2.5 h-2.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 2: Company */}
          <div>
            <span className="text-[#d4ff3f] text-xs font-black uppercase tracking-wider block mb-4">
              Company
            </span>
            <ul className="space-y-2.5 text-xs font-bold text-gray-300">
              <li>
                <Link href="/about" className="hover:text-[#d4ff3f] transition-colors">
                  About Our Studio
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#d4ff3f] transition-colors">
                  Portfolio &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-[#d4ff3f] transition-colors">
                  Transparent Pricing
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-[#d4ff3f] transition-colors">
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#d4ff3f] transition-colors">
                  Blog &amp; Tech Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4ff3f] transition-colors">
                  Contact Studio
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#d4ff3f] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/free-website-audit" className="hover:text-[#d4ff3f] transition-colors font-black text-[#d4ff3f]">
                  Free Website Audit
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href={siteConfig.brochureUrl}
                  download="IntegersDev_Agency_Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download IntegersDev Agency Brochure PDF"
                  className="hover:text-[#d4ff3f] transition-colors inline-block text-[11px] text-gray-400 font-semibold"
                >
                  Agency Brochure (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Cities */}
          <div>
            <span className="text-[#d4ff3f] text-xs font-black uppercase tracking-wider block mb-4">
              Cities
            </span>
            <ul className="space-y-2.5 text-xs font-bold text-gray-300">
              <li>
                <Link href="/web-development-company-gwalior" className="hover:text-[#d4ff3f] transition-colors">
                  Web Development Gwalior
                </Link>
              </li>
              <li>
                <Link href="/web-development-company-indore" className="hover:text-[#d4ff3f] transition-colors">
                  Web Development Indore
                </Link>
              </li>
              <li>
                <Link href="/web-development-company-bhopal" className="hover:text-[#d4ff3f] transition-colors">
                  Web Development Bhopal
                </Link>
              </li>
              <li className="pt-2 text-[11px] text-gray-400 font-normal leading-relaxed">
                Central India engineering collective building sub-second web platforms for regional brands and national startups.
              </li>
            </ul>
          </div>

          {/* Section 4: Legal */}
          <div>
            <span className="text-[#d4ff3f] text-xs font-black uppercase tracking-wider block mb-4">
              Legal
            </span>
            <ul className="space-y-2.5 text-xs font-bold text-gray-300">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#d4ff3f] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#d4ff3f] transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/accessibility" className="hover:text-[#d4ff3f] transition-colors">
                  Accessibility Statement
                </Link>
              </li>
              <li className="pt-3">
                <div className="p-3 bg-[#111111] border border-gray-800 rounded-xl text-[11px] text-gray-400 font-medium">
                  Compliant with India&apos;s Digital Personal Data Protection Act (DPDPA) 2023 &amp; IT Act 2000.
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Industry Solutions Strip */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <span className="text-[#d4ff3f] text-xs font-black uppercase tracking-wider block mb-1">
              Industry Web Solutions
            </span>
            <p className="text-[11px] font-semibold text-gray-400">
              Custom websites engineered for specific business models and customer conversion flows:
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <Link
              href="/website-for-restaurants"
              className="px-2.5 py-1 rounded-lg bg-[#1c1c1c] border border-gray-700 text-gray-300 hover:text-black hover:bg-[#d4ff3f] hover:border-[#d4ff3f] transition-all"
            >
              Restaurants &amp; Cafes
            </Link>
            <Link
              href="/website-for-travel-agencies"
              className="px-2.5 py-1 rounded-lg bg-[#1c1c1c] border border-gray-700 text-gray-300 hover:text-black hover:bg-[#d4ff3f] hover:border-[#d4ff3f] transition-all"
            >
              Travel &amp; Tours
            </Link>
            <Link
              href="/website-for-clinics"
              className="px-2.5 py-1 rounded-lg bg-[#1c1c1c] border border-gray-700 text-gray-300 hover:text-black hover:bg-[#d4ff3f] hover:border-[#d4ff3f] transition-all"
            >
              Clinics &amp; Doctors
            </Link>
            <Link
              href="/website-for-schools"
              className="px-2.5 py-1 rounded-lg bg-[#1c1c1c] border border-gray-700 text-gray-300 hover:text-black hover:bg-[#d4ff3f] hover:border-[#d4ff3f] transition-all"
            >
              Schools &amp; Institutes
            </Link>
            <Link
              href="/website-for-real-estate"
              className="px-2.5 py-1 rounded-lg bg-[#1c1c1c] border border-gray-700 text-gray-300 hover:text-black hover:bg-[#d4ff3f] hover:border-[#d4ff3f] transition-all"
            >
              Real Estate &amp; Builders
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar - White Background with Black Text */}
      <div className="bg-white border-t-2 border-black py-6 px-8 md:px-16 w-full relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-bold text-gray-600 gap-4 md:gap-0">

          {/* Logo & Agency Name */}
          <Link href="/" className="flex items-center gap-2.5 group hover:opacity-90 transition-opacity" aria-label="IntegersDev Home">
            <div className="relative w-7 h-7 rounded-md overflow-hidden shadow-sm border border-black/10">
              <Image src={logo} alt="IntegersDev Logo" fill sizes="28px" className="object-cover" />
            </div>
            <span className="text-black font-black text-sm tracking-tight group-hover:text-[#62d124] transition-colors">IntegersDev</span>
            <span className="text-gray-400 text-xs hidden sm:inline">•</span>
            <span className="text-gray-600 text-xs hidden sm:inline">Gwalior, Madhya Pradesh, India</span>
          </Link>

          {/* Copyright */}
          <div className="text-center md:text-left text-black font-semibold text-xs">
            © {new Date().getFullYear()} IntegersDev. All Rights Reserved.
          </div>

          {/* Direct Legal Page Links & Social Icons */}
          <div className="flex items-center gap-5 text-black">
            <Link href="/privacy-policy" className="hover:text-[#62d124] transition-colors font-bold text-xs">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#62d124] transition-colors font-bold text-xs">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="hover:text-[#62d124] transition-colors font-bold text-xs">
              Accessibility
            </Link>
            
            {/* Quick Micro Social Icons with accessible labels */}
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-gray-300">
              {socialLinks.map((social) => (
                <a
                  key={`bot-${social.name}`}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="w-7 h-7 rounded-full bg-black text-white hover:bg-[#d4ff3f] hover:text-black flex items-center justify-center transition-colors text-xs"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

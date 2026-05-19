# Integers — Modern Digital Agency Landing Page

A polished Next.js landing page created for a modern digital agency brand. `Integers` showcases services, projects, pricing, expertise, testimonials, and a contact capture flow in a responsive, visually rich layout.

---

## 🚀 Project Overview

`Integers` is a single-page, App Router-based website built with Next.js and Tailwind CSS. It is designed as a startup agency landing page to exhibit:

- Brand positioning and hero messaging
- Service offerings and capability highlights
- Featured project presentation
- Mid-page call-to-action with strong visual hierarchy
- Expertise section with key value propositions
- Testimonials / review showcase
- Pricing tiers and comparison cards
- Contact capture form integrated with a backend database

This repository is ideal for agency, studio, or freelance landing pages that need a clean, modern presentation layer with quick deploy support.

---

## 🧱 Tech Stack

- **Next.js 16.2.4** (App Router)
- **React 19.2.4**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **React Icons**
- **Mongoose** (MongoDB integration)

---

## 📦 What’s Included

- `src/app/page.tsx` — root page rendering all landing sections
- `src/components/Navbar.tsx` — sticky navigation with call-to-action buttons
- `src/components/Hero.tsx` — primary hero section with headline and visual accents
- `src/components/Services.tsx` — service cards and feature summaries
- `src/components/Projects.tsx` — project showcase layout
- `src/components/MidCTA.tsx` — promotional call-to-action section
- `src/components/Expertise.tsx` — expertise and capability cards
- `src/components/Testimonials.tsx` — review/testimonial section
- `src/components/Pricing.tsx` — pricing tier cards with comparison styling
- `src/components/Footer.tsx` — contact form, footer links, and brand details
- `src/actions/contact.ts` — server action handling contact form submissions
- `src/app/api/reviews/route.ts` — API route for saving and fetching reviews
- `src/lib/mongodb.ts` — MongoDB connection helper
- `src/models/Contact.ts` — contact data schema
- `src/models/Review.ts` — review data schema

---

## ✅ Key Features

- Fully responsive landing page layout
- Modular reusable sections for fast updates
- Visual design using Tailwind CSS utilities
- Animated UI enhancements via Framer Motion
- Iconography with `react-icons`
- Contact form submission using a server action
- MongoDB data persistence via `mongoose`
- Reviews API route with `GET` and `POST` support

---

## 🔧 Backend & Data Flow

- Contact requests are handled by `src/actions/contact.ts` using a Next.js server action.
- Submitted contact entries save to MongoDB through `src/models/Contact.ts`.
- Reviews are managed by `src/app/api/reviews/route.ts` and saved with `src/models/Review.ts`.
- MongoDB connectivity is centralized in `src/lib/mongodb.ts`.

---

## 💻 Installation

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open `http://localhost:3000` to view the site.

Build for production:

```bash
npm run build
npm start
```

Run lint checks:

```bash
npm run lint
```

---

## 🌍 Environment & Deployment Notes

- This project uses the Next.js App Router and server actions.
- Ensure your MongoDB connection settings are configured if using the form persistence features.
- Replace placeholder contact details and social links with real values in `src/components/Footer.tsx`.

---

## 🛠 Customization

To update the content or appearance:

- Edit text, headings, and cards in `src/components/*`.
- Replace or add image assets under `src/assets/` and `public/assets/`.
- Adjust color and spacing using Tailwind utility classes.
- Change review or pricing content in the corresponding sections.

---

## 🤝 Contributing

Improvements are welcome. Create a branch, make your changes, and submit a pull request.

---

## 📌 Notes

- The contact form uses a server-side submission handler.
- Reviews API supports saving new reviews and fetching top-rated entries.
- The project is structured for easy expansion into a full agency website.

---

## 🚀 Quick Commands

```bash
npm install
npm run dev
npm run build
npm start
npm run lint
```

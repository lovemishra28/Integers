# Integers — Modern Digital Agency Landing Page

A polished Next.js landing page designed for a startup digital agency offering web, mobile, and design services.

Built with a clean UI, interactive cards, modern motion, and reusable sections that showcase services, projects, expertise, pricing, and contact.

---

## 🚀 Project Overview

`Integers` is a single-page responsive portfolio-style website built with Next.js and Tailwind CSS.

It includes:

- Hero section with branding and headline
- Service cards with iconography and feature highlights
- Project showcases with modern card layouts
- Mid-section call-to-action with image and badge accents
- Expertise cards with vertical alignment and status indicators
- Pricing cards with bold visual hierarchy
- Contact form with client-side submission
- Animated icon elements using `react-icons`

---

## 🧱 Tech Stack

- **Next.js 16.2.4**
- **React 19.2.4**
- **TypeScript**
- **Tailwind CSS v4**
- **React Icons**
- **Framer Motion**
- **Mongoose** (for backend/contact integration)

---

## 📁 Project Structure

- `src/app/page.tsx` — main landing page assembly
- `src/components/` — reusable UI sections and cards
- `src/components/Navbar.tsx` — navigation and CTA button
- `src/components/Hero.tsx` — hero header section
- `src/components/Services.tsx` — service overview cards
- `src/components/Projects.tsx` — featured work section
- `src/components/MidCTA.tsx` — mid-page CTA and image panel
- `src/components/Expertise.tsx` — capabilities grid
- `src/components/Testimonials.tsx` — review/testimonial section
- `src/components/Pricing.tsx` — pricing tier cards
- `src/components/Footer.tsx` — contact form and footer
- `src/actions/contact.ts` — contact form submission action
- `src/lib/mongodb.ts` — MongoDB connection helper
- `src/models/Contact.ts` — contact form schema

---

## ✅ Features

- Responsive layout built for desktop and mobile
- Stylized grid cards with consistent bottom alignment
- Themed icon usage across the UI
- Custom button and badge styles
- Contact form with submit handling
- Full design polish for a digital agency portfolio

---

## 💻 Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### Build for production

```bash
npm run build
npm start
```

---

## 🛠️ Customization

To update the page content:

- Modify section titles and text in `src/components/*`
- Update project data and service cards directly in component arrays
- Replace images in `public/assets/` and `src/assets/`
- Change theme colors with Tailwind utility classes

---

## 📌 Notes

- The project currently uses inline icons from `react-icons`
- Pricing and expertise cards are built for easy content updates
- The contact form is connected to the `src/actions/contact.ts` flow

---

## 🤝 Contribution

Contributions and improvements are welcome. If you want to add a new section or refine the design, please create a new branch and open a pull request.

---

## 📣 License

This repository is currently private and intended for personal or startup use.

---

## 🌟 Quick Commands

```bash
npm install
npm run dev
npm run build
npm start
npm run lint
```

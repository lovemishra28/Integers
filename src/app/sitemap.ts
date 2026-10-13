import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllProjectSlugs } from "@/data/projects";
import { getAllCitySlugs } from "@/data/cities";
import { getAllIndustrySlugs } from "@/data/industryLandings";
import { getAllBlogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url || "https://integersdev.in";
  const now = new Date();

  // 1. Core Primary Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-website-audit`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 2. Service Pages
  const serviceSlugs = [
    "web-development",
    "ui-ux-design",
    "mobile-app-development",
    "nextjs-development",
    "custom-software-development",
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // 3. Portfolio Case Study Slugs (auto-pulled from projects dataset)
  const portfolioRoutes: MetadataRoute.Sitemap = getAllProjectSlugs().map(
    (slug) => ({
      url: `${baseUrl}/portfolio/${slug}`,
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  // 4. City Landing Pages (auto-pulled from cities dataset)
  const cityRoutes: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date("2026-10-10"),
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // 5. Industry Landing Pages (auto-pulled from industryLandings dataset)
  const industryRoutes: MetadataRoute.Sitemap = getAllIndustrySlugs().map(
    (slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date("2026-10-12"),
      changeFrequency: "weekly",
      priority: 0.85,
    })
  );

  // 6. Blog Posts (auto-pulled from blog dataset with post-specific lastModified)
  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.isoDate),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...portfolioRoutes,
    ...cityRoutes,
    ...industryRoutes,
    ...blogRoutes,
  ];
}

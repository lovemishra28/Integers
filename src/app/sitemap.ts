import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { getAllProjects } from "@/data/projects";
import { getAllCitySlugs } from "@/data/cities";
import { INDUSTRY_LANDINGS } from "@/data/industryLandings";
import { getAllBlogPosts } from "@/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url || "https://integersdev.in";
  // The launch / last full redesign update date for static and landing pages
  const lastDesignUpdate = new Date("2026-10-14T00:00:00.000Z");

  // 1. Core Primary Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: lastDesignUpdate,
      changeFrequency: "daily",
      priority: 1.0,
      images: [`${baseUrl}/og-image.png`, `${baseUrl}/logo.png`],
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastDesignUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${baseUrl}/services/web-dev-showcase.png`,
        `${baseUrl}/services/mobile-app-showcase.png`,
      ],
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: lastDesignUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [
        `${baseUrl}/projects/vastavikta.png`,
        `${baseUrl}/projects/divyanshi-travels.png`,
      ],
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: lastDesignUpdate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/free-website-audit`,
      lastModified: lastDesignUpdate,
      changeFrequency: "weekly",
      priority: 0.85,
      images: [`${baseUrl}/og-image.png`],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastDesignUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${baseUrl}/og-image.png`],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastDesignUpdate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: lastDesignUpdate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastDesignUpdate,
      changeFrequency: "weekly",
      priority: 0.8,
      images: [`${baseUrl}/og-image.png`],
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastDesignUpdate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastDesignUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: lastDesignUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/accessibility`,
      lastModified: lastDesignUpdate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // 2. Individual Specialized Service Pages
  const servicesConfig = [
    {
      slug: "web-development",
      image: `${baseUrl}/services/web-dev-showcase.png`,
    },
    {
      slug: "ui-ux-design",
      image: `${baseUrl}/services/uiux-showcase.png`,
    },
    {
      slug: "mobile-app-development",
      image: `${baseUrl}/services/mobile-app-showcase.png`,
    },
    {
      slug: "nextjs-development",
      image: `${baseUrl}/services/web-dev-showcase.png`,
    },
    {
      slug: "custom-software-development",
      image: `${baseUrl}/services/custom-solutions-showcase.png`,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = servicesConfig.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: lastDesignUpdate,
    changeFrequency: "weekly",
    priority: 0.9,
    images: service.image ? [service.image] : undefined,
  }));

  // 3. Portfolio Case Study Slugs (pulled from projects dataset with cover images)
  const portfolioRoutes: MetadataRoute.Sitemap = getAllProjects().map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: lastDesignUpdate,
    changeFrequency: "monthly",
    priority: 0.85,
    images: project.coverImage ? [`${baseUrl}${project.coverImage}`] : undefined,
  }));

  // 4. City Landing Pages (pulled from cities dataset)
  const cityRoutes: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: lastDesignUpdate,
    changeFrequency: "weekly",
    priority: 0.85,
    images: [`${baseUrl}/og-image.png`],
  }));

  // 5. Industry Landing Pages (pulled from industryLandings dataset with case study previews)
  const industryRoutes: MetadataRoute.Sitemap = Object.values(INDUSTRY_LANDINGS).map(
    (industry) => ({
      url: `${baseUrl}/${industry.slug}`,
      lastModified: lastDesignUpdate,
      changeFrequency: "weekly",
      priority: 0.85,
      images: industry.caseStudy?.coverImage
        ? [`${baseUrl}${industry.caseStudy.coverImage}`]
        : undefined,
    })
  );

  // 6. Blog Posts (pulled from MDX dataset with post-specific lastModified & cover images)
  const blogRoutes: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.isoDate),
    changeFrequency: "monthly",
    priority: 0.75,
    images: post.coverImage ? [`${baseUrl}${post.coverImage}`] : undefined,
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

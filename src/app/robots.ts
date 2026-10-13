import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url || "https://integersdev.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/74566",
        "/74566/",
        "/api/",
        "/api/admin/",
        "/api/eo7456/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

import type { MetadataRoute } from "next";
import origin from "@utils/origin";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}

export const dynamic = "force-static";

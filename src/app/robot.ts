import type { MetadataRoute } from "next";
import config from "@data/config.json";

const { domain } = config;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `https://${domain}/sitemap.xml`,
  };
}

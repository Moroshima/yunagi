import type { MetadataRoute } from "next";
import globalConfig from "@data/configs/global.json";

const { domain } = globalConfig;

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

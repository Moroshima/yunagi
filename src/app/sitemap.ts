import type { MetadataRoute } from "next";
import config from "@data/config.json";
import posts from "@data/posts.json";

const { domain, navigation } = config;

const siteUrl = `https://${domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteMapUrls: {
    url: string;
    lastModified: Date;
    changeFrequency: "yearly" | "monthly" | "weekly";
    priority: number;
  }[] = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];

  for (const item of navigation.primary) {
    if (item.path && item.path !== "/") {
      siteMapUrls.push({
        url: `${siteUrl}/${item.path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  }

  for (const post of posts) {
    siteMapUrls.push({
      url: `${siteUrl}/post/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return siteMapUrls;
}

export const dynamic = "force-static";

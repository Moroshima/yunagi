import type { MetadataRoute } from "next";
import globalConfig from "@data/configs/global.json";
import navigationConfig from "@data/configs/navigation.json";
import posts from "@data/posts.json";

const { domain } = globalConfig;

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

  navigationConfig.forEach((item) => {
    if (item.url && item.url !== "/") {
      siteMapUrls.push({
        url: `${siteUrl}/${item.url}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  });

  posts.forEach((post) => {
    siteMapUrls.push({
      url: `${siteUrl}/post/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  return siteMapUrls;
}

export const dynamic = "force-static";

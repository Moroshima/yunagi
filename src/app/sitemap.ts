import type { MetadataRoute } from "next";
import navigationData from "@data/navigation.json";
import postsData from "@data/posts.json";

const SITE_URL = `https://${process.env.SITE_DOMAIN}`;

const { navigation } = navigationData;
const { posts } = postsData;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteMapUrls: {
    url: string;
    lastModified: Date;
    changeFrequency: "yearly" | "monthly" | "weekly";
    priority: number;
  }[] = [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];

  navigation.forEach((item) => {
    if (item.url && item.url !== "/") {
      siteMapUrls.push({
        url: `${SITE_URL}/${item.url}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.9,
      });
    }
  });

  posts.forEach((post) => {
    siteMapUrls.push({
      url: `${SITE_URL}/post/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  });

  return siteMapUrls;
}

export const dynamic = "force-static";

import { MetadataRoute } from "next";
import navigation from "@data/navigation.json";
import posts from "@data/posts.json";

const SITE_URL = `https://${process.env.SITE_DOMAIN}`;

let siteMapUrls: {
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

export default function sitemap(): MetadataRoute.Sitemap {
  return siteMapUrls;
}

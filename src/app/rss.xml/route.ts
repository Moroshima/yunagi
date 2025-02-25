import fs from "fs";
import path from "path";
import { marked } from "marked";
import RSS from "rss";
import globalConfig from "@data/configs/global.json";
import postsData from "@data/posts.json";

const { domain, owner, title, description, rss } = globalConfig;
const { posts } = postsData;

const siteUrl = `https://${domain}`;

const renderer = {
  image({
    href,
    title,
    text,
  }: {
    href: string;
    title: string | null;
    text: string;
  }) {
    const newHref = href.replace("./assets", `${siteUrl}/images`);
    return `<img src="${newHref}" alt="${text}" title="${title}" />`;
  },
};

marked.use({ renderer });

export async function GET() {
  const postsDirectory = path.join(process.cwd(), "src", "data", "posts");

  const feed = new RSS({
    title: `RSS Feed | ${title}`,
    description: description,
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    image_url: `${siteUrl}/${rss.imageUrl}`,
    pubDate: new Date(),
    copyright: `Copyright © ${new Date().getFullYear()} ${owner}. Ver.${
      process.env.VERSION
    }`,
  });

  posts.forEach(
    (value: {
      slug: string;
      title: string;
      date: string;
      update: string | null;
      lang: string;
      category: string;
      keywords: string[];
      description: string;
    }) => {
      const filePath = path.join(postsDirectory, `${value.slug}.md`);
      const rawContent = fs.readFileSync(filePath, { encoding: "utf-8" });

      // remove title
      const lines = rawContent.split("\n");
      lines.splice(0, 2);
      const content = lines.join("\n");

      feed.item({
        title: value?.title,
        date: value?.date,
        url: `${siteUrl}/post/${value?.slug}`,
        description: value?.description,
        custom_elements: [{ "content:encoded": marked.parse(content) }],
      });
    },
  );

  return new Response(feed.xml(), {
    headers: {
      "content-type": "application/xml",
    },
  });
}

export const dynamic = "force-static";

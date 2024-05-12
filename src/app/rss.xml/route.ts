import fs from "fs";
import path from "path";
import { marked } from "marked";
import RSS from "rss";
import posts from "@data/posts.json";

const SITE_URL = `https://${process.env.SITE_DOMAIN}`;

const renderer = {
  image(href: string, title: string | null, text: string) {
    const newHref = href.replace("./assets", `${SITE_URL}/images`);
    return `<img src="${newHref}" alt="${text}" title="${title}">`;
  },
};

marked.use({ renderer });

export async function GET() {
  const postsDirectory = path.join(process.cwd(), "src", "data", "posts");

  const feed = new RSS({
    title: "RSS Feed | Moroshima's Blog",
    description: "却顾所来径，苍苍横翠微。",
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/rss.xml`,
    image_url: `${SITE_URL}/images/Snipaste_2023-05-04_21-03-25.ico`,
    pubDate: new Date(),
    copyright: `Copyright © ${new Date().getFullYear()} Moroshima. Ver.${
      process.env.VERSION
    }`,
  });

  posts.forEach((post: any) => {
    const filePath = path.join(postsDirectory, `${post.slug}.md`);
    const rawContent = fs.readFileSync(filePath, { encoding: "utf8" });

    // remove title
    const lines = rawContent.split("\n");
    lines.splice(0, 2);
    const content = lines.join("\n");

    feed.item({
      title: post?.title,
      date: post?.date,
      url: `${SITE_URL}/post/${post?.slug}`,
      description: post?.description,
      custom_elements: [{ "content:encoded": marked.parse(content) }],
    });
  });

  return new Response(feed.xml(), {
    headers: {
      "content-type": "application/xml",
    },
  });
}

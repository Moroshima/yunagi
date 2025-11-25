import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";
import RSS from "rss";
import globalConfig from "@data/configs/global.json";
import posts from "@data/posts.json";

const { domain, owner, title, description, rss } = globalConfig;

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
    const newHref = href.replace("./assets", `${siteUrl}/images/assets`);
    return `<img src="${newHref}" alt="${text}" title="${title}" />`;
  },
};

marked.use({ renderer });

export async function GET() {
  const feed = new RSS({
    title: `RSS Feed | ${title}`,
    description: description,
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    image_url: `${siteUrl}/${rss.imageUrl}`,
    pubDate: new Date(),
    copyright: `Copyright © ${new Date().getFullYear()} ${owner}. Ver.${
      JSON.parse(
        fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8"),
      ).version
    }`,
  });

  for (const value of posts) {
    const content = await processor.process(
      fs
        .readFileSync(
          path.join(process.cwd(), "src", "data", "posts", `${value.slug}.md`),
          "utf8",
        )
        .split("\n")
        .splice(2) // remove title
        .join("\n"),
    );

    feed.item({
      title: value?.title,
      date: value?.date,
      url: `${siteUrl}/post/${value?.slug}`,
      description: value?.description,
      custom_elements: [{ "content:encoded": marked.parse(content) }],
    });
  }

  const headers = new Headers({ "content-type": "application/xml" });

  return new Response(feed.xml(), { headers });
}

export const dynamic = "force-static";

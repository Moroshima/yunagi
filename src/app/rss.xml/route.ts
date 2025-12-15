import type { Root } from "mdast";
import fs from "node:fs";
import path from "node:path";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import RSS from "rss";
import { unified } from "unified";
import { visit } from "unist-util-visit";
import config from "@data/config.json";
import posts from "@data/posts.json";
import origin from "@utils/origin";

const { owner, title, description, rss } = config;

const processor = unified()
  .use(remarkParse)
  // eslint-disable-next-line unicorn/consistent-function-scoping
  .use(() => (tree: Root) => {
    visit(tree, "image", (node) => {
      if (node.url.startsWith("./assets/")) {
        node.url.replace("./assets", `${origin}/images/assets`);
      }
    });
  })
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeStringify);

export async function GET() {
  const feed = new RSS({
    title: `RSS Feed | ${title}`,
    description: description,
    site_url: origin,
    feed_url: `${origin}/rss.xml`,
    image_url: `${origin}/${rss.image}`,
    pubDate: new Date(),
    copyright: `© ${new Date().getFullYear()} ${owner}. All rights reserved.`,
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
      url: `${origin}/post/${value?.slug}`,
      description: value?.description,
      custom_elements: [{ "content:encoded": String(content) }],
    });
  }

  return new Response(feed.xml(), {
    headers: new Headers({ "Content-Type": "application/xml" }),
  });
}

export const dynamic = "force-static";

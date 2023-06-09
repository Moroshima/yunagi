import fs from "fs";
import path from "path";
import RSS from "rss";
import { getSortedPostData } from "./posts";
import getSite from "./site";

export default async function generateRssFeed() {
  const site_url = getSite();

  const feedOptions = {
    title: "RSS Feed | Moroshima's Blog",
    description:
      "Everything faded into mist. The past was erased, the erasure was forgotten, the lie became truth.",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/images/Snipaste_2023-05-04_21-03-25.ico`,
    pubDate: new Date(),
    copyright: `Copyright © ${new Date().getFullYear()} Ver 0.1.0 @ Moroshima`,
  };

  const feed = new RSS(feedOptions);

  const posts = await getSortedPostData();

  posts.forEach((post: any) => {
    feed.item({
      title: post?.title,
      date: post?.date,
      url: post?.url,
      description: post?.description,
      custom_elements: [{ "content:encoded": post?.content }],
    });
  });

  fs.writeFileSync(
    /* 直接写入 public 目录 */
    path.join(process.cwd(), "/public/rss.xml"),
    feed.xml({ indent: true })
  );
}

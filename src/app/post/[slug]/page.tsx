import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Comment from "@components/comment";
import Markdown from "@components/markdown";
import globalConfig from "@data/configs/global.json";
import postsData from "@data/posts.json";

const { title } = globalConfig;
const { posts } = postsData;

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

let metadata: Metadata = {};

export default async function PostRender({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  metadata = {
    title: `${post?.title} | ${title}`,
  };

  const filePath = await path.join(
    process.cwd(),
    "src",
    "data",
    "posts",
    `${slug}.md`,
  );
  const source = fs.readFileSync(filePath, { encoding: "utf-8" });

  return (
    <main>
      <Markdown source={source} />
      <Comment />
    </main>
  );
}

export { metadata };

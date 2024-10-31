import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Comment from "@components/comment";
import Markdown from "@components/markdown";
import posts from "@data/posts.json";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

let metadata: Metadata = {};

export default async function PostRender({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  post ? null : notFound();

  metadata = {
    title: `${post?.title} | Moroshima's Blog`,
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

import fs from "fs";
import path from "path";
import { Metadata } from "next";
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
  const post = posts.find((item) => item.slug === params.slug);
  post ? null : notFound();

  metadata = {
    title: `${post?.title} | Moroshima's Blog`,
  };

  const filePath = path.join(
    process.cwd(),
    "src",
    "data",
    "posts",
    `${params.slug}.md`
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

import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Comment from "@components/comment";
import Markdown from "@components/markdown";
import globalConfig from "@data/configs/global.json";
import posts from "@data/posts.json";

const { title } = globalConfig;

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  return {
    title: `${post?.title} | ${title}`,
  };
}

export default async function PostRender({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const source = fs.readFileSync(
    path.join(process.cwd(), "src", "data", "posts", `${slug}.md`),
    "utf8",
  );

  return (
    <main>
      <Markdown source={source} />
      <Comment />
    </main>
  );
}

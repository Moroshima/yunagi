import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import rehypeToc from "rehype-toc";
import { EXIT, visitParents } from "unist-util-visit-parents";
import Comment from "@components/comment";
import Markdown from "@components/markdown";
import config from "@data/config.json";
import posts from "@data/posts.json";

const { title } = config;

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
    <div>
      <div>
        <main>
          <Markdown source={source} />
        </main>
        <Comment />
      </div>
      <div>
        <MDXRemote
          source={source}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [rehypeToc, { headings: ["h2", "h3", "h4", "h5", "h6"] }],
                // eslint-disable-next-line unicorn/consistent-function-scoping
                () => (tree) => {
                  visitParents(tree, "element", (node, ancestors) => {
                    if (node.properties?.className?.includes("toc")) {
                      ancestors.at(-1).children = [node];
                      return EXIT;
                    }
                  });
                },
              ],
            },
          }}
        />
      </div>
    </div>
  );
}

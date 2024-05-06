import path from "path";
import fs from "fs";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import { Metadata } from "next";
import posts from "@/posts/posts.json";
import { notFound } from "next/navigation";
import Comment from "@/components/comment";
import remarkGfm from "remark-gfm";
import rehypeToc from "rehype-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeRaw from "rehype-raw";
import rehypeShiki from "@shikijs/rehype";
import rehypeMermaid from "rehype-mermaid";

let metadata: Metadata = {};

export default async function PostRender({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((item) => item.name === params.slug);
  post ? null : notFound();

  metadata = {
    title: `${post?.title} | Moroshima's Blog`,
  };
  const filePath = path.join(
    process.cwd(),
    "src",
    "posts",
    `${params.slug}.md`
  );

  const executablePath = () => {
    switch (process.platform) {
      case "darwin":
        return "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; // for my macOS device
      case "linux":
        return "/opt/google/chrome/google-chrome"; // for GitHub Actions Ubuntu
      case "win32":
        return "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
    }
  };

  const markdown = fs.readFileSync(filePath, "utf8");
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex)
    // .use(rehypeMermaid, {
    //   launchOptions: {
    //     executablePath: () => {
    //       switch (process.platform) {
    //         case "darwin":
    //           return "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"; // for my macOS device
    //           break;
    //         case "linux":
    //           "/opt/google/chrome/google-chrome"; // for GitHub Actions Ubuntu
    //           break;
    //         case "win32":
    //           "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
    //           break;
    //       } // for different devices
    //     },
    //   },
    // })
    // .use(rehypeMermaid, {
    //   launchOptions: {
    //     executablePath:
    //       "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    //   },
    // })
    .use(rehypeShiki, {
      // or `theme` for a single theme
      themes: {
        light: "github-dark-default",
        dark: "github-dark-default",
      },
    })
    .use(rehypeSlug)
    .use(rehypeToc, { headings: ["h2", "h3", "h4", "h5", "h6"] })
    .use(rehypeAutolinkHeadings, {
      behavior: "wrap",
      test: ["h2", "h3", "h4", "h5", "h6"],
    })

    .use(rehypeStringify)
    .process(markdown);

  return (
    <>
      <div>My Post: {params.slug}</div>
      <div dangerouslySetInnerHTML={{ __html: html.toString() }} />
      <Comment />
    </>
  );
}

export { metadata };

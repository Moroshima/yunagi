import path from "path";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import sharp from "sharp";
import rehypeShiki from "@shikijs/rehype";

export default function Markdown(props: { source: string }) {
  return (
    <MDXRemote
      components={{
        img: async (props) => {
          const src = props.src.replace("./assets", `/images/assets`);
          const metadata = await sharp(
            path.join(
              process.cwd(),
              "public",
              "images",
              "assets",
              props.src.slice("./assets".length),
            ),
          ).metadata();

          return (
            <Image
              width={metadata.width}
              height={metadata.height}
              src={src}
              alt={props.alt}
            />
          );
        },
        a: (props) => {
          return props.href.startsWith("#") ? (
            <a {...props}>{props.children}</a>
          ) : (
            <a {...props} target="_blank">
              {props.children}
            </a>
          );
        },
      }}
      source={props.source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkMath],
          rehypePlugins: [
            rehypeKatex,
            [
              rehypeShiki,
              {
                // or `theme` for a single theme
                themes: {
                  light: "github-dark-default",
                  dark: "github-light-default",
                },
              },
            ],
            rehypeSlug,
            [rehypeToc, { headings: ["h2", "h3", "h4", "h5", "h6"] }],
            [
              rehypeAutolinkHeadings,
              {
                behavior: "wrap",
                test: ["h2", "h3", "h4", "h5", "h6"],
              },
            ],
          ],
        },
      }}
    />
  );
}

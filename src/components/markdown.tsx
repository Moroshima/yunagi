import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeShiki from "@shikijs/rehype";
import rehypeSlug from "rehype-slug";
import rehypeToc from "rehype-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default function Markdown(props: { source: string }) {
  return (
    <MDXRemote
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

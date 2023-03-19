// next.config.mjs
import withMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "rehype-toc";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import { visit } from "unist-util-visit";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
};

// Merge MDX config with Next.js config
export default withMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGfm, remarkSlug, remarkMath],
    rehypePlugins: [
      /* 介入dom生成，将代码块原始内容绑定至对应节点 */
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === "element" && node?.tagName === "pre") {
            if (node.children?.[0].tagName === "code")
              node.properties.raw = node.children?.[0].children?.[0].value;
          }
        });
        return null;
      },
      rehypeCodeTitles,
      [rehypePrism, { ignoreMissing: true, showLineNumbers: true }],
      rehypeKatex,
      [rehypeToc, { headings: ["h2", "h3", "h4", "h5", "h6"] }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          content: { type: "text", value: "#" },
        },
      ],
      rehypeRaw,
    ],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})(nextConfig);

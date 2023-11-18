// next.config.mjs
import withMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeMermaid from "rehype-mermaid";
import rehypePrism from "rehype-prism-plus";
import rehypeToc from "rehype-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { visit } from "unist-util-visit";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  output: "export",
  // Prevent automatic `/me` -> `/me/`, instead preserve `href`
  skipTrailingSlashRedirect: true,
  // Change the output directory `out` -> `dist`
  distDir: "dist",
};

// Merge MDX config with Next.js config
export default withMDX({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGfm, remarkMath],
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
      rehypeRaw,
      rehypeKatex,
      [
        rehypeMermaid,
        {
          launchOptions: {
            executablePath:
              process.platform === "darwin"
                ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" // for my macOS device
                : "/opt/google/chrome/google-chrome", // for GitHub Actions Ubuntu
          },
        },
      ],
      [rehypePrism, { ignoreMissing: true, showLineNumbers: true }],
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
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: "@mdx-js/react",
  },
})(nextConfig);

import "@/styles/globals.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { EB_Garamond, Noto_Serif_SC } from "next/font/google";
import { MDXProvider } from "@mdx-js/react";
import Giscus from "@giscus/react";

const PreDynamicComponent = dynamic(() => import("../components/pre"), {
  ssr: false,
});
const ImageDynamicComponent = dynamic(() => import("../components/image"), {
  ssr: false,
});
const TableDynamicComponent = dynamic(() => import("../components/table"), {
  ssr: false,
});

const eb_garamond = EB_Garamond({ subsets: ["latin"], preload: true });
const noto_serif_sc = Noto_Serif_SC({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  preload: true,
});

/* 自定义部分 mdx 渲染的 html 标签 */
const components = {
  pre: PreDynamicComponent,
  img: ImageDynamicComponent,
  table: TableDynamicComponent,
  /* giscus 评论区 */
  wrapper: (props: any) => (
    <div className="post">
      <main {...props} />
      <Giscus
        id="comments"
        repo="Moroshima/open-discussion"
        repoId="R_kgDOJLaQvw"
        category="Announcements"
        categoryId="DIC_kwDOJLaQv84CU-QA"
        mapping="pathname"
        strict="1"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="zh-CN"
        loading="lazy"
      />
    </div>
  ),
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <style jsx global>{`
        html {
          font-family: ${eb_garamond.style.fontFamily},
            ${noto_serif_sc.style.fontFamily}, serif;
          scroll-behavior: smooth;
        }
      `}</style>
      <div className="topbar">
        <Link href="/">Moroshima&apos;s Blog</Link>
        <div className="topbar-link-group">
          <Link href="/">首页</Link>
          <Link href="/articles">文章</Link>
          <Link href="/archives">归档</Link>
          <Link href="/categories">分类</Link>
          <Link href="/friends">友链</Link>
          <Link href="/about">关于我</Link>
        </div>
      </div>
      <div className="container">
        <Component {...pageProps} />
      </div>
      <footer className="footer">
        <p>
          <a href="https://github.com/Moroshima/yunagi-next">Yunagi</a> |
          Powered by <a href="https://nextjs.org">Next.js</a>
        </p>
        <p>
          若非特别注明，本站所有内容都遵从{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
            rel="license"
          >
            CC BY-NC-SA 4.0
          </a>{" "}
          授权条款。
        </p>
        <p>
          Copyright © 2023 Ver 0.1.0 @ <Link href="/about">Moroshima</Link>
        </p>
      </footer>
    </MDXProvider>
  );
}

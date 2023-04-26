import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { EB_Garamond, Noto_Serif_SC } from "next/font/google";
import Link from "next/link";
import { MDXProvider } from "@mdx-js/react";
import Giscus from "@giscus/react";
import { useState } from "react";

const eb_garamond = EB_Garamond({ subsets: ["latin"], preload: true });
const noto_serif_sc = Noto_Serif_SC({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  preload: true,
});

const ResponsiveImage = (props: any) => {
  return (
    <img
      style={{ maxWidth: "100%" }}
      src={props.src.replace("./assets", "/images")}
      alt={props.alt}
    />
  );
};

/* 代码块复制按钮 */
const PreLayout = ({ children, raw, ...props }: any) => {
  const [copy, setCopy] = useState(false);
  return (
    <pre {...props}>
      {copy ? (
        <button className="copy-to-clipboard copy-button-clicked">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
          >
            <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path>
          </svg>
        </button>
      ) : (
        <button
          className="copy-to-clipboard"
          onClick={() => {
            navigator.clipboard.writeText(raw).then(
              () => {
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 2000);
              },
              () => {
                console.log("copy failed!");
                alert("copy failed!");
              }
            );
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="16"
            height="16"
          >
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
          </svg>
        </button>
      )}

      {children}
    </pre>
  );
};

/* 自定义部分 mdx 渲染的 html 标签 */
const components = {
  img: ResponsiveImage,
  /* giscus 评论区 */
  wrapper: (props: any) => (
    <div className="post">
      <main {...props} />
      <div style={{padding: "0 32px",marginBottom: "16px"}}>
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
    </div>
  ),
  pre: PreLayout,
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
          <Link href="/about">关于</Link>
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
          Copyright © 2023 Ver0.1.0 @ <Link href="/about">Moroshima</Link>
        </p>
      </footer>
    </MDXProvider>
  );
}

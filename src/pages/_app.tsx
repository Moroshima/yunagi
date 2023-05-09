import "@/styles/globals.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { EB_Garamond, Noto_Serif_SC, Allison, Ms_Madi } from "next/font/google";
import { MDXProvider } from "@mdx-js/react";
import { useEffect, useState } from "react";
import { ChevronUpIcon, ThreeBarsIcon, XIcon } from "@primer/octicons-react";

const PreDynamicComponent = dynamic(() => import("../components/pre"), {
  ssr: false,
});
const ImageDynamicComponent = dynamic(() => import("../components/image"), {
  ssr: false,
});
const TableDynamicComponent = dynamic(() => import("../components/table"), {
  ssr: false,
});
const WrapperDynamicComponent = dynamic(() => import("../components/wrapper"), {
  ssr: false,
});
const HeadingDynamicComponent = dynamic(() => import("../components/heading"));

const eb_garamond = EB_Garamond({ subsets: ["latin"], preload: true });
const noto_serif_sc = Noto_Serif_SC({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  preload: true,
});
const allison = Allison({
  weight: ["400"],
  subsets: ["latin"],
  preload: true,
});
const ms_madi = Ms_Madi({
  weight: ["400"],
  subsets: ["latin"],
  preload: true,
});

/* 自定义部分 mdx 渲染的 html 标签 */
const components = {
  pre: PreDynamicComponent,
  img: ImageDynamicComponent,
  table: TableDynamicComponent,
  wrapper: WrapperDynamicComponent,
  h1: HeadingDynamicComponent,
  h2: ({ children, ...props }: any) => (
    <h2>
      <span id={props.id} style={{ paddingTop: "calc(64px + 0.83em)" }}></span>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3>
      <span id={props.id} style={{ paddingTop: "calc(64px + 1em)" }}></span>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4>
      <span id={props.id} style={{ paddingTop: "calc(64px + 1.33em)" }}></span>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: any) => (
    <h5>
      <span id={props.id} style={{ paddingTop: "calc(64px + 1.67em)" }}></span>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: any) => (
    <h6>
      <span id={props.id} style={{ paddingTop: "calc(64px + 2.33em)" }}></span>
      {children}
    </h6>
  ),
  nav: ({ children, ...props }: any) =>
    /* 在文章具有目录结构的情况下显示文章目录 */
    children?.props.children === undefined ? null : (
      <nav {...props}>
        <p className="table-of-contents-header">
          <strong>文章目录</strong>
        </p>
        <div className="table-of-contents">{children}</div>
      </nav>
    ),
  /* 文章内部非锚点标签在新标签页中打开 */
  a: ({ children, ...props }: any) => {
    if (props.href.startsWith("#")) return <a {...props}>{children}</a>;
    else
      return (
        <a {...props} target="_blank">
          {children}
        </a>
      );
  },
  p: ({ children, ...props }: any) => {
    if (children?.props?.src !== undefined) return <>{children}</>;
    else return <p {...props}>{children}</p>;
  },
};

export default function App({ Component, pageProps }: AppProps) {
  const [scrollToTopHidden, setScrollToTopHidden] = useState(true);
  const [headerExpand, setHeaderExpand] = useState(false);
  useEffect(() => {
    setScrollToTopHidden(window.scrollY > 0 ? false : true);
    const handleScroll: any = () => {
      if (window.scrollY > 64) {
        setScrollToTopHidden(false);
      } else setScrollToTopHidden(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <MDXProvider components={components}>
      <style jsx global>{`
        html {
          font-family: ${eb_garamond.style.fontFamily},
            ${noto_serif_sc.style.fontFamily}, serif;
        }
      `}</style>
      <div className="header-wrapper">
        <div className="header">
          <Link
            href="/"
            style={{
              fontFamily: `${allison.style.fontFamily},${noto_serif_sc.style.fontFamily},serif`,
              fontSize: 24,
            }}
          >
            Moroshima&apos;s Blog
          </Link>
          <div className="header-link-group">
            <Link href="/">首页</Link>
            <Link href="/post">文章</Link>
            <Link href="/archive">归档</Link>
            <Link href="/category">分类</Link>
            <Link href="/links">友链</Link>
            <Link href="/about">关于</Link>
            <Link href="/rss.xml">订阅</Link>
          </div>
          <button
            className="header-expand-icon"
            onClick={() => {
              setHeaderExpand((prev) => {
                return !prev;
              });
            }}
          >
            {headerExpand ? <XIcon size={16} /> : <ThreeBarsIcon size={16} />}
          </button>
        </div>
        {headerExpand ? (
          <div
            className="header-menu"
            style={{
              fontFamily: `${ms_madi.style.fontFamily},${noto_serif_sc.style.fontFamily},serif`,
            }}
          >
            <Link href="/">
              <span>首页</span>
              <span>Home</span>
            </Link>
            <Link href="/post">
              <span>文章</span>
              <span>Article</span>
            </Link>
            <Link href="/archive">
              <span>归档</span>
              <span>Archive</span>
            </Link>
            <Link href="/category">
              <span>分类</span>
              <span>Category</span>
            </Link>
            <Link href="/links">
              <span>友链</span>
              <span>Links</span>
            </Link>
            <Link href="/about">
              <span>关于</span>
              <span>About</span>
            </Link>
            <Link href="/rss.xml">
              <span>订阅</span>
              <span>Feed</span>
            </Link>
          </div>
        ) : null}
      </div>
      <div className="container">
        <Component {...pageProps} />
      </div>
      <footer className="footer">
        <p>
          <a href="https://github.com/Moroshima/yunagi-next" target="_blank">
            Yunagi
          </a>{" "}
          | Powered by{" "}
          <a href="https://nextjs.org" target="_blank">
            Next.js
          </a>
        </p>
        <p>
          若非特别注明，本站所有内容都遵从{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh"
            target="_blank"
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
      {scrollToTopHidden ? null : (
        <button
          className="scroll-to-top"
          onClick={() => {
            document.documentElement.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <ChevronUpIcon size={16} />
        </button>
      )}
    </MDXProvider>
  );
}

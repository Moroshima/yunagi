import "@/styles/globals.scss";
import Link from "next/link";
import dynamic from "next/dynamic";
import type { AppProps } from "next/app";
import { EB_Garamond, Noto_Serif_SC } from "next/font/google";
import { MDXProvider } from "@mdx-js/react";
import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@primer/octicons-react";

const PreDynamicComponent = dynamic(() => import("../components/pre"), {
  ssr: false,
});
const ImageDynamicComponent = dynamic(() => import("../components/image"), {
  ssr: false,
});
const TableDynamicComponent = dynamic(() => import("../components/table"), {
  ssr: false,
});
const WrapperDynamicComponent = dynamic(() => import("../components/wrapper"));

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
  wrapper: WrapperDynamicComponent,
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
  nav: ({ children, ...props }: any) => (
    <nav {...props}>
      <p>
        <strong>文章目录</strong>
      </p>
      {children}
    </nav>
  ),
};

export default function App({ Component, pageProps }: AppProps) {
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    setHidden(window.scrollY > 0 ? true : false);
    const handleScroll: any = () => {
      if (window.scrollY > 0) {
        setHidden(false);
      } else setHidden(true);
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
          Copyright © 2023 Ver 0.1.0 @ <Link href="/about">Moroshima</Link>
        </p>
      </footer>
      {hidden ? null : (
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

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { EB_Garamond, Noto_Serif_SC } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";

const eb_garamond = EB_Garamond({ subsets: ["latin"], preload: true });
const noto_serif_sc = Noto_Serif_SC({
  weight: ["200", "300", "400", "500", "600", "700", "900"],
  subsets: ["latin"],
  preload: true,
});

const ResponsiveImage = (props: any) => {
  return (
    <img
      src={props.src.replace("./assets", "/assets/images")}
      alt={props.alt}
    />
  );
};

const components = {
  img: ResponsiveImage,
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <>
        <style jsx global>{`
          html {
            font-family: ${eb_garamond.style.fontFamily},
              ${noto_serif_sc.style.fontFamily}, serif;
            scroll-behavior: smooth;
          }
        `}</style>
        <div>
          <Link href="/">Moroshima&apos;s Blog</Link>
          <Link href="/articles">文章</Link>
          <Link href="/archives">归档</Link>
          <Link href="/categories">分类</Link>
          <Link href="/friends">友链</Link>
          <Link href="/about">关于</Link>
        </div>
        <Component {...pageProps} />
      </>
    </MDXProvider>
  );
}

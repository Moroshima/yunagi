import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Link href="/">Moroshima&apos;s Blog</Link>
        <Link href="articles">文章</Link>
        <Link href="archives">归档</Link>
        <Link href="categories">分类</Link>
        <Link href="friends">友链</Link>
        <Link href="about">关于</Link>
      </div>
      <Component {...pageProps} />
    </>
  );
}

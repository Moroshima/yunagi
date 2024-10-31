import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moroshima's Blog",
  description: "却顾所来径，苍苍横翠微。",
};

const navigation = [
  { url: "/", sc_name: "首页", en_name: "Home" },
  { url: "/posts", sc_name: "文章", en_name: "Posts" },
  { url: "/archives", sc_name: "归档", en_name: "Archives" },
  { url: "/categories", sc_name: "分类", en_name: "Categories" },
  { url: "/links", sc_name: "友链", en_name: "Links" },
  { url: "/about", sc_name: "关于", en_name: "About" },
  { url: "/rss.xml", sc_name: "订阅", en_name: "Feed" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className={inter.className}>
        <Link href="/">Moroshima&apos;s Blog</Link>
        <div>
          {navigation.map((value, index) => {
            return (
              <Link key={`header-link-${index}`} href={value.url}>
                {value.sc_name}
              </Link>
            );
          })}
        </div>
        {children}
      </body>
    </html>
  );
}

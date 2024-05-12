import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import navigation from "@data/navigation.json";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moroshima's Blog",
  description: "却顾所来径，苍苍横翠微。",
};

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

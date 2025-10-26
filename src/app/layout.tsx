import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { Inter } from "next/font/google";
import Link from "next/link";
import globalConfig from "@data/configs/global.json";
import navigationConfig from "@data/configs/navigation.json";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const { title, description } = globalConfig;
const { navigation } = navigationConfig;

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body className={inter.className}>
        <Link href="/">{title}</Link>
        <div>
          {navigation.map((value, index) => {
            return (
              <Link key={`header-link-${index}`} href={value.url}>
                {value.name}
              </Link>
            );
          })}
        </div>
        {children}
        <div>
          {
            JSON.parse(
              fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8"),
            ).version
          }
        </div>
      </body>
    </html>
  );
}

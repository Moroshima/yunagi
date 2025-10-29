import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import { Inter } from "next/font/google";
import Link from "next/link";
import globalConfig from "@data/configs/global.json";
import navigationConfig from "@data/configs/navigation.json";
import "./globals.css";
import { execSync } from "child_process";
import semver from "semver";

const inter = Inter({ subsets: ["latin"] });
const { title, description } = globalConfig;
const { navigation } = navigationConfig;

export const metadata: Metadata = {
  title: title,
  description: description,
};

const packageJson = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8"),
);

const buildInfo: { label: string; value: string }[] = [
  {
    label: "version",
    value: `${packageJson.version}+${
      semver.prerelease(packageJson.version) === null
        ? null
        : execSync("git rev-parse --short HEAD").toString()
    }`,
  },
  { label: "next", value: packageJson.dependencies.next },
  { label: "bundler", value: process.env.TURBOPACK ? "turbopack" : "webpack" },
  { label: "react", value: packageJson.dependencies.react },
  { label: "node", value: process.version },
  { label: "arch", value: process.arch },
  { label: "platform", value: process.platform },
  { label: "buildTime", value: new Date().toISOString() },
];

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
          <p>build info</p>
          {buildInfo.map(({ label, value }, index) => (
            <p key={`build-info-${index}`}>
              {label}: {value}
            </p>
          ))}
        </div>
      </body>
    </html>
  );
}

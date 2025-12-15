import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import clsx from "clsx";
import { Provider } from "jotai";
import { transpileModule } from "typescript";
import swc from "@swc/core";
import ThemeSwitch from "@components/theme-switch";
import config from "@data/config.json";
import buildInfo from "@utils/build-info";
import {
  allison,
  comforter,
  eb_garamond,
  liu_jian_mao_cao,
  noto_sans,
  noto_sans_sc,
  noto_sans_tc,
  noto_serif,
  noto_serif_sc,
  noto_serif_tc,
} from "@utils/fonts";
import toggleTheme from "@utils/toggle-theme";
import "./globals.css";

const { title, description, navigation, owner } = config;

export const metadata: Metadata = {
  title: title,
  description: description,
  icons: {
    icon: { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

const transpileOptions = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "tsconfig.json"), "utf8"),
);

const swcOutput = await swc.minify(
  transpileModule(
    toggleTheme.toString(),
    transpileOptions,
  ).outputText.replaceAll('"use strict";', ""),
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="zh-Hans">
      <head>
        <script
          id="theme-script"
          // prevent FOUC
          dangerouslySetInnerHTML={{
            __html: `(${swcOutput.code})()`, // IIFE
          }}
        />
      </head>
      <Provider>
        <body
          className={clsx(
            allison.variable,
            comforter.variable,
            eb_garamond.variable,
            liu_jian_mao_cao.variable,
            noto_sans.variable,
            noto_sans_sc.variable,
            noto_sans_tc.variable,
            noto_serif.variable,
            noto_serif_sc.variable,
            noto_serif_tc.variable,
            "antialiased",
            "text-dark",
            "bg-light",
            "dark:text-light",
            "dark:bg-dark",
            "transition-all",
            "duration-300",
            "ease-in-out",
          )}
        >
          <div className="flex flex-row font-sans">
            <div className="sticky top-0 hidden h-screen min-h-0 min-w-0 shrink-0 basis-2xs p-4 md:block">
              <Link
                className="absolute top-4 font-(family-name:--font-allison) text-2xl"
                href="/"
              >
                {title}
              </Link>
              <nav className="flex h-full flex-col justify-center gap-1 text-3xl font-bold">
                {navigation.primary.map((value, index) => {
                  return (
                    <Link
                      key={`header-link-${index}`}
                      className="transition-all duration-300 ease-out hover:pl-4"
                      href={value.path}
                    >
                      {value.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="absolute bottom-4 flex flex-col gap-1 text-sm">
                <p className="flex flex-row gap-1 text-base">
                  {navigation.meta.map((value, index) => {
                    return (
                      <Link key={index} href={value.path}>
                        {value.name}
                      </Link>
                    );
                  })}
                  {navigation.auxiliary.map((value, index) => {
                    return (
                      <Link key={index} href={value.url} target="_blank">
                        {value.name}
                      </Link>
                    );
                  })}
                </p>
                <p>
                  主题：
                  <ThemeSwitch />
                </p>
                <p>
                  <Link
                    href="https://github.com/Moroshima/yunagi"
                    target="_blank"
                  >
                    Yunagi
                  </Link>{" "}
                  {buildInfo.find((item) => item.label === "version")?.value}
                </p>
                <p>
                  © {new Date().getFullYear()}{" "}
                  <Link href="/about">{owner}</Link>. All rights reserved.
                </p>
              </div>
            </div>
            <div className="min-w-0 basis-full">{children}</div>
          </div>
        </body>
      </Provider>
    </html>
  );
}

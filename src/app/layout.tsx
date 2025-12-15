import type { Metadata } from "next";
import Link from "next/link";
import clsx from "clsx";
import BuildInfo from "@components/buildInfo";
import config from "@data/config.json";
import {
  allison,
  comforter,
  liu_jian_mao_cao,
  ms_madi,
  noto_sans,
  noto_sans_sc,
  noto_sans_tc,
  noto_serif,
  noto_serif_sc,
  noto_serif_tc,
} from "@utils/fonts";
import "./globals.scss";

const { title, description, navigation } = config;

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body
        className={clsx(
          allison.variable,
          comforter.variable,
          liu_jian_mao_cao.variable,
          ms_madi.variable,
          noto_sans.variable,
          noto_sans_sc.variable,
          noto_sans_tc.variable,
          noto_serif.variable,
          noto_serif_sc.variable,
          noto_serif_tc.variable,
          "antialiased",
        )}
      >
        <div className="font-sans">
          <Link className="font-allison" href="/">
            {title}
          </Link>
          <nav>
            {navigation.primary.map((value, index) => {
              return (
                <Link key={`header-link-${index}`} href={value.path}>
                  {value.name}
                </Link>
              );
            })}
          </nav>
          <p>
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
          {children}
          <BuildInfo />
        </div>
      </body>
    </html>
  );
}

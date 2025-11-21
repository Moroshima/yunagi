import type { Metadata } from "next";
import Link from "next/link";
import clsx from "clsx";
import BuildInfo from "@components/buildInfo";
import globalConfig from "@data/configs/global.json";
import navigationConfig from "@data/configs/navigation.json";
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

const { title, description } = globalConfig;

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
          <div>
            {navigationConfig.map((value, index) => {
              return (
                <Link key={`header-link-${index}`} href={value.url}>
                  {value.name}
                </Link>
              );
            })}
          </div>
          {children}
          <BuildInfo />
        </div>
      </body>
    </html>
  );
}

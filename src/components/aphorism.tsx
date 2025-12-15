"use client";

import { useEffect, useState } from "react";
import * as OpenCC from "opencc-js";
import aphorisms from "@data/aphorisms.json";

const converter = OpenCC.Converter({ from: "tw", to: "cn" });

const authorFontMap: Record<string, string> = {
  en: "font-(family-name:--font-allison)",
  de: "font-(family-name:--font-allison)",
  ru: "font-(family-name:--font-comforter)",
  "zh-Hans": "font-(family-name:--font-liu-jian-mao-cao)",
  "zh-Hant": "font-(family-name:--font-liu-jian-mao-cao)",
};

export default function Aphorism() {
  const [aphorism, setAphorism] = useState<{
    aphorism: string;
    author: string;
    lang: string;
    source: string;
  }>();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAphorism(aphorisms[Math.floor(Math.random() * aphorisms.length)]);
  }, []);

  return aphorism ? (
    <div lang={aphorism?.lang}>
      <p>{aphorism?.aphorism}</p>
      <p>
        <span className={authorFontMap[aphorism.lang]}>
          {converter(aphorism?.author)}.
        </span>{" "}
        <span
          className={
            aphorism.lang === "zh-Hans" || aphorism.lang === "zh-Hant"
              ? "font-serif"
              : "font-(family-name:--font-eb-garamond)"
          }
        >
          {aphorism?.source}.
        </span>
      </p>
    </div>
  ) : undefined;
}

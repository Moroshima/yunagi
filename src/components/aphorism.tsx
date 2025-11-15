"use client";

import { useEffect, useState } from "react";
import * as OpenCC from "opencc-js";
import aphorisms from "@data/aphorisms.json";

const converter = OpenCC.Converter({ from: "tw", to: "cn" });

const langFontMap: Record<string, string> = {
  en: "font-allison",
  de: "font-allison",
  ru: "font-comforter",
  "zh-Hans": "font-liu-jian-mao-cao",
  "zh-Hant": "font-liu-jian-mao-cao",
};

export default function Aphorism() {
  const [aphorism, setAphorism] = useState<{
    aphorism: string;
    author: string;
    lang: string;
    source: string;
  } | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAphorism(aphorisms[Math.floor(Math.random() * aphorisms.length)]);
  }, []);

  return aphorism ? (
    <div lang={aphorism?.lang}>
      <p>{aphorism?.aphorism}</p>
      <p>
        <span className={langFontMap[aphorism.lang]}>
          {converter(aphorism?.author)}.
        </span>{" "}
        <em className="font-serif">{aphorism?.source}.</em>
      </p>
    </div>
  ) : null;
}

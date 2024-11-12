"use client";

import { useEffect, useState } from "react";
import aphorismsData from "@data/aphorisms.json";

const { aphorisms } = aphorismsData;

export default function Aphorism() {
  const [aphorism, setAphorism] = useState<{
    aphorism: string;
    author: string;
    lang: string;
    source: string;
  } | null>(null);

  useEffect(() => {
    setAphorism(aphorisms[Math.floor(Math.random() * aphorisms.length)]);
  }, []);

  if (!aphorism) {
    return null;
  }

  return (
    <div lang={aphorism?.lang}>
      <p>{aphorism?.aphorism}</p>
      <p>
        <span>{aphorism?.author}.</span> <em>{aphorism?.source}.</em>
      </p>
    </div>
  );
}

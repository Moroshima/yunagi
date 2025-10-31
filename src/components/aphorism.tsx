"use client";

import { useEffect, useState } from "react";
import aphorisms from "@data/aphorisms.json";

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
        <span>{aphorism?.author}.</span> <em>{aphorism?.source}.</em>
      </p>
    </div>
  ) : null;
}

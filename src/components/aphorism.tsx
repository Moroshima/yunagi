"use client";

import { useEffect, useState } from "react";
import aphorisms from "@data/aphorisms.json";

export default function Aphorism() {
  const [aphorism, setAphorism] = useState<{
    aphorism: string;
    author: string;
    source: string;
  } | null>(null);

  useEffect(() => {
    setAphorism(aphorisms[Math.floor(Math.random() * aphorisms.length)]);
  }, []);

  if (!aphorism) {
    return null;
  }

  return (
    <div>
      <p>{aphorism?.aphorism}</p>
      <p>
        <span>{aphorism?.author}.</span> <em>{aphorism?.source}.</em>
      </p>
    </div>
  );
}

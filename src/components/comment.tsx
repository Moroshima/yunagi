"use client";

import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import Giscus from "@giscus/react";
import config from "@data/config.json";
import { themeAtom } from "@utils/store";

const {
  repo,
  repoId,
  category,
  categoryId,
  mapping,
  strict,
  reactionsEnabled,
  emitMetadata,
  inputPosition,
} = config.comment;

export default function Comment() {
  const [theme] = useAtom(themeAtom);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (
      theme === "dark" ||
      (theme === "auto" &&
        globalThis.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDark(true);
    else setDark(false);
  }, [theme]);

  return (
    <Giscus
      category={category}
      categoryId={categoryId}
      emitMetadata={emitMetadata}
      id="comments"
      inputPosition={inputPosition}
      lang="zh-CN"
      mapping={mapping}
      reactionsEnabled={reactionsEnabled}
      repo={repo}
      repoId={repoId}
      strict={strict}
      theme={dark ? "dark" : "light"}
    />
  );
}

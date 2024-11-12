"use client";

import commentConfig from "@data/configs/comment";
import Giscus from "@giscus/react";

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
} = commentConfig;

export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping={mapping}
      strict={strict}
      reactionsEnabled={reactionsEnabled}
      emitMetadata={emitMetadata}
      inputPosition={inputPosition}
      theme="light"
      lang="zh-CN"
    />
  );
}

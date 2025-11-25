"use client";

import Giscus from "@giscus/react";
import commentConfig from "@data/configs/comment.json";

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
      theme="light"
    />
  );
}

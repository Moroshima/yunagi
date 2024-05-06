"use client";
import Giscus from "@giscus/react";

export default function Comment() {
  return (
    <Giscus
      id="comments"
      repo="Moroshima/open-discussion"
      repoId="R_kgDOJLaQvw"
      category="Announcements"
      categoryId="DIC_kwDOJLaQv84CU-QA"
      mapping="pathname"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="zh-CN"
      loading="eager"
    />
  );
}

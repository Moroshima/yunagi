import type {
  BooleanString,
  InputPosition,
  Mapping,
  Repo,
} from "@giscus/react";

interface CommentConfig {
  repo: Repo;
  repoId: string;
  category?: string;
  categoryId?: string;
  mapping: Mapping;
  strict?: BooleanString;
  reactionsEnabled?: BooleanString;
  emitMetadata?: BooleanString;
  inputPosition?: InputPosition;
}

const commentConfig: CommentConfig = {
  repo: "Moroshima/open-discussion",
  repoId: "R_kgDOJLaQvw",
  category: "Announcements",
  categoryId: "DIC_kwDOJLaQv84CU-QA",
  mapping: "pathname",
  strict: "1",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "top",
};

export default commentConfig;

declare module "@data/configs/comment.json" {
  import type {
    BooleanString,
    InputPosition,
    Mapping,
    Repo,
  } from "@giscus/react";

  const comment: {
    repo: Repo;
    repoId: string;
    category?: string;
    categoryId?: string;
    mapping: Mapping;
    strict?: BooleanString;
    reactionsEnabled?: BooleanString;
    emitMetadata?: BooleanString;
    inputPosition?: InputPosition;
  };
  export default comment;
}

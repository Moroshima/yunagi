declare module "@data/config.json" {
  import type {
    BooleanString,
    InputPosition,
    Mapping,
    Repo,
  } from "@giscus/react";

  const config: {
    domain: string;
    owner: string;
    title: string;
    description: string;
    navigation: {
      primary: {
        key?: string;
        path: string;
        name: string;
        en: string;
        subtitle?: string;
      }[];
      meta: { path: string; name: string; en: string }[];
      auxiliary: { url: string; name: string; en: string }[];
    };
    notFound: {
      title: string;
      subtitle: string;
      aphorism: {
        content: string;
        author: string;
        lang: string;
        source: string;
      };
    };
    rss: {
      image: string;
    };
    comment: {
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
  };
  export default config;
}

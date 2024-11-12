import { Metadata } from "next";
import globalConfig from "@data/configs/global.json";
import postsData from "@data/posts.json";

const { title } = globalConfig;
const { posts } = postsData;

const uniqueKeywordsArray = Array.from(
  // flatten the keywords array and convert it to a Set to remove duplicates
  new Set(posts.map((value) => value.keywords).flat()),
);

export async function generateStaticParams() {
  try {
    return uniqueKeywordsArray.map((keyword) => ({
      // encode keywords to ensure compatibility with Next.js routing
      keyword: encodeURI(keyword),
    }));
  } catch (e) {
    console.error(e);
  }
}

let metadata: Metadata = {};

export default async function Keyword({
  params,
}: {
  params: Promise<{ keyword: string }>;
}) {
  let { keyword } = await params;
  try {
    keyword = decodeURI(keyword);
  } catch (e) {
    console.error(e);
  }

  metadata = {
    title: `关键词：${keyword} | ${title}`,
  };

  return <div>keyword: {keyword}</div>;
}

export { metadata };

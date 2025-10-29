import { Metadata } from "next";
import PostPreviewCard from "@components/postPreviewCard";
import globalConfig from "@data/configs/global.json";
import postsData from "@data/posts.json";
import sortPostsByDate from "@utils/sortPostsByDate";

const { title } = globalConfig;
const { posts } = postsData;

const uniqueKeywordsArray = Array.from(
  // flatten the keywords array and convert it to a Set to remove duplicates
  new Set(posts.map((value) => value.keywords).flat()),
);

export async function generateStaticParams() {
  return uniqueKeywordsArray.map((keyword) => ({
    keyword: keyword,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ keyword: string }>;
}): Promise<Metadata> {
  let { keyword } = await params;
  keyword = decodeURI(keyword);

  return {
    title: `关键词：${keyword} | ${title}`,
  };
}

export default async function Keyword({
  params,
}: {
  params: Promise<{ keyword: string }>;
}) {
  let { keyword } = await params;
  keyword = decodeURI(keyword);

  const postList = posts.filter((item: { keywords: string[] }) =>
    item.keywords.includes(keyword),
  );

  return (
    <div>
      <p>keyword: {keyword}</p>
      {sortPostsByDate(postList).map((value, index) => (
        <li key={`post-${index}`}>
          <PostPreviewCard post={value} />
        </li>
      ))}
    </div>
  );
}

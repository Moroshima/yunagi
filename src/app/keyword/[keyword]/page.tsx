import { Metadata } from "next";
import PostCard from "@components/post-card";
import config from "@data/config.json";
import posts from "@data/posts.json";
import sortPostsByDate from "@utils/sort-posts-by-date";

const { title } = config;

// flatten the keywords array and convert it to a Set to remove duplicates
const uniqueKeywordsArray = [
  ...new Set(posts.flatMap((value) => value.keywords)),
];

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
    <main>
      <h1>关键词：{keyword}</h1>
      <ul>
        {sortPostsByDate(postList).map((value, index) => (
          <li key={`post-${index}`}>
            <PostCard post={value} />
          </li>
        ))}
      </ul>
    </main>
  );
}

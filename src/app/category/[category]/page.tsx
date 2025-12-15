import { Metadata } from "next";
import PostCard from "@components/post-card";
import config from "@data/config.json";
import posts from "@data/posts.json";
import sortPostsByDate from "@utils/sort-posts-by-date";

const { title } = config;

const categories = [...new Set(posts.map((value) => value.category))];

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  let { category } = await params;
  category = decodeURI(category);

  return {
    title: `分类：${category} | ${title}`,
  };
}

export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  let { category } = await params;
  category = decodeURI(category);

  const postList = posts.filter((item) => item.category === category);

  return (
    <main>
      <h1>分类：{category}</h1>
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

import { Metadata } from "next";
import PostPreviewCard from "@components/postPreviewCard";
import globalConfig from "@data/configs/global.json";
import postsData from "@data/posts.json";
import sortPostsByDate from "@utils/sortPostsByDate";

const { title } = globalConfig;
const { posts } = postsData;

const categories = Array.from(new Set(posts.map((value) => value.category)));

export async function generateStaticParams() {
  return categories.map((category) => ({
    // encode categories to ensure compatibility with Next.js routing
    category: encodeURI(category),
  }));
}

let metadata: Metadata = {};

export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  let { category } = await params;
  category = decodeURI(category);

  metadata = {
    title: `分类：${category} | ${title}`,
  };

  const postList = posts.filter((item) => item.category === category);

  return (
    <div>
      <p>category: {category}</p>
      <div>
        {sortPostsByDate(postList).map((value, index) => (
          <li key={`post-${index}`}>
            <PostPreviewCard post={value} />
          </li>
        ))}
      </div>
    </div>
  );
}

export { metadata };

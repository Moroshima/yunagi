import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "@components/post-card";
import config from "@data/config.json";
import posts from "@data/posts.json";
import sortPostsByDate from "@utils/sort-posts-by-date";

const { title, navigation } = config;

export const metadata: Metadata = {
  title: `文章 | ${title}`,
};

function Category() {
  const categoryCounts: Record<string, number> = {};

  for (const post of posts) {
    categoryCounts[post.category] = (categoryCounts[post.category] ?? 0) + 1; // create a key-value if it does not exist
  }

  return (
    <ul>
      {Object.entries(categoryCounts).map(([key, count]) => (
        <Link key={key} href={`category/${key}`}>
          <li key={key}>
            category: {key}, count: {count}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default function Post() {
  return (
    <main>
      <h1>文章</h1>
      <p>{navigation.primary.find(({ key }) => key === "posts")?.subtitle}</p>
      <div>
        <ul>
          {sortPostsByDate(posts).map((value, index) => (
            <li key={`post-${index}`}>
              <PostCard post={value} />
            </li>
          ))}
        </ul>
        <p>- MORE -</p>
      </div>
      <Category />
    </main>
  );
}

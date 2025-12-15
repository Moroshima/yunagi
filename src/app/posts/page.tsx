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

export default function Post() {
  const categoryCounts: Record<string, number> = {};

  for (const post of posts) {
    categoryCounts[post.category] = (categoryCounts[post.category] ?? 0) + 1; // create a key-value if it does not exist
  }

  return (
    <div>
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
      </main>
      <div>
        <ul>
          {Object.entries(categoryCounts).map(([key, count]) => (
            <Link key={key} href={`category/${key}`}>
              <li key={key}>
                Category: {key}, count: {count}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

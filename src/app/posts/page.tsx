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
    <div className="flex flex-row">
      <main className="min-w-0 basis-full p-4">
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
      <div className="sticky top-0 hidden h-screen min-w-0 shrink-0 basis-2xs p-4 lg:block">
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

import { Metadata } from "next";
import Link from "next/link";
import config from "@data/config.json";
import posts from "@data/posts.json";

const { title, navigation } = config;

export const metadata: Metadata = {
  title: `关键词云 | ${title}`,
};

export default function Keywords() {
  const keywordCounts: Record<string, number> = {};

  for (const post of posts) {
    for (const keyword of post.keywords) {
      keywordCounts[keyword] = (keywordCounts[keyword] ?? 0) + 1; // create a key-value if it does not exist
    }
  }

  return (
    <main>
      <h1>关键词云</h1>
      <p>
        {navigation.primary.find(({ key }) => key === "keywords")?.subtitle}
      </p>
      <div>
        {Object.entries(keywordCounts).map(([key, count]) => (
          <Link key={key} href={`keyword/${key}`}>
            <p>
              keyword: {key}, count: {count}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}

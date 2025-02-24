import { Metadata } from "next";
import Link from "next/link";
import globalConfig from "@data/configs/global.json";
import postsData from "@data/posts.json";

const { title } = globalConfig;
const { posts } = postsData;

export const metadata: Metadata = {
  title: `关键词云 | ${title}`,
};

export default function Keywords() {
  const keywordCounts: Record<string, number> = {};

  posts.forEach((post) => {
    post.keywords.forEach((keyword) => {
      if (keywordCounts[keyword]) {
        keywordCounts[keyword] = keywordCounts[keyword] + 1;
      } else {
        keywordCounts[keyword] = 1; // create a key-value if it does not exist
      }
    });
  });

  return (
    <div>
      <p>keywords</p>
      <div>
        {Object.entries(keywordCounts).map(([key, count]) => (
          <Link href={`keyword/${key}`} key={key}>
            <p key={key}>
              keyword: {key}, count: {count}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

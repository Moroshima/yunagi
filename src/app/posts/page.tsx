import type { Metadata } from "next";
import Link from "next/link";
import PostPreviewCard from "@components/postPreviewCard";
import globalConfig from "@data/configs/global.json";
import posts from "@data/posts.json";
import sortPostsByDate from "@utils/sortPostsByDate";

const { title, subtitles } = globalConfig;

export const metadata: Metadata = {
  title: `文章 | ${title}`,
};

function Category() {
  const categoryCounts: Record<string, number> = {};

  posts.forEach((post) => {
    if (categoryCounts[post.category]) {
      categoryCounts[post.category] = categoryCounts[post.category] + 1;
    } else {
      categoryCounts[post.category] = 1; // create a key-value if it does not exist
    }
  });

  return (
    <ul>
      {Object.entries(categoryCounts).map(([key, count]) => (
        <Link href={`category/${key}`} key={key}>
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
      <p>{subtitles.posts}</p>
      <div>
        <ul>
          {sortPostsByDate(posts).map((value, index) => (
            <li key={`post-${index}`}>
              <PostPreviewCard post={value} />
            </li>
          ))}
        </ul>
        <p>- MORE -</p>
      </div>
      <Category />
    </main>
  );
}

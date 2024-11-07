import type { Metadata } from "next";
import Link from "next/link";
import globalConfig from "@data/configs/global.json";
import postsData from "@data/posts.json";

const { title, blurbs } = globalConfig;
const { posts } = postsData;

export const metadata: Metadata = {
  title: `文章 | ${title}`,
};

export default function Post() {
  const sortedPosts = posts
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main>
      <h1>文章</h1>
      <hr />
      <p>{blurbs.posts}</p>
      <div>
        <ul>
          {sortedPosts.map((value, index) => (
            <li key={`post-${index}`}>
              <Link href={"post/" + value.slug}>{value.title}</Link>
              {value.tags.map((value, index) => (
                <span key={`tag-${index}`}>{value}</span>
              ))}
            </li>
          ))}
        </ul>
        <p>- END -</p>
      </div>
    </main>
  );
}

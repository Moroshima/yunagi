import type { Metadata } from "next";
import Link from "next/link";
import posts from "@data/posts.json";

export const metadata: Metadata = {
  title: "文章 | Moroshima's Blog",
};

export default function Post() {
  const sortedPosts = posts
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main>
      <h1>文章</h1>
      <hr />
      <p>风消焰蜡，露浥红莲，花市光相射。桂华流瓦。纤云散，耿耿素娥欲下。</p>
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

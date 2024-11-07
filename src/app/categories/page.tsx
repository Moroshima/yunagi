import type { Metadata } from "next";
import Link from "next/link";
import globalConfig from "@data/configs/global.json";
import postsData from "@data/posts.json";

const { title, blurbs } = globalConfig;
const { posts } = postsData;

export const metadata: Metadata = {
  title: `分类 | ${title}`,
};

export default function Category() {
  // using Set to remove duplicates from array
  const mergedCategoryArray: string[] = [];
  posts.forEach((value) => {
    mergedCategoryArray.push(...value.categories);
  });
  const mergedArraySet = new Set(mergedCategoryArray);
  const uniqueCategoryArray = Array.from(mergedArraySet);

  return (
    <main>
      <h1>分类</h1>
      <hr />
      <p>{blurbs.categories}</p>
      <div>
        {uniqueCategoryArray
          .sort((a, b) => a.localeCompare(b))
          .map((value, index) => {
            const category = posts.filter((item) =>
              item.categories.includes(value),
            );
            const postListItems = category
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((value, index) => (
                <li key={`post-${index}`}>
                  <Link href={"post/" + value.slug}>{value.title}</Link>
                  {value.tags.map((value, index) => (
                    <span key={`tag-${index}`}>{value}</span>
                  ))}
                </li>
              ));
            return (
              <div key={`category-${index}-wrapper`}>
                <h2>{value}</h2>
                <ul key={`category-${index}`}>{postListItems}</ul>
              </div>
            );
          })}
        <p>- END -</p>
      </div>
    </main>
  );
}

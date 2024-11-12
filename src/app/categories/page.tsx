import type { Metadata } from "next";
import Link from "next/link";
import globalConfig from "@data/configs/global.json";
import postsData from "@data/posts.json";

const { title, subtitles, categories } = globalConfig;
const { posts } = postsData;

export const metadata: Metadata = {
  title: `分类 | ${title}`,
};

export default function Category() {
  // using Set to remove duplicates from array
  const uniqueCategoriesArray = Array.from(
    new Set(posts.map((value) => value.category)),
  );

  return (
    <main>
      <h1>分类</h1>
      <p>{subtitles.categories}</p>
      <div>
        {uniqueCategoriesArray
          // sort categories based on specified order configed in `global.json`
          .filter((value) => {
            if (categories.indexOf(value) !== -1) return value;
            else
              console.error(
                `Category "${value}" does not exist, please check the \`@data/configs/global.json\` file.`,
              );
          })
          .sort((a, b) => categories.indexOf(a) - categories.indexOf(b))
          .map((value, index) => {
            const category = posts.filter((item) =>
              item.category.includes(value),
            );
            const postListItems = category
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((value, index) => (
                <li key={`post-${index}`}>
                  <Link href={`post/${value.slug}`}>{value.title}</Link>
                  <span>{value.lang}</span>
                  {value.keywords.map((value, index) => (
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

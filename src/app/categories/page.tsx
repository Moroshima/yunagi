import { Metadata } from "next";
import Link from "next/link";
import posts from "@data/posts.json";

export const metadata: Metadata = {
  title: "分类 | Moroshima's Blog",
};

export default function Category() {
  /* 使用 Set 进行数组去重 */
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
      <p>今宵酒醒何处？杨柳岸，晓风残月。 此去经年，应是良辰好景虚设。</p>
      <div>
        {uniqueCategoryArray
          .sort((a, b) => a.localeCompare(b))
          .map((value, index) => {
            const category = posts.filter((item) =>
              item.categories.includes(value)
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

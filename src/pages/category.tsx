import Head from "next/head";
import styles from "../styles/category.module.scss";
import posts from "./post/posts.json";
import Link from "next/link";

export default function Category() {
  /* 使用 Set 进行数组去重 */
  const mergedCategoryArray: string[] = [];
  posts.forEach((value, index, array) => {
    mergedCategoryArray.push(...value.categories);
  });
  const mergedArraySet = new Set(mergedCategoryArray);
  const uniqueCategoryArray = Array.from(mergedArraySet);
  console.log(uniqueCategoryArray);

  return (
    <>
      <Head>
        <title>分类 | Moroshima&apos;s Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles["space-limit"]}>
          <h1>分类</h1>
          <hr />
          <p>今宵酒醒何处？杨柳岸，晓风残月。 此去经年，应是良辰好景虚设。</p>
          <div className={styles.content}>
            {uniqueCategoryArray
              .sort((a, b) => a.localeCompare(b))
              .map((value, index, array) => {
                const category = posts.filter((item) =>
                  item.categories.includes(value)
                );
                const postList = category
                  .sort((a, b) => a.title.localeCompare(b.title))
                  .map((value, index, array) => (
                    <li className={styles["post-item"]} key={`post-${index}`}>
                      <Link href={"post/" + value.name}>{value.title}</Link>
                      {value.tags.map((value, index, array) => (
                        <span key={`tag-${index}`}>{value}</span>
                      ))}
                    </li>
                  ));
                return (
                  <>
                    <h2>{value}</h2>
                    <ul
                      className={styles["post-items"]}
                      key={`category-${index}`}
                    >
                      {postList}
                    </ul>
                  </>
                );
              })}
            <p className={styles.end}>- END -</p>
          </div>
        </div>
      </main>
    </>
  );
}

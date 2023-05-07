import Head from "next/head";
import Link from "next/link";
import posts from "./posts.json";
import styles from "../../styles/post.module.scss";

export default function Post() {
  const sortedPosts = posts.posts.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <>
      <Head>
        <title>文章 | Moroshima&apos;s Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles["space-limit"]}>
          <h1>文章</h1>
          <hr />
          <p>
            风消焰蜡，露浥红莲，花市光相射。桂华流瓦。纤云散，耿耿素娥欲下。
          </p>
          <div className={styles.content}>
            <ul className={styles["post-items"]}>
              {sortedPosts.map((value, index, array) => {
                return (
                  <li className={styles["post-item"]} key={`post-${index}`}>
                    <Link href={"post/" + value.name}>{value.title}</Link>
                    {value.tags.map((value, index, array) => (
                      <span key={`tag-${index}`}>{value}</span>
                    ))}
                  </li>
                );
              })}
            </ul>
            <p className={styles.end}>- END -</p>
          </div>
        </div>
      </main>
    </>
  );
}

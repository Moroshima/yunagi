import Head from "next/head";
import Link from "next/link";
import articles from "./articles.json";
import styles from "../../styles/articles.module.scss";

export default function Article() {
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
          <ul>
            {articles.articles.map((element, index, array) => {
              return (
                <li key={`article-${index}`}>
                  <Link
                    key={`article-link-${index}`}
                    href={"articles/" + element.name}
                  >
                    {element.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}

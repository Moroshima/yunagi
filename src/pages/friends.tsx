import Head from "next/head";
import styles from "../styles/friends.module.scss";

export default function Index() {
  return (
    <>
      <Head>
        <title>友链 | Moroshima&apos;s Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles["space-limit"]}>
          <h1>友链</h1>
          <hr />
          <p>
            携手江村。梅雪飘裙。情何限、处处消魂。故人不见，旧曲重闻。向望湖楼，孤山寺，涌金门。
          </p>
        </div>
      </main>
    </>
  );
}

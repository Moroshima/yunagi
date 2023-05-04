import Head from "next/head";
import styles from "../styles/categories.module.scss";

export default function Index() {
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
        </div>
      </main>
    </>
  );
}

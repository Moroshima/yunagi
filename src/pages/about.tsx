import Head from "next/head";
import styles from "../styles/about.module.scss";

export default function Index() {
  return (
    <>
      <Head>
        <title>关于 | Moroshima&apos;s Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles["space-limit"]}>
          <h1>关于</h1>
          <hr />
          <p>欲买桂花同载酒，终不似，少年游。</p>
        </div>
      </main>
    </>
  );
}

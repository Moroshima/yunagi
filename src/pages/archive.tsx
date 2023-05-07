import Head from "next/head";
import styles from "../styles/archive.module.scss";

export default function Archive() {
  return (
    <>
      <Head>
        <title>归档 | Moroshima&apos;s Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles["space-limit"]}>
          <h1>归档</h1>
          <hr />
          <p>
            常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。争渡，争渡，惊起一滩鸥鹭。
          </p>
        </div>
      </main>
    </>
  );
}

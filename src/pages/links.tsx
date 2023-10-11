import Head from "next/head";
import styles from "@/styles/links.module.scss";
import links from "./links.json";
import { ArrowRightIcon } from "@primer/octicons-react";

export default function Link() {
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
          <div className={styles.content}>
            <p>我的一些朋友们：</p>
            <div className={styles.friends}>
              {links
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((value, index, array) => (
                  <div className={styles.friend} key={`friend-${index}`}>
                    <img src={value.photo} alt={`friend-photo-${index}`} />
                    <div className={styles["friend-detail"]}>
                      <h2>
                        <a href={value?.link} target="_blank">
                          {value?.name}
                        </a>
                      </h2>
                      <p className={styles["friend-description"]}>
                        <span>{value.description}</span>{" "}
                        <a
                          className={styles["link-arrow"]}
                          href={value?.link}
                          target="_blank"
                        >
                          Link
                          <span>
                            <ArrowRightIcon size={16} />
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import Head from "next/head";
import styles from "../styles/archive.module.scss";
import posts from "./post/posts.json";
import Link from "next/link";
import toChineseNumeral from "@/utils/toChineseNumeral";
import toChineseMonth from "@/utils/toChineseMonth";

export default function Archive() {
  /* 将每个 post 的信息置入对应的年份或月份对象（来自柏的算法优化，先排序后置入） */
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  console.log(posts);

  const archiveArray: [
    {
      year: number;
      next: [
        {
          month: number;
          posts: [
            {
              title: string;
              name: string;
              tags: string[];
              date: string;
              updated: string;
              categories: string[];
              description: string;
            }
          ];
        }
      ];
    }
  ] = [
    {
      year: new Date(posts[0].date).getFullYear(),
      next: [
        {
          month: new Date(posts[0].date).getMonth() + 1,
          posts: [
            {
              title: posts[0].title,
              name: posts[0].name,
              tags: posts[0].tags,
              date: posts[0].date,
              updated: posts[0].updated,
              categories: posts[0].categories,
              description: posts[0].description,
            },
          ],
        },
      ],
    },
  ];

  let beforeYear: number = new Date(posts[0].date).getFullYear();
  let beforeMonth: number = new Date(posts[0].date).getMonth() + 1;
  posts.forEach((value, index, array) => {
    const year = new Date(value.date).getFullYear();
    const month = new Date(value.date).getMonth() + 1;
    if (index !== 0) {
      if (year !== beforeYear) {
        archiveArray.push({
          year: year,
          next: [
            {
              month: month,
              posts: [
                {
                  title: value?.title,
                  name: value?.name,
                  tags: value?.tags,
                  date: value?.date,
                  updated: value?.updated,
                  categories: value?.categories,
                  description: value?.description,
                },
              ],
            },
          ],
        });
      } else {
        if (month === beforeMonth) {
          archiveArray.forEach((subValue, subIndex, subArray) => {
            if (subValue?.year === year) {
              subValue.next.forEach((subSubValue, subSubIndex, subSubArray) => {
                if (subSubValue?.month === month) {
                  subSubValue.posts.push({
                    title: value?.title,
                    name: value?.name,
                    tags: value?.tags,
                    date: value?.date,
                    updated: value?.updated,
                    categories: value?.categories,
                    description: value?.description,
                  });
                }
              });
            }
          });
        } else {
          archiveArray.forEach((subValue, subIndex, subArray) => {
            if (subValue?.year === year) {
              subValue.next.push({
                month: month,
                posts: [
                  {
                    title: value?.title,
                    name: value?.name,
                    tags: value?.tags,
                    date: value?.date,
                    updated: value?.updated,
                    categories: value?.categories,
                    description: value?.description,
                  },
                ],
              });
            }
          });
        }
      }
      beforeYear = year;
      beforeMonth = month;
    }
  });
  console.log(archiveArray);

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
          <div className={styles.content}>
            {archiveArray.map((value, index, array) => (
              <div key={`archive-year-${value.year}-wrapper`}>
                <h2 key={`archive-year-${value.year}`}>
                  {toChineseNumeral(value.year)}
                </h2>
                {value.next.map((subValue, subIndex, subArray) => (
                  <div key={`archive-year-${subValue.month}-wrapper`}>
                    <h3 key={`archive-year-${subValue.month}`}>
                      {toChineseMonth(subValue.month)}月
                    </h3>
                    <ul className={styles["post-items"]}>
                      {subValue.posts.map(
                        (subSubValue, subSubIndex, subSubArray) => (
                          <li
                            className={styles["post-item"]}
                            key={`post-${value.year}-${subValue.month}-${index}`}
                          >
                            <Link href={"post/" + subSubValue.name}>
                              {subSubValue.title}
                            </Link>
                            {subSubValue.date.substring(0, 10)}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
            <p className={styles.end}>- END -</p>
          </div>
        </div>
      </main>
    </>
  );
}

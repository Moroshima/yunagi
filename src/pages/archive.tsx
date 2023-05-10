import Head from "next/head";
import styles from "../styles/archive.module.scss";
import posts from "./post/posts.json";

export default function Archive() {
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
      year: new Date(posts.posts[0].date).getFullYear(),
      next: [
        {
          month: new Date(posts.posts[0].date).getMonth() + 1,
          posts: [
            {
              title: posts.posts[0].title,
              name: posts.posts[0].name,
              tags: posts.posts[0].tags,
              date: posts.posts[0].date,
              updated: posts.posts[0].updated,
              categories: posts.posts[0].categories,
              description: posts.posts[0].description,
            },
          ],
        },
      ],
    },
  ];

  /* 将每个 post 的信息置入对应的年份或月份对象 */
  posts.posts.forEach((value, index, array) => {
    let yearExists = false;
    let monthExists = false;
    console.log(value.date);
    if (index !== 0) {
      const date = new Date(value.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      archiveArray.forEach((subValue, subIndex, subArray) => {
        if (subValue?.year === year) {
          yearExists = true;
          subValue.next.forEach((subSubValue, subSubIndex, subSubArray) => {
            if (subSubValue?.month === month) {
              monthExists = true;
            }
          });
        }
      });
      if (!yearExists) {
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
      }
      if (yearExists) {
        if (monthExists) {
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
        </div>
      </main>
    </>
  );
}

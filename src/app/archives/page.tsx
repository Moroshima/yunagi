import type { Metadata } from "next";
import Link from "next/link";
import posts from "@data/posts.json";
import toChineseMonth from "@utils/archive/toChineseMonth";
import toChineseNumeral from "@utils/archive/toChineseNumeral";

export const metadata: Metadata = {
  title: "归档 | Moroshima's Blog",
};

export default function Archive() {
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const archiveArray: [
    {
      year: number;
      next: [
        {
          month: number;
          posts: [
            {
              title: string;
              slug: string;
              tags: string[];
              date: string;
              updated: string;
              categories: string[];
              description: string;
            },
          ];
        },
      ];
    },
  ] = [
    {
      year: new Date(posts[0].date).getFullYear(),
      next: [
        {
          month: new Date(posts[0].date).getMonth() + 1,
          posts: [
            {
              title: posts[0].title,
              slug: posts[0].slug,
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
  posts.forEach((value, index) => {
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
                  slug: value?.slug,
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
          archiveArray.forEach((subValue) => {
            if (subValue?.year === year) {
              subValue.next.forEach((subSubValue) => {
                if (subSubValue?.month === month) {
                  subSubValue.posts.push({
                    title: value?.title,
                    slug: value?.slug,
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
          archiveArray.forEach((subValue) => {
            if (subValue?.year === year) {
              subValue.next.push({
                month: month,
                posts: [
                  {
                    title: value?.title,
                    slug: value?.slug,
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

  return (
    <main>
      <div>
        <h1>归档</h1>
        <hr />
        <p>
          常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。争渡，争渡，惊起一滩鸥鹭。
        </p>
        <div>
          {archiveArray.map((value, index) => (
            <div key={`archive-year-${value.year}-wrapper`}>
              <h2 key={`archive-year-${value.year}`}>
                {toChineseNumeral(value.year)}
              </h2>
              {value.next.map((subValue) => (
                <div key={`archive-year-${subValue.month}-wrapper`}>
                  <h3 key={`archive-year-${subValue.month}`}>
                    {toChineseMonth(subValue.month)}
                  </h3>
                  <ul>
                    {subValue.posts.map((subSubValue) => (
                      <li key={`post-${value.year}-${subValue.month}-${index}`}>
                        <Link href={"post/" + subSubValue.slug}>
                          {subSubValue.title}
                        </Link>
                        {subSubValue.date.substring(0, 10)}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
          <p>- END -</p>
        </div>
      </div>
    </main>
  );
}

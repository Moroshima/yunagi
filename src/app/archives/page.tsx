import type { Metadata } from "next";
import Link from "next/link";
import globalConfig from "@data/configs/global.json";
import postsData from "@data/posts.json";
import toChineseMonth from "@utils/archive/toChineseMonth";
import toChineseNumeral from "@utils/archive/toChineseNumeral";

const { title, blurbs } = globalConfig;
const { posts } = postsData;

export const metadata: Metadata = {
  title: `归档 | ${title}`,
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
        <p>{blurbs.archives}</p>
        <div>
          {archiveArray.map((value) => (
            <div key={`archive-${value.year}-wrapper`}>
              <h2 key={`archive-${value.year}`}>
                {toChineseNumeral(value.year)}
              </h2>
              {value.next.map((subValue) => (
                <div key={`subarchive-${value.year}-${subValue.month}-wrapper`}>
                  <h3 key={`subarchive-${value.year}-${subValue.month}`}>
                    {toChineseMonth(subValue.month)}
                  </h3>
                  <ul>
                    {subValue.posts.map((subSubValue, subSubIndex) => (
                      <li
                        key={`post-${value.year}-${subValue.month}-${subSubIndex}`}
                      >
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

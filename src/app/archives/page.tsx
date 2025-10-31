import type { Metadata } from "next";
import Link from "next/link";
import globalConfig from "@data/configs/global.json";
import posts from "@data/posts.json";

const { title, subtitles } = globalConfig;

export const metadata: Metadata = {
  title: `归档 | ${title}`,
};

function toChineseNumeral(num: number): string {
  const chineseNumeralMap: Record<string, string> = {
    "0": "〇",
    "1": "一",
    "2": "二",
    "3": "三",
    "4": "四",
    "5": "五",
    "6": "六",
    "7": "七",
    "8": "八",
    "9": "九",
  };

  const str = num.toString();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const digit = parseInt(str.charAt(i));
    result += chineseNumeralMap[digit.toString()];
  }

  return result;
}

function toChineseMonth(num: number): string {
  const chineseMonthMap: Record<string, string> = {
    "1": "一",
    "2": "二",
    "3": "三",
    "4": "四",
    "5": "五",
    "6": "六",
    "7": "七",
    "8": "八",
    "9": "九",
    "10": "十",
    "11": "十一",
    "12": "十二",
  };

  const result = chineseMonthMap[num.toString()];

  return result;
}

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
              slug: string;
              title: string;
              date: string;
              update: string | null;
              lang: string;
              category: string;
              keywords: string[];
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
              slug: posts[0].slug,
              title: posts[0].title,
              date: posts[0].date,
              update: posts[0].update,
              lang: posts[0].lang,
              category: posts[0].category,
              keywords: posts[0].keywords,
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
                  slug: value?.slug,
                  title: value?.title,
                  date: value?.date,
                  update: value?.update,
                  lang: value?.lang,
                  category: value?.category,
                  keywords: value?.keywords,
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
                    slug: value?.slug,
                    title: value?.title,
                    date: value?.date,
                    update: value?.update,
                    lang: value?.lang,
                    category: value?.category,
                    keywords: value?.keywords,
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
                    slug: value?.slug,
                    title: value?.title,
                    date: value?.date,
                    update: value?.update,
                    lang: value?.lang,
                    category: value?.category,
                    keywords: value?.keywords,
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
        <p>{subtitles.archives}</p>
        <div>
          {archiveArray.map((value) => (
            <div key={`archive-${value.year}-wrapper`}>
              <h2 key={`archive-${value.year}`}>
                {toChineseNumeral(value.year)}
              </h2>
              {value.next.map((subValue) => (
                <div key={`subarchive-${value.year}-${subValue.month}-wrapper`}>
                  <h3 key={`subarchive-${value.year}-${subValue.month}`}>
                    {toChineseMonth(subValue.month)}月
                  </h3>
                  <ul>
                    {subValue.posts.map((subSubValue, subSubIndex) => (
                      <li
                        key={`post-${value.year}-${subValue.month}-${subSubIndex}`}
                      >
                        <Link href={`post/${subSubValue.slug}`}>
                          {subSubValue.title}
                        </Link>
                        <span>{subSubValue.lang}</span>
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

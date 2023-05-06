import fs from "fs";
import path from "path";
import { marked } from "marked";
import list from "../pages/articles/list.json";

const postsDirectory = path.join(process.cwd(), "/src/pages/articles");

export async function getSortedArticleData() {
  // Get file names under /articles
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      if (
        path.extname(fileName) === ".md" ||
        path.extname(fileName) === ".mdx"
      ) {
        const name = fileName.replace(/\.mdx?$/, "");

        const article = list.articles.map((value, index, array) => {
          if (value.name === name) {
            return value;
          } else return null;
        })[0];

        console.log(article);

        const fullPath = path.join(postsDirectory, fileName);
        const content = fs.readFileSync(fullPath, "utf8");

        const rssData = {
          title: article?.title,
          date: article?.date,
          url: `https://kuroshima.eu.org/articles/${name}`,
          description: article?.description,
          content: marked(content),
        };
        console.log(rssData);
        return rssData;
      } else return null;
    })
  );

  // console.log(allPostsData);
  // Sort posts by date
  const sortedPostsData = allPostsData.sort((a: any, b: any) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return sortedPostsData;
}

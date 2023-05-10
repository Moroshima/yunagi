import fs from "fs";
import path from "path";
import MarkdownIt from "markdown-it";
import posts from "../pages/post/posts.json";
import getSite from "./site";

const site_url = getSite();

const md = new MarkdownIt();
/* 介入 img 标签渲染以修改 src 链接 */
md.renderer.rules.image = function (tokens, idx, options, env, self) {
  const token: any = tokens[idx];
  /* 替换图片原始 url */
  const src = token.attrs[token.attrIndex("src")][1];
  const newSrc = src.replace("./assets", `${site_url}/images`);
  token.attrs[token.attrIndex("src")][1] = newSrc;
  /* 调用默认图片渲染器 */
  return self.renderToken(tokens, idx, options);
};

const postsDirectory = path.join(process.cwd(), "/src/pages/post");

export async function getSortedPostData() {
  /* 获取 post 目录下的所有文件 */
  const fileNames = fs.readdirSync(postsDirectory);

  /* 剔除非 md/mdx 文件 */
  const postFileNames = fileNames.filter(
    (item) => path.extname(item) === ".md" || path.extname(item) === ".mdx"
  );

  const allPostsData = await Promise.all(
    postFileNames.map(async (fileName) => {
      const name = fileName.replace(/\.mdx?$/, "");

      const post = posts.find((value) => value.name === name) as any;

      const fullPath = path.join(postsDirectory, fileName);
      const content = fs.readFileSync(fullPath, "utf8");

      const rssData = {
        title: post.title,
        date: post.date,
        url: `${site_url}/post/${name}`,
        description: post.description,
        content: md.render(content),
      };

      return rssData;
    })
  );

  /* 将文章按时间排序 */
  return allPostsData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

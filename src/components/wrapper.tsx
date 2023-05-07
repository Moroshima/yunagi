import Head from "next/head";
import { useRouter } from "next/router";
import Giscus from "@giscus/react";
import articles from "../pages/articles/articles.json";

function Wrapper(props: any) {
  const router = useRouter();
  const articleName = router.pathname.substring(1).split("/")[1];
  const article = articles.articles.find((item) => item.name === articleName);
  console.log(article);
  return (
    <>
      <Head>
        <title>{article?.title} | Moroshima&apos;s Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="post">
        <main {...props} />
        {/* giscus 评论区 */}
        <Giscus
          id="comments"
          repo="Moroshima/open-discussion"
          repoId="R_kgDOJLaQvw"
          category="Announcements"
          categoryId="DIC_kwDOJLaQv84CU-QA"
          mapping="pathname"
          strict="1"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="light"
          lang="zh-CN"
          loading="eager"
        />
      </div>
    </>
  );
}

export default Wrapper;

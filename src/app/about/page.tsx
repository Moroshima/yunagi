import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Markdown from "@components/markdown";
import globalConfig from "@data/configs/global.json";

const { title, subtitles } = globalConfig;

export const metadata: Metadata = {
  title: `关于 | ${title}`,
};

export default function About() {
  // if .md file exists, read it; otherwise, read .mdx file
  const mdFilePath = path.join(process.cwd(), "src", "data", "about.md");
  const mdxFilePath = path.join(process.cwd(), "src", "data", "about.mdx");

  let source = "";

  if (fs.existsSync(mdFilePath)) {
    source = fs.readFileSync(mdFilePath, { encoding: "utf8" });
  } else if (fs.existsSync(mdxFilePath)) {
    source = fs.readFileSync(mdxFilePath, { encoding: "utf8" });
  } else {
    console.error(
      "Neither `about.md` nor `about.mdx` file found in `src/data` directory.",
    );
  }

  return (
    <main>
      <div>
        <h1>关于</h1>
        <p>{subtitles.about}</p>
        <div>
          <Markdown source={source} />
        </div>
      </div>
    </main>
  );
}

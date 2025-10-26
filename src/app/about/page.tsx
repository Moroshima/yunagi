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
  const dir = path.join(process.cwd(), "src", "data");
  const file = ["about.md", "about.mdx"]
    .map((name) => path.join(dir, name))
    .find(fs.existsSync);

  const source = file
    ? fs.readFileSync(file, "utf8")
    : (console.error(
        "Neither `about.md` nor `about.mdx` file found in `src/data` directory.",
      ),
      "");

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

import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Markdown from "@components/markdown";
import config from "@data/config.json";

const { title, navigation } = config;

export const metadata: Metadata = {
  title: `关于 | ${title}`,
};

export default function About() {
  // if .md file exists, read it; otherwise, read .mdx file
  const dir = path.join(process.cwd(), "src", "data");
  const file = ["about.md", "about.mdx"]
    .map((name) => path.join(dir, name))
    .find((filePath) => fs.existsSync(filePath));

  const source = file
    ? fs.readFileSync(file, "utf8")
    : (console.error(
        "Neither `about.md` nor `about.mdx` file found in `src/data` directory.",
      ),
      "");

  return (
    <div>
      <main>
        <h1>关于</h1>
        <p>{navigation.primary.find(({ key }) => key === "about")?.subtitle}</p>
        <div>
          <Markdown source={source} />
        </div>
      </main>
    </div>
  );
}

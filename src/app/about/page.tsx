import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";
import Markdown from "@components/markdown";
import config from "@data/config.json";
import buildInfo from "@utils/build-info";

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
    <div className="flex flex-row">
      <main className="min-w-0 basis-full p-4">
        <h1>关于</h1>
        <p>{navigation.primary.find(({ key }) => key === "about")?.subtitle}</p>
        <div className="markdown">
          <Markdown source={source} />
        </div>
      </main>
      <div className="sticky top-0 hidden h-screen min-w-0 shrink-0 basis-2xs p-4 lg:block">
        <p>build info</p>
        {buildInfo.map(({ label, value }, index) => (
          <p key={`build-info-${index}`}>
            {label}: {value}
          </p>
        ))}
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import globalConfig from "@data/configs/global.json";
import linksData from "@data/links.json";

const { title, subtitles } = globalConfig;
const { introduction, links } = linksData;

export const metadata: Metadata = {
  title: `友链 | ${title}`,
};

export default function Links() {
  return (
    <main>
      <h1>友链</h1>
      <p>{subtitles.links}</p>
      <div>
        <p>{introduction}</p>
        <div>
          {links
            .toSorted((a, b) => a.name.localeCompare(b.name, "en"))
            .map((value, index) => (
              <div key={`friend-${index}`}>
                <Image
                  alt={`friend-photo-${index}`}
                  height={100}
                  src={value.photo}
                  width={100}
                />
                <div>
                  <h2>
                    <Link href={value?.link} target="_blank">
                      {value?.name}
                    </Link>
                  </h2>
                  <p>
                    <span>{value.description}</span>
                    <Link href={value?.link} target="_blank">
                      Link
                    </Link>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

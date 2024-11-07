import type { Metadata } from "next";
import Image from "next/image";
import globalConfig from "@data/configs/global.json";
import linksData from "@data/links.json";

const { title, blurbs } = globalConfig;
const { introduction, links } = linksData;

export const metadata: Metadata = {
  title: `友链 | ${title}`,
};

export default function Links() {
  return (
    <main>
      <h1>友链</h1>
      <hr />
      <p>{blurbs.links}</p>
      <div>
        <p>{introduction}</p>
        <div>
          {links
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((value, index) => (
              <div key={`friend-${index}`}>
                <Image
                  width={100}
                  height={100}
                  src={value.photo}
                  alt={`friend-photo-${index}`}
                />
                <div>
                  <h2>
                    <a href={value?.link} target="_blank">
                      {value?.name}
                    </a>
                  </h2>
                  <p>
                    <span>{value.description}</span>
                    <a href={value?.link} target="_blank">
                      Link
                    </a>
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

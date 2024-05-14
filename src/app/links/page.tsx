import type { Metadata } from "next";
import Image from "next/image";
import links from "@data/links.json";

export const metadata: Metadata = {
  title: "友链 | Moroshima's Blog",
};

export default function Links() {
  return (
    <main>
      <h1>友链</h1>
      <hr />
      <p>
        携手江村。梅雪飘裙。情何限、处处消魂。故人不见，旧曲重闻。向望湖楼，孤山寺，涌金门。
      </p>
      <div>
        <p>我的一些朋友们：</p>
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

import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Image from "next/image";
import Markdown from "@components/markdown";

export const metadata: Metadata = {
  title: "关于 | Moroshima's Blog",
};

export default function About() {
  const filePath = path.join(process.cwd(), "src", "data", "about.md");
  const source = fs.readFileSync(filePath, { encoding: "utf8" });

  return (
    <main>
      <div>
        <h1>关于</h1>
        <hr />
        <p>欲买桂花同载酒，终不似，少年游。</p>
        <div>
          <div>
            <Image
              width={100}
              height={100}
              src="https://q1.qlogo.cn/g?b=qq&s=640&nk=2524332942"
              alt={"profile-photo"}
            />
            <p>
              <strong>Itsuki Moroshima</strong>
            </p>
            <p>一般通过废物 | Anarchist | INFP-T</p>
          </div>
          <br />
          <div>
            <div></div>
          </div>
          <div>
            <p>渺小的伤感只会把世界引向毁灭，少年！</p>
            <p>——機動戦士Ζガンダム</p>
          </div>
          <Markdown source={source} />
        </div>
      </div>
    </main>
  );
}

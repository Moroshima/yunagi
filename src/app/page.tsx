import type { Metadata } from "next";
import Aphorism from "@components/aphorism";
import globalConfig from "@data/configs/global.json";

const { title } = globalConfig;

export const metadata: Metadata = {
  title: title,
};

export default function Home() {
  return (
    <main>
      <Aphorism />
    </main>
  );
}

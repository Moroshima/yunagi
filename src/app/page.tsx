import type { Metadata } from "next";
import Aphorism from "@components/aphorism";
import config from "@data/config.json";

const { title } = config;

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

import type { Metadata } from "next";
import Aphorism from "@components/aphorism";

export const metadata: Metadata = {
  title: "Moroshima's Blog",
};

export default function Home() {
  return (
    <main>
      <Aphorism />
    </main>
  );
}

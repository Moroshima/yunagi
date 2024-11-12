import type { Metadata } from "next";
import globalConfig from "@data/configs/global.json";

const { title, notFound } = globalConfig;

export const metadata: Metadata = {
  title: `Not Found | ${title}`,
};

export default function NotFound() {
  return (
    <main>
      <h1>{notFound.title}</h1>
      <p>{notFound.subtitle}</p>
      <p>{notFound.aphorism.content}</p>
      <p>
        <span>{notFound.aphorism.author}</span>&nbsp;
        <em>{notFound.aphorism.source}</em>
      </p>
    </main>
  );
}

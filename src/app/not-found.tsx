import type { Metadata } from "next";
import config from "@data/config.json";

const { title, notFound } = config;

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

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found | Moroshima's Blog",
};

export default function NotFound() {
  return (
    <main>
      <h1>404 Not Found</h1>
      <p>这里可能没有网页，又或许曾经有过。</p>
    </main>
  );
}

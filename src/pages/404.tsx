import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Moroshima&apos;s Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>404 - Page Not Found</h1>
      <p>这里可能没有网页，又或许曾经有过。</p>
    </>
  );
}

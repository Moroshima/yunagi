import RSS from "rss";

export default async function generateRssFeed() {
  const site_url = "kuroshima.eu.org";

  const feedOptions = {
    title: "RSS Feed | Moroshima's Blog",
    description:
      "Everything faded into mist. The past was erased, the erasure was forgotten, the lie became truth.",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/images/Snipaste_2023-05-04_21-03-25.ico`,
    pubDate: new Date(),
    copyright: `Copyright © ${new Date().getFullYear()} Ver 0.1.0 @ Moroshima`,
  };

  const feed = new RSS(feedOptions);
}

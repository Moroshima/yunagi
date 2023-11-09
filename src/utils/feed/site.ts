export default function getSite() {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.SITE_URL ?? "https://example.com";
}

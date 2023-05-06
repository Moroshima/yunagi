export default function getSite() {
  return process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://kuroshima.eu.org";
}

import config from "@data/config.json";

const { domain } = config;

const origin =
  process.env.NODE_ENV === "production"
    ? `https://${domain}`
    : `http://localhost:${process.env.PORT}`;

export default origin;

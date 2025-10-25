import path from "path";

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => `"${path.relative(process.cwd(), f)}"`)
    .join(" ")}`;

const config = {
  "README.md": ["prettier --write"],
  "package.json": ["prettier --write"],
  "src/**/*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier --write"],
  "src/**/*.css": ["prettier --write"],
  "src/**/*.json": ["prettier --write"],
  "src/**/*.md": ["prettier --write"],
};

export default config;

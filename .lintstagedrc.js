const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "README.md": ["prettier --write"],
  "package.json": ["prettier --write"],
  "src/**/*.{cjs,js,jsx,mjs,ts,tsx}": [buildEslintCommand, "prettier --write"],
  "src/**/*.css": ["prettier --write"],
  "src/**/*.json": ["prettier --write"],
  "src/**/*.md": ["prettier --write"],
};

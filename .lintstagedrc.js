const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "package.json": ["prettier-package-json --write"],
  "*.css": ["prettier --write"],
  "*.{cjs,js,jsx,mjs,ts,tsx}": [buildEslintCommand, "prettier --write"],
  "*.json": ["prettier --write"],
  "*.md": ["prettier --write"],
};

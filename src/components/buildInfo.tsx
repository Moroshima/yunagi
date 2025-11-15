import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import semver from "semver";

const packageJson = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), "package.json"), "utf8"),
);

const buildInfo: { label: string; value: string }[] = [
  {
    label: "version",
    value: `${packageJson.version}+${
      semver.prerelease(packageJson.version) === null
        ? null
        : execSync("git rev-parse --short HEAD").toString()
    }`,
  },
  { label: "next", value: packageJson.dependencies.next },
  { label: "bundler", value: process.env.TURBOPACK ? "turbopack" : "webpack" },
  { label: "react", value: packageJson.dependencies.react },
  { label: "node", value: process.version },
  { label: "arch", value: process.arch },
  { label: "platform", value: process.platform },
  { label: "buildTime", value: new Date().toISOString() },
];

export default function BuildInfo() {
  return (
    <div>
      <p>build info</p>
      {buildInfo.map(({ label, value }, index) => (
        <p key={`build-info-${index}`}>
          {label}: {value}
        </p>
      ))}
    </div>
  );
}

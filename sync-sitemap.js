const fs = require("fs/promises");
const path = require("path");

async function copyFiles() {
  const publicDir = "public";
  const distDir = "dist";
  const filesToCopy = ["sitemap.xml", "robots.txt"];

  console.log("Starting to copy files...");
  console.log("Checking if dist directory exists...");

  try {
    // 使用 fs.promises.access 检查目录是否存在
    await fs.access(distDir);

    // 如果 access 没有抛出错误，说明目录存在，可以继续执行操作
    console.log(`Directory ${distDir} exists.`);
    console.log("Copying files...");

    // 使用 Promise.all 来并行拷贝文件
    await Promise.all(
      filesToCopy.map(async (file) => {
        const sourcePath = path.join(publicDir, file);
        const destinationPath = path.join(distDir, file);
        try {
          await fs.copyFile(sourcePath, destinationPath);
          console.log(`File ${file} copied successfully.`);
        } catch (error) {
          console.error(`Error copying ${file}: ${error.message}`);
        }
      })
    );

    console.log("All files copied successfully.");
  } catch (error) {
    // 如果目录不存在，输出提示信息
    console.log(
      `Directory ${distDir} does not exist. Please run "pnpm build" before running this script.`
    );
    process.exit(1);
  }
}

copyFiles();

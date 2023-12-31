/**
 * 因为此前 nextjs 是先 build 再 export，我们可以在二者之间插入 next-sitemap 作为
 * postbuild script 执行，但是目前版本的 nextjs 废止了 export 导出行为，
 * 转而将其变为了 next.config.js 中的一个配置项，所以我们在 build 之后除了要执行
 * next-sitemap 之外，还要手动将其在 public 目录下生成的 sitemap.xml 和 robots.txt
 * 文件拷贝到 dist 目录下，改脚本即负责实现此拷贝行为。
 */
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

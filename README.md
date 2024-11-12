# 夕凪

![Static Badge](https://img.shields.io/badge/version-2.0.0--alpha-blue)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/Moroshima/yunagi/.github%2Fworkflows%2Fdeploy.yaml)
![GitHub License](https://img.shields.io/github/license/Moroshima/yunagi)
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/Moroshima/yunagi)
![GitHub last commit](https://img.shields.io/github/last-commit/Moroshima/yunagi)
![GitHub Discussions](https://img.shields.io/github/discussions/Moroshima/open-discussion)

[简体中文](./README.md) | [English](./README.en.md)

夕凪，意指傍晚时分，海边无风之须臾。是基于 Next.js 与 Markdown 所开发的博客系统。

## Known Issues

Ranked in descending order of severity.

### `shiki` package should be specifically installed

To avoid the warning below, we have to install `shiki` separately when using `@shikijs/rehype`.

```text
 ⚠ ./node_modules/.pnpm/shiki@1.22.2/node_modules/shiki/dist
Package shiki can't be external
The request shiki/wasm matches serverExternalPackages (or the default list).
The request could not be resolved by Node.js from the project directory.
Packages that should be external need to be installed in the project directory, so they can be resolved from the output files.
Try to install it into the project directory by running npm install shiki from the project directory.
```

Related issue: [Turbopack can't locate serverExternalPackages if installed via pnpm and are child dependencies of other installed modules · Issue #68805 · vercel/next.js](https://github.com/vercel/next.js/issues/68805)

### Next.js cannot natively handle routing parameters that include UTF-8 characters.

Related issue: [Pages with utf-8 name don't work properly under SSR · Issue #10084 · vercel/next.js](https://github.com/vercel/next.js/issues/10084)

### unmet peer `react` and `react-dom` with `@giscus/react`

```text
 WARN  Issues with peer dependencies found
.
└─┬ @giscus/react 3.0.0
  ├── ✕ unmet peer react@"^16 || ^17 || ^18": found 19.0.0-rc-02c0e824-20241028
  └── ✕ unmet peer react-dom@"^16 || ^17 || ^18": found 19.0.0-rc-02c0e824-20241028
```

### deprecated `eslint@^8` and its subdependencies

```text
 WARN  deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
 WARN  5 deprecated subdependencies found: @humanwhocodes/config-array@0.13.0, @humanwhocodes/object-schema@2.0.3, glob@7.2.3, inflight@1.0.6, rimraf@3.0.2
```

### `react` and `react-dom` have not release stable version for `19`

### `@types/react` and `@types/react-dom` haven't been updated to `^19`

## References

### Development

- [Building Your Application: Upgrading | Next.js](https://nextjs.org/docs/app/building-your-application/upgrading/version-15)
- [React 19 RC Upgrade Guide – React](https://react.dev/blog/2024/04/25/react-19-upgrade-guide)
- [Deploying: Static Exports | Next.js](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#unsupported-features)

- [giscus](https://giscus.app/zh-CN)

### Stack

- [next.js/packages/create-next-app/templates/index.ts at v15.0.2 · vercel/next.js](https://github.com/vercel/next.js/blob/v15.0.2/packages/create-next-app/templates/index.ts)
- [Architecture: Turbopack | Next.js](https://nextjs.org/docs/architecture/turbopack#unsupported-features)
- [lint-staged/lint-staged: 🚫💩 — Run linters on git staged files](https://github.com/lint-staged/lint-staged?tab=readme-ov-file#configuration)
- [Configuration Files - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/v8.x/use/configure/configuration-files)
- [JSON Schema](https://json-schema.org/)
- [Configuration File · Prettier](https://prettier.io/docs/en/configuration)

### Other

- [mklink | Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/mklink)
- [Locale (computer software) - Wikipedia](<https://en.wikipedia.org/wiki/Locale_(computer_software)>)
- [IETF language tag - Wikipedia](https://en.wikipedia.org/wiki/IETF_language_tag)
- [List of ISO 639 language codes - Wikipedia](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes)

## TODO

Next.js plans to deprecate the Route Segment Config options used by Route Handles in the future. Since we currently rely on these for Static Site Generation (SSG), we should migrate to `dynamicIO` and `use cache`.

- [ ] Chinese and English switch button
- [ ] Dark mode switch button

## Changes

1. Reconstruct the `posts.json` structure to distinguish the difference between "category" and "keyword".
2. Add `keywords` page to display and index all keywords.
3. Make categories indexable.

### References

- [File Conventions: Route Segment Config | Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)
- [next.config.js Options: dynamicIO | Next.js](https://nextjs.org/docs/app/api-reference/next-config-js/dynamicIO)

## Hello New World

作为前端开发者，我无法忍受自己的博客是运行在像 EJS (Hexo) 甚至 PHP (WordPress) 这样简陋不堪或是性能极其糟糕的技术之上的。因此我选择了 Next.js 作为博客系统的基础框架，自行开发全新的博客系统。好消息是，这使得我可以彻底告别 Hexo/Hugo 或是 React 生态下那些繁复臃肿不堪的 UI 组件库，除了 React，我不再需要与前端生态那些既成的老古董打交道。相对应的，在本项目的开发中我自然投入更多的学习与开发成本，但这也是值得的。

欢迎来到属于「夕凪」与 Next.js 的新世界！

### 为什么叫 Yunagi？

~~夕凪是日语中的一个词，意为“属于夜晚的片刻宁静”。指的是傍晚时分，当海滨地区的风向由海风变为陆风时，暂时无风的情形。我希望这个博客系统也能带给你同样的感受。~~

但事实上本项目所引用的夕凪一名来源于旧日本帝国海军建造的九艘“神风级 (Kamikaze-class)”驱逐舰之一的“夕凪号 (Yunagi)”——一艘沉没于旧日本帝国的夕凪时分的平凡而又渺小的驱逐舰。

### 颜色

### Code Block 主题

### 懒加载

在本博客项目中没有使用懒加载及其相关技术。这是因为在本项目中，懒加载的性能提升并不明显，但却会带来额外且不必要的开发成本。因此，我选择相信 Cloudflare CDN 的速度与可靠性。

### TODO

- [x] 页面锚点滚动定位
- [ ] 导航栏
- [ ] 返回页面顶部
- [ ] 图片渲染
- [ ] 图片放大显示（模态框或 :target）
- [x] 代码高亮
- [ ] 代码块复制
- [ ] CI/CD
- [ ] 字体渲染
- [x] 评论区
- [x] RSS 订阅支持
- [ ] 修改 TOC 目录显示位置
- [ ] markdown excel 样式修改
- [x] 在文章页面显示详细信息
- [ ] 移动端适配
- [x] 重整排序逻辑代码
- [x] 网站地图（Sitemap）
- [x] 使用 SSR 进行 SEO 优化
- [x] 文档内联 HTML 代码支持
- [ ] 打印友好适配
- [ ] 暗色模式适配
- [ ] 代码中全部使用单引号替换原有双引号以便与 Next.js 官方写法保持一致
- [ ] 迁移至 App Router
- [ ] 代码块复制功能移除尾缀回车符

#### 内容问题

- [x] 关于界面内容填充
- [x] 文档内容空格缺失导致加粗无法正常显示
- [x] 纯字符标题锚点无法正确工作
- [x] 关于中注明夕凪名称、配色方案、博客设计风格借鉴、诗词出处等于“杂记”忝列于后

- [ ] 移动端菜单展开与回缩动画
- [ ] 小屏下使用按钮展开文章目录（bookmark 图标）
- [ ] 文章列表翻页功能

## 项目结构

> 项目使用 的文件组织形式

```tree

```

## 使用方法

参考使用流程：

1. 安装依赖 -> 编辑文章 -> 本地预览 -> 构建静态文件 -> 手动部署
2. 安装依赖 -> 编辑文章 -> 本地预览 -> CI/CD 自动部署

### 安装依赖

```bash
pnpm install
```

### 本地预览

```bash
pnpm dev
```

### 构建静态文件

```bash
pnpm build
```

静态文件产物位于 `build` 目录下。

### 添加博文

在 `/src/data/posts` 目录下添加 `.md` 文件，文件名即为文章的 slug。同时需要在 `/src/data/posts.json` 文件中添加文章信息，格式如下所示：

```json
[
  {
    "title": "文章标题",
    "name": "对应 md/mdx 文件名",
    "tags": ["标签Ⅰ", "标签Ⅱ"],
    "date": "1970-01-01T00:00:00",
    "updated": "文章最后修改时间（未修改则与 date 字段填写相同时间或直接填写为 null）",
    "categories": ["分类"],
    "description": "文章描述"
  }
]
```

同时如果博文有相关图片资源，需要将图片资源放置于 `public/images` 目录下，并在文章中使用相对路径 `./assets/*.{png,jpg,jpeg,gif,webp,svg}` 引用（如果使用 [Typora](https://typora.io/) 进行文章编辑，则可在文件 > 偏好设置 > 图像 > 插入图片行为中选择复制图片到 `./assets` 文件夹，本项目即基于此行为特化设计，期以简化以至消除文章发布前对文章内容源文件的修改操作）。

### 添加友链

友链数据位于 `src/data/links.json` 文件中，格式如下所示：

```json
[
  {
    "name": "友链名称",
    "link": "友链 URL",
    "photo": "友链头像 URL",
    "description": "友链描述"
  }
]
```

直接修改即可。

### 修改其他页面内容

如果你想基于现有博客主题直接使用本项目，那么你可能需要修改 `src/pages` 目录下的页面内容，以符合你的需求。直接修改 `src/pages` 目录下的各页面内容即可。但是需要注意的是，本项目在开发时即以预设使用者对前端开发——至少编写 HTML 较为熟悉（如果不熟悉也不要紧，如果你能很快上手 markdown，那么熟练掌握 HTML 对于你而言也绝非难事），并且我希望能够提供给使用者以极高的客制化自由度，因此各页面内容均为直接嵌入 HTML 代码，而非使用 JSON 将文本内容独立于页面之外以方便编辑修改。其中需要大量编写 HTML 的页面主要为 `src/pages/index.tsx` 与 `src/pages/about.tsx` 二者，即主页与关于页，其他页面则相对简单。此外你如果相对页面内容进行深度定制，但你从未接触过 React，那么你可能需要先学习一下 React 的基本语法与 Hooks，相关补充内容参见下文“二次开发”部分。

### 部署

本项目的部署方式为使用 GitHub Actions 自动构建并部署到 Cloudflare Pages。你可以参考本项目目录下的 `.github/workflows/deploy.yml` 文件来配置自动部署。需要注意的是，你需要在 Actions secrets and variables 中配置 `CF_ACCOUNT_ID` 与 `CF_API_TOKEN` 两个变量，分别对应 Cloudflare 账户 ID 与 API Token。

## 二次开发

> 本项目代码间耦合程度较高，基本上未考虑二次开发的情形，因此二次开发的可插拔性较差。如非必要，不建议进行二次开发。

鉴于本项目在页面级别使用了 CSS 模块，因此基于本项目的二次开发在页面样式层面可插拔性还算较强。你可以在 `src/styles` 目录下删除原有对应页面的 `*.module.scss` 样式文件，然后自行编写样式文件。

但是涉及到 md/mdx 页面的渲染时，你需要在 `src/components` 目录下编写对应的组件，然后在 `src/_app.tsx` 文件中引入到对应配置位置。同时因为 md/mdx 页面及其关联组件被视为全局组件，因此你如果需要修改其相关样式，难以避免的需要修改 `styles/global.scss`，但我并不建议这样做。如果你确实想基于现有代码进行二次开发，最好的做法应当是完全重写 `global.scss`，这样能保证你的样式表均为最少必要样式，符合我个人简洁、必要、最小化的开发原则。

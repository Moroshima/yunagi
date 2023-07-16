# 夕凪

[简体中文](./README.md) | [English](./README.en.md)

夕凪，意指傍晚时分，海边无风之须臾。是基于 Next.js 与 Markdown 所开发的博客系统。

## Hello New World

作为前端开发者，我无法忍受自己的博客是运行在像 EJS (Hexo) 甚至PHP (WordPress) 这样简陋不堪或是性能极其糟糕的技术之上的。因此我选择了 Next.js 作为博客系统的基础框架，自行开发全新的博客系统。好消息是，这使得我可以彻底告别 Hexo/Hugo 或是 React 生态下那些繁复臃肿不堪的 UI 组件库，除了React，我不再需要与前端生态那些既成的老古董打交道。相对应的，在本项目的开发中我自然投入更多的学习与开发成本，但这也是值得的。

欢迎来到属于「夕凪」与 Next.js 的新世界！

### 为什么叫 Yunagi？

~~夕凪是日语中的一个词，意为“属于夜晚的片刻宁静”。指的是傍晚时分，当海滨地区的风向由海风变为陆风时，暂时无风的情形。我希望这个博客系统也能带给你同样的感受。~~

但事实上本项目所引用的夕凪一名来源于旧日本帝国海军建造的九艘“神风级 (Kamikaze-class)”驱逐舰之一的“夕凪号 (Yunagi)”——一艘沉没于旧日本帝国的夕凪时分的平凡而又渺小的驱逐舰。

### 颜色

博客主题中所使用的颜色来自百乐旗下色彩雫 (iroshizuku) 系列的“雾雨 (kiri-same) ”，同时借鉴与参考了 [Semi Design](https://semi.design/zh-CN/basic/tokens) 的配色方案。其他绝大部分只使用了纯白与纯黑配色，只是对于这二者的 Alpha 通道参数进行了调整。

### Code Block 主题

代码高亮主题为 [GitHub - PrismJS/prism-themes: A wider selection of Prism themes](https://github.com/PrismJS/prism-themes)。在此基础上进行了一些微调。

### 懒加载

在本博客项目中没有使用懒加载及其相关技术。这是因为在本项目中，懒加载的性能提升并不明显，但却会带来额外且不必要的开发成本。因此，我选择相信 Cloudflare CDN 的速度与可靠性。

### TODO

- [x] 页面锚点滚动定位 & 导航栏
- [x] 返回页面顶部
- [x] 图片渲染
- [x] 图片放大显示（模态框或 :target）
- [x] 代码高亮
- [x] 代码块复制
- [x] 代码块行号
- [x] CI/CD
- [x] 字体渲染
- [x] 评论区
- [x] RSS 订阅支持
- [x] 修改 TOC 目录显示位置
- [x] markdown excel 样式修改
- [x] 在文章页面显示详细信息
- [x] 移动端适配
- [x] Archive 功能模块
- [x] 文章目录显示不全（目录标题位置需固定而非上下滑动）
- [x] 文章显示宽度与关于页保持一致
- [x] 移动端在点击链接后菜单自动回缩
- [x] 重整排序逻辑代码
- [ ] 打印友好适配
- [ ] 迁移至 App Router

### 已知问题

- [x] 复制按钮存在复制按钮随代码滚动的问题
- [x] 锚点需要给定偏移量

#### 内容问题

- [x] 关于界面内容填充
- [x] 文档内容空格缺失导致加粗无法正常显示
- [x] 纯字符标题锚点无法正确工作
- [x] 关于中注明夕凪名称、配色方案、博客设计风格借鉴、诗词出处等于“杂记”忝列于后

### 不计划实现或弃用的功能

- [ ] 移动端菜单展开与回缩动画
- [ ] 小屏下使用按钮展开文章目录（bookmark 图标）
- [ ] 文章列表翻页功能

## 项目结构

> 项目使用 Pages Router (Features available in /pages) 的文件组织形式

```tree
.
├── docs                    # 开发文档及相关内容
│   └── devlog.md
├── next.config.mjs         # Next.js 配置文件
├── next-env.d.ts
├── package.json            # 项目依赖
├── pnpm-lock.yaml
├── public                  # 静态资源
│   ├── favicon.ico         # 网站图标
│   ├── images              # 图片资源
│   │   └── *.{png,jpg,jpeg,gif,webp,svg}
│   └── rss.xml
├── README.md               # 项目说明
├── README.zh.md            # 项目说明（中文）
├── src                     # 项目源码
│   ├── components          # 组件
│   │   ├── heading.tsx
│   │   ├── image.tsx
│   │   ├── pre.tsx         # 代码块
│   │   ├── table.tsx
│   │   └── wrapper.tsx     # 页面包装器（md/mdx 页面）
│   ├── pages               # 页面
│   │   ├── 404.tsx         # 404 页面
│   │   ├── about.tsx       # 关于页面
│   │   ├── api             # API 相关（SSR 情况下可用）
│   │   │   └── hello.ts
│   │   ├── _app.tsx        # 全局组件渲染与样式引入
│   │   ├── archive.tsx     # 归档页面
│   │   ├── category.tsx    # 分类页面
│   │   ├── _document.tsx
│   │   ├── index.tsx       # 首页
│   │   ├── links.json      # 友链数据
│   │   ├── links.tsx       # 友链页面
│   │   └── post
│   │       ├── index.tsx   # 文章页面
│   │       ├── posts.json  # 文章数据
│   │       └── *.{md,mdx}  # 文章内容 md/mdx 文件
│   ├── styles              # 对应页面样式
│   │   ├── about.module.scss
│   │   ├── archive.module.scss
│   │   ├── category.module.scss
│   │   ├── globals.scss    # 全局样式
│   │   ├── index.module.scss
│   │   ├── links.module.scss
│   │   ├── post.module.scss
│   │   └── prism-themes    # 代码高亮主题
│   │       └── prism-one-dark.css
│   └── utils               # 工具函数
│       ├── feed.ts         # RSS 订阅
│       ├── posts.ts
│       ├── site.ts
│       ├── toChineseMonth.ts
│       ├── toChineseNumeral.ts
│       └── useHover.ts
└── tsconfig.json
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
pnpm build && pnpm export
```

静态文件产物位于 `out` 目录下。

### 添加博文

在 `src/pages/post` 目录下添加 `.md` 或 `.mdx` 文件，文件名即为文章的 URL。同时需要在 `src/pages/post/posts.json` 文件中添加文章信息，格式如下所示：

```json
[
  {
    "title": "文章标题",
    "name": "对应 md/mdx 文件名",
    "tags": ["标签Ⅰ", "标签Ⅱ"],
    "date": "1970-01-01T00:00:00",
    "updated": "文章最后修改时间（未修改则与 date 字段填写相同时间或直接填写为 null）",
    "categories": ["分类"],
    "description": "文章描述",
  }
]
```

同时如果博文有相关图片资源，需要将图片资源放置于 `public/images` 目录下，并在文章中使用相对路径 `./assets/*.{png,jpg,jpeg,gif,webp,svg}` 引用（如果使用 [Typora](https://typora.io/) 进行文章编辑，则可在文件 > 偏好设置 > 图像 > 插入图片行为中选择复制图片到 `./assets` 文件夹，本项目即基于此行为特化设计，期以简化以至消除文章发布前对文章内容源文件的修改操作）。

### 添加友链

友链数据位于 `src/pages/links.json` 文件中，格式如下所示：

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

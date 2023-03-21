# 开发日志

记录一下项目的踩坑日常

## 项目参考

[使用 Next.js + Hexo 重构我的博客 | Sukka's Blog (skk.moe)](https://blog.skk.moe/post/use-nextjs-and-hexo-to-rebuild-my-blog/)

[用 Markdoc 重构了科技微讯博客 (kejiweixun.com)](https://kejiweixun.com/blog/refactor-my-blog-using-markdoc-and-nextjs/)

## 字体

| 类别 | 字体          |
| ---- | ------------- |
| 英文 | EB Garamond   |
| 中文 | Noto Serif SC |
| 等宽 | Fira Code     |

关于 EB Garamond 与 Noto Serif SC 参见 [Browse Fonts - Google Fonts](https://fonts.google.com/)

## 图标（库）

[Octicons | Interface guidelines (primer.style)](https://primer.style/design/foundations/icons/)

## CI/CD

[使用 Cloudflare Pages 部署静态网站 - Keenwon's Blog](https://keenwon.com/deploy-on-cloudflare-pages/)

[Authentication · Cloudflare Workers docs](https://developers.cloudflare.com/workers/wrangler-legacy/authentication/#using-environment-variables)

[Cloudflare Pages 常见问题 (tarocch1.com)](https://blog.tarocch1.com/posts/cloudflare-pages-faq)

### 关于 Cloudflare Pages 构建镜像中 Node 过旧的问题

[Node_version - Developers / Cloudflare Pages - Cloudflare Community](https://community.cloudflare.com/t/node-version/430291)

[Build Image Update · cloudflare pages-build-image · Discussion #1 (github.com)](https://github.com/cloudflare/pages-build-image/discussions/1)

### 使用 wrangler & GitHub Actions 部署 Cloudflare Pages

[cloudflare/wrangler-action: 🧙‍♀️ zero-config cloudflare workers application deployment using wrangler and github actions](https://github.com/cloudflare/wrangler-action#deploy-your-pages-site-production--preview)

## MDX 渲染

> 在一些功能实现上 remark 与 rehype 提供了类似的插件，本项目在选择插件时更倾向于使用那些包下载量更相对更大的插件 [npm trends: Compare NPM package downloads](https://npmtrends.com/)

| 插件                                                         | 用途                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [rehype-autolink-headings](https://github.com/rehypejs/rehype-autolink-headings) | add links to headings                                        |
| [rehype-code-title](https://github.com/josestg/rehype-code-title) | add code title to HTML document stream                       |
| [rehype-katex](https://github.com/remarkjs/remark-math/tree/main/packages/rehype-katex) | render math text with KaTeX                                  |
| [rehype-prism-plus](https://github.com/timlrx/rehype-prism-plus) | highlight code blocks with Prism                             |
| [rehype-raw](https://github.com/remarkjs/remark-rehype)      | parse the tree again to render HTML content                  |
| [rehype-slug](https://github.com/rehypejs/rehype-slug)       | add `id`s to headings.                                       |
| [rehype-toc](https://github.com/JS-DevTools/rehype-toc)      | adds a table of contents (TOC) to the page                   |
| [remark-gfm](https://github.com/remarkjs/remark-gfm)         | support [GitHub Flavored Markdown Spec (GFM)](https://github.github.com/gfm/) |
| [remark-math](https://github.com/remarkjs/remark-math)       | support math                                                 |

### 评论区

使用 [Wrapper customization | MDX 中文网 (mdxjs.cn)](https://www.mdxjs.cn/guides/wrapper-customization) 向 mdx 页面渲染内容后添加 [giscus](https://giscus.app/zh-CN) 评论区组件（[GitHub - giscus/giscus-component: Component library for giscus, a comment system powered by GitHub Discussions.](https://github.com/giscus/giscus-component)）

### 代码块

[How to add code blocks with syntax highlighting to a Next.js blog using MDX with Prism.js – Ryan Carmody](https://www.ryancarmody.dev/blog/add-code-blocks-with-syntax-highlighting-to-nextjs-blog-prismjs)

本项目使用的 [One Dark](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-one-dark.css) 主题来自于 [GitHub - PrismJS/prism-themes: A wider selection of Prism themes](https://github.com/PrismJS/prism-themes)

#### 代码块复制按钮功能

[Copy to clipboard button in MDX with Next.js and Rehype Pretty Code | ClarityDev blog](https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype)

简而言之，具体功能的实现为使用 [unist-util-visit](https://github.com/syntax-tree/unist-util-visit) 在 code block 被解析渲染之间介入，将 code block 原始内容挂载到 \<code> DOM 的 properties 上，以供按钮实现调用。

复制到剪贴板则是基于浏览器原生 Web API 实现，参见 [Clipboard.writeText() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Clipboard/writeText)。

> 可能可以通过使用 [remark-mdx-code-meta](https://github.com/remcohaszing/remark-mdx-code-meta) 取代 [unist-util-visit](https://github.com/syntax-tree/unist-util-visit) 直接介入 mdx 渲染的方案，但是因为该插件下载量与 star 均较少，因此在本项目中并未采取使用。

#### 为什么不使用 react-syntax-highlighter

在 create-react-app 所构建的原生 Client-side rendering（CSR）的 React App 中，我们可以使用 [react-markdown](https://github.com/remarkjs/react-markdown) 搭配 [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter) 并使用 Prism 实现非常优秀的代码块高亮渲染，但是在 Next.js 下搭配 @next/mdx（参见 [Advanced Features: Using MDX | Next.js (nextjs.org)](https://nextjs.org/docs/advanced-features/using-mdx)）使用 react-syntax-highlighter 会存在如下两个问题：

- [node.js - NextJS - Unexpected Token Import - Stack Overflow](https://stackoverflow.com/questions/58966891/nextjs-unexpected-token-import)
- [language identifier not working in nextjs · Issue #492 · react-syntax-highlighter/react-syntax-highlighter · GitHub](https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/492)

第一个问题非常容易解决，只需要将主题引用链接更改为从 cjs 目录下引用即可。但第二个问题则因为 react-syntax-highlighter 不再被积极维护而至今仍未被修复，唯一的做法就是放弃使用其提供的 prism 支持而切换到 hljs，但问题就在于 highlight.js 对于 jsx/tsx 的支持非常糟糕，作为前端开发，code block 中难以避免的会存在大量的 jsx/tsx 内容，而这显然是我所无法容忍的。

#### 为什么使用 rehype-prism-plus 而非 rehype-prism

[rehype-prism vs rehype-prism-plus | npm trends](https://npmtrends.com/rehype-prism-vs-rehype-prism-plus)

#### 关于 Prism 的语言支持

[Prism (prismjs.com)](https://prismjs.com/#supported-languages)

## 性能优化

清除不需要的 CSS [Next.js | PurgeCSS](https://purgecss.com/guides/next.html)
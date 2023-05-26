# Yunagi

Yunagi (Evening Calm) is a blog system based on Next.js and Markdown.

## Hello New World

Say goodbye to Hexo/Hugo and those fxxking stupid React UI librarys, I will write my blog by myself without those fxxking things except react.

As a frontend developer, how can you bear your blog is running on something like EJS(Hexo) or even PHP(WordPress)?

## Why Yunagi?

~~Yunagi is a Japanese word that means "evening calm". It is a beautiful word that describes the calmness of the evening. I hope that this blog system can bring you the same feeling.~~ The name yunagi is from [one of nine Kamikaze-class destroyers built for the Imperial Japanese Navy (IJN) during the 1920s](https://en.wikipedia.org/wiki/Japanese_destroyer_Y%C5%ABnagi_(1924)).

## Color

The color of the hyperlink is from PILOT iroshizuku kiri-same and [Semi Design](https://semi.design/zh-CN/basic/tokens). Other colors are only pure white and black with different alpha channel values.

## Code Block Theme

The theme is from [GitHub - PrismJS/prism-themes: A wider selection of Prism themes](https://github.com/PrismJS/prism-themes).

## Lazy Load

No lazy load is used in this blog system. The reason is that I believe in Cloudflare's CDN.

## TODO

- [x] Page anchor scrolling positioning & navigation bar
- [x] Back to top button
- [x] Image rendering
- [x] Image zoom-in display (modal or :target)
- [x] Code highlighting
- [x] Code block copy
- [x] Code block line numbers
- [x] CI/CD
- [x] Font rendering
- [x] Comment section
- [x] RSS subscription support
- [x] Modify TOC directory display position
- [x] Modify markdown Excel styles
- [x] Display detailed information on the article page
- [x] Mobile adaptation
- [x] Archive function module
- [x] The article directory is not displayed completely (the position of the directory title needs to be fixed rather than scrolling up and down)
- [x] Make the article display width consistent with the About page
- [x] After clicking a link on mobile, automatically collapse the menu
- [x] Refactor sorting logic code

## Issues

- [x] Copy button has an issue where it scrolls with the code
- [x] Anchors need to be given an offset

### Content Issues

- [x] About page content padding
- [x] Document content missing spaces causes bolding to not display properly
- [x] Anchors for headings with only plain text do not work correctly
- [x] In the About page, the mention of Xia Nai's name, color scheme, blog design style reference, and poetry source are listed as "Miscellaneous Records" at the end.

### Deprecated Features

- [ ] Menu expand and collapse animation on mobile
- [ ] Use a button to expand the directory on small screens (bookmark icon)
- [ ] Article list pagination functionality

## Usage

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

import Head from "next/head";
import styles from "../styles/about.module.scss";

export default function Index() {
  return (
    <>
      <Head>
        <title>关于 | Moroshima&apos;s Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles["space-limit"]}>
          <h1>关于</h1>
          <hr />
          <p>欲买桂花同载酒，终不似，少年游。</p>
          <div className={styles.content}>
            <h2>一些随笔</h2>
            <div className={styles.anarchy}></div>
            <p>渺小的伤感只会把世界引向毁灭，少年！</p>
            <p style={{ marginLeft: "16em" }}>——機動戦士Ζガンダム</p>
            <p>我是个很奇怪的人。</p>
            <p className={styles.sensitive}>
              你可以称呼我为 Moroshima ——或者 Itsuki Moroshima，当然，Moroshima
              Kaga 也是我曾使用的旧名。一名<del>国内某不知名大专</del>
              自动化苦逼在读大学生。会一点编程
              <span>
                （前端开发、嵌入式开发、Node.js 后端开发、C#开发<del>入门</del>
                ）
              </span>
              ，但会的不多，你可以去我的{" "}
              <a href="https://github.com/Moroshima">GitHub</a> 看看我写的几个
              <del>拿不出手的</del>项目。主力电脑操作系统是 Windows
              NT，曾数次尝试使用 GNU/Linux 作为主力开发操作系统未果
              <span>（Wayland 只支持整数比缩放罪大恶极）</span>
              <del>
                ，但是我非常擅长重装操作系统<span>（尤其是 Linux 发行版）</span>
                。
              </del>
            </p>
            <p className={styles.sensitive}>
              标签：共产主义者、<span>无政府主义者（巴枯宁主义者）</span>
              、国际主义者、和平主义者、理想主义者，支持
              <span>
                民族自决（包括外蒙古、西藏、新疆、台湾、云南等地区民族自治）、去政治化、去政府化
              </span>
              ，反对资本主义、反对民族主义、<span>威权主义、集权专制</span>
              ，具有<span>新自由主义</span>倾向，对<span>绥靖主义</span>
              持中立态度。存在民族主义教育导致的
              <span>种族歧视以及极端民族主义倾向、战争狂热</span>。
            </p>
            <h2>在用设备</h2>
            <ul>
              <li>Mini-ITX Workstation</li>
              <ul>
                <li>YOGO S1</li>
                <li>AMD Ryzen 7 5800X</li>
                <li>ROG STRIX B550-I GAMING</li>
                <li>ROG-STRIX-RTX3070TI-O8G-GAMING</li>
              </ul>
              <li>ThinkPad T14 Gen 2 (14” Intel) (20W0-005UCD)</li>
              <li>Intel NUC 11 Essential Kit (NUC11ATKC4)</li>
              <li>iPhone 12</li>
              <li>Sony Alpha 6400</li>
            </ul>
            <h2>本站</h2>
            <p>
              本站作为个人博客，不会仅仅只有技术类的文章，也会存在少量生活片段。作为我个人博客自初次建站以来的第三个博客方案，这次我选择不再使用现成的博客框架与主题，转而基于
              Next.js 完全重构，以打破 WordPress 与 Hexo的藩篱。
              结果是显然的，虽然付出了较大的开发成本，但是我对于博客主题的掌握力达到了一个前所未有的高度。我可以使用我熟悉的
              React + Markdown
              来构筑我的博客结构，无论是可维护性还是灵活性于我而言都有了极大的飞跃。
            </p>
            <p>
              本站是纯静态博客，使用了 Next.js 的 SSG 特性并托管于 Cloudflare
              Pages。且遵顼了尽量避免使用过于花哨 CSS
              实现的原则，一方面保证了在样式表因为网络因素载入失败的情况下的网页可读性，另一方面则保证了网站的加载速度。
            </p>
            <p>
              本站内容遵循 CC-BY-NC-SA 4.0
              授权条款，您可以自由地共享、演绎本站内容，只要您遵守许可协议条款，作为许可人的我就无法收回您如前的权利。
            </p>
            <h2>日志</h2>
            <ul>
              <li>2023-05-07 新域名博客试运行</li>
            </ul>
            <p>- END -</p>
          </div>
        </div>
      </main>
    </>
  );
}

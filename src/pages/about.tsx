import Head from "next/head";
import styles from "../styles/about.module.scss";

export default function About() {
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
            <div className={styles.profile}>
              <img
                className={styles["profile-photo"]}
                src="https://q1.qlogo.cn/g?b=qq&s=640&nk=2524332942"
                alt={"profile-photo"}
              />
              <p className={styles["profile-name"]}>
                <strong>Itsuki Moroshima</strong>
              </p>
            </div>
            <h2>一些随笔</h2>
            <div className={styles.flag}>
              <div className={styles.anarchy}></div>
            </div>
            <div className={styles.quote}>
              <p>渺小的伤感只会把世界引向毁灭，少年！</p>
              <p className={styles["quote-source"]}>——機動戦士Ζガンダム</p>
            </div>
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
              <span>（Wayland 只支持整数比缩放罪大恶极）</span>，
              <del>
                但是我非常擅长重装操作系统<span>（尤其是 Linux 发行版）</span>
              </del>
              。
            </p>
            <p className={styles.sensitive}>
              标签：INFP-T、理想主义者、共产主义者、
              <span>无政府主义者（巴枯宁主义者）</span>
              、国际主义者、和平主义者，支持
              <span>
                民族自决（包括外蒙古、西藏、新疆、台湾、云南等地区民族自治）、去政治化、去政府化
              </span>
              ，反对资本主义、民族主义、<span>威权主义、集权专制</span>
              ，具有<span>新自由主义</span>倾向，对<span>绥靖主义</span>
              持中立态度。存在民族主义教育导致的
              <span>种族歧视以及极端民族主义倾向、战争狂热</span>。
            </p>
            <h2>社群</h2>
            <ul>
              <li>
                Email:{" "}
                <a href="mailto:moroshimaitsuki@gmail.com">
                  moroshimaitsuki@gmail.com
                </a>
              </li>
              <li>
                GitHub:{" "}
                <a href="https://github.com/Moroshima" target="_blank">
                  Moroshima
                </a>
              </li>
              <li>
                Mastodon:{" "}
                <a href="https://mastodon.social/@Moroshima" target="_blank">
                  @Moroshima@mastodon.social
                </a>
              </li>
              <li>
                Telegram:{" "}
                <a href="https://t.me/Moroshima" target="_blank">
                  @Moroshima
                </a>
              </li>
            </ul>
            <h2>在用设备</h2>
            <ul>
              <li>Haruna (Mini-ITX Workstation)</li>
              <ul>
                <li>YOGO S1</li>
                <li>AMD Ryzen 7 5800X</li>
                <li>ROG STRIX B550-I GAMING</li>
                <li>ROG-STRIX-RTX3070TI-O8G-GAMING</li>
              </ul>
              <li>Hatsuyuki (Standard-ATX Workstation)</li>
              <ul>
                <li>AMD Ryzen 5 5600G</li>
                <li>ASUS PRIME B350-PLUS</li>
                <li>Sapphire RX 470D Platinum</li>
              </ul>
              <li>Acer Aspire Vero (AV14-51-59UE)</li>
              <li>iPhone 12</li>
              <li>Sony Alpha 6400</li>
            </ul>
            <h2>本站</h2>
            <p>
              本站作为个人博客，不会仅仅只有技术类的文章，也会存在少量生活片段。作为我个人博客自初次建站以来的第三个博客方案，这次我选择不再使用现成的博客框架与主题，转而基于
              Next.js 完全重构，以打破 WordPress 与 Hexo 的藩篱。
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
            <h2>杂记</h2>
            <h3>夕凪（Yunagi）名称由来</h3>
            <p>
              夕凪一词源于日语，意为风平浪静的傍晚，我希望本博客也能给你——读者又抑或是使用者带来相同的感受。
              当然，另外很大程度上我会选择夕凪这个名字不仅是因为这是一个美好的词语，更是因为旧日本帝国海军（IJN）所建造的九艘神风级驱逐舰之一即以“夕凪”所命名——她也正如她的名字一般，沉没于旧日本帝国的夕凪时分（1944年8月25日）。
            </p>
            <p>
              其实我偏爱旧日本海军，很大程度上即是因为其在舰名与舰船设计上都极富日式美学——用美好的意象去称呼暴力且无情的事物，同时舰船设计思路也可以说是剑走偏锋。在当时全球海军中，日本海军可以说是将舰船设计与海军战术战法之间的整合发挥到了极致。从“樱花特攻”到“神风特攻队”以至“菊水特攻”——日本或者说大和民族从根底便透露着一隅小国执拗但狂热的军国主义与民族主义热忱。但于此对战争和暴力的美学化，我不置可否。
            </p>
            <h3>配色方案</h3>
            <p>
              网站的配色方案源于百乐的色彩雫墨水中的竹炭与雾雨，但同时也参考与借鉴了
              Semi Design
              的色彩设计方案。除此二者之外，本博客中就仅采用了纯黑与纯白配色——当然，部分组件也采用了
              Alpha 通道值各异的黑白以实现高斯模糊或透明效果。
            </p>
            <h3>设计风格借鉴</h3>
            <p>
              这个博客起初开发是因为看到了{" "}
              <a href="https://yuhi.xyz" target="_blank">
                Yuhi 学长的博客
              </a>
              。我真的好喜欢这种极简风格的博客！！！
            </p>
            <p>
              但很可惜这个学长的博客主题似乎是基于 Hugo 编写的，我个人对于 Hugo
              与 Hexo 并无好感（但项目的早期受{" "}
              <a
                href="https://blog.skk.moe/post/use-nextjs-and-hexo-to-rebuild-my-blog/#Wei-Sheng-6"
                target="_blank"
              >
                使用 Next.js + Hexo 重构我的博客 | Sukka&apos;s Blog (skk.moe)
              </a>{" "}
              一文的影响我也确实做过使用 Next.js + Hexo
              的尝试，但是开发体验并不尽如人意，遂放弃）。加之之前我试过前后端分离的方案，感觉作为一个轻量化的博客系统，在开发与部署上不宜过于繁琐，遂最终也选择了放弃。这些项目可能如今仍然能在我的
              GitHub 仓库中寻得部分，以 akari
              一词开头的部分便是，我起初摸索性的尝试，也算是夕凪（Yunagi）
              的前身了罢。毕竟在多次失败的开发之后，我才下定决心完全基于 Next.js
              SSG 开发夕凪（Yunagi），也顺势弃用了原本我打算作为博客系统名称的
              Akari 一词，转而使用 Yunagi，可能也算是一种继往开来了罢。
            </p>
            <p>
              另一个对于本博客设计风格影响较大的即是大萌神的博客，基于 Jekyll
              开发，遵循着极简主义的设计原则。界面简约但是在功能性上还是有着不错的巧思，喜欢！除此之外我也从大萌神的博客中看到了不基于
              Hexo
              这样完善的为博客而生的框架，转而使用静态网页生成框架开发网页的可能性。也正是这样的可能性，或者说希望，支撑着我在一段不算很长的，但也算不上很短的时间内完成了我的博客开发。
            </p>
            <h3>诗词出处</h3>
            <p>
              风消焰蜡，露浥红莲，花市光相射。桂华流瓦。纤云散，耿耿素娥欲下。——宋·周邦彦
              《解语花·上元》
            </p>
            <p>
              常记溪亭日暮，沉醉不知归路。兴尽晚回舟，误入藕花深处。争渡，争渡，惊起一滩鸥鹭。——宋·李清照
              《如梦令·常记溪亭日暮》
            </p>
            <p>
              今宵酒醒何处？杨柳岸，晓风残月。
              此去经年，应是良辰好景虚设。——宋·柳永 《雨霖铃·寒蝉凄切》
            </p>
            <p>
              携手江村。梅雪飘裙。情何限、处处消魂。故人不见，旧曲重闻。向望湖楼，孤山寺，涌金门。——宋·苏轼
              《行香子·冬思》
            </p>
            <p>
              欲买桂花同载酒，终不似，少年游。——南宋·刘过 《唐多令·芦叶满汀洲》
            </p>
            <h3>Favicon</h3>
            <p>
              本博客 favicon 来自于
              <a
                href="https://www.bilibili.com/video/BV1bV41127Da"
                target="_blank"
              >
                【warma爆炸电台】来聊些以前从没说过的吧！【第九期】
              </a>
              <a href="https://space.bilibili.com/14751040" target="_blank">
                （@怒九笑）
              </a>
              。关注 Warma 喵，关注 Warma 谢谢喵！
            </p>
            <h2>日志</h2>
            <ul>
              <li>2023-05-07 本博客试运行</li>
              <li>2023-05-11 试运行结束，本博客宣告功能性完工</li>
              <li>2023-05-11 博文迁移完成，本博客正式接替旧博客职能上线运行</li>
            </ul>
            <h2>友链</h2>
            <p>快来和我贴贴！（大声）</p>
            <code>
              &#123;
              <br />
              &nbsp;&nbsp;&quot;name&quot;: &quot;Moroshima&apos;s Blog&quot;,
              <br />
              &nbsp;&nbsp;&quot;link&quot;:
              &quot;https://kuroshima.eu.org&quot;,
              <br />
              &nbsp;&nbsp;&quot;photo&quot;:
              &quot;https://q1.qlogo.cn/g?b=qq&s=640&nk=2524332942&quot;,
              <br />
              &#125;
            </code>
            <p className={styles.end}>- END -</p>
          </div>
        </div>
      </main>
    </>
  );
}

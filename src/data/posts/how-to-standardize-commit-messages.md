# 规范项目的代码提交信息

> 注：本文中的项目基于 Yarn v1 进行包管理

为什么要写这篇文章：受到栗老板之前发在青柚前端 ICU 群里的博客 [Commit message 和 Change log 编写指南 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html) 的启发而尝试过使用 commitizen 规范网页项目里的提交请求，但当时 yarn 安装 commitizen 之后执行 `commitizen init cz-conventional-changelog --yarn --exact` 命令出现了一些状况，导致没有成功。今天打算把 FreshCup 的项目框架先拉起来所以又尝试了下配置这些东西，终于配置成功啦！

## 使用 git cz 来提交符合 Angular 标准的 Commit 请求

### 前置环境

Node.js >= v16

Yarn < v2

### 安装依赖

全局安装 commitizen（**建议使用 npm**，使用 `yarn global add` 安装似乎存在一些问题，commitizen 没有被添加到系统 PATH）

```bash
npm install commitizen -g
```

文件根目录下执行以配置（加上 `--yarn` 参数以使用 yarn 初始化）

```bash
commitizen init cz-conventional-changelog --yarn --exact
```

（我删除了原参考文档中的 --dev 参数）

当当，可以愉快的 `git cz` 来进行 commit 啦

## 使用 ghook + validate-commit-msg 拦截不规范的 Commit

```bash
yarn add ghooks
```

```bash
yarn add validate-commit-msg
```

package.json 中的 config 项需要新增 ghook 和 validate-commit-msg 配置字段：

- ghook 的配置参照 [ghooks - npm (npmjs.com)](https://www.npmjs.com/package/ghooks) 的 setup
- validate-commit-msg 直接用 [conventional-changelog-archived-repos/validate-commit-msg: DEPRECATED. Use https://github.com/marionebl/commitlint instead. githook to validate commit messages are up to standard](https://github.com/conventional-changelog-archived-repos/validate-commit-msg#options) 中给出的模板，无需修改（当然你也可以选择自定义）

配置完成后 config 大致如下图

![image-20211019230937498](./assets/image-20211019230937498.png)

为什么我没使用 husky？因为 husky6.0 配置 hooks 太麻烦了，参见 [husky使用总结 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/366786798)

配置完成后如下，不规范的 commit 会报错不被执行

![image-20211019222231342](./assets/image-20211019222231342.png)

此时我们可以直接使用 `git cz` 来去辅助我们撰写标准的 commit message，当然，我们依旧可以选择继续使用 `git commit -m "commit message"` 命令来去直接提交符合 Angular 规范的 commit message

## 关于 Angular 规范

[git commit 规范指南 - SegmentFault 思否](https://segmentfault.com/a/1190000009048911)

[Git Commit Message Conventions - Google 文档](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uyo6cb12dt6w)

## 可能导致的问题

在使用 `git rebase -i root` 命令变基时，会产生如下报错

```bash
error: could not detach HEAD
```

在加上 `--no-verify` 参数再次执行命令即可正常执行，推测可能是 hooks 造成的影响，因此为了将 hooks 造成的影响降到最低，我更推荐在执行牵扯到 commit 相关的命令时最好加上 `--no-verify` 参数（实际使用中 `git add .` 和 `git push` 命令并未受到影响）

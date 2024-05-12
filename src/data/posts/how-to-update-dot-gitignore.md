# 更新 .gitignore 的正确姿势

## 引言

此前我对 Git 的错误认知导致我一直认为 .gitignore 文件是不可更新的，我此前认为 .gitignore 文件只有在项目创建时就会被 Git 读取（这似乎是前端群里之前讨论这个问题所得出的结论，加之我个人在此前确实尝试过直接修改 .gitignore 文件的内容但其并未生效，这就导致导致我产生了这样一种错误认知），同时这也导致我平时在搭建自己的项目时通常对于 .gitignore 的撰写十分小心谨慎，生怕漏了什么忘记 ignore 掉的文件，就，很不舒服。

然而这只是我之前没有深究该问题所导致的错误断言，实际上 .gitignore 显然是可更新的（否则那些开源大项目总不可能每次为了增加 ignore 的文件就删库重开罢）

## 正文

我们需要对文件重新进行 track 来使得我们更新的 .gitignore 文件配置生效

▲什么是 track？Git会跟踪每个文件的变动，这样一种跟踪的过程便是 track

我们只需要执行命令如下：

```bash
git rm -r --cached .    # 从已跟踪文件清单中移除所有文件
```

之后再 commit 更改即可

```bash
git add .    # 重新添加所有文件（在这一步中 .gitignore 的配置将会生效）
git commit -m "chore: update .gitignore"    # 提交更改
git push    # 推送提交
```

关于 git rm 命令，我们可以在 Pro Git 中找到其详细的使用说明

![image.png](./assets/image.png)

![image-1.png](./assets/image-1.png)

可以看到，`git rm -r --cached` 命令可以使我们停止对特定文件的追踪，这其实也就意味着，如果我们明确知道我们需要停止对某一文件的追踪，我们实际上也可以不将其写入 .gitignore 中也能实现，只不过不写入 .gitignore 的话如果之后你又使用了 `git add .` 命令 ，那很抱歉，这个文件又会被重新 track。

## 附言

关于 `git rm` 的详细内容参见 Git 官方所发行的 Pro Git 46-47页（版本 2.1.57-1-g73d0e36c, 2021-10-16）

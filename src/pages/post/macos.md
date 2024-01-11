# Moroshima 的奇怪 macOS 命令集

## 功耗监控

```bash
sudo powermetrics -i 1000 | grep Combined\ Power
```

inspired by [【官方双语】苹果你快看一眼啊 - Frore MacBook Air散热改装 #linus谈科技](https://www.bilibili.com/video/BV18b4y1L721)

## lsusb

```bash
system_profiler SPUSBDataType
```

from ChatGPT

## 递归删除 .DS_Store

```bash
find . -name .DS_Store -type f -exec echo "Deleting: {}" \; -delete
```

from ChatGPT

## 最像 Linux Desktop Environment 的一集

指桌面环境经常出 bug

### 重启访达

```bash
pkill Finder
```

### 重启程序坞 & 启动台

```bash
sudo pkill Dock
```

### 重启菜单栏

```bash
pkill SystemUIServer
```

## 移除 Whisky

```bash
rm -rf ~/Library/Application\ Support/com.isaacmarovitz.Whisky/
rm -rf ~/Library/Containers/com.isaacmarovitz.Whisky/
rm -rf ~/Library/Containers/com.isaacmarovitz.Whisky.WhiskyThumbnail/
```

## Homebrew

### Homebrew 术语（Homebrew terminology）

https://docs.brew.sh/Formula-Cookbook#homebrew-terminology

| term                 | description                                                  | example                                                      |
| -------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **formula**          | Homebrew package definition that builds from upstream sources | `/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula/f/foo.rb` |
| **cask**             | Homebrew package definition that installs macOS native applications | `/usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask/Casks/b/bar.rb` |
| **prefix**           | path in which Homebrew is installed                          | `/usr/local`                                                 |
| **keg**              | installation destination directory of a given **formula** version | `/usr/local/Cellar/foo/0.1`                                  |
| **rack**             | directory containing one or more versioned **kegs**          | `/usr/local/Cellar/foo`                                      |
| **keg-only**         | a **formula** is *keg-only* if it is not symlinked into Homebrew’s prefix | the [`openjdk`](https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/o/openjdk.rb) formula |
| **opt prefix**       | a symlink to the active version of a **keg**                 | `/usr/local/opt/foo`                                         |
| **Cellar**           | directory containing one or more named **racks**             | `/usr/local/Cellar`                                          |
| **Caskroom**         | directory containing one or more named **casks**             | `/usr/local/Caskroom`                                        |
| **external command** | `brew` subcommand defined outside of the Homebrew/brew GitHub repository | [`brew alias`](https://github.com/Homebrew/homebrew-aliases) |
| **tap**              | directory (and usually Git repository) of **formulae**, **casks** and/or **external commands** | `/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core`    |
| **bottle**           | pre-built **keg** poured into a **rack** of the **Cellar** instead of building from upstream sources | `qt--6.5.1.ventura.bottle.tar.gz`                            |
| **tab**              | information about a **keg**, e.g. whether it was poured from a **bottle** or built from source | `/usr/local/Cellar/foo/0.1/INSTALL_RECEIPT.json`             |
| **Brew Bundle**      | an [extension of Homebrew](https://github.com/Homebrew/homebrew-bundle) to describe dependencies | `brew 'myservice', restart_service: true`                    |
| **Brew Services**    | an [extension of Homebrew](https://github.com/Homebrew/homebrew-services) to manage services | `brew services start myservice`                              |

### ENVIRONMENT

**仅列出换源所必须的环境变量条目**

https://docs.brew.sh/Manpage#environment

- `HOMEBREW_API_DOMAIN` 
  Use this URL as the download mirror for Homebrew JSON API. If  metadata files at that URL are temporarily unavailable, the default API  domain will be used as a fallback mirror.

  *Default:* `https://formulae.brew.sh/api`.

- `HOMEBREW_AUTOREMOVE` 
  If set, calls to `brew cleanup` and `brew uninstall` will automatically remove unused formula dependents and if `HOMEBREW_NO_INSTALL_CLEANUP` is not set, `brew cleanup` will start running `brew autoremove` periodically.

- `HOMEBREW_BOTTLE_DOMAIN` 
  Use this URL as the download mirror for bottles. If bottles at that  URL are temporarily unavailable, the default bottle domain will be used  as a fallback mirror. For example, `HOMEBREW_BOTTLE_DOMAIN=http://localhost:8080` will cause all bottles to download from the prefix `http://localhost:8080/`. If bottles are not available at `HOMEBREW_BOTTLE_DOMAIN` they will be downloaded from the default bottle domain.

  *Default:* `https://ghcr.io/v2/homebrew/core`.

- `HOMEBREW_BREW_GIT_REMOTE` 
  Use this URL as the Homebrew/brew `git`(1) remote.

  *Default:* `https://github.com/Homebrew/brew`.

- `HOMEBREW_CORE_GIT_REMOTE` 
  Use this URL as the Homebrew/homebrew-core `git`(1) remote.

  *Default:* `https://github.com/Homebrew/homebrew-core`.

此外如果需要更换 homebrew-service tap 源，需要执行如下命令：

```bash
brew tap --custom-remote --force-auto-update homebrew/services https://mirrors.ustc.edu.cn/homebrew-services.git
```

homebrew-cask-versions tap 源同理，但一般不常使用

更详细的换源配置可参考 [USTC Mirror Help — USTC Mirror Help  文档](https://mirrors.ustc.edu.cn/help/index.html) 或  [homebrew | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/) 相关条目

### Recommanded Packages

| Name            | Description                                                  | Note |
| --------------- | ------------------------------------------------------------ | ---- |
| b2sum           |                                                              |      |
| bottom          | Yet another cross-platform graphical process/system monitor  |      |
| emacs           |                                                              |      |
| fastfetch       |                                                              |      |
| git             |                                                              |      |
| htop            |                                                              |      |
| lua             |                                                              |      |
| nvm             |                                                              |      |
| perl            |                                                              |      |
| pnpm            |                                                              |      |
| pstree          | Show ps output as a tree                                     |      |
| ripgrep         | Search tool like grep and The Silver Searcher                |      |
| ruby            |                                                              |      |
| sing-box        |                                                              |      |
| smartmontools   |                                                              |      |
| starship        |                                                              |      |
| stow            |                                                              |      |
| stress          |                                                              |      |
| tmux            |                                                              |      |
| tree            |                                                              |      |
| uptimed         |                                                              |      |
| vim             |                                                              |      |
| wget            |                                                              |      |
| woff2           | Utilities to create and convert Web Open Font File (WOFF) files |      |
| yarn            |                                                              |      |
| zsh-completions |                                                              |      |
| zstd            | Zstandard is a real-time compression algorithm               |      |

#### One-click Installation

```bash
brew install b2sum bottom emacs fastfetch git htop lua nvm perl pnpm pstree ripgrep ruby sing-box smartmontools starship stow stress tmux tree uptimed vim wget woff2 yarn zsh-completions zstd
```

#### zsh-completions 额外配置

```bash
chmod go-w '/opt/homebrew/share'
chmod -R go-w '/opt/homebrew/share/zsh'
```

### 卸载所有软件包

```bash
brew remove $(brew list --formula)
```

## uprecords

```bash
brew update
brew info uptimed
brew install uptimed
brew services start uptimed
uprecords
```

from [Uptimed — Notes (notes.autiomaa.org)](https://notes.autiomaa.org/blog/2021-10-31-uptimed/)

## 快捷键

https://support.apple.com/zh-cn/HT201236

- **Option-Shift-Command-V**：粘贴并匹配样式：将周围内容的样式应用到粘贴在该内容中的项目。

## 浏览器禁用双指左右前进后退

[Left Swipe/Previous Page - Can I disable? | I-Firefox Isithangami Sokweseka | Ukwesekwa kwe-Mozilla](https://support.mozilla.org/zu/questions/1359934)

将 `browser.gesture.swipe.left` 更改为 `cmd_scrollLeft`，将 `browser.gesture.swipe.right` 更改为  `cmd_scrollRight`

![image-20231224215844389](./assets/image-20231224215844389.png)

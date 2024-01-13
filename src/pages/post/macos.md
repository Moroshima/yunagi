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

## lsblk

```bash
diskutil list
```

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

如果你想看看 Cellar：

```bash
echo $HOMEBREW_CELLAR
```

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

## 查看文件创建时间与修改时间（精确到秒）

```bash
GetFileInfo <filename>
```

## 架构

```bash
arch
```

## 检查目录空间占用

让我看看！（大声）

```bash
du -sh ./node_modules
```

## Wget

你知道这是啥文件

```bash
wget -O config.yaml <url>
```

## lstopo

```bash
brew install hwloc
lstopo --output-format ascii
```

## Java

### 安装

```bash
brew install java
sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
java --version
```

### 卸载

```bash
brew uninstall java
rm /Library/Java/JavaVirtualMachines/openjdk.jdk
```

## ffmpeg

使用 Apple silicon 内建硬件编码器编码视频

视频编码格式：H.264

视频码率：10Mbps

音频编码格式：AAC

音频采样率：44.1kHz

```bash
ffmpeg -i input.mov -c:v h264_videotoolbox -b:v 10m -c:a aac -b:a 44.1k output.mp4
```

## 系统硬件信息

处理器型号

```bash
sysctl machdep.cpu.brand_string
```

硬件数据

```bash
sysctl hw
```

全部信息

```bash
sysctl -a
```

## 电源管理

显示当前系统电源管理配置

```bash
pmset -g
```

电源状态

```bash
pmset -g batt
```

## Perl

没有 interactive shell

```bash
perl -e "print 'hello,world!'"
echo "print 'hello,world!'" | perl
```

## Zsh

### remove .zsh_sessions

`/etc/zshrc_Apple_Terminal` 中提供了禁用 save/restore mechanism 的方法

```bash
# The save/restore mechanism as a whole can be disabled by setting an
# environment variable (typically in `${ZDOTDIR:-$HOME}/.zshenv`):
#
#   SHELL_SESSIONS_DISABLE=1
```

### 历史命令

#### 扩大历史命令留存条数

`/etc/zshrc` 中默认配置如下，只需在 `.zshrc` 中覆盖即可

```bash
# Save command history
HISTFILE=${ZDOTDIR:-$HOME}/.zsh_history
HISTSIZE=2000
SAVEHIST=1000
```

#### 更进一步优化

参考了依云的配置：[手动保存/读取 zsh 历史记录 - 依云's Blog](https://blog.lilydjwg.me/2013/7/3/manually-save-read-zsh-history-entries.39852.html)

https://zsh.sourceforge.io/Doc/Release/Options.html#History

```bash
# If a new command line being added to the history list duplicates an older one, the older command is removed from the list (even if it is not the previous event).
setopt HIST_IGNORE_ALL_DUPS
# When writing out the history file, by default zsh uses ad-hoc file locking to avoid known problems with locking on some operating systems. With this option locking is done by means of the system’s fcntl call, where this method is available. On recent operating systems this may provide better performance, in particular avoiding history corruption when files are stored on NFS.
setopt HIST_FCNTL_LOCK
# Remove superfluous blanks from each command line being added to the history list.
setopt HIST_REDUCE_BLANKS
```

#### 解码 `$HISTFILE`

虽然 `$HISTFILE` 是可以直接 `cat` 的，但是实际上 zsh 存的是 metadata，有自定义的编码方式，因此在打印时可以明显看到中文字符被不正确的解码了。

[如何更改zsh历史记录的编码？ - SegmentFault 思否](https://segmentfault.com/q/1010000002517754)

对于这个问题可以使用社区提供的解决方案予以解决：

[Re: Fw: ZSH history file VS. UTF-8 data](https://www.zsh.org/mla/users/2011/msg00154.html)

```bash
vim zsh_history_cat.c
```

```c
#define Meta ((char) 0x83)

#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>

/* from zsh utils.c */
char *unmetafy(char *s, int *len)
{
  char *p, *t;

  for (p = s; *p && *p != Meta; p++);
  for (t = p; (*t = *p++);)
    if (*t++ == Meta)
      t[-1] = *p++ ^ 32;
  if (len)
    *len = t - s;
  return s;
}

int main(int argc, char *argv[]) {
  char *line = NULL;
  size_t size;

  while (getline(&line, &size, stdin) != -1) {
    unmetafy(line, NULL);
    printf("%s", line);
  }

  if (line) free(line);
  return EXIT_SUCCESS;
}
```

```bash
gcc zsh_history_cat.c -o zsh_history_cat
```

```bash
cat $HISTFILE | ./zsh_history_cat
```

### 测试 shell 启动速度

```bash
for i in $(seq 1 10); do /usr/bin/time $SHELL -i -c exit; done
```

from [Lazy-load nvm to Reduce ZSH's Startup Time](https://armno.in.th/blog/zsh-startup-time/)

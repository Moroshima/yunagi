# Moroshima 的奇怪 macOS 命令集

## 功耗监控

```bash
sudo powermetrics -i 1000 | grep Combined\ Power
```

inspired by [【官方双语】苹果你快看一眼啊 - Frore MacBook Air 散热改装 #linus 谈科技](https://www.bilibili.com/video/BV18b4y1L721)

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

| term                 | description                                                                                          | example                                                                                           |
| -------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **formula**          | Homebrew package definition that builds from upstream sources                                        | `/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula/f/foo.rb`                        |
| **cask**             | Homebrew package definition that installs macOS native applications                                  | `/usr/local/Homebrew/Library/Taps/homebrew/homebrew-cask/Casks/b/bar.rb`                          |
| **prefix**           | path in which Homebrew is installed                                                                  | `/usr/local`                                                                                      |
| **keg**              | installation destination directory of a given **formula** version                                    | `/usr/local/Cellar/foo/0.1`                                                                       |
| **rack**             | directory containing one or more versioned **kegs**                                                  | `/usr/local/Cellar/foo`                                                                           |
| **keg-only**         | a **formula** is _keg-only_ if it is not symlinked into Homebrew’s prefix                            | the [`openjdk`](https://github.com/Homebrew/homebrew-core/blob/HEAD/Formula/o/openjdk.rb) formula |
| **opt prefix**       | a symlink to the active version of a **keg**                                                         | `/usr/local/opt/foo`                                                                              |
| **Cellar**           | directory containing one or more named **racks**                                                     | `/usr/local/Cellar`                                                                               |
| **Caskroom**         | directory containing one or more named **casks**                                                     | `/usr/local/Caskroom`                                                                             |
| **external command** | `brew` subcommand defined outside of the Homebrew/brew GitHub repository                             | [`brew alias`](https://github.com/Homebrew/homebrew-aliases)                                      |
| **tap**              | directory (and usually Git repository) of **formulae**, **casks** and/or **external commands**       | `/usr/local/Homebrew/Library/Taps/homebrew/homebrew-core`                                         |
| **bottle**           | pre-built **keg** poured into a **rack** of the **Cellar** instead of building from upstream sources | `qt--6.5.1.ventura.bottle.tar.gz`                                                                 |
| **tab**              | information about a **keg**, e.g. whether it was poured from a **bottle** or built from source       | `/usr/local/Cellar/foo/0.1/INSTALL_RECEIPT.json`                                                  |
| **Brew Bundle**      | an [extension of Homebrew](https://github.com/Homebrew/homebrew-bundle) to describe dependencies     | `brew 'myservice', restart_service: true`                                                         |
| **Brew Services**    | an [extension of Homebrew](https://github.com/Homebrew/homebrew-services) to manage services         | `brew services start myservice`                                                                   |

如果你想看看 Cellar：

```bash
echo $HOMEBREW_CELLAR
```

如果你想看看一个软件包被装在哪里了：

```bash
brew --prefix <formula>
```

### ENVIRONMENT

**仅列出换源所必须的环境变量条目**

> 需要注意的是，即使在完成换源后，Homebrew 也还需要代理才能正常工作（比如从 ghcr.io 拉取 manifests 文件）

https://docs.brew.sh/Manpage#environment

- `HOMEBREW_API_DOMAIN`
  Use this URL as the download mirror for Homebrew JSON API. If metadata files at that URL are temporarily unavailable, the default API domain will be used as a fallback mirror.

  _Default:_ `https://formulae.brew.sh/api`.

- `HOMEBREW_AUTOREMOVE`
  If set, calls to `brew cleanup` and `brew uninstall` will automatically remove unused formula dependents and if `HOMEBREW_NO_INSTALL_CLEANUP` is not set, `brew cleanup` will start running `brew autoremove` periodically.

- `HOMEBREW_BOTTLE_DOMAIN`
  Use this URL as the download mirror for bottles. If bottles at that URL are temporarily unavailable, the default bottle domain will be used as a fallback mirror. For example, `HOMEBREW_BOTTLE_DOMAIN=http://localhost:8080` will cause all bottles to download from the prefix `http://localhost:8080/`. If bottles are not available at `HOMEBREW_BOTTLE_DOMAIN` they will be downloaded from the default bottle domain.

  _Default:_ `https://ghcr.io/v2/homebrew/core`.

- `HOMEBREW_BREW_GIT_REMOTE`
  Use this URL as the Homebrew/brew `git`(1) remote.

  _Default:_ `https://github.com/Homebrew/brew`.

- `HOMEBREW_CORE_GIT_REMOTE`
  Use this URL as the Homebrew/homebrew-core `git`(1) remote.

  _Default:_ `https://github.com/Homebrew/homebrew-core`.

此外如果需要更换 homebrew-service tap 源，需要执行如下命令：

```bash
brew tap --custom-remote --force-auto-update homebrew/services https://mirrors.ustc.edu.cn/homebrew-services.git
```

homebrew-cask-versions tap 源同理，但一般不常使用

更详细的换源配置可参考 [USTC Mirror Help — USTC Mirror Help 文档](https://mirrors.ustc.edu.cn/help/index.html) 或 [homebrew | 镜像站使用帮助 | 清华大学开源软件镜像站 | Tsinghua Open Source Mirror](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/) 相关条目

### Recommanded Packages

| Name                    | Description                                                               | Note |
| ----------------------- | ------------------------------------------------------------------------- | ---- |
| b2sum                   |                                                                           |      |
| bottom                  | Yet another cross-platform graphical process/system monitor               |      |
| deno                    |                                                                           |      |
| emacs                   |                                                                           |      |
| fastfetch               |                                                                           |      |
| ffmpeg                  |                                                                           |      |
| git                     |                                                                           |      |
| gnupg                   |                                                                           |      |
| htop                    |                                                                           |      |
| hwloc                   | Portable abstraction of the hierarchical topology of modern architectures |      |
| iproute2mac             | CLI wrapper for basic network utilities on macOS - ip command             |      |
| lua                     |                                                                           |      |
| lz4                     | Extremely Fast Compression algorithm                                      |      |
| nvm                     |                                                                           |      |
| perl                    |                                                                           |      |
| pnpm                    |                                                                           |      |
| pstree                  | Show ps output as a tree                                                  |      |
| qemu                    |                                                                           |      |
| ripgrep                 | Search tool like grep and The Silver Searcher                             |      |
| ruby                    |                                                                           |      |
| smartmontools           |                                                                           |      |
| starship                |                                                                           |      |
| stow                    |                                                                           |      |
| stress                  |                                                                           |      |
| tmux                    |                                                                           |      |
| tree                    |                                                                           |      |
| uptimed                 |                                                                           |      |
| wget                    |                                                                           |      |
| woff2                   | Utilities to create and convert Web Open Font File (WOFF) files           |      |
| yarn                    |                                                                           |      |
| zsh-autosuggestions     | Fish-like fast/unobtrusive autosuggestions for zsh                        |      |
| zsh-completions         |                                                                           |      |
| zsh-syntax-highlighting | Fish shell like syntax highlighting for zsh                               |      |
| zstd                    | Zstandard is a real-time compression algorithm                            |      |

#### One-click Installation

```bash
brew install b2sum bottom deno emacs fastfetch ffmpeg git gnupg htop hwloc iproute2mac lua lz4 nvm perl pnpm pstree qemu ripgrep ruby smartmontools starship stow stress tmux tree uptimed wget woff2 yarn zsh-autosuggestions zsh-completions zsh-syntax-highlighting zstd
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

### macOS

https://support.apple.com/zh-cn/HT201236

- **Option-Shift-Command-V**：粘贴并匹配样式：将周围内容的样式应用到粘贴在该内容中的项目。

### Visual Studio Code

You can toggle word wrap for the VS Code session with **Option+Z (Windows, Linux Alt+Z)**.

https://code.visualstudio.com/docs/editor/codebasics#_how-do-i-turn-on-word-wrap

## 浏览器禁用双指左右前进后退

[Left Swipe/Previous Page - Can I disable? | I-Firefox Isithangami Sokweseka | Ukwesekwa kwe-Mozilla](https://support.mozilla.org/zu/questions/1359934)

将 `browser.gesture.swipe.left` 更改为 `cmd_scrollLeft`，将 `browser.gesture.swipe.right` 更改为 `cmd_scrollRight`

![image-20231224215844389](./assets/image-20231224215844389.png)

## 架构

```bash
arch
```

## 文件操作

### 查看文件创建时间与修改时间（精确到秒）

```bash
GetFileInfo <filename>
```

### 检查目录空间占用

让我看看！（大声）

### 查看 Mach-O 文件信息

Mach-O is the executable file format of mach based systems, including macOS.

```bash
otool
```

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

[如何更改 zsh 历史记录的编码？ - SegmentFault 思否](https://segmentfault.com/q/1010000002517754)

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

## 时间机器

### 启用

[使用“时间机器”进行备份 - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/104984)

### 关闭

> 考虑到“时间机器”备份会保留 24 小时内的本地快照，过于占用硬盘空间，因此个人选择关闭，以必要时外接硬盘手动备份取代之。

“启动台”>“系统设置”>“通用”，然后点按“时间机器”，移除所有备份磁盘即可关闭“时间机器”备份功能。但这并不能释放本地快照所占用的空间。如果想要删除本地快照（snapshots），需要打开“磁盘工具”，在展开菜单中选中“Data”卷后点按“显示”>“显示 APFS 快照”，之后便可以浏览与删除本地快照。此外还可以通过命令行工具 `tmutil` 管理时间机器相关功能。

> APFS 是一个 CoW 文件系统，因此可以通过快照方式增量存储文件更改，即 snapshots。

### tmutil

> 以下命令均基于 `tmutil version 4.0.0 (built Dec 20 2023)`

最新的 `tmutil` 抛弃了 `tmutil help` 命令来查看帮助，因此直接输入 `tmutil` 即可。

```bash
tmutil
```

#### 查看当前 tmutil 版本

```bash
tmutil version
```

#### 查看“时间机器”状态

```bash
tmutil status
```

若输出结果如下则说明“时间机器”备份功能已经被正确关闭

```text
Backup session status:
{
    ClientID = "com.apple.backupd";
    Percent = "-1";
    Running = 0;
}
```

#### 打一份本地快照

```bash
tmutil localsnapshot
```

#### 列出所有备份

```bash
tmutil listbackups
```

#### 查看最近的备份

```bash
tmutil latestbackup
```

#### 列出所有本地快照

```bash
tmutil listlocalsnapshots /
```

#### 删除本地快照

```bash
tmutil deletelocalsnapshots [<mount_point> | <snapshot_date>]
```

下面的命令可以一键删除系统盘中的所有本地快照，释放硬盘空间

```bash
tmutil deletelocalsnapshots /
```

## 无法弹出外接硬盘

首先使用 `df -h` 命令查看外接硬盘挂载点，在确定硬盘挂载点后直接使用 `diskutil umount <mount_point>` 命令尝试推出，如果无法弹出，`diskutil` 会给出具体占用该硬盘的进程 pid 及进程名称，在 `pkill` 相关进程后再次尝试 `umount` 即可推出硬盘，需要注意的是杀死进程前需要确认不是重要的系统进程，以防不小心杀死了 WindowServer 进程导致当前会话登出之类的情况出现。

## nvm

### 更新 Node.js

安装最新 LTS 版本

```bash
nvm install --lts
```

移除旧版本

```bash
nvm uninstall <version>
```

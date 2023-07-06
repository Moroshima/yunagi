# Debian GNU/Linux sid 折腾指北

[zh_CN/DebianUnstable - Debian Wiki](https://wiki.debian.org/zh_CN/DebianUnstable) 网页可以解答你关于 Debian sid 的一切疑问，我强烈建议您在决定安装并使用 Debian sid 前先通读该页面的全部内容，我也就不再费力不讨好的去花费篇幅解释与阐明 Debian sid 相关的概念了。

## 安装途径

按照官方在 [zh_CN/InstallFAQ - Debian Wiki](https://wiki.debian.org/zh_CN/InstallFAQ) 中所给出的解释，Debian sid 最为推荐的安装途径是在通过下载 testing 版本镜像并完成安装后修改 `/etc/apt/sources.list` 以换源更新升级到 sid 版本。**更好的选择则是使用 Stable 版本镜像安装，然后依照前述方法升级到测试版或不稳定版。**

## 制作安装盘

制作安装盘的第一步便是下载镜像，这一步可以依照个人偏好选择下载完整镜像文件或网络安装镜像（netinst）。我个人建议是使用网络安装镜像，这样可以保证你所安装的软件版本是为最新的，就避免了在完成了系统安装后还需要再手动升级一遍系统软件版本的麻烦。此外，从例如 [USTC Mirror](https://mirrors.ustc.edu.cn/) 等下载速度较快的国内镜像站获取安装镜像也是个不错的选择。

> USTC open source software mirror 似乎没有在首页的获取发行版映像中提供 netinst 版本镜像的下载，但是我们可以在 `debian-cd` 源中直接找到对应镜像文件：[Index of /debian-cd/current/amd64/iso-cd/](https://mirrors.ustc.edu.cn/debian-cd/current/amd64/iso-cd/)

### 非自由固件

一般而言，直接将安装盘插入电脑然后引导进入安装流程就行了。但是你如果使用的是笔记本等设备，且没有接入有线网络的条件（或接入有线网络不太方便），你可能需要一些无线网卡驱动。 Debian 12 镜像中已经包含绝大多数硬件的非自由驱动了（non-free-firmware），因此你无需进行任何额外操作，但是你如果使用的是 Debian 11 或更旧的 Debian 版本（你既然在看这篇文章，想必使用的 Debian 版本也不会旧于 bullseye 吧？），你需要从 [Index of /cdimage/firmware (debian.org)](https://cdimage.debian.org/cdimage/firmware/) 下载对应 Debian 版本的固件压缩包并将其内容物解压到安装盘的根目录下的 firmware 文件夹中。做完这一切你就可以开始祈祷你的硬件不是太新，希冀你的硬件在当前版本能够得到内核与固件的支持并插入安装U盘，按下电脑开机键引导进入安装程序了。

## debian-security 源

在安装 Debian 的过程中，只需按照引导一路向下即可，但是你如果使用的是网络安装镜像，在你选择完安装源并完成软件流行度调查选择后的安装流程可能会卡住，有几个包拉取速度极慢，且有很大概率会直接超时报错。这是因为 Debian 在换源时并不会更换 debian-security 源。至于 Debian 在换源时不更换安全源的原因则是 Debian 并无官方认可的镜像，因为 Debian 的安全团队认为“security.debian.org 的宗旨是使安全更新尽可能快且容易地获得。鼓励使用非官方的镜像会增添通常来说没有必要的额外复杂性，而且如果这些镜像没有及时更新的话会导致各种问题。”（参见 [Debian -- Debian 安全 FAQ](https://www.debian.org/security/faq#mirror)，你关于 debian-security 的许多疑问也能在其中得到解答）

对于此问题可以在安装程序完成 apt 换源配置后显示软件流行度调查选择界面时切换 tty 直接修改 `/etc/apt/sources.list` 中对应源配置来解决，详细配置过程可参考 [Debian系(包括Kali)安装时无法换源的问题(可能表现为：“安装步骤失败：选择并安装软件”)的解决_debian无法安全的使用该源_PtrApr的博客-CSDN博客](https://blog.csdn.net/Liangshengabc/article/details/104981585)。

> 目前这篇博文被设置为了仅 VIP 可见（咬牙切齿），因此此处我将其核心内容摘录如下：
>
> 在软件包流行度调查界面先不继续下一步安装，按下 CTRL+ALT+F2 组合键切换 tty 后按下 Enter 键，在命令提示符后输入 `chroot /target` 更改根目录，然后输入 `nano /etc/apt/sources.list` 并回车，编辑源配置文件，将其中的 `debian-security` 源替换为 `deb http://mirrors.ustc.edu.cn/debian-security/` 或其他国内 debian-security 镜像源，然后按下 CTRL+O 组合键保存，按下 CTRL+X 组合键退出文本编辑器，最后输入 `exit` 退出 chroot 环境，按下 CTRL+ALT+F6 组合键切换回安装程序界面，在选择是否参与软件包流行度调查后继续安装即可。

## 更换 sid 源并更新到 sid

> 换源更新前记得确保当前系统的所有软件均是最新版本以避免出现未知的问题

> 同时需要注意的是从 debian bookworm 开始，自由固件已经从 non-free 自由软件组件中被分离了出来，因此如果你使用的是 debian bookworm 或更高版本，如果你想使用非自由固件，你需要将 `/etc/apt/sources.list` 中的 `non-free` 字段替换为 `non-free-firmware`。当然，其他非自由软件依然被包含在 `non-free` 组件中，你也可以按需添加。

这一步很简单，只需要编辑下 `/etc/apt/sources.list` ，将其中的

```text
deb http://mirrors.ustc.edu.cn/debian stable main contrib non-free
# deb http://deb.debian.org/debian stable main contrib non-free
```

或

```text
deb http://mirrors.ustc.edu.cn/debian testing main non-free-firmware
# deb http://deb.debian.org/debian testing main non-free-firmware
```

之类内容的 `stable` 或 `testing` 字段替换为 `sid` 即可：

```text
deb https://mirrors.ustc.edu.cn/debian/ sid main contrib non-free non-free-firmware
# deb-src https://mirrors.ustc.edu.cn/debian/ sid main contrib non-free non-free-firmware
# deb https://deb.debian.org/debian/ sid main non-free-firmware
# deb-src https://deb.debian.org/debian/ sid main non-free-firmware
```

同时因为 sid 的包版本非常新，没有 `*-security` 与 `*-updates` 、 `*-backports` ，因此直接在配置文件中将其通通注释掉即可（deb-src 源也可注释以加快源数据拉取速度）

完成换源后清理下 apt 缓存更新下系统

```bash
sudo apt clean
sudo apt update
sudo apt upgrade
```

铛铛，更新完并重启设备后你的设备便运行着最新的 Debian sid 咯！

只是我们还需要做一些善后清理的工作以移除一些不在被需要的旧包。

## 清理

> 清理过程参照 [DebianUpgrade - Debian Wiki](https://wiki.debian.org/DebianUpgrade)

### dist-upgrade

dist-upgrade 旨在解决系统大版本更新导致的依赖问题：

```bash
sudo apt full-upgrade
```

### autoremove

使用 apt autoremove 清理系统中存在的不被依赖的自动安装的包

```bash
sudo apt autoremove
```

## 我究竟该不该使用 Debian sid？

就我个人的体验来看，虽然是 unstable 版本，但是 Debian sid 并不 unstable，日常使用还是较为稳定的。个人看来其与 Arch Linux 等发行版的激进程度排序差不多为
$$
Arch\ Linux \gtrapprox Fedora\ Linux > Debian(sid) > Ubuntu \gg Debian(stable)
$$
只能说 Debian sid 相比 Arch 与 Fedora 的激进还是稍逊一筹的，Arch 这种滚动发行版自不用说，Fedora 在被 Linus 批评过内核版本跟进不及时后内核版本更新的激进程度甚至偶尔会超过 Arch Linux 这种正统的滚动发行版。当然也不排除是因为我体验 Debian sid 正赶上了 bookworm testing 版本的 freeze，导致 Debian sid 相较之下略不激进。毕竟在 QA 里 Debian 可是这样警告用户的：“如果你觉得你可以处理损坏的 Debian 系统的话，当然可以（在你的桌面机器上使用 sid）。你知道在 libpam0g 破损、阻止所有用户登陆的情况下该怎么做吗？你知道在 grub 破损导致引导过程卡死的情况下该怎么做吗？这些事情都发生过。它们可能会再次发生。”

## 参考

- [如何切换到独特的滚动发行版——Debian sid - 无妄当自持 (insidentally.com)](https://www.insidentally.com/articles/000027/)

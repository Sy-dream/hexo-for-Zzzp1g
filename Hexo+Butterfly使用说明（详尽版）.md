# Hexo + Butterfly 使用说明（详尽版）

这份说明是给第一次接触 Hexo 的人准备的。

你不需要先理解“静态博客”“前端框架”这些概念，只要先照着做，就可以把博客跑起来。

---

## 1. 先理解这套博客是什么

这个仓库不是一个“点一下就直接上线的网站后台”，而是一套博客源码。

你平时真正会接触到的东西主要有 3 个：

- `文章文件`
  你写的每一篇博客，本质上都是一个 `.md` 文件
- `配置文件`
  这里决定博客名字、头像、链接、评论系统、菜单等
- `命令`
  你需要在终端里输入几条命令，让博客生成网页

简单理解：

- 你写 Markdown 文章
- Hexo 把文章变成网页
- Butterfly 负责网页的样式和布局

---

## 2. 你需要先安装什么

在开始之前，电脑里至少要有下面两个软件：

### 2.1 Node.js

Hexo 依赖 Node.js 才能运行。

安装方法：

1. 打开 Node.js 官网：`https://nodejs.org/`
2. 下载 `LTS` 版本
3. 一路下一步安装

安装完成后，打开 PowerShell，输入：

```powershell
node -v
npm -v
```

如果都能显示版本号，就说明安装成功。

### 2.2 Git

Git 用来把这个模板仓库 `clone` 到本地，也方便以后同步更新。

安装方法：

1. 打开 Git 官网：`https://git-scm.com/`
2. 下载 Windows 版本
3. 一路下一步安装

安装完成后，在 PowerShell 输入：

```powershell
git --version
```

能显示版本号就可以。

---

## 3. 第一次把博客跑起来

假设你已经从 GitHub 上拿到了模板仓库地址，例如：

```text
https://github.com/yourname/hexo-blog-template.git
```

### 3.1 选择一个存放博客的文件夹

例如你可以在 `D:\blog` 或 `F:\blog` 这种自己容易找到的位置。

不建议放到桌面、微信下载目录、系统盘深层目录里。

### 3.2 克隆仓库

打开 PowerShell，进入你想存放博客的地方：

```powershell
cd D:\
```

然后执行：

```powershell
git clone https://github.com/yourname/hexo-blog-template.git
```

克隆完成后进入项目目录：

```powershell
cd .\hexo-blog-template
```

### 3.3 安装依赖

第一次必须执行：

```powershell
npm install
```

这一步会安装博客运行所需要的依赖包。

如果时间比较久，属于正常情况。

### 3.4 本地预览博客

依次执行：

```powershell
npx hexo clean
npx hexo generate
npx hexo server
```

然后在浏览器打开：

```text
http://localhost:4000
```

如果页面能打开，就说明博客已经能正常运行。

---

## 4. 以后最常用的 4 条命令

这 4 条是日常最常用的。

### 4.1 启动本地预览

```powershell
npx hexo server
```

作用：

- 在本地打开一个博客预览页面
- 网址通常是 `http://localhost:4000`

### 4.2 重新生成网页

```powershell
npx hexo generate
```

作用：

- 把 Markdown 文件重新生成成静态网页

### 4.3 清理缓存

```powershell
npx hexo clean
```

作用：

- 删除缓存和旧的生成结果
- 如果页面显示不正常，经常先运行这条

### 4.4 部署到线上

```powershell
npx hexo deploy
```

作用：

- 把生成后的网页发布到你配置好的仓库

最稳妥的习惯是：

```powershell
npx hexo clean
npx hexo generate
npx hexo deploy
```

---

## 5. 这个项目里哪些文件最重要

### 5.1 `_config.yml`

这是 Hexo 主配置文件。

你最常改的是：

- `title`：网站标题
- `description`：网站简介
- `keywords`：关键词
- `author`：作者名
- `url`：博客网址
- `deploy.repository`：部署仓库地址

### 5.2 `_config.butterfly.yml`

这是 Butterfly 主题配置文件。

你最常改的是：

- `social`
- 首页 `subtitle`
- 侧边栏作者简介
- 公告内容
- 评论系统

### 5.3 `source/_posts/`

这里放博客文章。

每篇文章都是一个 Markdown 文件。

### 5.4 `source/about/index.md`

这是 About 页面。

### 5.5 `source/_data/link.yml`

这里管理友链或推荐链接卡片。

### 5.6 `source/css/site-polish.css`

这里是额外样式。

如果以后想继续微调颜色、圆角、阴影、按钮感，可以改这个文件。

---

## 6. 第一次必须改的配置

### 6.1 修改站点名称和作者

打开 `_config.yml`，把下面这些占位内容改成你自己的：

```yml
title: Your Blog Name
description: Write a short description for your blog here.
keywords: "Hexo,Butterfly,Blog"
author: Your Name
url: https://your-domain.example
```

例如：

```yml
title: 小满的花园
description: 记录日常、读书、照片和碎碎念
keywords: "日常,读书,电影,生活"
author: 小满
url: https://yourname.github.io
```

### 6.2 修改社交链接

打开 `_config.butterfly.yml`，找到：

```yml
social:
  fab fa-github: https://github.com/yourname || Github || '#24292e'
  fas fa-envelope: mailto:you@example.com || Email || '#4a7dbe'
```

改成你自己的 GitHub 和邮箱。

如果暂时不想显示邮箱，可以把邮箱这一行删掉。

### 6.3 修改首页副标题

在 `_config.butterfly.yml` 里找到：

```yml
subtitle:
  sub:
    - A soft corner for notes, photos, and little discoveries
```

改成你喜欢的话，例如：

```yml
subtitle:
  sub:
    - 记录生活里温柔又闪光的小事
```

### 6.4 修改侧边栏简介

在 `_config.butterfly.yml` 找到：

```yml
card_author:
  description: A soft and personal blog built with Hexo and Butterfly
```

改成你自己的介绍。

例如：

```yml
card_author:
  description: 分享日常、电影、随笔和偶尔的奇思妙想
```

### 6.5 修改公告

找到：

```yml
card_announcement:
  content: Share your notes, photos, favorites, and everyday discoveries here
```

改成一句更像“站内公告”的短句。

例如：

```yml
card_announcement:
  content: 欢迎来到我的小角落，这里记录最近喜欢的一切
```

---

## 7. 如何写第一篇文章

### 7.1 用命令新建文章

在项目根目录打开 PowerShell，输入：

```powershell
npx hexo new "我的第一篇文章"
```

运行后，Hexo 会在 `source/_posts/` 下生成一个新的 `.md` 文件。

### 7.2 文章文件长什么样

Hexo 文章开头通常有一段 `front-matter`，也就是文章头部配置，例如：

```md
---
title: 我的第一篇文章
date: 2026-05-12 20:00:00
tags:
  - 日常
  - 随笔
categories:
  - 生活
cover: /img/1.jpg
description: 这是文章的简短介绍
---

正文从这里开始写。
```

### 7.3 每个字段是什么意思

- `title`：文章标题
- `date`：发布时间
- `tags`：标签
- `categories`：分类
- `cover`：封面图
- `description`：文章摘要

### 7.4 最简单的正文写法

```md
# 一级标题

这是第一段文字。

## 二级标题

- 列表 1
- 列表 2

**这是加粗**

`这是行内代码`
```

---

## 8. 如何新建独立页面

如果你想新建一个“不是文章”的页面，比如：

- 相册
- 留言板
- 书单
- 旅行页

可以执行：

```powershell
npx hexo new page "photobook"
```

然后会生成：

```text
source\photobook\index.md
```

以后访问路径一般就是：

```text
/photobook/
```

如果想把这个页面加入顶部菜单，还要去 `_config.butterfly.yml` 的 `menu:` 部分添加对应链接。

---

## 9. 如何插入图片

### 9.1 最简单的方法

把图片放到：

```text
source/img/
```

例如你放了一张：

```text
source/img/cat.jpg
```

那么在文章里这样写：

```md
![猫猫](/img/cat.jpg)
```

### 9.2 文章配图建议

如果是某篇文章专属图片，建议按文章建子目录，例如：

```text
source/img/posts/my-first-post/1.jpg
source/img/posts/my-first-post/2.jpg
```

文章里写：

```md
![配图1](/img/posts/my-first-post/1.jpg)
```

这样以后管理不会乱。

---

## 10. 如何修改头像、图标和背景

### 10.1 修改头像

在 `_config.butterfly.yml` 里找到：

```yml
avatar:
  img: /img/site-avatar.jpg
```

你只需要把自己的头像图片替换成同名文件，或者改成新的路径都可以。

### 10.2 修改浏览器标签图标

找到：

```yml
favicon: /img/site-avatar-icon.png
```

换成你自己的图标路径。

### 10.3 修改顶部图和背景图

在 `_config.butterfly.yml` 中常见相关字段有：

- `default_top_img`
- `index_img`
- `background`
- `cover.default_cover`

这些字段控制首页头图、文章封面随机图、全局背景图等。

如果你不想要很多随机图，可以只保留几张自己真正喜欢的图。

---

## 11. 如何修改 About 页面

打开：

```text
source/about/index.md
```

直接修改里面的文字即可。

这里通常可以写：

- 你是谁
- 你想记录什么
- 你的兴趣
- 你的联系方式

如果只是想简单一点，写 3 到 5 行就够。

---

## 12. 如何修改友链页

这个模板里友链数据在：

```text
source/_data/link.yml
```

每个链接大致长这样：

```yml
- name: 朋友的网站
  link: https://example.com
  avatar: https://example.com/avatar.png
  descr: 一句简介
```

你只要照着添加、删掉、改文字就可以。

如果不想做友链页，也可以保留推荐链接，或者干脆把这个页面从菜单里删掉。

---

## 13. 如何修改顶部菜单

打开 `_config.butterfly.yml`，找到 `menu:`。

格式大概是：

```yml
menu:
  Home: / || fas fa-home
  Archives: /archives/ || fas fa-archive
  About: /about/ || fas fa-heart
```

含义是：

- 左边是显示名称
- 中间是页面路径
- 右边是图标

如果你不想显示某个页面，直接删掉那一行即可。

---

## 14. 如何开启评论系统

模板里默认是关闭评论的，这对新手更稳。

如果以后想开评论，推荐用 `Giscus`。

### 14.1 为什么推荐 Giscus

因为它基于 GitHub Discussions：

- 免费
- 和 GitHub 绑定
- 不需要自己搭服务器

### 14.2 需要改哪里

在 `_config.butterfly.yml` 里，把：

```yml
comments:
  use:
```

改成：

```yml
comments:
  use: Giscus
```

然后补齐：

```yml
giscus:
  repo:
  repo_id:
  category_id:
```

这些值需要你去 Giscus 官方页面生成。

如果你暂时不确定，就先别开评论，完全没问题。

---

## 15. 如何部署到 GitHub Pages

这是最常见的发布方式。

### 15.1 先创建一个 GitHub 仓库

如果你的 GitHub 用户名是 `yourname`，推荐新建仓库：

```text
yourname.github.io
```

### 15.2 修改 `_config.yml`

例如：

```yml
url: https://yourname.github.io

deploy:
  type: git
  repository: git@github.com:yourname/yourname.github.io.git
  branch: main
```

### 15.3 执行部署命令

```powershell
npx hexo clean
npx hexo generate
npx hexo deploy
```

部署成功后，等几分钟，再访问：

```text
https://yourname.github.io
```

---

## 16. 日常更新博客的标准流程

以后每次写新文章，基本就是这个流程：

### 16.1 打开项目目录

```powershell
cd D:\hexo-blog-template
```

### 16.2 启动本地预览

```powershell
npx hexo server
```

### 16.3 新建文章或修改已有文章

比如：

```powershell
npx hexo new "今天看完的一部电影"
```

### 16.4 浏览器查看效果

打开：

```text
http://localhost:4000
```

### 16.5 确认无误后部署

```powershell
npx hexo clean
npx hexo generate
npx hexo deploy
```

---

## 17. 常见报错和处理方法

### 17.1 `npm` 不是内部或外部命令

原因：

- Node.js 没装好
- 装完后没有重开终端

处理：

1. 重新安装 Node.js
2. 安装完成后关闭 PowerShell 再重新打开
3. 再执行 `node -v` 和 `npm -v`

### 17.2 `git` 不是内部或外部命令

原因：

- Git 没装好

处理：

1. 重新安装 Git
2. 重开终端
3. 输入 `git --version`

### 17.3 `Cannot find module` 或缺少依赖

原因：

- 依赖没有安装完整

处理：

```powershell
npm install
```

如果还不行，再执行：

```powershell
npx hexo clean
npm install
```

### 17.4 页面显示怪异或文章没更新

先执行：

```powershell
npx hexo clean
npx hexo generate
npx hexo server
```

很多问题都能通过清缓存解决。

### 17.5 YAML 报错

例如提示：

```text
YAMLException
```

通常是因为你改配置时格式写错了。

最常见原因：

- 冒号后面少了空格
- 缩进不一致
- 引号没闭合

例如正确写法：

```yml
title: 我的博客
```

错误写法：

```yml
title:我的博客
```

### 17.6 部署失败

先检查：

- GitHub 仓库地址有没有写错
- SSH Key 有没有配好
- 仓库名是不是和配置一致

如果只是先本地预览，不部署也完全可以。

---

## 18. 建议的文件管理习惯

为了避免以后越来越乱，建议你保持下面这些习惯：

### 18.1 图片按主题分文件夹

不要把所有图片都堆在 `source/img/` 根目录。

建议：

```text
source/img/posts/电影随笔/
source/img/posts/旅游记录/
source/img/posts/日常拍照/
```

### 18.2 文章标题尽量简洁

文件名不要太夸张、太长、太多特殊符号。

### 18.3 改配置前先备份

尤其是 `_config.yml` 和 `_config.butterfly.yml`。

### 18.4 每次大改后先本地看一遍

不要改完直接部署。

先本地预览，再上线。

---

## 19. 建议的新手使用节奏

如果你对电脑不太熟，建议按这个顺序熟悉：

### 第一阶段

- 学会 `git clone`
- 学会 `npm install`
- 学会 `npx hexo server`
- 能本地打开博客

### 第二阶段

- 会改站点标题
- 会改 About 页面
- 会写一篇新文章
- 会插图片

### 第三阶段

- 会改菜单
- 会改友链
- 会部署到 GitHub Pages

### 第四阶段

- 再去折腾评论、域名、自定义样式

这个顺序会稳很多。

---

## 20. 你真的只需要记住的最小操作集

如果你觉得上面内容太多，先记住下面这几个：

### 第一步：进目录

```powershell
cd D:\hexo-blog-template
```

### 第二步：开本地预览

```powershell
npx hexo server
```

### 第三步：新建文章

```powershell
npx hexo new "文章标题"
```

### 第四步：文章位置

```text
source/_posts/
```

### 第五步：部署

```powershell
npx hexo clean
npx hexo generate
npx hexo deploy
```

只要先会这几步，就已经能正常写博客了。

---

## 21. 参考资料

官方文档建议优先看这几个：

- Hexo Commands: `https://hexo.io/docs/commands`
- Hexo Writing: `https://hexo.io/docs/writing`
- Hexo Front-matter: `https://hexo.io/docs/front-matter`
- Butterfly Docs: `https://butterfly.js.org/`

---

## 22. 最后给新手的一条建议

不要一开始就想着把博客做得特别复杂。

先做到下面这件事就够了：

- 能本地打开
- 能写文章
- 能改标题和 About
- 能部署上线

等这些熟练以后，再慢慢改评论、配色、域名、友链、页面设计。

这才是最不容易把自己弄乱的路线。

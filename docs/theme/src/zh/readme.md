---
home: true
title: 主页
icon: home
heroImage: /logo.svg
heroText: vuepress-theme-hope
tagline: 一个具有强大功能的 vuepress 主题✨
action:
  - text: 快速上手 💡
    link: /zh/guide/
    type: primary

  - text: 配置 🛠
    link: /zh/config/

features:
  - title: Markdown 增强 🧰
    details: 新增文字对齐、上下角标、脚注、标记、数学公式、流程图与幻灯片支持
    link: /zh/guide/markdown/

  - title: 浏览量与评论 💬
    details: 配合 Valine 与 Vssue 来开启阅读量统计与评论支持
    link: /zh/guide/feature/comment/

  - title: 文章信息展示 ℹ
    details: 为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息
    link: /zh/guide/feature/page-info/

  - title: 博客支持 📝
    details: 为你的文章添加日期、标签和分类，即可自动生成文章、分类、标签与时间轴列表
    link: /zh/guide/blog/intro/

  - title: 文章加密 🔐
    details: 你可以为你的特定页面或特定目录进行加密，以便陌生人不能随意访问它们
    link: /zh/guide/feature/encrypt/

  - title: 主题色切换 🎨
    details: 支持自定义主题色并允许用户在预设的主题颜色之间切换
    link: /zh/guide/interface/theme-color/

  - title: 深色模式 🌙
    details: 可以自由切换浅色模式与深色模式
    link: /zh/guide/interface/darkmode/

  - title: SEO 增强 ⚒
    details: 将最终生成的网页针对搜索引擎进行优化。
    link: /zh/guide/feature/seo/

  - title: Sitemap 🗺
    details: 自动为你的网站生成 Sitemap
    link: /zh/guide/feature/sitemap/

  - title: Feed 支持 📡
    details: 你可以生成你的 Feed，并通知你的用户订阅它。
    link: /zh/guide/feature/feed/

  - title: PWA 支持 📲
    details: 内置的 PWA 插件会让你的网站更像一个 APP。
    link: /zh/guide/feature/pwa/

  - title: TS 支持 🔧
    details: 为你的 VuePress 开启 TypeScript 支持
    link: /zh/guide/feature/typescript/

  - title: 更多新特性 ✨
    details: 包括博客主页、图标支持、路径导航、页脚支持、全屏按钮、返回顶部按钮等
    link: /zh/guide/feature/

footer: MIT Licensed | Copyright © 2019-present Mr.Hope
copyrightText: false
---

你可以直接使用 [vuepress-theme-hope 模板](https://github.com/vuepress-theme-hope/vuepress-theme-hope-template) 来开始你的 VuePress 之旅。

## 🛠 安装

<CodeGroup>
<CodeGroupItem title="yarn">
```bash
yarn add -D vuepress-theme-hope
```
</CodeGroupItem>

<CodeGroupItem title="npm">
```bash
npm i -D vuepress-theme-hope
```
</CodeGroupItem>
</CodeGroup>

## 🚀 使用

```js
// .vuepress/config.js
const { config } = require("vuepress-theme-hope");

module.exports = config({
  // your config here
});
```

::: tip

引入 `config` 函数的作用是在你编辑配置的时候，通过 TS 的 Interface 以及 JSDoc，很方便的给你提示。

同时，`config` 函数也会为你补全一些直接交付给 VuePress 的默认配置。

你可以查看 [本文档配置][docs-config] 作为一个配置参考。

:::

## 官方 QQ 群

- [点击加入](https://jq.qq.com/?_wv=1027&k=rATJyxGK) (群号: 1003437555)

[docs-config]: https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/v1/docs/theme/src/.vuepress/config.js

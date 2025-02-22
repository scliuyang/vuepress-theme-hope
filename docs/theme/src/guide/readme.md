---
title: Guide
icon: creative
category: guide
tags:
  - intro
---

::: tip

If you met a bug while using, you can open an issue [here](https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues)

:::

## ✨Theme Features

The theme maintains the style of the `@vuepress/theme-default`, and adds a lot of features and optimizations:

<!-- more -->

### Layout

- [Default homepage optimization](layout/home.md)

  - Features have new animations and support jump
  - Multiple action buttons
  - Widescreen layout optimization

- Optimization of other built-in components

  - Add `prefix` and `icon` for [Navbar](layout/navbar.md) [Sidebar](layout/sidebar.md)

- Add:

  - [Path navigation](layout/page.md#breadcrumb)

  - [Custom footer](layout/page.md#footer-support)

### Markdown Enhance

Added more syntax to Markdown, enriching documentation and blog writing

- [Badge `<Badge />`](feature/component.md#badge-mybadge): Added color support
- [CodeGroup `<CodeGroup />`](markdown/components.md#codegroup-codegroupitem)
- [Tex Support](markdown/tex.md)
- [Custom alignment](markdown/align.md)
- [Flow chart](markdown/flowchart.md)
- [Mark](markdown/mark.md)
- [Subsript and Supercript](markdown/sup-sub.md)
- [Code demo](markdown/demo.md)
- [Presentation](markdown/presentation.md)

## Interface

- [Theme colors](interface/theme-color.md), allowing you to switch dynamically during browsing

- [Dark mode](interface/darkmode.md), allowing you to switch manually or apply automatically according to device settings

- [Icon support](interface/icon.md)

- [Full Screen Button](interface/others.md#fullscreen-button)

- [Back to top button](interface/others.md#back-to-top-button)

### Page Enhance

- [One-click copy code](feature/copy-code.md)

- [Picture preview feature](feature/photo-swipe.md), supports zooming, dragging, sliding browsing, sharing and downloading

- [Copyright info](feature/copyright.md)

- [Comment System](feature/comment.md)

- [Article info](feature/page-info.md)

  - Reading Counts
  - Author and writing date
  - Automatically generated word count and estimated reading time
  - Tags and Categorys

- [Encryption of specific articles and paths](feature/encrypt.md)

### Features

- [PWA support](feature/pwa.md)

- [Feed generation](feature/feed.md)

- [SEO enhancement](feature/seo.md)

- [Sitemap generation](feature/sitemap.md)

- [TypeScript support](feature/typescript.md)

### Blog

- [Social follow button and page social sharing][add-this]

- [Article display](blog/intro.md)

- [New blog homepage layout](blog/home.md)

- [Articles list swith sticky support](blog/intro.md#article)

- [Cateory lists](blog/intro.md#category)

- [Tag lists](blog/intro.md#tags)

- [Timeline](blog/intro.md#timeline)

## 🧩Build-in Plugins

The theme also includes the following plugins, you can use them in other themes or directly.

- [@mr-hope/vuepress-plugin-comment][comment]: Comment and page info feature

- [@mr-hope/vuepress-plugin-component](feature/component.md): Provide some out of box plugins

- [@mr-hope/vuepress-plugin-copy-code][copy-code]: Provide copy button for code blocks

- [@mr-hope/vuepress-plugin-feed][feed]: Feed support

- [@mr-hope/vuepress-plugin-last-update][last-update]: Last update time

- [@mr-hope/vuepress-plugin-pwa][pwa]: PWA support

- [@mr-hope/vuepress-plugin-reading-time][reading-time]: Expect reading time and words count

- [@mr-hope/vuepress-plugin-seo][seo]: SEO Enhancement Plugin

- [@mr-hope/vuepress-plugin-sitemap][sitemap]: Sitemap Generator for your site

- [vuepress-plugin-add-this][add-this]: Provide sociel share and follow function

- [vuepress-plugin-md-enhance][md-enhance]): Provide more Markdown syntax

- [vuepress-plugin-photo-swipe][photo-swipe]: Make the site’s picture support click zoom

[add-this]: https://vuepress-theme-hope.github.io/add-this/
[comment]: https://vuepress-theme-hope.github.io/comment/
[copy-code]: https://vuepress-theme-hope.github.io/copy-code/
[feed]: https://vuepress-theme-hope.github.io/feed/
[last-update]: https://vuepress-theme-hope.github.io/last-update/
[md-enhance]: https://vuepress-theme-hope.github.io/md-enhance/
[photo-swipe]: https://vuepress-theme-hope.github.io/photo-swipe/
[pwa]: https://vuepress-theme-hope.github.io/pwa/
[reading-time]: https://vuepress-theme-hope.github.io/reading-time/
[seo]: https://vuepress-theme-hope.github.io/seo/
[sitemap]: https://vuepress-theme-hope.github.io/sitemap/

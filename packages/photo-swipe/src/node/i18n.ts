import type { LangPaths } from "@mr-hope/vuepress-shared";
import type PhotoSwipeDefaultUI from "photoswipe/dist/photoswipe-ui-default";

export const i18n: Record<LangPaths, PhotoSwipeDefaultUI.ShareButtonData[]> = {
  "/zh/": [
    {
      id: "qq",
      label: "分享到 QQ",
      url:
        "https://connect.qq.com/widget/shareqq/iframe_index.html?url={{url}}&title={{text}}&pics={{image_url}}",
    },
    {
      id: "qzone",
      label: "分享到 Qzone",
      url:
        "https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{url}}&title={{text}}&pics={{image_url}}",
    },
    {
      id: "weibo",
      label: "分享到 Weibo",
      url:
        "http://service.weibo.com/share/share.php?url={{url}}&title={{text}}&content=utf8&pic={{image_url}}",
    },
    {
      id: "download",
      label: "下载图片",
      url: "{{raw_image_url}}",
      download: true,
    },
  ],

  "/en/": [
    {
      id: "facebook",
      label: "Share on Facebook",
      url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
    },
    {
      id: "twitter",
      label: "Tweet",
      url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
    },
    {
      id: "pinterest",
      label: "Pin it",
      url:
        "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
    },
    {
      id: "download",
      label: "Download image",
      url: "{{raw_image_url}}",
      download: true,
    },
  ],

  "/vi/": [
    {
      id: "facebook",
      label: "Share on Facebook",
      url: "https://www.facebook.com/sharer/sharer.php?u={{url}}",
    },
    {
      id: "twitter",
      label: "Tweet",
      url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}",
    },
    {
      id: "pinterest",
      label: "Pin it",
      url:
        "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}",
    },
    {
      id: "download",
      label: "Download image",
      url: "{{raw_image_url}}",
      download: true,
    },
  ],
};

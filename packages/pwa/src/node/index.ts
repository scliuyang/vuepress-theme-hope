import { lang2Path } from "@mr-hope/vuepress-shared";
import { resolve } from "path";
import { i18n } from "./i18n";
import { injectLinkstoHead } from "./injectHead";
import { getManifest, genManifest } from "./genManifest";
import { genServiceWorker } from "./genServiceWorker";

import type { PluginI18nConvert } from "@mr-hope/vuepress-shared";
import type { Context, PluginOptionAPI } from "@mr-hope/vuepress-types";
import type { PWAI18NConfig, PWAOptions } from "../types";

const pwaPlugin = (options: PWAOptions, context: Context): PluginOptionAPI => {
  const { base, themeConfig } = context;
  const baseLang = options.baseLang || themeConfig.baseLang || "en-US";
  const baseLangPath = lang2Path(baseLang);
  const pwaI18nConfig = i18n as PluginI18nConvert<PWAI18NConfig>;
  const pwaOption =
    Object.keys(options).length > 0 ? options : themeConfig.pwa || {};

  pwaI18nConfig["/"] = pwaI18nConfig[baseLangPath];

  const config: PluginOptionAPI = {
    name: "pwa",

    define: () => ({
      PWA_I18N: pwaI18nConfig,
      SW_BASE_URL: base || "/",
    }),

    globalUIComponents: [pwaOption.popupComponent || "SWUpdatePopup"],

    enhanceAppFiles: resolve(__dirname, "../client/enhanceAppFile.js"),

    beforeDevServer(app) {
      app.get(`${base || "/"}manifest.webmanifest`, (_req, res) => {
        getManifest(pwaOption, context)
          .then((manifest) => {
            res.send(manifest);
          })
          .catch(() =>
            res.status(500).send("Unexpected manifest generate error")
          );
      });
    },

    ready(): void {
      context.siteConfig.head = injectLinkstoHead(
        pwaOption,
        base,
        context.siteConfig.head
      );
    },

    async generated(): Promise<void> {
      await genManifest(pwaOption, context);
      await genServiceWorker(pwaOption, context);
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  if (pwaOption.showInstall !== false)
    (config.globalUIComponents as string[]).push("PWAInstall");

  return config;
};
export = pwaPlugin;

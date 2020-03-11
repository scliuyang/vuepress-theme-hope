import * as lineNumbers from '@vuepress/markdown/lib/lineNumbers';
import { Context, PluginOptionAPI } from 'vuepress-types';
import { MarkdownEnhanceOption } from '../types';
import flowchart from './markdown-it/flowchart';
import footnote from './markdown-it/footnote';
import pluginConfig from './pluginConfig';
import { resolve } from 'path';
import sub from './markdown-it/sub';
import sup from './markdown-it/sup';

// eslint-disable-next-line max-lines-per-function
export = (option: MarkdownEnhanceOption, context: Context): PluginOptionAPI => {
  const markdownOption = option || context.themeConfig.markdown || {};

  const config: PluginOptionAPI = {
    name: 'md-enhance',

    enhanceAppFiles: resolve(__dirname, 'enhanceAppFile.ts'),

    /** Markdown 增强 */
    chainMarkdown: md => {
      //  添加行号
      if (markdownOption.lineNumbers !== false)
        md.plugin('line-numbers').use(lineNumbers);
      // 增加上角标
      if (markdownOption.sup || markdownOption.enableAll)
        md.plugin('sup').use(sup);
      // 增加下角标
      if (markdownOption.sub || markdownOption.enableAll)
        md.plugin('sub').use(sub);
      // 增加脚注
      if (markdownOption.footnote || markdownOption.enableAll)
        md.plugin('subfootnote').use(footnote);
      // 使用流程图;
      if (markdownOption.flowchart || markdownOption.enableAll)
        md.plugin('flowchart').use(flowchart);
    }
  };

  /** 插件选项 */
  config.plugins = pluginConfig(option, context.themeConfig);

  return config;
};

import { defineTeekConfig } from "vitepress-theme-teek/config";
import { version } from "vitepress-theme-teek/es/version";
import timeline from "vitepress-markdown-timeline";

export const teekConfig = defineTeekConfig({
  themeEnhance: {
    spotlight: {
      defaultValue: true,
    },
  },
 markdown: {
    config: (md) => {
      md.use(timeline);
    },
  },
  teekTheme: true,
  teekHome: false, // 是否开启博客首页
  vpHome: true, // 是否隐藏 VP 首页
  sidebarTrigger: true, // 是否开启侧边栏折叠功能
  author: { name: "大树报编辑部", link: "/about/us" },
  footerInfo: {
    theme: {
      name: `基于Vitepress Theme Teek@${version}`,
    },
    copyright: {
      createYear: 2025,
      suffix: "林业集团 版权所有",
    },
  },
  codeBlock: {
    copiedDone: (TkMessage) => TkMessage.success("复制成功！"),
  },
  articleShare: { enabled: true },
  vitePlugins: {
    autoFrontmatter: true,
    sidebarOption: {
      initItems: false,
    },
  },
});

import { defineConfig } from "vitepress";
import llmstxt from "vitepress-plugin-llms";
import { teekConfig } from "./teekConfig";


const description = [
  "欢迎来到大树报",
  "人民群众自己的头版头条",
].toString();

export default defineConfig({
  extends: teekConfig,
  title: "大树网",
  description: description,
  cleanUrls: true,
  lastUpdated: false,
  lang: "zh-CN",
  head: [

    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "Teek | VitePress Theme" }],
    ["meta", { property: "og:site_name", content: "Teek" }],
    ["meta", { property: "og:image", content: "" }],
    ["meta", { property: "og:url", content: "" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "Teek" }],
    // 禁止浏览器缩放
    // [
    //   "meta",
    //   {
    //     name: "viewport",
    //     content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
    //   },
    // ],
    ["meta", { name: "keywords", description }],
  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: false,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  sitemap: {
    hostname: "https://BigTree.qzz.io",
    transformItems: (items) => {
      const permalinkItemBak: typeof items = [];
      // 使用永久链接生成 sitemap
      const permalinks = (globalThis as any).VITEPRESS_CONFIG.site.themeConfig
        .permalinks;
      items.forEach((item) => {
        const permalink = permalinks?.map[item.url];
        if (permalink)
          permalinkItemBak.push({ url: permalink, lastmod: item.lastmod });
      });
      return [...items, ...permalinkItemBak];
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      light: '/light-logo.png',
      dark: '/dark-logo.png'
    },
    siteTitle: false,
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '往期',
        items: [
          { text: '第1期', link: '/work/1' },
          { text: '第2期', link: '/work/2' },
          { text: '第3期', link: '/work/3' },
          { text: '第4期', link: '/work/4' },
          { text: '第5期', link: '/work/5' },
          { text: '第6期', link: '/work/6' },
          { text: '第7期', link: '/work/7' },
          { text: '第8期', link: '/work/8' },
        ]
      },
      { text: '法规', link: '/law' },
      {
        text: "功能页",
        items: [
          { text: "归档页", link: "/archives" },
          { text: "清单页", link: "/articleOverview" },
          { text: "登录页", link: "/login" },
          { text: "风险链接提示页", link: "/risk-link?target=https://vp.teek.top" },
          { text: "分类页", link: "/categories" },
          { text: "标签页", link: "/tags" },
        ],
      },
      {
        text: '文档',
        items: [
          { text: '写作排版', link: '/guide/typesetting' },
          { text: '笔记技巧', link: '/guide/skill' },
        ]
      },
      {
        text: '关于',
        items: [
          { text: '大树报', link: '/about/us' },
          { text: '大树网', link: '/about/web' },
        ]
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/BigTreeNews/BigTreeNews.github.io",
      },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            displayDetails: '显示详细结果列表',
            noResultsText: '未找到相关结果',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '返回',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    editLink: {
      text: "在 GitHub 上编辑此页",
      pattern:
        "https://github.com/BigTreeNews/BigTreeNews.github.io/edit/main/docs/:path",
    },
  },
  vite: {
    plugins: [
      llmstxt() as any,
    ],
  },
  // transformHtml: (code, id, context) => {
  //   if (context.page !== "404.md") return code;
  //   return code.replace("404 | ", "");
  // },
});

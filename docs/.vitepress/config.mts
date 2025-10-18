import { defineConfig } from 'vitepress';
import timeline from "vitepress-markdown-timeline";
const base = '/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  ignoreDeadLinks: true,
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  base,
  title: '大树网',
  description: '大树报官方网站',
  lang: 'zh-CN',
  locales: {
    '/': {
      label: '简体中文',
      lang: 'zh-CN',
    },
  },
  markdown: {
    config: (md) => {
      md.use(timeline);
    },
  },
  //主题配置
  themeConfig: {
    footer: { 
      copyright: 'Copyright ©2025 林业集团. all right reserved.', 
    },
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
    logo: {
      light: '/light-logo.png',
      dark: '/dark-logo.png'
    },
    siteTitle: false,
    //头上角要主题切换的文字 Appearance
    darkModeSwitchLabel: '切换主题',
    // 文章翻页
    docFooter: {
      prev: '上一篇', //Next page
      next: '下一篇', //Previous page
    },
    outlineTitle: '页面内容',
    lastUpdatedText: '最后更新于',
    returnToTopLabel: '返回顶部',

    // 菜单  Menu
    sidebarMenuLabel: '菜单',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '往期',
        items: [
          { text: '第1期', link: '/work/1/' },
          { text: '第2期', link: '/work/2/' },
          { text: '第3期', link: '/work/3/' },
          { text: '第4期', link: '/work/4/' }
        ]
      },
      {
        text: '法规',
        items: [
          { text: '国法', link: '/law/nation/' },
          { text: '校规', link: '/law/school/' }
        ]
      },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '往期',
        items: [
          { text: '目录', link: '/work' },
          { text: '第1期', link: '/work/1' },
          { text: '第2期', link: '/work/2' },
          { text: '第3期', link: '/work/3' },
          { text: '第4期', link: '/work/4' }
        ]
      },
      {
        text: '法规',
        items: [
          { text: '目录', link: '/law' },
          { text: '国法', link: '/law/nation' },
          { text: '校规', link: '/law/school' }
        ]
      },
      {
        text: '关于',
        items: [
          { text: '我们', link: '/about' },
          { text: '网站', link: '/aboutweb' }
        ]
      }
    ],
    //404页面的配置
    notFound: {
      title: '页面未找到',
      quote: '哎呀，好像不小心迷路了呢',
      linkText: '返回首页',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BigTreeNews/BigTreeNews.github.io' }
    ]
  }
})

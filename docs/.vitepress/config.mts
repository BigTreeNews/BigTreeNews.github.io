import timeline from "vitepress-markdown-timeline";
import { defineConfig } from 'vitepress'
const base = '/';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  base,
  title: '大树网',
  description: '大树报官方网站',
  //设置为中文，相当于html标签加lang='zh-CN'
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
    // https://vitepress.dev/reference/default-theme-config
    //头上角要主题切换的文字 Appearance
    darkModeSwitchLabel: '切换主题',
    // 文章翻页
    docFooter: {
      prev: '上一篇', //Next page
      next: '下一篇', //Previous page
    },
    //当前页面 On this page
    outlineTitle: '页面内容',

    // 返回顶部 Return to top
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

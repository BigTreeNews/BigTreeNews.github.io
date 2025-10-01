import { defineConfig } from 'vitepress'
const base = "/BTN/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  base,
  title: "大树网",
  description: "大树报官方网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '往期',
        items: [
          { text: '目录', link: '/work' },
          { text: "第1期", link: "/work/1/" },
          { text: "第2期", link: "/work/2/" },
          { text: "第3期", link: "/work/3/" }
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
          { text: '第3期', link: '/work/3' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JustJoy122/BTN' }
    ]
  }
})

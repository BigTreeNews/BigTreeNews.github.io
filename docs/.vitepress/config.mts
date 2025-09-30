import { defineConfig } from 'vitepress'
const base = "/BTN/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "大树网",
  description: "大树报官方网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于我们', link: '/about' }
      {
        text: '成品',
        items: [
          { text: '目录', link: '/done/readme' },
          { text: "第1期", link: "/done/1/" },
          { text: "第2期", link: "/done/2/" },
          { text: "第3期", link: "/done/3/" }
        ]
      }
    ],

    sidebar: [
      {
        text: '成品',
        items: [
          { text: '目录', link: '/done/readme' },
          { text: '第1期', link: '/done/1' },
          { text: '第2期', link: '/done/2' }，
          { text: '第3期', link: '/done/3' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JustJoy122/BTN' }
    ]
  }
})

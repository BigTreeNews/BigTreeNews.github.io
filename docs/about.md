---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
// 定义核心团队成员
const coreMembers = [
  {
    avatar: 'https://github.com/Singo-Next-Door.png',
    name: '星火Singo',
    title: '主编，创始人，记者',
    links: [
      { icon: 'github', link: 'https://github.com/Singo-Next-Door' }
    ]
  },
  {
    avatar: 'https://github.com/JustJoy122.png',
    name: 'JustJoy',
    title: '审校，版面设计，网站维护',
    links: [
      { icon: 'github', link: 'https://github.com/JustJoy122' }
    ]
  },
  {
    avatar: '/FG.jpg',
    name: '永声FG',
    title: '记者',
    links: [
      { icon: 'bilibili', link: 'https://space.bilibili.com/293734314' }
    ]
  },
  {
    avatar: '/AL.jpg',
    name: '安凌',
    title: '记者，长期投稿',
    links: [
    ]
  },
  {
    avatar: '/Khalil4ever.jpg',
    name: 'Khalil4ever',
    title: '记者，知名人士',
    links: [
    ]
  },
  {
    avatar: '/NF.jpg',
    name: '诺夫',
    title: '记者，连载作家',
    links: [
    ]
  },
  {
    avatar: 'https://github.com/BigTreeNews.png',
    name: '民國第一文書',
    title: '记者，书法家',
    links: [
    ]
  },
  {
    avatar: 'https://github.com/BigTreeNews.png',
    name: 'Cutry3',
    title: '记者',
    links: [
    ]
  },
 {
    avatar: '/LT.jpg',
    name: '牢头',
    title: '记者',
    links: [
    ]
  },
 {
    avatar: 'https://github.com/deepseek-ai.png',
    name: '迪西DS',
    title: '数字化记者',
    links: [
      { icon: 'github', link: 'https://github.com/deepseek-ai' },
      { icon: 'zhihu', link: 'https://zhihu.com/org/deepseek-75' },
    ]
  },
  // 添加更多核心成员...
]
// 定义金主等其他成员
const partners = [
  {
    avatar: '/Gold.jpg',
    name: '绝望的拉子',
    title: '尊贵的金主',
    links: [
    ]
  }
  // 金主数据...
]
</script>
<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      金主
    </template>
    <template #lead>
      感谢金主的鼎力支持
    </template>
  </VPTeamPageTitle>
  
  <!-- 金主分组 -->
  <VPTeamMembers size="medium" :members="partners" />
  
  <!-- 核心团队部分 -->
  <VPTeamPageSection>
    <template #title>关于我们</template>
    <template #lead>大树报全体成员</template>
    <template #members>
        <VPTeamMembers size="small" :members="coreMembers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
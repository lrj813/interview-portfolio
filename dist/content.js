// 项目和文章在这里维护。图片使用相对于网站根目录的路径。
window.portfolioContent = {
  projects: [
    {
      number: '01', name: 'LifeOS · 苟活', english: 'AN AI COMPANION FOR EVERYDAY QUESTIONS',
      category: 'AI 产品探索', image: './assets/lifeos.jpg', alt: 'LifeOS 项目历史版本首页截图',
      caption: '项目档案 / 首页设计过程稿',
      headline: '获得建议之后，\n问题如何被继续跟进？',
      description: '围绕日常问题的 AI 指南问答 Demo。将指南检索、会话摘要与问题回访串联起来，探索从获得建议到持续跟进的产品体验。',
      tags: ['指南问答', '长期会话摘要', '问题回访'],
      note: '静态 Demo 展示交互；真实模型调用需本地部署。',
      demo: 'https://lrj813.github.io/LifeOS/', github: 'https://github.com/lrj813/LifeOS'
    },
    {
      number: '02', name: '掌上英雄联盟', english: 'A GAME SERVICE EXPERIENCE CONCEPT',
      category: '服务体验概念', image: './assets/lol-concept.jpg', alt: '掌上英雄联盟非官方概念站的封面视觉，金色画卷中的游戏角色',
      caption: '项目视觉 / 概念站封面素材',
      headline: '以一局游戏的旅程，\n重新串联服务体验。',
      description: '以召唤师的一局游戏旅程为主线，组织战绩、资讯、赛事、英雄资料、攻略与下载入口，探索游戏服务的信息架构与交互体验。',
      tags: ['用户旅程', '信息架构', '交互设计'],
      note: '非官方、非商业的静态概念演示；游戏素材版权归原权利人。',
      demo: 'https://lrj813.github.io/lol-concept-site/', github: 'https://github.com/lrj813/lol-concept-site'
    }
  ],
  articles: [
    { number: '01', category: 'AGENT / 上下文', title: '上下文越大，Agent 为什么反而更需要学会“忘记”？', url: 'https://mp.weixin.qq.com/s/y9I4zDGSnqjz7ygZKjzuHg' },
    { number: '02', category: 'AI / 工作方法', title: 'Prompt 到 Skill：经验变成系统能力', url: 'https://mp.weixin.qq.com/s/BDWg3Ts5V9xCuRylg6D6Qg' },
    { number: '03', category: 'DESIGN / 产品实践', title: 'AI 搭建页面时，真正需要注意的是什么', url: 'https://mp.weixin.qq.com/s/zHp0mVHZpLyFaZ8VH9MTRQ' }
  ]
};

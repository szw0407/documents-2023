import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'zh-CN',
  title: 'onlinetek-web 笔记',
  description: '有用的东西',

  lastUpdated: true,

  markdown: {
    headers: {
      level: [0, 0]
    },
    toc: {
      level: [2, 3, 4]
    }
  },

  themeConfig: {
    sidebar: {
      '/': sidebar()
    }
  }
});

function sidebar() {
  return [
    {
      text: '2023 年',
      items: [
        {
          text: '试用期',
          items: [
            {
              text: '第一次课（HTML）补充内容',
              link: '/2023/pre-01-extra/index.md'
            }
          ]
        }
      ]
    },
    {
      text: '2022 年',
      items: [
        {
          text: '杂项',
          collapsible: true,
          items: [
            {
              text: '如何解决疑难杂症',
              link: '/2022/misc/how-to-solve-problems.md'
            },
            {
              text: 'VSCode 插件推荐清单',
              link: '/2022/misc/vscode-extensions-recommend.md'
            },
            {
              text: '(前端)ES6 常用语法',
              link: '/2022/misc/es6-features/index.md'
            },
            {
              text: '(前端)ESLint 的使用 & TypeScript 安利',
              link: '/2022/misc/eslint-usage/index.md'
            },
            {
              text: '(前端)lnk. 写一个 Vue 项目的时候会先干什么(伪)',
              link: '/2022/misc/how-do-lnk-start-a-vue-project-lite/index.md'
            }
          ]
        },
        {
          text: '试用期',
          collapsible: true,
          items: [
            {
              text: 'ch01-补充内容',
              link: '/2022/trial/ch01-additional-content.md'
            },
            {
              text: 'ch03-补充内容',
              link: '/2022/trial/ch03-additional-content.md'
            }
          ]
        },
        {
          text: '正式培训',
          collapsibale: true,
          items: [
            {
              text: 'Node.js 以及 npm 的安装与使用',
              link: '/2022/formal/20221124-node-install/index.md'
            },
            {
              text: 'Git 的安装',
              link: '/2022/formal/20230107-git-install/index.md'
            },
            {
              text: '怎么给自己的项目上线',
              link: '/2022/formal/server-and-serverless/index.md'
            }
          ]
        }
      ]
    }
  ];
}

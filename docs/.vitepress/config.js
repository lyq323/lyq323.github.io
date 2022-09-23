module.exports = {
    base: '/',
    title: "MyBlog",
    description: 'Keep Clear',
    siteTitle: 'My Custom Title',
    lang: 'en-US',
    lastUpdated: true,
    markdown: {
      headers: {
        level: [0, 0]
      }
    },
    themeConfig: {
      socialLinks: [
        { icon: 'github', link: 'https://github.com/lyq323' }
      ],
      editLink: {
        pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
      },
        nav: [
          { text: 'Backend', link: '/Java/spring'},
          { text: 'Frontend', link: '/Frontend/frontend'},
        ],
        sidebar: {
          '/Java/': [
            {
              text: 'Java',
              items: [
                { text: 'Base', link: '/Java/base'},
              ]
            },
            {
              text: 'SpringBoot',
              items: [
                { text: 'Spring', link: '/Java/spring'},
              ]
            }
          ],
          '/Frontend/': [
            {
              text: 'Frontend',
              items: [
                { text: 'Frontend', link: '/Frontend/frontend'}
              ]
            }
          ]
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2019-present Ethel Li'
        }
      }
}

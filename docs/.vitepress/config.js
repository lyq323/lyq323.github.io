module.exports = {
    base: '/',
    title: "MyBlog",
    description: 'A blog to record IT study',
    siteTitle: 'Keep Clear',
    lang: 'en-US',
    lastUpdated: true,

    themeConfig: {
      socialLinks: [
        { icon: 'github', link: 'https://github.com/lyq323' }
      ],
      editLink: {
        pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        text: 'Edit this page on GitHub'
      },
        nav: [
          { text: 'Operation',link: '/Operation/git' },
          { text: 'Backend', link: '/Java/spring' },
          { text: 'Frontend', link: '/Frontend/frontend' }
        ],
        sidebar: {
          '/Java/': [
            {
              text: 'Java',
              items: [
                { text: 'Base', link: '/Java/base' },
              ]
            },
            {
              text: 'SpringBoot',
              items: [
                { text: 'Spring', link: '/Java/spring' },
              ]
            }
          ],
          '/Frontend/': [
            {
              text: 'Frontend',
              items: [
                { text: 'Frontend', link: '/Frontend/frontend' }
              ]
            }
          ],
          '/Operation/': [
            {
              text: 'Operation',
              items: [
                { text: 'Operation', link: '/Operation/git' }
              ]
            }
          ]
        },
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2022-present Ethel Li'
        }
      }
}

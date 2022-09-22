module.exports = {
    base: '/',
    title: "Ethel Blog",
    description: 'Keep Clear in the world!',
    lang: 'en-US',
    themeConfig: {
        nav: [
          { text: 'Java', link: '/Java/spring' },
          { text: 'Think', link: '/think/think' }
        ],
        sidebar: [
            {
              text: 'SpringBoot',
              items: [
                { text: 'Spring', link: '/Java/spring' }
              ]
            }
          ]
      }
}

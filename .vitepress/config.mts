import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Договор-оферта подписки Архи-Про ",
  description: "Договор-оферта на оказание информационных услуг в формате подписки",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Договор-оферта', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Содержание',
        items: [
          { text: 'Договор-оферта', link: '/info-oferta' },
          { text: 'Приложения', link: '/info-oferta-parts' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Договор-оферта подписки Архи-Про ",
  description: "Договор-оферта на оказание информационных услуг в формате подписки",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Договор-оферта', link: '/' },
      { text: 'Реквизиты', link: '/info-oferta-parts' }
    ],

    sidebar: [
      {
        text: 'Содержание',
        items: [
          { text: 'Договор-оферта', link: '/info-oferta' },
          { text: 'Термины и определения', link: '/terms' },
          { text: 'Предмет договора', link: '/about' },
          { text: 'Права и обязанности сторон', link: '/obligations' },
          { text: 'Оплата услуг', link: '/pays' },
          { text: 'Ответственность сторон', link: '/reply' },
          { text: 'Порядок разрешения споров', link: '/arbitr' },
          { text: 'Форс-мажор', link: '/fors' },
          { text: 'Персональные данные', link: '/pd' },
          { text: 'Общие положения', link: '/info-oferta-parts' },
          { text: 'Реквизиты', link: '/invoice' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ink-kin/arhi-pro-info-oferta' }
    ]
  }
})

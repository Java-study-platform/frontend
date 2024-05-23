type LocaleMessageId = keyof typeof import('@/static/locales/ru.json')
type Locale = 'ru'

declare global {
  namespace FormatjsItnl {
    interface IntlConfig {
      locale: 'ru'
    }

    interface Messages {
      ids: LocaleMessageId
    }
  }
}

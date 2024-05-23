import { I18nProvider } from '@/utils/contexts'
import { getMessagesByLocale } from '@/utils/helpers'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  const locale = 'ru'
  const messages = getMessagesByLocale(locale)

  return (
    <I18nProvider locale={locale} messages={messages}>
      {children}
    </I18nProvider>
  )
}

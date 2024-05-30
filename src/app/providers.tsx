import { AxiosProvider, I18nProvider, QueryProvider, UserProvider } from '@/utils/contexts'
import { getMessagesByLocale } from '@/utils/helpers'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  const locale = 'ru'
  const messages = getMessagesByLocale(locale)

  return (
    <I18nProvider locale={locale} messages={messages}>
      <QueryProvider>
        <UserProvider>
          <AxiosProvider>{children}</AxiosProvider>
        </UserProvider>
      </QueryProvider>
    </I18nProvider>
  )
}

import {
  AxiosProvider,
  I18nProvider,
  QueryProvider,
  SessionProvider,
  UserProvider
} from '@/utils/contexts'
import { getMessagesByLocale } from '@/utils/helpers'
import { Toaster } from 'sonner'
import { TooltipProvider } from '@/components/plate-ui/tooltip'

interface ProvidersProps {
  children: React.ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  const locale = 'ru'
  const messages = getMessagesByLocale(locale)

  return (
    <I18nProvider locale={locale} messages={messages}>
      <QueryProvider>
        <SessionProvider>
          <UserProvider>
            <AxiosProvider>
              <Toaster />
              <TooltipProvider>{children}</TooltipProvider>
            </AxiosProvider>
          </UserProvider>
        </SessionProvider>
      </QueryProvider>
    </I18nProvider>
  )
}

import { ROUTES } from '@/utils/constants'
import { useSessionContext } from '@/utils/contexts'
import { cn } from '@/utils/helpers'
import { PersonIcon } from '@radix-ui/react-icons'
import { LogInIcon, LogOutIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { I18nText } from '@/components/common'
import { Button, buttonVariants } from '@/components/ui'

export const Header = () => {
  const sessionContext = useSessionContext()

  return (
    <header className="container sticky z-20 flex h-[60px] items-center border-b bg-background">
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link to={ROUTES.PROFILE} className="hover:underline">
          <I18nText path="navigation.profile" />
        </Link>
        <Link to={ROUTES.TASKS} className="hover:underline">
          <I18nText path="navigation.tasks" />
        </Link>

        {sessionContext.session.isAuth && (
          <>
            <Link to={ROUTES.PROFILE} className={cn(buttonVariants({ variant: 'outline' }))}>
              <PersonIcon className="mr-2 h-4 w-4" />
              <I18nText path="button.profile" />
            </Link>
            <Button
              onClick={sessionContext.logout}
              className={cn(buttonVariants({ variant: 'destructive' }))}
            >
              <LogOutIcon className="mr-2 h-4 w-4" />
              <I18nText path="button.logout" />
            </Button>
          </>
        )}
        {!sessionContext.session.isAuth && (
          <Link to={ROUTES.LOGIN} className={cn(buttonVariants({ variant: 'default' }))}>
            <LogInIcon className="mr-2 h-4 w-4" />
            <I18nText path="button.login" />
          </Link>
        )}
      </nav>
    </header>
  )
}
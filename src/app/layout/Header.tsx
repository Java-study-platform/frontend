import { ROUTES } from '@/utils/constants'
import { useSessionContext } from '@/utils/contexts'
import { cn } from '@/utils/helpers'
import { PersonIcon } from '@radix-ui/react-icons'
import { HomeIcon, LogInIcon, LogOutIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { I18nText } from '@/components/common'
import { Button, buttonVariants } from '@/components/ui'

export const Header = () => {
  const sessionContext = useSessionContext()

  return (
    <header className="container sticky z-20 flex h-[60px] items-center border-b bg-background">
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link to={ROUTES.ROOT}>
          <HomeIcon />
        </Link>
        <Link to={ROUTES.TASKS} className="hover:underline">
          <I18nText path="navigation.tasks" />
        </Link>
        <Link to={ROUTES.CATEGORIES} className="hover:underline">
          <I18nText path="navigation.categories" />
        </Link>

        {sessionContext.session.isAuth && (
          <>
            <Link
              to={ROUTES.PROFILE}
              className={cn(buttonVariants({ variant: 'outline' }), '2xsx:px-3')}
            >
              <PersonIcon className="mr-2 h-4 w-4 2xsx:mr-0 2xsx:size-3" />
              <span className="2xsx:hidden">
                <I18nText path="button.profile" />
              </span>
            </Link>
            <Button
              onClick={sessionContext.logout}
              className={cn(buttonVariants({ variant: 'destructive' }), '2xsx:px-3')}
            >
              <LogOutIcon className="mr-2 h-4 w-4 2xsx:mr-0 2xsx:size-3" />
              <span className="2xsx:hidden">
                <I18nText path="button.logout" />
              </span>
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

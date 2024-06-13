import { Outlet } from 'react-router-dom'
import { Providers } from '../providers'
import { Header } from './Header'

export const AuthorizedLayout = () => (
  <Providers>
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="mt-[40px] grow">
        <Outlet />
      </div>
    </div>
  </Providers>
)

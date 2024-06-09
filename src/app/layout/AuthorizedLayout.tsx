import { Outlet } from 'react-router-dom'
import { Providers } from '../providers'
import { Footer } from './Footer'
import { Header } from './Header'

export const AuthorizedLayout = () => (
  <Providers>
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="mt-[80px] grow">
        <Outlet />
      </div>
      <Footer className="shrink" />
    </div>
  </Providers>
)

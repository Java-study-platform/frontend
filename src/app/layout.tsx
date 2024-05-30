import { Outlet } from 'react-router-dom'
import { Providers } from './providers'

export const Layout = () => (
  <Providers>
    <div className="p-2">
      <Outlet />
    </div>
  </Providers>
)

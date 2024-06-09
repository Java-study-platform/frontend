import { Outlet } from 'react-router-dom'
import { Providers } from '../providers'

export const Layout = () => (
  <Providers>
    <Outlet />
  </Providers>
)

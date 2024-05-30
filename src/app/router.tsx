import { LoginPage } from '@/pages'
import { ROUTES } from '@/utils/constants'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { Layout } from './layout'
import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: (
          <ProtectedRoute>
            <Outlet />
          </ProtectedRoute>
        ),
        children: [
          {
            path: ROUTES.ROOT,
            element: <div></div>
          }
        ]
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />
      }
    ]
  }
])

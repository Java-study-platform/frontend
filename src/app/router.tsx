import {
  CategoriesPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  TasksPage,
  TopicPage,
  TopicsPage
} from '@/pages'
import { ROUTES } from '@/utils/constants'
import { createBrowserRouter } from 'react-router-dom'
import { AuthorizedLayout } from './layout/AuthorizedLayout'
import { Layout } from './layout/Layout'
import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: (
          <ProtectedRoute>
            <AuthorizedLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: ROUTES.ROOT,
            element: <TopicsPage />
          },
          {
            path: ROUTES.CATEGORIES,
            element: <CategoriesPage />
          },
          {
            path: ROUTES.PROFILE,
            element: <ProfilePage />
          },
          {
            path: ROUTES.TOPIC(),
            element: <TopicPage />
          },
          {
            path: ROUTES.TASKS,
            element: <TasksPage />
          }
        ]
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />
      },
      { path: ROUTES.REGISTER, element: <RegisterPage /> }
    ]
  }
])

import {
  CategoriesPage,
  LoginPage,
  ProfilePage,
  RegisterPage,
  TaskPage,
  TasksPage,
  TopicPage,
  TopicsPage
} from '@/pages'
import { ROUTES } from '@/utils/constants'
import { createBrowserRouter } from 'react-router-dom'
import { SolutionPage } from '@/pages/solution/SolutionPage'
import { AuthorizedLayout } from './layout/AuthorizedLayout'
import { Layout } from './layout/Layout'

// import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: (
          // <ProtectedRoute>
          <AuthorizedLayout />
          // </ProtectedRoute>
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
          },
          {
            path: ROUTES.TASK(),
            element: <TaskPage />
          },
          {
            path: ROUTES.SOLUTION(),
            element: <SolutionPage />
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

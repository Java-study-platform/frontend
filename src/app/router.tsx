import {
  CategoriesPage,
  LoginPage,
  ProfilePage,
  RatingPage,
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
import { ProtectedRoute } from './ProtectedRoute'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        element: <AuthorizedLayout />,
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
            path: ROUTES.RATING,
            element: <RatingPage />
          }
        ]
      },
      {
        element: (
          <ProtectedRoute>
            <AuthorizedLayout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: ROUTES.SOLUTION(),
            element: <SolutionPage />
          },
          {
            path: ROUTES.PROFILE(),
            element: <ProfilePage />
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

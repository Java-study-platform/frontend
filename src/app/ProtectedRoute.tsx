import { ROUTES } from '@/utils/constants'
import { useSessionContext } from '@/utils/contexts'
import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation()
  const sessionContext = useSessionContext()

  return sessionContext.session.isAuth ? (
    children
  ) : (
    <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />
  )
}

import { ROUTES } from '@/utils/constants'
import { useUserContext } from '@/utils/contexts'
import { Navigate, useLocation } from 'react-router-dom'

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation()
  const { isAuth } = useUserContext()

  return isAuth ? children : <Navigate to={ROUTES.LOGIN} replace state={{ from: location }} />
}

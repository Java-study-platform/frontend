import { LOCAL_STORAGE, ROUTES } from '@/utils/constants'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'usehooks-ts'
import { defaultUserContextInfoValues, UserContext, type UserContextInfo } from './UserContext'

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [isAuth, setIsAuth] = useLocalStorage(LOCAL_STORAGE.IS_AUTH, false)
  const [userInfo, setUserInfo] = useLocalStorage(LOCAL_STORAGE.USER_INFO, defaultUserContextInfoValues)

  const login = React.useCallback(async (userInfo: Omit<UserContextInfo, 'roles'>) => {
    setIsAuth(true)
    setUserInfo({ ...userInfo })
  }, [])

  const logout = React.useCallback(() => {
    setIsAuth(false)
    setUserInfo(defaultUserContextInfoValues)
    navigate(ROUTES.LOGIN, { state: { from: location }, replace: true })
  }, [])

  const value = React.useMemo(
    () => ({ isAuth, userInfo, login, logout }),
    [isAuth, userInfo, login, logout]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

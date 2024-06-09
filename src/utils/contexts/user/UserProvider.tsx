import { LOCAL_STORAGE, ROUTES } from '@/utils/constants'
import { useLocalStorage } from '@siberiacancode/reactuse'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { defaultUserContextInfoValues, UserContext, type UserContextInfo } from './UserContext'

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const [isAuth, setIsAuth] = useLocalStorage(LOCAL_STORAGE.IS_AUTH, false)
  const [userInfo, setUserInfo] = useLocalStorage(LOCAL_STORAGE.USER_INFO, defaultUserContextInfoValues)

  const login = React.useCallback((userInfo: UserContextInfo) => {
    setIsAuth(true)
    setUserInfo(userInfo)
  }, [])

  const logout = React.useCallback(() => {
    setIsAuth(false)
    setUserInfo(defaultUserContextInfoValues)
    navigate(ROUTES.LOGIN, { state: { from: location }, replace: true })
  }, [])

  return (
    <UserContext.Provider value={{ isAuth, userInfo, login, logout }}>{children}</UserContext.Provider>
  )
}

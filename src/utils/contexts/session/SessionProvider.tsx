import { LOCAL_STORAGE, ROUTES } from '@/utils/constants'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import { useLocalStorage } from '@siberiacancode/reactuse'
import { useLocalStorage } from 'usehooks-ts'
import { defaultSessionContextInfoValues, SessionContext, SessionContextInfo } from './SessionContext'

export const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [session, setSession] = useLocalStorage(LOCAL_STORAGE.SESSION, defaultSessionContextInfoValues)

  const login = React.useCallback((session: Omit<SessionContextInfo, 'isAuth'>) => {
    setSession({ ...session, isAuth: true })
  }, [])

  const logout = React.useCallback(() => {
    setSession(defaultSessionContextInfoValues)
    navigate(ROUTES.LOGIN, { state: { from: location }, replace: true })
  }, [])

  const value = React.useMemo(
    () => ({ session: session as SessionContextInfo, login, logout }),
    [session, login, logout]
  )

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
}

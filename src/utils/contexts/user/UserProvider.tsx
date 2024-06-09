import { LOCAL_STORAGE } from '@/utils/constants'
import { useLocalStorage } from '@siberiacancode/reactuse'
import React from 'react'
import { defaultUserContextInfoValues, UserContext } from './UserContext'

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage(LOCAL_STORAGE.USER, defaultUserContextInfoValues)

  const clearUser = React.useCallback(() => setUser(defaultUserContextInfoValues), [])

  const value = React.useMemo(() => ({ user, setUser, clearUser }), [user, setUser, clearUser])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

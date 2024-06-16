import { LOCAL_STORAGE } from '@/utils/constants'
import React from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { defaultUserContextInfoValues, UserContext } from './UserContext'

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useLocalStorage(LOCAL_STORAGE.USER, defaultUserContextInfoValues)

  const clearUser = React.useCallback(() => setUser(defaultUserContextInfoValues), [])

  const value = React.useMemo(
    () => ({
      user: {
        ...user,
        isAdmin: user?.roles?.includes('admin') ?? false,
        isMentor: user?.roles?.includes('mentor') ?? false,
        isUser: user?.roles?.includes('user') ?? false
      },
      setUser,
      clearUser
    }),
    [user, setUser, clearUser]
  )

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

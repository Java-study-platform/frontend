import { createContext } from 'react'

export interface UserContextInfo {
  login: string
}

export interface IUserContext {
  user?: UserContextInfo
  setUser: (user: Omit<UserContextInfo, 'isAuth'>) => void
  clearUser: () => void
}

export const defaultUserContextInfoValues: UserContextInfo = {
  login: ''
}

export const UserContext = createContext<IUserContext>({
  setUser: () => {},
  clearUser: () => {}
})

import { createContext } from 'react'

export interface UserContextInfo {
  login: string
  roles: string[]
  isAdmin: boolean
  isMentor: boolean
}

export interface IUserContext {
  user?: UserContextInfo
  setUser: (user: Omit<UserContextInfo, 'isAdmin' | 'isMentor'>) => void
  clearUser: () => void
}

export const defaultUserContextInfoValues: Omit<UserContextInfo, 'isAdmin' | 'isMentor'> = {
  login: '',
  roles: []
}

export const UserContext = createContext<IUserContext>({
  setUser: () => {},
  clearUser: () => {}
})

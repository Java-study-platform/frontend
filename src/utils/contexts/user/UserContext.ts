import { createContext } from 'react'

export interface UserContextInfo {
  experience: number
  login: string
  roles: string[]
  isAdmin: boolean
  isMentor: boolean
  isUser: boolean
}

export interface IUserContext {
  user?: UserContextInfo
  setUser: (user: Omit<UserContextInfo, 'isAdmin' | 'isMentor' | 'isUser'>) => void
  clearUser: () => void
}

export const defaultUserContextInfoValues: Omit<UserContextInfo, 'isAdmin' | 'isMentor' | 'isUser'> = {
  experience: 0,
  login: '',
  roles: []
}

export const UserContext = createContext<IUserContext>({
  setUser: () => {},
  clearUser: () => {}
})

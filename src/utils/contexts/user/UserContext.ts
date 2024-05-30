import { createContext } from 'react'

export interface UserContextInfo {
  token: string
  email: string
}

export interface IUserContext {
  isAuth: boolean
  userInfo: UserContextInfo
  login: (userInfo: Omit<UserContextInfo, 'roles'>) => Promise<void>
  logout: () => void
}

export const defaultUserContextInfoValues: UserContextInfo = {
  email: '',
  token: ''
}

export const UserContext = createContext<IUserContext>({
  isAuth: false,
  userInfo: defaultUserContextInfoValues,
  login: () => Promise.resolve(),
  logout: () => {}
})

import { createContext } from 'react'

export interface SessionContextInfo {
  isAuth: boolean
  accessToken: string
  refreshToken: string
}

export interface SessionContext {
  session: SessionContextInfo
  login: (session: Omit<SessionContextInfo, 'isAuth'>) => void
  logout: () => void
}

export const defaultSessionContextInfoValues: SessionContextInfo = {
  isAuth: false,
  accessToken: '',
  refreshToken: ''
}

export const SessionContext = createContext<SessionContext>({
  session: defaultSessionContextInfoValues,
  login: () => {},
  logout: () => {}
})

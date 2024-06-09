import { instance } from '@/utils/api/'
import { LOCAL_STORAGE } from '@/utils/constants/'
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import React from 'react'
import { useSessionContext } from '../session'
import { useUserContext } from '../user'

export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSet, setIsSet] = React.useState(false)
  const sessionContext = useSessionContext()
  const userContext = useUserContext()

  React.useEffect(() => {
    setIsSet(true)
    const successResponseInterceptor = <T, D>(response: AxiosResponse<T, D>): T => response.data

    const errorResponseInterceptor = <T, D>(error: AxiosError<T, D>) => {
      if (
        error?.response?.status === 401 &&
        sessionContext.session.isAuth &&
        !error.config?.url?.includes('refresh')
      ) {
        //TODO refresh request
      }

      if (
        error?.response?.status === 401 &&
        sessionContext.session.isAuth &&
        !error.config?.url?.includes('refresh')
      ) {
        userContext.clearUser()
        sessionContext.logout()
      }

      return Promise.reject(error)
    }

    const responseInterceptors = instance.interceptors.response.use(
      successResponseInterceptor,
      errorResponseInterceptor
    )

    const errorRequestInterceptor = <T, D>(error: AxiosError<T, D>) => Promise.reject(error)

    const successRequestInterceptor = (config: InternalAxiosRequestConfig) => {
      const session = JSON.parse(localStorage.getItem(LOCAL_STORAGE.SESSION) ?? '')
      if (!!session) config.headers.Authorization = `Bearer ${session.accessToken}`

      return config
    }

    const requestInterceptors = instance.interceptors.request.use(
      successRequestInterceptor,
      errorRequestInterceptor
    )

    return () => {
      instance.interceptors.response.eject(responseInterceptors)
      instance.interceptors.request.eject(requestInterceptors)
    }
  }, [])

  return isSet && children
}

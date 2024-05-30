import { instance } from '@/utils/api/'
import { LOCAL_STORAGE } from '@/utils/constants/'
import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import React from 'react'
import { useUserContext } from '../user/useUserContext'

export const AxiosProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSet, setIsSet] = React.useState(false)
  const { isAuth, logout } = useUserContext()

  React.useEffect(() => {
    setIsSet(true)
    const successResponseInterceptor = <T, D>(response: AxiosResponse<T, D>) => response

    const errorResponseInterceptor = <T, D>(error: AxiosError<T, D>) => {
      if (error?.response?.status === 401 && isAuth) {
        logout()
      }

      return Promise.reject(error)
    }

    const responseInterceptors = instance.interceptors.response.use(
      successResponseInterceptor,
      errorResponseInterceptor
    )

    const errorRequestInterceptor = <T, D>(error: AxiosError<T, D>) => Promise.reject(error)

    const successRequestInterceptor = (config: InternalAxiosRequestConfig) => {
      const userInfo = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER_INFO) ?? '')
      if (!!userInfo) config.headers.Authorization = `Bearer ${userInfo.token}`

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

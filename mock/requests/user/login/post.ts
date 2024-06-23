import { RestRequestConfig } from 'mock-config-server'
import '../../../database'

export const postUserLoginConfig: RestRequestConfig = {
  path: '/user/login',
  method: 'post',
  routes: [
    {
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(400)
          return data
        }
      },
      data: { message: 'Неверный логин или пароль' }
    },
    {
      entities: { body: { login: 'admin', password: 'Pa$$w0rd' } },
      data: {
        data: {
          accessToken: 'adminAccessToken',
          refreshToken: 'adminRefreshToken'
        }
      }
    },
    {
      entities: { body: { login: 'mentor', password: 'Pa$$w0rd' } },
      data: {
        data: {
          accessToken: 'mentorAccessToken',
          refreshToken: 'mentorRefreshToken'
        }
      }
    }
  ]
}

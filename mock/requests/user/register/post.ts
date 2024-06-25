import { randomUUID } from 'crypto'
import { RestRequestConfig } from 'mock-config-server'
import { PROFILE } from '../../../database'

export const postUserRegisterConfig: RestRequestConfig = {
  path: '/user/register',
  method: 'post',
  routes: [
    {
      interceptors: {
        response: (data, params) => {
          if (Array.isArray(PROFILE.USERS)) {
            PROFILE.USERS.push({
              ...params.request.body,
              id: randomUUID(),
              experience: 0,
              roles: ['USER']
            })
          }

          return data
        }
      },
      data: null
    }
  ]
}

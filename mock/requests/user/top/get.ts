import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../database'

export const getUserTopConfig: RestRequestConfig = {
  path: '/user/top',
  method: 'get',
  routes: [
    {
      data: {
        data: [
          DATABASE.PROFILE.ADMIN,
          DATABASE.PROFILE.MENTOR,
          ...(Array.isArray(DATABASE.PROFILE.USERS) ? DATABASE.PROFILE.USERS : [])
        ]
      }
    }
  ]
}

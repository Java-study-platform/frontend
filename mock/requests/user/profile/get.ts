import { RestRequestConfig } from 'mock-config-server'
import { PROFILE } from '../../../database/profile'

export const getUserProfileConfig: RestRequestConfig = {
  path: '/user/profile',
  method: 'get',
  routes: [
    {
      data: {
        data: PROFILE.ADMIN
      }
    }
  ]
}
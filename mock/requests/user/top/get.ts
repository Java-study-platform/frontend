import { RestRequestConfig } from 'mock-config-server'
import { PROFILE } from '../../../database/profile'

export const getUserTopConfig: RestRequestConfig = {
  path: '/user/top',
  method: 'get',
  routes: [
    {
      data: {
        data: [PROFILE.ADMIN, PROFILE.ADMIN]
      }
    }
  ]
}

import { RestRequestConfig } from 'mock-config-server'
import { PROFILE } from '../../../database'

export const getUserProfileConfig: RestRequestConfig = {
  path: '/user/profile/:username',
  method: 'get',
  routes: [
    {
      data: {
        data: PROFILE.ADMIN
      }
    }
  ]
}

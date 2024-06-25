import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../database'

export const getUserProfileConfig: RestRequestConfig = {
  path: '/user/profile/:username',
  method: 'get',
  routes: [
    {
      data: (request) => {
        if (request.headers.authorization?.includes('adminAccessToken')) {
          return { data: DATABASE.PROFILE.ADMIN }
        } else if (request.headers.authorization?.includes('mentorAccessToken')) {
          return { data: DATABASE.PROFILE.MENTOR }
        }

        return { data: DATABASE.PROFILE.USERS[0] }
      }
    }
  ]
}

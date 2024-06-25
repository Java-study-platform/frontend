import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../database'

export const getUserAchievementsConfig: RestRequestConfig = {
  path: '/user/achievements/:username',
  method: 'get',
  routes: [
    {
      data: DATABASE.ACHIEVEMENTS
    }
  ]
}

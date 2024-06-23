import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../database'

export const getUserAchievementsConfig: RestRequestConfig = {
  path: '/user/achievements',
  method: 'get',
  routes: [
    {
      data: DATABASE.ACHIEVEMENTS
    }
  ]
}

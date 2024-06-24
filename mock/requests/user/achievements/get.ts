import { RestRequestConfig } from 'mock-config-server'
import { ACHIEVEMENTS } from '../../../database'

export const getUserAchievementsConfig: RestRequestConfig = {
  path: '/user/achievements/:username',
  method: 'get',
  routes: [
    {
      data: ACHIEVEMENTS
    }
  ]
}

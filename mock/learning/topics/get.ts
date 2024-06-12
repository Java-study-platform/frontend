import { RestRequestConfig } from 'mock-config-server'
import { TOPICS } from '../../database/topics'

export const getLearningTopicsConfig: RestRequestConfig = {
  path: '/learning/topics',
  method: 'get',
  routes: [
    {
      data: TOPICS
    }
  ]
}

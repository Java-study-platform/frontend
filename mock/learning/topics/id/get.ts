import { RestRequestConfig } from 'mock-config-server'
import { TOPICS } from '../../../database/topics'

export const getLearningTopicsByIdConfig: RestRequestConfig = {
  path: '/learning/topics/:id',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const { id } = request.params
        return { data: TOPICS.find((topic) => topic.id === id) }
      }
    }
  ]
}

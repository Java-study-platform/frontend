import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const getLearningTopicsByIdConfig: RestRequestConfig = {
  path: '/learning/topics/:id',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const { id } = request.params
        return { data: DATABASE.TOPICS.find((topic) => topic.id === id) }
      }
    }
  ]
}

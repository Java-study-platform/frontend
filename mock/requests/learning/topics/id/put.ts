import type { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const putLearningTopicsByIdConfig: RestRequestConfig = {
  path: '/learning/topics/:id',
  method: 'put',
  interceptors: {
    response: (data, { request }) => {
      DATABASE.TOPICS = DATABASE.TOPICS.map((topic) => {
        if (topic.id === request.params.id) {
          return {
            ...topic,
            ...request.body
          }
        }
        return topic
      })
      return data
    }
  },
  routes: [
    {
      data: DATABASE.TOPICS[0]
    }
  ]
}

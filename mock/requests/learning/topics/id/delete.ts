import type { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const deleteLearningTopicsByIdConfig: RestRequestConfig = {
  path: '/learning/topics/:id',
  method: 'delete',
  interceptors: {
    response: (data, { request }) => {
      DATABASE.TOPICS = DATABASE.TOPICS.filter((topic) => topic.id !== request.params.id)
      DATABASE.CATEGORIES = DATABASE.CATEGORIES.map((category) => {
        if (category.topics?.find((topic) => topic.id === request.params.id)) {
          category.topics = category.topics.filter((topic) => topic.id !== request.params.id)
        }
        return { ...category }
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

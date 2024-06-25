import { randomUUID } from 'crypto'
import type { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const postLearningTopicsByCategoryIdConfig: RestRequestConfig = {
  path: '/learning/topics/:categoryId',
  method: 'post',
  interceptors: {
    response: (data, { request }) => {
      const newTopic = { id: randomUUID(), ...request.body, categoryId: request.params.categoryId }

      DATABASE.TOPICS.push(newTopic)
      DATABASE.CATEGORIES = DATABASE.CATEGORIES.map((category) => {
        if (category.id === request.params.categoryId) {
          return {
            ...category,
            topics: [...(category.topics ?? []), newTopic]
          }
        }
        return category
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

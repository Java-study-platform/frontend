import { randomUUID } from 'crypto'
import type { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../database'

export const postLearningCategoriesConfig: RestRequestConfig = {
  path: '/learning/categories',
  method: 'post',
  interceptors: {
    response: (data, { request }) => {
      DATABASE.CATEGORIES.push({ id: randomUUID(), ...request.body })
      return data
    }
  },
  routes: [
    {
      data: DATABASE.CATEGORIES[0]
    }
  ]
}

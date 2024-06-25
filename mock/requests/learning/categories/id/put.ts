import type { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const putLearningCategoriesByIdConfig: RestRequestConfig = {
  path: '/learning/categories/:id',
  method: 'put',
  interceptors: {
    response: (data, { request }) => {
      DATABASE.CATEGORIES = DATABASE.CATEGORIES.map((category) => {
        if (category.id === request.params.id) {
          return {
            ...category,
            ...request.body
          }
        }
        return category
      })
      return data
    }
  },
  routes: [
    {
      data: DATABASE.CATEGORIES[0]
    }
  ]
}

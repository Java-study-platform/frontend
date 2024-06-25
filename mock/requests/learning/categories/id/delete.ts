import type { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const deleteLearningCategoriesByIdConfig: RestRequestConfig = {
  path: '/learning/categories/:id',
  method: 'delete',
  interceptors: {
    response: (data, { request }) => {
      DATABASE.CATEGORIES = DATABASE.CATEGORIES.filter((category) => category.id !== request.params.id)
      return data
    }
  },
  routes: [
    {
      data: DATABASE.CATEGORIES[0]
    }
  ]
}

import { RestRequestConfig } from 'mock-config-server'
import { CATEGORIES } from '../../database/categories'

export const getLearningCategoriesConfig: RestRequestConfig = {
  path: '/learning/categories',
  method: 'get',
  routes: [
    {
      data: {
        data: {
          totalPages: 5,
          totalElements: 50,
          size: 10,
          content: CATEGORIES,
          pageable: { pageNumber: 0 }
        }
      }
    }
  ]
}

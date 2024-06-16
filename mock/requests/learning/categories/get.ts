import { RestRequestConfig } from 'mock-config-server'
import { CATEGORIES } from '../../../database/categories'

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
          content: CATEGORIES.slice(0, 10),
          pageable: { pageNumber: 0 }
        }
      }
    },
    {
      entities: { query: { page: 1 } },
      data: {
        data: {
          totalPages: 5,
          totalElements: 50,
          size: 10,
          content: CATEGORIES.slice(10, 20),
          pageable: { pageNumber: 1 }
        }
      }
    },
    {
      entities: { query: { queryText: 'a' } },
      data: {
        data: {
          totalPages: 1,
          totalElements: 10,
          size: 10,
          content: CATEGORIES.filter((task) => task.name?.toLowerCase()?.includes('a')),
          pageable: { pageNumber: 0 }
        }
      }
    }
  ]
}

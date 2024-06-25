import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../database'

const DEFAULT_SIZE = 10
const DEFAULT_PAGE = 0

export const getLearningCategoriesConfig: RestRequestConfig = {
  path: '/learning/categories',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const { queryText, page } = request.query

        let categories = DATABASE.CATEGORIES

        if (typeof queryText === 'string') {
          categories = categories.filter((category) =>
            category.name?.toLowerCase()?.includes(queryText.toLowerCase())
          )
        }

        return {
          data: {
            totalPages: categories.length / DEFAULT_SIZE,
            totalElements: categories.length,
            size: DEFAULT_SIZE,
            content: categories,
            pageable: { pageNumber: page ?? DEFAULT_PAGE }
          }
        }
      }
    }
  ]
}

import { RestRequestConfig } from 'mock-config-server'
import { TOPICS } from '../../../database/topics'

export const getLearningTopicsConfig: RestRequestConfig = {
  path: '/learning/topics',
  method: 'get',
  routes: [
    {
      data: {
        data: {
          totalPages: 5,
          totalElements: 50,
          size: 10,
          content: TOPICS.slice(0, 10),
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
          content: TOPICS.slice(10, 20),
          pageable: { pageNumber: 1 }
        }
      }
    },
    {
      entities: { query: { queryText: 'tr' } },
      data: {
        data: {
          totalPages: 1,
          totalElements: 10,
          size: 10,
          content: TOPICS.filter((task) => task.name?.toLowerCase()?.includes('tr')),
          pageable: { pageNumber: 0 }
        }
      }
    }
  ]
}

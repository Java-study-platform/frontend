import { RestRequestConfig } from 'mock-config-server'
import { TASKS } from '../../database/tasks'

export const getLearningTasksConfig: RestRequestConfig = {
  path: '/learning/tasks',
  method: 'get',
  routes: [
    {
      data: {
        data: {
          totalPages: 5,
          totalElements: 50,
          size: 10,
          content: TASKS.slice(0, 10),
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
          content: TASKS.slice(10, 20),
          pageable: { pageNumber: 1 }
        }
      }
    },
    {
      entities: { query: { queryText: 'da' } },
      data: {
        data: {
          totalPages: 1,
          totalElements: 10,
          size: 10,
          content: TASKS.filter((task) => task.name?.toLowerCase()?.includes('da')),
          pageable: { pageNumber: 0 }
        }
      }
    }
  ]
}

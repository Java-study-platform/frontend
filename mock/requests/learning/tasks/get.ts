import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../database'

const DEFAULT_SIZE = 10
const DEFAULT_PAGE = 0

export const getLearningTasksConfig: RestRequestConfig = {
  path: '/learning/tasks',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const { page } = request.query

        const tasks = DATABASE.TASKS

        return {
          data: {
            totalPages: tasks.length / DEFAULT_SIZE,
            totalElements: tasks.length,
            size: DEFAULT_SIZE,
            content: tasks,
            pageable: { pageNumber: page ?? DEFAULT_PAGE }
          }
        }
      }
    }
  ]
}

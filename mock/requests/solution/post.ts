import { randomUUID } from 'crypto'
import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../database'

export const postSolutionConfig: RestRequestConfig = {
  path: '/solution',
  method: 'post',
  routes: [
    {
      data: (request) => {
        const { taskId } = request.query
        DATABASE.USER_SOLUTIONS.push({
          id: randomUUID(),
          ...request.body,
          taskId
        })

        return { data: DATABASE.USER_SOLUTIONS }
      }
    }
  ]
}

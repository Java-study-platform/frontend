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
        const newSolution = {
          id: randomUUID(),
          ...request.body,
          taskId,
          status: 'PENDING'
        }
        DATABASE.USER_SOLUTIONS.push(newSolution)

        return { data: newSolution }
      }
    }
  ]
}

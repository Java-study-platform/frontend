import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const getSolutionTaskByTaskIdConfig: RestRequestConfig = {
  path: '/solution/task/:taskId',
  method: 'get',
  routes: [
    {
      data: {
        data: Object.values(DATABASE.SOLUTIONS)
      }
    }
  ]
}

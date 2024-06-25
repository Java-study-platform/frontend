import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../database'

export const getSolutionByTaskIdConfig: RestRequestConfig = {
  path: '/solution/:taskId',
  method: 'get',
  routes: [
    {
      data: {
        data: DATABASE.USER_SOLUTIONS
      }
    }
  ]
}

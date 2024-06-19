import { RestRequestConfig } from 'mock-config-server'
import { SOLUTIONS } from '../../../database'

export const getSolutionByTaskIdConfig: RestRequestConfig = {
  path: '/solution/DELETEME/:taskId',
  method: 'get',
  routes: [
    {
      data: {
        data: Object.values(SOLUTIONS)
      }
    }
  ]
}

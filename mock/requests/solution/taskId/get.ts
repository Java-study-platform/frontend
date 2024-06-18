import { RestRequestConfig } from 'mock-config-server'
import { SOLUTIONS } from '../../../database/solutions'

export const getSolutionByTaskIdConfig: RestRequestConfig = {
  path: '/solution/FIXME/:taskId',
  method: 'get',
  routes: [
    {
      data: {
        data: Object.values(SOLUTIONS)
      }
    }
  ]
}

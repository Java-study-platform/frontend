import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../database'

export const getSolutionTestsConfig: RestRequestConfig = {
  path: '/solution/tests',
  method: 'get',
  routes: [
    {
      data: {
        data: DATABASE.USER_TESTS
      }
    }
  ]
}

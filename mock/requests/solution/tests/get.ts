import { RestRequestConfig } from 'mock-config-server'
import { USER_TESTS } from '../../../database'

export const getSolutionTestsConfig: RestRequestConfig = {
  path: '/solution/tests',
  method: 'get',
  routes: [
    {
      data: {
        data: USER_TESTS
      }
    }
  ]
}

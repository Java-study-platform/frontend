import type { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../database'

export const deleteLearningTestConfig: RestRequestConfig = {
  path: '/learning/test',
  method: 'delete',
  interceptors: {
    response: (data, { request }) => {
      DATABASE.TEST_CASES = DATABASE.TEST_CASES.filter(
        (testCase) => testCase.id !== request.query.testId
      )

      return data
    }
  },
  routes: [
    {
      data: DATABASE.TEST_CASES[0]
    }
  ]
}

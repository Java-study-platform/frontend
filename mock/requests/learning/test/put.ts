import type { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../database'

export const putLearningTestConfig: RestRequestConfig = {
  path: '/learning/test',
  method: 'put',
  interceptors: {
    response: (data, { request }) => {
      DATABASE.TEST_CASES = DATABASE.TEST_CASES.map((testCase) => {
        if (testCase.id === request.query.testId) {
          return {
            ...testCase,
            ...request.body
          }
        }
        console.log(DATABASE.TEST_CASES)
        return testCase
      })
      return data
    }
  },
  routes: [
    {
      data: DATABASE.TEST_CASES[0]
    }
  ]
}

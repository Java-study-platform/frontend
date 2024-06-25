import { randomUUID } from 'crypto'
import type { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const postLearningTestsByTaskIdConfig: RestRequestConfig = {
  path: '/learning/tests/:taskId',
  method: 'post',
  interceptors: {
    response: (data, { request }) => {
      const newTestCase = { id: randomUUID(), ...request.body }

      DATABASE.TEST_CASES.push(newTestCase)

      return data
    }
  },
  routes: [
    {
      data: DATABASE.TEST_CASES[0]
    }
  ]
}

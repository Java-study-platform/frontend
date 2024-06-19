import { RestRequestConfig } from 'mock-config-server'
import { TEST_CASES } from '../../../../database'

export const getLearningTestsByTaskId: RestRequestConfig = {
  path: '/learning/tests/:taskId',
  method: 'get',
  routes: [{ data: TEST_CASES }]
}

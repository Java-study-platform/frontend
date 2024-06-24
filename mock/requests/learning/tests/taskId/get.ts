import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const getLearningTestsByTaskId: RestRequestConfig = {
  path: '/learning/tests/:taskId',
  method: 'get',
  routes: [{ data: () => DATABASE.TEST_CASES }]
}

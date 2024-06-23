import { randomUUID } from 'crypto'
import type { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const postLearningTasksByTopicIdConfig: RestRequestConfig = {
  path: '/learning/tasks/:topicId',
  method: 'post',
  interceptors: {
    response: (data, { request }) => {
      DATABASE.TASKS.push({ id: randomUUID(), ...request.body, topicId: request.params.topicId })
      return data
    }
  },
  routes: [
    {
      data: DATABASE.TASKS[0]
    }
  ]
}

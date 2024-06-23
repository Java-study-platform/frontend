import type { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const putLearningTasksByIdConfig: RestRequestConfig = {
  path: '/learning/tasks/:id',
  method: 'put',
  interceptors: {
    response: (data, { request }) => {
      DATABASE.TASKS = DATABASE.TASKS.map((task) => {
        if (task.id === request.params.id) {
          return {
            ...task,
            ...request.body
          }
        }
        return task
      })
      return data
    }
  },
  routes: [
    {
      data: DATABASE.TASKS[0]
    }
  ]
}

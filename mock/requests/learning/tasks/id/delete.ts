import type { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const deleteLearningTasksByIdConfig: RestRequestConfig = {
  path: '/learning/tasks/:id',
  method: 'delete',
  interceptors: {
    response: (data, { request }) => {
      DATABASE.TASKS = DATABASE.TASKS.filter((task) => task.id !== request.params.id)
      DATABASE.TOPICS = DATABASE.TOPICS.map((topic) => {
        if (topic.tasks?.find((topic) => topic.id === request.params.id)) {
          topic.tasks = topic.tasks.filter((task) => task.id !== request.params.id)
        }
        return { ...topic }
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

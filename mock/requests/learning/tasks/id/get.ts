import { RestRequestConfig } from 'mock-config-server'
import { TASKS } from '../../../../database'

export const getLearningTasksByIdConfig: RestRequestConfig = {
  path: '/learning/tasks/:id',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const { id } = request.params
        return { data: TASKS.find((task) => task.id === id) }
      }
    }
  ]
}

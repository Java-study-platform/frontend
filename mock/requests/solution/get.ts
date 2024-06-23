import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../database'

export const getSolutionConfig: RestRequestConfig = {
  path: '/solution',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const { solutionId } = request.query
        return { data: Object.values(DATABASE.SOLUTIONS).find((solution) => solution.id === solutionId) }
      }
    }
  ]
}

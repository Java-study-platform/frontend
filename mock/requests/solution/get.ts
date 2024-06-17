import { RestRequestConfig } from 'mock-config-server'
import { SOLUTIONS } from '../../database/solutions'

export const getSolutionConfig: RestRequestConfig = {
  path: '/solution',
  method: 'get',
  routes: [
    {
      data: (request) => {
        const { solutionId } = request.query
        return { data: Object.values(SOLUTIONS).find((solution) => solution.id === solutionId) }
      }
    }
  ]
}

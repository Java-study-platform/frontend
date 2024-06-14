import { RestRequestConfig } from 'mock-config-server'
import { TOPICS } from '../../database/topics'

export const getLearningTopicsConfig: RestRequestConfig = {
  path: '/learning/topics',
  method: 'get',
  routes: [
    {
      data: {
        data: {
          totalPages: 5,
          totalElements: 50,
          size: 10,
          content: TOPICS,
          pageable: { pageNumber: 0 }
        }
      }
    }
  ]
}

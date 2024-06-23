import { RestRequestConfig } from 'mock-config-server'
import { DATABASE } from '../../../../database'

export const getLearningChatsByIdConfig: RestRequestConfig = {
  path: '/learning/chats/:id',
  method: 'get',
  routes: [
    {
      data: {
        data: DATABASE.MESSAGES
      }
    }
  ]
}

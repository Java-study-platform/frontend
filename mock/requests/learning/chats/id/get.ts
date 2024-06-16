import { RestRequestConfig } from 'mock-config-server'
import { MESSAGES } from '../../../../database/messages'

export const getLearningChatsByIdConfig: RestRequestConfig = {
  path: '/learning/chats/:id',
  method: 'get',
  routes: [
    {
      data: {
        data: MESSAGES
      }
    }
  ]
}
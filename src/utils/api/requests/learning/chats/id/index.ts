import { DefaultResponseListMessageDTO } from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export interface GetLearningChatsByIdRequestParams {
  id: string
}

export const getLearningChatsById = ({
  params,
  config
}: RequestOptions<GetLearningChatsByIdRequestParams>) =>
  instance.get<DefaultResponseListMessageDTO>(`/learning/chats/${params.id}`, config)

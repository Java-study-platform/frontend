import { CreateTaskModel, DefaultResponseTaskDTO } from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export interface PostLearningTasksByTopicIdRequestParams extends CreateTaskModel {
  topicId: string
}

export const postLearningTasksByTopicId = ({
  params: { topicId, ...params },
  config
}: RequestOptions<PostLearningTasksByTopicIdRequestParams>) =>
  instance.post<DefaultResponseTaskDTO>(`/learning/tasks/${topicId}`, params, config)

import { CreateTopicModel, DefaultResponseTopicDTO } from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export interface PostLearningTopicsByCategoryIdRequestParams extends CreateTopicModel {
  categoryId: string
}

export const postLearningTopicsByCategoryId = ({
  params: { categoryId, ...params },
  config
}: RequestOptions<PostLearningTopicsByCategoryIdRequestParams>) =>
  instance.post<DefaultResponseTopicDTO>(`/learning/topics/${categoryId}`, params, config)

import { DefaultResponseTopicDTO, EditTopicModel } from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export interface PutLearningTopicsByIdRequestParams extends EditTopicModel {
  id: string
}

export const putLearningTopicsById = ({
  params: { id, ...params },
  config
}: RequestOptions<PutLearningTopicsByIdRequestParams>) =>
  instance.put<DefaultResponseTopicDTO>(`/learning/topics/${id}`, params, config)

export interface DeleteLearningTopicsByIdRequestParams {
  id: string
}

export const deleteLearningTopicsById = ({
  params,
  config
}: RequestOptions<DeleteLearningTopicsByIdRequestParams>) =>
  instance.delete<DefaultResponseTopicDTO>(`/learning/topics/${params.id}`, config)

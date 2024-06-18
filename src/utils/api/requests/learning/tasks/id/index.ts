import { DefaultResponseTaskDTO, EditTaskModel } from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export interface GetLearningTasksByIdRequestParams {
  id: string
}

export const getLearningTasksById = ({
  params,
  config
}: RequestOptions<GetLearningTasksByIdRequestParams>) =>
  instance.get<DefaultResponseTaskDTO>(`/learning/tasks/${params.id}`, config)

export interface PutLearningTasksByIdRequestParams extends EditTaskModel {
  id: string
}

export const putLearningTasksById = ({
  params: { id, ...params },
  config
}: RequestOptions<PutLearningTasksByIdRequestParams>) =>
  instance.put<DefaultResponseTaskDTO>(`/learning/tasks/${id}`, params, config)

export interface DeleteLearningTasksByIdRequestParams {
  id: string
}

export const deleteLearningTasksById = ({
  params,
  config
}: RequestOptions<DeleteLearningTasksByIdRequestParams>) =>
  instance.delete<DefaultResponseTaskDTO>(`/learning/tasks/${params.id}`, config)

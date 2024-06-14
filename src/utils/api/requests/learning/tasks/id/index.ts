import { DefaultResponseTaskDTO, EditTaskModel } from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export interface PutLearningTasksByIdRequestParams extends EditTaskModel {
  id: string
}

export const putLearningTasksById = ({
  params: { id, ...params },
  config
}: RequestOptions<PutLearningTasksByIdRequestParams>) =>
  instance.put<DefaultResponseTaskDTO>(`/learning/Tasks/${id}`, params, config)

export interface DeleteLearningTasksByIdRequestParams {
  id: string
}

export const deleteLearningTasksById = ({
  params,
  config
}: RequestOptions<DeleteLearningTasksByIdRequestParams>) =>
  instance.delete<DefaultResponseTaskDTO>(`/learning/Tasks/${params.id}`, config)

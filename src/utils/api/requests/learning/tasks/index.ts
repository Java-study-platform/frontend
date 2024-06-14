import { DefaultResponsePageTopicDTO } from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export interface GetLearningTasksRequestParams {
  queryText?: string
  page?: number
  size?: number
  sort?: string[]
}

export const getLearningTasks = ({ params, config }: RequestOptions<GetLearningTasksRequestParams>) =>
  instance.get<DefaultResponsePageTopicDTO>('/learning/tasks', {
    ...config,
    params: { ...config?.params, ...params }
  })

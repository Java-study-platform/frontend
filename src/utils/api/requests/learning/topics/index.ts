import { DefaultResponsePageTopicDTO } from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export interface GetLearningTopicsRequestParams {
  queryText?: string
  page?: number
  size?: number
  sort?: string[]
}

export const getLearningTopics = ({ params, config }: RequestOptions<GetLearningTopicsRequestParams>) =>
  instance.get<DefaultResponsePageTopicDTO>('/learning/topics', {
    ...config,
    params: { ...config?.params, ...params }
  })

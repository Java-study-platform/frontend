import { DefaultResponseTopicDTO } from '@/generated/core-api'
import { instance } from '@/utils/api/instance'

export const getLearningTopicsProfile = (options?: RequestOptions) =>
  instance.get<DefaultResponseTopicDTO>('/learning/topics/', options?.config)

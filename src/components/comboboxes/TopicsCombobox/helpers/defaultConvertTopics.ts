import { TopicDTO } from '@/generated/core-api'

export const defaultConvertTopics = (topics: TopicDTO[]) =>
  topics.map((topics) => ({
    label: topics.name!,
    value: topics.id!
  }))

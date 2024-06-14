import { useMutation } from '@tanstack/react-query'
import { postLearningTopicsByCategoryId, PostLearningTopicsByCategoryIdRequestParams } from '../requests'

export const usePostLearningTopicsByCategoryIdMutation = (
  settings?: MutationSettings<
    PostLearningTopicsByCategoryIdRequestParams,
    typeof postLearningTopicsByCategoryId
  >
) =>
  useMutation({
    mutationKey: ['postLearningTopicsByCategoryId'],
    mutationFn: (params) =>
      postLearningTopicsByCategoryId({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

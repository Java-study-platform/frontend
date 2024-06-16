import { useMutation } from '@tanstack/react-query'
import { postLearningTasksByTopicId, PostLearningTasksByTopicIdRequestParams } from '../requests'

export const usePostLearningTasksByTopicIdMutation = (
  settings?: MutationSettings<PostLearningTasksByTopicIdRequestParams, typeof postLearningTasksByTopicId>
) =>
  useMutation({
    mutationKey: ['postLearningTasksByTopicId'],
    mutationFn: (params) =>
      postLearningTasksByTopicId({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

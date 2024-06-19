import { useMutation } from '@tanstack/react-query'
import { postLearningTestsByTaskId, PostLearningTestsByTaskIdRequestParams } from '../requests'

export const usePostLearningTestsByTaskIdMutation = (
  settings?: MutationSettings<PostLearningTestsByTaskIdRequestParams, typeof postLearningTestsByTaskId>
) =>
  useMutation({
    mutationKey: ['postLearningTestsByTaskId'],
    mutationFn: (params) =>
      postLearningTestsByTaskId({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

import { useMutation } from '@tanstack/react-query'
import { putLearningTest, PutLearningTestRequestParams } from '../requests'

export const usePutLearningTestMutation = (
  settings?: MutationSettings<PutLearningTestRequestParams, typeof putLearningTest>
) =>
  useMutation({
    mutationKey: ['putLearningTest'],
    mutationFn: (params) =>
      putLearningTest({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

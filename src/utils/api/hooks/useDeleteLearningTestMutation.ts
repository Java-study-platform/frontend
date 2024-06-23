import { useMutation } from '@tanstack/react-query'
import { deleteLearningTest, DeleteLearningTestRequestParams } from '../requests'

export const useDeleteLearningTestMutation = (
  settings?: MutationSettings<DeleteLearningTestRequestParams, typeof deleteLearningTest>
) =>
  useMutation({
    mutationKey: ['deleteLearningTest'],
    mutationFn: (params) =>
      deleteLearningTest({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

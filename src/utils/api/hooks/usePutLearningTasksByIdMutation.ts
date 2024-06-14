import { useMutation } from '@tanstack/react-query'
import { putLearningTasksById, PutLearningTasksByIdRequestParams } from '../requests'

export const usePutLearningTasksByIdMutation = (
  settings?: MutationSettings<PutLearningTasksByIdRequestParams, typeof putLearningTasksById>
) =>
  useMutation({
    mutationKey: ['putLearningTasksById'],
    mutationFn: (params) =>
      putLearningTasksById({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

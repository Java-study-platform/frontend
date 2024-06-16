import { useMutation } from '@tanstack/react-query'
import { deleteLearningTasksById, DeleteLearningTasksByIdRequestParams } from '../requests'

export const useDeleteLearningTasksByIdMutation = (
  settings?: MutationSettings<DeleteLearningTasksByIdRequestParams, typeof deleteLearningTasksById>
) =>
  useMutation({
    mutationKey: ['deleteLearningTasksById'],
    mutationFn: (params) =>
      deleteLearningTasksById({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

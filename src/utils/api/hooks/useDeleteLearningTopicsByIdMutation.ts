import { useMutation } from '@tanstack/react-query'
import { deleteLearningTopicsById, DeleteLearningTopicsByIdRequestParams } from '../requests'

export const useDeleteLearningTopicsByIdMutation = (
  settings?: MutationSettings<DeleteLearningTopicsByIdRequestParams, typeof deleteLearningTopicsById>
) =>
  useMutation({
    mutationKey: ['deleteLearningTopicsById'],
    mutationFn: (params) =>
      deleteLearningTopicsById({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

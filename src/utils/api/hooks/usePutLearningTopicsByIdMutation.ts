import { useMutation } from '@tanstack/react-query'
import { putLearningTopicsById, PutLearningTopicsByIdRequestParams } from '../requests'

export const usePutLearningTopicsByIdMutation = (
  settings?: MutationSettings<PutLearningTopicsByIdRequestParams, typeof putLearningTopicsById>
) =>
  useMutation({
    mutationKey: ['putLearningTopicsById'],
    mutationFn: (params) =>
      putLearningTopicsById({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

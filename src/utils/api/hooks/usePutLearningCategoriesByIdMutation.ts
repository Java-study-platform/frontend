import { useMutation } from '@tanstack/react-query'
import { putLearningCategoriesById, PutLearningCategoriesByIdRequestParams } from '../requests'

export const usePutLearningCategoriesByIdMutation = (
  settings?: MutationSettings<PutLearningCategoriesByIdRequestParams, typeof putLearningCategoriesById>
) =>
  useMutation({
    mutationKey: ['putLearningCategoriesById'],
    mutationFn: (params) =>
      putLearningCategoriesById({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

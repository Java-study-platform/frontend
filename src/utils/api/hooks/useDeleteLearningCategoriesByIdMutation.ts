import { useMutation } from '@tanstack/react-query'
import { deleteLearningCategoriesById, DeleteLearningCategoriesByIdRequestParams } from '../requests'

export const useDeleteLearningCategoriesByIdMutation = (
  settings?: MutationSettings<
    DeleteLearningCategoriesByIdRequestParams,
    typeof deleteLearningCategoriesById
  >
) =>
  useMutation({
    mutationKey: ['deleteLearningCategoriesById'],
    mutationFn: (params) =>
      deleteLearningCategoriesById({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

import { useMutation } from '@tanstack/react-query'
import { postLearningCategories, PostLearningCategoriesRequestParams } from '../requests'

export const usePostLearningCategoriesMutation = (
  settings?: MutationSettings<PostLearningCategoriesRequestParams, typeof postLearningCategories>
) =>
  useMutation({
    mutationKey: ['postLearningCategories'],
    mutationFn: (params) =>
      postLearningCategories({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

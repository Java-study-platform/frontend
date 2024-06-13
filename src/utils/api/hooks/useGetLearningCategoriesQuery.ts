import { useQuery } from '@tanstack/react-query'
import { getLearningCategories, GetLearningCategoriesRequestParams } from '../requests'

export const useGetLearningCategoriesQuery = (
  params: GetLearningCategoriesRequestParams,
  settings?: QuerySettings<typeof getLearningCategories>
) =>
  useQuery({
    queryKey: ['getLearningCategories'],
    queryFn: () =>
      getLearningCategories({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

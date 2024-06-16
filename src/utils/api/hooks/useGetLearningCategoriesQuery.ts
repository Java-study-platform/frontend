import { useQuery } from '@tanstack/react-query'
import { getLearningCategories, GetLearningCategoriesRequestParams } from '../requests'

export const useGetLearningCategoriesQuery = (
  params: GetLearningCategoriesRequestParams,
  settings?: QuerySettings<typeof getLearningCategories>
) =>
  useQuery({
    queryKey: ['getLearningCategories', params.page, params.size, params.sort, params.queryText],
    queryFn: () =>
      getLearningCategories({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })

import { useQuery } from '@tanstack/react-query'
import { getLearningTasks, GetLearningTasksRequestParams } from '../requests'

export const useGetLearningTasksQuery = (
  params: GetLearningTasksRequestParams,
  settings?: QuerySettings<typeof getLearningTasks>
) =>
  useQuery({
    queryKey: ['getLearningTasks', params.page, params.size, params.sort, params.queryText],
    queryFn: () => getLearningTasks({ params, ...(settings?.config && { config: settings.config }) }),
    ...settings?.options
  })
